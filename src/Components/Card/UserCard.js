import { Link } from 'react-router-dom'
import img from '../../assets/pic.jpg'

function UserCard() {
    return (
        <div className="bg-white rounded-xl p-5 shadow-lg shadow-slate-300/15 w-full border">
            <div className="flex gap-3 items-center">
                {/* Imgae */}
                <div>
                    <img src={img} alt="" className='w-20 h-20 rounded-full object-cover' />
                </div>
                <div>
                    <h1 className='font-semibold text-xl'>Jane Opoku</h1>
                    <p className='text-sm text-gray-500 mt-0.5 font-medium'>24 Jan, 2000</p>
                    <Link className='text-blue-500 text-xs font-medium'>View profile</Link>
                </div>
            </div>

        </div>
    )
}

export default UserCard