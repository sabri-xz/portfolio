import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold"> Hello World! </h1>
      <Gallery />
      <div className="grid grid-cols-3 gap-4"> ${process.cwd()} </div>
    </main>
  );
}
