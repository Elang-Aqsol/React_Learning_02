export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 21;

  const store =
    hour >= openHour && hour <= closeHour
      ? `We're open from ${openHour}:00 until ${closeHour}:00. Come visit us or Order Online.`
      : `We're happy to welcome you between ${openHour}:00 and ${closeHour}:00`;

  return (
    <footer className="footer">
      <div>
        <h4>{new Date().toLocaleTimeString()}</h4>
      </div>
      <div className="order">
        <p>{store}</p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}
