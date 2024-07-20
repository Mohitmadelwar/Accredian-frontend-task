import React, { useState } from 'react';
import image from './img/course image.png';
import './css/Landingpage.css'; // Make sure to include your CSS file
import Modal from './pop-up modal';
import DrawerAppBar from './Navbar'

const Landingpage = () => {
    const [showModal,setShowModal]=useState(false);
  return (
    <div>
         <DrawerAppBar/>
    <section>
       
      <main>
        
        <div className="hero-section bg-white">
   
          <div className="container grid grid-two-cols">
            <div className="left-section ml-5">
              <div className="hero-content">
                <h1>Earn Rewards by Referring Your Friends</h1>
                <p>
                  Invite your friends to join our amazing courses and earn exciting rewards! Click the "Refer Now" button to get started. Help your friends enhance their skills while you enjoy the benefits of our referral program.
                </p>
                <div className="button-container">
                <button onClick={() => setShowModal(true)} className="refer-now-button">Refer Now</button>
     {showModal &&  <Modal onClose={()=> setShowModal(false)}/> }
              </div>
                     </div>
               
            </div>
            <div className="right-section place-self-end">
              <img
                src={image}
                alt="course image"
                width="500"
                height="500"
              />
            </div>
          </div>
        </div>
        
      </main>
    </section>
      
         </div>
  );
}

export default Landingpage;
