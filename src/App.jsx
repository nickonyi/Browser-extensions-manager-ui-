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
    console.log(name);
    console.log(extensions);
    
    setExtensions((prev)=>(
      prev.map(ext=>(
        ext.name === name?{...ext,isActive:!ext.isActive}:ext
      ))
    ))
  }
  return (
    <>
      <Header />
      <ActiveBar filter={filter} setFilter={setFilter} />
      <ManageUI filter={filter} extensions={extensions} onToggle={toggleActiveStatus} />
    </>
  );
}

export default App;
