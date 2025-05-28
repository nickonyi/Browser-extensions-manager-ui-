import React from 'react';
import ExtensionsCard from './ExtensionsCard';
import { data } from '../data';

function ManageUI({filter}) {
  const filteredData = data.filter((d)=>{
    if(filter ==='active') return d.isActive;
    if (filter === 'inactive') return !d.isActive
      return true;   
  })
  return (
    <div className="extensions-container">
      <ul>
        {
          filteredData.map((d)=>(
            <li key={d.name}>
              <ExtensionsCard img={d.logo} name={d.name} description={d.description}/>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ManageUI;
