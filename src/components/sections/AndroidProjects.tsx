import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'EcoShop Android App',
    description: 'A full-featured e-commerce Android app built with Jetpack Compose, featuring product browsing, cart management, and secure checkout.',
    image: '/projects/ecoshop.png',
    tags: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Room', 'Retrofit'],
    github: 'https://github.com/SobujMiah/ecoshop-android',
    playStore: 'https://play.google.com/store/apps/details?id=com.ecoshop.app',
  },
  {
    id: 2,
    title: 'FitTrack Pro',
    description: 'A fitness tracking app that helps users monitor workouts, set goals, and track progress with beautiful charts and analytics.',
    image: '/projects/fittrack.png',
    tags: ['Kotlin', 'Jetpack Compose', 'Material You', 'Firebase', 'GraphQL'],
    github: 'https://github.com/SobujMiah/fittrack-android',
    playStore: 'https://play.google.com/store/apps/details?id=com.fittrack.pro',
  },
  {
    id: 3,
    title: 'NewsFlash',
    description: 'A modern news aggregator app with offline reading, personalized feeds, and dark mode support.',
    image: '/projects/newsflash.png',
    tags: ['Kotlin', 'Jetpack Compose', 'Paging 3', 'WorkManager', 'Room'],
    github: 'https://github.com/SobujMiah/newsflash-android',
    playStore: 'https://play.google.com/store/apps/details?id=com.newsflash.app',
  },
];

export default function AndroidProjects() {
  return (
    <section id="projects" className="py-12 px-6 bg-background/50">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-3xl font-bold text-center">Android Projects</h2>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          {projects.map((project) => (
            <div key={project.id} className="rounded-lg border border-border/50 bg-muted/50 p-6 hover:bg-muted/100 transition-colors">
              <div className="mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="rounded-lg object-cover"
                  placeholder="blur"
                />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-muted-foreground line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={project.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-md border border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 transition-colors"
                >
                  Play Store
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}