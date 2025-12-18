import React from 'react';
import { Linkedin } from 'lucide-react';
import { PROFILE } from '../constants';

const LinkedInButton: React.FC = () => {
  return (
    <a
      href={PROFILE.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="linkedin-btn group relative inline-flex items-center w-[160px] h-[44px] border border-[#0A66C2] rounded-lg overflow-hidden bg-transparent hover:bg-[#0A66C2] transition-all duration-400 ease-in-out no-underline"
      aria-label="DM on LinkedIn"
    >
      <span className="absolute left-5 text-[#0A66C2] group-hover:text-white group-hover:left-3 font-semibold text-[15px] transition-all duration-400 ease-in-out whitespace-nowrap">
        DM on LinkedIn
      </span>
      <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-in-out text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="fill-current"
        >
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.21c.837 0 1.358-.554 1.358-1.248-.015-.709-.521-1.248-1.342-1.248-.82 0-1.357.539-1.357 1.248 0 .694.521 1.248 1.326 1.248h.015zm4.908 8.21V9.359c0-.216.016-.432.08-.586.173-.432.568-.88 1.232-.88.869 0 1.216.664 1.216 1.637v3.864h2.401V9.254c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193h.016v-1.026H8.651c.03.664 0 7.225 0 7.225h2.401z"/>
        </svg>
      </span>
    </a>
  );
};

export default LinkedInButton;