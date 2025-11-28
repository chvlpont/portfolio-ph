import React from "react";
import { Tag as TagType } from "../data/projects";

interface TagProps {
  tag: TagType;
}

export const Tag: React.FC<TagProps> = ({ tag }) => {
  return (
    <span
      className="px-2 py-1 rounded text-xs"
      style={{
        backgroundColor: `${tag.color}1A`,
        color: tag.color,
        border: `1px solid ${tag.color}33`,
      }}
    >
      {tag.label}
    </span>
  );
};

interface TagListProps {
  tags: TagType[];
  size?: "sm" | "md";
}

export const TagList: React.FC<TagListProps> = ({ tags, size = "sm" }) => {
  const sizeClasses = {
    sm: "gap-1.5",
    md: "gap-2",
  };

  return (
    <div className={`flex flex-wrap ${sizeClasses[size]}`}>
      {tags.map((tag) => (
        <Tag key={tag.label} tag={tag} />
      ))}
    </div>
  );
};
