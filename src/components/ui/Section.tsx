import * as React from "react";
import { cn } from "@/lib/utils";

type SectionVariant = "light" | "dark" | "muted" | "transparent";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: SectionVariant;
  id?: string;
}

const variantClasses: Record<SectionVariant, string> = {
  light: "bg-background",
  dark: "bg-foreground",
  muted: "bg-muted",
  transparent: "",
};

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ variant = "light", id, className, children, ...props }, ref) => (
    <section
      ref={ref}
      id={id}
      className={cn(
        "relative w-full py-20 lg:py-28",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
);

Section.displayName = "Section";

export { Section };
