function ExtensionsCard({
  img,
  name,
  description,
  isActive = 'false',
  onToggle,
  onDelete,
}) {
  return (
    <div className="extension-card-container">
      <div className="extension-card-upperdec">
        <div className="card-img">
          <img className="card-img-icon" src={img} alt="Extension Icon" />
        </div>
        <div className="card-text">
          <p className="card-text-title">{name}</p>
          <p className="card-text-description">{description}</p>
        </div>
      </div>
      <div className="extension-card-lowerdec">
        <button className="extension-remove" onClick={onDelete}>
          Remove
        </button>
        <div className="toggle-btn">
          <label className="switch">
            <input type="checkbox" checked={isActive} onChange={onToggle} />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default ExtensionsCard;
