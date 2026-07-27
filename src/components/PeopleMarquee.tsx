"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * 写真パスの解決は fs を使うサーバー側で済ませ、この形にしてから渡す。
 * （lib/photo.ts はクライアントコンポーネントからは呼べない）
 */
export type PersonCard = {
  id: string;
  name: string;
  initials: string;
  titles: string[];
  bio: string;
  session?: string;
  tokushimaBased?: boolean;
  photoSrc: string | null;
};

type PeopleMarqueeProps = {
  people: PersonCard[];
  /** 流れる向き。2列を逆向きにすると単調にならない */
  direction?: "left" | "right";
  /** カード1枚あたりの流れる秒数。人数が増えたら比例して1周が長くなる */
  secondsPerPerson?: number;
};

/** 画面幅に応じたカード幅。広い画面で横に4人前後が収まる大きさ */
const CARD_WIDTH_CLASS = "w-[260px] md:w-[300px] lg:w-[320px] xl:w-[360px]";
const CARD_PHOTO_SIZES =
  "(min-width: 1280px) 360px, (min-width: 1024px) 320px, (min-width: 768px) 300px, 260px";
const CARD_MAX_WIDTH = 360;
const CARD_GAP = 16;
const PHOTO_WIDTH = 720;
const PHOTO_HEIGHT = 900;

/** 1周ぶんの並びがこの幅を超えるまで繰り返す。足りないと流れている途中で空白が見える */
const MIN_LOOP_WIDTH = 2800;

function repeatToFillWidth(people: PersonCard[]) {
  const rowWidth = people.length * (CARD_MAX_WIDTH + CARD_GAP);
  const times = Math.max(2, Math.ceil(MIN_LOOP_WIDTH / rowWidth));
  return Array.from({ length: times }, () => people).flat();
}

function CardPhoto({ person }: { person: PersonCard }) {
  const frame =
    "aspect-[4/5] w-full overflow-hidden rounded-card bg-primary-pale";

  if (!person.photoSrc) {
    return (
      <div
        className={`${frame} flex items-center justify-center text-4xl font-bold text-primary-dark`}
      >
        {person.initials}
      </div>
    );
  }

  return (
    <div className={frame}>
      <Image
        src={person.photoSrc}
        alt=""
        width={PHOTO_WIDTH}
        height={PHOTO_HEIGHT}
        sizes={CARD_PHOTO_SIZES}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}

function PersonDialog({
  person,
  onClose,
}: {
  person: PersonCard;
  onClose: () => void;
}) {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 p-0 sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${person.name}さんのプロフィール`}
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-card bg-white p-6 shadow-lg sm:rounded-card md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex flex-col gap-6 sm:flex-row">
          {/* スマホでは写真を大きく中央に、横並びになる幅からは左に置く */}
          <div className="mx-auto w-56 shrink-0 sm:mx-0 sm:w-44 md:w-48">
            <CardPhoto person={person} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              {person.session && (
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                  {person.session.slice(0, person.session.indexOf("「"))}担当
                </span>
              )}
              {person.tokushimaBased && (
                <span className="rounded-full bg-accent/25 px-3 py-1 text-xs font-bold text-ink">
                  徳島県在住
                </span>
              )}
            </div>

            <h3 className="mt-3 text-2xl font-bold text-ink">{person.name}</h3>
            {person.titles.map((title) => (
              <p key={title} className="mt-1 font-semibold text-primary-dark">
                {title}
              </p>
            ))}
            {person.session && (
              <p className="mt-4 rounded-card bg-primary-pale px-4 py-3 text-sm font-bold text-primary-dark">
                担当：{person.session}
              </p>
            )}
            <p className="mt-4 leading-relaxed text-ink-muted">{person.bio}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row-reverse sm:justify-start">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-[44px] items-center justify-center rounded-card bg-primary px-6 font-bold text-white hover:bg-primary-dark"
          >
            閉じる
          </button>
          <Link
            href={`/instructors#${person.id}`}
            className="inline-flex min-h-[44px] items-center justify-center rounded-card border-2 border-primary px-6 font-bold text-primary-dark hover:bg-primary-pale"
          >
            講師・メンター紹介ページへ
          </Link>
        </div>
      </div>
    </div>
  );
}

export function PeopleMarquee({
  people,
  direction = "left",
  secondsPerPerson = 14,
}: PeopleMarqueeProps) {
  const [selected, setSelected] = useState<PersonCard | null>(null);
  const [paused, setPaused] = useState(false);

  // 同じ並びを2周ぶん並べて、半分進んだところで先頭に戻すと途切れずにつながる
  const oneLoop = repeatToFillWidth(people);
  const track = [...oneLoop, ...oneLoop];

  return (
    <>
      {/* 左右を薄くして、2つの列が別々に流れていることを見た目でも分ける */}
      <div
        className="overflow-x-auto [-ms-overflow-style:none] [mask-image:linear-gradient(to_right,transparent,black_40px,black_calc(100%-40px),transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={() => setPaused(false)}
        onPointerDown={() => setPaused(true)}
        onPointerUp={() => setPaused(false)}
      >
        <ul
          className="marquee-track flex w-max"
          style={{
            ["--marquee-duration" as string]: `${oneLoop.length * secondsPerPerson}s`,
            animationDirection: direction === "right" ? "reverse" : "normal",
            animationPlayState: paused || selected ? "paused" : "running",
          }}
        >
          {track.map((person, index) => {
            // 読み上げと Tab 移動は最初の1周ぶんだけに絞る
            const isDuplicate = index >= people.length;

            return (
              <li
                key={`${person.id}-${index}`}
                className={`${CARD_WIDTH_CLASS} flex shrink-0`}
                style={{ marginRight: CARD_GAP }}
                aria-hidden={isDuplicate || undefined}
              >
                <button
                  type="button"
                  tabIndex={isDuplicate ? -1 : undefined}
                  onClick={() => setSelected(person)}
                  className="group flex h-full w-full flex-col rounded-card border border-primary-pale bg-white p-4 text-left shadow-sm transition hover:border-primary-light hover:shadow-md"
                >
                  <CardPhoto person={person} />
                  {/* 名前と肩書の行数が人によって違うので、高さを固定してカードを揃える */}
                  <p className="mt-4 line-clamp-1 text-lg font-bold text-ink md:text-xl">
                    {person.name}
                  </p>
                  <p className="mt-1 line-clamp-2 min-h-[2.75rem] text-sm leading-snug text-ink-muted">
                    {person.titles[0]}
                  </p>
                  <p className="mt-3 text-sm font-bold text-primary">
                    プロフィールを見る →
                  </p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {selected && (
        <PersonDialog person={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
