import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".about-text > *", // すべての直系子要素を選択 (h2, p, ...)
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2, // 順番に表示
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 80%", // 要素が画面に入ったとき
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return (
    <div id="summary" className="min-h-screen w-full">
      <div className="w-full px-15 py-4  rounded-2xl shadow-lg text-white about-text">
        <h2 className=" font-bold mb-4 uppercase tracking-wider hero-text text-center ">概要</h2>
        <p className=" text-white-50 md:text-xl  mb-20 px-20">
          私はWeb開発において4年の経験を持つ<b>フルスタックソフトウェアエンジニア</b>です。
          モダンなフロントエンド向けのReactJSやNextJS、およびNodeJS関連の技術を専門としています。
          <br />
          UI/UXデザインの知識を活かし、フロントエンドの課題解決や、ユーザーに最高の体験を提供することに情熱を持っています。
          また、より優れたエンジニアになるために、常に新しい技術やベストプラクティスの習得に励んでいます。
        </p>
        <h2 className="hero-text font-bold mb-4 mt-4 uppercase tracking-wider text-center ">技術スキル</h2>
        <ul className="mb-4 list-disc list-inside space-y-2 text-white-50 md:text-xl px-20 ">
          <li>
            <b>プログラミング言語:</b> JavaScript &amp; TypeScript, Java
          </li>
          <li>
            <b>フレームワーク / プラットフォーム:</b>
            <ul className="list-disc list-inside ml-6">
              <li>ReactJS, NextJS, ExpressJS, NestJS, Spring Boot</li>
              <li>Vite, Webpack/Babel</li>
              <li>TailwindCSS, Shadcn, Material-UI, GSAP</li>
              <li>Figma, Adobe Photoshop, Adobe Premiere</li>
            </ul>
          </li>
          <li>
            <b>データベース管理システム:</b> PostgreSQL, MySQL
          </li>
          <li>
            <b>外国語:</b> TOEIC: 645, JLPT: N2
          </li>
          <li>
            <b>その他:</b>
            <ul className="list-disc list-inside ml-6">
              <li>
                OOP、SOLID原則、デザインパターン、DDD（ドメイン駆動設計）、クリーンアーキテクチャへの理解。
              </li>
              <li>
                クラウドコンピューティングプラットフォームの知識：AWS(EC2, Elastic Beanstalk, Amplify, S3+CloudFrontなど),
                Appwrite, Firebase, Cloudinary, Clerkなど。
              </li>
              <li>CI/CDパイプラインの構築経験、Dockerの使用経験</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
