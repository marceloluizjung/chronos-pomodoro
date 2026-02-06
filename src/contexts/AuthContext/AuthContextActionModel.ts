import type { AuthContextActionType } from "./AuthContextActionType";
import type { AuthContextModel } from "./AuthContextModel";

export type AuthContextActionModel = {
    action: AuthContextActionType,
    payload: AuthContextModel
};