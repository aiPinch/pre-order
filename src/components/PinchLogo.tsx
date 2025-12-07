export const PinchLogo = ({ className = "h-8" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Icon - stylized pulse/wave */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        <path
          d="M4 16C4 16 6 16 8 12C10 8 12 20 14 16C16 12 18 24 20 16C22 8 24 16 26 16C28 16 28 16 28 16"
          stroke="url(#pulse-gradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="pulse-gradient" x1="4" y1="16" x2="28" y2="16" gradientUnits="userSpaceOnUse">
            <stop stopColor="hsl(174 72% 56%)" />
            <stop offset="1" stopColor="hsl(190 80% 50%)" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Text */}
      <span className="font-bold text-foreground tracking-tight" style={{ fontSize: '1.5em' }}>
        Pinch
      </span>
    </div>
  );
};