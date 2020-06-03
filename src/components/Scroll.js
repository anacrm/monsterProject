import React from 'react';

const Scroll = (props) => {

    return (
        <div style = {{overflow:'auto', height:'830px' }}>
           {props.children} 
        </div>
    )
}

export default Scroll 