import React from "react";
import axios from "axios";

export default function ListItem(props) {

    async function handleClick() {
        let result = await fetchData(props.params.id)
        console.log(result)
    }

    async function fetchData(id) {
        const result = await axios(
            "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/" + id + ".json",
        );
        return result.data;
    }

    return (
        <div className='list_item b1' onClick={handleClick}>
            {props.params.name}
        </div>
    )

}
