import type { CvEducation } from "../../data/cv.types";
import { DateRange } from "../common/DateRange";
import { Skills } from "../common/Skills";

export function EducationEntry({ entry }: { entry: CvEducation }) {
  return (
    <div className="space-y-2 first:pt-2 not-last:border-b border-(--border-muted) not-last:pb-6 border-dashed">
      <div className="flex flex-col print:flex-row md:flex-row flex-wrap md:justify-between print:justify-between gap-2">
        <h3 className="text-base font-semibold text-(--text-primary) font-header">
          {entry.school}
        </h3>

        <DateRange>{entry.dates}</DateRange>
      </div>

      <div className="flex flex-col gap-2 text-sm text-(--text-body) leading-relaxed">
        <span className="font-medium text-(--text-strong) font-header">
          {entry.program}
        </span>

        {entry.details && (
          <span className="text-(--text-muted) italic">{entry.details}</span>
        )}

        {entry.modules && <Skills>{entry.modules}</Skills>}
      </div>
    </div>
  );
}
