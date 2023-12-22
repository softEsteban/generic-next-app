import React from 'react';
import Navbar from '@/components/Navbar';

const LandingPage = () => {
    return (
        <div className="container mx-auto">

            <title>Landing</title>
            <Navbar />

            {/* Main content */}
            <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
                {/* Main section */}
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-800 mb-4">
                        Welcome to Your App
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600">
                        Explore our app and enjoy a new experience.
                    </p>
                </div>

                {/* Services section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-6">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold mb-2">Feature 1</h3>
                        <ul>
                            <li>* Description of Feature 1.</li>
                            {/* Add more details here */}
                        </ul>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold mb-2">Feature 2</h3>
                        <ul>
                            <li>* Description of Feature 2.</li>
                            {/* Add more details here */}
                        </ul>
                    </div>
                </div>

                {/* Call to Action section */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-2">
                        Call to Action Section
                    </h3>
                    <p>
                        Add a button or content here to prompt user action.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default LandingPage;
