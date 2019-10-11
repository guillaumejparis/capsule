import { Link } from "wouter-preact";
import style from "./style";

const Home = () => (
  <div className={style.home}>
    <h1>Capsule</h1>
    <Link href="/gallery">
      <a className="link">Gallery</a>
    </Link>
  </div>
);

export default Home;
