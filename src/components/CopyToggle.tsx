import { useState } from "react";
import { Check, Copy } from "lucide-react";
import IconButton from "./common/IconButton";
import { cn } from "@/lib/utils";

type CopyToggleProps = {
  textToCopy: string;
  className?: string;
};

/**
 * Copy toggle component
 * @param textToCopy - Text to copy
 * @param className - Additional class names
 * @returns Copy toggle element
 */
function CopyToggle({ textToCopy, className }: CopyToggleProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          document.execCommand("copy");
          setCopied(true);
        } catch (err) {
          console.error("Fallback copy failed:", err);
        } finally {
          textArea.remove();
        }
      }

      // Reset the icon after 2 seconds
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <IconButton
      Icon={copied ? Check : Copy}
      onClick={handleCopy}
      size={18}
      className={cn("font-bold", className)}
      text={copied ? "Copied!" : "Copy"}
    />
  );
}

export default CopyToggle;
