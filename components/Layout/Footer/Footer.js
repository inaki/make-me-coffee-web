
import React from 'react';
import s from './Footer.css';

function Footer() {
  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <div className={s.container}>
          <span className={s.text}>© Make Me Coffee</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
