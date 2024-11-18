import Marquee from "react-fast-marquee";

export default function MarqueeSlider (props:any){

    const marquee=["/Metaplex.png","/SolanaFoundation.png","/Brave.png","/Flash.png","/Solayer.png","/Mtndao.png","/IslandDao.png","/BlocksmithLabs.png","/DeadKingSociety.png","/Goated.png","/MagicEden.png"]

    return(
        <div className="">
            <Marquee
            autoFill
            speed={25}
            gradient
            gradientColor="black"
            gradientWidth="25%">
                {marquee.map((img, i)=>(
                    <div 
                    key={i}
                    className="mx-[5vw] my-[2vw] lg:mx-[25px] lg:my-[12px]" >
                        <img src={"/marquee/" + img}></img>
                    </div>
                ))}
            </Marquee>
            <Marquee
            autoFill
            speed={25}
            direction="right"
            gradient
            gradientColor="black"
            gradientWidth="25%">
                {marquee.reverse().map((img, i)=>(
                    <div 
                    key={i}
                    className="mx-[5vw] my-[2vw] lg:mx-[25px] lg:my-[12px]" >
                        <img src={"/marquee/" + img}></img>
                    </div>
                ))}
            </Marquee>

        </div>
    )
}