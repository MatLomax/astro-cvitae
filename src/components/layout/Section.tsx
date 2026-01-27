import type { ReactNode } from "react";

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-(--text-subtle) w-full border-b border-(--border-subtle) pb-2 font-header">
        {title}
      </h2>

      <div className="space-y-4">{children}</div>
    </section>
  );
}
