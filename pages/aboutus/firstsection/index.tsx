import Image from "next/image";
import FirstImage from "../../../public/aboutusfirstimage.png";


export default function FirstSection() {
  return (
    <>
      <section className="aboutus-first-section">
        {/* <div className="aboutus-right-header flex justify-end">
              <h2 className="text-[80px] leading-[88px] font-bold"><span className="text-dark-orange">Our</span> restautant</h2>
              </div> */}
        <div className="aboutus-first-wrapper block lg:flex lg:items-center">
          <div className="aboutus-first-image w-full">
            <Image src={FirstImage} quality={100} width={600} height={600} alt="first" />
          </div>
          <div className="container">
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
