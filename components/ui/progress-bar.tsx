import React from "react";

interface ProgressBarProps {
  score: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ score }) => {
  return (
    <div className="flex items-center gap-2">
      {/* Progress Bar Background */}
      <div className="my-2 h-3 w-full rounded-full bg-gray-200">
        {/* Progress Indicator */}
        <div
          style={{ width: score }}
          className="bg-light-primary h-3 rounded-full"
        />
      </div>
      {/* Score Display */}
      <span className="text-xs text-black/80">{score}</span>
    </div>
  );
};

export default ProgressBar;
