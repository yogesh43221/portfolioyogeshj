import React, { useState } from 'react';
import { 
  Sparkles 
} from 'lucide-react';

export interface WorkspaceIllustrationProps {
  onOpenTerminal: () => void;
  onOpenAvatarModal?: () => void;
  onOpenNotesModal?: () => void;
}

export type MonitorScreenMode = 'tests' | 'code' | 'radar';

export const WorkspaceIllustration: React.FC<WorkspaceIllustrationProps> = ({
  onOpenTerminal,
  onOpenNotesModal
}) => {
  const [lampOn, setLampOn] = useState(true);
  const [screenMode, setScreenMode] = useState<MonitorScreenMode>('tests');
  const [coffeeSips, setCoffeeSips] = useState(0);
  const [isBugWiggling, setIsBugWiggling] = useState(false);
  const [plantWatered, setPlantWatered] = useState(false);
  const [activeToast, setActiveToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setActiveToast(message);
    setTimeout(() => {
      setActiveToast((prev) => (prev === message ? null : prev));
    }, 2400);
  };

  const handleLampToggle = () => {
    setLampOn((prev) => !prev);
    showToast(!lampOn ? '💡 Warm Desk Lamp: ON' : '🌙 Desk Lamp: OFF (Late-night mode)');
  };

  const handleScreenToggle = () => {
    setScreenMode((prev) => {
      if (prev === 'tests') return 'code';
      if (prev === 'code') return 'radar';
      return 'tests';
    });
    showToast('💻 Monitor mode switched');
  };

  const handleCoffeeClick = () => {
    setCoffeeSips((prev) => prev + 1);
    const messages = [
      '☕ Fresh Ginger Chai (+15 Focus)',
      '☕ Warm tea brewed. Ready for testing cycle.',
      '☕ Reviewing API contracts and schema boundaries.',
      '☕ Focused session: Playwright & FastAPI workflows.'
    ];
    showToast(messages[coffeeSips % messages.length]);
  };

  const handleBugClick = () => {
    setIsBugWiggling(true);
    showToast('🐞 "Buggy" scurries! Checking edge cases and boundary conditions.');
    setTimeout(() => setIsBugWiggling(false), 800);
  };

  const handlePlantClick = () => {
    setPlantWatered(true);
    showToast('🌱 Succulent watered: calm workspace.');
    setTimeout(() => setPlantWatered(false), 1800);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto select-none group/workspace">
      {/* Interactive Toast Bubble */}
      {activeToast && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-40 px-3.5 py-1.5 bg-slate-900/90 dark:bg-midnight-950/90 text-white text-xs font-mono font-medium rounded-full shadow-lg border border-amber-400/40 backdrop-blur-xs flex items-center gap-1.5 animate-fadeIn">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>{activeToast}</span>
        </div>
      )}

      {/* The Master SVG Illustration Scene - Clean & Organic */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-amber-900/10 dark:border-slate-800 shadow-md shadow-amber-950/5 dark:shadow-black/30 bg-[#FAF7F0] dark:bg-[#11141D] transition-colors duration-300">
        <svg
          viewBox="0 0 920 620"
          className="w-full h-auto block select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Ambient Wall Gradient */}
            <linearGradient id="wall-light-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FAF7F2" />
              <stop offset="60%" stopColor="#F5EFE6" />
              <stop offset="100%" stopColor="#ECE3D4" />
            </linearGradient>
            <linearGradient id="wall-dark-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0F172A" />
              <stop offset="60%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0B0F19" />
            </linearGradient>

            {/* Wood Desk Surface */}
            <linearGradient id="desk-surface-light" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#E2C19D" />
              <stop offset="30%" stopColor="#D8B28B" />
              <stop offset="70%" stopColor="#E0BD97" />
              <stop offset="100%" stopColor="#CDA57D" />
            </linearGradient>
            <linearGradient id="desk-surface-dark" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="50%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>

            {/* Desk Bevel Front Shadow */}
            <linearGradient id="desk-bevel-light" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B3895D" />
              <stop offset="100%" stopColor="#8A633B" />
            </linearGradient>
            <linearGradient id="desk-bevel-dark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#090D16" />
            </linearGradient>

            {/* Warm Lamp Light Cone Radial */}
            <radialGradient id="lamp-cone-glow" cx="240" cy="240" r="320" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.45" />
              <stop offset="45%" stopColor="#FDE68A" stopOpacity="0.22" />
              <stop offset="85%" stopColor="#F59E0B" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
            </radialGradient>

            {/* Monitor Ambient Glow */}
            <radialGradient id="screen-glow-light" cx="460" cy="280" r="240" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.18" />
              <stop offset="70%" stopColor="#38BDF8" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="screen-glow-dark" cx="460" cy="280" r="260" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.32" />
              <stop offset="60%" stopColor="#0284C7" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
            </radialGradient>

            {/* Leather Desk Mat */}
            <linearGradient id="desk-mat-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2E384D" />
              <stop offset="100%" stopColor="#1E2433" />
            </linearGradient>

            {/* Corkboard Pattern */}
            <pattern id="corkboard-dots" width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="8" cy="8" r="1.2" fill="#D97706" fillOpacity="0.18" />
              <circle cx="16" cy="16" r="0.8" fill="#B45309" fillOpacity="0.2" />
            </pattern>
          </defs>

          {/* LAYER 1: ROOM WALL & BACKGROUND TEXTURE */}
          <rect 
            x="0" 
            y="0" 
            width="920" 
            height="430" 
            className="fill-[url(#wall-light-grad)] dark:fill-[url(#wall-dark-grad)] transition-colors duration-300"
          />

          {/* Wall Paneling subtle vertical line art */}
          <g stroke="#94A3B8" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="3 4">
            <line x1="80" y1="0" x2="80" y2="430" />
            <line x1="220" y1="0" x2="220" y2="430" />
            <line x1="380" y1="0" x2="380" y2="430" />
            <line x1="540" y1="0" x2="540" y2="430" />
            <line x1="700" y1="0" x2="700" y2="430" />
            <line x1="840" y1="0" x2="840" y2="430" />
          </g>

          {/* LAYER 2: WALL SHELF & BACKGROUND ARTIFACTS */}
          <g id="wall-shelf">
            {/* Shelf Wood Planks */}
            <rect x="60" y="70" width="360" height="14" rx="2" fill="#8C5C36" stroke="#452710" strokeWidth="2" />
            <polygon points="60,84 75,98 90,84" fill="#6A4222" />
            <polygon points="390,84 405,98 420,84" fill="#6A4222" />

            {/* Books on Shelf */}
            <rect x="80" y="24" width="22" height="46" rx="2" fill="#0284C7" stroke="#0F172A" strokeWidth="1.8" />
            <line x1="85" y1="30" x2="85" y2="60" stroke="#BAE6FD" strokeWidth="1.5" />
            <text x="91" y="52" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="monospace" transform="rotate(-90 91 52)">CLEAN CODE</text>

            <rect x="105" y="18" width="26" height="52" rx="2" fill="#D97706" stroke="#0F172A" strokeWidth="1.8" />
            <text x="118" y="50" fill="#FEF3C7" fontSize="8" fontWeight="bold" fontFamily="monospace" transform="rotate(-90 118 50)">PLAYWRIGHT</text>

            <rect x="134" y="28" width="20" height="42" rx="2" fill="#10B981" stroke="#0F172A" strokeWidth="1.8" />
            <text x="144" y="52" fill="#D1FAE5" fontSize="7" fontWeight="bold" fontFamily="monospace" transform="rotate(-90 144 52)">PYTHON</text>

            <g transform="rotate(12 165 40)">
              <rect x="160" y="22" width="22" height="46" rx="2" fill="#6366F1" stroke="#0F172A" strokeWidth="1.8" />
              <text x="171" y="48" fill="#EEF2FF" fontSize="7" fontWeight="bold" fontFamily="monospace" transform="rotate(-90 171 48)">FASTAPI</text>
            </g>

            {/* Mini potted succulent on bookshelf */}
            <rect x="230" y="52" width="24" height="18" rx="2" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1.8" />
            <path d="M232,52 Q236,36 242,42 Q248,36 252,52" fill="#22C55E" stroke="#0F172A" strokeWidth="1.5" />
            <circle cx="242" cy="42" r="3" fill="#15803D" />

            {/* Mini Trophy / Badge on shelf */}
            <circle cx="295" cy="46" r="14" fill="#FBBF24" stroke="#78350F" strokeWidth="2" />
            <polygon points="295,38 298,44 304,45 299,49 301,55 295,51 289,55 291,49 286,45 292,44" fill="#B45309" />
            <rect x="288" y="60" width="14" height="10" fill="#78350F" stroke="#0F172A" strokeWidth="1.5" rx="1" />

            {/* Framed QA Certificate */}
            <rect x="330" y="20" width="65" height="50" rx="3" fill="#FFFBEB" stroke="#78350F" strokeWidth="2.5" />
            <rect x="335" y="25" width="55" height="40" fill="#FEF3C7" stroke="#D97706" strokeWidth="1" />
            <line x1="340" y1="34" x2="380" y2="34" stroke="#92400E" strokeWidth="2" />
            <line x1="344" y1="42" x2="376" y2="42" stroke="#B45309" strokeWidth="1.2" />
            <line x1="348" y1="48" x2="372" y2="48" stroke="#B45309" strokeWidth="1.2" />
            <circle cx="362" cy="56" r="4" fill="#DC2626" />
          </g>

          {/* Wall Clock (showing live Pune IST Time) */}
          <g id="pune-wall-clock" transform="translate(680, 25)">
            <circle cx="45" cy="45" r="38" fill="#F8FAFC" stroke="#0F172A" strokeWidth="3" />
            <circle cx="45" cy="45" r="34" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
            <line x1="45" y1="15" x2="45" y2="21" stroke="#0F172A" strokeWidth="2.5" />
            <line x1="45" y1="69" x2="45" y2="75" stroke="#0F172A" strokeWidth="2.5" />
            <line x1="15" y1="45" x2="21" y2="45" stroke="#0F172A" strokeWidth="2.5" />
            <line x1="69" y1="45" x2="75" y2="45" stroke="#0F172A" strokeWidth="2.5" />
            <line x1="45" y1="45" x2="58" y2="30" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
            <line x1="45" y1="45" x2="32" y2="24" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
            <circle cx="45" cy="45" r="3.5" fill="#DC2626" />
            <rect x="25" y="55" width="40" height="12" rx="3" fill="#EEF2F6" stroke="#94A3B8" strokeWidth="0.8" />
            <text x="45" y="64" textAnchor="middle" fill="#0F172A" fontSize="7" fontWeight="bold" fontFamily="monospace">PUNE IST</text>
          </g>

          {/* Cork Pinboard with QA Sticky Notes & Badges */}
          <g id="corkboard" transform="translate(500, 40)">
            <rect x="0" y="0" width="160" height="95" rx="4" fill="#D97706" fillOpacity="0.25" stroke="#78350F" strokeWidth="3" />
            <rect x="2" y="2" width="156" height="91" fill="url(#corkboard-dots)" />

            <g transform="translate(10, 10) rotate(-4)">
              <rect x="0" y="0" width="60" height="42" rx="2" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.15))" />
              <circle cx="30" cy="5" r="2.5" fill="#EF4444" />
              <text x="8" y="19" fill="#854D0E" fontSize="7.5" fontWeight="bold" fontFamily="monospace">PLAYWRIGHT</text>
              <text x="8" y="32" fill="#15803D" fontSize="7.5" fontWeight="bold" fontFamily="monospace">UI Testing</text>
            </g>

            <g transform="translate(85, 14) rotate(5)">
              <rect x="0" y="0" width="62" height="40" rx="2" fill="#BAE6FD" stroke="#0284C7" strokeWidth="1" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.15))" />
              <circle cx="31" cy="4" r="2.5" fill="#3B82F6" />
              <text x="8" y="19" fill="#0369A1" fontSize="7.5" fontWeight="bold" fontFamily="monospace">FASTAPI</text>
              <text x="8" y="32" fill="#15803D" fontSize="7.5" fontWeight="bold" fontFamily="monospace">API Schemas</text>
            </g>

            <g transform="translate(25, 58) rotate(3)">
              <circle cx="16" cy="16" r="14" fill="#38BDF8" stroke="#0F172A" strokeWidth="1.5" />
              <text x="16" y="20" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="sans-serif">PY</text>
            </g>

            <g transform="translate(75, 56) rotate(-2)">
              <rect x="0" y="0" width="70" height="24" rx="12" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.2" />
              <text x="35" y="16" textAnchor="middle" fill="#15803D" fontSize="7.5" fontWeight="bold" fontFamily="monospace">QUALITY GATES</text>
            </g>
          </g>

          {/* Framed Minimalist Mountain & Studio Art Print (Replaces repeated face!) */}
          <g id="framed-art" transform="translate(440, 75)">
            <rect x="0" y="0" width="48" height="58" rx="3" fill="#8C5C36" stroke="#452710" strokeWidth="2" filter="drop-shadow(0 3px 4px rgba(0,0,0,0.18))" />
            <rect x="4" y="4" width="40" height="50" rx="1.5" fill="#FEFDF9" stroke="#E2E8F0" strokeWidth="0.8" />
            <circle cx="24" cy="20" r="7" fill="#F59E0B" />
            <polygon points="8,44 24,24 40,44" fill="#0284C7" fillOpacity="0.85" />
            <polygon points="18,44 32,28 44,44" fill="#10B981" fillOpacity="0.75" />
            <line x1="8" y1="44" x2="40" y2="44" stroke="#0F172A" strokeWidth="1" />
            <line x1="10" y1="48" x2="38" y2="48" stroke="#94A3B8" strokeWidth="0.6" strokeDasharray="2 1" />
            <text x="24" y="52" textAnchor="middle" fill="#64748B" fontSize="4.5" fontWeight="bold" fontFamily="monospace">STUDIO • PUNE</text>
          </g>

          {/* LAYER 3: DESK SURFACE & AMBIENT SHADOWS */}
          <polygon 
            points="0,380 920,380 920,580 0,580" 
            className="fill-[url(#desk-surface-light)] dark:fill-[url(#desk-surface-dark)] transition-colors duration-300"
            stroke="#1E293B" 
            strokeWidth="3" 
          />

          {/* Subtle woodgrain strokes */}
          <g stroke="#8C5C36" strokeOpacity="0.25" strokeWidth="1.2" className="dark:stroke-slate-600 dark:stroke-opacity-20">
            <line x1="40" y1="410" x2="380" y2="410" />
            <line x1="450" y1="415" x2="880" y2="415" />
            <line x1="120" y1="450" x2="520" y2="450" />
            <line x1="620" y1="455" x2="900" y2="455" />
            <line x1="60" y1="520" x2="420" y2="520" />
            <line x1="480" y1="535" x2="840" y2="535" />
          </g>

          {/* Front Bevel / Edge Thickness of the desk */}
          <rect 
            x="0" 
            y="580" 
            width="920" 
            height="40" 
            className="fill-[url(#desk-bevel-light)] dark:fill-[url(#desk-bevel-dark)] transition-colors duration-300"
            stroke="#0F172A" 
            strokeWidth="3" 
          />

          {/* Stitched Leather Large Desk Mat */}
          <g id="desk-mat">
            <rect 
              x="160" 
              y="400" 
              width="600" 
              height="165" 
              rx="12" 
              fill="url(#desk-mat-grad)" 
              stroke="#0B0F19" 
              strokeWidth="2.5" 
              filter="drop-shadow(0 6px 8px rgba(0,0,0,0.3))" 
            />
            <rect 
              x="166" 
              y="406" 
              width="588" 
              height="153" 
              rx="9" 
              fill="none" 
              stroke="#38BDF8" 
              strokeWidth="1.2" 
              strokeDasharray="4 3" 
              strokeOpacity="0.5" 
            />
          </g>

          {/* Screen Light Ambient Glow */}
          <ellipse 
            cx="460" 
            cy="330" 
            rx="240" 
            ry="140" 
            className="fill-[url(#screen-glow-light)] dark:fill-[url(#screen-glow-dark)] pointer-events-none" 
          />

          {/* LAYER 4: MAIN MONITOR (DUAL SCREEN SETUP) */}
          <rect x="445" y="325" width="30" height="90" rx="3" fill="#64748B" stroke="#0F172A" strokeWidth="2.5" />
          <polygon points="410,415 510,415 490,405 430,405" fill="#475569" stroke="#0F172A" strokeWidth="2.5" />
          <ellipse cx="460" cy="415" rx="55" ry="8" fill="#334155" stroke="#0F172A" strokeWidth="2" />

          {/* Primary Monitor Body */}
          <g 
            id="main-monitor" 
            className="cursor-pointer group/monitor transition-transform duration-200" 
            onClick={handleScreenToggle}
          >
            <rect 
              x="260" 
              y="140" 
              width="400" 
              height="240" 
              rx="8" 
              fill="#0F172A" 
              stroke="#1E293B" 
              strokeWidth="4" 
              filter="drop-shadow(0 12px 24px rgba(0,0,0,0.45))" 
            />

            {/* Webcam */}
            <circle cx="460" cy="148" r="3.5" fill="#0284C7" stroke="#38BDF8" strokeWidth="0.8" />
            <circle cx="460" cy="148" r="1.2" fill="#FFFFFF" />

            {/* Active Display Area */}
            <rect x="272" y="158" width="376" height="206" rx="4" fill="#090D16" stroke="#334155" strokeWidth="1" />

            {/* Header Bar */}
            <rect x="272" y="158" width="376" height="26" rx="4" fill="#1E293B" />
            <circle cx="288" cy="171" r="3.5" fill="#EF4444" />
            <circle cx="300" cy="171" r="3.5" fill="#F59E0B" />
            <circle cx="312" cy="171" r="3.5" fill="#10B981" />
            
            <text x="328" y="174" fill="#CBD5E1" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
              {screenMode === 'tests' && 'Sample Test Architecture • Illustrative Workflow'}
              {screenMode === 'code' && 'Example Test Code • Pytest & FastAPI'}
              {screenMode === 'radar' && 'Testing Scope • Layered Validation'}
            </text>
            <text x="635" y="174" textAnchor="end" fill="#38BDF8" fontSize="8" fontWeight="bold" fontFamily="monospace">
              [Click to Switch]
            </text>

            {/* TESTS VIEW - Illustrative testing architecture */}
            {screenMode === 'tests' && (
              <g id="screen-tests">
                {/* Summary Banner */}
                <rect x="284" y="190" width="352" height="42" rx="6" fill="#0F172A" stroke="#1E293B" strokeWidth="1" />
                <circle cx="306" cy="211" r="12" fill="#0369A1" stroke="#38BDF8" strokeWidth="1.5" />
                <path d="M301,211 L305,215 L312,207" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <text x="328" y="206" fill="#F8FAFC" fontSize="10.5" fontWeight="bold" fontFamily="monospace">SAMPLE WORKFLOW // AUTOMATION ARCHITECTURE</text>
                <text x="328" y="222" fill="#94A3B8" fontSize="8" fontFamily="monospace">Illustrative test design: UI, API &amp; DB verification layers</text>
                
                {/* Stylized Visual Test Stages */}
                <g transform="translate(284, 238)">
                  {/* Stage 1: E2E Journeys */}
                  <rect x="0" y="0" width="352" height="26" rx="5" fill="#111827" stroke="#1E293B" strokeWidth="0.8" />
                  <rect x="8" y="5" width="22" height="16" rx="3" fill="#0284C7" />
                  <circle cx="13" cy="9" r="1.2" fill="#FFFFFF" />
                  <circle cx="17" cy="9" r="1.2" fill="#FFFFFF" />
                  <line x1="11" y1="15" x2="27" y2="15" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
                  <text x="38" y="17" fill="#E2E8F0" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Playwright E2E UI Flow</text>
                  <rect x="236" y="5" width="108" height="16" rx="8" fill="#1E293B" />
                  <text x="290" y="16" textAnchor="middle" fill="#94A3B8" fontSize="7" fontWeight="bold" fontFamily="monospace">EXAMPLE: test_ui_flow</text>

                  {/* Stage 2: API Contracts */}
                  <rect x="0" y="30" width="352" height="26" rx="5" fill="#0B0F19" stroke="#1E293B" strokeWidth="0.8" />
                  <rect x="8" y="35" width="22" height="16" rx="3" fill="#D97706" />
                  <text x="19" y="47" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="monospace">&#123;&#125;</text>
                  <text x="38" y="47" fill="#E2E8F0" fontSize="9" fontWeight="bold" fontFamily="sans-serif">FastAPI Contract &amp; Schema Gates</text>
                  <rect x="236" y="35" width="108" height="16" rx="8" fill="#1E293B" />
                  <text x="290" y="46" textAnchor="middle" fill="#94A3B8" fontSize="7" fontWeight="bold" fontFamily="monospace">EXAMPLE: test_schema</text>

                  {/* Stage 3: Core Database Integrity */}
                  <rect x="0" y="60" width="352" height="26" rx="5" fill="#111827" stroke="#1E293B" strokeWidth="0.8" />
                  <rect x="8" y="65" width="22" height="16" rx="3" fill="#10B981" />
                  <ellipse cx="19" cy="70" rx="7" ry="2.5" fill="#047857" />
                  <path d="M12,70 L12,76 A7,2.5 0 0,0 26,76 L26,70" fill="#047857" />
                  <text x="38" y="77" fill="#E2E8F0" fontSize="9" fontWeight="bold" fontFamily="sans-serif">SQL Foreign Keys &amp; Constraints</text>
                  <rect x="236" y="65" width="108" height="16" rx="8" fill="#1E293B" />
                  <text x="290" y="76" textAnchor="middle" fill="#94A3B8" fontSize="7" fontWeight="bold" fontFamily="monospace">EXAMPLE: test_integrity</text>

                  {/* Calibrated Pipeline Banner */}
                  <rect x="0" y="91" width="352" height="19" rx="4" fill="#0F172A" stroke="#334155" strokeWidth="0.8" />
                  <circle cx="14" cy="100.5" r="3.5" fill="#38BDF8" />
                  <text x="24" y="103.5" fill="#94A3B8" fontSize="7.5" fontWeight="bold" fontFamily="monospace">ILLUSTRATIVE ARCHITECTURE // THREE-TIER TEST SUITE</text>
                </g>
              </g>
            )}

            {/* CODE VIEW - Illustrated syntax canvas */}
            {screenMode === 'code' && (
              <g id="screen-code">
                <g transform="translate(284, 192)" fontFamily="monospace" fontSize="9.5">
                  <text x="0" y="14" fill="#64748B"># tests/test_api_contracts.py (illustrative sample)</text>
                  
                  <text x="0" y="34">
                    <tspan fill="#F43F5E">import </tspan>
                    <tspan fill="#E2E8F0">pytest</tspan>
                  </text>
                  
                  <text x="0" y="54">
                    <tspan fill="#F43F5E">def </tspan>
                    <tspan fill="#38BDF8">test_report_schema_validation</tspan>
                    <tspan fill="#E2E8F0">(client):</tspan>
                  </text>
                  
                  <text x="16" y="74" fill="#94A3B8">
                    # Validate payload boundaries and HTTP contract
                  </text>
                  
                  <text x="16" y="94">
                    <tspan fill="#F59E0B">res </tspan>
                    <tspan fill="#F43F5E">= </tspan>
                    <tspan fill="#E2E8F0">client.post(</tspan>
                    <tspan fill="#34D399">&quot;/api/reports&quot;</tspan>
                    <tspan fill="#E2E8F0">, json=payload)</tspan>
                  </text>
                  
                  <text x="16" y="114">
                    <tspan fill="#F43F5E">assert </tspan>
                    <tspan fill="#E2E8F0">res.status_code == </tspan>
                    <tspan fill="#10B981">200</tspan>
                  </text>
                  
                  <text x="16" y="134">
                    <tspan fill="#F43F5E">assert </tspan>
                    <tspan fill="#E2E8F0">res.json()[</tspan>
                    <tspan fill="#34D399">&quot;valid&quot;</tspan>
                    <tspan fill="#E2E8F0">] is True</tspan>
                  </text>
                </g>

                <rect x="284" y="338" width="352" height="18" rx="4" fill="#1E293B" />
                <text x="460" y="350" textAnchor="middle" fill="#38BDF8" fontSize="8" fontWeight="bold" fontFamily="monospace">
                  PYTHON 3.12 • PLAYWRIGHT • FASTAPI • PYTEST
                </text>
              </g>
            )}

            {/* RADAR VIEW - Clean circular scan */}
            {screenMode === 'radar' && (
              <g id="screen-radar">
                <g transform="translate(460, 260)">
                  <circle cx="0" cy="0" r="75" fill="#064E3B" fillOpacity="0.35" stroke="#10B981" strokeWidth="1.5" />
                  <circle cx="0" cy="0" r="50" fill="none" stroke="#059669" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="0" cy="0" r="25" fill="none" stroke="#059669" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="-75" y1="0" x2="75" y2="0" stroke="#10B981" strokeWidth="1" />
                  <line x1="0" y1="-75" x2="0" y2="75" stroke="#10B981" strokeWidth="1" />
                  <line x1="0" y1="0" x2="52" y2="-52" stroke="#34D399" strokeWidth="2.5" />
                  <circle cx="35" cy="-28" r="4" fill="#F59E0B" className="animate-ping" />
                  <circle cx="35" cy="-28" r="3" fill="#F59E0B" />
                  <text x="44" y="-24" fill="#FDE68A" fontSize="7.5" fontFamily="monospace">E2E Flow</text>
                  <circle cx="-30" cy="30" r="3" fill="#38BDF8" />
                  <text x="-22" y="34" fill="#BAE6FD" fontSize="7.5" fontFamily="monospace">API Schema</text>
                  <text x="0" y="94" textAnchor="middle" fill="#94A3B8" fontSize="8" fontWeight="bold" fontFamily="monospace">
                    TEST COVERAGE SCOPE (ILLUSTRATIVE)
                  </text>
                </g>
              </g>
            )}

            {/* Subtle monitor chin hardware branding */}
            <rect x="445" y="371" width="30" height="3" rx="1.5" fill="#334155" />
            <circle cx="630" cy="372" r="2" fill="#22C55E" />
          </g>

          {/* LAYER 5: SECONDARY LAPTOP (ON THE RIGHT) */}
          <g 
            id="secondary-laptop" 
            transform="translate(685, 330)" 
            className="cursor-pointer group/laptop hover:opacity-95 transition-opacity" 
            onClick={onOpenTerminal}
          >
            <polygon points="10,0 150,0 142,120 18,120" fill="#1E293B" stroke="#0F172A" strokeWidth="2.5" />
            <polygon points="16,6 144,6 138,114 22,114" fill="#0B0F19" stroke="#334155" strokeWidth="1" />
            
            {/* Mini Illustrated Terminal Window Header */}
            <rect x="22" y="12" width="116" height="12" rx="2" fill="#1E293B" />
            <circle cx="28" cy="18" r="2" fill="#EF4444" />
            <circle cx="34" cy="18" r="2" fill="#F59E0B" />
            <circle cx="40" cy="18" r="2" fill="#10B981" />
            <text x="48" y="20" fill="#94A3B8" fontSize="5.5" fontFamily="monospace">yj-shell</text>

            {/* Clean Prompt & Console Status Lines */}
            <text x="26" y="38" fill="#38BDF8" fontSize="7.5" fontWeight="bold" fontFamily="monospace">&gt; yj --console</text>
            <text x="26" y="52" fill="#94A3B8" fontSize="7" fontWeight="bold" fontFamily="monospace">STATUS: ACTIVE</text>
            <text x="26" y="66" fill="#64748B" fontSize="6.5" fontFamily="monospace">Interactive Terminal</text>

            {/* Clean Interactive Terminal Button Badge */}
            <rect x="26" y="82" width="92" height="18" rx="4" fill="#0284C7" stroke="#38BDF8" strokeWidth="0.8" />
            <text x="72" y="94" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="monospace">
              OPEN TERMINAL
            </text>

            <polygon points="0,120 160,120 175,150 -15,150" fill="#334155" stroke="#0F172A" strokeWidth="2.5" />
            <polygon points="15,124 145,124 154,142 6,142" fill="#1E293B" />
            <rect x="65" y="143" width="30" height="6" rx="1" fill="#475569" stroke="#0F172A" strokeWidth="0.8" />
          </g>

          {/* LAYER 6: VINTAGE ARTICULATED DESK LAMP */}
          <g id="desk-lamp" className="cursor-pointer group/lamp" onClick={handleLampToggle}>
            <ellipse cx="140" cy="460" rx="26" ry="12" fill="#1E3A8A" stroke="#0F172A" strokeWidth="2.5" />
            <ellipse cx="140" cy="457" rx="22" ry="9" fill="#2563EB" />
            
            <circle cx="140" cy="452" r="5" fill="#D97706" stroke="#0F172A" strokeWidth="1.5" />

            <line x1="140" y1="452" x2="165" y2="340" stroke="#1E3A8A" strokeWidth="6" strokeLinecap="round" />
            <line x1="144" y1="452" x2="169" y2="340" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />

            <circle cx="165" cy="340" r="6" fill="#D97706" stroke="#0F172A" strokeWidth="1.8" />
            <circle cx="165" cy="340" r="2.5" fill="#FDE68A" />

            <line x1="165" y1="340" x2="215" y2="280" stroke="#1E3A8A" strokeWidth="5.5" strokeLinecap="round" />
            <line x1="168" y1="340" x2="218" y2="280" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" />

            <circle cx="215" cy="280" r="5.5" fill="#D97706" stroke="#0F172A" strokeWidth="1.5" />

            <path 
              d="M195,270 L250,290 L235,320 L180,300 Z" 
              fill="#1D4ED8" 
              stroke="#0F172A" 
              strokeWidth="2.5" 
              filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))" 
            />
            <ellipse cx="208" cy="310" rx="16" ry="8" fill={lampOn ? "#FDE68A" : "#64748B"} stroke="#0F172A" strokeWidth="1" />
            {lampOn && (
              <circle cx="208" cy="310" r="6" fill="#FFFFFF" className="animate-pulse" />
            )}

            <rect x="136" y="450" width="8" height="5" rx="1" fill={lampOn ? "#22C55E" : "#EF4444"} stroke="#0F172A" strokeWidth="1" />
          </g>

          {/* Lamp Glow Cone */}
          {lampOn && (
            <polygon 
              points="208,310 100,560 360,560" 
              fill="url(#lamp-cone-glow)" 
              className="pointer-events-none transition-opacity duration-300" 
            />
          )}

          {/* LAYER 7: KEYBOARD & MOUSE ON DESK MAT */}
          <g id="mechanical-keyboard" transform="translate(310, 470)">
            <rect 
              x="0" 
              y="0" 
              width="240" 
              height="75" 
              rx="6" 
              fill="#1E293B" 
              stroke="#0F172A" 
              strokeWidth="2.5" 
              filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))" 
            />
            <path 
              d="M120,0 C120,-15 130,-15 130,-5 C130,5 140,5 140,-15 C140,-25 150,-25 150,-10 C150,0 160,0 160,-20 L160,-30" 
              fill="none" 
              stroke="#38BDF8" 
              strokeWidth="2.5" 
            />

            <g transform="translate(8, 8)">
              {[...Array(12)].map((_, i) => (
                <rect key={`r1-${i}`} x={i * 18.5} y="0" width="15" height="9" rx="1.5" fill="#334155" stroke="#0F172A" strokeWidth="0.8" />
              ))}
            </g>
            <g transform="translate(8, 20)">
              {[...Array(12)].map((_, i) => (
                <rect key={`r2-${i}`} x={i * 18.5} y="0" width="15" height="10" rx="1.5" fill={i === 0 ? "#F59E0B" : "#475569"} stroke="#0F172A" strokeWidth="0.8" />
              ))}
            </g>
            <g transform="translate(8, 33)">
              {[...Array(11)].map((_, i) => (
                <rect key={`r3-${i}`} x={i * 20} y="0" width="16" height="10" rx="1.5" fill={i === 3 || i === 4 ? "#38BDF8" : "#475569"} stroke="#0F172A" strokeWidth="0.8" />
              ))}
            </g>
            <g transform="translate(8, 46)">
              {[...Array(10)].map((_, i) => (
                <rect key={`r4-${i}`} x={i * 22} y="0" width="18" height="10" rx="1.5" fill={i === 0 || i === 9 ? "#A855F7" : "#475569"} stroke="#0F172A" strokeWidth="0.8" />
              ))}
            </g>
            <g transform="translate(8, 59)">
              <rect x="0" y="0" width="28" height="10" rx="1.5" fill="#334155" stroke="#0F172A" strokeWidth="0.8" />
              <rect x="34" y="0" width="120" height="10" rx="2" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1" />
              <rect x="160" y="0" width="28" height="10" rx="1.5" fill="#334155" stroke="#0F172A" strokeWidth="0.8" />
              <rect x="194" y="0" width="28" height="10" rx="1.5" fill="#10B981" stroke="#0F172A" strokeWidth="0.8" />
            </g>
          </g>

          {/* Mouse */}
          <g id="mouse" transform="translate(580, 485)">
            <rect x="0" y="0" width="45" height="65" rx="18" fill="#1E293B" stroke="#0F172A" strokeWidth="2.2" filter="drop-shadow(0 3px 4px rgba(0,0,0,0.3))" />
            <line x1="22.5" y1="5" x2="22.5" y2="28" stroke="#0F172A" strokeWidth="1.5" />
            <rect x="19.5" y="10" width="6" height="14" rx="2" fill="#38BDF8" stroke="#0F172A" strokeWidth="0.8" />
            <path d="M4,28 Q0,38 4,48" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* LAYER 8: PERSONAL DESK ITEMS & INTERACTIVE HOTSPOTS */}

          {/* ITEM 1: STEAMING CHAI CUP */}
          <g 
            id="chai-cup" 
            transform="translate(210, 460)" 
            className="cursor-pointer group/chai" 
            onClick={handleCoffeeClick}
          >
            <ellipse cx="25" cy="48" rx="28" ry="8" fill="#E2E8F0" stroke="#0F172A" strokeWidth="2" />
            <path d="M42,20 C54,20 54,38 42,38" fill="none" stroke="#D97706" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M42,20 C54,20 54,38 42,38" fill="none" stroke="#0F172A" strokeWidth="1.5" />
            <path d="M8,14 L42,14 L38,44 L12,44 Z" fill="#F59E0B" stroke="#0F172A" strokeWidth="2.5" />
            <ellipse cx="25" cy="14" rx="17" ry="6" fill="#78350F" stroke="#0F172A" strokeWidth="1.5" />
            <ellipse cx="25" cy="14" rx="12" ry="4" fill="#92400E" />

            <text x="25" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="monospace">
              QA CHAI
            </text>

            <g className="animate-pulse">
              <path d="M18,6 Q15,-6 20,-14" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.75" />
              <path d="M25,5 Q28,-7 23,-16" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8" />
              <path d="M32,7 Q30,-5 34,-13" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.65" />
            </g>
          </g>

          {/* ITEM 2: MECHANICAL TOY BUG MASCOT */}
          <g 
            id="bug-toy" 
            transform={`translate(670, 480) ${isBugWiggling ? 'scale(1.15) rotate(10)' : 'scale(1)'}`}
            className="cursor-pointer group/bug transition-transform duration-200" 
            onClick={handleBugClick}
          >
            <ellipse cx="20" cy="24" rx="18" ry="6" fill="#000000" fillOpacity="0.3" />

            <line x1="8" y1="12" x2="0" y2="4" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="8" y1="18" x2="-2" y2="18" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="8" y1="24" x2="0" y2="30" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" />

            <line x1="32" y1="12" x2="40" y2="4" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="32" y1="18" x2="42" y2="18" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="32" y1="24" x2="40" y2="30" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" />

            <ellipse cx="20" cy="18" rx="14" ry="10" fill="#10B981" stroke="#0F172A" strokeWidth="2.2" />
            <line x1="6" y1="18" x2="34" y2="18" stroke="#047857" strokeWidth="1.8" />
            <circle cx="20" cy="18" r="4" fill="#F59E0B" stroke="#0F172A" strokeWidth="1" />

            <circle cx="20" cy="8" r="6" fill="#059669" stroke="#0F172A" strokeWidth="2" />
            <path d="M18,3 Q14,-4 10,-2" fill="none" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M22,3 Q26,-4 30,-2" fill="none" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="10" cy="-2" r="1.5" fill="#EF4444" />
            <circle cx="30" cy="-2" r="1.5" fill="#EF4444" />
            <circle cx="18" cy="7" r="1.8" fill="#FFFFFF" />
            <circle cx="18" cy="7" r="0.9" fill="#000000" />
            <circle cx="22" cy="7" r="1.8" fill="#FFFFFF" />
            <circle cx="22" cy="7" r="0.9" fill="#000000" />
          </g>

          {/* ITEM 3: QA SPIRAL NOTEBOOK */}
          <g 
            id="qa-notebook" 
            transform="translate(80, 440) rotate(-6)" 
            className="cursor-pointer group/notebook hover:opacity-95 transition-opacity" 
            onClick={onOpenNotesModal}
          >
            <rect 
              x="0" 
              y="0" 
              width="85" 
              height="115" 
              rx="4" 
              fill="#FEF3C7" 
              stroke="#0F172A" 
              strokeWidth="2.2" 
              filter="drop-shadow(0 4px 6px rgba(0,0,0,0.25))" 
            />
            {[...Array(9)].map((_, i) => (
              <g key={`spiral-${i}`} transform={`translate(2, ${12 + i * 11})`}>
                <ellipse cx="2" cy="0" rx="4" ry="2" fill="#94A3B8" stroke="#0F172A" strokeWidth="1" />
              </g>
            ))}

            <text x="16" y="21" fill="#92400E" fontSize="8" fontWeight="bold" fontFamily="monospace">
              QA NOTEBOOK
            </text>
            <line x1="16" y1="26" x2="75" y2="26" stroke="#D97706" strokeWidth="1" />

            <text x="16" y="42" fill="#15803D" fontSize="7.5" fontWeight="bold" fontFamily="monospace">• E2E Workflows</text>
            <text x="16" y="58" fill="#15803D" fontSize="7.5" fontWeight="bold" fontFamily="monospace">• API Contracts</text>
            <text x="16" y="74" fill="#0369A1" fontSize="7.5" fontWeight="bold" fontFamily="monospace">• Data Integrity</text>

            <rect x="14" y="86" width="58" height="15" rx="3" fill="#FDE68A" stroke="#D97706" strokeWidth="0.8" />
            <text x="43" y="97" textAnchor="middle" fill="#92400E" fontSize="6.5" fontWeight="bold" fontFamily="monospace">Read Notes ✎</text>

            <g transform="translate(64, 15) rotate(15)">
              <rect x="0" y="0" width="4" height="60" rx="1" fill="#0284C7" stroke="#0F172A" strokeWidth="1" />
              <polygon points="0,60 4,60 2,66" fill="#F59E0B" stroke="#0F172A" strokeWidth="0.8" />
              <rect x="0" y="5" width="4" height="6" fill="#E2E8F0" />
            </g>
          </g>

          {/* ITEM 4: POTTED SUCCULENT PLANT */}
          <g 
            id="desk-plant" 
            transform="translate(750, 470)" 
            className="cursor-pointer group/plant" 
            onClick={handlePlantClick}
          >
            <ellipse cx="20" cy="50" rx="20" ry="6" fill="#000000" fillOpacity="0.25" />
            <polygon points="6,30 34,30 30,50 10,50" fill="#EA580C" stroke="#0F172A" strokeWidth="2.2" />
            <rect x="4" y="26" width="32" height="6" rx="1" fill="#C2410C" stroke="#0F172A" strokeWidth="2" />
            
            <g className={plantWatered ? "animate-bounce" : ""}>
              <path d="M20,26 Q12,12 8,16 Q14,24 20,26" fill="#22C55E" stroke="#0F172A" strokeWidth="1.5" />
              <path d="M20,26 Q28,12 32,16 Q26,24 20,26" fill="#16A34A" stroke="#0F172A" strokeWidth="1.5" />
              <path d="M20,26 Q20,4 24,8 Q22,20 20,26" fill="#4ADE80" stroke="#0F172A" strokeWidth="1.5" />
              <path d="M20,26 Q14,8 18,6 Q19,18 20,26" fill="#15803D" stroke="#0F172A" strokeWidth="1.5" />
            </g>
            {plantWatered && (
              <text x="20" y="-4" textAnchor="middle" fill="#0284C7" fontSize="7" fontWeight="bold" fontFamily="monospace">
                + WATERED 🌱
              </text>
            )}
          </g>
        </svg>
      </div>

      {/* Subtle Interaction Hint Underneath */}
      <div className="mt-3 flex items-center justify-center sm:justify-start gap-2 px-1 text-xs font-mono text-slate-500 dark:text-slate-400">
        <span className="text-amber-500 font-bold">✦</span>
        <span>Interactive workspace — click the lamp, chai cup, screens, or notes</span>
      </div>
    </div>
  );
};

export default WorkspaceIllustration;
