export default function Marquee({ items }) {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div
      className="select-none overflow-hidden border-y border-black/10 bg-white py-6"
      data-testid="editorial-marquee"
    >
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span
              className={
                i % 2 === 0
                  ? "font-display text-3xl font-normal italic tracking-tight text-ink/90 md:text-5xl"
                  : "font-hand text-4xl text-brand md:text-6xl"
              }
            >
              {t}
            </span>
            <span className="h-2 w-2 rounded-full bg-brand" />
          </span>
        ))}
      </div>
    </div>
  );
}
