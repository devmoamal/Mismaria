import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";
import ClickableText from "../common/ClickableText";
import IconButton from "../common/IconButton";
import { Github, SendIcon } from "lucide-react";

type NavbarProps = {
  className?: string;
};

/** Navbar component */
function Navbar({ className }: NavbarProps) {
  return (
    <nav
      className={cn("fixed top-0 z-50 flex w-full justify-center", className)}
    >
      <div className="flex items-center justify-between w-full max-w-4xl bg-card/30 px-4 py-2 mx-4 mt-4 rounded-2xl">
        <div>
          <ClickableText
            onClick={() => window.open("https://github.com/devmoamal/Mismaria")}
          >
            𒌋𒀀
          </ClickableText>
        </div>
        <div className="flex items-center gap-2">
          <IconButton
            Icon={SendIcon}
            onClick={() => window.open("https://t.me/devmoamal")}
          />
          <IconButton
            Icon={Github}
            onClick={() => window.open("https://github.com/devmoamal/Mismaria")}
          />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
