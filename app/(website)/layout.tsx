import type { ReactNode } from "react";
import Header from "@/components/ui/layout/Header";

interface WebsiteLayoutProps {
  children: ReactNode;
}

export default function WebsiteLayout({ children }: WebsiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">{children}</main>
    </div>
  );
}
