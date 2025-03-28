import Link from "next/link"
import Nav from "./Nav"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto justify-between flex items-center">
            <Link href="/">
            <h1 className="text-4xl font-semibold">
                Ali<span className="text-[#00ff99]">.</span></h1>
            </Link>
            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="/contact">
                    <button>Hire me</button>
                
                </Link>
            </div>
            <div className="xl:hidden">mobile nav</div>            
        </div>
    </header>
    
  )
}

export default Header