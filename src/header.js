import React, { Component } from 'react';
// import logo from './logo.svg';
// import './header.css';




function rus(){ // этот фанкшин был переделан!
  console.log("rus");
  document.querySelector('#en').style.cssText=`display:none;`
  document.querySelector('#ru').style.cssText=`display:flex;`

  document.querySelector('body > main:nth-child(1) > header:nth-child(1) > h1:nth-child(2)').style.cssText=`display:none`;
  document.querySelector('body > main:nth-child(1) > header:nth-child(1) > h1:nth-child(3)').style.cssText=`display:block`;

  document.querySelector('body > main:nth-child(1) > header:nth-child(1) > p:nth-child(4)').style.cssText=`display:none`;
  document.querySelector('body > main:nth-child(1) > header:nth-child(1) > p:nth-child(5)').style.cssText=`display:block`;
}

const eng=()=>{
  console.log("eng");
  document.querySelector('#ru').style.cssText=`display:none;`
  document.querySelector('#en').style.cssText=`display:flex;`

  document.querySelector('body > main:nth-child(1) > header:nth-child(1) > h1:nth-child(2)').style.cssText=`display:block`;
  document.querySelector('body > main:nth-child(1) > header:nth-child(1) > h1:nth-child(3)').style.cssText=`display:none`;

  document.querySelector('body > main:nth-child(1) > header:nth-child(1) > p:nth-child(4)').style.cssText=`display:block`;
  document.querySelector('body > main:nth-child(1) > header:nth-child(1) > p:nth-child(5)').style.cssText=`display:none`;
}

window.addEventListener("DOMContentLoaded",()=>{
  console.log("ooooK");
  rus();
});

class Header extends Component {
  render() {
    return (
    <React.Fragment>
    <form>
      <fieldset>
      <legend id="en">Language En</legend>
      <legend id="ru">Language Ru</legend>
          <label>
            <span>En</span>
            <input type="radio" name="language" value="en" onClick={eng}/>
          </label>
          <label>
            <span>Ru</span>
            <input type="radio" name="language" value="ru" onClick={rus} checked/>
          </label>

      </fieldset>
    </form>
    <h1>Cards</h1>
    <h1>Карты</h1>
    <p>With epic-technological disclosure with inadequate click "any character"</p>
    <p style={{width:"500px",maxWidth:"100%"}}>С эпически- технологическим раскрытием при неадекватном клике "любым персонажем"</p>
    </React.Fragment>
    );
  }
}

export default Header;
