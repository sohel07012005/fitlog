"use client";
import Workout from "@/types/workoutType";
import { createContext, useState } from "react";


export const WorkoutContext = createContext({})

const WorkoutContextProvider = ({ children }: { children: React.ReactNode }) => {

 const [plan, setPlan] = useState<Workout[]>([]);
  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);

    return (
        <WorkoutContext.Provider value={{ plan, setPlan, savedWorkouts, setSavedWorkouts }}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutContextProvider;