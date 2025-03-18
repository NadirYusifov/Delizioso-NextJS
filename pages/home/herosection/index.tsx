import Image from "next/image";
import Button from "@/common/button";
import HeroImage from "../../../public/heroimage.png"

export default function HeroSection() {
    return (
        <section className="mt-[50px] lg:mt-[100px]">
            <div className="container">
                <div className='hero-wrapper block lg:grid lg:grid-cols-2'>
                    <div className="hero-text">
                        <p className="inline-block bg-dark-orange/20 text-dark-orange px-8 py-2 mb-5 rounded-full">Restauran</p>
                        <h3 className="w-full lg:w-[288px] text-medium-roast text-[80px] leading-[88px] font-bold mb-7">Italian Cuisine</h3>
                        <p className="w-full lg:w-[523px] text-irish-coffee text-[20px] leading-10 font-normal mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.</p>
                        <div className="hero-btn space-x-5 space-y-5 lg:space-y-0 lg:space-x-5 pb-10">
                            <Button variant="orange" size="responsive">Order Now</Button>
                            <Button variant="green" size="responsive">Reservation</Button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <Image src={HeroImage} width={700} height={500} quality={100} alt="hero-image" />
                    </div>
                </div>
            </div>
        </section>
    )
}
