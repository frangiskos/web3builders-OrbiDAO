"use client";

import { createContext, useContext, useState } from "react";
import { AppNavMenu } from "@/components/AppNavMenu";
import { WalletProviders } from "./wallet-providers";
import { WalletSignedInGuard } from "./wallet-signed-in-guard";
import { NotificationList } from "@/components/ui/Notification";
import { Footer } from "@/components/ui/Footer";
import { Circle } from "@/assets/icons/Circle";

interface OrgContextProps {
  organizations: string[];
  addOrganization: (org: string) => void;
}

const OrgContext = createContext<OrgContextProps | undefined>(undefined);

export function useOrgContext() {
  const context = useContext(OrgContext);
  if (context === undefined) {
    throw new Error('useOrgContext must be used within an OrgProvider');
  }
  return context;
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [organizations, setOrganizations] = useState<string[]>(['Orbit DAO']);

  const addOrganization = (org: string) => {
    console.log(organizations);
    setOrganizations([...organizations, org]);
  };

  return (
    <>
      <Circle />
      <WalletProviders>
        <OrgContext.Provider value={{ organizations, addOrganization }}>
          <AppNavMenu />
          <div className="pt-6 flex flex-col items-center justify-center align-center mx-auto max-w-5xl px-4">
            <main className="relative w-full min-h-[calc(100vh_-_64px_-_110px)] flex-col flex align-center justify-center">
              <WalletSignedInGuard>{children}</WalletSignedInGuard>
            </main>
          </div>
          <Footer />
        </OrgContext.Provider>
      </WalletProviders>
      <NotificationList />
    </>
  );
}
