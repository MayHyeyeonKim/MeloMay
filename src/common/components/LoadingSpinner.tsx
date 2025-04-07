import { ArrowPathIcon } from "@heroicons/react/24/outline"; // Heroicons import

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <ArrowPathIcon className="w-12 h-12 text-blue-500 animate-spin" />
      <p className="mt-2 text-gray-600 text-lg font-medium">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
