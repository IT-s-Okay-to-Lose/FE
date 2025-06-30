import cn from "@/shared/utils/cn";
import type { InputHTMLAttributes } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import Typography from "./Typography";

interface UnitInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  unit?: string;
  register?: UseFormRegisterReturn;
}

const UnitInput = ({ className, unit, register, ...props }: UnitInputProps) => {
  return (
    <div
      className={cn(
        "relative flex gap-2 pr-5 focus-within:pr-[19px] items-center rounded-md box-border border-[1px] border-otl-sub bg-white",
        "focus-within:border-2 focus-within:border-otl-main"
      )}
      {...props}
    >
      <input
        className={cn(
          "w-[270px] h-[50px] focus:h-[48px] rounded-md border-none bg-white p-3 text-[16px] text-right font-semibold text-black placeholder:text-otl-gray focus:outline-none",
          className
        )}
        {...(register ?? {})}
        {...props}
      />
      <Typography.SubTitle2>{unit}</Typography.SubTitle2>
    </div>
  );
};

UnitInput.displayName = "UnitInput";
export default UnitInput;
