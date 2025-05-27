function ExtensionsCard() {
  return (
    <div className="extension-card-container">
      <div className="extension-card-upperdec">
        <div className="card-img">
          <img
            className="card-img-icon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdCB-fHW1cnmXhhvdmoQRjejNNrwihT2CWk1JAL7I9BmJ4D5dF8aqZgBJONeLmrPjJac&usqp=CAU"
            alt="Extension Icon"
          />
        </div>
        <div className="card-text">
          <p className="card-text-title">Extension Name</p>
          <p className="card-text-description">
            This is a brief description of the extension. It provides an
            overview of its features and functionalities.
          </p>
        </div>
      </div>
      <div className="extension-card-lowerdec">
        <button className="extension-remove">Remove</button>
        <div className="toggle-btn">
          <div className="toggle-ball">toggle ball</div>
        </div>
      </div>
    </div>
  );
}

export default ExtensionsCard;
