import React from "react";


function RestCard(){
    return(
        <>
        <section className="bg-gray-400 h-[400px] w-[350px] rounded-3xl overflow-hidden">
            <img src="./public/images/danGreen.jpg" alt="restaurant-img"
            className="w-full h-[150px]" />
            <div className="flex justify-center p-5">
                <p>hello world</p>
                <button>shop here</button>
            </div>
        </section>
        </>
    )
}

export default RestCard;