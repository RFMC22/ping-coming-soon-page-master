import Brands from "./components/Brands"
import Notify from "./components/Notify"
import data from './data/data'

const App = () => {
  return (
    <div className="container w-full m-auto">
      <Notify 
        title={data.title}
        title2={data.title2}
        subtitle={data.subtitle}
        button={data.buttonValue}
        placeholder={data.placeholder}
      />
      <Brands copyright={data.copyright} />
    </div>
  )
}

export default App