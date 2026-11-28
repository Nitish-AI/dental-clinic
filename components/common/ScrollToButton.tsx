"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface ScrollToButtonProps {
  targetId: string;
  children: ReactNode;
  className?: string;
}

export default function ScrollToButton({
  targetId,
  children,
  className,
}: ScrollToButtonProps) {
  const handleScroll = () => {
    const target = document.getElementById(targetId);

    if (!target) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    target.scrollIntoView({
      behavior: prefersReducedMotion ? "instant" : "smooth",
      block: "start",
    });
  };

  return (
    <Button type="button" onClick={handleScroll} className={className}>
      {children}
    </Button>
  );
}
