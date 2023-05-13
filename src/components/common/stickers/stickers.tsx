import { Title } from "../title/title";
import a from "./img/1.png";
import b from "./img/2.png";
import c from "./img/3.png";
import d from "./img/4.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


// Board компонент отображает отдельный board с issues
export function Stickers() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <article className="stickers" >
      <Title title="Stickers" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur delectus odit ab facere culpa.  Voluptas eos fugit vitae ut iure?"/>
      <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme stickers__gallery">
        <img src={a} alt="ok"></img>
        <img src={b} alt="ok"></img>
        <img src={c} alt="ok"></img>
        <img src={d} alt="ok"></img>
      </Carousel>
    </article>
  );
}



