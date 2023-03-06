import React from 'react';
import './App.css';
import './index.css'
import Charity from './compoment/charity';
import data from './data';
import Header from './compoment/Header';
import Footer from './compoment/Footer';

function ShowAddit(additional){
  
  const alertInformation = Object.entries(additional) .map(information => `${information[0]}: ${information[1]}`) .join('\n');
  alert(alertInformation)
};

 

function App() {
  return (
    <div className="wrapper"> 
    <Header />
   
    {data.map(organiz => (
        <Charity key={organiz.name} name={organiz.name}
        purpose={organiz.purpose} location={organiz.location} 
        budget={organiz.budget} feedback={organiz.feedback}
        additional={organiz.additional} 
        img={organiz.img}
        ShowAddit={ShowAddit}
        />

      ))}
    
    
   <h2>Save our world together</h2>
   <Footer/>
    </div>
  );
}

export default App;
