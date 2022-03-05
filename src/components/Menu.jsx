import React, { useEffect, useState } from "react";
//import api from "../services/api";
import '../css/menu.scss'
export function Menu() {
    const [userValue,setUserValue]=useState(null)

    const getInputValue = (event)=>{
        setUserValue(event.target.value)

        console.log(event.target.value)

        var testee = (event.target.value)
        console.log(testee)
    };

    const [user, setUser] = useState();
    useEffect(() => {
            fetch(`https://api.github.com/users/${userValue}`)
            .then((response) => response.json())
            .then(data=>setUserValue(data))
    }, [userValue]);

    return (
        <div id="box_menu">
            <div id="titulo-top">
                <h2>
                    GitHub Explorer {userValue}
                </h2>
            </div>
            <div id="container">
                <input id="entrada-github" type="text" onChange={getInputValue} placeholder='Digite seu user no GitHub'/>
            </div>

            <div className="App">
                <p>Usuário: {user?.login}</p>
                <p>Biografia: {user?.bio}</p>
            </div>
        </div>
    )
}