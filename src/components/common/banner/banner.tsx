import { About } from "../about/about";
import { Stickers } from "../stickers/stickers";

export function Banner() {
  return (
    <article className="banner" >
      <div className="banner__wrapper">
        <About></About>
        <Stickers></Stickers>
      </div>
    </article>
  );
}



