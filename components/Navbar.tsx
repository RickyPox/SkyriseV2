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
                {navigation.map((item, i) => (
                <div className="lg:block hidden" key={i} style={{ gridColumnStart: (i*2)+3 }}>
                    <Link href={item.href}><p className="nav">{item.name}</p></Link>
                </div>
                ))}
        </div>
    )
}