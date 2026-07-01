import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#07070c]">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes custom-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes custom-spin-reverse {
          to { transform: rotate(-360deg); }
        }
        @keyframes custom-pulse {
          0%, 100% { transform: scale(0.85); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        @keyframes custom-shimmer {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
        .animate-custom-spin {
          animation: custom-spin 1.4s linear infinite;
        }
        .animate-custom-spin-reverse {
          animation: custom-spin-reverse 1.8s linear infinite;
        }
        .animate-custom-pulse {
          animation: custom-pulse 2.5s ease-in-out infinite;
        }
        .animate-custom-shimmer {
          animation: custom-shimmer 1.6s ease-in-out infinite;
        }
      `}} />

      {/* Ambient Glowing Background Orb */}
      <div className="absolute w-[350px] h-[350px] rounded-full bg-[#2E2C76]/20 blur-[90px] pointer-events-none" />

      {/* Loader Elements Container */}
      <div className="relative flex flex-col items-center gap-6">
        
        {/* Double Concentric Spinner */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Outer Spin Ring */}
          <div className="absolute inset-0 rounded-full border-t-2 border-b-2 border-r-2 border-transparent border-t-[#2E2C76] border-b-[#2E2C76] animate-custom-spin filter drop-shadow-[0_0_10px_rgba(46,44,118,0.5)]" />
          
          {/* Inner Reverse Spin Ring */}
          <div className="absolute w-26 h-26 rounded-full border-l border-r border-t border-b border-transparent border-l-white/10 border-r-white/10 animate-custom-spin-reverse" />
          
          {/* Central Pulsing Logo */}
          <div className="relative w-14 h-14 flex items-center justify-center animate-custom-pulse">
            <Image
              src="/finchhivlogo.png"
              alt="Finchhive Logo"
              width={56}
              height={56}
              className="object-contain filter invert brightness-200"
              priority
            />
          </div>
        </div>

        {/* Glowing Brand Label */}
        <div className="flex flex-col items-center gap-2 mt-2">
          <span className="heading text-white text-xs uppercase tracking-[0.3em] font-extrabold text-center pl-[0.3em] opacity-80">
            FINCHHIVE
          </span>
          
          {/* Sliding Progress Line */}
          <div className="w-20 h-[1.5px] bg-[#2E2C76]/30 relative overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-[#2E2C76] animate-custom-shimmer" />
          </div>
        </div>

      </div>
    </div>
  );
}
