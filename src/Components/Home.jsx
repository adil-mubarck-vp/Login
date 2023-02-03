import React, { useState,useEffect } from 'react'
// import axios from 'axios';
import './Home.css'

function Home() {

    // const [details, setDetails] = useState([]);
    // axios
    //   .get("https://restcountries.com/v2/all?fields=name,region,flag")
    //   .then((res) => res.data)
    //   .then((datas) => setDetails(datas));
    // return (
    //   <div>
    //     <h1 className="heading">Country names listed by flags</h1>
    //     <hr />
    //     <div className="content">
    //       {details.map((country) => {
    //         return (
    //           <div className="item">
    //             <a href={country.flag}>
    //               <img src={country.flag} className="flag-img" alt="" />
    //             </a>
    //             {country.name}
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // );
    const [details, setDetails] = useState([]);
   fetch('https://restcountries.com/v2/all?fields=name,region,flag')
  .then(response => response.json())
  .then(json => setDetails(json))
    // useEffect(() => {
      
    //     }, []);
        console.log(details);
      
       return (
    
      <div>
        
        <h1 className="heading">Country names listed by flags</h1>
        <hr />
        <div className="content">
          {details.map((item) => {
            return (
              <div className="item">
                <a href={item.flag}>
                  <img src={item.flag} className="flag-img" alt="" />
                </a>
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    );
    }





export default Home