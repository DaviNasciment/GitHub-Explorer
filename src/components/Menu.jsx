import React, { useState } from "react";
import { ItemGitHub } from './ItemGitHub';
import '../css/menu.scss'
import LogoGit from '../assets/silhueta-do-logotipo-do-github-em-um-quadrado.png'

export function Menu() {
    const [inputValue, setInputValue]=useState(null)

    const getInputValue = (event)=>{
        setInputValue(event.target.value)
    };

    return (
        <div>
            <div id="box_menu">
                <div id="titulo-top">
                    <img className="logo-git-hub" src={LogoGit} alt="logo GitHub" />
                    <input id="entrada-github" type="text" onChange={getInputValue} placeholder='Digite seu user no GitHub'/>
                </div>
            </div>
            <ItemGitHub item={inputValue} />
        </div>
    )
}