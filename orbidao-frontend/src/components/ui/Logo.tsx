import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => (
  <Link href={'/'}>
    <Image priority={true} src="/img/branding/orbidao-logo-white.png" width={160} height={33} alt="OrbiDAO logo" />
  </Link>
);
