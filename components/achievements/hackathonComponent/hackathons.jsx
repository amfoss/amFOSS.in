import Image from "next/image"
import UnderlineEffect from "../underlineEffect"

export default function hackathons({props, name, number}){
    return(
        <>
        <div className="mb-20 grid md:grid-cols-2 grid-cols-1">
            { !(number%2)?
                <div className="flex md:flex-[10]"></div>:<></>}
                <div className={`flex flex-[9] flex-col ${number%2? 'md:mr-10': 'md:ml-10'}`}>
                    <div className="flex-1 h-min overflow-hidden rounded-md">
                        <Image className="hover:scale-105 transition-all duration-500 cursor-pointer" src={props.imgPath} width={900} height={900}/>
                    </div>
                    <div className="md:text-4xl max-md:text-2xl md:text-left text-center pt-4 pb-1 uppercase flex max-md:justify-center max-md:items-center">
                        <UnderlineEffect props={{"data":`${name}`, "link":`${props.link}`}}/>
                    </div>
                    <div className="text-white md:text-2xl sm:text-xl md:text-left text-center max-md:flex max-md:flex-col  max-md:justify-center max-md:items-center">
                        {Object.keys(props).map((key) => {return key!=="imgPath" && key!=="link"?(
                            <div className="flex" key={key}>
                            <div><span className="text-[#4D4C4A]">{key}&nbsp; </span></div>
                            <div>{Object.keys(props[key]).map((item, index) => (
                                <span className="tracking-wide" key={index}>{props[key][index]["name"]}&nbsp;&nbsp;</span>
                            ))}</div>
                            </div>
                        ):<></>})}
                        </div>
                </div>
            </div>
        </>
    )
}