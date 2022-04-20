import React from "react";


export default function ListItem(props) {

    return (
        <div className='list_item' onClick={() => props.getById(props.params.id)}>
            {props.params.name}
        </div>
    )

}
