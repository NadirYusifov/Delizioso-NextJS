import Image from "next/image";
import ChefFirst from "../../../public/cheffirst.png";
import ChefSecond from "../../../public/chefsecond.png";
import ChefThird from "../../../public/chefthird.png";

export default function ChefSection() {
  return (
    <section>
      <div className="container">
        <div className="chef-wrapper">
          <div className="chef-header text-center">
            <h3 className="text-medium-roast text-[35px] lg:text-[80px] font-bold leading-[135%] lg:leading-[200%] pb-20">
              Our greatest chef
            </h3>
          </div>
          <div className="chef-image grid gap-x-3 gap-y-10 grid-cols-2 lg:gap-0 place-content-center place-items-center lg:grid-cols-3">
            <div className="chef-first text-center">
              <Image
                src={ChefSecond}
                width={350}
                height={200}
                alt="chef-second"
              />
              <h3 className="text-medium-roast text-[18px] lg:text-[25px] font-semibold leading-[100%] pt-8">
                Betran Komar
              </h3>
              <p className="text-beaver text-[18px] lg:text-[25px] pt-7">
                Head Chef
              </p>
            </div>
            <div className="chef-second text-center">
              <Image
                src={ChefFirst}
                width={350}
                height={200}
                alt="chef-first"
              />
              <h3 className="text-medium-roast text-[18px] lg:text-[25px] font-semibold leading-[100%] pt-8">
                Ferry Sauwi
              </h3>
              <p className="text-beaver text-[18px] lg:text-[25px] pt-7">
                Chef
              </p>
            </div>
            <div className="chef-third text-center">
              <Image
                src={ChefThird}
                width={350}
                height={200}
                alt="chef-third"
              />
              <h3 className="text-medium-roast text-[18px] lg:text-[25px] font-semibold leading-[100%] pt-8">
                Iswan Dracho
              </h3>
              <p className="text-beaver text-[18px] lg:text-[25px] pt-7">
                Chef
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
