import { authContextInitialState } from "./AuthContextInitialState";

export function authContextStorage() {
    const storageValues = localStorage.getItem("chronos-pomodoro-login");
    try {
        return storageValues ? JSON.parse(storageValues) : authContextInitialState;
    }
    catch {
        return authContextInitialState;
    }
}