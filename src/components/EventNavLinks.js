import { NavLink } from 'react-router-dom';

function EventNavLinks() {
  return (
    <div className='event-navlinks'>
      <div>
        <span></span>
        <NavLink className="link">FAMILY GATHERING</NavLink>
      </div>
      <div>
      <span></span>
        <NavLink className="link">SPECIAL EVENTS</NavLink>
      </div>
      <div> 
      <span></span>
        <NavLink className="link">SOCIAL EVENTS</NavLink>
      </div>
    </div>
  );
}

export default EventNavLinks;