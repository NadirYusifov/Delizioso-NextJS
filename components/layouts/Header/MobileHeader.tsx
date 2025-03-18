'use client'

import Image from "next/image";
import MenuIcon from "../../../public/menuicon.svg";
import { useState } from "react";
import HeaderLink from "./HeaderLink";
import LoginButton from "./LoginButton";


export default function MobileHeader() {
    const [menu, setMenu] = useState(false);

    return (
        <>
            <nav>
                <button onClick={() => { setMenu(!menu) }} className="header-menu-btn lg:hidden bg-gray-50 rounded-full w-[50px] h-[50px] flex items-center justify-center">
                    {
                        menu ?
                            <div className="bg-orange-500 w-1/2 h-screen fixed right-0 top-0 -z-50">
                                <div className="mt-24">
                                    <HeaderLink />
                                    <LoginButton />
                                </div>
                            </div>
                            : undefined
                    }
                    <Image className={menu ? "rotate-90 transition-all" : "rotate-0 transition-all"} src={MenuIcon} width={24} height={24} alt="Menu" />
                </button>
            </nav>

        </>
    )
}
