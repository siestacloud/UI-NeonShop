import { FormUI } from "../formUI/form";
import { Title } from "../title/title";
import a from "./img/1.svg";


export function Contact() {

  return (
    <article className="contact" >
      <div className="contact__wrapper">
        <Title title="Get in touch" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur delectus odit ab facere culpa.  Voluptas eos fugit vitae ut iure?" />

        <div className="contact__row">
        <img src={a} className="about__img"></img>
          <FormUI></FormUI>
        </div>

      </div >
    </article>
  );
}



