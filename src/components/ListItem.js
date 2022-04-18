import React from "react";

export default function ListItem(props){
    return (
        <div className='list_item b1'>
            {props.params.name}
        </div>
    )

}
