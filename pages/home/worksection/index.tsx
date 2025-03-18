"use client";

import Image from "next/image";
import Button from "@/common/button";
import WorkBgImage from "../../../public/workbgimage.png";
import WorkBgMobileImage from "../../../public/workbgimagemobile.png";
import { useWindowWidth } from "@react-hook/window-size";

export default function WorkSection() {
  const windowWidth = useWindowWidth();

  return (
    <section className="my-[112px]">
      <div className="container relative">
        <div className="relative m-auto w-full lg:w-3/4 flex justify-center">
          {windowWidth >= 1024 && (
            <Image
              src={WorkBgImage}
              quality={100}
              width={1000}
              height={500}
              alt="work-image"
            />
          )}
          {windowWidth < 1024 && (
            <Image
              src={WorkBgMobileImage}
              quality={100}
              width={1000}
              height={500}
              alt="work-mobile-image"
            />
          )}
        </div>
        <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center">
          <div className="text-white flex flex-col items-center">
            <h3 className="w-[200px] m-auto text-[40px] text-center font-bold md:text-[50px] lg:text-[60px] lg:w-full pb-8">
              we are open from
            </h3>
            <div className="text-center">
              <h4 className="text-[24px] md:text-[40px] font-semibold leading-normal pb-[10px]">
                Monday-Sunday
              </h4>
              <p className="text-[16px] md:text-[18px]">
                Launch : Mon-Sun : 11:00am-02:00pm
              </p>
              <p className="text-[16px] md:text-[18px]">
                Dinner : sunday : 04:00pm-08:00pm
              </p>
              <p className="text-[16px] md:text-[18px] text-right">
                04:00pm-09:00pm
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-4 py-[20px] md:flex-row md:space-y-0 md:space-x-3 md:py[20px] lg:py-[25px]">
            <Button variant="orange" size="responsive">
              Order Now
            </Button>
            <Button variant="white" size="responsive">
              Reservation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
