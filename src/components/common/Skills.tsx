import { Fragment } from "react";

export function Skills({
  prefix,
  children,
}: {
  prefix?: string;
  children: React.ReactNode | string[] | undefined;
}) {
  if (!children || (Array.isArray(children) && children.length === 0)) {
    return null;
  }

  if (!Array.isArray(children)) {
    return (
      <span className="text-(--text-subtle)">
        {prefix} {children}
      </span>
    );
  }

  return (
    <span className="text-(--text-subtle)">
      {prefix}{" "}
      {children.map((child, index) => (
        <Fragment key={child}>
          <span className="whitespace-nowrap">{child}</span>
          {index < children.length - 1 ? ", " : null}
        </Fragment>
      ))}
    </span>
  );
}
