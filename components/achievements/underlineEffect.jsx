export default function underlineEffect({props}){
    return(
        <a href={props.link!=='undefined'?props.link:undefined} className={`tracking-wide ${props.link!=='undefined'? 'relative hover:text-yellow-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-yellow-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-yellow-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]':''}`}>
            {props.data}
        </a>
    )
}