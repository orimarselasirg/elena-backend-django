import { Routes, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
import 'bulma/css/bulma.min.css'
import {Login, Home, TaskCreator, UserCreator} from '../src/pages'
import {TaskDetails} from './pages/index'



function App() {
  const user = useSelector(state => state.data.user)
  return (
    <Routes>
        <Route path="/createuser" element={<UserCreator/>} />
        <Route path="/home" element={user.length>0 ? <Home/> : <Login/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/taskcreator" element={<TaskCreator/>} exact/>
        <Route path="/taskdetail/:id" element={<TaskDetails/>} exact/>
    </Routes>
  )
}

export default App;
