import React from 'react';

const SearchBox = ({ textoMudou }) => {

    const change = (event) => {
        const name = event.target.value
        textoMudou(name);
    }
    return (
        <div className='pa2'>
            < input type='search' placeholder='search robots'
                className='tc bg-light-green dib br4 pa3 ma2 grow bw2 shadow-5'
                onChange={change}></input>
        </div>
    )
}

export default SearchBox