// src/components/ThemeToggle.tsx
'use client'
import { useTheme } from "@/components/theme-provider";
import { Button } from "./ui/button";

const ThemeToggle = () => {
  const { theme, colorTheme, setTheme, setColorTheme } = useTheme();

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
  };

  const handleColorThemeChange = (newColorTheme: 'Orange' | 'Blue' | 'Green' | 'Rose' | 'Zinc') => {
    setColorTheme(newColorTheme);
  };

  return (
    <>
      <div className="flex flex-row flex-wrap gap-4 mt-4">
        <Button variant={'outline'} className={`${colorTheme === 'Blue' ? 'border border-foreground' : null}`} onClick={() => handleColorThemeChange('Blue')}>Blue</Button>
        <Button variant={'outline'} className={`${colorTheme === 'Orange' ? 'border border-foreground' : null}`} onClick={() => handleColorThemeChange('Orange')}>Orange</Button>
        <Button variant={'outline'} className={`${colorTheme === 'Green' ? 'border border-foreground' : null}`} onClick={() => handleColorThemeChange('Green')}>Green</Button>
        <Button variant={'outline'} className={`${colorTheme === 'Rose' ? 'border border-foreground' : null}`} onClick={() => handleColorThemeChange('Rose')}>Rose</Button>
        <Button variant={'outline'} className={`${colorTheme === 'Zinc' ? 'border border-foreground' : null}`} onClick={() => handleColorThemeChange('Zinc')}>Zinc</Button>
      </div>
    </>
  );
};

export default ThemeToggle;
