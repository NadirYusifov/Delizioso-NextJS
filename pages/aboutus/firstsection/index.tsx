'use client'

import Image from "next/image";
import FirstImage from "../../../public/aboutusfirstimage.png";
import FirstImageMobile from "../../../public/aboutusfirstimagemobile.png";
import { useWindowWidth } from "@react-hook/window-size";

export default function FirstSection() {
  const windowWidth = useWindowWidth();

  return (
    <>
      <section className="aboutus-first-section mb-12">
        {windowWidth < 1024 && (
          <div className="aboutus-right-header text-center mb-4 lg:mb-20">
            <h2 className="text-[40px] lg:text-[80px] leading-[100%] lg:leading-[88px] font-bold"><span className="text-dark-orange">Our</span> restautant</h2>
          </div>
        )}
        <div className="aboutus-first-wrapper block lg:flex lg:items-center">
          {windowWidth >= 1024 && (
            <picture className="aboutus-first-image w-full">
              <Image src={FirstImage} quality={100} width={600} height={600} alt="first" />
            </picture>
          )}
          {windowWidth < 1024 && (
            <picture className="aboutus-first-image w-full flex flex-col items-center justify-center">
              <Image src={FirstImageMobile} quality={100} width={600} height={600} alt="first" />
            </picture>
          )}
          <div className="container">
            {windowWidth >= 1024 && (
              <div className="aboutus-right-header mb-20">
                <h2 className="text-[80px] leading-[88px] font-bold"><span className="text-dark-orange">Our</span><br /> restautant</h2>
              </div>
            )}
            <div className="aboutus-first-caption text-center lg:text-start pt-5 lg:pt-0">
              <p className="text-irish-coffee text-[17px] lg:text-[20px] leading-8 lg:leading-10 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
