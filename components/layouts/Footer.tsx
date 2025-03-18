import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/LogoDelizioso.png"
import Facebook from "../../public/facebook.svg"
import Twitter from "../../public/twitter.svg"
import Instagram from "../../public/instagram.svg"

export default function Footer() {
  return (
    <>
      <footer className="bg-medium-roast">
        <div className="container">
          <div className="space-y-8 pt-[129px] pb-[74px]">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-16">
              <div className="footer-caption">
                <div className="footer-name mb-10">
                  <Link href={'/'}>
                    <Image src={Logo} width={100} height={100} alt="logo" />
                  </Link>
                </div>
                <div className="footer-text text-jupiter">
                  <p className="text-[20px] font-normal leading-10">
                    Viverra gravida morbi egestas facilisis tortor netus non duis tempor.
                  </p>
                </div>
                <div className="social-media flex items-center my-[39px]">
                  <ul className="flex items-center justify-center space-x-6">
                    <li className="bg-white w-[40px] h-[40px] p-2 rounded-full">
                      <a className="" href="https://x.com/">
                        <span className="sr-only">Twitter</span>
                        <Image src={Twitter} width={25} height={10} alt="twitter" />
                      </a>
                    </li>
                    <li className="bg-white w-[40px] h-[40px] p-2 rounded-full">
                      <a className="" href="https://www.instagram.com/">
                        <span className="sr-only">Instagram</span>
                        <Image src={Instagram} width={25} height={10} alt="instagram" />
                      </a>
                    </li>
                    <li className="bg-white w-[40px] h-[40px] p-2 rounded-full">
                      <a className="" href="https://www.facebook.com/">
                        <span className="sr-only">Facebook</span>
                        <Image src={Facebook} width={25} height={10} alt="facebook" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>


              <div className="footer-page my-10 md:my-0">
                <h3 className="text-dark-orange text-[25px] font-semibold leading-[40px] mb-5">Page</h3>
                <ul className="text-jupiter text-[18px] md:text-[20px] font-normal leading-10 space-y-2">
                  <li>Home</li>
                  <li>Menu</li>
                  <li>Order online</li>
                  <li>Catering</li>
                  <li>Reservation</li>
                </ul>
              </div>

              <div className="footer-information">
                <h3 className="text-dark-orange text-[25px] font-semibold leading-[40px] mb-5">Information</h3>
                <ul className="text-jupiter text-[18px] md:text-[20px] font-normal leading-10 space-y-3">
                  <Link href={'/aboutus'}>
                    <li>About us</li>
                  </Link>
                  <li>Testimonial</li>
                  <li>Event</li>
                </ul>
              </div>

              <div className="footer-get">
                <h3 className="text-dark-orange text-[25px] font-semibold leading-[40px] mb-5 mt-10 lg:mt-0">Get in touch</h3>
                <ul className="text-jupiter text-[18px] md:text-[20px] font-normal leading-10 space-y-3">
                  <li>3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat</li>
                  <li><a href="mailto:delizioso@gmail.com">delizioso@gmail.com</a></li>
                  <li><a href="tel:+12345678901">+123 4567 8901</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-copyright text-jupiter text-[20px] font-normal leading-10 text-center pt-10">
              <p>Copyright © 2022 Delizioso</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
