export function authContextStorage() {
    const storageValues = localStorage.getItem("chronos-pomodoro-login");
    return JSON.parse(storageValues || "");
}