import { NavLink } from 'react-router-dom';

function Button({ children, className, path }) {
  return (
    <NavLink className={`${className} btn`} to={path}>{children}</NavLink>
  );
}

export default Button;