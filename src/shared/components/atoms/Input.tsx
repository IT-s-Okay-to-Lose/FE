import cn from "@/shared/utils/cn";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  name?: string;
  icon?: React.ReactNode;
}

const Input = ({ className, icon, ...props }: InputProps) => {
  return (
    <div className="relative w-full">
      {icon && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </span>
      )}
      <input
        className={cn(
          "focus:ring-otl-main w-[300px] h-[50px] rounded-md border border-gray-200 bg-white p-3 text-[16px] font-semibold text-black placeholder:text-otl-gray focus:border-otl-main focus:border-2 focus:outline-none",
          icon && "pl-10",
          className
        )}
        {...props}
      />
    </div>
  );
};

Input.displayName = "Input";
export default Input;
