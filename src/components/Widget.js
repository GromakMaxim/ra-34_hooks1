import React, {useEffect, useState} from "react";
import List from "./List";
import Details from "./Details";
import '../css/main.css';
import '../css/default.css';
import axios from "axios";

export default function Widget(props) {
    const [selectedProfile, setProfile] = useState(); // выбранный профиль
    const [selectedId, setData] = useState(); // id профиля

    useEffect(() => {
        if (selectedId !== undefined && selectedId !== null) {
            const fetchData = async () => {
                const result = await axios(
                    "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/" + selectedId + ".json",
                );
                setProfile(result.data);
            };

            fetchData();
        }

    }, [selectedId]);


    return (
        <div className='widget flex-row'>
            <List getById={setData}/>
            <Details profileData={selectedProfile}/>
        </div>
    );
}
