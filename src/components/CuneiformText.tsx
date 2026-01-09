import { cn } from "@/lib/utils";

type CuneiformTextProps = {
  value: string;
  className?: string;
};

/**
 * Cuneiform text component
 * @param value - Cuneiform text
 * @param className - Additional class names
 * @returns Cuneiform text element
 */
function CuneiformText({ value = "", className }: CuneiformTextProps) {
  return (
    <p
      className={cn(
        "text-text w-full wrap-break-word text-center text-4xl leading-relaxed font-cuneiform",
        className
      )}
    >
      {value}
    </p>
  );
}

export default CuneiformText;
