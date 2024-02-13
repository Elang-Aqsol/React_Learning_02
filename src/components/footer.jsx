export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 21;

  const store =
    hour >= openHour && hour <= closeHour
      ? "Store is open! Welcome!"
      : "Store is closed. Come back during business hours!";

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}.{store}
    </footer>
  );
}
