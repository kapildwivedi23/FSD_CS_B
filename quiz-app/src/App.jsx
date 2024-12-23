import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home.jsx'
import Counter from './Components/Counter.jsx'
import Quiz from './Components/Quiz.jsx'
const App=()=>{
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/quiz" element={<Quiz/>}></Route>
        <Route path="/logout" element={<h1>Logout Page</h1>}></Route>
        <Route path="/signup" element={<h1>signup Page</h1>}></Route>
        <Route path="/counter" element={<Counter/>}></Route>
        <Route path="*" element={<h1>No Page Available</h1>}></Route>
      </Routes>
      
    </div>
  )
}
export default App