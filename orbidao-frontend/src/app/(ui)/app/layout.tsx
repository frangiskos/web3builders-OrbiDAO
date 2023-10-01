'use client';

import { AppNavMenu } from '@/components/AppNavMenu';
import { WalletProviders } from './wallet-providers';
import { WalletSignedInGuard } from './wallet-signed-in-guard';
import { NotificationList } from '@/components/ui/Notification';
import { Footer } from '@/components/ui/Footer';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WalletProviders>
        <AppNavMenu />
        <div className="bg-gradient-to-b from-zinc-900 backdrop-blur-[30px]">
          <main className="relative min-h-[calc(100vh_-_64px_-_110px)]">
            <WalletSignedInGuard>{children}</WalletSignedInGuard>
          </main>
        </div>
        <Footer />
      </WalletProviders>
      <NotificationList />
    </>
  );
}
