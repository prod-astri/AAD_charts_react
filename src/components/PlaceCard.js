import React from 'react'

export default function PlaceCard(props) {
    const { place, name } = props;
    const { city,
        totalNumberOfExhibitions,
        yearsValues,
        AADArtistsTotal,
        yearsExaminedResults,
        yearsWithAADAmount,
        yearsWithDataAmount } = place;

        function makeBlock(kind, i) {
            return <div className={'block ' + kind} key={i}></div>
        }

    function placeBlocks(amount, kind) {
        let list = []
        for (let i = 0; i < amount; i++) {
            list.push(makeBlock(kind, i))
        }
        return <div className='flexing'>{list}</div>
    }

    function placeBlockWithYears(amount, year){
       return amount !== 'x' ? <div className='flexing column yearBox' style={{maxWidth:'4rem', minWidth: '4rem'}}><p>20{year < 10 ? '0'+ year : year}: </p>{placeBlocks(amount, 'peopleBlocks')} </div> : null
    }

    return (
        <div>
            <div className='text-left thirtypercentWidth'>
            <p><b>{name}</b> - {city}</p>
            <p>{totalNumberOfExhibitions} exhibitions in {yearsWithDataAmount} years exhamined</p>
                {placeBlocks(totalNumberOfExhibitions, 'exhibitsBlocks')}
            </div>
                
            <div className='text-left flexing row baseline thirtypercentWidth'>
                {yearsValues.map((e, i) => {
                    return placeBlockWithYears(e, i)
                })}
            </div> 
        </div>
    )
}

function sumMixedValuesArray(arr) {
    return arr.map(e => (typeof e === 'number') ? e : 0).reduce((acc, val) => acc + val)
}