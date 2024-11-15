"use client"
import { useState } from 'react';

function Footer() {
  const [clicked, setClicked] = useState(false); 

  return (
    <footer className="w-full h-16 mt-auto flex justify-center items-center"
			onClick={ () => 
			setClicked((prev)=>!prev) } >
      {clicked && (
        <div 
          className="w-max h-6 cursor-pointer">
          IQBALLLLL
        </div>
      )}
    </footer>
  );
}

export default Footer;
