import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="practice" ref={sectionRef} className="app-showcase mt-20 ">
      <div className="w-full">
        <h2 className=" font-bold mb-10 uppercase tracking-wider hero-text text-center ">Practice Project</h2>
        <div className="showcaselayout">
          <a href="https://amazone-nextjs15.vercel.app" ref={rydeRef} className="first-project-wrapper" target="_blank">
            <div className="image-wrapper">
              <img src="/new/amazon1.png" alt="Next Amazon" />
            </div>
            <div className="text-content">
              <h2>The next generation of the Amazon app with NextJs 15 for fullstack</h2>
              <p className="text-white-50 md:text-xl">
                TeachStack: NextJs 15, Tailwind CSS, shadCn UI, TypeScript, AuthJs , Recharts, MongoDB, Zustand, and
                more.
              </p>
            </div>
          </a>

          <div className="project-list-wrapper overflow-hidden">
            <a
              className="project"
              ref={libraryRef}
              href="https://cocktail-with-gsap.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="/new/cocktail1.png" alt="Cocktail" />
              </div>
              <h2>Landing page for cocktail club </h2>
            </a>

            <a
              href="https://carepulse-two-omega.vercel.app"
              className="project cursor-pointer"
              ref={ycDirectoryRef}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/booking.png" alt="Booking app" />
              </div>
              <h2>Booking app with Nextjs, React Hook Form and Tanstack Table </h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
