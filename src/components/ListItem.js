import React, {useEffect, useState} from "react";
import axios from "axios";

export default function ListItem(props) {
    const [selectedProfile, setProfile] = useState(); // выбранный профиль
    const [selectedId, setData] = useState(); // id профиля


    useEffect(() => {
        if (selectedId !== undefined && selectedId !== null) {
            const fetchData = async () => {
                const result = await axios(
                    "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/" + selectedId + ".json",
                );
                console.log(result)
                setProfile(result.data);
            };

            fetchData();
        }

    }, [selectedId]);

    return (
        <div className='list_item b1' onClick={() => setData(props.params.id)}>
            {props.params.name}
        </div>
    )

}
