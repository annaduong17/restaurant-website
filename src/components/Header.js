import Button from './Button';

function Header() {
  return (
    <div className='header'>
      <img src="/images/homepage/hero-bg-desktop.jpg" alt="" />
      <h1>Exquisite dining since 1989</h1>
      <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
      <Button />
    </div>
  );
}

export default Header;