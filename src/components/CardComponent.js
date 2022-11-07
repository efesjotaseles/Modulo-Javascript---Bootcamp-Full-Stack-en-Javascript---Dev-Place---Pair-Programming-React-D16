import React from "react";

function CardComponent(product){


    return(
        <>
        <div className="cardComponent">
            <div className="cardTitle">
                <div className="productName">{product.name}</div>
            </div>
            <div className="cardImage">
                <img className="productImage" src={product.imageURL}></img>
            </div>
            <div className="cardPrice">
                <div className="productPrice">{product.price}</div>
            </div>
        </div>
        </>
    )

}

export default CardComponent;