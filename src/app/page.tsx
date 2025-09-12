import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full items-center justify-center cursor-default relative overflow-hidden">
        <p className="text-7xl font-bold mb-7">Rizqi Kafa Muntaqa</p>
        <p className="text-2xl font-light mb-5">Let&apos;s connect with me</p>
        <Link
          href="/design"
          className="px-6 py-3 bg-cyan-950 text-white text-2xl rounded-lg font-bold hover:bg-teal-500 transition-colors duration-300"
        >
          My Design Portfolio
        </Link>
      </div>
    </>
  );
}
