import Logo from "/public/logo.png"
import Image from "next/image"
import Link from "next/link"
import Wrapper from "@/components/shared/Wrapper"
import add from "@/app/page"

interface NavItem {
    label: string
    page: string
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: "hero",
      page: "hero",
    },
    {
      label: "specializedTracks",
      page: "specializedTracks",
    }
  ]

const Header = () => {
    return (
        <header className="sticky top-0 z-10 bg-white">
        <Wrapper>
            <div className="flex justify-between py-4 items-center">
                {/* Logo */}
                <div className="object-scale-down h-12 w-24">
                    {/* <h2 className="text-xl font-bold">Panaverse dao</h2> */}
                    <Image src={Logo} alt="Panaverse dao logo" />
                </div>
                {/* Navigation bar */}
                <ul className="flex space-x-8 font-medium">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"cours/components/widgetsORsections/SpecializedTrackes"}>Courses</Link>
                    </li>
                </ul>
            </div>
        </Wrapper>
        </header>
    )
}

export default Header