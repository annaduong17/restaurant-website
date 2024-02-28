function Highlight({ name, description, imgDesktop, imgMobile }) {
  return (
    <div>
      <img src={imgDesktop} alt={name} />
      <img src="/images/patterns/pattern-divide.svg" alt="divide pattern" />
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Highlight;