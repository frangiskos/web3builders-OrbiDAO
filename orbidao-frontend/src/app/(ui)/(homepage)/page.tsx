import Link from "next/link";
import { Divider } from "@nextui-org/divider";
import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { Circle } from "@/assets/icons/Circle";

export default function Page() {
  return (
    <>
      <Circle />
      <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto max-w-5xl px-4">
        <Typography as="h1" className="text-center">
          The Present and Future of Organization Membership, Governance, and
          Treasury Management
        </Typography>
        <Typography as="h1" className="text-center mb-6">
          Only Possible on Solana
        </Typography>
        <Divider />
        <div className="mt-6 flex flex-wrap flex-row justify-between gap-4">
          <Link href={"/app"}>
            <Button
              className="mt-4"
              variant="solid"
              size="lg"
              roundness="full"
              isFullWidth
            >
              Welcome New DAOists
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
