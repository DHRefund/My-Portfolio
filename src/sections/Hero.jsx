import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1 className="flex flex-wrap items-center gap-1">
                {/* Phần chữ chạy (chỉ chứa icon + word) */}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span key={index} className="flex items-center md:gap-3 gap-1 pb-2">
                        <img
                          src={word.imgPath}
                          alt="アイコン"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50 flex-shrink-0"
                        />
                        <span className="whitespace-nowrap">{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
                {/* Chữ 'を' đứng yên, nằm ngoài slide */}
                <span className="text-accent static-wo">を</span>
              </h1>
              <h1>実際のプロジェクトへ</h1>
              <h1>成果として具現化する</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              こんにちは、TINH です。ベトナムを拠点に、コードへの情熱を持って活動している開発者です。
            </p>

            <Button text="作品を見る" className="md:w-80 md:h-16 w-60 h-12" id="counter" />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      {/* <AnimatedCounter /> */}
    </section>
  );
};

export default Hero;