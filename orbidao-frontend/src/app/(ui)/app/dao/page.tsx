import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { CardLink } from "@/components/ui/CardLink";
import Link from "next/link";
import Image from "next/image";

const SvgIcon: React.FC = () => (
  <Image
    src="/img/icon/favicon-32x32.png"
    alt="My Icon"
    width={35}
    height={35}
  />
);

const OrganizationCard: React.FC = () => (
  <Card className="w-full border border-white bg-gradient-to-b from-zinc-800 to-gray-700">
    <CardHeader className="w-full justify-center">
      <Typography className="my-2" as="h4">
        Your Organizations
      </Typography>
    </CardHeader>
    <CardBody>
      <CardLink type="dashed" icon={<SvgIcon />}>
        <Typography>Orbit DAO</Typography>
      </CardLink>
      <Divider className="my-4" />
      <Link href="dao/new">
        <Button className="mt-2" variant="solid" roundness="full" isFullWidth>
          Create a DAO
        </Button>
      </Link>
    </CardBody>
  </Card>
);

export default function Page() {
  return (
    <div className="flex flex-row w-full justify-center">
      <div className="flex flex-col justify-center align-middle">
        <Typography as="h3" className="text-center">
          Governance escape velocity
        </Typography>
        <Typography className="w-[440px] mx-auto text-center my-4">
          Bespoke decision making and management solutions for equitable and
          efficient organizations and communities.
        </Typography>

        <div className="mb-6">
          <OrganizationCard />
        </div>
      </div>
    </div>
  );
}
