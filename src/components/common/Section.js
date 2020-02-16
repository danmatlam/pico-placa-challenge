import React from 'react'

const Section = (props) => {
    return (
        <div style={{
            padding:'.9em', 
            borderBottom:`1px solid #f5f5f5` ,  
      
        }}>
            {props.children}
        </div>
    )
}

export default Section
