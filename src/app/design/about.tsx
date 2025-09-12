export default function About() {
  return (
    <section
      id="about"
      className="h-screen w-full flex flex-col items-start justify-end px-50 py-30"
    >
      <div className="pl-1 pb-3">
        <span className="tracking-[+.3em] text-md font-light">
          RIZQI KAFA MUNTAQA{" "}
        </span>
        {"   "}
        <span className="tracking-[-.1em] font-light text-md">
          ----------------------------------------
        </span>
      </div>
      <div className="pb-5 text-7xl font-bold">About Me</div>
      <div className="max-w-2xl text-lg font-light">
        I am a passionate graphic designer with a keen eye for detail and a love
        for creativity. My mission is to bring ideas to life through compelling
        visuals that resonate with audiences.
      </div>
    </section>
  );
}
