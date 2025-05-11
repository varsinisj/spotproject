// import React from 'react'

// import './Home.css';
// import { useNavigate } from 'react-router-dom';
// const Home = () => {
//   const nav1=useNavigate()
//   const handleavail=()=>{
//     nav1("/Availability")
//   }
 
//   const handlemap=()=>{
//     nav1("/Mapsss")
//   }
//   return (
//     <div className='fulll'>
//         <center>
//     <h1 style={{color:'white'}}>SPOTSAVER</h1>
//     <h3 style={{color:'white'}}> "Find Your Perfect Spot, Anytime, Anywhere! Simplify Your Parking Experience with Just a Tap—No More Circling the Block!"</h3>
//     </center>
//     <div className='loc'>
//         <h2>SUBSCRIPTION</h2>
         
//         <h2>PARTNERSHIP</h2>
//         <h2>FILTERING</h2>
//         <h2>INDOOR PARKING</h2>
        
//     </div>
//     <div className='hh'>
//     <div className='near'>
//        <center>
    
//        <label><h2>SELECT LOCATION</h2></label>
//         <select className='value'>
//         <option>Chennai</option>
//          <option>Coimbatore</option>
//          <option>Banglore</option>
//          <option>Mumbai</option>
//          <option>Delhi</option>
//          <option>Pune</option>
//          <option>Hyderabad</option>
//          <option>Goa</option>
        
//         </select>
//        </center>
//        </div>
//     <div className='che'>
//         <center>
//        <button className='bu'  onClick={handleavail}><h1>CHECK AVAILABILITY</h1></button>
//        </center>
//     </div>
//        <div className='book'>
//        <center>
    
//        <h2><a href="#" onClick={handlemap} style={{color:'black'} }>MAPS</a></h2>
//        </center>
//        </div>
       

//        </div>
//     </div>
//   )
// }

// export default Home
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const nav1 = useNavigate();

  const handleavail = () => {
    nav1("/Availability");
  }

  const handlemap = () => {
    nav1("/Mapsss");
  }

  return (
    <div className='fulll'>
      <center>
        <h1 style={{ color: 'white' }}>SPOTSAVER</h1>
        <h3 style={{ color: 'white' }}>
          "Find Your Perfect Spot, Anytime, Anywhere! Simplify Your Parking Experience with Just a Tap—No More Circling the Block!"
        </h3>
      </center>
      <div className='loc'>
        <h2>SUBSCRIPTION</h2>
        <h2>PARTNERSHIP</h2>
        <h2>FILTERING</h2>
        <h2>INDOOR PARKING</h2>
      </div>
      <div className='hh'>
        <div className='near'>
          <center>
            <label><h2>SELECT LOCATION</h2></label>
            <select className='value'>
              <option>Chennai</option>
              <option>Coimbatore</option>
              <option>Banglore</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Pune</option>
              <option>Hyderabad</option>
              <option>Goa</option>
            </select>
          </center>
        </div>
        <div className='che'>
          <center>
            <button className='bu' onClick={handleavail}><h1>CHECK AVAILABILITY</h1></button>
          </center>
        </div>
        <div className='book'>
          <center>
            {/* Replace <a> with <button> */}
            <button onClick={handlemap} style={{ color: 'black' }}>
              <h2>MAPS</h2>
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Home;
