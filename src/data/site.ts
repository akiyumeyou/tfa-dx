export const site = {
  name: "とくしまフューチャーアカデミーDX",
  shortName: "TFA-DX",
  tagline: "AIを味方につけ、徳島で輝くDX人材へ",
  subCopy:
    "初心者でも大丈夫。AIに思いを伝えられる言葉があれば十分です。",
  description:
    "徳島県主催の女性向けDX人材育成プログラム。参加費無料・全6回オンライン夜開催・専任メンターがおよそ3ヶ月間伴走します。徳島県にお住まいの女性ならどなたでも（年齢制限なし）。",
  url: "https://tfa-dx.vercel.app",
  contactEmail: "tfadx2026@gmail.com",
  organizer: "徳島県",
  contractor: "株式会社ポチっとつながるPOTZ",
  contractorRepresentative: "代表取締役 佐藤 晃子",
  courseFrame:
    "徳島県立男女共同参画総合支援センター「フレアキャンパス講座」",
  disclaimer:
    "※AIの進化により、講座内容・学ぶAIツール・課題のテーマなどを変更する場合があります。あらかじめご了承ください。",
} as const;

/** 申込導線。実フォームが決まり次第ここだけ差し替える。 */
export const links = {
  /** 受講申し込みフォーム（public/images/qr-apply.png のQRコードと同じ宛先） */
  apply: "https://forms.gle/KCYjoJ3qJp5PhQAz7",
  /** 事前説明会の申し込みフォーム（public/images/qr-briefing.png と同じ宛先） */
  briefing: "https://forms.gle/2GmfChivWCuqN7758",
} as const;

export const challenge = {
  title: "本事業が応える徳島県の課題",
  body: "女性社長比率12.3%で4年連続全国1位という「挑戦する土壌」を持つ徳島。そこに生成AIという新しい武器を加え、課題を見つけ、データを活かして考え、小さく実践できる女性DX人材を育てます。挑戦する力と、AIがもたらす変革する力を掛け合わせ、企業や地域、そして意思決定の場で活躍する次世代のリーダーを生み出す。それが徳島県がこの事業に込めた狙いです。",
} as const;

export const overview = {
  fee: "無料",
  capacity: "20名（申込多数の場合は抽選）",
  target: "徳島県にお住まいの女性（年齢制限なし）",
  format: "オンライン（第6回のみリアル開催）",
  time: "19:00〜21:30（隔週水曜）",
  briefing: "2026年9月2日(水) 19:00〜 オンライン",
  certificate: "全6回受講で徳島県より修了証を発行",
  completion:
    "全6回の受講後、およそ3ヶ月後の2月末に実施するアンケートにご回答いただいて全日程終了となります。",
} as const;
