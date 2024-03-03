import Button from "./Button";
import EventNavLinks from "./EventNavLinks";

function Event({ title, description, imgDesktop, imgMobile }) {
  return (
    <section className="family-gathering-section">
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
    </section>
  );
}

export default Event;