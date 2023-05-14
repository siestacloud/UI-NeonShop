import { useAppState } from "../../../hooks/appHook";


export function Nav() {
  let { AppState,Show } = useAppState() 


  return (
    <article className="nav" >
      {AppState.btnList.map((btn, i) =>
        <button
          key={i}
          onClick={() => Show(i)}
          className={`nav__btn ${btn.style}`}>
          <span className={`nav__txt ${btn.enable ? 'active' : ''}`}>Let's connect</span>
        </button>
      )}
    </article>
  );
}



