import { cn } from "@/lib/utils";

const maxWidths = {
  sm:   "max-w-2xl",   // 672px  — narrow editorial
  md:   "max-w-4xl",   // 896px  — focused content
  lg:   "max-w-5xl",   // 1024px — standard layout
  xl:   "max-w-6xl",   // 1152px — wide layout (default)
  full: "max-w-7xl",   // 1280px — full-bleed content
} as const;

interface ContainerProps {
  children: React.ReactNode;
  size?: keyof typeof maxWidths;
  className?: string;
  as?: React.ElementType;
}

export function Container({
  children,
  size = "xl",
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        maxWidths[size],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
