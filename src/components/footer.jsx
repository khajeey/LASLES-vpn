export default function Footer() {
    return(
        <div className="bg-gray-200">
            <div className="max-w-[1200px] mx-auto flex h-lvh justify-between items-center pt-[50px] ">
            <div className="flex flex-col gap-5 max-w-[300px]">
                <img className="w-[200px]" src="/logo.png" alt="" />
                <p className="text-gray-700"><span className="font-semibold">LaslesVPN</span>  is a private virtual network that has unique features and has high security.</p>
                <div className="flex">
                    <img className="cursor-pointer hover:w-[80px] ease-in-out" src="/icons/facebook.svg" alt="" />
                    <img className="cursor-pointer hover:w-[80px] ease-in-out" src="/icons/twitter.svg" alt="" />
                    <img className="cursor-pointer hover:w-[80px] ease-in-out" src="/icons/insta.svg" alt="" />
                </div>
                <p className="text-gray-400">©2020LaslesVPN</p>
            </div>
            <div className="flex gap-25">
                <ul className="text-gray-600 flex flex-col gap-3 hover:cursor-pointer hover:text-gray-800 ease-in-out">
                    <p className="text-xl text-black font-semibold mb-[10px]">Product</p>
                    <li>Download </li>
                    <li>Pricing </li>
                    <li>Locations </li>
                    <li>Server </li>
                    <li>Countries </li>
                    <li>Blog </li>
                </ul>
                <ul className="text-gray-600 flex flex-col gap-3 hover:cursor-pointer hover:text-gray-800 ease-in-out">
                    <p className="text-xl text-black font-semibold mb-[10px]">Engage</p>
                    <li>LaslesVPN ?  </li>
                    <li>FAQ </li>
                    <li>Tutorials </li>
                    <li>About Us</li>
                    <li>Privacy Policy </li>
                    <li>Terms of Service </li>
                </ul>
                <ul className="text-gray-600 flex flex-col gap-3 hover:cursor-pointer hover:text-gray-800 ease-in-out">
                    <p className="text-xl text-black font-semibold mb-[10px]">Earn Money</p>
                    <li>Affiliate </li>
                    <li>Become Partner </li>
                    
                </ul>
                
            </div>
        </div>
        </div>
    )
}