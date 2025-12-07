export const HealthBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Main gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh opacity-70" />
      
      {/* Animated organic shapes - DNA/cell inspired with more colors */}
      <div className="absolute top-[5%] left-[5%] w-[500px] h-[500px] rounded-full bg-health-teal/8 blur-3xl animate-pulse-health" />
      <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] rounded-full bg-health-cyan/8 blur-3xl animate-pulse-health" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[50%] left-[10%] w-[350px] h-[350px] rounded-full bg-health-green/8 blur-3xl animate-pulse-health" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[30%] right-[15%] w-[300px] h-[300px] rounded-full bg-health-purple/6 blur-3xl animate-pulse-health" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-[10%] left-[30%] w-[400px] h-[400px] rounded-full bg-health-blue/6 blur-3xl animate-pulse-health" style={{ animationDelay: '1.5s' }} />
      
      {/* Extra accent colors */}
      <div className="absolute top-[40%] right-[40%] w-[200px] h-[200px] rounded-full bg-[hsl(320_60%_50%/0.04)] blur-3xl animate-pulse-health" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[70%] left-[60%] w-[250px] h-[250px] rounded-full bg-[hsl(45_80%_50%/0.03)] blur-3xl animate-pulse-health" style={{ animationDelay: '2.5s' }} />
      
      {/* Floating health particles */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="particle1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(174 72% 56%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(174 72% 56%)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="particle2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(190 80% 50%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(190 80% 50%)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="particle3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(160 60% 45%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(160 60% 45%)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="particle4" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(270 50% 55%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(270 50% 55%)" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Floating circles with varied colors */}
        <circle cx="8%" cy="15%" r="6" fill="url(#particle1)" className="animate-float" style={{ animationDelay: '0s' }} />
        <circle cx="92%" cy="12%" r="4" fill="url(#particle2)" className="animate-float" style={{ animationDelay: '1s' }} />
        <circle cx="75%" cy="55%" r="7" fill="url(#particle1)" className="animate-float" style={{ animationDelay: '2s' }} />
        <circle cx="15%" cy="65%" r="5" fill="url(#particle3)" className="animate-float" style={{ animationDelay: '0.5s' }} />
        <circle cx="88%" cy="75%" r="4" fill="url(#particle4)" className="animate-float" style={{ animationDelay: '1.5s' }} />
        <circle cx="35%" cy="85%" r="6" fill="url(#particle1)" className="animate-float" style={{ animationDelay: '2.5s' }} />
        <circle cx="5%" cy="45%" r="5" fill="url(#particle3)" className="animate-float" style={{ animationDelay: '3s' }} />
        <circle cx="55%" cy="25%" r="5" fill="url(#particle2)" className="animate-float" style={{ animationDelay: '0.8s' }} />
        <circle cx="45%" cy="40%" r="4" fill="url(#particle4)" className="animate-float" style={{ animationDelay: '1.2s' }} />
        <circle cx="70%" cy="90%" r="5" fill="url(#particle2)" className="animate-float" style={{ animationDelay: '1.8s' }} />
      </svg>
      
      {/* Subtle wave lines - heartbeat/EKG inspired */}
      <svg className="absolute bottom-0 left-0 w-full h-40 opacity-15" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          d="M0,60 Q180,20 360,60 T720,60 T1080,60 T1440,60"
          fill="none"
          stroke="hsl(174 72% 56%)"
          strokeWidth="1.5"
          className="animate-wave"
        />
        <path
          d="M0,80 Q180,40 360,80 T720,80 T1080,80 T1440,80"
          fill="none"
          stroke="hsl(190 80% 50%)"
          strokeWidth="1"
          className="animate-wave"
          style={{ animationDelay: '0.5s' }}
        />
        <path
          d="M0,100 Q180,70 360,100 T720,100 T1080,100 T1440,100"
          fill="none"
          stroke="hsl(270 50% 55%)"
          strokeWidth="0.8"
          className="animate-wave"
          style={{ animationDelay: '1s' }}
        />
      </svg>
      
      {/* Grid pattern overlay for tech feel */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(174 72% 56%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(174 72% 56%) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
    </div>
  );
};