import type { CvExperience } from "../../data/cv.types";
import { cn } from "../../lib/cn";
import { BulletList } from "../common/BulletList";
import { DateRange } from "../common/DateRange";

export function ExperienceEntry({ entry }: { entry: CvExperience }) {
  return (
    <div
      className={cn(
        "space-y-3 first:pt-2 not-last:border-b border-(--border-subtle) not-last:pb-6 border-dashed",
        !entry.sections && "break-inside-avoid-page",
      )}
    >
      <div className="space-y-2 flex flex-col print:flex-row md:flex-row print:justify-between md:justify-between">
        <h3 className="text-xl font-semibold text-(--text-primary) font-header">
          {entry.company}
        </h3>

        <div className="space-y-1 text-sm md:text-right print:text-right text-(--text-muted) leading-relaxed">
          {entry.roles.map((role) => (
            <div key={`${role.title}-${role.dates}`}>
              <span className="font-medium text-(--text-strong)">
                {role.title}
              </span>
              <DateRange> · {role.dates}</DateRange>
            </div>
          ))}
        </div>
      </div>

      {entry.project?.title && (
        <p className="text-sm font-semibold text-(--text-body) font-header">
          {entry.project.title}
        </p>
      )}

      {entry.project?.summary && (
        <p className="text-sm leading-relaxed text-(--text-body)">
          {entry.project.summary}
        </p>
      )}

      {entry.sections ? (
        <div className="space-y-4">
          {entry.sections.map((section) => (
            <div key={section.heading} className="space-y-2">
              <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-(--text-strong) font-header pt-2">
                {section.heading}
              </h4>

              <BulletList items={section.bullets} />
            </div>
          ))}
        </div>
      ) : (
        entry.bullets && <BulletList items={entry.bullets} />
      )}
    </div>
  );
}
