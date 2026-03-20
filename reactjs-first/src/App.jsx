import ('../src/App.css')
import Card from './component/Card'

const cardData = JSON.parse[
  {
    "name": "Card 1",
    "description": "This is the description for Card 1."
  },
  {
    "name": "Card 2",
    "description": "This is the description for Card 2."
  },
  {
    "name": "Card 3",
    "description": "This is the description for Card 3."
  }
]

const App = () => {
  return (
    <>
    <div className="container_hero">
      <Card title={cardData[0].name} description={cardData[0].description} />
      <Card title={cardData[1].name} description={cardData[1].description} />
      <Card title={cardData[2].name} description={cardData[2].description} />
    </div>
      
    </>
  )
}

export default App
