export const site = {
  name: "とくしまフューチャーアカデミーDX",
  shortName: "TFA-DX",
  tagline: "AIを味方につけ、徳島で輝くDX人材へ",
  subCopy:
    "初心者でも大丈夫。AIに思いを伝えられる言葉があれば十分です。",
  description:
    "徳島県主催の女性向けDX人材育成プログラム。参加費無料・全6回オンライン夜開催・専任メンターが3ヶ月間伴走します。徳島県にお住まいの女性ならどなたでも（年齢制限なし）。",
  url: "https://tfa-dx.vercel.app",
  contactEmail: "tfadx2026@gmail.com",
  organizer: "徳島県",
  contractor: "株式会社ポチっとつながるPOTZ",
  contractorRepresentative: "代表取締役 佐藤 晃子",
  courseFrame:
    "徳島県立男女共同参画総合支援センター「フレアキャンパス講座」",
  disclaimer:
    "※AIのトレンド変化より内容・動画教材などを変更する場合がございます。あらかじめご了承ください。",
} as const;

/** 申込導線。実フォームが決まり次第ここだけ差し替える。 */
export const links = {
  apply: "#apply",
  briefing: "#briefing",
} as const;

export const overview = {
  fee: "無料",
  capacity: "20名（申込多数の場合は抽選）",
  target: "徳島県にお住まいの女性（年齢制限なし）",
  format: "オンライン（第6回のみリアル開催）",
  time: "19:00〜21:30（隔週水曜）",
  briefing: "2026年9月2日(水) 19:00〜 オンライン",
  certificate: "全6回受講で徳島県より修了証を発行",
} as const;
