import Button from "./Button";

export default function Contact (){
    return(
        <div>
            <h1 className="Contact">Contact</h1>
            <p className="w-1/3">
                Connect with Us: Your feedback matters. 
                We're here to listen, assist, and engage with you. Reach out for any inquiries, suggestions, or support, and let's build a stronger connection.
            </p>
            <div className="flex mt-[320px] gap-[20px] justify-end">
                <Button title="Send An Email" size="big"></Button>
                <Button title="Schedule A Meeting" size="big"></Button>
            </div>
        </div>
    )
}