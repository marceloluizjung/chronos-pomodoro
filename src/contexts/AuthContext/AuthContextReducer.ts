import type { AuthContextActionModel } from "./AuthContextActionModel";
import type { AuthContextModel } from "./AuthContextModel";

export function authContextReducer(prevState: AuthContextModel, action: AuthContextActionModel) {
    return { ...prevState };
}