import type { TaskModel } from "./TaskModel";

export type TaskStateModel = {
    tasks: TaskModel[]; //histórico, mainform
    secondsRemaining: number; //home, countdown, histórico, mainform, button
    formattedSecondsRemaining: string; //titulo, countdown
    activeTask: TaskModel | null; //countdown, histórico, mainform, button
    currentCycle: number; //home
    config: {
        workTime: number; //mainform
        shortBreakTime: number; //mainform
        longBreakTime: number; //mainform
    };
};