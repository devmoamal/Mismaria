import useThemeStore from "@/stores/ThemeStore";

/**
 * Custom hook for theme management
 * @return {theme, setTheme, toggleTheme}
 */
function useTheme() {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return {
    theme,
    setTheme,
    toggleTheme,
  };
}

export default useTheme;
