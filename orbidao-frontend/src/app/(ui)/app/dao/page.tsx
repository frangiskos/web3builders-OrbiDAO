import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { RadioGroup } from "@/components/ui/RadioGroup";
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
      <Link href="dao/new">
        <CardLink type="dashed" icon={<SvgIcon />}>
          <Typography>CyberAI Art</Typography>
        </CardLink>
      </Link>
      <CardLink type="solid" icon={<SvgIcon />}>
        <Typography>Harammbe</Typography>
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
        <Link href={"dao/new"} className="flex justify-center">
          <Button className="mt-4" variant="solid" roundness="full">
            Create a DAO
          </Button>
        </Link>

        <RadioGroup type="card" defaultValue="name2" orientation="horizontal">
          <RadioGroup.Radio type="card" value="name1">
            Blank
          </RadioGroup.Radio>
          <RadioGroup.Radio type="card" value="name2">
            Delaware C-Corp
          </RadioGroup.Radio>
          <RadioGroup.Radio type="card" value="name3">
            NFT Community
          </RadioGroup.Radio>
        </RadioGroup>

        <div className="mb-6">
          <OrganizationCard />
        </div>
      </div>
    </div>
  );
}
