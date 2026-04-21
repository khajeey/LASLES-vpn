export default function About() {
    return(
        <div className="max-w-[1200px] mt-[50px] mx-auto flex justify-between items-center h-lvh">
                <img className="w-[500px]" src="/hero.png" alt="" />
                <div className="max-w-[400px]">
                    <h2 className="text-4xl font-bold ">We Provide Many Features You Can Use</h2>
                    <p className="text-gray-800 leading-8 my-[20px]">You can explore the features that we provide with fun and have their own functions each feature.</p>
                    <ul className="text-gray-800 flex flex-col gap-5">
                        <li className="flex gap-3"><img src="/icons/ok.svg" alt="" />Powerfull online protection.</li>
                        <li className="flex gap-3"><img src="/icons/ok.svg" alt="" />Internet without borders.</li>
                        <li className="flex gap-3"><img src="/icons/ok.svg" alt="" />Supercharged VPN</li>
                        <li className="flex gap-3"><img src="/icons/ok.svg" alt="" />No specific time limits.</li>
                    </ul>
                </div>
        </div>
    )
}