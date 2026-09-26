import Workout from "@/types/workoutType";

const PlanStats = ({ workouts }: { workouts: Workout[] }) => {
  const getDurationNumber = (duration: string | number) => {
    return Number.parseFloat(String(duration)) || 0;
  };

  const totalExercises = workouts.length;

  const totalMinutes = workouts.reduce(
    (total, workout) => total + getDurationNumber(workout.duration),
    0,
  );

  const totalCalories = workouts.reduce(
    (total, workout) => total + Number(workout.caloriesBurned || 0),
    0,
  );

  return (
    <div className="mt-7 rounded-xl border border-[#252a33] bg-[#15181f] px-5 py-5 sm:px-7">
      <div className="grid grid-cols-3 divide-x divide-[#292e36]">
        <div className="pr-4 sm:pr-6">
          <p className="text-sm font-medium text-gray-500 sm:text-base">
            Exercises
          </p>

          <p className="mt-1 text-2xl font-bold text-[#c2f800] sm:text-3xl">
            {totalExercises}
          </p>
        </div>

        <div className="px-4 sm:px-6">
          <p className="text-sm font-medium text-gray-500 sm:text-base">
            Minutes
          </p>

          <p className="mt-1 text-2xl font-bold text-white sm:text-3xl">
            {totalMinutes}
          </p>
        </div>

        <div className="pl-4 sm:pl-6">
          <p className="text-sm font-medium text-gray-500 sm:text-base">
            Calories
          </p>

          <p className="mt-1 text-2xl font-bold text-white sm:text-3xl">
            {totalCalories}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanStats;
