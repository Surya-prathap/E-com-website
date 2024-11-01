import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="home-logo-container">
        <img
          className="home-logo"
          src="../src/products/home-logo.png"
          alt="image"
        ></img>
      </div>
    </div>
  );
}
