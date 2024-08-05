import { useState } from "react"

export default function OurServices(){

  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index:any) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };
  const services = [
    {
      title:"Growth & User Acquisition",
      text:"Lorem ipsum dolor sit amet consectetur. Fermentum malesuada amet nulla quis vulputate at feugiat. Nullam eget diam nec est facilisi faucibus. Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin.",
    },
    {
      title:"Brand & Design",
      text:"Lorem ipsum dolor sit amet consectetur. Fermentum malesuada amet nulla quis vulputate at feugiat. Nullam eget diam nec est facilisi faucibus. Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin.",
    },
    {
      title:"Community Building",
      text:"Lorem ipsum dolor sit amet consectetur. Fermentum malesuada amet nulla quis vulputate at feugiat. Nullam eget diam nec est facilisi faucibus. Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin.",
    },
    {
      title:"Story Telling",
      text:"Lorem ipsum dolor sit amet consectetur. Fermentum malesuada amet nulla quis vulputate at feugiat. Nullam eget diam nec est facilisi faucibus. Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin.",
    },
  ]

return(
    <div>
        <div className='gridLayout'>
          <h1 className="col-start-4 col-span-3 text-center">Our Services</h1>
          <p className="col-start-4 col-span-3 text-center">Lorem ipsum dolor sit amet consectetur. Fermentum malesuada amet nulla quis vulputate at feugiat. 
              Nullam eget diam nec est facilisi faucibus. 
              Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin proin.</p>
        </div>
        <div className="gridLayout pt-[120px]">
          {services.map((item, i) =>(
              <div  
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave} key={i} className={`flex flex-col items-center justify-center col-span-3 mb-[60px]`} style={{ gridColumnStart: i%2 ? "6" : "2" }}>
                <div className={`w-[30px] h-[30px] rounded-full flex items-center justify-center border-[#FDFDFD] border-[1px] ${hoverIndex === i ? "bg-[#FDFDFD] text-[#050505]" : ""}`}>
                  <p>0{i+1}</p>
                </div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
          ))}
        </div>
    </div>
  )
}