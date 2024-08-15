import Link from "next/link"

export default function Navbar (){
    
    const navigation = [
        {
            name:"Work",
            href:"#Work"
        },
        {
            name:"Services",
            href:"#Services"
        },
        {
            name:"Joblist",
            href:"#Joblist"
        },
        {
            name:"Network",
            href:"#Network"
        },
        {
            name:"Contact",
            href:"#Contact"
        },
    ]


    return(
        <div className=" gridLayout lg:grid flex justify-center items-center relative h-[70px]">
            <img src="Logo.png" className="w-[70px]"></img>
            <div className="col-start-3 col-span-full flex justify-between">
                {navigation.map((item, i) => (
                <div className="lg:block hidden" key={i}>
                    <Link href={item.href}><p className="nav">{item.name}</p></Link>
                </div>
                ))}
                </div>
        </div>
    )
}