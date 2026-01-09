import { cn } from "@/lib/utils";

type InputProps = {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
};

/**
 * Input component
 * @param value - Input value
 * @param onChange - Input change handler
 * @param className - Additional class names
 * @returns Input element
 */
function Input({ value, onChange, className }: InputProps) {
  return (
    <input
      className={cn(
        "bg-card text-center text-2xl font-bold text-text-foreground outline-none focus:ring-2 focus:ring-secondary dark:focus:ring-white/50 rounded-3xl px-4 py-3 w-full transition-all",
        className
      )}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange?.(e.target.value)
      }
      type="text"
      placeholder="Write something ..."
    />
  );
}

export default Input;
