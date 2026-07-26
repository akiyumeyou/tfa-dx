export type Session = {
  /** "01"〜"06"。中間交流会は番号なし */
  no: string | null;
  /** 一覧表示用の短い日付 */
  date: string;
  weekday: string;
  isoDate: string;
  title: string;
  /** LPのタイムラインで使う短縮ラベル */
  shortTitle: string;
  instructorName?: string;
  instructorTitle?: string;
  instructorId?: string;
  goal?: string;
  description?: string;
  venue: "オンライン" | "リアル開催";
  time: string;
  optional?: boolean;
};

export const sessions: Session[] = [
  {
    no: "01",
    date: "9/23",
    weekday: "水",
    isoDate: "2026-09-23",
    title: "AIを味方につけて、新しい自分へ",
    shortTitle: "マインドセット",
    instructorName: "國本 知里",
    instructorTitle: "シンシアリーCEO・Women AI Initiative Japan 代表理事",
    instructorId: "kunimoto-chisato",
    goal: "マインドセット・課題発見",
    description:
      "「私には無理」——そう思っていた人ほど、AIで変われる。日本の女性AI活用を牽引する第一人者が、あなたの「最初の一歩」を後押しします。",
    venue: "オンライン",
    time: "19:00〜21:30",
  },
  {
    no: "02",
    date: "10/7",
    weekday: "水",
    isoDate: "2026-10-07",
    title: "AIがあなたの可能性を何倍にも広げる",
    shortTitle: "課題を可視化",
    instructorName: "久保 主税",
    instructorTitle: "株式会社こそらぼ",
    instructorId: "kubo-chikara",
    goal: "なぜ私がするのか（HMW）・課題発見",
    description:
      "デザイン思考の手法を用い、データ分析、アイデア発想などの実践体験を通じて、自分が感じている課題を深掘りします。",
    venue: "オンライン",
    time: "19:00〜21:30",
  },
  {
    no: "03",
    date: "10/21",
    weekday: "水",
    isoDate: "2026-10-21",
    title: "自分の時間を作る — AIで仕事を30分減らす",
    shortTitle: "小さく実践",
    instructorName: "mirai（今野 純子）",
    instructorTitle: "MIRAICHI",
    instructorId: "mirai-konno-junko",
    goal: "成功体験の大切さ・小さく作って見せる",
    description:
      "毎日の「あと30分」は、AIが作ってくれる。明日から使える時短ワザを実践。小さな成功体験が、あなたを変えます。",
    venue: "オンライン",
    time: "19:00〜21:30",
  },
  {
    no: null,
    date: "10/28",
    weekday: "水",
    isoDate: "2026-10-28",
    title: "中間交流会",
    shortTitle: "中間交流会",
    venue: "オンライン",
    time: "19:00〜21:30",
    optional: true,
    description:
      "受講生同士で進捗や悩みを共有する場です。任意参加のため、都合がつかない回があっても学びは続けられます。",
  },
  {
    no: "04",
    date: "11/4",
    weekday: "水",
    isoDate: "2026-11-04",
    title: "AIを味方に 作りたいものを形にする",
    shortTitle: "AIを味方に",
    instructorName: "那珂 慎二",
    instructorTitle: "サイナーズ株式会社",
    instructorId: "naka-shinji",
    goal: "IT活用の世界を広げる・実現する方法",
    description:
      "AIを課題整理、企画設計、試作、検証を支えるパートナーとして活用し、アイデアを「作れる・試せる」形へ。",
    venue: "オンライン",
    time: "19:00〜21:30",
  },
  {
    no: "05",
    date: "11/18",
    weekday: "水",
    isoDate: "2026-11-18",
    title: "AIを味方に自分自身をマネジメント",
    shortTitle: "未来を描く",
    instructorName: "淵上 淳子",
    instructorTitle: "商船三井システムズ 執行役員・株式会社Novath",
    instructorId: "fuchigami-junko",
    goal: "人生のマネジメント（自分の強みを自覚し、自走し続ける）",
    description:
      "DXは単なる業務効率化の手段ではなく、自らの可能性を広げ、人生の選択肢を増やすための実践的なツールであることを学ぶ。",
    venue: "オンライン",
    time: "19:00〜21:30",
  },
  {
    no: "06",
    date: "12/5",
    weekday: "土",
    isoDate: "2026-12-05",
    title: "Finalプレゼンテーション — 言葉にして人を動かせる",
    shortTitle: "Finalプレゼン",
    goal: "4ヶ月の集大成をプレゼンテーション",
    description:
      "成果発表会。会場はときわプラザ（アスティ2F）第5会議室。学んだことを自分の言葉にして届けます。",
    venue: "リアル開催",
    time: "13:30〜15:30",
  },
];

export const features = [
  {
    number: "特徴①",
    title: "専任メンターが3ヶ月間伴走します",
    description:
      "グループメンタリングと個人メンタリングで、最後まで完走できるよう支えます。",
  },
  {
    number: "特徴②",
    title: "メンター・登壇者が全てAIおよびIT活用のプロ",
    description:
      "第一線で活躍する講師陣が、実践で使える知識を直接届けます。",
  },
  {
    number: "特徴③",
    title: "簡単課題とAI学習動画でAIスキルの実力がつく",
    description:
      "無理のない課題と動画教材で、受講後も自分で学び続けられる力が身につきます。",
  },
  {
    number: "特徴④",
    title: "フルタイム勤務でも参加しやすいオンライン夜開催",
    description:
      "隔週水曜の19:00スタート。仕事や家庭と両立しながら学べます。",
  },
  {
    number: "特徴⑤",
    title: "成長を加速させるために設計されたカリキュラム",
    description:
      "マインドセットから実践、そして発表まで。3ヶ月で確実に前に進む構成です。",
  },
] as const;

export const audienceTypes = [
  {
    title: "自分の問いを持っている",
    description:
      "「もっとこうだったらいいのに」という思いが、DXの出発点になります。",
  },
  {
    title: "AIを使いこなしたい",
    description:
      "触ったことがなくても大丈夫。基礎から実践まで順を追って学べます。",
  },
  {
    title: "強くなりたい",
    description:
      "自分の力で選択肢を広げたい。その気持ちが一番の参加資格です。",
  },
] as const;

export const faqs = [
  {
    question: "パソコンが苦手ですが大丈夫？",
    answer:
      "大丈夫です。AIに思いを伝えられる言葉があれば十分。講師・メンターが丁寧にサポートします。",
  },
  {
    question: "仕事が忙しくて通えるか不安…",
    answer:
      "全5回オンライン・夜開催（19:00〜）。フルタイムの方でも参加しやすい設計です。",
  },
  {
    question: "途中でついていけなくなったら？",
    answer:
      "専任メンターが3ヶ月間個別にサポート。グループメンタリングもあり、一人にしません。",
  },
  {
    question: "本当に無料？",
    answer:
      "はい、参加費は完全無料。徳島県の事業として運営しています。",
  },
] as const;
