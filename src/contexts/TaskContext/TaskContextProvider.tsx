import { useEffect, useReducer, useRef } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { loadBeep } from '../../utils/loadBeep';
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { initialTaskState } from "./InitialTaskState";
import { TaskActionTypes } from "./taskActions";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";

type TaskContextProviderProps = {
    children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
        const storageState = localStorage.getItem('state') || null;
        if (storageState === null) return initialTaskState;
        const parsedStorageState = JSON.parse(storageState) as TaskStateModel;
        return {
            ...parsedStorageState,
            activeTask: null,
            secondsRemaining: 0,
            formattedSecondsRemaining: '00:00'
        };
    });
    const worker = TimerWorkerManager.getInstance();
    const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);

    worker.onmessage(e => {
        const countDownSeconds = e.data;

        if (countDownSeconds <= 0) {
            if (playBeepRef.current) {
                playBeepRef.current();
                playBeepRef.current = null;
            }
            dispatch({
                type: TaskActionTypes.COMPLETE_TASK
            });
            worker.terminate();
        } else {
            dispatch({
                type: TaskActionTypes.COUNT_DOWN,
                payload: { secondsRemaining: countDownSeconds },
            });
        }
    });

    useEffect(() => {
        console.log(state);
        localStorage.setItem('state', JSON.stringify(state));
        if (!state.activeTask) {
            console.log('Worker terminado por falta de activeTask');
            worker.terminate();
        }

        document.title = `${state.formattedSecondsRemaining} - Chronos Pomodoro`;
        worker.postMessage(state);
    }, [worker, state]);

    useEffect(() => {
        if (state.activeTask && playBeepRef.current === null) {
            playBeepRef.current = loadBeep();
        } else {
            playBeepRef.current = null;
        }
    }, [state.activeTask]);

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
}