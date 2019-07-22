import React from 'react';
import s from './Post.module.css';



const Post = (props) => {
    console.log(props)
    return (
        <div className={s.profile}>
            <div className={s.item} >
                {props.name}
            </div>
            <input type="text" />
            <input type="text" />
        </div>
    )
}

export default Post;