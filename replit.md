# Development Guidelines & Context

**Role**: You are an expert React Native developer specializing in Expo, Tailwind CSS (NativeWind), and HeroUI Native. You write clean, maintainable, and performant code.

## 1. Tech Stack & Core Libraries

- **Framework**: React Native (Expo SDK 54)
- **UI Library**: [HeroUI Native](https://github.com/heroui-inc/heroui-native)
- **Styling**: Tailwind CSS v4 (via `uniwind` / `nativewind`)
- **Routing**: Expo Router (File-based routing in `src/app`)
- **Icons**: `@expo/vector-icons` (wrapped with `withUniwind`)
- **Fonts**: `@expo-google-fonts/inter`
- **Animation**: `react-native-reanimated`

## 2. Project Structure & Naming Conventions

### **CRITICAL: File Naming**

- **ALL FILES MUST USE `kebab-case`**.
  - ✅ `src/components/my-component.tsx`
  - ❌ `src/components/MyComponent.tsx`
- **Directories**: Use `kebab-case` (e.g., `src/components/showcases`).
- **Routes**: Follow Expo Router conventions (e.g., `_layout.tsx`, `index.tsx`, `[id].tsx`).

### Component Naming

- **Components**: Use `PascalCase` (e.g., `Text`, `HomeCard`).
- **Exports**: Use **Named Exports** for reusable components (`export const MyComponent = ...`). Use **Default Exports** for Pages/Screens (`export default function Screen() ...`).

### Directory Organization

- `src/app`: Application routes/screens only.
- `src/components`: Shared, reusable UI components.
- `src/contexts`: React Context providers.
- `src/hooks`: Custom React hooks.
- `themes`: Theme definition CSS files.

### Import Aliases

- **Use `@/*` for all src imports**: The project is configured with path aliases in `tsconfig.json`.
- **Always prefer absolute imports** over relative imports for better maintainability.

```tsx
// ✅ Correct
import { Screen } from "@/components/screen";
import { useAppTheme } from "@/contexts/app-theme-context";
import { useSafeAreaInsetsStyle } from "@/hooks/use-safe-area-insets-style";

// ❌ Avoid (unless necessary for same-directory imports)
import { Screen } from "../../components/screen";
```

## 3. Clean Code Principles

### Single Responsibility Principle (SRP)

- Break complex UIs into smaller, focused components.
- Example: Instead of a massive `ProfileScreen`, create `ProfileHeader`, `ProfileStats`, and `ProfileSettings` components.

### Don't Repeat Yourself (DRY)

- Extract repeated UI patterns into `src/components`.
- **ALWAYS** use `Text` component instead of React Native's `Text` for consistent typography and theming.

### Text Component

**CRITICAL: Use `Text` instead of React Native `Text`**

The `Text` component (`src/components/text.tsx`) is a thin wrapper around React Native's `Text` that provides:

- Semantic color theming (`text-foreground` by default)
- Consistent base styling (`text-base`, `font-normal`)
- Full Tailwind customization via `className`

```tsx
import { Text } from "@/components/text";

// ✅ Correct: Use Text
<Text className="text-xl font-bold">Hello</Text>
<Text className="text-muted text-sm">Subtitle</Text>
<Text className="text-danger">Error message</Text>

// ❌ Incorrect: Don't use raw Text
import { Text } from "react-native";
<Text style={{ color: '#000' }}>Hello</Text>
```

**Note**: The component accepts all standard React Native `TextProps`, so you can use `numberOfLines`, `ellipsizeMode`, `onPress`, etc.

### Imports

- **Order**:
  1.  React / React Native
  2.  Third-party libraries (Expo, HeroUI, etc.)
  3.  Local imports (Components, Contexts, Utils)
- **Aliases**: Use absolute imports if configured, otherwise keep relative imports clean.

## 4. Component Implementation Rules

### **CRITICAL: No `forwardRef`**

- This project uses `reactCompiler: true`. **NEVER** use `forwardRef`.
- Pass refs directly as props if needed (e.g., `ref={ref}`).

### **CRITICAL: Inline Types Only**

- **DO NOT** use `interface`. Use `type` or inline object types.
- Define props inline for clarity and locality.

### **CRITICAL: No Arrow Functions for Components**

- **DO NOT** use arrow functions for component definitions.
- Use regular `function` declarations for all components.
- **Exception**: Arrow functions are allowed for helper functions, callbacks, and event handlers _inside_ components.

**Correct Pattern:**

```tsx
import type { ReactNode } from "react";
import { View } from "react-native";
import { cn } from "heroui-native";

// ✅ Correct: Regular function
export function MyComponent({
  title,
  children,
  className,
}: {
  title: string;
  children?: ReactNode;
  className?: string;
}) {
  // ✅ Correct: Arrow functions inside components are fine
  const handlePress = () => {
    console.log(title);
  };

  return <View className={cn("p-4", className)}>{/* ... */}</View>;
}

// ❌ Incorrect: Arrow function for component
export const MyComponent = ({ title }: { title: string }) => {
  return <View>{title}</View>;
};
```

## 5. Styling Best Practices (Tailwind & HeroUI)

### Class Merging

- **ALWAYS** accept a `className` prop.
- **ALWAYS** use `cn()` to merge default classes with the passed `className`.

### Semantic Colors

- **NEVER** hardcode hex values (e.g., `#FFFFFF`, `#000000`).
- **ALWAYS** use semantic theme colors defined in `themes/*.css`:
  - `bg-background`, `bg-surface`, `bg-content1`
  - `text-foreground`, `text-muted`, `text-default-500`
  - `border-divider`, `border-default`
  - `bg-primary`, `bg-secondary`, `bg-danger`
- **Opacity**: Use Tailwind opacity modifiers for subtle effects (e.g., `bg-black/10`, `text-foreground/60`).

### Safe Area Handling

- Use `useSafeAreaInsets` hook.
- Apply padding via `style` prop for precise control, often adding extra spacing.

```tsx
const insets = useSafeAreaInsets();
<View style={{ paddingTop: insets.top + 12, paddingBottom: insets.bottom + 12 }}>
```

## 6. HeroUI Component Patterns & Best Practices

**Use HeroUI components for EVERYTHING possible.**
For detailed usage, props, and examples of all available components, refer to:
👉 **[HeroUI Component Reference](docs/heroui-reference.md)**

This reference file contains the complete documentation for:
Accordion, Avatar, Button, Card, Checkbox, Chip, Dialog, Divider, Error View, Form Field, Popover, Pressable Feedback, Radio Group, Scroll Shadow, Select, Skeleton, Skeleton Group, Spinner, Surface, Switch, Tabs, Text Field.

### Card

The primary container for grouped content.

- **Structure**: `Card` > `Header` > `Body` > `Footer`.
- **Styling**: Use `variant="tertiary"` for filled cards or `className="border-0"` to remove borders when using background colors.

```tsx
<Card className="border-0 bg-surface-tertiary rounded-2xl p-4">
  <Card.Header>
    <Chip>
      <Chip.Label>New</Chip.Label>
    </Chip>
  </Card.Header>
  <Card.Body>
    <Card.Title>Title</Card.Title>
    <Card.Description>Description</Card.Description>
  </Card.Body>
</Card>
```

### Button

- **Icon Only**: Use `isIconOnly` prop.
- **Animation**: Use `animation={{ highlight: 'disabled' }}` for specific interaction feels.
- **Styling**: Use `rounded-full` for pill buttons.

```tsx
<Button isIconOnly size="sm" className="rounded-full bg-black/10">
  <StyledIcon name="close" />
</Button>
```

### Avatar

Use the compound component pattern.

```tsx
<Avatar className="size-10 bg-primary">
  <Avatar.Image source={{ uri: "..." }} />
  <Avatar.Fallback>
    <Text className="text-white font-bold">AB</Text>
  </Avatar.Fallback>
</Avatar>
```

### Animations

Use `react-native-reanimated` layout animations (`entering`, `exiting`) for smooth entry.

```tsx
import Animated, { FadeInDown } from "react-native-reanimated";
const AnimatedView = Animated.createAnimatedComponent(View);

<AnimatedView entering={FadeInDown.delay(200).springify()}>
  {/* Content */}
</AnimatedView>;
```

## 7. Screen Component

**ALWAYS use the `Screen` component for all screens unless there is a compelling reason not to.**

The `Screen` component (`src/components/screen.tsx`) provides consistent layout, safe area handling, keyboard management, and scrolling behavior across the app.

### Presets

The Screen component supports three presets:

- **`fixed`**: Non-scrolling screen with content justified to the end (bottom). Use for simple screens with minimal content.
- **`scroll`**: Always scrollable screen. Use for content that may exceed screen height.
- **`auto`** (default): Automatically enables/disables scrolling based on content size. Use when content size varies.

### Safe Area Edges

Control which edges should respect safe area insets using the `safeAreaEdges` prop:

```tsx
// Apply safe area to all edges (default behavior if not specified)
<Screen safeAreaEdges={['top', 'bottom', 'left', 'right']}>

// Only top and bottom (common for screens with custom navigation)
<Screen safeAreaEdges={['top', 'bottom']}>

// No safe area (for full-screen experiences)
<Screen>
```

### Styling

- **Container**: Use `className` for the outer container styling
- **Content**: Use `contentContainerStyle` for inner content layout
- **Background**: Use `backgroundColor` prop or `className="bg-*"`

### Common Patterns

**Basic scrollable screen:**

```tsx
export default function MyScreen() {
  return (
    <Screen preset="scroll" safeAreaEdges={["top", "bottom"]}>
      <View className="px-6 gap-4">{/* Content */}</View>
    </Screen>
  );
}
```

**Fixed screen with bottom content:**

```tsx
export default function OnboardingScreen() {
  return (
    <Screen preset="fixed" safeAreaEdges={["top", "bottom"]}>
      <View className="flex-1 justify-between px-6">
        <View>{/* Top content */}</View>
        <View>{/* Bottom CTA */}</View>
      </View>
    </Screen>
  );
}
```

**Auto-scrolling with custom keyboard behavior:**

```tsx
export default function FormScreen() {
  return (
    <Screen
      preset="auto"
      keyboardShouldPersistTaps="handled"
      keyboardBottomOffset={100}
    >
      {/* Form fields */}
    </Screen>
  );
}
```

## 8. Theme System

The project includes a sophisticated multi-theme system built on Uniwind and CSS variables.

### Available Themes

The project ships with 6 built-in themes:

- `light` / `dark` - Default alpha theme
- `lavender-light` / `lavender-dark` - Purple-tinted theme
- `mint-light` / `mint-dark` - Green-tinted theme
- `sky-light` / `sky-dark` - Blue-tinted theme

### Theme Structure

Each theme file (`themes/*.css`) defines semantic color tokens using CSS variables:

```css
@layer theme {
  :root {
    @variant theme-name-light {
      --background: /* Base background */
      --foreground: /* Base text color */
      --surface: /* Card/component backgrounds */
      --overlay: /* Modal/popover backgrounds */
      --muted: /* Subtle text */
      --primary: /* Brand color */
      --danger: /* Error states */
      /* ... more tokens */
    }
  }
}
```

### Using Themes

Access and control themes via the `useAppTheme()` hook:

```tsx
import { useAppTheme } from "@/contexts/app-theme-context";

const { currentTheme, isLight, isDark, setTheme, toggleTheme } = useAppTheme();

// Switch to a specific theme
setTheme("lavender-dark");

// Toggle between light/dark variants
toggleTheme();
```

### Adding New Themes

To add a custom theme:

1. **Create theme CSS file** in `themes/my-theme.css`:

```css
@layer theme {
  :root {
    @variant my-theme-light {
      /* Define all required CSS variables */
    }
    @variant my-theme-dark {
      /* Define all required CSS variables */
    }
  }
}
```

2. **Import in `global.css`**:

```css
@import "./themes/my-theme.css";
```

3. **Register in `metro.config.js`**:

```js
extraThemes: [
  "my-theme-light",
  "my-theme-dark",
  // ... other themes
];
```

4. **Update `AppThemeContext`** to include new theme names in the `ThemeName` type and `toggleTheme()` switch statement.

### State Management

- **Local State**: Use `useState` for simple, component-local UI state.
- **Global State**: Use React Context (e.g., `AppThemeContext`).
- **Theme State**: Managed by `AppThemeProvider` wrapping the app.

## 9. Anti-Patterns (Do Not Do)

### File & Code Conventions

- ❌ **Do not** use `PascalCase` for filenames.
- ❌ **Do not** use `StyleSheet.create` unless absolutely necessary.
- ❌ **Do not** use `React.FC` or `FunctionComponent` types.
- ❌ **Do not** use `any`. Always type your props and variables.
- ❌ **Do not** use `interface`. Use `type` or inline object types.
- ❌ **Do not** use `forwardRef` (React Compiler is enabled).
- ❌ **Do not** use arrow functions for component definitions. Use `function` instead.
- ❌ **Do not** use `.tsx` extension for files without JSX. Use `.ts` for pure TypeScript files.
- ❌ **Do not** use default exports for reusable components. Only use for screens/pages.
- ❌ **Do not** use React Native's `Text` component directly. Use `Text` from `@/components/text`.

### Styling & Theming

- ❌ **Do not** hardcode hex colors (e.g., `#FFFFFF`, `#000000`). Use semantic tokens.
- ❌ **Do not** hardcode theme-specific values. Always use CSS variables.
- ❌ **Do not** skip `className` prop in reusable components.
- ❌ **Do not** forget to use `cn()` when merging classes.

### Configuration & Setup

- ❌ **Do not** modify `metro.config.js` theme list without creating corresponding CSS files in `themes/`.
- ❌ **Do not** add themes to `metro.config.js` without importing them in `global.css`.
- ❌ **Do not** import `global.css` in multiple places. It should only be imported once in `src/app/_layout.tsx`.
- ❌ **Do not** skip or reorder the provider hierarchy in `_layout.tsx`:
  ```tsx
  GestureHandlerRootView >
    KeyboardProvider >
    AppThemeProvider >
    HeroUINativeProvider;
  ```
- ❌ **Do not** render content before fonts are loaded. Always check `useFonts()` return value.

### Imports

- ❌ **Do not** use relative imports for `src/` files. Use `@/*` aliases instead.
