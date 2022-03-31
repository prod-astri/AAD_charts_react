import React from 'react'
import YearBlock from './YearBlock'

export default function BlocksLine(props) {
    const { values } = props
    return (
        <div className='blocksLine'>

        {values.map((value) => {
            return (
                
                  <YearBlock value={value}/>
                
            )
        })}
        </div>
    )
}
