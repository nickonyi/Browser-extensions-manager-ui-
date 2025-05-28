import React from 'react';
import ExtensionsCard from './ExtensionsCard';


function ManageUI({filter,extensions,onToggle}) {
  const filteredData = extensions.filter((d)=>{
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
              <ExtensionsCard img={d.logo} name={d.name} description={d.description} isActive={d.isActive} onToggle={()=>onToggle(d.name)}/>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ManageUI;
