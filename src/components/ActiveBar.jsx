import React from 'react';

function ActiveBar() {
  return (
    <div className="active-bar-container">
      <div className="active-bar-text">
        <p className="active-bar-text-title">Extensions List</p>
      </div>
      <div className="active-bar-buttons">
        <button className="active-bar-button active">All</button>
        <button className="active-bar-button">Active</button>
        <button className="active-bar-button">Inactive</button>
      </div>
    </div>
  );
}

export default ActiveBar;
