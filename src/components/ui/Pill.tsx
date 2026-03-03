import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pillVariants = cva(
  "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full font-semibold transition-colors",
  {
    variants: {
      variant: {
        /** Light surface — border + muted bg */
        default: "border border-border bg-muted text-muted-foreground",
        /** Dark pill — navy bg, white text — light surfaces */
        dark: "bg-foreground text-primary-foreground",
        /** Frosted glass — dark panel surfaces */
        glass:
          "border border-white/20 bg-white/10 text-white hover:bg-white/15",
        /** Outline-only — dark panel surfaces */
        outline:
          "border border-white/15 text-white/55 hover:border-white/30 hover:text-white/80",
        /** Secondary fill — light card surfaces */
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
      size: {
        sm: "px-2.5 py-0.5 text-xs tracking-[0.06em]",
        md: "px-3.5 py-1 text-xs tracking-[0.08em]",
        lg: "px-5 py-1.5 text-xs tracking-[0.10em]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface PillProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof pillVariants> {}

const Pill = React.forwardRef<HTMLSpanElement, PillProps>(
  ({ className, variant, size, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(pillVariants({ variant, size, className }))}
      {...props}
    />
  )
);
Pill.displayName = "Pill";

export { Pill, pillVariants };
