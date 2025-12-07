import { useEffect } from 'react';
import { logSessionStart, logSessionEnd } from '@/lib/telegram';

export const useSessionTracking = () => {
  useEffect(() => {
    // Check if session already started
    const sessionStarted = sessionStorage.getItem('pinch-session-logged');
    
    if (!sessionStarted) {
      logSessionStart();
      sessionStorage.setItem('pinch-session-logged', 'true');
    }

    // Handle page visibility change
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        logSessionEnd();
      }
    };

    // Handle before unload
    const handleBeforeUnload = () => {
      logSessionEnd();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
};
