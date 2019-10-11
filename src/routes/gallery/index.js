import { Link } from "wouter-preact";
import style from "./style";

const Gallery = () => (
  <div class={style.gallery}>
    <h1>Gallery</h1>
    <Link href="/">
      <a className="link">Home</a>
    </Link>
  </div>
);

export default Gallery;
