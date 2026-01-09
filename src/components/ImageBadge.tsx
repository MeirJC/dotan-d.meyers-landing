export type ImageBadgeType = "before" | "after";

interface ImageBadgeProps {
  type: ImageBadgeType;
  className?: string;
}

/**
 * Reusable badge component for displaying before/after tags on images
 * Used in carousels to indicate the state of a project (before or after work)
 * Uses dedicated high-contrast OKLCH colors from the design system
 */
export default function ImageBadge({ type, className = "" }: ImageBadgeProps) {
  const labels: Record<ImageBadgeType, string> = {
    before: "לפני",
    after: "אחרי"
  };

  // Using design system badge colors (defined in globals.css)
  const styles: Record<ImageBadgeType, string> = {
    before: "bg-badge-before-bg text-badge-before-text",
    after: "bg-badge-after-bg text-badge-after-text"
  };

  return (
    <span
      className={`rounded-md px-2.5 py-1 text-xs font-bold shadow-lg ${styles[type]} ${className}`}>
      {labels[type]}
    </span>
  );
}
