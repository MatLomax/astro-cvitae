import { cn } from "../../lib/cn";

export function ExternalLink({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "text-(--text-muted) hover:text-(--link-hover)",
        "underline decoration-(--link-underline) underline-offset-2 hover:decoration-(--link-underline-hover)",
        className,
      )}
    />
  );
}
