import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
    return (
        <div className="container mx-auto mt-1">
            <header className="flex justify-between items-center  lexend">
                <div>
                    <h2 className="text-3xl font-bold">Nutritious Table</h2>
                </div>
                <div>
                    <ul className="flex justify-around items-center gap-6 text-[#150B2BB2]">
                        <li>Home</li>
                        <li>Recipes</li>
                        <li>About</li>
                        <li>Search</li>
                    </ul>
                </div>
                <div className="flex justify-between items-center " >
                    <div className="flex justify-center items-center border border-gray-400 rounded-full p-1">
                        <IoSearchOutline className="ml-1 text-lg" />
                        <input className="outline-none ml-1 text-base font-normal" type="text" placeholder="Search" />
                    </div>
                    <div className="text-2xl ml-3 text-green-700">
                        <FaUserCircle />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;