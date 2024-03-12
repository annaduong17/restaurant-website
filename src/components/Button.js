import { NavLink } from 'react-router-dom';

function Button({ children, className, path, type }) {
  if (type === "nav") {
    return (
      <NavLink className={`${className} btn`} to={path}>{children}</NavLink>
    );
  } else if (type === "submit") {
    return (
      <button type="submit" className={`${className} btn`}>{children}</button>
    )
  }
}

export default Button;