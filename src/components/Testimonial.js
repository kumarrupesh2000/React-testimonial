import Card from "./Card";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

function Testimonial(props)
{
    let reviews=props.reviews;
    const[index,setIndex]=useState(0)

    
        function leftHandler(){
            index<0?setIndex(reviews.length-1):setIndex(index-1)




        }
        function rightHandler(){
            index>reviews.length?setIndex(0):setIndex(index+1)
            
        } 
        function  surpHandler(){

            setIndex(Math.floor(Math.random()*reviews.length));
             
        
        }



    return(
        <div className="w-[60%] h-[100%] bg-white mt-9" >
            <Card review={reviews[index]}>
            <div className="mt-7">

            <button onClick={leftHandler} className="font-bold text-4xl text-blue-600  hover:text-red-500 transition-all duration-300">
            <MdKeyboardArrowLeft />

            </button>
            <button onClick={rightHandler} className="font-bold text-4xl text-blue-600 hover:text-red-500 transition-all duration-300" >

            <MdOutlineKeyboardArrowRight />

            </button>

            </div>
                <div onClick={surpHandler} className="bg-blue-600 my-[30px] py-2 px-8 rounded-md hover:bg-red-500 transition-all duration-300 ">
                <button className="font-bold text-white">
                    Surprise Me
                </button>
                </div>
            </Card>
            






















            {/* {

                reviews.map((review) => {
                    return <Card key={review.id} review={review} />;
                })


              
            } */}


        </div>




    )


}

export default Testimonial;