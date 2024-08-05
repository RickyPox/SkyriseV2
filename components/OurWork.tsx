import WorkItem from "./WorkItem";


export default function OurWork(){
    return(
        <div>
            <div className='gridLayout'>
                <h1 className="col-start-4 col-span-3 text-center">Our Work</h1>
                <p className="col-start-4 col-span-3 text-center">Lorem ipsum dolor sit amet consectetur. Fermentum malesuada amet nulla quis vulputate at feugiat. 
                    Nullam eget diam nec est facilisi faucibus. 
                    Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin proin.</p>
            </div>
            <div className="gridLayout pt-[120px]">
                <div className="col-span-3"><WorkItem img="/StreamFlow.png" hoverImg="/FlashTrade.png"></WorkItem></div>
                <div className="col-span-3"><WorkItem img="/StreamFlow.png" hoverImg="/FlashTrade.png"></WorkItem></div>
                <div className="col-span-3"><WorkItem img="/StreamFlow.png" hoverImg="/FlashTrade.png"></WorkItem></div>
                <div className="col-span-3"><WorkItem img="/StreamFlow.png" hoverImg="/FlashTrade.png"></WorkItem></div>
                <div className="col-span-3"><WorkItem img="/StreamFlow.png" hoverImg="/FlashTrade.png"></WorkItem></div>
                <div className="col-span-3"><WorkItem img="/StreamFlow.png" hoverImg="/FlashTrade.png"></WorkItem></div>
            </div>
        </div>
    )
}