import one from "./img/1.png";
import two from "./img/2.png";
import three from "./img/3.png";


interface props {
  show: boolean
}
export function Collage({ show }: props) {

  return (
    <article className={`collage ${show ? 'active' : ''}  `} >
      <div className="collage__item" style={{ backgroundImage: `url(${one})` }}  >
        <div className="collage__content">
          <h4>Business Startup</h4>
          <span>Design & Development</span>
        </div>
      </div>
      <div className="collage__item" style={{ backgroundImage: `url(${two})` }}  >
        <div className="collage__content">
          <h4>Business Startup</h4>
          <span>Design & Development</span>
        </div>
      </div>
      <div className="collage__item" style={{ backgroundImage: `url(${three})` }}  >
        <div className="collage__content">
          <h4>Business Startup</h4>
          <span>Design & Development</span>
        </div>
      </div>
      <div className="collage__item" style={{ backgroundImage: `url(${two})` }}  >
        <div className="collage__content">
          <h4>Business Startup</h4>
          <span>Design & Development</span>
        </div>
      </div>
      <div className="collage__item" style={{ backgroundImage: `url(${one})` }}  >
        <div className="collage__content">
          <h4>Business Startup</h4>
          <span>Design & Development</span>
        </div>
      </div>
      <div className="collage__item" style={{ backgroundImage: `url(${three})` }}  >
        <div className="collage__content">
          <h4>Business Startup</h4>
          <span>Design & Development</span>
        </div>
      </div>
    </article>
  );
}


export function Collage2({ show }: props) {

  return (
    <article className={`collage ${show ? 'active' : ''}`} >
           <div className="collage__item" style={{ backgroundImage: `url(${two})` }}  >
        <div className="collage__content">
          <h4>Business Startup</h4>
          <span>Design & Development</span>
        </div>
      </div>
      <div className="collage__item" style={{ backgroundImage: `url(${one})` }}  >
        <div className="collage__content">
          <h4>Business Startup</h4>
          <span>Design & Development</span>
        </div>
      </div>
      <div className="collage__item" style={{ backgroundImage: `url(${three})` }}  >
        <div className="collage__content">
          <h4>Business Startup</h4>
          <span>Design & Development</span>
        </div>
      </div>
      <div className="collage__item" style={{ backgroundImage: `url(${two})` }}  >
        <div className="collage__content">
          <h4>Business Startup</h4>
          <span>Design & Development</span>
        </div>
      </div>
      <div className="collage__item" style={{ backgroundImage: `url(${one})` }}  >
        <div className="collage__content">
          <h4>Business Startup</h4>
          <span>Design & Development</span>
        </div>
      </div>
      <div className="collage__item" style={{ backgroundImage: `url(${three})` }}  >
        <div className="collage__content">
          <h4>Business Startup</h4>
          <span>Design & Development</span>
        </div>
      </div>
    </article>
  );
}
export function Collage3({ show }: props) {

  return (
    <article className={`collage ${show ? 'active' : ''}`} >
            <div className="collage__item" style={{ backgroundImage: `url(${three})` }}  >
        <div className="collage__content">
          <h4>Business Startup</h4>
          <span>Design & Development</span>
        </div>
      </div>
      <div className="collage__item" style={{ backgroundImage: `url(${two})` }}  >
        <div className="collage__content">
          <h4>Business Startup</h4>
          <span>Design & Development</span>
        </div>
      </div>
      <div className="collage__item" style={{ backgroundImage: `url(${one})` }}  >
        <div className="collage__content">
          <h4>Business Startup</h4>
          <span>Design & Development</span>
        </div>
      </div>
      <div className="collage__item" style={{ backgroundImage: `url(${one})` }}  >
        <div className="collage__content">
          <h4>Business Startup</h4>
          <span>Design & Development</span>
        </div>
      </div>
      <div className="collage__item" style={{ backgroundImage: `url(${three})` }}  >
        <div className="collage__content">
          <h4>Business Startup</h4>
          <span>Design & Development</span>
        </div>
      </div>
      <div className="collage__item" style={{ backgroundImage: `url(${one})` }}  >
        <div className="collage__content">
          <h4>Business Startup</h4>
          <span>Design & Development</span>
        </div>
      </div>
    </article>
  );
}