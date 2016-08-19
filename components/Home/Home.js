import React, { PropTypes } from 'react';
import s from './Home.css';
import Mug from './mug.svg';
import KettleSpoon from './kettleSpoon.svg';
import Chemex from './chemex.svg';

const title = 'Make Me Coffee';

class Home extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.steps}>
            <div className={s.step}>
              <div className={s.mugCircle}>
                <Mug/>
              </div>
              <div className={s.textInstructions}>
                <div className={s.numberText}>1. </div>
                <div className={s.description}>&nbsp;Enter how much &nbsp;<span className={s.bold}>Coffee</span> you want.</div>
              </div>
            </div>
            <div className={s.step}>
              <div className={s.kettleCircle}>
                <KettleSpoon/>
              </div>
              <div className={s.textInstructions}>
                <div className={s.numberText}>2. </div>
                <div className={s.description}>&nbsp;We'll tell you the &nbsp;<span className={s.bold}>measurements.</span></div>
              </div>
            </div>
            <div className={s.step}>
              <div className={s.chemexCircle}>
                <Chemex/>
              </div>
              <div className={s.textInstructions}>
                <div className={s.numberText}>3. </div>
                <div className={s.description}>&nbsp;Enjoy your delicious &nbsp;<span className={s.bold}>Coffee.</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
