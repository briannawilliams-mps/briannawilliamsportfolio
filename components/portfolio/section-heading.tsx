export function SectionHeading({
  eyebrow,
  title,
  id,
  light = false,
}: {
  eyebrow: string
  title: string
  id: string
  light?: boolean
}) {
  return (
    <div className="mb-10 text-center">
      <p
        className={`text-xs font-medium uppercase tracking-[0.3em] ${light ? 'text-primary-foreground/80' : 'text-primary'}`}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-3 text-balance font-serif text-4xl font-medium sm:text-5xl ${light ? 'text-primary-foreground' : 'text-foreground'}`}
      >
        {title}
      </h2>
    </div>
  )
}
