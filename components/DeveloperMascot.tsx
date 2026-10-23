import React from 'react';

export type MascotState = 'idle' | 'hover' | 'leave' | 'clicked';

export interface DeveloperMascotProps {
  /** Current expression and pose state of the mascot */
  state?: MascotState;
  /** Width or height sizing class or size in pixels */
  className?: string;
  /** Optional title for accessibility */
  title?: string;
}

/**
 * DeveloperMascot
 * 
 * Reusable, lightweight vector cartoon mascot representing a friendly young Indian
 * male developer with dark styled hair, warm brown skin tone, expressive eyes, a neat
 * navy polo/crew outfit, clean doodle outlines, and four distinct emotional/interactive states:
 *
 * 1. idle: Friendly relaxed smile, head upright, resting hands naturally.
 * 2. hover: Excited smile, sparkling wide eyes, tilting forward and gesturing towards the button.
 * 3. leave: Playful slightly pouting/disappointed mouth, softly drooping brows, turning slightly.
 * 4. clicked: Respectful Namaste pose (palms pressed together in an Anjali Mudra), warm closed-eye smile, graceful bow.
 */
export const DeveloperMascot: React.FC<DeveloperMascotProps> = ({
  state = 'idle',
  className = 'w-16 h-16',
  title = 'Developer Mascot',
}) => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={`${title} (${state} state)`}
    >
      <defs>
        {/* Soft shadow under the mascot */}
        <radialGradient id="mascot-ground-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0B0D12" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0B0D12" stopOpacity="0" />
        </radialGradient>
        {/* Subtle skin gradient */}
        <linearGradient id="mascot-skin" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#DF9F6D" />
          <stop offset="100%" stopColor="#C88452" />
        </linearGradient>
        {/* Shirt gradient */}
        <linearGradient id="mascot-shirt" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        {/* Soft hair highlight */}
        <linearGradient id="mascot-hair" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2D2B38" />
          <stop offset="100%" stopColor="#15141B" />
        </linearGradient>
      </defs>

      {/* Ground drop shadow */}
      <ellipse cx="60" cy="115" rx="34" ry="4.5" fill="url(#mascot-ground-shadow)" />

      {/* --- IDLE STATE --- */}
      {state === 'idle' && (
        <g id="mascot-idle" className="transition-transform duration-200">
          {/* Torso & Navy Outfit */}
          <path
            d="M34 112 C34 92 40 82 50 81 L70 81 C80 82 86 92 86 112 Z"
            fill="url(#mascot-shirt)"
            stroke="#0B0F17"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Subtle Collar / Neckline */}
          <path
            d="M52 81 C54 87 66 87 68 81"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Left Arm relaxed resting */}
          <path
            d="M36 86 C28 92 26 101 29 108 C31 112 36 111 38 107 C38 99 41 93 45 88"
            fill="#C88452"
            stroke="#0B0F17"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          {/* Right Arm relaxed resting */}
          <path
            d="M84 86 C92 92 94 101 91 108 C89 112 84 111 82 107 C82 99 79 93 75 88"
            fill="#C88452"
            stroke="#0B0F17"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />

          {/* Neck */}
          <rect x="54" y="72" width="12" height="11" rx="4" fill="#C88452" stroke="#0B0F17" strokeWidth="2" />

          {/* Ears */}
          <circle cx="34" cy="54" r="5" fill="#DF9F6D" stroke="#0B0F17" strokeWidth="2" />
          <path d="M33 52 C35 53 35 55 33 56" fill="none" stroke="#C88452" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="86" cy="54" r="5" fill="#DF9F6D" stroke="#0B0F17" strokeWidth="2" />
          <path d="M87 52 C85 53 85 55 87 56" fill="none" stroke="#C88452" strokeWidth="1.5" strokeLinecap="round" />

          {/* Head */}
          <path
            d="M36 50 C36 34 46 25 60 25 C74 25 84 34 84 50 C84 66 73 75 60 75 C47 75 36 66 36 50 Z"
            fill="url(#mascot-skin)"
            stroke="#0B0F17"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Hair - Stylish pompadour / side-sweep */}
          <path
            d="M34 47 C33 34 40 20 54 18 C65 16 78 19 84 27 C89 33 87 43 86 47 C83 40 79 38 72 38 C63 38 58 40 50 36 C44 33 39 40 34 47 Z"
            fill="url(#mascot-hair)"
            stroke="#0B0F17"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />

          {/* Eyebrows (friendly, relaxed arch) */}
          <path d="M46 45 C48 43 53 43 55 45" fill="none" stroke="#15141B" strokeWidth="2" strokeLinecap="round" />
          <path d="M65 45 C67 43 72 43 74 45" fill="none" stroke="#15141B" strokeWidth="2" strokeLinecap="round" />

          {/* Eyes (warm, welcoming glance) */}
          <ellipse cx="50" cy="51" rx="3.5" ry="4" fill="#0B0F17" />
          <circle cx="49" cy="49.5" r="1.3" fill="#FFFFFF" />
          <ellipse cx="70" cy="51" rx="3.5" ry="4" fill="#0B0F17" />
          <circle cx="69" cy="49.5" r="1.3" fill="#FFFFFF" />

          {/* Soft Cheeks (warm blush) */}
          <circle cx="44" cy="57" r="3.2" fill="#E86C60" fillOpacity="0.35" />
          <circle cx="76" cy="57" r="3.2" fill="#E86C60" fillOpacity="0.35" />

          {/* Nose */}
          <path d="M59 51 C60 54 62 55 60 56" fill="none" stroke="#A7673A" strokeWidth="1.8" strokeLinecap="round" />

          {/* Smile (gentle friendly smile) */}
          <path
            d="M53 60 C56 65 64 65 67 60"
            fill="#FFFFFF"
            stroke="#0B0F17"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      )}

      {/* --- HOVER STATE (Excited, gesturing/pointing towards the button) --- */}
      {state === 'hover' && (
        <g id="mascot-hover" className="transition-transform duration-200" transform="translate(2, -2) rotate(3 60 60)">
          {/* Torso tilted slightly */}
          <path
            d="M33 112 C34 91 42 81 53 80 L73 81 C82 83 88 93 88 112 Z"
            fill="url(#mascot-shirt)"
            stroke="#0B0F17"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Collar */}
          <path
            d="M55 81 C57 87 69 87 71 81"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Left Arm: Hand on hip happily */}
          <path
            d="M35 85 C24 92 23 100 28 106 C32 109 37 106 37 101 C37 95 41 90 46 86"
            fill="#C88452"
            stroke="#0B0F17"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />

          {/* Right Arm: Enthusiastically reaching & gesturing right towards the Hire Me button */}
          <path
            d="M84 84 C94 82 103 76 109 70 C112 67 114 70 112 73 C107 81 97 91 85 93 Z"
            fill="#C88452"
            stroke="#0B0F17"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          {/* Gesturing Hand / Fingers pointing right */}
          <circle cx="111" cy="70" r="3.8" fill="#DF9F6D" stroke="#0B0F17" strokeWidth="2" />
          <path d="M112 68 L117 67" stroke="#0B0F17" strokeWidth="2" strokeLinecap="round" />

          {/* Neck */}
          <rect x="56" y="71" width="12" height="11" rx="4" fill="#C88452" stroke="#0B0F17" strokeWidth="2" />

          {/* Ears */}
          <circle cx="36" cy="53" r="5" fill="#DF9F6D" stroke="#0B0F17" strokeWidth="2" />
          <circle cx="88" cy="53" r="5" fill="#DF9F6D" stroke="#0B0F17" strokeWidth="2" />

          {/* Head */}
          <path
            d="M38 49 C38 33 48 24 62 24 C76 24 86 33 86 49 C86 65 75 74 62 74 C49 74 38 65 38 49 Z"
            fill="url(#mascot-skin)"
            stroke="#0B0F17"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Hair */}
          <path
            d="M36 46 C35 33 42 19 56 17 C67 15 80 18 86 26 C91 32 89 42 88 46 C85 39 81 37 74 37 C65 37 60 39 52 35 C46 32 41 39 36 46 Z"
            fill="url(#mascot-hair)"
            stroke="#0B0F17"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />

          {/* Eyebrows (high, enthusiastic) */}
          <path d="M47 42 C50 39 55 40 57 43" fill="none" stroke="#15141B" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M67 42 C69 39 74 40 76 43" fill="none" stroke="#15141B" strokeWidth="2.2" strokeLinecap="round" />

          {/* Sparkle Eyes (wide and happy) */}
          <ellipse cx="52" cy="49" rx="4.2" ry="4.5" fill="#0B0F17" />
          <circle cx="50.5" cy="47.5" r="1.6" fill="#FFFFFF" />
          <circle cx="53.5" cy="50.5" r="0.8" fill="#FFFFFF" />

          <ellipse cx="72" cy="49" rx="4.2" ry="4.5" fill="#0B0F17" />
          <circle cx="70.5" cy="47.5" r="1.6" fill="#FFFFFF" />
          <circle cx="73.5" cy="50.5" r="0.8" fill="#FFFFFF" />

          {/* Cheerful Blush */}
          <circle cx="45" cy="55" r="4" fill="#F43F5E" fillOpacity="0.4" />
          <circle cx="79" cy="55" r="4" fill="#F43F5E" fillOpacity="0.4" />

          {/* Nose */}
          <path d="M61 49 C62 52 64 53 62 54" fill="none" stroke="#A7673A" strokeWidth="1.8" strokeLinecap="round" />

          {/* Broad Open Smile (excited :D) */}
          <path
            d="M52 58 C52 66 71 66 71 58 Z"
            fill="#B91C1C"
            stroke="#0B0F17"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M54 58 C57 60 66 60 69 58"
            fill="#FFFFFF"
            stroke="none"
          />
          {/* Tongue hint */}
          <path
            d="M57 63 C60 61 64 61 66 63 C65 65 58 65 57 63 Z"
            fill="#F87171"
          />

          {/* Excitement sparkle near gesture */}
          <path
            d="M109 52 L111 57 L116 59 L111 61 L109 66 L107 61 L102 59 L107 57 Z"
            fill="#FBBF24"
            opacity="0.9"
          />
        </g>
      )}

      {/* --- LEAVE STATE (Playfully disappointed/pouting, gentle drooping eyebrows) --- */}
      {state === 'leave' && (
        <g id="mascot-leave" className="transition-transform duration-200" transform="translate(-1, 2) rotate(-2 60 60)">
          {/* Torso */}
          <path
            d="M34 112 C34 93 40 83 50 82 L70 82 C80 83 86 93 86 112 Z"
            fill="url(#mascot-shirt)"
            stroke="#0B0F17"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Collar */}
          <path
            d="M52 82 C54 88 66 88 68 82"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Drooped arms */}
          <path
            d="M36 86 C27 94 26 104 29 110 C31 113 36 111 37 108 C37 100 40 94 44 89"
            fill="#C88452"
            stroke="#0B0F17"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M84 86 C93 94 94 104 91 110 C89 113 84 111 83 108 C83 100 80 94 76 89"
            fill="#C88452"
            stroke="#0B0F17"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />

          {/* Neck */}
          <rect x="54" y="73" width="12" height="11" rx="4" fill="#C88452" stroke="#0B0F17" strokeWidth="2" />

          {/* Ears */}
          <circle cx="34" cy="55" r="5" fill="#DF9F6D" stroke="#0B0F17" strokeWidth="2" />
          <circle cx="86" cy="55" r="5" fill="#DF9F6D" stroke="#0B0F17" strokeWidth="2" />

          {/* Head */}
          <path
            d="M36 51 C36 35 46 26 60 26 C74 26 84 35 84 51 C84 67 73 76 60 76 C47 76 36 67 36 51 Z"
            fill="url(#mascot-skin)"
            stroke="#0B0F17"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Hair */}
          <path
            d="M34 48 C33 35 40 21 54 19 C65 17 78 20 84 28 C89 34 87 44 86 48 C83 41 79 39 72 39 C63 39 58 41 50 37 C44 34 39 41 34 48 Z"
            fill="url(#mascot-hair)"
            stroke="#0B0F17"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />

          {/* Eyebrows (drooping outer edges / expressive sad-cute puppy dog look) */}
          <path d="M46 44 C49 46 54 47 56 48" fill="none" stroke="#15141B" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M64 48 C66 47 71 46 74 44" fill="none" stroke="#15141B" strokeWidth="2.2" strokeLinecap="round" />

          {/* Eyes (big glossy pleading eyes looking slightly upwards/sideways) */}
          <ellipse cx="50" cy="53" rx="3.8" ry="4.2" fill="#0B0F17" />
          <circle cx="49" cy="51" r="1.5" fill="#FFFFFF" />
          <ellipse cx="70" cy="53" rx="3.8" ry="4.2" fill="#0B0F17" />
          <circle cx="69" cy="51" r="1.5" fill="#FFFFFF" />

          {/* Subtle blush */}
          <circle cx="43" cy="59" r="3" fill="#E86C60" fillOpacity="0.3" />
          <circle cx="77" cy="59" r="3" fill="#E86C60" fillOpacity="0.3" />

          {/* Nose */}
          <path d="M59 53 C60 56 62 57 60 58" fill="none" stroke="#A7673A" strokeWidth="1.8" strokeLinecap="round" />

          {/* Playful slight pout / wave-curve mouth */}
          <path
            d="M52 64 C55 61 65 61 68 64"
            fill="none"
            stroke="#0B0F17"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Little sweat/tear drop of playful disappointment */}
          <path
            d="M81 48 C81 45 83 42 83 42 C83 42 85 45 85 48 C85 49 84 50 83 50 C82 50 81 49 81 48 Z"
            fill="#38BDF8"
            opacity="0.85"
          />
        </g>
      )}

      {/* --- CLICKED STATE (Namaste prayer gesture, respectful appreciative bow & closed smiling eyes) --- */}
      {state === 'clicked' && (
        <g id="mascot-clicked" className="transition-transform duration-200" transform="translate(0, 3)">
          {/* Torso in gentle respectful bow */}
          <path
            d="M33 112 C33 93 40 83 50 82 L70 82 C80 83 87 93 87 112 Z"
            fill="url(#mascot-shirt)"
            stroke="#0B0F17"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Neck */}
          <rect x="54" y="73" width="12" height="11" rx="4" fill="#C88452" stroke="#0B0F17" strokeWidth="2" />

          {/* Ears */}
          <circle cx="34" cy="56" r="5" fill="#DF9F6D" stroke="#0B0F17" strokeWidth="2" />
          <circle cx="86" cy="56" r="5" fill="#DF9F6D" stroke="#0B0F17" strokeWidth="2" />

          {/* Head tilted down slightly in appreciative bow */}
          <path
            d="M36 52 C36 36 46 27 60 27 C74 27 84 36 84 52 C84 68 73 77 60 77 C47 77 36 68 36 52 Z"
            fill="url(#mascot-skin)"
            stroke="#0B0F17"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Hair */}
          <path
            d="M34 49 C33 36 40 22 54 20 C65 18 78 21 84 29 C89 35 87 45 86 49 C83 42 79 40 72 40 C63 40 58 42 50 38 C44 35 39 42 34 49 Z"
            fill="url(#mascot-hair)"
            stroke="#0B0F17"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />

          {/* Eyebrows (peaceful, happy arches) */}
          <path d="M46 46 C49 43 54 44 56 46" fill="none" stroke="#15141B" strokeWidth="2" strokeLinecap="round" />
          <path d="M64 46 C66 44 71 43 74 46" fill="none" stroke="#15141B" strokeWidth="2" strokeLinecap="round" />

          {/* Closed Smiling Eyes (^ ^ blissful & warm) */}
          <path
            d="M47 53 C50 49 54 49 57 53"
            fill="none"
            stroke="#0B0F17"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <path
            d="M63 53 C66 49 70 49 73 53"
            fill="none"
            stroke="#0B0F17"
            strokeWidth="2.6"
            strokeLinecap="round"
          />

          {/* Warm Rosy Cheeks */}
          <circle cx="43" cy="59" r="3.5" fill="#F43F5E" fillOpacity="0.4" />
          <circle cx="77" cy="59" r="3.5" fill="#F43F5E" fillOpacity="0.4" />

          {/* Nose */}
          <path d="M59 53 C60 56 62 57 60 58" fill="none" stroke="#A7673A" strokeWidth="1.8" strokeLinecap="round" />

          {/* Gentle happy smile */}
          <path
            d="M54 62 C57 66 63 66 66 62"
            fill="none"
            stroke="#0B0F17"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* NAMASTE GESTURE (Hands joined in center prayer mudra at heart level) */}
          {/* Forearms converging inwards from shoulders */}
          <path
            d="M36 86 C40 94 48 98 56 94"
            fill="none"
            stroke="#0F172A"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M84 86 C80 94 72 98 64 94"
            fill="none"
            stroke="#0F172A"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Pressed Palms / Hands Silhouette */}
          <path
            d="M60 76 C58 80 55 86 55 93 C55 98 59 101 60 101 C61 101 65 98 65 93 C65 86 62 80 60 76 Z"
            fill="#DF9F6D"
            stroke="#0B0F17"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Finger separation center crease */}
          <line x1="60" y1="78" x2="60" y2="94" stroke="#0B0F17" strokeWidth="1.8" strokeLinecap="round" />

          {/* Subtle blessing / gratitude aura sparkles */}
          <circle cx="38" cy="72" r="1.5" fill="#F59E0B" opacity="0.8" />
          <circle cx="82" cy="72" r="1.5" fill="#F59E0B" opacity="0.8" />
          <path d="M60 67 L60 70" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        </g>
      )}
    </svg>
  );
};

export default DeveloperMascot;
