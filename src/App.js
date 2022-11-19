import { Routes, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
import 'bulma/css/bulma.min.css'
import {Login, Home, TaskCreator, UserCreator} from '../src/pages'
import {TaskDetails} from './pages/index'



function App() {
  const data = useSelector(state => state.data)
  const token =data.user.token
  return (
    <Routes>
        <Route path="/createuser" element={<UserCreator/>} />
        <Route path="/home" element={token ? <Home/> : <Login/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/taskcreator" element={<TaskCreator/>} exact/>
        <Route path="/taskdetail/:id" element={<TaskDetails/>} exact/>
    </Routes>
  )
}

export default App;
