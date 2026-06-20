export default function AboutMe() {
  return (
    <section id="about" className="py-12 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-3xl font-bold text-center">About Me</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-muted-foreground">
              I'm a passionate Android developer with expertise in building high-performance, user-centric mobile applications. I specialize in Kotlin, Jetpack Compose, and modern Android architecture patterns.
            </p>
            <p className="mb-4 text-muted-foreground">
              Beyond development, I enjoy creating seamless e-commerce experiences and exploring the intersection of technology and entrepreneurship.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-3 w-3 bg-indigo-500 rounded"></div>
              <div>
                <h3 className="font-medium">Expertise:</h3>
                <p className="text-sm text-muted-foreground">
                  Android • Kotlin • Jetpack Compose • MVVM • Clean Architecture • REST APIs • Firebase
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-3 w-3 bg-indigo-500 rounded"></div>
              <div>
                <h3 className="font-medium">Experience:</h3>
                <p className="text-sm text-muted-foreground">
                  3+ years building Android apps for startups and enterprises, focusing on performance, scalability, and delightful user experiences.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-3 w-3 bg-indigo-500 rounded"></div>
              <div>
                <h3 className="font-medium">Education:</h3>
                <p className="text-sm text-muted-foreground">
                  Bachelor of Technology in Computer Science
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}