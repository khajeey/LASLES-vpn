export default function Home() {
    return(
        <div className="max-w-[1200px] mt-[50px] mx-auto my-[50px]">
            <div className="flex justify-between items-center">
                <button className="bg-[#F53855] py-3 px-10 text-white border-none rounded-2xl">Get Started</button>
                <img className="w-[700px]" src="/hero.png" alt="" />
            </div>
            <div className="mt-[50px] flex justify-between">
                <div className="flex gap-4 items-center">
                    <img className="w-[80px]" src="/icons/user.svg" alt="" />
                    <div className="">
                        <h2 className="text-2xl font-bold ">90+</h2>
                        <p>Users</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <img className="w-[80px]" src="/icons/location.svg" alt="" />
                    <div className="">
                        <h2 className="text-2xl font-bold ">30+</h2>
                        <p>Location</p>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <img className="w-[80px]" src="/icons/server.svg" alt="" />
                    <div className="">
                        <h2 className="text-2xl font-bold ">50+</h2>
                        <p>Servers</p>
                    </div>
                </div>

                
            </div>
        </div>
    )
}