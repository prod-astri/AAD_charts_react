import React from 'react'

import BlocksLine from './BlocksLine'

export default function GlobalGrid(props) {
    const { places } = props

    function makeNames() {
        return places.map((place, i) => {
            return (
                <p className="name">{place[0]}</p>
            )
        })
    }




    return (
        <div className='grid'>
            <p></p>
            <div className='grid-top' style={{display: "flex", margin: 'none'}} >
                {Array(22).fill('').map((e, i) => <p className='year'>{2000 + i}</p>)}
            </div>
            <p></p>
            <div className='grid-left' >
                {makeNames()}
            </div>
            <div className='grid-middle  '>
                {places.map((place, i) => {
                    return (
                        <BlocksLine values={place[1].yearsValues} key={i} />
                    )
                })}
            </div>
        </div>
    )
}
