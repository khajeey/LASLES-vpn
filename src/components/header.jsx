import { Link, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate()
    return(
        
            <div className="max-w-[1200px] mt-[50px] mx-auto flex justify-between py-[20px]">
                <img className="cursor-pointer" onClick={() => navigate("/")} src="/logo.png" alt="" />
                <ul className="flex items-center gap-6 text-gray-600  ">
                    <Link to="/about" className="hover:text-gray-950 cursor-pointer "> About</Link>
                    <Link to="/features" className="hover:text-gray-950 cursor-pointer "> Features</Link>
                    <Link to="/pricing" className="hover:text-gray-950 cursor-pointer "> Pricing</Link>
                    <Link to="/testim" className="hover:text-gray-950 cursor-pointer "> Testimonials</Link>
                    <Link to="/help" className="hover:text-gray-950 cursor-pointer "> Help</Link>
                </ul>
                <button className="font-bold text-xl cursor-pointer " >Sign In</button>
                <button className=" border-[2px] rounded-4xl text-xl px-[70px] border-[#F53855] text-[#F53855] cursor-pointer hover:bg-[#F53855] ease-in-out hover:text-white">Sign Up</button>
            </div>
       
    )
}