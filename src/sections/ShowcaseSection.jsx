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
    // メインセクションのアニメーション
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });

    // từng app showcaseのアニメーション
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
        <h2 className=" font-bold mb-10 uppercase tracking-wider hero-text text-center ">実践プロジェクト</h2>
        <div className="showcaselayout">
          <a href="https://amazone-nextjs15.vercel.app" ref={rydeRef} className="first-project-wrapper" target="_blank">
            <div className="image-wrapper">
              <img src="/new/amazon1.png" alt="Next Amazon" />
            </div>
            <div className="text-content">
              <h2>Next.js 15を使用したフルスタック次世代Amazonアプリクローン</h2>
              <p className="text-white-50 md:text-xl">
                技術スタック: Next.js 15, Tailwind CSS, shadcn/ui, TypeScript, Auth.js, Recharts, MongoDB, Zustand など。
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
              <h2>カクテルクラブのランディングページ</h2>
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
              <h2>Next.js、React Hook Form、Tanstack Tableを使用した予約アプリ</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
