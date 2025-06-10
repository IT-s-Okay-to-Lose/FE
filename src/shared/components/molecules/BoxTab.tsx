import cn from "@/shared/utils/cn";
import React from "react";
import Typography from "../atoms/Typography";

interface ToggleTabProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

interface ToggleTabProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const createRoundTab = (sizeClass: string) => {
  const Tab: React.FC<ToggleTabProps> = ({
    options,
    value,
    onChange,
    className,
  }) => (
    <div className={cn(" w-full rounded-md gap-2 bg-otl-sub", className)}>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={cn(
            "rounded-md font-semibold text-otl-gray transition",
            sizeClass,
            option === value ? "bg-white shadow" : "hover:bg-white"
          )}
        >
          <Typography.P1>{option}</Typography.P1>
        </button>
      ))}
    </div>
  );
  return Tab;
};

const BoxTab = {
  Default: createRoundTab("px-5 py-2 text-sm"),
  Small: createRoundTab("px-3 py-1 text-xs"),
};

export default BoxTab;
