import Button from "./Button";
import EventNavLinks from "./EventNavLinks";

function Event({ title, description, imgDesktop, imgMobile }) {
  return (
    <div>
      <div>
        <img src="/images/patterns/pattern-curve-top-right.svg" alt="curve pattern" />
        <img src="/images/patterns/pattern-lines.svg" alt="lines pattern" />
      </div>
      <div>
        <img src={imgDesktop} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <Button />
        <EventNavLinks />
      </div>
    </div>
  );
}

export default Event;