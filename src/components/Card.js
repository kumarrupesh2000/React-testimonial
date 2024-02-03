
// importing icon
import {RiDoubleQuotesL ,RiDoubleQuotesR } from "react-icons/ri";



function Card(props){

    let review=props.review;

    return(
        <div className="w-[100%] h-[100%] relative  flex flex-col justify-center items-center">
            <div className="bg-black w-[140px] h-[140px] rounded-full absolute top-[-5rem] left-12">
            <img  src={review.image}  className="w-[140px] h-[140px] rounded-full relative z-[25]"></img>
            <div className=" w-[140px] h-[140px] absolute bg-blue-600 rounded-full top-[-1rem] left-3 z-[2]"></div></div>
            <div>
                <p className="font-bold text-3xl">{review.name}</p>
            </div>
            <div>
                <p className="text-blue-600">{review.job}</p>
            </div>

            <div className="font-bold text-blue-600 text-3xl">
                <RiDoubleQuotesL/>
            </div>
            <div className="px-7 text-center text-gray-500">
                {review.text}
            </div>
            <div className="font-bold text-blue-600 text-3xl">

            <RiDoubleQuotesR />
                
            </div>

            {props.children}

        </div>


    )



}
export default Card;
