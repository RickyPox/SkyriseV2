import MarqueeSlider from "./MarqueeSlider";

export default function OurNetwork(){
    return(
        <div>
            <div className='gridLayout pb-[120px]'>
                <h1 className="col-start-4 col-span-3 text-center">Our Network</h1>
                <p className="col-start-4 col-span-3 text-center">Lorem ipsum dolor sit amet consectetur. Fermentum malesuada amet nulla quis vulputate at feugiat. 
                    Nullam eget diam nec est facilisi faucibus. 
                    Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin proin.</p>
            </div>
            <MarqueeSlider></MarqueeSlider>
            <MarqueeSlider></MarqueeSlider>
        </div>
    )
}