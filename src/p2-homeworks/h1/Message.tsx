import React from 'react'
import s from './Message.module.css'


type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <div className={s.ava}><img src={props.avatar} alt=""/></div>
            <div className={s.post}>
                <div><h5 className={s.name}>{props.name}</h5></div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>


        </div>
    )
}

export default Message
