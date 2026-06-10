import { createContext, useReducer } from 'react'

export const AppContext = createContext();

const initialState = {
  categoryName: "Beef",
  meals: [],
  selectedMeal: null,
};

function appReducer(state, action){
  switch(action.type){
    case "SET_CATEGORY":
      return {
        ...state,
        categoryName: action.payload
      };
    case "SET_MEALS":
      return {
        ...state,
        meals: action.payload,
      };
    case "SELECT_MEAL":
      return {
        ...state,
        selectedMeal: action.payload,
      };
    case 'RESET_FILTERS':
      return initialState;

    default:
      return state;
  }
}


export default function AppProvider({children}) {
  const [state, dispatch] = useReducer(
    appReducer,
    initialState
  );

  return (
    <AppContext.Provider value={{ state, dispatch, }}>
      {children}
    </AppContext.Provider>
  )
}