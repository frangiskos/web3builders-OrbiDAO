import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { Logo } from './ui/Logo';
import { ConnectWalletButton } from './ui/ConnectWalletButton';

export function AppNavMenu() {
  return (
    <Navbar className="bg-gray-900">
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <ConnectWalletButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
