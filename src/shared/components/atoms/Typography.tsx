import cn from "@/shared/utils/cn";
import type { ReactNode } from "react";

type TypoType =
  | "Head1"
  | "Head2"
  | "Head3"
  | "SubTitle1"
  | "SubTitle2"
  | "P1"
  | "P2"
  | "Caption";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

const typoTypeMap: Record<TypoType, string> = {
  Head1: "text-[36px] font-extrabold",
  Head2: "text-[30px] font-bold",
  Head3: "text-[23px] font-bold",
  SubTitle1: "text-[20px] font-semibold",
  SubTitle2: "text-[16px] font-semibold",
  P1: "text-[16px] text-medium",
  P2: "text-[14px] text-medium",
  Caption: "text-[12px] text-medium",
};

const BaseTypography = ({
  type,
  children,
  className,
}: TypographyProps & { type: TypoType }) => {
  const style = typoTypeMap[type];
  return <p className={cn(style, className)}>{children}</p>;
};

const Typography = {
  Head1: (props: TypographyProps) => <BaseTypography type="Head1" {...props} />,
  Head2: (props: TypographyProps) => <BaseTypography type="Head2" {...props} />,
  Head3: (props: TypographyProps) => <BaseTypography type="Head3" {...props} />,
  SubTitle1: (props: TypographyProps) => (
    <BaseTypography type="SubTitle1" {...props} />
  ),
  SubTitle2: (props: TypographyProps) => (
    <BaseTypography type="SubTitle2" {...props} />
  ),
  P1: (props: TypographyProps) => <BaseTypography type="P1" {...props} />,
  P2: (props: TypographyProps) => <BaseTypography type="P2" {...props} />,
  Caption: (props: TypographyProps) => (
    <BaseTypography type="Caption" {...props} />
  ),
  Success: (props: TypographyProps) => (
    <BaseTypography type="Caption" className="text-otl-success" {...props} />
  ),
  Error: (props: TypographyProps) => (
    <BaseTypography type="Caption" className="text-otl-error" {...props} />
  ),
};

export default Typography;
