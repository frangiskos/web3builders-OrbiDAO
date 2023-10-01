import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { usePathname } from 'next/navigation';
import { Link } from '@nextui-org/link';
import { Logo } from './ui/Logo';
import { ConnectWalletButton } from './ui/ConnectWalletButton';

export function AppNavMenu() {
  const pathname = usePathname();
  const menu = [
    { link: '/app', label: 'Home' },
    { link: '/app/dao', label: 'DAOs' },
    { link: '/app/proposal', label: 'Proposals' },
  ];

  return (
    <Navbar className="bg-gray-900">
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menu.map((item) => (
          <NavbarItem key={item.link}>
            <Link color={pathname === item.link ? 'primary' : 'foreground'} href={item?.link}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ConnectWalletButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
