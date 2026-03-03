import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // ── base variants ──────────────────────────────────────────────
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",

        // ── premium pill variants ──────────────────────────────────────
        /** Filled primary pill — light surfaces */
        pillPrimary:
          "rounded-full bg-primary text-primary-foreground hover:-translate-y-px hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(22,103,233,0.30)] active:translate-y-0 active:shadow-none",
        /** Outline pill — light surfaces */
        pillOutline:
          "rounded-full border border-foreground/15 bg-transparent text-foreground/75 hover:-translate-y-px hover:border-foreground/25 hover:bg-foreground/[0.05] hover:text-foreground active:translate-y-0",
        /** White filled pill — dark surfaces */
        glass:
          "rounded-full border border-white/20 bg-white font-semibold text-foreground hover:-translate-y-px hover:bg-white/90 active:translate-y-0",
        /** Ghost pill — dark surfaces */
        ghostDark:
          "rounded-full border border-white/25 text-white hover:bg-white/10 hover:-translate-y-px active:translate-y-0",
        /** Subtle muted pill — any surface */
        subtle:
          "rounded-full bg-foreground/[0.06] text-foreground hover:bg-foreground/[0.10] hover:-translate-y-px active:translate-y-0",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-6",
        xl: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
