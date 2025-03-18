import Image from "next/image";
import SecondImage from "../../../public/aboutussecondimage.png";

export default function SecondSection() {
    return (
        <>
            <section className="aboutus-second-section">
                {/* <div className="aboutus-right-header flex justify-end">
              <h2 className="text-[80px] leading-[88px] font-bold"><span className="text-dark-orange">Our</span> restautant</h2>
              </div> */}
                <div className="aboutus-second-wrapper block lg:flex lg:items-center lg:flex-row-reverse">
                    <picture className="aboutus-second-image flex flex-row-reverse w-full">
                        <Image src={SecondImage} quality={100} width={600} height={600} alt="second-image" />
                    </picture>
                    <div className="container">
                        <div className="aboutus-second-caption text-center lg:text-center pt-5 lg:pt-0">
                            <p className="text-irish-coffee text-[17px] lg:text-[20px] leading-8 lg:leading-10 font-normal">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
