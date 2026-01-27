import type {
  CvBullet,
  CvPersonalProject,
  CvTextWithSkills,
} from "../../data/cv.types";
import { ExternalLink } from "./ExternalLink";
import { Skills } from "./Skills";

export function BulletList({ items }: { items: CvBullet[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-sm text-(--text-body) leading-relaxed print:leading-normal marker:text-(--list-marker)">
      {items.map((item) => {
        if (isTextWithSkills(item)) {
          return <BulletItemWithSkills key={item.text} item={item} />;
        }

        if (isPersonalProject(item)) {
          return <PersonalProject key={item.name} item={item} />;
        }

        return <BulletItem key={item} text={item} />;
      })}
    </ul>
  );
}

function BulletItem({ text }: { text: string }) {
  return <li className="break-inside-avoid-page">{text}</li>;
}

function isTextWithSkills(item: unknown): item is CvTextWithSkills {
  return typeof item === "object" && item !== null && "text" in item;
}

function BulletItemWithSkills({ item }: { item: CvTextWithSkills }) {
  return (
    <li className="break-inside-avoid-page">
      {item.text.replace(/\.\s*$/, "")}{" "}
      <Skills prefix="&ndash;">{item.skills}</Skills>
    </li>
  );
}

function isPersonalProject(item: unknown): item is CvPersonalProject {
  return typeof item === "object" && item !== null && "name" in item;
}

function PersonalProject({ item }: { item: CvPersonalProject }) {
  const name = item.href ? (
    <ExternalLink href={item.href}>{item.name}</ExternalLink>
  ) : (
    item.name
  );

  const description = item.description
    ? formatDescription(item.description, Boolean(item.skills))
    : null;
  const techStack = item.skills ? (
    <Skills prefix="&ndash;">{item.skills}</Skills>
  ) : null;

  return (
    <li className="break-inside-avoid-page">
      {name} {description} {techStack}
    </li>
  );
}

function formatDescription(description: string, hasSkills: boolean) {
  if (!hasSkills) {
    return description;
  }

  return description.replace(/\.\s*$/, "");
}
