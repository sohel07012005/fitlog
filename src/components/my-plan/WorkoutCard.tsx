import Image from "next/image";
import Link from "next/link";
import { LuX } from "react-icons/lu";

import Workout from "@/types/workoutType";
import { FiClock, FiStar } from "react-icons/fi";
import { GiWeightLiftingUp } from "react-icons/gi";

interface WorkoutCardProps {
  workout: Workout;
  isCompleted: boolean;
  isSaved: boolean;
  onRemove: (id: number) => void;
  onMarkAsDone: (id: number) => void;
}

const WorkoutCard = ({
  workout,
  isCompleted,
  isSaved,
  onRemove,
  onMarkAsDone,
}: WorkoutCardProps) => {
  return (
    <div className="group flex items-center gap-3 rounded-xl border border-[#292e36] bg-[#15181f] p-3 transition hover:border-[#414852] sm:gap-5 sm:p-4">
      <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-28">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 80px, 112px"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3
          className={`truncate text-base font-bold uppercase sm:text-lg ${
            isCompleted ? "text-gray-500" : "text-white"
          }`}
        >
          {workout.name}
        </h3>

        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-gray-500 sm:text-sm">
          <span>{workout.equipment} sets</span>
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-5 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-[#c2f800]">
              <FiClock />
            </span>
            <span>{workout.duration} min</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#c2f800]">
              <GiWeightLiftingUp />
            </span>
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#c2f800]">
              <FiStar />
            </span>
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-4">
        <Link
          href={`/${workout.id}`}
          className="hidden rounded-lg border border-[#343a44] px-3 py-2 text-sm font-medium text-gray-300 transition hover:bg-[#20242b] hover:text-white sm:block"
        >
          View details
        </Link>

        {!isSaved && (
          <button
            type="button"
            onClick={() => onMarkAsDone(workout.id)}
            disabled={isCompleted}
            className={`rounded-lg px-3 py-2 text-xs font-semibold sm:text-sm ${
              isCompleted
                ? "cursor-not-allowed bg-[#3a3f47] text-gray-400"
                : "cursor-pointer bg-[#c2f800] text-black transition hover:bg-[#b5ed00]"
            }`}
          >
            {isCompleted ? "Done" : "Mark as done"}
          </button>
        )}

        <button
          type="button"
          onClick={() => onRemove(workout.id)}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-gray-500 transition hover:bg-[#252930] hover:text-white"
          title="Remove workout"
          aria-label={`Remove ${workout.name}`}
        >
          <LuX size={24} />
        </button>
      </div>
    </div>
  );
};

export default WorkoutCard;