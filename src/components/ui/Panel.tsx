import * as React from "react";
import { cn } from "@/lib/utils";

type PanelVariant = "lightCard" | "darkPanel" | "glass";

export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: PanelVariant;
  glow?: boolean;
  /** Adds hover-lift transition on lightCard panels */
  hoverable?: boolean;
}

// Dark panel: subtle primary glow at top + navy-to-navy-deep gradient
const DARK_PANEL_BG = [
  "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(22, 103, 233, 0.22) 0%, transparent 65%)",
  "linear-gradient(135deg, #0F162B 0%, #16234C 100%)",
].join(", ");

// Dark panel lift shadow + inner top-edge highlight
const DARK_PANEL_SHADOW =
  "inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 8px 40px rgba(0, 0, 0, 0.40)";

const Panel = React.forwardRef<HTMLDivElement, PanelProps>(
  ({ variant = "lightCard", glow = false, hoverable = false, className, style, children, ...props }, ref) => {
    const isDark = variant === "darkPanel";

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-panel",
          variant === "lightCard" && "border border-border bg-white shadow-soft",
          variant === "darkPanel" && "border border-white/10",
          variant === "glass" && [
            "border border-white/10 backdrop-blur-md",
            "[background:rgba(255,255,255,0.04)]",
            "shadow-soft",
          ],
          glow && "shadow-glow",
          hoverable && variant === "lightCard" && "transition-all duration-300 hover:-translate-y-1 hover:shadow-lift cursor-pointer",
          className
        )}
        style={
          isDark
            ? {
                background: DARK_PANEL_BG,
                boxShadow: DARK_PANEL_SHADOW,
                ...style,
              }
            : style
        }
        {...props}
      >
        {children}
      </div>
    );
  }
);

Panel.displayName = "Panel";

export { Panel };
