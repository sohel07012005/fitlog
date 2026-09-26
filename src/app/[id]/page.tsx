import PlanDynamic from "@/components/PlanDynamic";
import Workout from "@/types/workoutType";
import Image from "next/image";
import { notFound } from "next/navigation";


const getWorkoutById = async (id: string): Promise<Workout | null> => {
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
};

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const workout = await getWorkoutById(id);

  if (!workout) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#0d0f13] text-white">
      <div className="mx-auto max-w-350 px-4 py-6 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <div className="relative h-125 overflow-hidden rounded-2xl sm:h-150 lg:h-201">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col">
            <div>
              <h1 className="text-4xl font-extrabold uppercase leading-tight tracking-tight sm:text-5xl">
                {workout.name}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-7 text-[#9da3af] sm:text-lg">
                {workout.description}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#c2ff00] px-4 py-1.5 text-sm font-semibold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-[#292e38] bg-[#151921]">
              <div className="flex items-center justify-between border-b border-[#292e38] px-6 py-2">
                <span className="text-sm font-bold uppercase tracking-wide text-[#9da3af]">
                  Equipment
                </span>
                <span className="text-sm sm:text-base">
                  {workout.equipment}
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-[#292e38] px-6 py-2">
                <span className="text-sm font-bold uppercase tracking-wide text-[#9da3af]">
                  Difficulty
                </span>
                <span className="text-sm sm:text-base">
                  {workout.difficulty}
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-[#292e38] px-6 py-2">
                <span className="text-sm font-bold uppercase tracking-wide text-[#9da3af]">
                  Sets
                </span>
                <span>{workout.sets}</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#292e38] px-6 py-2">
                <span className="text-sm font-bold uppercase tracking-wide text-[#9da3af]">
                  Reps
                </span>
                <span>{workout.reps}</span>
              </div>

              <div className="flex items-center justify-between border-b border-[#292e38] px-6 py-2">
                <span className="text-sm font-bold uppercase tracking-wide text-[#9da3af]">
                  Duration
                </span>

                <span>{workout.duration} min</span>
              </div>

              <div className="flex items-center justify-between border-b border-[#292e38] px-6 py-2">
                <span className="text-sm font-bold uppercase tracking-wide text-[#9da3af]">
                  Calories
                </span>

                <span>{workout.caloriesBurned} kcal</span>
              </div>

              <div className="flex items-center justify-between px-6 py-2">
                <span className="text-sm font-bold uppercase tracking-wide text-[#9da3af]">
                  Rating
                </span>

                <span>{workout.rating}</span>
              </div>
            </div>

            <section className="mt-9">
              <h2 className="text-xl font-bold uppercase">Instructions</h2>

              <ol className="mt-5 space-y-4">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-4 text-[15px] leading-6 text-[#c4c8d0]"
                  >
                    <span className="shrink-0 text-[#8f949e]">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </section>
                     <PlanDynamic workout={workout} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
