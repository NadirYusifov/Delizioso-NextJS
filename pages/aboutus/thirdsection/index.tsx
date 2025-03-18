import Image from 'next/image'
import ThirdImage from '../../../public/aboutusthirdimage.png'
import Aquotationmark from '../../../public/aquotationmark.png'
import Aquotationmark2 from '../../../public/aquotationmark2.png'

export default function ThirdSection() {
  return (
    <>
      <section className="aboutus-first-section mt-[130px]">
        <div className="container">
          <div className="aboutus-wrapper block lg:flex lg:justify-between lg:items-center">
            <div className="aboutus-third-image w-full flex justify-center lg:block">
              <Image className="rounded-3xl lg:rounded-none w-3/4 lg:w-[60%]" quality={100} src={ThirdImage} alt="third-image" />
            </div>
            <div className="aboutus-right-caption">
              <div className="aboutus-right-header">
                <h2 className="text-medium-roast text-[40px] lg:text-[80px] text-center lg:text-start leading-[44px] lg:leading-[88px] font-bold"><span className="text-dark-orange">Owner</span> & Executive Chef</h2>
                <h3 className="text-[30px] lg:text-[40px] text-center lg:text-start leading-[60px] font-semibold pt-10">Ismail Markuzi</h3>
              </div>
              <div className="aboutus-third-caption mt-[47px]">
                <Image className="pb-3" src={Aquotationmark} quality={100} width={30} height={30} alt="quotationmark" />
                <div className="aboutus-third-caption-text text-center lg:text-start">
                  <i className="text-irish-coffee text-[25px] lg:text-[30px] leading-[60px] font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i>
                </div>
                <div className="flex flex-row-reverse pt-3">
                  <Image quality={100} width={30} height={30} alt="quotationmark" src={Aquotationmark2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
