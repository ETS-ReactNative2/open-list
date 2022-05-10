import React, { Component } from 'react';
import Image from '../im.jpg';
import Image2 from '../javascript.png';
import Image3 from '../js.jpg';
import Image4 from '../principal.jpg';
import Image5 from '../javascript-wow.png';
import Image6 from '../P20330-074401.jpg';
import Image7 from '../P20330-074421.jpg';
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
    height:100vh;
    max-height:100vh;
    justify-content:center;
    align-items:center;
    overflow:scroll;
    top:0;
    background:white;
    font-size:30px;
    margin-top:150px;
    margin-bottom:150px;
    margin:3%;
    margin-bottom:10px;
    `;
   document.querySelector('body').style.cssText=`overflow:hidden;`
// document.getElementById("stylle").style.overflowY=`scroll`;
// document.querySelector("article").style.overflowY=`scroll`;

    Create.innerHTML=this.x;
    // +`<span id="close" style="font-size:50px;margin-bottom:10px;color:red; min-height:70px;" onClick={close}>X</span>`;
    // const close=()=>{
    //   console.log("clickClose");
    //   Create.remove();
    // }
    document.querySelector('#close,#stylle').addEventListener("click",()=>{
      console.log("clixk");
      document.querySelector('body').style.cssText=`overflow:scroll;`
        Create.remove();
    });
  }

}

// Карты идут по нумерации для максимальной приближенности к реальной жизни!

// const oneCard=()=>{
//   const text= "<p style='overflow:scroll;margin-top:70px; margin:3%;'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat </p>"
//   console.log("clickOne");
//   const OJ=new Cards(text);
//   OJ.openCard();
// };





class Article extends Component {


  render() {
    return (
    <React.Fragment>
    <h1>Article</h1>
    <div style={{dispalay:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"100%",maxWidth:"100%"}}>
    <span>Card_1</span>
      <p className="card" onClick={()=>{
        const text="<p style='overflow:scroll;margin-top:70px; margin:3%;'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat </p>";
        console.log("clickOne");
        const OJ=new Cards(text);
        OJ.openCard();
        document.querySelector('#stylle').insertAdjacentHTML('afterbegin',`<img src={Image} alt='image' />`);

      }}>
      <p style={{width:"400px",margin:"3%",maxWidth:"100%"}}>Кликнуть и откроется описание!</p>
        <img src={Image} alt='image' style={{width:"300px"}}/>
      </p>
    </div>
    <div  style={{dispalay:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"100%",maxWidth:"100%"}}>
    <span>Card_2</span>
    <p className="card" onClick={()=>{
      const text="<p style='overflow:scroll;margin-top:70px; margin:3%;'>Описание два, тут написано для второй карты, второе описание, под номером два! </p>";
      const Two=new Cards(text);
      Two.openCard();
      document.querySelector('#stylle').insertAdjacentHTML('afterbegin',`<img src={Image2} alt='image' />`);
    }}>
      <p style={{width:"400px",margin:"3%",maxWidth:"100%"}}>Кликнуть и откроется описание!</p>
        <img src={Image2} alt='image' style={{width:"300px"}}/>
    </p>
    </div>
    <div style={{dispalay:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"100%",maxWidth:"100%"}}>
    <span>Card_3</span>
    <p className="card" onClick={()=>{
      const text="<p style='overflow:scroll;margin-top:70px; margin:3%;'>О_о это же третье описание для третьей карты. Надо же ! Третье описание. </p>";
      const Three=new Cards(text);
      Three.openCard();
      document.querySelector('#stylle').insertAdjacentHTML('afterbegin',`<img src={Image3} alt='image' />`);
    }}>
        <p style={{width:"400px",margin:"3%",maxWidth:"100%"}}>Кликнуть и откроется описание!</p>
      <img src={Image3} alt='image' style={{width:"300px"}}/>
    </p>
    </div>
    <div style={{dispalay:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"100%",maxWidth:"100%"}}>
    <span>Card_4</span>
    <p className="card" onClick={()=>{
      const text="<p style='overflow:scroll;margin-top:70px; margin:3%;'>Да, да, да. Четвертое описание для четвертой карты с номером четыре.</p>";
      const Four=new Cards(text);
      Four.openCard();
      document.querySelector('#stylle').insertAdjacentHTML('afterbegin',`<img src={Image4} alt='image' />`);
    }}>
          <p style={{width:"400px",margin:"3%",maxWidth:"100%"}}>Кликнуть и откроется описание!</p>
      <img src={Image4} alt='image' style={{width:"300px"}}/>
    </p>
    </div>
    <div style={{dispalay:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"100%",maxWidth:"100%"}}>
    <span>Card_5</span>
    <p className="card" onClick={()=>{
      const text="<p style='overflow:scroll;margin-top:70px; margin:3%;'>А нука, дайте-те ка попробую угадю: это может быть пятое описание для пятой карты, по вероятности с уверенностью на 99%. Потому что есть один маловероятный процент что тут будет какой нибудь прикол, а не пятый номер, пятой карты. </p>";
      const Five=new Cards(text);
      Five.openCard();
      document.querySelector('#stylle').insertAdjacentHTML('afterbegin',`<img src={Image5} alt='image' />`);
    }}>
    <p style={{width:"400px",margin:"3%",maxWidth:"100%"}}>Кликнуть и откроется описание!</p>
      <img src={Image5} alt='image' style={{width:"300px"}}/>
    </p>
    </div>
    <div style={{dispalay:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"100%",maxWidth:"100%"}}>
    <span>Card_6</span>
    <p className="card" onClick={()=>{
      const text="<p style='overflow:scroll;margin-top:70px; margin:3%;'>Шестой номер, с шестой карты, да это по логическому объяснению так и должно было быть считая по порядку. </p>";
      const Six=new Cards(text);
      Six.openCard();
      document.querySelector('#stylle').insertAdjacentHTML('afterbegin',`<img src={Image6} alt='image' />`);
    }}>
    <p style={{width:"400px",margin:"3%",maxWidth:"100%"}}>Кликнуть и откроется описание!</p>
      <img src={Image6} alt='image' style={{width:"300px"}}/>
    </p>
    </div>
    <div style={{dispalay:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"100%",maxWidth:"100%"}}>
    <span>Card_7</span>
    <p className="card" onClick={()=>{
      const text="<p style='overflow:scroll;margin-top:70px; margin:3%;'>Ура! Седьмой номер, седьмой карты! С цифрой семь!</p>";
      const Seven=new Cards(text);
      Seven.openCard();
      document.querySelector('#stylle').insertAdjacentHTML('afterbegin',`<img src={Image7} alt='image' />`);
    }}>
    <p style={{width:"400px",margin:"3%",maxWidth:"100%"}}>Кликнуть и откроется описание!</p>
      <img src={Image7} alt='image' style={{width:"300px"}}/>
    </p>
    </div>
    </React.Fragment>
    );
  }
}

export default Article;
