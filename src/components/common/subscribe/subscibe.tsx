import { FormUI } from "../formUI/form";
import { InputUI } from "../inputUI/input";
import { Title } from "../title/title";
import a from "./img/1.svg";


export function Subscribe() {

  return (
    <article className="subscribe" >
      <div className="subscribe__wrapper">
        <h2 className="subscribe__headline">Subscribe to our Newsletter & Never miss latest updates</h2>
        <InputUI></InputUI>
      </div >
    </article>
  );
}



