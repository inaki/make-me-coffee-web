import React, {Component} from 'react';
import s from './Header.css';
import TweenMax from 'gsap';

import Phone from './phone.png';
import Mountain from './mountain.png';
import Cloud from './cloud.png';
import Tree from './tree.png';

class Header extends Component {
  componentDidMount() {
    TweenMax.to(this.refs.phone, 4, { y: -670 , ease:Elastic.easeInOut.config( 1, 0.5) });
    TweenMax.to(this.refs.brand,3,{opacity:1});
    TweenMax.to(this.refs.mountainOne, 3, { x:-400 , ease:Power1.easeInOut });
    TweenMax.to(this.refs.mountainTwo, 2, { x:400 , ease:Power1.easeInOut });
    TweenMax.to(this.refs.mountainThree, 2, { x:-800 , ease:Power1.easeInOut });
    TweenMax.to(this.refs.cloudOne, 33, { x:2000 , ease:Power1,repeat:-1 });
    TweenMax.to(this.refs.cloudTwo, 40, { x:2000, ease:Power1,repeat:-1});
    TweenMax.to(this.refs.cloudThree, 33, { x:2000 , ease:Power1,repeat:-1});
    TweenMax.to(this.refs.treeOne, 3, { y:890, ease:Power1.easeInOut });
    TweenMax.to(this.refs.treeTwo, 3, { y:740, ease:Power1.easeInOut });
    TweenMax.to(this.refs.treeThree, 3, { y:850, ease:Power1.easeInOut });
  }

  render() {
    const cloudTwoStyle = {top: '400px', left: '45%'};
    const cloudThreeStyle = {top: '200px'};
    const treeTwoStyle = {left: '70%'};
    const treeThreeStyle = {left: '20%'};

    return (
      <div className={s.root}>
          <div ref="brand" className={s.brand}>
            <span className={s.brandTxt1}>Make Me</span> <br/>
            <span className={s.brandTxt2}>Coffee</span>
          </div>
          <div className={s.phoneContainer}>
            <img ref='phone' src={Phone} className={s.phone}/>
          </div>
          <img ref='cloudOne' src={Cloud} className={s.cloud}/>
          <img ref='cloudTwo' src={Cloud} className={s.cloud} style={cloudTwoStyle}/>
          <img ref='cloudThree' src={Cloud} className={s.cloud} style={cloudThreeStyle}/>
          <img ref='mountainOne' src={Mountain} className={s.mountainOne}/>
          <img ref='mountainTwo' src={Mountain} className={s.mountainTwo}/>
          <img ref='mountainThree' src={Mountain} className={s.mountainThree}/>
          <img ref='treeOne' src={Tree} className={s.tree}/>
          <img ref='treeTwo' src={Tree} className={s.tree} style={treeTwoStyle}/>
          <img ref='treeThree' src={Tree} className={s.tree} style={treeThreeStyle}/>
      </div>
    );
  }
}

export default Header;
