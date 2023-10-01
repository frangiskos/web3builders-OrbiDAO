import { Button } from '@/components/ui/Button';
import { Circle } from './Circle';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Circle />
      <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto max-w-5xl px-4">
        <h3 className="text-3xl">Governance escape velocity</h3>
        <div className="w-[440px] text-center my-4">
          Bespoke decision making and management solutions for equitable and efficient organizations and communities.
        </div>
        <Link href={'dao/new'}>
          <Button className="mt-4" color="primary" radius="full">
            Create a DAO
          </Button>
        </Link>
      </div>
    </>
  );
}
