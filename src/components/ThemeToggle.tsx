import useTheme from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";
import IconButton from "./common/IconButton";

type ThemeToggleProps = {
  className?: string;
};

// Theme toggle component
function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton
      Icon={theme === "light" ? Moon : Sun}
      onClick={toggleTheme}
      className={className}
    />
  );
}

export default ThemeToggle;
