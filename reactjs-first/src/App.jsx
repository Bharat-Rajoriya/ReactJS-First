import ('../src/App.css')
import Card from './component/Card'

const App = () => {
  return (
    <>
    <div className="container_hero">
      <Card title="Card Title 1" description="This is the description for card 1." />
      <Card title="Card Title 2" description="This is the description for card 2." />
      <Card title="Card Title 3" description="This is the description for card 3." />
    </div>
      
    </>
  )
}

export default App
