import MyPlanClient from "@/components/my-plan/MyPlanClient";


const MyPlanPage = () => {
  return (
    <main className="min-h-screen bg-black px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="container mx-auto">
        <MyPlanClient />
      </div>
    </main>
  );
};

export default MyPlanPage;