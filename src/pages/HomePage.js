import dataArray from '../assets/AAD_organised'
import PlaceCard from '../components/PlaceCard';
import GlobalCard from './GlobalCard';

export default function HomePage() {
  // console.table(dataArray())
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
      yearsWithDataAmount:  yearsExaminedResults.length
    })
  }

  let infoArr = [...mapped]

  function makeGlobalCard(){
    return <GlobalCard places={mapped}/>
  }

function makePlacesCards() {
  return infoArr.map((place, n) => {
   
    return <PlaceCard place={place[1]} name={place[0]} key={place[0]}/>
  })

}
  return (
    <div className="home">{makePlacesCards()}</div>
    
  )
}


function sumMixedValuesArray(arr) {
  return arr.map(e => (typeof e === 'number') ? e : 0).reduce((acc, val) => acc + val)
}