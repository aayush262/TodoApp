import React from 'react';

const header = () => {

    const style = {

      backgroundColor: '#27D',
      textAlign : 'center',
      height:'80px',
      boxShadow:'0px 2px 4px rgba(0,0,0,0.7)',
      fontSize:'30px',
    
    }

    const textStyle = {
        padding:'20px',
        color:'white'
    }

    return(
        <div style = {style}>
            <div style = {textStyle}>
                TO DO LIST
            </div>
            
        </div>
        
    );

}

export default header;