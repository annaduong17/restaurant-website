import { NavLink } from 'react-router-dom';

function EventNavLinks({ activeEvent, toggleActiveEvent }) {
  return (
    <div className='event-navlinks'>
      <div>
        <span></span>
        <NavLink onClick={toggleActiveEvent} className={`link ${activeEvent === "FAMILY GATHERING" ? "eventActive" : ""}`}>FAMILY GATHERING</NavLink>
      </div>
      <div>
      <span></span>
        <NavLink onClick={toggleActiveEvent} className={`link ${activeEvent === "SPECIAL EVENTS" ? "eventActive" : ""}`}>SPECIAL EVENTS</NavLink>
      </div>
      <div> 
      <span></span>
        <NavLink onClick={toggleActiveEvent} className={`link ${activeEvent === "SOCIAL EVENTS" ? "eventActive" : ""}`}>SOCIAL EVENTS</NavLink>
      </div>
    </div>
  );
}

export default EventNavLinks;