export default function Contact() {
  return (
    <section id="contact" className="py-12 px-6">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-8 text-3xl font-bold text-center">Contact</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full px-4 py-2 rounded border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-2 rounded border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="w-full px-4 py-2 rounded border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              />
            </div>
            <button type="submit" className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              Send Message
            </button>
          </form>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-3 w-3 bg-indigo-500 rounded"></div>
              <div>
                <h3 className="font-medium">Email:</h3>
                <p className="text-muted-foreground">sobujmiah@example.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-3 w-3 bg-indigo-500 rounded"></div>
              <div>
                <h3 className="font-medium">GitHub:</h3>
                <p className="text-muted-foreground">
                  <a href="https://github.com/SobujMiah" className="underline hover:no-underline">github.com/SobujMiah</a>
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-3 w-3 bg-indigo-500 rounded"></div>
              <div>
                <h3 className="font-medium">Location:</h3>
                <p className="text-muted-foreground">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}