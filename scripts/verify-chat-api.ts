/**
 * Isolated Local Test for api/chat.ts Handler
 * 
 * IMPORTANT NOTE:
 * This script runs locally to verify handler logic, payload validation, and
 * grounded fallback formatting. It does NOT substitute for live Vercel
 * deployment integration testing on the Preview URL.
 */

import handler, { getGroundedPortfolioReply } from '../api/chat';

interface MockResponse {
  statusCode: number;
  data: any;
  status(code: number): MockResponse;
  json(payload: any): MockResponse;
}

function createMockResponse(): MockResponse {
  const res: MockResponse = {
    statusCode: 200,
    data: null,
    status(code: number) {
      this.statusCode = code;
      return this;
    },
    json(payload: any) {
      this.data = payload;
      return this;
    }
  };
  return res;
}

async function runTests() {
  console.log('🧪 Starting Isolated Handler Tests for api/chat.ts...\n');
  let passed = 0;
  let total = 0;

  // Test 1: Method validation (GET should be rejected with 405)
  total++;
  const reqGet: any = { method: 'GET', body: {} };
  const resGet = createMockResponse();
  await handler(reqGet, resGet as any);
  if (resGet.statusCode === 405 && resGet.data?.error === 'Method Not Allowed') {
    console.log('✅ Test 1 Passed: GET method correctly rejected with 405 Method Not Allowed.');
    passed++;
  } else {
    console.error('❌ Test 1 Failed: Expected 405 for GET, got', resGet.statusCode, resGet.data);
  }

  // Test 2: Payload validation (missing message rejected with 400)
  total++;
  const reqEmpty: any = { method: 'POST', body: {} };
  const resEmpty = createMockResponse();
  await handler(reqEmpty, resEmpty as any);
  if (resEmpty.statusCode === 400 && resEmpty.data?.error === 'Message is required') {
    console.log('✅ Test 2 Passed: Missing message payload correctly rejected with 400.');
    passed++;
  } else {
    console.error('❌ Test 2 Failed: Expected 400 for empty body, got', resEmpty.statusCode, resEmpty.data);
  }

  // Test 3: Grounded fallback response when GEMINI_API_KEY is not provided
  total++;
  const reqPost: any = {
    method: 'POST',
    body: {
      message: 'Tell me about the OrbitDesk project'
    }
  };
  const resPost = createMockResponse();
  await handler(reqPost, resPost as any);
  if (
    resPost.statusCode === 200 &&
    resPost.data?.source === 'grounded_knowledge_base' &&
    typeof resPost.data?.reply === 'string' &&
    resPost.data.reply.includes('[Verified Portfolio Knowledge Base]') &&
    resPost.data.reply.includes('OrbitDesk')
  ) {
    console.log('✅ Test 3 Passed: Grounded fallback correctly responds with honest label & verified OrbitDesk data.');
    passed++;
  } else {
    console.error('❌ Test 3 Failed: Unexpected response format', resPost.statusCode, resPost.data);
  }

  // Test 4: Pure grounded portfolio reply helper function
  total++;
  const replyDirect = getGroundedPortfolioReply('What is your experience at Hub9?');
  if (replyDirect.includes('Hub9 Software') && replyDirect.includes('Playwright')) {
    console.log('✅ Test 4 Passed: Direct knowledge-base query returns verified Hub9 experience.');
    passed++;
  } else {
    console.error('❌ Test 4 Failed: Expected Hub9 details, got:', replyDirect);
  }

  // Test 5: Stringified JSON body support
  total++;
  const reqStringBody: any = {
    method: 'POST',
    body: JSON.stringify({ message: 'What tools do you use?' })
  };
  const resStringBody = createMockResponse();
  await handler(reqStringBody, resStringBody as any);
  if (
    resStringBody.statusCode === 200 &&
    resStringBody.data?.source === 'grounded_knowledge_base' &&
    resStringBody.data?.reply?.includes('[Verified Portfolio Knowledge Base]')
  ) {
    console.log('✅ Test 5 Passed: Stringified JSON request body parsed and answered correctly.');
    passed++;
  } else {
    console.error('❌ Test 5 Failed: Stringified body handling failed', resStringBody.statusCode, resStringBody.data);
  }

  console.log(`\n📊 Test Summary: ${passed}/${total} tests passed.\n`);

  if (passed !== total) {
    process.exit(1);
  }
}

runTests().catch(err => {
  console.error('Unhandled test runner error:', err);
  process.exit(1);
});
