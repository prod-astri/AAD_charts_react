import React from 'react'

export default function BlocksLine(props) {
    const { values } = props
    return (
        <div className='blocksLine'>

        {values.map((value) => {
            return (
                <div className='yearBlock'>
                   {(typeof value === 'number' && value > 0) ?
                    new Array(value).fill('').map((e) => <p>x</p>)
                    : (value === 0 ? <p>zero</p> :
                        <p className="noData"> n/a </p>)}
                </div>
            )
        })}
        </div>
    )
}
