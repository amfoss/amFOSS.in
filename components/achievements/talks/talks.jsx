import Image from "next/image"
import UnderlineEffect from "../underlineEffect";
import data from "@/content/talks.json";


export default function talks(){
    return(
        <>
        {Object.keys(data).map((key, value)=>{
            const props=data[key];
            const number=value;
            return(
                <div className="sm:mb-20 mb-10 grid md:grid-cols-2 grid-cols-1">
                    { !(number%2)?
                        <div className="flex md:flex-[8]"></div>:<></>}
                        <div className={`backdrop-blur-md rounded-[20px] p-[1vw] flex flex-[7] flex-col ${number%2? 'md:mr-10': 'md:ml-10'}`}>
                            <div className="flex-1 h-min overflow-hidden rounded-md">
                                <Image className="hover:scale-105 transition-all duration-500 cursor-pointer" src={props.imgPath} width={900} height={900}/>
                            </div>
                            <div className="flex md:text-4xl sms:text2xl md:text-left text-center pt-4 pb-1">
                                <div className="max-sm:text-xl text-left max-md:text-center text-2xl flex-1 flex max-md:justify-center max-md:items-center">
                                    <UnderlineEffect props={{"data":`${props.name} @${props.event}`, "link":`${props.link}`}}/>
                                </div>
                            </div>
                            <div className="text-white md:text-2xl sm:text-xl md:text-left text-center">
                                {props.description}
                            </div>
                    </div>
                </div>
        )})}

        </>
    )
}