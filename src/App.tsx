import { Suspense, lazy } from 'react';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

const Scene3D = lazy(() => import('./components/Scene3D'));

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      {/* Gradient overlays for depth */}
      <div className="fixed inset-0 z-[1] pointer-events-none bg-gradient-to-b from-black/70 via-transparent to-black/80"></div>
      <div className="fixed inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]"></div>

      <main className="relative z-10">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
