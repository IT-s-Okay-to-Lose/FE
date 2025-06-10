import cn from "@/shared/utils/cn";
import type { ButtonHTMLAttributes, FC, ReactNode } from "react";
import Typography from "./Typography";

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const DefaultButtonClass =
  "box-border border border-gray-200 transition-all duration-200 flex items-center justify-center gap-2 w-[300px] h-[50px]";

const SmallButtonClass =
  "box-border border border-gray-200 transition-all duration-200 flex items-center justify-center gap-2 w-[115px] h-[40px]";

const DisabledButtonClass = (baseClass: string, disabled?: boolean) =>
  disabled ? "bg-otl-disabled text-white" : baseClass;

const createDefaultButton = (
  customClassName: string = "",
  defaultProps?: Partial<ButtonBaseProps>
): FC<ButtonBaseProps> => {
  const Component: FC<ButtonBaseProps> = ({
    children,
    className,
    disabled,
    ...props
  }) => (
    <button
      {...defaultProps}
      disabled={disabled}
      className={cn(
        DefaultButtonClass,
        customClassName,
        className,

        DisabledButtonClass(customClassName, disabled)
      )}
      {...props}
    >
      <Typography.SubTitle1>{children}</Typography.SubTitle1>
    </button>
  );

  return Component;
};

const createSmallButton = (
  customClassName: string = "",
  defaultProps?: Partial<ButtonBaseProps>
): FC<ButtonBaseProps> => {
  const Component: FC<ButtonBaseProps> = ({
    children,
    className,
    disabled,
    ...props
  }) => (
    <button
      {...defaultProps}
      disabled={disabled}
      className={cn(
        SmallButtonClass,
        customClassName,
        className,
        DisabledButtonClass(customClassName, disabled)
      )}
      {...props}
    >
      <Typography.P2>{children}</Typography.P2>
    </button>
  );

  return Component;
};

const Button = {
  Main: createDefaultButton("bg-otl-main text-white rounded-md"),
  Sub: createDefaultButton("bg-otl-sub text-otl-gray rounded-md"),
  Point: createDefaultButton("bg-otl-point text-white rounded-md"),

  Round: {
    Main: createDefaultButton("bg-otl-main text-white rounded-full"),
    Sub: createDefaultButton("bg-otl-sub text-otl-gray rounded-full"),
    Point: createDefaultButton("bg-otl-point text-white rounded-full"),
  },
  Small: {
    Main: createSmallButton("bg-otl-main text-white rounded-md"),
    Sub: createSmallButton("bg-otl-sub text-otl-gray rounded-md"),
    Point: createSmallButton("bg-otl-point text-white rounded-md"),
  },
};

Button.Main.displayName = "Button.Main";
Button.Sub.displayName = "Button.Sub";
Button.Point.displayName = "Button.Point";

Button.Round.Main.displayName = "Button.Round.Main";
Button.Round.Sub.displayName = "Button.Round.Sub";
Button.Round.Point.displayName = "Button.Round.Point";

Button.Small.Main.displayName = "Button.Small.Main";
Button.Small.Sub.displayName = "Button.Small.Sub";
Button.Small.Point.displayName = "Button.Small.Point";

export default Button;
