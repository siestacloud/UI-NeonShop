import { createContext, useState, useContext } from "react";
import { AppState as AS, DEF_APP_STATE } from '../models/stateApp';


export interface AppContext {
  AppState: AS; //* state приложения, содержит данные о boards, issues
}

const AppStateContext = createContext<AppContext>(
  { AppState: DEF_APP_STATE }
);

export const useAppState = () => useContext(AppStateContext);
type Props = { children: JSX.Element }

export const AppStateContextProvider = ({ children }: Props) => {


  const [AppState, setAppCustomState] = useState(DEF_APP_STATE)


  return (
    <AppStateContext.Provider value={{ AppState }} >
      {children}
    </AppStateContext.Provider>
  )
}