import { createContext } from "react";
import type { AuthContextActionModel } from "./AuthContextActionModel";
import { authContextInitialState } from "./AuthContextInitialState";
import type { AuthContextModel } from "./AuthContextModel";

type AuthContextProps = {
    state: AuthContextModel,
    dispatch: React.Dispatch<AuthContextActionModel>
}

const authContextInitialValues: AuthContextProps = {
    state: authContextInitialState,
    dispatch: () => { }
}

export const AuthContext = createContext<AuthContextProps>(authContextInitialValues);