import React from "react";

export default function ItemCard(props){
    return(
        <div>
            <h1>Name: {props.items.name}</h1>
        </div>
    )
}