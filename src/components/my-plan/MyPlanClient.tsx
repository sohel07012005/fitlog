"use client";

import { useContext, useMemo, useState } from "react";
import Link from "next/link";
import { LuChevronDown } from "react-icons/lu";

import { WorkoutContext } from "@/context/WorkoutContext";
import Workout from "@/types/workoutType";

import PlanStats from "./PlanStats";
import WorkoutCard from "./WorkoutCard";
import { toast } from "react-toastify";

const MyPlanClient = () => {
  const { plan, savedWorkouts, setPlan, setSavedWorkouts } = useContext(
    WorkoutContext,
  ) as {
    plan: Workout[];
    savedWorkouts: Workout[];
    setPlan: React.Dispatch<React.SetStateAction<Workout[]>>;
    setSavedWorkouts: React.Dispatch<React.SetStateAction<Workout[]>>;
  };

  const [selectedSection, setSelectedSection] = useState<"plan" | "saved">(
    "plan",
  );

  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  const [completedWorkouts, setCompletedWorkouts] = useState<number[]>([]);

  const selectedWorkouts =
    selectedSection === "plan" ? plan : savedWorkouts;

  const getNumber = (value: string | number) => {
    return Number.parseFloat(String(value)) || 0;
  };

  const sortedWorkouts = useMemo(() => {
    const workouts = [...selectedWorkouts];

    if (sortBy === "duration") {
      workouts.sort(
        (a, b) => getNumber(b.duration) - getNumber(a.duration),
      );
    }

    if (sortBy === "calories") {
      workouts.sort(
        (a, b) =>
          getNumber(b.caloriesBurned) - getNumber(a.caloriesBurned),
      );
    }

    if (sortBy === "rating") {
      workouts.sort((a, b) => getNumber(b.rating) - getNumber(a.rating));
    }

    return workouts;
  }, [selectedWorkouts, sortBy]);

  const handleRemove = (id: number) => {
    toast.success("Removed successfully");

    if (selectedSection === "plan") {
      setPlan((prev) => prev.filter((workout) => workout.id !== id));
    } else {
      setSavedWorkouts((prev) =>
        prev.filter((workout) => workout.id !== id),
      );
    }

    setCompletedWorkouts((prev) =>
      prev.filter((workoutId) => workoutId !== id),
    );
  };

  const handleMarkAsDone = (id: number) => {
    toast.success("Marked as done");

    setCompletedWorkouts((prev) => {
      if (prev.includes(id)) {
        return prev;
      }

      return [...prev, id];
    });
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          MY PLAN
        </h1>

        <p className="mt-3 max-w-2xl text-base leading-6 text-gray-400 sm:text-lg">
          Manage your workouts for today and keep your favorite exercises saved
          for later.
        </p>
      </div>

      <PlanStats workouts={selectedWorkouts} />

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-fit items-center rounded-lg border border-[#252a33] bg-[#15181f] p-1">
          <button
            type="button"
            onClick={() => setSelectedSection("plan")}
            className={`rounded-md px-4 py-2.5 text-sm font-semibold transition sm:px-5 sm:text-base ${
              selectedSection === "plan"
                ? "bg-[#252a32] text-white"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            type="button"
            onClick={() => setSelectedSection("saved")}
            className={`rounded-md px-4 py-2.5 text-sm font-semibold transition sm:px-5 sm:text-base ${
              selectedSection === "saved"
                ? "bg-[#252a32] text-white"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500 sm:text-base">
            Sort By
          </span>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as "duration" | "calories" | "rating",
                )
              }
              className="appearance-none rounded-lg border border-[#303641] bg-[#15181f] py-2.5 pl-4 pr-10 text-sm font-medium text-gray-200 outline-none transition hover:border-[#4a515d] sm:text-base"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>

            <LuChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>
      </div>

      {selectedWorkouts.length === 0 ? (
        <div className="mt-4 flex min-h-90 flex-col items-center justify-center rounded-xl border border-[#1d222a] bg-[#0f1217] px-6 text-center">
          <h2 className="text-lg font-bold uppercase tracking-wide sm:text-xl">
            Nothing here yet
          </h2>

          <p className="mt-3 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
            {selectedSection === "plan"
              ? "Add workouts to today's plan and they will appear here."
              : "Save workouts for later and they will appear here."}
          </p>

          <Link
            href="/"
            className="mt-6 rounded-full bg-[#c2f800] px-5 py-2.5 text-sm font-bold text-black sm:text-base"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="mt-4 space-y-3">
          {sortedWorkouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
              isCompleted={
                selectedSection === "plan" &&
                completedWorkouts.includes(workout.id)
              }
              isSaved={selectedSection === "saved"}
              onRemove={handleRemove}
              onMarkAsDone={handleMarkAsDone}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPlanClient;