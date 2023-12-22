import React from "react";
import '../app/globals.css'

export default function Home() {

  return (
    <main className="min-h-screen p-4 sm:p-8 md:p-16 lg:p-24 xl:p-32 bg-gray-100">
      <title>Home</title>
      <section className="mt-8">
        <div className="container mx-auto">
          {/* User Profile Section */}
          <div className="flex items-center justify-center">
            <div className="bg-white rounded-full w-24 h-24 p-4 flex items-center justify-center shadow-lg">
              <img
                src="https://randomuser.me/api/portraits/men/11.jpg"
                alt="User Avatar"
                className="w-16 h-16 rounded-full"
              />
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-semibold">Hola, Esteban!</h2>
              <p className="text-gray-600">Welcome back to your account</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
