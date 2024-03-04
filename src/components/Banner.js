import Button from "./Button";

function Banner() {
  const imgDesktop = "/images/homepage/ready-bg-desktop.jpg";
  const imgTablet = "/images/homepage/ready-bg-tablet.jpg";
  const imgMobile = "/images/homepage/ready-bg-mobile.jpg";

  return (
    <div className="banner">
      <img src={imgDesktop} alt="bowl of food" />
      <h3>Ready to make a reservation?</h3>
      <Button path="/reservations" className="booking-btn">BOOK A TABLE</Button>
    </div>
  );
}

export default Banner;