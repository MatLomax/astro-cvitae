import type { CvHeader } from "../../data/cv.types";

export function Header({ name, title, location, email, github }: CvHeader) {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="space-y-1">
        <h1 className="text-4xl font-semibold tracking-tight text-(--text-primary) leading-tight font-header">
          {name}
        </h1>

        <p className="text-lg text-(--text-muted) tracking-tight italic leading-snug font-header">
          {title}
        </p>
      </div>

      <div className="flex flex-col flex-wrap gap-x-4 gap-y-1 text-sm sm:text-right font-medium text-(--text-muted) leading-relaxed">
        <span>{location}</span>
        <a
          href={`mailto:${email}`}
          className="text-(--text-body) underline decoration-(--link-underline) underline-offset-2 hover:text-(--link-hover) hover:decoration-(--link-underline-hover)"
        >
          {email}
        </a>
        <a
          href={`https://github.com/${github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-(--text-body) underline decoration-(--link-underline) underline-offset-2 hover:text-(--link-hover) hover:decoration-(--link-underline-hover)"
        >
          github.com/{github}
        </a>
      </div>
    </header>
  );
}
