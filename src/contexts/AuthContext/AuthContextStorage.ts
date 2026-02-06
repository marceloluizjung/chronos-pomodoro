import { authContextInitialState } from "./AuthContextInitialState";

export function authContextStorage() {
    const storageValues = localStorage.getItem("chronos-pomodoro-login");
    return storageValues ? JSON.parse(storageValues) : authContextInitialState;
}