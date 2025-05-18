"use client";

import { useUser } from "@clerk/nextjs";

const DashboardPage = () => {
  const { user } = useUser();

  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4">
      <div>
        <div className="text-2xl font-bold">Hello {user?.username}</div>
        <p className="mt-2 text-xl">Let’s make something great today</p>
      </div>
    </main>
  );
};

export default DashboardPage;
