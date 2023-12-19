"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navigate = (page) => {
    router.push(page);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-20">
      <h1 className="text-xl font-bold">Home Page</h1>

      <section className="flex m-5 bg-slate-100 items-center justify-center gap-5 pt-5 px-16 rounded-full">
        <h1 className="text-xl font-bold mb-4 px-8 py-2 text-cyan-800">Logo</h1>
        <button
          className="text-md font-bold mb-4 border border-violet-400 rounded-full px-8 py-2
           bg-orange-500 text-cyan-100"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className="text-md font-bold mb-4 border border-violet-400 rounded-full px-8 py-2
           bg-orange-500 text-cyan-100"
          onClick={() => navigate("/about")}
        >
          About
        </button>
        <button
          className="text-md font-bold mb-4 border border-violet-400 rounded-full px-8 py-2
           bg-orange-500 text-cyan-100"
          onClick={() => navigate("/portfolio")}
        >
          Portfolio
        </button>
        <button
          className="text-md font-bold mb-4 border border-violet-400 rounded-full px-8 py-2
           bg-orange-500 text-cyan-100"
          onClick={() => navigate("/users")}
        >
          Users
        </button>
      </section>
    </div>
  );
}
