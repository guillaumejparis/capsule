import { h } from "preact";
import { Link } from "wouter-preact";
import "./style";

const Home = () => (
  <div className="home">
    <h1>Capsule</h1>
    <Link href="/gallery">
      <a className="link">Gallery</a>
    </Link>
  </div>
);

export default Home;
