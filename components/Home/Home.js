import React from 'react';
import s from './Home.css';
import Mug from './mug.svg';
import KettleSpoon from './kettleSpoon.svg';
import Chemex from './chemex.svg';

// const title = 'Make Me Coffee';

class Home extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.steps}>
            <div className={s.step}>
              <div className={s.mugCircle}>
                <Mug />
              </div>
              <div className={s.description}>
                Enter how much <br /><span className={s.bold}>coffee</span> you want.
              </div>
            </div>
            <div className={s.step}>
              <div className={s.kettleCircle}>
                <KettleSpoon />
              </div>
              <div className={s.description}>
                We'll tell you the <span className={s.bold}>measurements.</span>
              </div>
            </div>
            <div className={s.step}>
              <div className={s.chemexCircle}>
                <Chemex />
              </div>
              <div className={s.description}>
                Enjoy your <br />delicious <span className={s.bold}>coffee.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
