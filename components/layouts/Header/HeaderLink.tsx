import Link from "next/link";
// import LoginButton from "./LoginButton";

export default function HeaderLink() {
    return (
        <>
            <nav className="header-menu text-medium-roast text-[25px] lg:text-[14px] xl:text-[16px] font-normal leading-[21px] flex flex-col lg:flex-row space-y-7 lg:space-y-0 lg:space-x-8 xl:space-x-12">
                <Link className="hover:translate-x-2 transition-all lg:hover:translate-x-0" href={'/'}>Home</Link>
                <Link className="hover:translate-x-2 transition-all lg:hover:translate-x-0" href={'/'}>Menu</Link>
                <Link className="hover:translate-x-2 transition-all lg:hover:translate-x-0" href={'/aboutus'}>About us</Link>
                <Link className="hover:translate-x-2 transition-all lg:hover:translate-x-0" href={'/'}>Order online</Link>
                <Link className="hover:translate-x-2 transition-all lg:hover:translate-x-0" href={'/'}>Reservation</Link>
                <Link className="hover:translate-x-2 transition-all lg:hover:translate-x-0" href={'/'}>Contact us</Link>
            </nav>
        </>
    )
}
