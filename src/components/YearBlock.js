import React from 'react'

export default function YearBlock(props) {
    const { value } = props;
    return (
        <div className='yearBlock'>
            { 
                new Array(49)
                .fill('')
                .map((e, i)=> (value === "x") ? 'NoInfo' : (i < value ? 'Artist' : 'Empty'))
                .map((kind) => <p className={'block' + kind}></p>)
            }
        </div>
    )
}
