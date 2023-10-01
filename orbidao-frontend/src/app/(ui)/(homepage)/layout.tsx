import { HomeNavMenu } from '@/components/HomeNavMenu';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HomeNavMenu />
      {children}
    </>
  );
}
