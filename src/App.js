import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import NavBar from './components/navBar/NavBar';

//pages
import Profile from './pages/profile/Profile'
import Knowledge from './pages/knowledge/Knowledge';
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import About from './pages/about/About';
import TodoList from './pages/projects/todoList/TodoList';
import MiniBlog from './pages/projects/miniblog/MiniBlog';
import Inove from './pages/projects/inove/Inove';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='navBar_pages'>
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/knowledge' element={<Knowledge />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects/listadetarefas' element={<TodoList />} />
          <Route path='/projects/miniblog' element={<MiniBlog />} />
          <Route path='/projects/inove' element={<Inove />} />
        </Routes>
        <NavBar />
        </div>
    
      </BrowserRouter>

    </div>
  );
}
export default App;