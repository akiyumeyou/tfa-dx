import { faqs } from "@/data/program";

/**
 * JSなしでも開閉・キーボード操作ができる details/summary で実装している。
 */
export function FaqAccordion() {
  return (
    <div className="mx-auto mt-10 max-w-3xl space-y-4">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-card border border-primary-pale bg-white shadow-sm open:border-primary-light"
        >
          <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 p-5 text-left font-bold text-ink marker:content-none">
            <span className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-[2px] font-bold text-primary"
              >
                Q.
              </span>
              {faq.question}
            </span>
            <span
              aria-hidden="true"
              className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary-pale text-lg font-bold leading-none text-primary-dark transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="border-t border-primary-pale px-5 py-5">
            <p className="flex items-start gap-3 text-ink-muted">
              <span aria-hidden="true" className="font-bold text-accent-strong">
                A.
              </span>
              <span>{faq.answer}</span>
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
