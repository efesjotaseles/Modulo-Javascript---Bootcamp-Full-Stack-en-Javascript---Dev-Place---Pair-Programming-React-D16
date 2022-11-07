import React from "react";
import CardComponent from "./CardComponent";

function MainComponent(){
    const listaProductos = [
        {name: "Bolsita",
        price: "80",
        image:""},
        {name: "Caja",
        price: "120",
        image:""},
        {name: "Pala",
        price: "65",
        image:""}
    ];

    return (
        <>
        {listaProductos.map(prod =>{
            return (
                <CardComponent name={prod.name} image={prod.image} price={prod.price} />
            )
        })}
        </>

    )
}

export default MainComponent;