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
  /** 肩書は src/data/people.ts の titles[0] を参照する（instructorId で紐づけ） */
  instructorId?: string;
  goal?: string;
  description?: string;
  /** 講座後の課題 */
  assignment?: string;
  /** 講座後課題として配布する初心者用学習AI動画（仮） */
  video?: string;
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
    instructorId: "kunimoto-chisato",
    goal: "マインドセット・課題発見",
    description:
      "「私には無理」——そう思っていた人ほど、AIで変われる。ChatGPT活用本ベストセラー監修、Forbes JAPAN Women In Tech 30選出。日本の女性AI活用を牽引する第一人者が、あなたの「最初の一歩」を後押しします。",
    assignment: "100字レポート提出",
    video: "動画①ChatGPT・Gemini",
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
    instructorId: "kubo-chikara",
    goal: "なぜ私がするのか（HMW）・課題発見",
    description:
      "デザイン思考の手法を用い、データ分析、アイデア発想などの実践体験を通じて、自分が感じている課題を深掘りします。自分の課題に気づき、働き方や挑戦の可能性を広げます。",
    assignment: "課題を可視化した画像で提出",
    video: "動画②NotebookLM",
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
    instructorId: "mirai-konno-junko",
    goal: "成功体験の大切さ・小さく作って見せる",
    description:
      "毎日の「あと30分」は、AIが作ってくれる。AIハッカソン優勝、数多くのAI講座で“つまずかない学び”を届けてきた講師と、明日から使える時短ワザを実践。小さな成功体験が、あなたを変えます。",
    assignment: "生成できたもの1つ提出",
    video: "動画③Google連携AI",
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
    title: "作りたい未来をAIで形にする手段",
    shortTitle: "AIで形にする",
    instructorName: "那珂 慎二",
    instructorId: "naka-shinji",
    goal: "IT活用の世界を広げる・実現する方法",
    description:
      "これまで学んだAIスキルを活かし、自分のアイデアや身近な課題を具体的な企画やプロダクトへ発展させます。AIを課題整理・企画設計・試作・検証を支えるパートナーとして活用し、アイデアを「作れる・試せる」形へ。起業家・開発者の視点から実践的な進め方を学びます。",
    assignment: "MVP作成スケジュール提出",
    video: "動画④プレゼンテーション",
    venue: "オンライン",
    time: "19:00〜21:30",
  },
  {
    no: "05",
    date: "11/18",
    weekday: "水",
    isoDate: "2026-11-18",
    title: "AIを味方に、自分自身をマネジメントする",
    shortTitle: "未来を描く",
    instructorName: "淵上 淳子",
    instructorId: "fuchigami-junko",
    goal: "人生のマネジメント（自分の強みを自覚し、自走し続ける）",
    description:
      "自身の仕事と育児の両立、キャリア形成における葛藤、未経験からAIを活用したプロトタイプ開発を行い事業予算の獲得に至った実体験から伝えたいこと。DXは単なる業務効率化の手段ではなく、自らの可能性を広げ、人生の選択肢を増やすための実践的なツールであることを学びます。",
    assignment: "100字レポート提出",
    venue: "オンライン",
    time: "19:00〜21:30",
  },
  {
    no: "06",
    date: "12/5",
    weekday: "土",
    isoDate: "2026-12-05",
    title: "Finalプレゼン — 言葉にして人を動かせる",
    shortTitle: "Finalプレゼン",
    goal: "およそ3ヶ月の集大成をプレゼンテーション",
    description:
      "講座で学んだことや挑戦した成果を発表します。AIを活用して見つけた課題やアイデアを、自分の言葉で伝え、共感と応援を生み出すプレゼンテーションに挑戦。仲間の発表から刺激を受けながら、自分の可能性と未来のビジョンを描き、次のアクションへつなげます。",
    assignment: "およそ3ヶ月の集大成を発表",
    venue: "リアル開催",
    time: "13:30〜15:30",
  },
];

/** カリキュラムの2部構成 */
export const sessionParts = [
  {
    number: "1",
    title: "講座",
    detail: "隔週水曜 19:00〜21:00・オンライン",
    description:
      "各回のテーマを担当講師が解説。ワークを交えながら手を動かして学びます。",
  },
  {
    number: "2",
    title: "AI学習・交流",
    detail: "21:00〜21:30",
    description:
      "その日の学びを共有し、疑問をその場で解消。受講生同士のつながりも生まれます。",
  },
] as const;

/** 「なぜこの流れなのか」— DX人材に必要な3つの力 */
export const dxDefinition =
  "DX人材とは — デジタルの力で、業務・組織・価値を変えられる人";

export const dxSkills = [
  {
    title: "課題を定義する力",
    points: [
      "「何が問題か」を言語化し、データで優先度を決める",
      "2週間に1回のペースだから、記憶があるうちに次のステップへ積み上がる",
    ],
  },
  {
    title: "MVPを最速で作る力",
    points: [
      "AI・ノーコードで即試作。完璧より速さを優先し検証",
      "現場事例でイメージを掴み、実際に“手を動かす”ことを重視",
    ],
  },
  {
    title: "人を動かす説得力",
    points: ["成果をストーリーで伝え、現場も上層部も動かす"],
  },
] as const;

export const aiLiteracy = {
  title: "AIリテラシー（共通基盤）",
  description:
    "カリキュラム全体を通じて、AIの仕組み理解・プロンプト設計・ツールの使い分けを積み上げます。",
} as const;

/** 受講者全員が作る成果物 */
export const deliverable = {
  theme: "「徳島 × AI × 私の未来」",
  note: "テーマは基本的に自由です。",
  description:
    "業務改善モデル、アプリ、動画、イラスト等のAI生成物。プレゼンテーション資料もAIで生成します。",
} as const;

/** 全6回のあと、修了までに残っていること */
export const followUp = {
  title: "およそ3ヶ月後・2月末のアンケート",
  description:
    "第6回のあと、およそ3ヶ月後の2月末に受講者全員へアンケートを実施します。ご回答いただいた時点で全日程終了です。",
} as const;

export const features = [
  {
    number: "特徴①",
    icon: "/images/features/feature-1.webp",
    title: "専任メンターがおよそ3ヶ月間伴走します",
    description:
      "グループメンタリングと個人メンタリングで、最後まで完走できるよう支えます。",
  },
  {
    number: "特徴②",
    icon: "/images/features/feature-2.webp",
    title: "メンター・登壇者が全てAIおよびIT活用のプロ",
    description:
      "第一線で活躍する講師陣が、実践で使える知識を直接届けます。",
  },
  {
    number: "特徴③",
    icon: "/images/features/feature-3.webp",
    title: "簡単課題とAI学習動画でAIスキルの実力がつく",
    description:
      "無理のない課題と動画教材で、受講後も自分で学び続けられる力が身につきます。",
  },
  {
    number: "特徴④",
    icon: "/images/features/feature-4.webp",
    title: "フルタイム勤務でも参加しやすいオンライン夜開催",
    description:
      "隔週水曜の19:00スタート。仕事や家庭と両立しながら学べます。",
  },
  {
    number: "特徴⑤",
    icon: "/images/features/feature-5.webp",
    title: "成長を加速させるために設計されたカリキュラム",
    description:
      "マインドセットから実践、そして発表まで。およそ3ヶ月で確実に前に進む構成です。",
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
      "専任メンターがおよそ3ヶ月間個別にサポート。グループメンタリングもあり、一人にしません。",
  },
  {
    question: "本当に無料？",
    answer:
      "はい、参加費は完全無料。徳島県の事業として運営しています。",
  },
] as const;
