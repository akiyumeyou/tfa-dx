import Image from "next/image";
import { resolvePhoto } from "@/lib/photo";

type AvatarProps = {
  name: string;
  initials: string;
  photoBase: string;
  size?: "sm" | "md" | "lg";
};

const SIZES = {
  sm: { box: "h-14 w-14", text: "text-lg", px: 56 },
  md: { box: "h-20 w-20", text: "text-2xl", px: 80 },
  lg: { box: "h-28 w-28", text: "text-3xl", px: 112 },
} as const;

export function Avatar({ name, initials, photoBase, size = "md" }: AvatarProps) {
  const photo = resolvePhoto(photoBase);
  const { box, text, px } = SIZES[size];

  if (photo) {
    return (
      <Image
        src={photo}
        alt={`${name}さんの写真`}
        width={px}
        height={px}
        className={`${box} shrink-0 rounded-full object-cover ring-2 ring-primary-pale`}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`${box} ${text} flex shrink-0 items-center justify-center rounded-full bg-primary-pale font-bold text-primary-dark ring-2 ring-primary-light`}
    >
      {initials}
    </div>
  );
}
