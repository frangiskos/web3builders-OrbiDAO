"use client";

import { AppNavMenu } from "@/components/AppNavMenu";
import { WalletProviders } from "./wallet-providers";
import { WalletSignedInGuard } from "./wallet-signed-in-guard";
import { NotificationList } from "@/components/ui/Notification";
import { Footer } from "@/components/ui/Footer";
import { Circle } from "@/assets/icons/Circle";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Circle />
      <WalletProviders>
        <AppNavMenu />
        <div className="pt-6 flex flex-col items-center justify-center align-center mx-auto max-w-5xl px-4">
          <main className="relative w-full min-h-[calc(100vh_-_64px_-_110px)] flex-col flex align-center justify-center">
            <WalletSignedInGuard>{children}</WalletSignedInGuard>
          </main>
        </div>
        <Footer />
      </WalletProviders>
      <NotificationList />
    </>
  );
}
