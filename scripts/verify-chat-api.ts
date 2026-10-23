/**
 * Isolated Local Test Suite for api/chat.ts
 * 
 * Tests:
 * 1. Method validation (GET rejected with 405)
 * 2. Payload validation (missing message rejected with 400)
 * 3. Grounded fallback when GEMINI_API_KEY is not configured
 * 4. Grounded fallback for verified Hub9 experience
 * 5. Grounded fallback for verified Education (MIT AOE, B.Tech)
 * 6. Grounded fallback for verified Certifications (HackerRank, NPTEL)
 * 7. Greeting distinction (explicit greeting produces introductory twin overview)
 * 8. Unknown question handling (unmatched questions explicitly state information is not available)
 * 9. Stringified JSON body support
 * 10. Successful Gemini generation (returns response and attempts === 1)
 * 11. Transient 503 retry (fails attempt 1 with 503 UNAVAILABLE, succeeds on attempt 2 -> attempts === 2)
 * 12. Permanent error rejection (HTTP 401 thrown immediately without retry -> attempts === 1)
 * 13. Permanent error rejection (HTTP 404 thrown immediately without retry -> attempts === 1)
 * 14. Permanent error rejection (HTTP 429 thrown immediately without retry -> attempts === 1)
 * 15. Timeout rejection (no retry on timeout -> attempts === 1)
 */

