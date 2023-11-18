import React, { useEffect, useState } from 'react';

const ProgressBar = ({ percentage }) => {
    const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < percentage) {
        setProgress((prevProgress) => prevProgress + 1);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [percentage, progress]);
  return (
    <div className="w-full h-4 bg-gray-300 rounded-full p-1">
      <div
        className="h-full bg-[#930000] rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;