import Link from "next/link"

export default function Navbar (){
    
    const navigation = [
        {
            name:"Work",
            href:"#"
        },
        {
            name:"Services",
            href:"#"
        },
        {
            name:"Network",
            href:"#"
        },
        {
            name:"Contact",
            href:"#"
        },
    ]

    return(
        <div className=" gridLayout items-center">
            <img src="Logo.png" className="w-[70px]"></img>
            {navigation.map((item, i) => (
                <div key={i} style={{ gridColumnStart: (i*2)+3 }}>
                    <Link href={item.href}><p className="nav">{item.name}</p></Link>
                </div>
            ))}
        </div>
    )
}