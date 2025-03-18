import Image from "next/image"
import WelcomeSectionImage from "../../../public/welcomesection.png"
import Button from "@/common/button"

export default function WelcomeSection() {
    return (
        <section className="bg-turtle-warrior/10 py-[112px]">
            <div className="welcome-wrapper grid grid-cols-1 lg:grid-cols-2 place-items-center">
                <div className="welcome-image order-2">
                    <Image src={WelcomeSectionImage} width={700} height={500} alt="welcome-section" />
                </div>
                <div className="container order-1">
                    <div className="welcome-text">
                        <h3 className="text-[60px] lg:text-[80px] leading-[110px] font-bold">Welcome to <span className="text-dark-orange">delizioso</span></h3>
                        <p className="w-full lg:w-[433.11px] text-irish-coffee text-[20px] font-normal leading-[200%] pt-[60px] pb-[80px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
                        <Button variant="orange" size="responsive">See our menu</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
