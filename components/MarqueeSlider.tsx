import Marquee from "react-fast-marquee";

export default function MarqueeSlider (props:any){

    const marquee=["/Metaplex.png","/SolanaFoundation.png","/Brave.png","/FlashTrade.png","/Solayer.png","/Mtndao.png","/IslandDao.png","/BlocksmithLabs.png","/DeadKingSociety.png","/Goated.png","/MagicEden.png"]

    return(
        <div>
            <Marquee
            autoFill
            speed={25}
            direction={props.direction}
            gradient
            gradientColor="black"
            gradientWidth="25%">
                {marquee.map((img, i)=>(
                    <div className="w-[25vw] mx-[5vw] my-[2vw] lg:mx-[25px] lg:my-[12px] max-w-[140px]">
                        <img  src={img}></img>
                    </div>
                ))}
            </Marquee>

        </div>
    )
}