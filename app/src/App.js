import React from 'react';
import  './style.css';
function App() {
  let img1 = <img style={{width:'300px',height:'260px' }} src='/text.png'/>
  let img2 = <img  style={{width:'300px',height:'260px'}} src='/test1.png'/>
  let vid = <video  width='320' height='240' controls  >
  <source src='world.mp4' type='video/mp4'/></video>

  return (
    <div>
    <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
      <h1 className='title red'>
        Houssem eddine Massoudi
      </h1>
      {img1}
      {img2}
      
    </div>
    {vid}
    </div>
  );
}

export default App;
