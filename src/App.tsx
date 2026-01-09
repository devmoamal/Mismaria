import Input from "@/components/common/Input";
import CuneiformText from "@/components/CuneiformText";
import { useEffect, useState } from "react";
import { toCuneiform } from "./utils";
import Navbar from "@/components/layout/Navbar";
import useTheme from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import Footer from "@/components/layout/Footer";
import CopyToggle from "@/components/CopyToggle";
import { cuneiformSchema } from "@/validation";

function App() {
  const [cuneiform, setCuneiform] = useState<string>("");
  const [text, setText] = useState<string>("");

  const { theme } = useTheme();

  // Set Dom background color
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Convert text to cuneiform
  const onChangeText = (value: string) => {
    const text = cuneiformSchema.parse(value);
    setCuneiform(toCuneiform(text));
    setText(text);
  };

  return (
    <div
      className={cn(
        theme,
        "flex flex-col bg-background min-h-screen pt-20 transition-colors"
      )}
    >
      {/* Navbar Component */}
      <Navbar />
      {/* Cuneiform Text Component */}
      <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto px-4 py-8 flex-1 items-center justify-center">
        {cuneiform.length > 0 && (
          <div className="bg-card/30 rounded-3xl p-2 w-full">
            <CuneiformText value={cuneiform} />
            {/* Copy Toggle */}
            <CopyToggle textToCopy={cuneiform} />
          </div>
        )}
        {/* Input component */}
        <Input
          className="text-text-foreground dark:text-text"
          value={text}
          onChange={onChangeText}
        />
      </div>
      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
