import { About } from "../about/about";
import { Stickers } from "../stickers/stickers";
// Board компонент отображает отдельный board с issues
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



