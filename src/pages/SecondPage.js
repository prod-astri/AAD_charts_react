import dataArray from '../assets/AAD_organised'
import GlobalGrid from '../components/GlobalGrid'

export default function SecondPage(props) {
  const { sumMixedValuesArray } = props
  let data = (dataArray()).map(((line, lineIndex) => line.map((entry, index) => lineIndex !== 0 ? (Number(entry) || (entry === '0' ? 0 : entry)) : entry)))
  data.shift()
  data = data.map(line => line.filter((entry, index) => index !== 25));

  let mapped = new Map();

  for (let line of data) {
    const yearsValues = line.filter((el, i) => i > 2 && i < 25);
    const yearsExaminedResults = yearsValues.filter(e => typeof e === 'number')
    mapped.set(line[0], {
      city: line[1],
      totalNumberOfExhibitions: sumMixedValuesArray([line[25], line[26], line[27]]),
      yearsValues,
      AADArtistsTotal: sumMixedValuesArray(yearsValues),
      yearsExaminedResults,
      yearsWithAADAmount: yearsValues.filter(val => val > 0).length,
      yearsWithDataAmount: yearsExaminedResults.length
    })
  }

  let infoArr = [...mapped]


  return (
    <div className='container'>

      <h3>
        Year on Year AAD presence
      </h3>
  
      
        <GlobalGrid places={infoArr} />
      
      {/* {infoArr.map((place, i) => {
        return <p key={i}>{place[0]}</p>
      })} */}
    </div>
  )
}
