function Highlight({ name, description, imgDesktop, imgMobile }) {
  return (
    <div className="highlight">
      <div>
        <img src={imgDesktop} alt={name} />
        <img src="/images/patterns/pattern-divide.svg" alt="divide pattern" />
      </div>
      <div>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Highlight;