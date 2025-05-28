import React from 'react';

function ActiveBar({filter,setFilter}) {
  return (
    <div className="active-bar-container">
      <div className="active-bar-text">
        <p className="active-bar-text-title">Extensions List</p>
      </div>
      <div className="active-bar-buttons">
        <button onClick={()=>setFilter('all')} className={`active-bar-button ${filter === 'all'?'active':''} `}>All</button>
        <button onClick={()=>setFilter('active')} className={`active-bar-button ${filter === 'active'?'active':''} `}>Active</button>
        <button onClick={()=>setFilter('inactive')} className={`active-bar-button ${filter === 'inactive'?'active':''} `}>Inactive</button>
      </div>
    </div>
  );
}

export default ActiveBar;
