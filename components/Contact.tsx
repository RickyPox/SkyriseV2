import Button from "./Button";

export default function Contact (){
    return(
        <div>
            <div className='gridLayout pb-[120px]'>
                <h1 className="col-start-4 col-span-3 text-center">ContactUs</h1>
                <p className="col-start-4 col-span-3 text-center">Lorem ipsum dolor sit amet consectetur. Fermentum malesuada amet nulla quis vulputate at feugiat. 
                    Nullam eget diam nec est facilisi faucibus. 
                    Fames tempus fermentum aliquam nec facilisis justo nunc sollicitudin proin.</p>
            </div>
            <div className="flex lg:flex-row flex-col justify-center gap-[30px]">
            <Button color="#FDFDFD" title="Download Deck" size="big"></Button>
                <Button color="#FDFDFD" title="Send An Email" size="big"></Button>
                <Button color="#FDFDFD" title="Schedule A Meeting" size="big"></Button>
            </div>
        </div>
    )
}