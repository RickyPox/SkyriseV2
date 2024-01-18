import Button from "@/components/Button";

const services=[
    {
        name: "Growth",
        text:"We specialize in crafting your company's value proposition and developing a tailored roadmap to steer your journey.",
    },
    {
        name: "Tech",
        text:"We excel in delineating your company's value proposition and crafting a personalized roadmap to navigate and drive your growth in the tech realm.",
    },
    {
        name: "Storytelling",
        text:"There is no brand without a story. We combine storytelling with data-driven insights to create a compelling brand narrative that engages and retains users.",
    },
]

export default function OurServices(){
  return(
    <div>
        <h1 className="Ourservice">Our Services</h1>
        <p className="w-1/3">Lorem ipsum dolor sit amet consectetur. Fermentum malesuada amet nulla quis vulputate at feugiat. 
            Nullam eget diam nec est facilisi faucibus. 
            Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin proin.
        </p>
        <div className="flex mt-[30px]">
        <Button title="Get to Know"></Button>
        </div>
        <div>
            {services.map((service, index) =>(
                <div key={index}>
                    <h2>{service.name}</h2>
                    <p>{service.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}