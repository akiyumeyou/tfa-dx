import Image from "next/image";
import { resolvePhoto } from "@/lib/photo";

type PersonPhotoProps = {
  name: string;
  initials: string;
  photoBase: string;
  size?: "sm" | "md" | "lg";
};

/** 生成済み写真の実寸（scripts/build-images.mjs の PORTRAIT_* と揃える） */
const SOURCE_WIDTH = 720;
const SOURCE_HEIGHT = 900;

const SIZES = {
  sm: { box: "w-24 sm:w-28", text: "text-2xl", sizes: "112px" },
  md: { box: "w-28 sm:w-32", text: "text-3xl", sizes: "128px" },
  lg: { box: "w-40 sm:w-48 md:w-56", text: "text-5xl", sizes: "224px" },
} as const;

/** 講師・メンターの顔写真。未設置の人はイニシャルの枠を同じ形で表示する */
export function PersonPhoto({
  name,
  initials,
  photoBase,
  size = "lg",
}: PersonPhotoProps) {
  const photo = resolvePhoto(photoBase);
  const { box, text, sizes } = SIZES[size];
  /**
   * self-start が要る：横並びカードの中で align-items:stretch が効くと高さが
   * カード（＝紹介文の長さ）に引き伸ばされ、写真の比率が人によってバラバラになる
   */
  const frame = `${box} aspect-[4/5] shrink-0 self-start overflow-hidden rounded-card`;

  if (photo) {
    return (
      <Image
        src={photo}
        alt={`${name}さんの写真`}
        width={SOURCE_WIDTH}
        height={SOURCE_HEIGHT}
        sizes={sizes}
        className={`${frame} object-cover ring-1 ring-primary-pale`}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`${frame} ${text} flex items-center justify-center bg-primary-pale font-bold text-primary-dark ring-1 ring-primary-light`}
    >
      {initials}
    </div>
  );
}
