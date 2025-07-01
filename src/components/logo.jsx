import React, { useEffect, useState } from 'react';

export default function Logo() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 1500); // 3 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (!showLogo) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white dark:bg-gray-900 px-6 py-2 rounded-lg shadow-md transition-opacity duration-500 ease-in-out">
      <h1 className="text-2xl font-extrabold tracking-wide">
        <span className="text-gray-900 dark:text-white">Revenue</span>
        <span className="text-blue-600 dark:text-blue-400">Hub</span>
      </h1>
    </div>
  );
}
