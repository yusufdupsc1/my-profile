import Link from "next/link";
import NavItems from "./constants";

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-6">
        {NavItems.map((item) => (
          <li key={item.name} className="group relative">
            <Link
              href={item.href}
              className="text-gray-300 hover:text-pink-500 text-lg font-medium transition duration-300 ease-in-out"
            >
              {item.name}
            </Link>
            {/* Futuristic Hover Effect */}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 group-hover:w-full"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;