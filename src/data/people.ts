export type SocialLink = {
  label: string;
  url: string;
};

export type Person = {
  id: string;
  name: string;
  initials: string;
  /** 肩書。複数行に分けたいので配列で持つ */
  titles: string[];
  /**
   * public/images 配下の拡張子を除いたパス。写真を置くと自動で差し替わる。
   * 元写真は assets/people/ に同じパス名で置き、`npm run images` で縦長4:5のwebpを生成する。
   */
  photoBase: string;
  /** 企画書「登壇者・伴走メンター」ページの紹介文をもとにしている */
  bio: string;
  /** 担当回（メンターは undefined） */
  session?: string;
  /** 徳島県在住。地元で相談できる体制であることを示すバッジに使う */
  tokushimaBased?: boolean;
  links: SocialLink[];
};

export const instructors: Person[] = [
  {
    id: "kunimoto-chisato",
    name: "國本 知里",
    initials: "國",
    titles: [
      "シンシアリーCEO｜AI Work Transformation Company",
      "一般社団法人Women AI Initiative Japan 代表理事",
    ],
    photoBase: "instructors/kunimoto-chisato",
    bio: "シンシアリー株式会社代表取締役。企業向け生成AI人材育成・AI定着化支援を展開。早稲田大学大学院修了後、SAPやAIスタートアップでコンサルティング営業・事業開発に従事。一般社団法人Women AI Initiative Japan代表理事として、女性のAIリスキリングとキャリア形成を支援。著書監修『ChatGPT活用大全』はAmazonベストセラー1位を獲得。Forbes JAPAN Women In Tech 30選出、文部科学省アントレプレナーシップ推進大使、Microsoft Copilotアンバサダー。AIを「誰もが使いこなせる力」に変える実践者として活躍。",
    session: "第1回「AIを味方につけて、新しい自分へ」",
    links: [],
  },
  {
    id: "kubo-chikara",
    name: "久保 主税",
    initials: "久",
    titles: ["株式会社こそらぼ"],
    photoBase: "instructors/kubo-chikara",
    bio: "日鉄ソリューションズ株式会社に勤務しながら「男性が子育てに参画すれば、社会が変わる」を掲げ、子育てを科学するスタートアップ株式会社こそらぼを起業。現在は日鉄ソリューションズ株式会社から厚生労働省へ出向し、医療分野のAI・IT基盤を担う実務家として勤務。本業・起業・子育てを両立。「継続も才能」を体現する実践者が、AIで可能性を何倍にも広げる方法を語ります。",
    session: "第2回「AIがあなたの可能性を何倍にも広げる」",
    links: [],
  },
  {
    id: "mirai-konno-junko",
    name: "mirai（今野 純子）",
    initials: "mi",
    titles: ["MIRAICHI共同代表"],
    photoBase: "instructors/mirai-konno-junko",
    bio: "学びが生きがいに、成長が未来に。AI時代の「学び」と「実践」をつなぐプラットフォームを運営。AIハッカソンでのグランプリ受賞歴を持つ。大手企業での人材開発・研修室長の経験を活かし、AIの知識と教育の両面からコミュニティを牽引している。",
    session: "第3回「自分の時間を作る — AIで仕事を30分減らす」",
    links: [],
  },
  {
    id: "naka-shinji",
    name: "那珂 慎二",
    initials: "那",
    titles: ["サイナーズ株式会社　代表取締役・プログラミング講師"],
    photoBase: "instructors/naka-shinji",
    bio: "全聾の妻との暮らしを原点に、AI・ARを活用した聴覚障害者向けサービス「補聴グラス」の開発に取り組む社会起業家。第8回価値デザインコンテスト内閣総理大臣賞をはじめ、総務省ICTスタートアップリーグ、NEDO NEPなど受賞・採択多数。茨城県やEPSON等のアクセラレーションプログラムでメンターも務める。テクノロジーで社会課題を解決し、制度設計や政策提言にも挑戦。2025年に徳島へ移住し、世界を目指すスタートアップとして活動している。",
    session: "第4回「AIを味方に 作りたいものを形にする」",
    tokushimaBased: true,
    links: [],
  },
  {
    id: "fuchigami-junko",
    name: "淵上 淳子",
    initials: "淵",
    titles: ["商船三井システムズ執行役員・株式会社Novath"],
    photoBase: "instructors/fuchigami-junko",
    bio: "大学ではグラフ理論を専攻。機械学習・数理最適化を用いたビジネス課題の解決に取り組み、実務と学術を行き来しながら両者をつなぐDX実践の第一人者。女性研究者のキャリアを語るパネルセッションにも登壇するなど、理系×女性のロールモデルとして活躍中。",
    session: "第5回「AIを味方に自分自身をマネジメント」",
    links: [],
  },
];

export const mentors: Person[] = [
  {
    id: "kataoka-yutaka",
    name: "片岡 豊",
    initials: "片",
    titles: ["株式会社リッチハニカム　代表取締役"],
    photoBase: "mentors/kataoka-yutaka",
    bio: "東京大学大学院修了（分析化学）。Web制作会社で大手ECサイト等の分析を担当後、2015年「地方こそデータ活用が必要」との思いで徳島にて起業。地方企業・自治体のDX推進をデータ分析とAI活用で支援し、学生起業プログラムなど人材育成にも取り組む。徳島のデータ活用のプロとして、あなたの課題に伴走します。",
    tokushimaBased: true,
    links: [],
  },
  {
    id: "sato-akiko",
    name: "佐藤 晃子",
    initials: "佐",
    titles: [
      "株式会社ポチっとつながるPOTZ　代表取締役",
      "徳島生成AI部 部長",
    ],
    photoBase: "mentors/sato-akiko",
    bio: "徳島の100億円規模中小企業で女性初の営業部長を務めた後、介護を機に退職し、50代で起業。高齢者の孤独と困りごとを互助で解決するアプリ「POTZ」を徳島から展開。Gsハッカソン優勝、東京都APT Women採択など受賞・採択多数。「何歳からでも、徳島からでも挑戦できる」を体現するロールモデルとして伴走します。",
    tokushimaBased: true,
    links: [],
  },
  {
    id: "naka-shinji-mentor",
    name: "那珂 慎二",
    initials: "那",
    titles: ["サイナーズ株式会社　代表取締役", "登壇者兼任（第4回 講師）"],
    photoBase: "mentors/naka-shinji",
    bio: "全聾の妻との暮らしを原点に、AI・ARを活用した聴覚障害者向け事業に取り組む社会起業家。第8回価値デザインコンテスト内閣総理大臣賞、総務省ICTスタートアップリーグ、NEDO NEPなど受賞・採択多数。茨城県やEPSON等のアクセラレーションプログラムでメンターも務める。テクノロジーによる課題解決にとどまらず、制度設計や政策提言にも取り組む。世界標準を目指す実践者として、あなたの挑戦に伴走します。",
    tokushimaBased: true,
    links: [],
  },
  {
    id: "nishimura-eri",
    name: "西村 えり",
    initials: "西",
    titles: ["株式会社W's Link 代表取締役"],
    photoBase: "mentors/nishimura-eri",
    bio: "2022年度TFA-DX修了生。個人事業主を経て2024年に法人設立。AIを活用したデジタルマーケティングや業務改善支援を展開し、中小企業のバックオフィス業務や情報発信の効率化を支援している。得意分野は、生成AIを活用したスライド作成や情報発信のためのコンテンツ制作。自身の学びを事業化した経験を活かし、受講生の実践と挑戦に伴走します。",
    tokushimaBased: true,
    links: [],
  },
];
