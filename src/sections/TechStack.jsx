import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";
// import { techStackImgs } from "../constants";

const TechStack = () => {
  // スキルセクションのテックカードのアニメーション
  useGSAP(() => {
    // このアニメーションは、ユーザーが #skills ラッパーまでスクロールしたときにトリガーされます
    // アニメーションは、ラッパーの上部が画面の中央に来たときに開始します
    // stagger を設定することで、各カードが順番にアニメーションします
    gsap.fromTo(
      ".tech-card",
      {
        // 初期値
        y: 50, // カードを50px下に配置
        opacity: 0, // 不透明度を0に設定
      },
      {
        // 最終値
        y: 0, // カードを元の位置に戻す
        opacity: 1, // 不透明度を1に設定
        duration: 1, // アニメーションの期間
        ease: "power2.inOut", // イージング設定
        stagger: 0.2, // 0.2秒ずつずらしてアニメーション
        scrollTrigger: {
          trigger: "#skills", // #skills ラッパーに到達したときにトリガー
          start: "top center", // ラッパーの上部が画面中央に来たときに開始
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="貢献できること & 主要スキル"
          sub="🤝 私が提供できる価値"
        />
        <div className="tech-grid">
          {/* techStackIcons 配列をループして、各項目のコンポーネントを作成します。
              key には技術スタック名を設定し、クラス名には card-border, tech-card, 
              overflow-hidden, group を設定します。xl:rounded-full と rounded-lg 
              クラスは、画面サイズに応じて適用されます。 */}
          {techStackIcons.map((techStackIcon) => (
            <div
              key={techStackIcon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              {/* tech-card-animated-bg ディブは、コンポーネントがホバーされたときに
                  背景アニメーションを作成するために使用されます。 */}
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                {/* tech-icon-wrapper ディブには、技術スタックアイコンの3Dモデルを
                    レンダリングする TechIconCardExperience コンポーネントが含まれます。 */}
                <div className="tech-icon-wrapper">
                  <TechIconCardExperience model={techStackIcon} />
                </div>
                {/* padding-x と w-full クラスは、テキストに水平方向のパディングを追加し、
                    コンポーネントの全幅を占めるようにするために使用されます。 */}
                <div className="padding-x w-full">
                  {/* p タグには技術スタックの名前が含まれます。 */}
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}

          {/* This is for the img part */}
          {/* {techStackImgs.map((techStackIcon, index) => (
            <div
              key={index}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={techStackIcon.imgPath} alt="" />
                </div>
                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
