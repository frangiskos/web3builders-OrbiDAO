import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { Button } from '@/components/ui/Button';
import { Link } from '@nextui-org/link';
import { Logo } from './ui/Logo';

export function HomeNavMenu() {
  return (
    <Navbar>
      <NavbarBrand>
        <Logo />
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button size="sm" as={Link} color="primary" href="/app">
            Enter App
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
