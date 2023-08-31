import Logo from "/public/logo.png"
import Image from "next/image"
import Link from "next/link"
import Wrapper from "@/components/shared/Wrapper"

const Header = () => {
    return (
        <header className="sticky top-0 z-10 bg-white" id="navbar">
            <Wrapper>
                <div className="flex justify-between py-4 items-center">
                    {/* Logo */}
                    <div className="object-scale-down h-12 w-24">
                        <a href="#hero">
                            {/* <h2 className="text-xl font-bold">Panaverse dao</h2> */}
                            <Image src={Logo} alt="Panaverse dao logo" />
                        </a>
                    </div>

                    {/* Navigation bar */}
                    <ul className="flex space-x-8 font-medium">
                        <li>
                            <a href={"#hero"}>Home</a>
                        </li>
                        <li>
                            <a href={"#specializedTracks"}>Courses</a>
                        </li>
                    </ul>
                </div>
            </Wrapper>
        </header>
    )
}

export default Header