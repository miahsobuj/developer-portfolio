import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { ThemeToggle } from '@/components/ThemeToggle';

export const metadata: Metadata = {
  title: 'Sobuj Miah - Developer Portfolio',
  description: 'Modern developer portfolio showcasing Android projects, shop, and more.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col">
            <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border/50">
              <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-between py-4">
                  <div className="flex-shrink-0">
                    <a href="/" className="text-xl font-bold tracking-tight">
                      Sobuj Miah
                    </a>
                  </div>
                  <div className="hidden md:flex flex-1 items-center justify-center space-x-6">
                    <nav className="space-x-6">
                      <a href="#hero" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Hero
                      </a>
                      <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        About Me
                      </a>
                      <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Android Projects
                      </a>
                      <a href="#shop" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Shop
                      </a>
                      <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Contact
                      </a>
                    </nav>
                  </div>
                  <div className="flex-shrink-0">
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}