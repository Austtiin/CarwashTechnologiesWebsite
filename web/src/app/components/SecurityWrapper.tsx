'use client';
import { useEffect } from 'react';

export default function SecurityWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    //Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      //e.preventDefault();
      //return false;
    };

    // Disable common developer tool shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Disable text selection (optional - may hurt user experience)
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    // Uncomment the line below if you want to disable text selection
    // document.addEventListener('selectstart', handleSelectStart);

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', handleSelectStart);
    };
  }, []);

  return <>{children}</>;
}