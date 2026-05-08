import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // 各タイムラインカードをループし、ユーザーがスクロールする際に
    // アニメーションで表示させる
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      // カードを左からスライドインさせ、フェードインさせる
      gsap.from(card, {
        // 左側から移動
        xPercent: -100,
        // 開始時は透明
        opacity: 0,
        // アニメーションの起点をカードの左側に設定
        transformOrigin: "left left",
        // 1秒かけてアニメーション
        duration: 1,
        // power2 easingを使用
        ease: "power2.inOut",
        // カードが画面の80%の位置に来た時にトリガー
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    // スクロールに合わせてタイムラインの長さをアニメーションさせる
    // タイムラインの最上部から画面の70%の位置まで
    gsap.to(".timeline", {
      // 起点をタイムラインの底部に設定
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      // タイムラインが画面中央に来た時に開始し、70%の位置で終了
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        // スクロールに合わせて更新
        onUpdate: (self) => {
          // 進捗に合わせてタイムラインをスケールさせる
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    // 各 expText 要素をループし、スクロールに合わせて表示させる
    gsap.utils.toArray(".expText").forEach((text) => {
      // 不透明度を0から1へ、左から定位置へ移動
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    }, "<");
  }, []);

  return (
    <section id="experience" className="flex-center md:mt-40 mt-20 section-padding xl:px-0">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="職務経歴" sub="💼 キャリアの概要" />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card}>
                    {/* <div>
                      <img src={card.imgPath} alt="exp-img" />
                    </div> */}
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">🗓️&nbsp;{card.date}</p>
                        <p className="my-5 text-[#839CB5] italic">
                          プロジェクト:
                          <span className="text-white-50">{card.project}</span>
                        </p>
                        <p className="my-5 text-[#839CB5] italic">
                          技術スタック:
                          <span className="text-white-50">{card.techstack}</span>
                        </p>
                        <p className="text-[#839CB5] italic">主な業務内容:</p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map((responsibility, index) => (
                            <li key={index} className="text-lg">
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
