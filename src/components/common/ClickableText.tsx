import { cn } from "@/lib/utils";

type ClickableTextProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

/**
 * Clickable text component
 * @param onClick - Click handler
 * @param className - Additional class names
 * @returns Clickable text element
 */

function ClickableText({ onClick, className, children }: ClickableTextProps) {
  return (
    <span
      className={cn(
        "text-text font-bold cursor-pointer hover:text-text/50 transition-colors",
        className
      )}
      onClick={onClick}
    >
      {children}
    </span>
  );
}

export default ClickableText;
