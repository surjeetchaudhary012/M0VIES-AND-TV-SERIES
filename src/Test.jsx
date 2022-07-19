import React from "react";

const Test = () => {
    const link = "https://picsum.photos/500/500";
    return (
        <>
         <div>
            <span className = "mainPages" > 
            Trending
            <img src = {link} alt = "this is trending images" />
             </span>
        </div>
        </>
    )
}

export default Test;