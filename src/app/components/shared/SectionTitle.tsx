interface SectionTitleProps {
  eyebrow: string;
  title: string;
  copy?: string;
}

export function SectionTitle({ eyebrow, title, copy }: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FEF2F2] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {eyebrow}
      </div>
      <h2 className="text-4xl font-bold tracking-[-0.04em] text-foreground md:text-5xl">{title}</h2>
      {copy ? <p className="mx-auto mt-4 max-w-2xl text-lg font-light leading-8 text-muted-foreground">{copy}</p> : null}
    </div>
  );
}