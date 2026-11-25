"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { homepageData } from "@/data/homepage";

export default function HeroSection() {
  const hero = homepageData.hero;

  const videoRef = useRef<HTMLVideoElement>(null);

  // Automatic playback with reduced-motion support.
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updatePlayback = () => {
      if (motionPreference.matches) {
        video.pause();
      } else {
        video.play().catch(() => {
          // Autoplay may be blocked by the browser.
        });
      }
    };

    updatePlayback();

    motionPreference.addEventListener("change", updatePlayback);

    return () => {
      motionPreference.removeEventListener("change", updatePlayback);
      video.pause();
    };
  }, []);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[620px] w-full items-center overflow-hidden bg-slate-950 sm:min-h-[680px] lg:min-h-[80svh]"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        poster={hero.media.poster ?? undefined}
        aria-hidden="true"
        tabIndex={-1}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center lg:object-right"
      >
        <source src={hero.media.video} type={hero.media.videoType} />
      </video>

      {/* Cinematic Gradient Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/65 to-slate-950/20"
      />

      {/* Additional Mobile Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-slate-950/30 lg:hidden"
      />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 py-24 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-300" />

            <span className="text-xs font-semibold tracking-[0.2em] text-blue-200 sm:text-sm">
              {hero.eyebrow}
            </span>
          </div>

          {/* Main Heading */}
          <h1
            id="hero-heading"
            className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            {hero.title.primary}

            <span className="mt-2 block text-blue-300">
              {hero.title.secondary}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg lg:text-xl">
            {hero.description}
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            {/* Primary Action */}
            <Button
              data-appointment-cta="true"
              render={<Link href={hero.primaryAction.href} />}
              nativeButton={false}
              className="h-14 rounded-full bg-white px-8 text-base font-semibold text-slate-900 transition-colors hover:bg-blue-100"
            >
              {hero.primaryAction.label}
              <ArrowRight className="ml-2 size-5" />
            </Button>

            {/* Secondary Action */}
            <Button
              render={<Link href={hero.secondaryAction.href} />}
              nativeButton={false}
              variant="outline"
              className="h-14 rounded-full border-white/60 bg-transparent px-8 text-base font-medium text-white transition-colors hover:bg-white/15 hover:text-white"
            >
              {hero.secondaryAction.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
