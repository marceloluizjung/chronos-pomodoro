import { useReducer, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { authContextInitialState } from "./AuthContextInitialState";
import { authContextReducer } from "./AuthContextReducer";
import { authContextStorage } from "./AuthContextStorage";

type AuthContextProviderProps = {
    children: ReactNode
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [state, dispatch] = useReducer(authContextReducer, authContextInitialState, authContextStorage);

    return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
}