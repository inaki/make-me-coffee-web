
import React from 'react';
import s from './Footer.css';

import AppStore from './Appstore.svg';
import AvatarInaki from './avatarInaki.png';
import AvatarAinsley from './avatarAins.png';

function Footer() {
  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <div className={s.container}>
          <div className={s.stores}>
            <AppStore className={s.appleStore}/>
          </div>
          {/* <div className={s.credits}>
            <span className={s.text}></span>
          </div> */}
          <div className={s.artists}>
            <img ref='avatarInaki' src={AvatarInaki} className={s.artist} />
            <img ref='avatarAins' src={AvatarAinsley} className={s.artist} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
