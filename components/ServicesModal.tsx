import Button from "./Button";

export default function ServicesModal (){
    return(
        <div className="absolute backdrop-blur-[30px] w-screen h-screen z-10 top-0 justify-center p-[80px]"> 
        <div className="flex justify-end">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3224 18L1.35421e-06 2.67756L2.67756 0L18 15.3224L33.3224 1.35421e-06L36 2.67756L20.6776 18L36 33.3224L33.3224 36L18 20.6776L2.67756 36L0 33.3224L15.3224 18Z" fill="#FEFEFE"/>
                </svg>
            </div>
        
            <div className="flex items-center justify-center gap-[50px] w-full h-full">
                <div><Button title="Download Deck"></Button></div>
                <div><Button title="Schedule A Meeting"></Button></div>
            </div>
            
        </div>
    )
}