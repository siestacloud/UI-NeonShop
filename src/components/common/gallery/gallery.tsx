import { useAppState } from "../../../hooks/appHook";
import { Collage, Collage2, Collage3 } from "../collage/collage";
import { Nav } from "../nav/nav";
import { Title } from "../title/title";
import { useState } from "react";





export function Gallery() {

  let { AppState } = useAppState()

  return (
    <article className="gallery" >
      <div className="gallery__wrapper">
        <Title title="Gallery" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur delectus odit ab facere culpa.  Voluptas eos fugit vitae ut iure?" />
        <Nav />

        <div className="gallery__row">
          <Collage show={AppState.btnList[0].enable} />
          <Collage2 show={AppState.btnList[1].enable} />
          <Collage3 show={AppState.btnList[2].enable} />
        </div>

        {/* <h4 className={`${AppState.btnList[1].enable? 'active': ''}`}>HI</h4> */}
        {/* <h4 className={`${AppState.btnList[2].enable? 'active': ''}`}>HdddI</h4> */}

      </div>
    </article>
  );
}