import handler, { getGroundedPortfolioReply, executeChatGeneration, GeminiClientLike } from '../api/chat';

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
  console.log('🧪 Starting Comprehensive Handler & Reliability Tests for api/chat.ts...\n');
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
    body: { message: 'Tell me about the OrbitDesk project' }
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

  // Test 4: Pure grounded portfolio reply helper function for Hub9
  total++;
  const replyHub9 = getGroundedPortfolioReply('What is your experience at Hub9?');
  if (replyHub9.includes('Hub9 Software') && replyHub9.includes('Playwright')) {
    console.log('✅ Test 4 Passed: Direct knowledge-base query returns verified Hub9 experience.');
    passed++;
  } else {
    console.error('❌ Test 4 Failed: Expected Hub9 details, got:', replyHub9);
  }

  // Test 5: Verified Education matcher
  total++;
  const replyEducation = getGroundedPortfolioReply('Where did Yogesh study his degree?');
  if (replyEducation.includes('MIT Academy of Engineering') && replyEducation.includes('B.Tech')) {
    console.log('✅ Test 5 Passed: Knowledge-base query returns verified MIT AOE education.');
    passed++;
  } else {
    console.error('❌ Test 5 Failed: Expected education details, got:', replyEducation);
  }

  // Test 6: Verified Certifications matcher
  total++;
  const replyCerts = getGroundedPortfolioReply('What certifications does Yogesh have?');
  if (replyCerts.includes('HackerRank') && replyCerts.includes('NPTEL')) {
    console.log('✅ Test 6 Passed: Knowledge-base query returns verified certifications.');
    passed++;
  } else {
    console.error('❌ Test 6 Failed: Expected certification details, got:', replyCerts);
  }

  // Test 7: Greeting vs unknown distinction - greeting query
  total++;
  const replyGreeting = getGroundedPortfolioReply('hello, who are you?');
  if (replyGreeting.includes("digital twin") && !replyGreeting.includes("I do not have verified information")) {
    console.log('✅ Test 7 Passed: Greeting returns introductory digital twin overview.');
    passed++;
  } else {
    console.error('❌ Test 7 Failed: Expected greeting overview, got:', replyGreeting);
  }

  // Test 8: Unknown question fallback (explicitly states not available, does not invent)
  total++;
  const replyUnknown = getGroundedPortfolioReply('Can Yogesh play the violin?');
  if (
    replyUnknown.includes('I do not have verified information in Yogesh\'s portfolio regarding that specific question') &&
    replyUnknown.includes('Playwright')
  ) {
    console.log('✅ Test 8 Passed: Unknown question explicitly reports information is unavailable and suggests valid topics.');
    passed++;
  } else {
    console.error('❌ Test 8 Failed: Expected honest unavailable notice, got:', replyUnknown);
  }

  // Test 9: Stringified JSON body support
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
    console.log('✅ Test 9 Passed: Stringified JSON request body parsed and answered correctly.');
    passed++;
  } else {
    console.error('❌ Test 9 Failed: Stringified body handling failed', resStringBody.statusCode, resStringBody.data);
  }

  // Test 10: Successful Gemini generation via executeChatGeneration
  total++;
  let mockCalls = 0;
  const mockAiSuccess: GeminiClientLike = {
    models: {
      generateContent: async () => {
        mockCalls++;
        return { text: 'Live Gemini response text from model' };
      }
    }
  };
  const successRes = await executeChatGeneration(mockAiSuccess, 'gemini-2.5-flash', [], '', 8500);
  if (successRes.text === 'Live Gemini response text from model' && successRes.attempts === 1 && mockCalls === 1) {
    console.log('✅ Test 10 Passed: Successful generation returns response in 1 attempt.');
    passed++;
  } else {
    console.error('❌ Test 10 Failed:', successRes, mockCalls);
  }

  // Test 11: One retry after transient 503 UNAVAILABLE
  total++;
  let attemptsCount503 = 0;
  const mockAi503: GeminiClientLike = {
    models: {
      generateContent: async () => {
        attemptsCount503++;
        if (attemptsCount503 === 1) {
          const err: any = new Error('This model is currently experiencing high demand.');
          err.status = 503;
          throw err;
        }
        return { text: 'Successful reply on attempt 2' };
      }
    }
  };
  const res503 = await executeChatGeneration(mockAi503, 'gemini-2.5-flash', [], '', 8500);
  if (res503.text === 'Successful reply on attempt 2' && res503.attempts === 2 && attemptsCount503 === 2) {
    console.log('✅ Test 11 Passed: Transient 503 triggers exactly 1 retry with short backoff and succeeds.');
    passed++;
  } else {
    console.error('❌ Test 11 Failed:', res503, attemptsCount503);
  }

  // Test 12: No retry for permanent 401 error
  total++;
  let attemptsCount401 = 0;
  const mockAi401: GeminiClientLike = {
    models: {
      generateContent: async () => {
        attemptsCount401++;
        const err: any = new Error('API key not valid.');
        err.status = 401;
        throw err;
      }
    }
  };
  try {
    await executeChatGeneration(mockAi401, 'gemini-2.5-flash', [], '', 8500);
    console.error('❌ Test 12 Failed: Expected 401 error to throw.');
  } catch (err: any) {
    if (err.status === 401 && attemptsCount401 === 1) {
      console.log('✅ Test 12 Passed: Permanent 401 rejected immediately without retry (attempts: 1).');
      passed++;
    } else {
      console.error('❌ Test 12 Failed: Unexpected attempts count or error', attemptsCount401, err);
    }
  }

  // Test 13: No retry for permanent 404 error
  total++;
  let attemptsCount404 = 0;
  const mockAi404: GeminiClientLike = {
    models: {
      generateContent: async () => {
        attemptsCount404++;
        const err: any = new Error('Model not found.');
        err.status = 404;
        throw err;
      }
    }
  };
  try {
    await executeChatGeneration(mockAi404, 'gemini-2.5-flash', [], '', 8500);
    console.error('❌ Test 13 Failed: Expected 404 error to throw.');
  } catch (err: any) {
    if (err.status === 404 && attemptsCount404 === 1) {
      console.log('✅ Test 13 Passed: Permanent 404 rejected immediately without retry (attempts: 1).');
      passed++;
    } else {
      console.error('❌ Test 13 Failed: Unexpected attempts count or error', attemptsCount404, err);
    }
  }

  // Test 14: No retry for 429 quota exhaustion
  total++;
  let attemptsCount429 = 0;
  const mockAi429: GeminiClientLike = {
    models: {
      generateContent: async () => {
        attemptsCount429++;
        const err: any = new Error('Quota exceeded RESOURCE_EXHAUSTED');
        err.status = 429;
        throw err;
      }
    }
  };
  try {
    await executeChatGeneration(mockAi429, 'gemini-2.5-flash', [], '', 8500);
    console.error('❌ Test 14 Failed: Expected 429 error to throw.');
  } catch (err: any) {
    if (err.status === 429 && attemptsCount429 === 1) {
      console.log('✅ Test 14 Passed: 429 rate limit rejected immediately without retry (attempts: 1).');
      passed++;
    } else {
      console.error('❌ Test 14 Failed: Unexpected attempts count or error', attemptsCount429, err);
    }
  }

  // Test 15: No retry for timeout
  total++;
  let attemptsCountTimeout = 0;
  const mockAiTimeout: GeminiClientLike = {
    models: {
      generateContent: async () => {
        attemptsCountTimeout++;
        await new Promise(r => setTimeout(r, 500));
        return { text: 'late' };
      }
    }
  };
  try {
    await executeChatGeneration(mockAiTimeout, 'gemini-2.5-flash', [], '', 100);
    console.error('❌ Test 15 Failed: Expected timeout error to throw.');
  } catch (err: any) {
    if (err.message === 'timeout' && attemptsCountTimeout === 0) {
      console.log('✅ Test 15 Passed: Insufficient time budget triggers timeout immediately without retry.');
      passed++;
    } else {
      console.error('❌ Test 15 Failed: Unexpected timeout error behavior', attemptsCountTimeout, err);
    }
  }

  // Test 16: No retry for 503 if remaining budget is insufficient (timeRemaining <= 3000ms)
  total++;
  let attemptsCountInsufficient = 0;
  const mockAiInsufficient: GeminiClientLike = {
    models: {
      generateContent: async () => {
        attemptsCountInsufficient++;
        const err: any = new Error('Model overloaded');
        err.status = 503;
        throw err;
      }
    }
  };
  try {
    // Total budget of 2500ms means timeRemaining < 3000ms, forbidding a retry
    await executeChatGeneration(mockAiInsufficient, 'gemini-2.5-flash', [], '', 2500);
    console.error('❌ Test 16 Failed: Expected 503 error to throw due to insufficient remaining budget.');
  } catch (err: any) {
    if (err.status === 503 && attemptsCountInsufficient === 1) {
      console.log('✅ Test 16 Passed: 503 with insufficient remaining budget (<=3000ms) rejected immediately without retry.');
      passed++;
    } else {
      console.error('❌ Test 16 Failed: Expected 1 attempt due to tight budget, got:', attemptsCountInsufficient, err);
    }
  }

  // Test 17: Double 503 failure caps at exactly 2 attempts and throws
  total++;
  let attemptsCountDouble503 = 0;
  const mockAiDouble503: GeminiClientLike = {
    models: {
      generateContent: async () => {
        attemptsCountDouble503++;
        const err: any = new Error('Service Unavailable');
        err.status = 503;
        throw err;
      }
    }
  };
  try {
    await executeChatGeneration(mockAiDouble503, 'gemini-2.5-flash', [], '', 8500);
    console.error('❌ Test 17 Failed: Expected double 503 error to throw after 2 attempts.');
  } catch (err: any) {
    if (err.status === 503 && attemptsCountDouble503 === 2) {
      console.log('✅ Test 17 Passed: Consecutive 503 failures capped at exactly 2 attempts without further retries.');
      passed++;
    } else {
      console.error('❌ Test 17 Failed: Expected exactly 2 attempts, got:', attemptsCountDouble503, err);
    }
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
