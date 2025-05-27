import React from 'react';
import ExtensionsCard from './ExtensionsCard';
import { data } from '../data';

function ManageUI() {
  return (
    <div className="extensions-container">
      <ul>
        {
          data.map((d)=>(
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
