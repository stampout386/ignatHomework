import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ''
    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <SuperButton onClick={addUser}>add</SuperButton>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div><span className={s.errorcolor}>{error}</span></div>
        </div>
    )
}

export default Greeting
