import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './css.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Header() {
    let [menu, setMenu] = useState<boolean>(true)
    const getMenu = () => {
        setMenu(!menu)
    }
    return (
        <div>
            <div className={menu ? s.menu : s.show}>

                <NavLink className={({isActive}) => (isActive ? s.active : s.item)} to={PATH.PRE_JUNIOR}> pre
                    junior </NavLink>


                <NavLink className={({isActive}) => (isActive ? s.active : s.item)}
                         to={PATH.JUNIOR}> junior </NavLink>


                <NavLink className={({isActive}) => (isActive ? s.active : s.item)} to={PATH.JUNIOR_PlUS}> junior
                    plus </NavLink>

            </div>
            <SuperButton onClick={getMenu}>Menu</SuperButton>
        </div>
    )
}

export default Header
