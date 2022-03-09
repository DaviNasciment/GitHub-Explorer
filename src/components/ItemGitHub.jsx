import React, { useState } from "react";
import api from "../services/api";
import '../css/itemgithub.scss'

export function ItemGitHub(props, key, action) {
    const [user, setUser] = useState();
    function apiGit() {
        api
        .get(`/users/${props.item}`)
        .then((response) => setUser(response.data))
        .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
        });
    }

    return (
        <div className="item-git-hub">
            <div className="App">
                <p>Usuário: {user?.login}</p>
                <p>Biografia: {user?.bio}</p>
                <p>Seguidores: {user?.followers}</p>
                <p>Seguindo: {user?.following}</p>
                <p>Criado: {user?.created_at}</p>
                <p>Repositórios públicos: {user?.public_repos}</p>
                <button className="button-submit" type="button" onClick={apiGit} >Fazer requisição</button>
            </div>
        </div>
    )
}