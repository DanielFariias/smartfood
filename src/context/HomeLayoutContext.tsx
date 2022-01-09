import React, { createContext, useContext, useReducer } from "react";

interface Action {
  type: HomeLayoutContextActions
  payload: any
}

interface Context {
  state: string
  dispatch: (action: Action) => void
}

const HomeLayoutContext = createContext<Context | undefined>(undefined)

export enum HomeLayoutContextActions {
  HomeLayout,
  LoginLayout,
  DeliveryManLayout
}
const FormReducer = (state: string, action: Action) => {
  switch (action.type) {
    case HomeLayoutContextActions.HomeLayout:
      return "HomeLayout"

    case HomeLayoutContextActions.LoginLayout:
      return "LoginLayout"

    case HomeLayoutContextActions.DeliveryManLayout:
      return "DeliveryManLayout"

    default: {
      return "HomeLayout"

    }
  }
}

export const HomeLayoutProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(FormReducer, 'HomeLayout')
  const value = { state, dispatch }

  return (
    <HomeLayoutContext.Provider value={value}>
      {children}
    </HomeLayoutContext.Provider>
  )
}

export const useHomeLayout = () => {
  const context = useContext(HomeLayoutContext)
  if (context === undefined) {
    throw new Error('useForm necessita ser utilizado dentro de FormProvider.')
  }
  return context
}