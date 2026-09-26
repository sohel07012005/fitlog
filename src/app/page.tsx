import Image from "next/image";
import banner from "@/assets/banner.png";
import LibraryCard from "@/components/LibraryCard";
import Workout from "@/types/workoutType";

const getData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Home = async () => {

const data = await getData();


  return (
    <div className="bg-black text-white">
   <div className="container mx-auto my-6 md:my-10 flex flex-col md:flex-row items-center justify-between bg-[#222630] rounded-lg p-6 sm:p-8 md:p-12 lg:p-15 gap-10 md:gap-6 overflow-hidden">
  
  {/* Left Content */}
  <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 w-full md:w-1/2">
    
    <p className="font-bold text-[#C2F800] text-sm sm:text-base">
      WORKOUT LIBRARY
    </p>

    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
      TRAIN WITH INTENT. LOG
      <br className="hidden sm:block" />
      EVERY SET.
    </h1>

    <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
      FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
      into today&apos;s plan, and watch the week&apos;s work add up.
    </p>

    <a
      href="#library"
      className="inline-block w-fit cursor-pointer bg-[#C2F800] text-black font-bold py-3 px-5 rounded-lg text-sm sm:text-base "
    >
      BROWSE WORKOUTS
    </a>
  </div>

  {/* Right Image */}
  <div className="w-full md:w-1/2 flex justify-center md:justify-end">
    <Image
      src={banner}
      alt="banner"
      width={500}
      height={300}
      className="w-full max-w-500 h-auto object-contain"
    />
  </div>
</div>
      <div className="container mx-auto my-15" id="library">
      <h1 className="mx-2 sm:mx-0 text-2xl sm:text-3xl font-bold">THE LIBRARY</h1>
      <p className="text-gray-300 mx-2 sm:mx-0 ">Twelve lifts covering every major muscle group.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      {
        data.map((workout: Workout) => (
          <LibraryCard key={workout.id} workout={workout} />
        ))
      }
      </div>

      </div>
    </div>
  );
};

export default Home;
