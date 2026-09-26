import Workout from "@/types/workoutType";
import Image from "next/image";
import { FiClock, FiStar } from "react-icons/fi";
import { GiWeightLiftingUp } from "react-icons/gi";

const LibraryCard = ({ workout }: { workout: Workout }) => {
  return (
    <div className="mx-2 sm:mx-0 overflow-hidden rounded-2xl border border-[#292d35] bg-[#15181e] text-white transition-all duration-300 hover:border-[#C2F800] hover:shadow-[0_0_20px_rgba(194,248,0,0.15)] cursor-pointer">      <div className="relative h-80 w-full">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <div className="mb-5 flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle, index) => (
            <span
              key={index}
              className="rounded-full bg-[#C2F800] px-4 py-1 text-xs font-bold text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h2 className="text-xl font-bold tracking-wide">{workout.name}</h2>
        <p className="mt-1 text-sm text-gray-400">{workout.equipment}</p>
        <div className="my-4 border-t border-[#292d35]" />
        <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <FiClock />
            <span>{workout.duration} min</span>
          </div>

          <div className="flex items-center gap-2">
            <GiWeightLiftingUp />
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-2">
            <FiStar />
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryCard;
