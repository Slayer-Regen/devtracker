import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-800">
    <h1 className="text-4xl font-bold mb-4">🚀 DevTracker</h1>
    <p className="text-lg text-center max-w-md">
      Your all-in-one developer productivity dashboard. Track coding sessions,
      Leetcode progress, GitHub commits, and more!
    </p>
  </main>
    
  );
}
