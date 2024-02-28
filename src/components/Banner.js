import Button from "./Button";

function Banner() {
  const imgDesktop = "/images/homepage/ready-bg-desktop.jpg";
  const imgMobile = "/images/homepage/ready-bg-mobile.jpg";

  return (
    <div>
      <img src={imgDesktop} alt="bowl of food" />
      <h3>Ready to make a reservation?</h3>
      <Button />
    </div>
  );
}

export default Banner;