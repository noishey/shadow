import Constellation from "@/components/Constellation";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <Constellation />
      <button className="font-mono text-white text-4xl px-8 py-4 border border-white rounded-lg hover:bg-white hover:text-black transition-colors">
        look into the shadow
      </button>
    </main>
  );
}
