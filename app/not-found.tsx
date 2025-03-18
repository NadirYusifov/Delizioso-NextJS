import Layout from "@/components/layouts/layout";
import { Button } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout>
      <div className="h-screen flex flex-col items-center">
        <h1 className="text-[250px] leading-[300px] text-dark-orange">404</h1>
        <h3 className="text-[50px] text-medium-roast">Not Found</h3>
        <p className="text-[20px]">Could not find requested resource</p>
        <div className="p-10">
          <Button className="!bg-matt-green" variant="contained">
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
