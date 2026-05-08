const navLinks = [
  {
    name: "概要",
    link: "#summary",
  },
  {
    name: "職歴",
    link: "#experience",
  },
  {
    name: "実践",
    link: "#practice",
  },
];

const words = [
  { text: "アイデア", imgPath: "/images/ideas.svg" },
  { text: "コンセプト", imgPath: "/images/concepts.svg" },
  { text: "デザイン", imgPath: "/images/designs.svg" },
  { text: "コード", imgPath: "/images/code.svg" },
  { text: "アイデア", imgPath: "/images/ideas.svg" },
  { text: "コンセプト", imgPath: "/images/concepts.svg" },
  { text: "デザイン", imgPath: "/images/designs.svg" },
  { text: "コード", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "年の経験" },
  { value: 200, suffix: "+", label: "満足したクライアント" },
  { value: 108, suffix: "+", label: "完了したプロジェクト" },
  { value: 90, suffix: "%", label: "顧客維持率" },
];

const logoIconsList = [
  { imgPath: "/new/logos/html.png" },
  { imgPath: "/new/logos/css.png" },
  { imgPath: "/new/logos/next.png" },
  { imgPath: "/new/logos/react.png" },
  { imgPath: "/new/logos/js.png" },
  { imgPath: "/new/logos/mui.png" },
  { imgPath: "/new/logos/node.png" },
  { imgPath: "/new/logos/postgresql.png" },
  { imgPath: "/new/logos/ts.png" },
  { imgPath: "/new/logos/redux.png" },
  { imgPath: "/new/logos/tailwind.png" },
  { imgPath: "/new/logos/stripe.png" },
  { imgPath: "/new/logos/reactnative.png" },
  { imgPath: "/new/logos/prisma.png" },
  { imgPath: "/new/logos/docker.png" },
  { imgPath: "/new/logos/express.png" },
  { imgPath: "/new/logos/figma.png" },
  { imgPath: "/new/logos/firebase.png" },
  { imgPath: "/new/logos/framer.png" },
  { imgPath: "/new/logos/go.png" },
  { imgPath: "/new/logos/graphql.png" },
  { imgPath: "/new/logos/mysql.png" },
  { imgPath: "/new/logos/reactquery.png" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "品質へのこだわり",
    desc: "細部まで注意を払いながら、高品質な成果物を提供します。",
  },
  {
    imgPath: "/images/chat.png",
    title: "確実なコミュニケーション",
    desc: "透明性と明確さを保つため、各ステップで進捗を共有します。",
  },
  {
    imgPath: "/images/time.png",
    title: "納期厳守",
    desc: "品質と細部への注意を保ちながら、プロジェクトをスケジュール通りに完了させます。",
  },
];

