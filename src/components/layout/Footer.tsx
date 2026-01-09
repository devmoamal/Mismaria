import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import ClickableText from "../common/ClickableText";

type FooterProps = {
  className?: string;
};

/** Footer component */
function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "flex items-center gap-2 w-full font-mono justify-center mb-4 text-text text-xs",
        className
      )}
    >
      CREATED WITH
      <span>
        <Heart fill="currentColor" size={16} />
      </span>
      BY
      <ClickableText
        onClick={() => window.open("https://github.com/devmoamal")}
      >
        DEV. MOAMAL
      </ClickableText>
    </footer>
  );
}

export default Footer;
