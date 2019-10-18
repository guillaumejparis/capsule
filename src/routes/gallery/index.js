import { h } from "preact";
import { Link } from "wouter-preact";
import capsule from "assets/images/capsule.png";
import "./style";

const Gallery = () => (
  <div className="gallery">
    <h1>Gallery</h1>
    <Link href="/">
      <a className="link">Home</a>
    </Link>
    <img className="image" src={capsule} alt="Capsule" />
  </div>
);

export default Gallery;
