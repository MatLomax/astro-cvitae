import { cn } from "../../lib/cn";

type ThemeTogglePillProps = {
  label: string;
  value: "system" | "light" | "dark";
};

export function ThemeTogglePill({ label, value }: ThemeTogglePillProps) {
  return (
    <button
      type="button"
      data-theme-toggle={value}
      className={cn(
        "text-xs rounded-full px-2.5 py-1.5 font-medium",
        "transition-colors text-(--tab-text)/80 not-data-[active=true]:cursor-pointer not-data-[active=true]:hover:text-(--tab-text)",
        "focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--text-primary)",
        "data-[active=true]:bg-(--tab-bg-active) data-[active=true]:text-(--tab-text-active)",
      )}
    >
      {label}
    </button>
  );
}
