type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export function SectionHeading({ eyebrow, title, intro }: SectionHeadingProps) {
  return (
    <div className="section-head">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="section-title display">{title}</h2>
      </div>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}
