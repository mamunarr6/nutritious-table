import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
    return (
        <div className="container mx-auto mt-1">
            <header className="md:flex justify-between items-center  lexend space-y-3">
                <div className="flex justify-center items-center gap-2">
                    <img className="w-10" src="/leaf.jpg" alt="" />
                    <h2 className="text-3xl font-bold">Nutritious Table</h2>
                </div>
                <div>
                    <ul className="flex justify-center md:justify-around items-center gap-6 text-[#150B2BB2]">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">Recipes</li>
                        <li className="cursor-pointer">About</li>
                        <li className="cursor-pointer">Search</li>
                    </ul>
                </div>
                <div className="flex justify-center md:justify-between items-center " >
                    <div className="flex justify-center items-center border border-gray-400 rounded-full p-1">
                        <IoSearchOutline className="ml-1 text-lg text-gray-500" />
                        <input className="outline-none ml-1 text-base font-normal" type="text" placeholder="Search" />
                    </div>
                    <div className="text-2xl ml-3 text-green-700">
                        <FaUserCircle className="cursor-pointer" />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;