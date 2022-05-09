import React, { Component } from 'react';
import Image from '../im.jpg';
// import logo from './logo.svg';
// import './header.css';

class Cards{
  constructor(x){
    this.x=x;
  }
  openCard(){
    console.log("open");
    const Create=document.createElement('div');
    document.querySelector('article').appendChild(Create);
    Create.setAttribute('id', 'stylle');
    document.querySelector('#stylle').style.cssText=`
    display:flex;
    position:fixed;
    flex-direction:column;
    width:100%;
    height:100%;
    max-height:100%;
    justify-content:center;
    align-items:center;
    overflow:scroll;
    top:0;
    background:white;
    font-size:30px;
    margin:3%;
    overflow-y: scroll;
    margin-bottom:10px;
    `;
   document.querySelector('body').style.cssText=`overflow:hidden;`
document.getElementById("stylle").style.overflowY=`scroll`;
// document.querySelector("article").style.overflowY=`scroll`;
    Create.innerHTML=this.x+`<span id="close" style="overflow-y:scroll;font-size:50px;margin-bottom:10px;color:red;">X</span>`;
    const close=()=>{
      console.log("clickClose");
      Create.remove();
    }
    document.querySelector('#close,#stylle').addEventListener("click",()=>{
      console.log("clixk");
      document.querySelector('body').style.cssText=`overflow:scroll;`
        Create.remove();
    });
  }
}

// Карты идут по нумерации для максимальной приближенности к реальной жизни!

const oneCard=()=>{
  const text= "<p style='overflow:scroll;min-height:100%;'><img src={Image} alt='image'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat </p>"
  console.log("clickOne");
  const OJ=new Cards(text);
  OJ.openCard();
};
const twoCard=()=>{
  console.log("clickTwo");
};
const threeCard=()=>{
  console.log("clickThree");
};
const fourCard=()=>{
  console.log("click4");
};
const fiveCard=()=>{
  console.log("click 5");
};
const sixCard=()=>{
  console.log("click 6");
};
const sevenCard=()=>{
  console.log("click 777");
};





class Article extends Component {
  render() {
    return (
    <React.Fragment>
    <h1>Article</h1>
    <div className="card" onClick={oneCard}>
      <p>oooK</p>
    </div>
    <div className="card" onClick={twoCard}>
      <p>otwpK</p>
    </div>
    <div className="card" onClick={threeCard}>
      <p>three</p>
    </div>
    <div className="card" onClick={fourCard}>
      <p>oooK</p>
    </div>
    <div className="card" onClick={fiveCard}>
      <p>oooK</p>
    </div>
    <div className="card" onClick={sixCard}>
      <p>oooK</p>
    </div>
    <div className="card" onClick={sevenCard}>
      <p>oooK</p>
    </div>
    </React.Fragment>
    );
  }
}

export default Article;
