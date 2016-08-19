import React from 'react';
import s from './Header.css';

import Phone from './device.svg';
import Mountain from './mountain.png';
import Cloud from './cloud.svg';
import Tree from './tree.svg';

function Header() {
  return (
    <div className={s.root}>
        <div className={s.brand}>
          <span className={s.brandTxt1}>Make Me</span> <br/>
          <span className={s.brandTxt2}>Coffee</span>
        </div>
        <Phone className={s.phone}/>
        <Cloud className={s.cloud}/>
        <img src={Mountain} className={s.mountainOne}/>
        <img src={Mountain} className={s.mountainTwo}/>
        <img src={Mountain} className={s.mountainThree}/>
        <Tree className={s.tree}/>
    </div>
  );
}

export default Header;
