"use client";

import Button from "@/common/button";
import Image from "next/image";
import ReserveFirstImage from "../../../public/reserveimg1.png";
import ReserveSecondImage from "../../../public/reserveimg2.png";
import ReserveThirdImage from "../../../public/reserveimg3.png";
import ReserveMobileImage from "../../../public/reservemobileimg.png";
import { useWindowWidth } from "@react-hook/window-size";

export default function ReserveSection() {
  const windowWidth = useWindowWidth();

  return (
    <section className="bg-soft-pillow py-[110px]">
      <div className="reserve-wrapper grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center">
        {windowWidth < 1024 && (
          <div className="relative order-2">
            <Image
              quality={100}
              width={700}
              src={ReserveMobileImage}
              alt="reserve-section"
            />
          </div>
        )}
        {windowWidth >= 1024 && (
          <div className="reserve-image relative">
            <div className="relative">
              <Image
                width={1300}
                src={ReserveFirstImage}
                alt="reserve-section"
              />
            </div>
            <div className="absolute -top-6 right-6 md:right-[25%] lg:right-[20%] xl:right-[20%]">
              <Image
                className="w-32 md:w-full lg:w-[120px] xl:w-[140px]"
                quality={100}
                src={ReserveSecondImage}
                alt="reserve-section"
              />
            </div>
            <div className="absolute bottom-0 left-0">
              <Image
                className="w- xl:w-[150px]"
                quality={100}
                src={ReserveThirdImage}
                alt="reserve-section"
              />
            </div>
          </div>
        )}
        <div className="container order-1">
          <div className="reserve-text">
            <h3 className="text-[80px] leading-[110px] font-bold">
              Let's reserve
              <span className="text-dark-orange">
                <br /> a table
              </span>
            </h3>
            <p className="w-full lg:w-[433.11px] text-irish-coffee text-[20px] font-normal leading-[200%] pt-[60px] pb-[80px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
              nec quam{" "}
            </p>
            <Button variant="orange" size="responsive">
              Reservation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
