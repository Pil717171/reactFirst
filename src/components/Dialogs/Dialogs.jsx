import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialogsItem}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [{
        id: 1,
        name: 'Ivan'
    }, {
        id: 2,
        name: 'Sasha'
    },{
        id: 3,
        name: 'Gena'
    }, ];

    let messagesData = [{
        id: 1,
        message: 'Hi'
    }, {
        id: 2,
        message: 'Hello'
    },{
        id: 3,
        message: 'Ura'
    }, ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}></DialogItem>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}></DialogItem>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}></DialogItem>

            </div>
            <div className={s.messages}>
                
                <Message message={messagesData[0].message} id={messagesData[0].id}></Message>
                <Message message={messagesData[1].message} id={messagesData[1].id}></Message>
                <Message message={messagesData[2].message} id={messagesData[2].id}></Message>
            </div>
        </div>
    )
}

export default Dialogs;