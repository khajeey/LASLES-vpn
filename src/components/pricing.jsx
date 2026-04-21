export default function Pricing() {
    return(
        <div className="max-w-[1200px] mt-[50px] mx-auto items-center h-lvh">
                <h2 className="text-4xl font-bold text-center">Choose Your Plan</h2>
                <p className="text-center text-gray-800 my-[20px]">Let's choose the package that is best for you and explore it happily and cheerfully.</p>
                <div className="flex justify-between">
                    <div className="border-2 border-gray-400 rounded-2xl flex flex-col items-center justify-between gap-5 px-[40px] py-[40px] hover:border-[#F53855] hover:border-3 ease-in">
                        <img className="w-[150px]" src="/pricing.png" alt="" />
                        <h3 className="text-2xl font-semibold">Free Plan</h3>
                        <ul className="text-gray-800 flex flex-col gap-5">
                            <li className="flex gap-3"><img src="/icons/ok_white.svg" alt="" />Unlimited Bandwitch</li>
                            <li className="flex gap-3"><img src="/icons/ok_white.svg" alt="" />Encrypted Connection</li>
                            <li className="flex gap-3"><img src="/icons/ok_white.svg" alt="" />No Traffic Logs</li>
                            <li className="flex gap-3"><img src="/icons/ok_white.svg" alt="" />Works on All Devices</li>
                        </ul>
                        <h3 className="text-3xl font-semibold mt-[50px]">Free</h3>
                        <button className="border-2 border-[#F53855] rounded-3xl text-[#F53855] font-semibold py-2 px-25 cursor-pointer hover:bg-[#F53855] hover:text-white ease-in-out ">Select</button>
                    </div>

                    <div className="border-2 border-gray-400 rounded-2xl flex flex-col items-center justify-between gap-5 px-[40px] py-[40px] hover:border-[#F53855] hover:border-3 ease-in">
                        <img className="w-[150px]" src="/pricing.png" alt="" />
                        <h3 className="text-2xl font-semibold">Standart Plan</h3>
                        <ul className="text-gray-800 flex flex-col gap-5">
                            <li className="flex gap-3"><img src="/icons/ok_white.svg" alt="" />Unlimited Bandwitch</li>
                            <li className="flex gap-3"><img src="/icons/ok_white.svg" alt="" />Encrypted Connection</li>
                            <li className="flex gap-3"><img src="/icons/ok_white.svg" alt="" />Yes Traffic Logs</li>
                            <li className="flex gap-3"><img src="/icons/ok_white.svg" alt="" />Works on All Devices</li>
                            <li className="flex gap-3"><img src="/icons/ok_white.svg" alt="" />Connect Anyware</li>
                        </ul>
                        <h3 className="text-3xl font-semibold mt-[50px]">$9 <span className="text-gray-700 font-light">/ month</span></h3>
                        <button className="border-2 border-[#F53855] rounded-3xl text-[#F53855] font-semibold py-2 px-25 cursor-pointer hover:bg-[#F53855] hover:text-white ease-in-out ">Select</button>
                    </div>

                    <div className="border-2 border-gray-400 rounded-2xl flex flex-col items-center justify-between gap-5 px-[40px] py-[40px] hover:border-[#F53855] hover:border-3 ease-in">
                        <img className="w-[150px]" src="/pricing.png" alt="" />
                        <h3 className="text-2xl font-semibold">Premium Plan</h3>
                        <ul className="text-gray-800 flex flex-col gap-5">
                            <li className="flex gap-3"><img src="/icons/ok_white.svg" alt="" />Unlimited Bandwitch</li>
                            <li className="flex gap-3"><img src="/icons/ok_white.svg" alt="" />Encrypted Connection</li>
                            <li className="flex gap-3"><img src="/icons/ok_white.svg" alt="" />No Traffic Logs</li>
                            <li className="flex gap-3"><img src="/icons/ok_white.svg" alt="" />Works on All Devices</li>
                        </ul>
                        <h3 className="text-3xl font-semibold mt-[50px]">$12 <span className="text-gray-700 font-light">/ month</span></h3>
                        <button className="border-2 border-[#F53855] rounded-3xl text-[#F53855] font-semibold py-2 px-25 cursor-pointer hover:bg-[#F53855] hover:text-white ease-in-out ">Select</button>
                    </div>

                    
                </div>
        </div>
    )
}   