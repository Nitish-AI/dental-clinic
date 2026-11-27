"use client";

import { PhoneCall } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import CallbackForm from "@/components/contact/CallbackForm";
import { callbackFormContent } from "@/data/contact";

// ==========================================
// CALLBACK DIALOG PROPS
// ==========================================

interface CallbackDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// ==========================================
// CALLBACK DIALOG
// ==========================================

export default function CallbackDialog({
  open,
  onOpenChange,
}: CallbackDialogProps) {
  const content = callbackFormContent;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
                    max-h-[92dvh]
                    w-[calc(100%_-_2rem)]
                    max-w-[640px]
                    overflow-y-auto
                    overscroll-contain
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    text-slate-900
                    sm:max-w-[640px]
                    sm:p-8
                "
      >
        {/* ============================= */}
        {/* DIALOG HEADER */}
        {/* ============================= */}

        <DialogHeader className="items-center space-y-3 text-center">
          {/* Callback icon */}
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-blue-50 text-[#102B50] sm:size-16">
            <PhoneCall aria-hidden="true" className="size-7 sm:size-8" />
          </div>

          {/* Dialog title */}
          <DialogTitle className="text-center text-2xl font-bold tracking-tight text-[#102B50] sm:text-3xl">
            {content.title}
          </DialogTitle>

          {/* Dialog description */}
          <DialogDescription className="mx-auto max-w-md text-center text-sm leading-relaxed text-slate-600 sm:text-base">
            {content.description}
          </DialogDescription>
        </DialogHeader>

        {/* ============================= */}
        {/* CALLBACK FORM */}
        {/* ============================= */}

        <div className="mt-3">{open && <CallbackForm />}</div>
      </DialogContent>
    </Dialog>
  );
}
