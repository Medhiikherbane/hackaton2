import GifIntro from './components/GifIntro'
import Navbar from './components/Navbar'
import './App.css'

function App() {

  return (
    <div id="app-body">
      <div className="app-intro">
        <GifIntro />
        <Navbar />
      </div>
    </div>
  )
}

export default App;
