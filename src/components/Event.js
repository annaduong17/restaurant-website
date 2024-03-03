import Button from "./Button";
import EventNavLinks from "./EventNavLinks";

function Event({ title, description, imgDesktop, imgMobile }) {
  return (
    <div className="event">
      <div className="pattern">
        <img src="/images/patterns/pattern-curve-top-right.svg" alt="curve pattern" />
        <img src="/images/patterns/pattern-lines.svg" alt="lines pattern" />
      </div>

      <section>
        <div>
          <img src={imgDesktop} alt={title} />
        </div>
        <div className="content">
          <h2>{title}</h2>
          <p>{description}</p>
          <Button />
          <EventNavLinks />
        </div>
      </section>
    </div>
  );
}

export default Event;