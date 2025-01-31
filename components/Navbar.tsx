import Link from "next/link"

export default function Navbar (){
    
    const navigation = [
        {
            name:"About US",
            href:"#About"
        },
        {
            name:"Previous Work",
            href:"#Work"
        },
        {
            name:"Our Services",
            href:"#Services"
        },
        {
            name:"Contact Us",
            href:"#Joblist"
        },
    ]


    return(
        <div className="gridLayout grid">
            <div className="col-start-2 col-span-9 flex justify-between py-[60px]">
                <h2>SkyRise Labs / <span className="text-[#606060]">SkyRise Studios</span></h2>
                <div className="flex">
                    {navigation.map((item, i) => (
                    <div key={i} className="flex items-center justify-center">
                        <Link href={item.href}><h2 className="text-[#606060]">{item.name}{i < navigation.length - 1 && <span className="mx-2">/</span>}</h2></Link>
                       
                    </div>
                    ))}
                    </div>
            </div>
        </div>
    )
}