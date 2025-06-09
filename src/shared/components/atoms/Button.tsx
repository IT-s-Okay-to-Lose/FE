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

const createDefaultButton = (
  customClassName: string = "",
  defaultProps?: Partial<ButtonBaseProps>
): FC<ButtonBaseProps> => {
  const Component: FC<ButtonBaseProps> = ({
    children,
    className,
    ...props
  }) => (
    <button
      {...defaultProps}
      className={cn(DefaultButtonClass, customClassName, className)}
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
    ...props
  }) => (
    <button
      {...defaultProps}
      className={cn(SmallButtonClass, customClassName, className)}
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
  Disabled: createDefaultButton("bg-otl-disabled text-white rounded-md", {
    disabled: true,
  }),

  Round: {
    Main: createDefaultButton("bg-otl-main text-white rounded-full"),
    Sub: createDefaultButton("bg-otl-sub text-otl-gray rounded-full"),
    Point: createDefaultButton("bg-otl-point text-white rounded-full"),
    Disabled: createDefaultButton("bg-otl-disabled text-white rounded-full", {
      disabled: true,
    }),
  },
  Small: {
    Main: createSmallButton("bg-otl-main text-white rounded-md"),
    Sub: createSmallButton("bg-otl-sub text-otl-gray rounded-md"),
    Point: createSmallButton("bg-otl-point text-white rounded-md"),
    Disabled: createSmallButton("bg-otl-disabled text-white rounded-md", {
      disabled: true,
    }),
  },
};

Button.Main.displayName = "Button.Main";
Button.Sub.displayName = "Button.Sub";
Button.Point.displayName = "Button.Point";
Button.Disabled.displayName = "Button.Disabled";

Button.Round.Main.displayName = "Button.Round.Main";
Button.Round.Sub.displayName = "Button.Round.Sub";
Button.Round.Point.displayName = "Button.Round.Point";
Button.Round.Disabled.displayName = "Button.Round.Disabled";

Button.Small.Main.displayName = "Button.Small.Main";
Button.Small.Sub.displayName = "Button.Small.Sub";
Button.Small.Point.displayName = "Button.Small.Point";
Button.Small.Disabled.displayName = "Button.Small.Disabled";

export default Button;
