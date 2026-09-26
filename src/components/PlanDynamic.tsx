"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import Workout from "@/types/workoutType";
import { Dispatch, SetStateAction, useContext } from "react";
import { LuBookmark, LuCalendarPlus } from "react-icons/lu";
import { toast } from "react-toastify";

const PlanDynamic = ({ workout }: { workout: Workout }) => {
  const { plan, setPlan, savedWorkouts, setSavedWorkouts } = useContext(
    WorkoutContext,
  ) as {
    plan: Workout[];
    setPlan: Dispatch<SetStateAction<Workout[]>>;
    savedWorkouts: Workout[];
    setSavedWorkouts: Dispatch<SetStateAction<Workout[]>>;
  };

  const isAddedToPlan = plan.some((item) => item.id === workout.id);
  const isSavedForLater = savedWorkouts.some((item) => item.id === workout.id);

  const handleAddToPlan = () => {
    setPlan([...plan, workout]);
    toast.success("Added to today's plan");
  };
  const handleSaveForLater = () => {
    setSavedWorkouts([...savedWorkouts, workout]);
    toast.success("Saved for later");
  };

  return (
    <div className="mt-8 flex flex-col gap-3 pb-4 sm:flex-row">
      <button
        onClick={handleAddToPlan}
        disabled={isAddedToPlan}
        type="button"
        className={`flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 font-semibold transition ${
          isAddedToPlan
            ? "cursor-not-allowed bg-[#3a3f47] text-[#9da3af]"
            : "cursor-pointer bg-[#c2f800] text-black hover:bg-[#b5ed00]"
        }`}
      >
        <LuCalendarPlus size={19} />

        {isAddedToPlan ? "Added to today's plan" : "Add to today's plan"}
      </button>

      <button
        onClick={handleSaveForLater}
        disabled={isSavedForLater}
        type="button"
        className={`flex min-h-12 items-center justify-center gap-2 rounded-xl border px-6 font-medium transition ${
          isSavedForLater
            ? "cursor-not-allowed border-[#3a3f47] bg-[#171a20] text-[#777d87]"
            : "cursor-pointer border-[#39404d] text-white hover:bg-[#171a20]"
        }`}
      >
        <LuBookmark size={18} />

        {isSavedForLater ? "Saved for later" : "Save for later"}
      </button>
    </div>
  );
};

export default PlanDynamic;
