import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"

const App = () => {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <Home/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App