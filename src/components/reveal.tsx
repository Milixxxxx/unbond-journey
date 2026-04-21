import { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Inline-Style delay in ms (für sanfte Stagger-Effekte) */
  delay?: number;
  as?: "div" | "p" | "section" | "article" | "li";
}

/**
 * Reveal — fadet Inhalt sanft beim Scrollen ein (Apple-like Calm Reveal).
 * Nutzt useReveal Hook + .reveal CSS-Klasse aus styles.css.
 */
export function Reveal({ children, className, delay, as: Tag = "div" }: RevealProps) {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", className)}
      data-reveal={revealed ? "true" : "false"}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
