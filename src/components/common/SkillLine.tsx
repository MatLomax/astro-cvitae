export function SkillLine({ label, value }: { label?: string; value: string }) {
  return (
    <p className="text-sm text-(--text-body)">
      {label ? (
        <>
          <span className="font-semibold text-(--text-strong)">{label}</span>{" "}
          {value}
        </>
      ) : (
        value
      )}
    </p>
  );
}
