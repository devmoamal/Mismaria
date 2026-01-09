import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type IconButtonProps = {
  Icon: LucideIcon;
  text?: string;
  onClick?: () => void;
  size?: number;
  className?: string;
};

/**
 * IconButton component
 * @param Icon - Icon component
 * @param text - Button text
 * @param onClick - Click handler
 * @param size - Icon size
 * @param className - Additional class names
 * @returns IconButton element
 */
function IconButton({
  className,
  Icon,
  text,
  onClick,
  size = 24,
}: IconButtonProps) {
  return (
    <div
      className={cn(
        "text-text font-bold flex gap-2 items-center justify-center rounded-full hover:bg-primary/10 p-2 cursor-pointer transition-colors",
        className
      )}
      onClick={onClick}
    >
      {text}
      <Icon size={size} />
    </div>
  );
}

export default IconButton;
