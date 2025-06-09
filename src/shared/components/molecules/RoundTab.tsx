import cn from "@/shared/utils/cn";
import React from "react";
import Typography from "../atoms/Typography";

interface ToggleTabProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const RoundTab: React.FC<ToggleTabProps> = ({ options, value, onChange }) => {
  return (
    <div className="inline-flex items-center justify-center rounded-full p-1 text-otl-gray gap-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={cn(
            "px-5 py-2 rounded-full text-sm font-semibold text-gray-600 transition",
            option === value ? "bg-otl-sub shadow " : "hover:bg-otl-sub"
          )}
        >
          <Typography.P1>{option}</Typography.P1>
        </button>
      ))}
    </div>
  );
};

export default RoundTab;
