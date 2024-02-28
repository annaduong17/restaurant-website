import { NavLink } from 'react-router-dom';

function EventNavLinks() {
  return (
    <div>
      <section>
        <img src="/images/patterns/pattern-divide.svg" alt="divide pattern" />
        <NavLink>FAMILY GATHERING</NavLink>
      </section>
      <section>
        <img src="/images/patterns/pattern-divide.svg" alt="divide pattern" />
        <NavLink>SPECIAL EVENTS</NavLink>
      </section>
      <section> 
        <img src="/images/patterns/pattern-divide.svg" alt="divide pattern" />
        <NavLink>SOCIAL EVENTS</NavLink>
      </section>
    </div>
  );
}

export default EventNavLinks;