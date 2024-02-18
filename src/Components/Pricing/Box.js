import { FaBasketball } from "react-icons/fa6";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

function Box() {
    return (
        <div className="w-full border rounded-xl border-orange-200 transition
                        p-4 py-8 relative sm:px-7 md:px-10 bg-white max-w-fit">
            {/* Box Name */}
            <div>
                <h1 className="text-lg font-semibold">Premium</h1>
            </div>

            {/* Price Content */}
            <div className="flex items-end mt-2 relative w-full">
                <h1 className="text-5xl font-semibold text-blue-950 -bottom-1">188</h1>
                <small className="text-blue-950 text-lg font-medium">/ 5 weeks</small>
            </div>

            {/* Quantity or Slot Change */}
            <div className="mt-5">
                <p className="text-sm font-semibold">Number of Slots</p>

                <div className="flex items-center rounded-full bg-gray-100 w-fit p-3 px-5 mt-2">
                    <button><CiCircleMinus size={20} /></button>
                    <input type="text" value={1} className=" w-16 text-center bg-transparent outline-none" />
                    <button><CiCirclePlus size={20} /></button>
                </div>
            </div>

            <hr className="my-7" />

            <div>
                <ul className="flex flex-col gap-6">
                    <li className="flex items-center gap-2">
                        <div className="text-orange-700"><FaBasketball size={20} /></div>
                        <p className="font-semibold text-sm">ONE HOUR OF TRAINING PER WEEK OVER 5 WEEKS</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="text-orange-700"><FaBasketball size={20} /></div>
                        <p className="font-semibold text-sm">CORE SKILL DEVELOPMENT</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="text-orange-700"><FaBasketball size={20} /></div>
                        <p className="font-semibold text-sm">5 WEEKS OF TRAINING</p>
                    </li>
                </ul>
            </div>

            <hr className="my-7" />

            <div className="">
                <button className="text-xs bg-orange-500 py-3 px-5 font-medium rounded-md
                         text-white transition hover:bg-black">
                    CHOOSE THIS PLAN
                </button>
            </div>
        </div>
    )
}

export default Box