import { cn } from "../../lib/cn";
import { ThemeTogglePill } from "../common/ThemeTogglePill";

export function ThemeSwitcher() {
  return (
    <div
      className={cn(
        "w-max items-center rounded-full border border-(--border-subtle) bg-(--page-bg-muted) p-1 shadow-sm print:hidden",
        "mx-auto mt-4",
        "lg:right-6 lg:top-6 lg:z-10 lg:fixed lg:m-0",
      )}
    >
      <ThemeTogglePill label="System" value="system" />
      <ThemeTogglePill label="Light" value="light" />
      <ThemeTogglePill label="Dark" value="dark" />
    </div>
  );
}
