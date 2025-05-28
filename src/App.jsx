import { useState } from 'react';
import ActiveBar from './components/ActiveBar';
import Header from './components/Header';
import ManageUI from './components/ManageUI';
import './styles/App.scss';

function App() {
  const [filter,setFilter] = useState('all');
  return (
    <>
      <Header />
      <ActiveBar filter={filter} setFilter={setFilter} />
      <ManageUI filter={filter} />
    </>
  );
}

export default App;