const techStackImgs = [
  {
    name: "React開発者",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python開発者",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "バックエンド開発者",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "インタラクティブ開発者",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "プロジェクトマネージャー",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React開発者",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python開発者",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "バックエンド開発者",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "インタラクティブ開発者",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "プロジェクトマネージャー",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "新しいチームで、ゼロから構築されたプロジェクトに参加し、ビジネス要件の分析方法、システムアーキテクチャの設計、データベースパフォーマンスの最適化、製品の自動化されたCI/CDの実装など、多くのことを学ぶ機会を得ました。",
    logoPath: "/images/logo1.png",
    title: "DeK Technologies – フルスタック開発者",
    date: "2024年7月 - 2026年2月",
    techstack: "ReactJS, NestJS, PostgreSQL, TypeScript, RabbitMQ",
    project: "CarCare – 車両メンテナンス管理アプリケーション（7名体制）",
    responsibilities: [
      "ステークホルダーの要件に基づき、UX/UIを設計し、追加機能（バックエンド・フロントエンド両方）を実装。",
      "チームメンバーのコードレビューを行い品質を確保。リファクタリング、単体テスト、ドキュメント作成により、新規開発者のオンボーディングを迅速化。",
      "チームリーダーと連携し、ワークフローの定義・改善を行い、新機能のデプロイ時間を短縮。",
    ],
  },
  {
    review:
      "ここでは、複数のアウトソーシングプロジェクトを経験し、クライアントの要件に柔軟に対応したプロジェクト管理方法、効率と品質を確保するためのワークフロー最適化、複数タイムゾーンにまたがるステークホルダーとの協業における高圧力下での問題解決スキルなどを学びました。",
    logoPath: "/images/logo2.png",
    title: "DeK Technologies – フルスタック開発者",
    date: "2022年6月 - 2024年6月",
    techstack: "ReactJS, ExpressJS, NestJS, PostgreSQL, TypeScript",
    project: "3+ プロジェクト（地元フード注文、イベントチケット販売、学校管理システム）（12名体制）",
    responsibilities: [
      "一部プロジェクトにおいて、アーキテクチャとコーディング規約の定義、フロントエンド・バックエンド全体のCI/CDシステム構築を担当。",
      "UX/UIを設計し、要件に基づいた機能開発、機能性と保守性を確保するための単体/統合テストを実施。",
      "レガシーシステムの保守、コードリファクタリング、モノリスサービスのマイクロサービスへの再構築。",
      "競合状態、過剰販売防止、グループ注文、検索最適化、アトミックデータ、リアルタイムデータ同期などのコア課題に対応。",
    ],
  },
  {
    review:
      "卒業後初の実際のプロジェクトを通じて、要件収集、プロフェッショナルなチーム協業、効率的なソースコード管理、テストから製品デプロイまでの実際のワークフローを明確に理解できました。これは学術的な環境では深く経験できなかったことです。",
    logoPath: "/images/logo3.png",
    title: "BookingCare Technology – フルスタック開発者",
    date: "2021年5月 - 2022年6月",
    techstack: "ReactJS, ExpressJS, PostgreSQL, TypeScript",
    project: "Booking Care（6名体制）オンライン医療予約アプリケーション",
    responsibilities: [
      "ロードマップに基づいた機能開発と改善。",
      "コード品質と保守性を確保するためのチームメンバーのコードレビュー。",
      "単体テスト・ドキュメント作成、バグ修正、レガシーシステムの安定稼働維持。",
    ],
  },
];

const expLogos = [
  { name: "logo1", imgPath: "/images/logo1.png" },
  { name: "logo2", imgPath: "/images/logo2.png" },
  { name: "logo3", imgPath: "/images/logo3.png" },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "Adrian については良いことしか言えません。複雑なプロジェクト要件を、シームレスで機能的なウェブサイトに変換してくれました。彼の問題解決能力は際立っています。",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Adrian との協業は素晴らしい経験でした。古いウェブサイトを、モダンでユーザーフレンドリーなプラットフォームに変えてくれました。細部への注意と品質へのこだわりは比類なく、あらゆるウェブ開発プロジェクトに強く推薦します。",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Adrian との協業は本当に楽しかったです。彼の専門性、迅速さ、そして卓越した成果を届けるための献身は、プロジェクト全体を通じて明らかでした。開発のあらゆる側面に対する Adrian の情熱は際立っています。ウェブサイトを向上させ、ブランドを高めたいとお考えなら、Adrian は理想的なパートナーです。",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian との協業は楽しかったです。古いウェブサイトを、モダンで直感的かつナビゲーションしやすい新鮮なプラットフォームに変えてくれました。全体的に素晴らしい仕事でした。",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian のウェブ開発における専門知識は本当に印象的です。私たちの E-Commerce サイトのために堅牢でスケーラブルなソリューションを届け、ローンチ以降、オンライン売上は大幅に増加しました。彼は真のプロフェッショナルです！",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian との協業は楽しかったです。私たちの要件を完璧に理解し、期待を超えるウェブサイトを届けました。フロントエンド・バックエンド両方の開発スキルはトップクラスです。",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  { name: "insta", imgPath: "/images/insta.png" },
  { name: "fb", imgPath: "/images/fb.png" },
  { name: "x", imgPath: "/images/x.png" },
  { name: "linkedin", imgPath: "/images/linkedin.png" },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};