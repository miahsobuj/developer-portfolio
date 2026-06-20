import Hero from '@/components/sections/Hero';
import AboutMe from '@/components/sections/AboutMe';
import AndroidProjects from '@/components/sections/AndroidProjects';
import Shop from '@/components/sections/Shop';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <AndroidProjects />
      <Shop />
      <Contact />
    </>
  );
}