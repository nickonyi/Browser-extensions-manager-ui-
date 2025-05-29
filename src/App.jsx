import { useState,useEffect } from 'react';
import ActiveBar from './components/ActiveBar';
import Header from './components/Header';
import ManageUI from './components/ManageUI';
import './styles/App.scss';
import { data } from './data';

function App() {
  const [filter,setFilter] = useState('all');
  const [extensions,setExtensions] = useState(data);
  const [darkMode,setDarkMode] = useState(false);

  useEffect(()=>{
    if(darkMode){
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  },[darkMode])

  const toggleActiveStatus = (name)=> {
    setExtensions((prev)=>(
      prev.map(ext=>(
        ext.name === name?{...ext,isActive:!ext.isActive}:ext
      ))
    ))
  }

  const handleDelete = (name)=>{
    setExtensions((prev)=> prev.filter(ext=>(ext.name !== name)));
  }
  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <ActiveBar filter={filter} setFilter={setFilter}  />
      <ManageUI filter={filter} extensions={extensions} onToggle={toggleActiveStatus} onDelete={handleDelete} />
    </>
  );
}

export default App;
