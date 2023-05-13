import { Skills } from "../skills/skills";
import ship from "./img/img.svg";
// Board компонент отображает отдельный board с issues
export function Banner() {

  return (
    <article className="banner" >
      <div className="banner__wrapper">

        <div className="banner__about">
          <div className="banner__text">
            <p className="banner__welcome">Welcome to site</p>
            <h1 className="banner__headline">Hi! this is layout template</h1>
            <p className="banner__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, obcaecati aliquid! Quasi, maxime? Vero quis obcaecati aut distinctio iure, totam fuga. Enim inventore officia perspiciatis magni quae quas qui esse voluptate nihil minus iure, harum nisi eius repellendus, corporis aliquid.</p>
            <button className="banner__btn">Let's connect!
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25" fill="currentColor"><path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path></svg>
            </button>
          </div>
          <img src={ship} className="banner__img"></img>
        </div>
        <Skills></Skills>


      </div>
    </article>
  );
}



