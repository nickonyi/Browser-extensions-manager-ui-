import { useState } from 'react';
import ActiveBar from './components/ActiveBar';
import Header from './components/Header';
import ManageUI from './components/ManageUI';
import './styles/App.scss';
import { data } from './data';

function App() {
  const [filter,setFilter] = useState('all');
  const [extensions,setExtensions] = useState(data);

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
      <Header />
      <ActiveBar filter={filter} setFilter={setFilter} />
      <ManageUI filter={filter} extensions={extensions} onToggle={toggleActiveStatus} onDelete={handleDelete} />
    </>
  );
}

export default App;
