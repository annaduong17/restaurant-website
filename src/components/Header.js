import DineLogo from './DineLogo';
import Button from './Button';

function Header() {
  return (
    <div className='header'>
      <DineLogo />
      <h1>Exquisite dining since 1989</h1>
      <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
      <Button type="nav" path="/reservations" className="booking-btn">BOOK A TABLE</Button>
    </div>
  );
}

export default Header;