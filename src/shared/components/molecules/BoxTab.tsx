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
    <div
      className={cn("flex w-fit p-1 rounded-md gap-2 bg-otl-sub", className)}
    >
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={cn(
            "rounded-md font-semibold text-otl-gray transition whitespace-nowrap",
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
  Default: createRoundTab("w-[115px] h-[40px] px-5 py-2 text-sm"),
  Small: createRoundTab("w-[70px] h-[35px] px-3 py-1 text-xs"),
  Large: createRoundTab("w-[130px] h-[45px] px-6 py-3 text-lg"),
};

export default BoxTab;
