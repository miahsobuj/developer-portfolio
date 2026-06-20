export default function Hero() {
  return (
    <section id="hero" className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-12 md:py-20 text-center">
      <div className="max-w-2xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I'm <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Sobuj Miah</span>
        </h1>
        <p className="mb-6 text-lg text-muted-foreground">
          Passionate Android Developer & Entrepreneur building innovative mobile experiences and e-commerce solutions.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#projects" className="rounded-md bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            View Projects
          </a>
          <a href="#contact" className="rounded-md border border-input px-5 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}