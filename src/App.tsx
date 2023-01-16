/*
  Main Home property consiting mainly the landing page.

*/
import Home from "./pages/Home/Home"
import Auth from "./pages/Auth/Auth";

interface Props {
  prop?: string,
}

function App(props: Props) {

  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
