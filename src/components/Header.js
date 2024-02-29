import DineLogo from './DineLogo';
import Button from './Button';

function Header() {
  return (
    <div className='header'>
      <img className='header-hero' src="/images/homepage/hero-bg-desktop.jpg" alt="plate of pasta" />
      <div className='header-content'>
        <DineLogo />
        <h1>Exquisite dining since 1989</h1>
        <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
        <Button />
      </div>
    </div>
  );
}

export default Header;