import bg from "../../assets/bg.png"

function Stat() {
    return (
        <div className="bg-white py-6 w-full shadow-lg relative rounded-xl
        shadow-slate-300/15 px-7 bg-no-repeat bg-right-top min-h-40"
        >
            <img src={bg} alt="" className="h-24 right-2 top-2 opacity-5 absolute" />
            <div className="max-w-sm">
                <h1 className="font-semibold text-lg uppercase">Current Plan</h1>
                <hr className="my-5" />
                <div className="flex items-center gap-2 text-sm">
                    <p className="font-medium text-orange-600">Name:</p> Premium Plus
                </div>
                <div className="flex items-center gap-2 text-sm mt-2">
                    <p className="font-medium text-orange-600">Expires on:</p> 24 January, 2025
                </div>
            </div>
        </div>
    )
}

export default Stat