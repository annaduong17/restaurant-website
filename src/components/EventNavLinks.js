import { NavLink } from 'react-router-dom';

function EventNavLinks({ activeEvent, toggleActiveEvent }) {
  return (
    <div className='event-navlinks'>
      <div>
        {activeEvent === "FAMILY GATHERING" && <span className='first'></span>}
        <NavLink onClick={toggleActiveEvent} className={`link ${activeEvent === "FAMILY GATHERING" ? "eventActive" : ""}`}>FAMILY GATHERING</NavLink>
      </div>
      <div>
      {activeEvent === "SPECIAL EVENTS" && <span className='second'></span>}
        <NavLink onClick={toggleActiveEvent} className={`link ${activeEvent === "SPECIAL EVENTS" ? "eventActive" : ""}`}>SPECIAL EVENTS</NavLink>
      </div>
      <div> 
      {activeEvent === "SOCIAL EVENTS" && <span className='third'></span>}
        <NavLink onClick={toggleActiveEvent} className={`link ${activeEvent === "SOCIAL EVENTS" ? "eventActive" : ""}`}>SOCIAL EVENTS</NavLink>
      </div>
    </div>
  );
}

export default EventNavLinks;