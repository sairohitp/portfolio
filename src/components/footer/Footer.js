import React from 'react'
import FooterCSS from "./Footer.module.css";

const Footer = () => {
  return (
    <div id={FooterCSS.supernav}>
      
      <div className="subbody">

        <nav className={FooterCSS.flex}>
          
        <span class="material-symbols-outlined">
article
</span>
        <span class="material-symbols-outlined">
mail
</span>

        </nav>
        
      </div>
    </div>
  )
}

export default Footer