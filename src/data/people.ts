export type SocialLink = {
  label: string;
  url: string;
};

export type Person = {
  id: string;
  name: string;
  initials: string;
  title: string;
  /** public/images 配下の拡張子を除いたパス。写真を置くと自動で差し替わる。 */
  photoBase: string;
  bio: string;
  /** 担当回（メンターは undefined） */
  session?: string;
  links: SocialLink[];
};

export const instructors: Person[] = [
  {
    id: "kunimoto-chisato",
    name: "國本 知里",
    initials: "國",
    title: "シンシアリーCEO・Women AI Initiative Japan 代表理事",
    photoBase: "instructors/kunimoto-chisato",
    bio: "ChatGPT活用本ベストセラー監修、Forbes JAPAN Women In Tech 30選出。日本の女性AI活用を牽引する第一人者。",
    session: "第1回「AIを味方につけて、新しい自分へ」",
    links: [],
  },
  {
    id: "kubo-chikara",
    name: "久保 主税",
    initials: "久",
    title: "株式会社こそらぼ",
    photoBase: "instructors/kubo-chikara",
    bio: "デザイン思考の手法を用い、データ分析、アイデア発想などの実践体験を通じて課題を深掘りする専門家。",
    session: "第2回「AIがあなたの可能性を何倍にも広げる」",
    links: [],
  },
  {
    id: "mirai-konno-junko",
    name: "mirai（今野 純子）",
    initials: "mi",
    title: "MIRAICHI",
    photoBase: "instructors/mirai-konno-junko",
    bio: "AIハッカソン優勝、数多くのAI講座で“つまずかない学び”を届けてきた講師。",
    session: "第3回「自分の時間を作る — AIで仕事を30分減らす」",
    links: [],
  },
  {
    id: "naka-shinji",
    name: "那珂 慎二",
    initials: "那",
    title: "サイナーズ株式会社",
    photoBase: "instructors/naka-shinji",
    bio: "起業家・開発者の視点からアイデアを「作れる・試せる」形にする実践的な進め方を指導。",
    session: "第4回「AIを味方に 作りたいものを形にする」",
    links: [],
  },
  {
    id: "fuchigami-junko",
    name: "淵上 淳子",
    initials: "淵",
    title: "商船三井システムズ 執行役員・株式会社Novath",
    photoBase: "instructors/fuchigami-junko",
    bio: "仕事と育児の両立、未経験からAIを活用したプロトタイプ開発で事業予算を獲得した実体験を持つ。",
    session: "第5回「AIを味方に自分自身をマネジメント」",
    links: [],
  },
];

export const mentors: Person[] = [
  {
    id: "kataoka-yutaka",
    name: "片岡 豊",
    initials: "片",
    title: "株式会社リッチハニカム",
    photoBase: "mentors/kataoka-yutaka",
    bio: "",
    links: [],
  },
  {
    id: "sato-akiko",
    name: "佐藤 晃子",
    initials: "佐",
    title: "株式会社ポチっとつながるPOTZ",
    photoBase: "mentors/sato-akiko",
    bio: "",
    links: [],
  },
  {
    id: "naka-shinji-mentor",
    name: "那珂 慎二",
    initials: "那",
    title: "サイナーズ株式会社（講師兼任）",
    photoBase: "mentors/naka-shinji",
    bio: "",
    links: [],
  },
  {
    id: "nishimura-eri",
    name: "西村 えり",
    initials: "西",
    title: "株式会社W's Link",
    photoBase: "mentors/nishimura-eri",
    bio: "",
    links: [],
  },
];
