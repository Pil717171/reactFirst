import React from 'react';
import profile from './Profile.module.css';
import MyPosts from './myPosts/MyPosts';

const Profile = () => {
    return <div className={profile.content}>
    <div>
      <img src="https://s1.1zoom.ru/big0/930/Coast_Sunrises_and_sunsets_Waves_USA_Ocean_Kaneohe_521540_1280x775.jpg" alt="" srcset=""/>
    </div>
    <div>
      ava + description 
    </div>
    <MyPosts></MyPosts>
  </div>
}

export default Profile;