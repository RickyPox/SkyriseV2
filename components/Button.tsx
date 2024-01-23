export default function Button (props:any){

    return(
        <div className={`flex gap-[20px] border-[1px] rounded-[70px] ${props.size === "big" ? "py-[100px] px-[140px]" : "py-[30px] px-[100px]"}`}
        style={{ 
            border: `solid 1px ${props.color}`
         }}>
        <p style={{ 
            color: props.color
         }}>{props.title}</p>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.16805 20L0 18.832L17.1028 1.69657H1.33766V0H20V18.6623H18.3034V2.89724L1.16805 20Z" fill={props.color ? props.color : "#FEFEFE"}/>
        </svg>
    </div>
    )
}