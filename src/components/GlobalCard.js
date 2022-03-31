import React from 'react'

export default function GlobalCard(props) {
  const { places } = props

  function makeWeightedBlock(val, i) {
    function evaluateBlockColor(val) {
      if (typeof val === 'number') {
        return val === 0 ? 'rgb(100, 0, 0)' : `rgb(0, ${val * 10}, 0)`
      }
      return 'rgb(100, 100, 100)'
    }
    return <div className={'block'} key={i} style={{ backgroundColor: (evaluateBlockColor(val)) }}></div>

  }
  /// take all the years values and the names for horiz - 
  // put years on top
  function placesLines() {
    return (places.sort((a, b) => {return a[1].yearsWithAADAmount - b[1].yearsWithAADAmount}).sort((a, b) => {return a[1].yearsWithDataAmount - b[1].yearsWithDataAmount}).map((placeArr, i) => {
      const name = placeArr[0]
      const place = placeArr[1]
      return (
        <div key={name + i} className='flexing globalLine'>
          <p className='text-left placesNames'>{name}</p>
          <div className='flexing'>

            {place.yearsValues.map((val, i) => {
              return makeWeightedBlock(val, i)
            })}
          </div>
        </div>)
    }))

  }
  return (
    <div><p>GlobalCard</p>{placesLines()}</div>
  )
}
