import React, {useEffect, useState} from "react";
import ListItem from "./ListItem";
import axios from "axios";

export default function List(props) {
    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json",
            );

            setData(result.data);
        };

        fetchData();
    }, []);


    function renderList() {
        let arr = [];
        for (let item of data) {
            let obj = item;
            arr.push(<ListItem key={obj.id} params={obj}/>);
        }
        console.log(arr)
        return arr;
    }

    return (
        <div className='list b1'>
            {renderList()}
        </div>
    );
}
