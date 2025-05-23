import React from "react";
import { Link } from "react-router";


const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <h1 className="text-9xl font-bold text-teal-500">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
                Oops! Page not found
            </h2>
            <p className="text-gray-600 mt-2 text-center max-w-md">
                The page you’re looking for doesn’t exist or has been moved. But don’t worry,
                you can head back home!
            </p>
            <Link
                to="/"
                className="mt-6 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-2xl shadow-md transition"
            >
                Go Home
            </Link>
        </div>
    );
};

export default Error;
