import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import s from './Greeting.module.css'

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.currentTarget.value || !e.currentTarget.value.trim()) {
            setError('name is require')
            setName('')
            return
        } else {
            setName(e.currentTarget.value)
            setError('')
        }
    }
    const addUser = () => {
        if (!name || !name.trim()) {
            setError('name is require')
        } else {
            addUserCallback(name)
            setName('');
            alert(`Hello ${name} !`)

        }

    }
    const totalUsers = users.length
    return (
        <div className={s.container}>
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
            />
        </div>

    )
}

export default GreetingContainer
