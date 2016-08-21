import React, {Component} from 'react';
import SizeMe from 'react-sizeme';

import s from './Header.css';
import {TweenMax, TweenLite, TimelineMax } from 'gsap';

import Phone from './phone.png';
import Mountain from './mountain.png';
import Cloud from './cloud.png';
import Tree from './tree.png';

class Header extends Component {
  componentDidMount() {
    TweenMax.to(this.refs.phone, 4, { y: this.props.size.height - 650, ease:Elastic.easeInOut.config( 1, 0.5) });
    TweenMax.to(this.refs.brand,3,{opacity:1});
    TweenMax.to(this.refs.mountainOne, 3, { x:-400 , ease:Power1.easeInOut });
    TweenMax.to(this.refs.mountainTwo, 2, { x:400 , ease:Power1.easeInOut });
    TweenMax.to(this.refs.mountainThree, 2, { x:-700 , ease:Power1.easeInOut });
    TweenMax.to(this.refs.cloudOne, 25, {x: this.props.size.width + 200 , ease:Power1.easeInOut,repeat:-1 });
    TweenMax.to(this.refs.cloudTwo, 30, { x:this.props.size.width/2 + 200, ease:Power1.easeInOut,repeat:-1});
    TweenMax.to(this.refs.cloudThree, 35, { x:this.props.size.width + 200, ease:Power1.easeInOut,repeat:-1});
    TweenMax.to(this.refs.treeOne, 2, { y: 280, ease:Power1.easeInOut });
    TweenMax.to(this.refs.treeTwo, 2, { y:345, ease:Power1.easeInOut });
    TweenMax.to(this.refs.treeThree, 2, { y:420, ease:Power1.easeInOut });
  }

  render() {
    return (
      <div className={s.root}>
          <div ref="brand" className={s.brand}>
            <span className={s.brandTxt1}>make me</span> <br/>
            <span className={s.brandTxt2}>coffee</span>
          </div>
          <div className={s.phoneContainer}>
            <img ref='phone' src={Phone} className={s.phone}/>
          </div>
          <img ref='cloudOne' src={Cloud} className={s.cloudOne} />
          <img ref='cloudTwo' src={Cloud} className={s.cloudTwo} />
          <img ref='cloudThree' src={Cloud} className={s.cloudThree} />
          <img ref='mountainOne' src={Mountain} className={s.mountainOne} />
          <img ref='mountainTwo' src={Mountain} className={s.mountainTwo} />
          <img ref='mountainThree' src={Mountain} className={s.mountainThree} />
          <img ref='treeOne' src={Tree} className={s.treeOneStyle} />
          <img ref='treeTwo' src={Tree} className={s.treeTwoStyle} />
          <img ref='treeThree' src={Tree} className={s.treeThreeStyle} />
      </div>
    );
  }
}

export default SizeMe()(Header);
