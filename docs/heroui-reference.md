# HeroUI Native Component Reference


## accordion

# Accordion

A collapsible component that allows users to expand and collapse content sections with animated transitions.

## Imports

Note: Before importing this component, ensure you have completed the setup as per the [Quick Start guide](../../../README.md).

```tsx
import { Accordion } from 'heroui-native';
```

## Usage

### Basic Usage

The Accordion component uses compound parts to create expandable content sections.

```tsx
<Accordion selectionMode="single">
  <Accordion.Item value="1">
    <Accordion.Trigger>
      ...
      <Accordion.Indicator />
    </Accordion.Trigger>
    <Accordion.Content>...</Accordion.Content>
  </Accordion.Item>
</Accordion>
```

### Single Selection Mode

Allow only one item to be expanded at a time.

```tsx
<Accordion selectionMode="single" defaultValue="2">
  <Accordion.Item value="1">
    <Accordion.Trigger>...</Accordion.Trigger>
    <Accordion.Content>...</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="2">
    <Accordion.Trigger>...</Accordion.Trigger>
    <Accordion.Content>...</Accordion.Content>
  </Accordion.Item>
</Accordion>
```

### Multiple Selection Mode

Allow multiple items to be expanded simultaneously.

```tsx
<Accordion selectionMode="multiple" defaultValue={['1', '3']}>
  <Accordion.Item value="1">
    <Accordion.Trigger>...</Accordion.Trigger>
    <Accordion.Content>...</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="2">
    <Accordion.Trigger>...</Accordion.Trigger>
    <Accordion.Content>...</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="3">
    <Accordion.Trigger>...</Accordion.Trigger>
    <Accordion.Content>...</Accordion.Content>
  </Accordion.Item>
</Accordion>
```

### Surface Variant

Apply a surface container style to the accordion.

```tsx
<Accordion selectionMode="single" variant="surface">
  <Accordion.Item value="1">
    <Accordion.Trigger>
      ...
      <Accordion.Indicator />
    </Accordion.Trigger>
    <Accordion.Content>...</Accordion.Content>
  </Accordion.Item>
</Accordion>
```

### Custom Indicator

Replace the default chevron indicator with custom content.

```tsx
<Accordion selectionMode="single">
  <Accordion.Item value="1">
    <Accordion.Trigger>
      ...
      <Accordion.Indicator>
        <CustomIndicator />
      </Accordion.Indicator>
    </Accordion.Trigger>
    <Accordion.Content>...</Accordion.Content>
  </Accordion.Item>
</Accordion>
```

### Without Dividers

Hide the dividers between accordion items.

```tsx
<Accordion selectionMode="single" isDividerVisible={false}>
  <Accordion.Item value="1">
    <Accordion.Trigger>...</Accordion.Trigger>
    <Accordion.Content>...</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="2">
    <Accordion.Trigger>...</Accordion.Trigger>
    <Accordion.Content>...</Accordion.Content>
  </Accordion.Item>
</Accordion>
```

## Example

```tsx
import { Accordion, useThemeColor } from 'heroui-native';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

export default function AccordionExample() {
  const themeColorMuted = useThemeColor('muted');

  const accordionData = [
    {
      id: '1',
      title: 'How do I place an order?',
      icon: <Ionicons name="bag-outline" size={16} color={themeColorMuted} />,
      content:
        'Lorem ipsum dolor sit amet consectetur. Netus nunc mauris risus consequat. Libero placerat dignissim consectetur nisl.',
    },
    {
      id: '2',
      title: 'What payment methods do you accept?',
      icon: <Ionicons name="card-outline" size={16} color={themeColorMuted} />,
      content:
        'Lorem ipsum dolor sit amet consectetur. Netus nunc mauris risus consequat. Libero placerat dignissim consectetur nisl.',
    },
    {
      id: '3',
      title: 'How much does shipping cost?',
      icon: <Ionicons name="cube-outline" size={16} color={themeColorMuted} />,
      content:
        'Lorem ipsum dolor sit amet consectetur. Netus nunc mauris risus consequat. Libero placerat dignissim consectetur nisl.',
    },
  ];

  return (
    <Accordion selectionMode="single" variant="surface" defaultValue="2">
      {accordionData.map((item) => (
        <Accordion.Item key={item.id} value={item.id}>
          <Accordion.Trigger>
            <View className="flex-row items-center flex-1 gap-3">
              {item.icon}
              <Text className="text-foreground text-base flex-1">
                {item.title}
              </Text>
            </View>
            <Accordion.Indicator />
          </Accordion.Trigger>
          <Accordion.Content>
            <Text className="text-muted text-base/relaxed px-[25px]">
              {item.content}
            </Text>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
```

## Anatomy

```tsx
<Accordion>
  <Accordion.Item>
    <Accordion.Trigger>
      ...
      <Accordion.Indicator>...</Accordion.Indicator>
    </Accordion.Trigger>
    <Accordion.Content>...</Accordion.Content>
  </Accordion.Item>
</Accordion>
```

- **Accordion**: Main container that manages the accordion state and behavior. Controls expansion/collapse of items, supports single or multiple selection modes, and provides variant styling (default or surface).
- **Accordion.Item**: Container for individual accordion items. Wraps the trigger and content, managing the expanded state for each item.
- **Accordion.Trigger**: Interactive element that toggles item expansion. Built on Header and Trigger primitives, includes press feedback animation.
- **Accordion.Indicator**: Optional visual indicator showing expansion state. Defaults to an animated chevron icon that rotates based on item state.
- **Accordion.Content**: Container for expandable content. Animated with layout transitions for smooth expand/collapse effects.

## API Reference

### Accordion

| prop                    | type                                               | default     | description                                                       |
| ----------------------- | -------------------------------------------------- | ----------- | ----------------------------------------------------------------- |
| `children`              | `React.ReactNode`                                  | -           | Children elements to be rendered inside the accordion             |
| `selectionMode`         | `'single' \| 'multiple'`                           | -           | Whether the accordion allows single or multiple expanded items    |
| `variant`               | `'default' \| 'surface'`                           | `'default'` | Visual variant of the accordion                                   |
| `isDividerVisible`      | `boolean`                                          | `true`      | Whether to display a divider at the bottom of each accordion item |
| `defaultValue`          | `string \| string[] \| undefined`                  | -           | Default expanded item(s) in uncontrolled mode                     |
| `value`                 | `string \| string[] \| undefined`                  | -           | Controlled expanded item(s)                                       |
| `isDisabled`            | `boolean`                                          | -           | Whether all accordion items are disabled                          |
| `isCollapsible`         | `boolean`                                          | `true`      | Whether expanded items can be collapsed                           |
| `className`             | `string`                                           | -           | Additional CSS classes for the container                          |
| `classNames`            | `ElementSlots<RootSlots>`                          | -           | Additional CSS classes for the slots                              |
| `onValueChange`         | `(value: string \| string[] \| undefined) => void` | -           | Callback when expanded items change                               |
| `...Animated.ViewProps` | `Animated.ViewProps`                               | -           | All Reanimated Animated.View props are supported                  |

#### ElementSlots<RootSlots>

| prop        | type     | description                                     |
| ----------- | -------- | ----------------------------------------------- |
| `container` | `string` | Custom class name for the accordion container   |
| `divider`   | `string` | Custom class name for the divider between items |

### Accordion.Item

| prop                    | type                 | default | description                                                |
| ----------------------- | -------------------- | ------- | ---------------------------------------------------------- |
| `children`              | `React.ReactNode`    | -       | Children elements to be rendered inside the accordion item |
| `value`                 | `string`             | -       | Unique value to identify this item                         |
| `isDisabled`            | `boolean`            | -       | Whether this specific item is disabled                     |
| `className`             | `string`             | -       | Additional CSS classes                                     |
| `...Animated.ViewProps` | `Animated.ViewProps` | -       | All Reanimated Animated.View props are supported           |

### Accordion.Trigger

| prop                    | type               | default | description                                             |
| ----------------------- | ------------------ | ------- | ------------------------------------------------------- |
| `children`              | `React.ReactNode`  | -       | Children elements to be rendered inside the trigger     |
| `className`             | `string`           | -       | Additional CSS classes                                  |
| `highlightColor`        | `string`           | -       | Custom highlight color for press feedback               |
| `highlightOpacity`      | `number`           | `0.5`   | Custom highlight opacity for press feedback             |
| `highlightTimingConfig` | `WithTimingConfig` | -       | Reanimated timing configuration for highlight animation |
| `isHighlightVisible`    | `boolean`          | `true`  | Whether to show the highlight on press                  |
| `isDisabled`            | `boolean`          | -       | Whether the trigger is disabled                         |
| `...PressableProps`     | `PressableProps`   | -       | All standard React Native Pressable props are supported |

### Accordion.Indicator

| prop                    | type                          | default | description                                                            |
| ----------------------- | ----------------------------- | ------- | ---------------------------------------------------------------------- |
| `children`              | `React.ReactNode`             | -       | Custom indicator content, if not provided defaults to animated chevron |
| `className`             | `string`                      | -       | Additional CSS classes                                                 |
| `iconProps`             | `AccordionIndicatorIconProps` | -       | Icon configuration                                                     |
| `springConfig`          | `WithSpringConfig`            | -       | Spring configuration for indicator animation                           |
| `...Animated.ViewProps` | `Animated.ViewProps`          | -       | All Reanimated Animated.View props are supported                       |

#### AccordionIndicatorIconProps

| prop    | type     | default      | description       |
| ------- | -------- | ------------ | ----------------- |
| `size`  | `number` | `16`         | Size of the icon  |
| `color` | `string` | `foreground` | Color of the icon |

### Accordion.Content

| prop           | type                                                                                | default | description                                         |
| -------------- | ----------------------------------------------------------------------------------- | ------- | --------------------------------------------------- |
| `children`     | `React.ReactNode`                                                                   | -       | Children elements to be rendered inside the content |
| `className`    | `string`                                                                            | -       | Additional CSS classes                              |
| `entering`     | `BaseAnimationBuilder \| typeof BaseAnimationBuilder \| EntryExitAnimationFunction` | -       | Custom reanimated entering animation for content    |
| `exiting`      | `BaseAnimationBuilder \| typeof BaseAnimationBuilder \| EntryExitAnimationFunction` | -       | Custom reanimated exiting animation for content     |
| `...ViewProps` | `ViewProps`                                                                         | -       | All standard React Native View props are supported  |

## Special Note

When using the Accordion component alongside other components in the same view, you should import and apply `AccordionLayoutTransition` to those components to ensure smooth and consistent layout animations across the entire screen.

```jsx
import { Accordion, AccordionLayoutTransition } from 'heroui-native';
import Animated from 'react-native-reanimated';

<Animated.ScrollView layout={AccordionLayoutTransition}>
  <Animated.View layout={AccordionLayoutTransition}>
    {/* Other content */}
  </Animated.View>

  <Accordion>{/* Accordion items */}</Accordion>
</Animated.ScrollView>;
```

This ensures that when the accordion expands or collapses, all components on the screen animate with the same timing and easing, creating a cohesive user experience.

---

## avatar

# Avatar

Displays a user avatar with support for images, text initials, or fallback icons.

## Imports

Note: Before importing this component, ensure you have completed the setup as per the [Quick Start guide](../../../README.md).

```tsx
import { Avatar } from 'heroui-native';
```

## Usage

### Basic Usage

The Avatar component displays a default person icon when no image or text is provided.

```tsx
<Avatar>
  <Avatar.Fallback />
</Avatar>
```

### With Image

Display an avatar image with automatic fallback handling.

```tsx
<Avatar>
  <Avatar.Image source={{ uri: 'https://example.com/avatar.jpg' }} />
  <Avatar.Fallback>JD</Avatar.Fallback>
</Avatar>
```

### With Text Initials

Show text initials as the avatar content.

```tsx
<Avatar>
  <Avatar.Fallback>AB</Avatar.Fallback>
</Avatar>
```

### With Custom Icon

Provide a custom icon as fallback content.

```tsx
<Avatar>
  <Avatar.Fallback>
    <Ionicons name="person" size={18} />
  </Avatar.Fallback>
</Avatar>
```

### Sizes

Control the avatar size with the size prop.

```tsx
<Avatar size="sm">
  <Avatar.Fallback />
</Avatar>

<Avatar size="md">
  <Avatar.Fallback />
</Avatar>

<Avatar size="lg">
  <Avatar.Fallback />
</Avatar>
```

### Variants

Choose between different visual styles with the `variant` prop.

```tsx
<Avatar variant="default">
  <Avatar.Fallback>DF</Avatar.Fallback>
</Avatar>

<Avatar variant="soft">
  <Avatar.Fallback>SF</Avatar.Fallback>
</Avatar>
```

### Colors

Apply different color variants to the avatar.

```tsx
<Avatar color="default">
  <Avatar.Fallback>DF</Avatar.Fallback>
</Avatar>

<Avatar color="accent">
  <Avatar.Fallback>AC</Avatar.Fallback>
</Avatar>

<Avatar color="success">
  <Avatar.Fallback>SC</Avatar.Fallback>
</Avatar>

<Avatar color="warning">
  <Avatar.Fallback>WR</Avatar.Fallback>
</Avatar>

<Avatar color="danger">
  <Avatar.Fallback>DG</Avatar.Fallback>
</Avatar>
```

### Delayed Fallback

Show fallback after a delay to prevent flashing during image load.

```tsx
<Avatar>
  <Avatar.Image source={{ uri: imageUrl }} />
  <Avatar.Fallback delayMs={600}>NA</Avatar.Fallback>
</Avatar>
```

### Custom Image Component

Use a custom image component with the asChild prop.

```tsx
import { Image } from 'expo-image';

<Avatar>
  <Avatar.Image source={{ uri: imageUrl }} asChild>
    <Image style={{ width: '100%', height: '100%' }} contentFit="cover" />
  </Avatar.Image>
  <Avatar.Fallback>EI</Avatar.Fallback>
</Avatar>;
```

## Example

```tsx
import { Avatar } from 'heroui-native';
import { View } from 'react-native';

export default function AvatarExample() {
  const users = [
    { id: 1, image: 'https://example.com/user1.jpg', name: 'John Doe' },
    { id: 2, image: 'https://example.com/user2.jpg', name: 'Jane Smith' },
    { id: 3, image: 'https://example.com/user3.jpg', name: 'Bob Johnson' },
  ];

  return (
    <View className="flex-row gap-4">
      {users.map((user) => (
        <Avatar key={user.id} size="lg" color="accent">
          <Avatar.Image source={{ uri: user.image }} />
          <Avatar.Fallback>
            {user.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </Avatar.Fallback>
        </Avatar>
      ))}
    </View>
  );
}
```

## Anatomy

```tsx
<Avatar>
  <Avatar.Image />
  <Avatar.Fallback />
</Avatar>
```

- **Avatar**: Main container that manages avatar display state. Provides size and color context to child components.
- **Avatar.Image**: Optional image component that displays the avatar image. Handles loading states and errors automatically with fade-in animation.
- **Avatar.Fallback**: Optional fallback component shown when image fails to load or is unavailable. Displays a default person icon when no children are provided.

## API Reference

### Avatar

| prop           | type                                                          | default     | description                                        |
| -------------- | ------------------------------------------------------------- | ----------- | -------------------------------------------------- |
| `children`     | `React.ReactNode`                                             | -           | Avatar content (Image and/or Fallback components)  |
| `size`         | `'sm' \| 'md' \| 'lg'`                                        | `'md'`      | Size of the avatar                                 |
| `variant`      | `'default' \| 'soft'`                                         | `'default'` | Visual variant of the avatar                       |
| `color`        | `'default' \| 'accent' \| 'success' \| 'warning' \| 'danger'` | `'accent'`  | Color variant of the avatar                        |
| `className`    | `string`                                                      | -           | Additional CSS classes to apply                    |
| `alt`          | `string`                                                      | -           | Alternative text description for accessibility     |
| `...ViewProps` | `ViewProps`                                                   | -           | All standard React Native View props are supported |

### Avatar.Image

Props extend different base types depending on the `asChild` prop value:

- When `asChild={false}` (default): extends `AnimatedProps<ImageProps>` from React Native Reanimated
- When `asChild={true}`: extends primitive image props for custom image components

**Note:** When using `asChild={true}` with custom image components, the `className` prop may not be applied in some cases depending on the custom component's implementation. Ensure your custom component properly handles style props.

| prop                    | type                                                                                                     | default                | description                                                 |
| ----------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------- | ----------------------------------------------------------- |
| `source`                | `ImageSourcePropType`                                                                                    | -                      | Image source (required)                                     |
| `asChild`               | `boolean`                                                                                                | `false`                | Whether to use a custom image component as child            |
| `className`             | `string`                                                                                                 | -                      | Additional CSS classes to apply                             |
| `entering`              | `BaseAnimationBuilder \| typeof BaseAnimationBuilder \| EntryExitAnimationFunction \| AnimationFunction` | `FadeIn.duration(200)` | Reanimated entering animation (only when `asChild={false}`) |
| `onLoadingStatusChange` | `(status: 'loading' \| 'loaded' \| 'error') => void`                                                     | -                      | Callback fired when the loading status changes              |
| `...AnimatedProps`      | `AnimatedProps<ImageProps>` or primitive props                                                           | -                      | Additional props based on `asChild` value                   |

### Avatar.Fallback

| prop                    | type                                                                                                     | default                | description                                               |
| ----------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------- | --------------------------------------------------------- |
| `children`              | `React.ReactNode`                                                                                        | -                      | Fallback content (text, icon, or custom element)          |
| `delayMs`               | `number`                                                                                                 | `0`                    | Delay in milliseconds before showing the fallback         |
| `color`                 | `'default' \| 'accent' \| 'success' \| 'warning' \| 'danger'`                                            | inherited from parent  | Color variant of the fallback                             |
| `className`             | `string`                                                                                                 | -                      | Additional CSS classes for the container                  |
| `classNames`            | `{ container?: string, text?: string }`                                                                  | -                      | Additional CSS classes for different parts                |
| `textProps`             | `TextProps`                                                                                              | -                      | Props to pass to Text component when children is a string |
| `iconProps`             | `PersonIconProps`                                                                                        | -                      | Props to customize the default person icon                |
| `entering`              | `BaseAnimationBuilder \| typeof BaseAnimationBuilder \| EntryExitAnimationFunction \| AnimationFunction` | `FadeIn.duration(200)` | Reanimated entering animation                             |
| `...Animated.ViewProps` | `Animated.ViewProps`                                                                                     | -                      | All Reanimated Animated.View props are supported          |

#### PersonIconProps

| prop    | type     | description                |
| ------- | -------- | -------------------------- |
| `size`  | `number` | Size of the icon in pixels |
| `color` | `string` | Color of the icon          |

---

## button

# Button

Interactive component that triggers an action when pressed.

## Imports

Note: Before importing this component, ensure you have completed the setup as per the [Quick Start guide](../../../README.md).

```tsx
import { Button } from 'heroui-native';
```

## Usage

### Basic Usage

The Button component accepts string children that automatically render as label.

```tsx
<Button>Basic Button</Button>
```

### With Compound Parts

Use Button.Label for explicit control over the label component.

```tsx
<Button>
  <Button.Label>Click me</Button.Label>
</Button>
```

### With Icons

Combine icons with labels for enhanced visual communication.

```tsx
<Button>
  <Icon name="add" size={20} />
  <Button.Label>Add Item</Button.Label>
</Button>

<Button>
  <Button.Label>Download</Button.Label>
  <Icon name="download" size={18} />
</Button>
```

### Icon Only

Create square icon-only buttons using the isIconOnly prop.

```tsx
<Button isIconOnly>
  <Icon name="heart" size={18} />
</Button>
```

### Sizes

Control button dimensions with three size options.

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

### Variants

Choose from six visual variants for different emphasis levels.

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="destructive-soft">Destructive Soft</Button>
```

### Feedback Variants

Choose between highlight and ripple feedback effects for press interactions.

```tsx
{
  /* Highlight feedback (default) */
}
<Button feedbackVariant="highlight">Highlight Effect</Button>;

{
  /* Ripple feedback */
}
<Button feedbackVariant="ripple">Ripple Effect</Button>;

{
  /* Customize ripple animation */
}
<Button
  feedbackVariant="ripple"
  animation={{
    ripple: {
      backgroundColor: { value: '#3b82f6' },
      opacity: { value: [0, 0.3, 0] },
    },
  }}
>
  Custom Ripple
</Button>;
```

### Loading State with Spinner

Transform button to loading state with spinner animation.

```tsx
const themeColorAccentForeground = useThemeColor('accent-foreground');

<Button
  layout={LinearTransition.springify()}
  variant="primary"
  onPress={() => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
    }, 3000);
  }}
  isIconOnly={isDownloading}
  className="self-center"
>
  {isDownloading ? (
    <Spinner entering={FadeIn.delay(50)} color={themeColorAccentForeground} />
  ) : (
    'Download now'
  )}
</Button>;
```

### Custom Background with LinearGradient

Add gradient backgrounds using absolute positioned elements.

```tsx
<Button>
  <LinearGradient
    colors={['#9333ea', '#ec4899']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={StyleSheet.absoluteFill}
  />
  <Button.Label className="text-white font-bold">Gradient</Button.Label>
</Button>
```

## Example

```tsx
import { Button, useThemeColor } from 'heroui-native';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

export default function ButtonExample() {
  const themeColorAccentForeground = useThemeColor('accent-foreground');
  const themeColorAccentSoftForeground = useThemeColor(
    'accent-soft-foreground'
  );
  const themeColorDangerForeground = useThemeColor('danger-foreground');
  const themeColorDefaultForeground = useThemeColor('default-foreground');

  return (
    <View className="gap-4 p-4">
      <Button variant="primary">
        <Ionicons name="add" size={20} color={themeColorAccentForeground} />
        <Button.Label>Add Item</Button.Label>
      </Button>

      <View className="flex-row gap-4">
        <Button size="sm" isIconOnly>
          <Ionicons name="heart" size={16} color={themeColorAccentForeground} />
        </Button>
        <Button size="sm" variant="secondary" isIconOnly>
          <Ionicons
            name="bookmark"
            size={16}
            color={themeColorAccentSoftForeground}
          />
        </Button>
        <Button size="sm" variant="destructive" isIconOnly>
          <Ionicons name="trash" size={16} color={themeColorDangerForeground} />
        </Button>
      </View>

      <Button variant="tertiary">
        <Button.Label>Learn More</Button.Label>
        <Ionicons
          name="chevron-forward"
          size={18}
          color={themeColorDefaultForeground}
        />
      </Button>
    </View>
  );
}
```

## Anatomy

```tsx
<Button>
  <Button.Label>...</Button.Label>
</Button>
```

- **Button**: Main container that handles press interactions, animations, and variants. Renders string children as label or accepts compound components for custom layouts.
- **Button.Label**: Text content of the button. Inherits size and variant styling from parent Button context.

## API Reference

### Button

Button extends all props from [PressableFeedback](../pressable-feedback/pressable-feedback.md) component with additional button-specific props.

| prop         | type                                                                                       | default     | description                                                    |
| ------------ | ------------------------------------------------------------------------------------------ | ----------- | -------------------------------------------------------------- |
| `variant`    | `'primary' \| 'secondary' \| 'tertiary' \| 'ghost' \| 'destructive' \| 'destructive-soft'` | `'primary'` | Visual variant of the button                                   |
| `size`       | `'sm' \| 'md' \| 'lg'`                                                                     | `'md'`      | Size of the button                                             |
| `isIconOnly` | `boolean`                                                                                  | `false`     | Whether the button displays an icon only (square aspect ratio) |

For inherited props including `feedbackVariant`, `feedbackPosition`, `animation`, `isDisabled`, `className`, `children`, and all Pressable props, see [PressableFeedback API Reference](../pressable-feedback/pressable-feedback.md#api-reference).

### Button.Label

| prop           | type              | default | description                           |
| -------------- | ----------------- | ------- | ------------------------------------- |
| `children`     | `React.ReactNode` | -       | Content to be rendered as label       |
| `className`    | `string`          | -       | Additional CSS classes                |
| `...TextProps` | `TextProps`       | -       | All standard Text props are supported |

---

## card

# Card

Displays a card container with flexible layout sections for structured content.

## Imports

Note: Before importing this component, ensure you have completed the setup as per the [Quick Start guide](../../../README.md).

```tsx
import { Card } from 'heroui-native';
```

## Usage

### Basic Usage

The Card component creates a container with built-in sections for organized content.

```tsx
<Card>
  <Card.Body>...</Card.Body>
</Card>
```

### With Title and Description

Combine title and description components for structured text content.

```tsx
<Card>
  <Card.Body>
    <Card.Title>...</Card.Title>
    <Card.Description>...</Card.Description>
  </Card.Body>
</Card>
```

### With Header and Footer

Add header and footer sections for icons, badges, or actions.

```tsx
<Card>
  <Card.Header>...</Card.Header>
  <Card.Body>...</Card.Body>
  <Card.Footer>...</Card.Footer>
</Card>
```

### Variants

Control the card's background appearance using different variants.

```tsx
<Card variant="default">...</Card>
<Card variant="secondary">...</Card>
<Card variant="tertiary">...</Card>
<Card variant="quaternary">...</Card>
<Card variant="transparent">...</Card>
```

### Horizontal Layout

Create horizontal cards by using flex-row styling.

```tsx
<Card className="flex-row gap-4">
  <Image source={...} className="size-24 rounded-lg" />
</Card>
```

### Background Image

Use an image as an absolute positioned background.

```tsx
<Card>
  <Image source={...} className="absolute inset-0" />
  <View className="gap-4">...</View>
</Card>
```

## Example

```tsx
import { Button, Card } from 'heroui-native';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

export default function CardExample() {
  return (
    <Card>
      <View className="gap-4">
        <Card.Body className="mb-4">
          <View className="gap-1 mb-2">
            <Card.Title className="text-pink-500">$450</Card.Title>
            <Card.Title>Living room Sofa • Collection 2025</Card.Title>
          </View>
          <Card.Description>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces.
          </Card.Description>
        </Card.Body>
        <Card.Footer className="gap-3">
          <Button variant="primary">Buy now</Button>
          <Button variant="ghost">
            <Button.Label>Add to cart</Button.Label>
            <Ionicons name="bag-outline" size={16} />
          </Button>
        </Card.Footer>
      </View>
    </Card>
  );
}
```

## Anatomy

```tsx
<Card>
  <Card.Header>...</Card.Header>
  <Card.Body>
    <Card.Title>...</Card.Title>
    <Card.Description>...</Card.Description>
  </Card.Body>
  <Card.Footer>...</Card.Footer>
</Card>
```

- **Card**: Main container that extends Surface component. Provides base card structure with configurable surface variants and handles overall layout.
- **Card.Header**: Header section for top-aligned content like icons or badges.
- **Card.Body**: Main content area with flex-1 that expands to fill all available space between Card.Header and Card.Footer.
- **Card.Title**: Title text with foreground color and medium font weight.
- **Card.Description**: Description text with muted color and smaller font size.
- **Card.Footer**: Footer section for bottom-aligned actions like buttons.

## API Reference

### Card

| prop           | type                                                                            | default     | description                                        |
| -------------- | ------------------------------------------------------------------------------- | ----------- | -------------------------------------------------- |
| `children`     | `React.ReactNode`                                                               | -           | Content to be rendered inside the card             |
| `variant`      | `'default' \| 'secondary' \| 'tertiary' \| 'quaternary' \| 'transparent'`       | `'default'` | Visual variant of the card surface                 |
| `className`    | `string`                                                                        | -           | Additional CSS classes to apply                    |
| `...ViewProps` | `ViewProps`                                                                     | -           | All standard React Native View props are supported |

### Card.Header

| prop           | type              | default | description                                        |
| -------------- | ----------------- | ------- | -------------------------------------------------- |
| `children`     | `React.ReactNode` | -       | Children elements to be rendered inside the header |
| `className`    | `string`          | -       | Additional CSS classes                             |
| `...ViewProps` | `ViewProps`       | -       | All standard React Native View props are supported |

### Card.Body

| prop           | type              | default | description                                        |
| -------------- | ----------------- | ------- | -------------------------------------------------- |
| `children`     | `React.ReactNode` | -       | Children elements to be rendered inside the body   |
| `className`    | `string`          | -       | Additional CSS classes                             |
| `...ViewProps` | `ViewProps`       | -       | All standard React Native View props are supported |

### Card.Footer

| prop           | type              | default | description                                        |
| -------------- | ----------------- | ------- | -------------------------------------------------- |
| `children`     | `React.ReactNode` | -       | Children elements to be rendered inside the footer |
| `className`    | `string`          | -       | Additional CSS classes                             |
| `...ViewProps` | `ViewProps`       | -       | All standard React Native View props are supported |

### Card.Title

| prop           | type              | default | description                                        |
| -------------- | ----------------- | ------- | -------------------------------------------------- |
| `children`     | `React.ReactNode` | -       | Children elements to be rendered as the title text |
| `className`    | `string`          | -       | Additional CSS classes                             |
| `...TextProps` | `TextProps`       | -       | All standard React Native Text props are supported |

### Card.Description

| prop           | type              | default | description                                              |
| -------------- | ----------------- | ------- | -------------------------------------------------------- |
| `children`     | `React.ReactNode` | -       | Children elements to be rendered as the description text |
| `className`    | `string`          | -       | Additional CSS classes                                   |
| `...TextProps` | `TextProps`       | -       | All standard React Native Text props are supported       |

---

## checkbox

# Checkbox

A selectable control that allows users to toggle between checked and unchecked states.

## Imports

Note: Before importing this component, ensure you have completed the setup as per the [Quick Start guide](../../../README.md).

```tsx
import { Checkbox } from 'heroui-native';
```

## Usage

### Basic Usage

The Checkbox component renders with a default animated indicator if no children are provided. It automatically detects whether it's on a surface background for proper styling.

```tsx
<Checkbox isSelected={isSelected} onSelectedChange={setIsSelected} />
```

### With Custom Indicator

Use a render function in the Indicator to show/hide custom icons based on state.

```tsx
<Checkbox isSelected={isSelected} onSelectedChange={setIsSelected}>
  <Checkbox.Indicator>
    {({ isSelected }) => (isSelected ? <CheckIcon /> : null)}
  </Checkbox.Indicator>
</Checkbox>
```

### Invalid State

Show validation errors with the `isInvalid` prop, which applies danger color styling.

```tsx
<Checkbox
  isSelected={isSelected}
  onSelectedChange={setIsSelected}
  isInvalid={hasError}
/>
```

### Custom Animations

Customize or disable animations for both the root checkbox and indicator.

```tsx
{
  /* Disable all animations (root and indicator) */
}
<Checkbox
  animation="disable-all"
  isSelected={isSelected}
  onSelectedChange={setIsSelected}
>
  <Checkbox.Indicator />
</Checkbox>;

{
  /* Disable only root animation */
}
<Checkbox
  animation="disabled"
  isSelected={isSelected}
  onSelectedChange={setIsSelected}
>
  <Checkbox.Indicator />
</Checkbox>;

{
  /* Disable only indicator animation */
}
<Checkbox isSelected={isSelected} onSelectedChange={setIsSelected}>
  <Checkbox.Indicator animation="disabled" />
</Checkbox>;

{
  /* Custom animation configuration */
}
<Checkbox
  animation={{ scale: { value: [1, 0.9], timingConfig: { duration: 200 } } }}
  isSelected={isSelected}
  onSelectedChange={setIsSelected}
>
  <Checkbox.Indicator
    animation={{
      scale: { value: [0.5, 1] },
      opacity: { value: [0, 1] },
      translateX: { value: [-8, 0] },
      borderRadius: { value: [12, 0] },
    }}
  />
</Checkbox>;
```

## Example

```tsx
import { Checkbox, Divider, FormField, Surface } from 'heroui-native';
import React from 'react';
import { View, Text } from 'react-native';

interface CheckboxFieldProps {
  isSelected: boolean;
  onSelectedChange: (value: boolean) => void;
  title: string;
  description: string;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  isSelected,
  onSelectedChange,
  title,
  description,
}) => {
  return (
    <FormField
      isSelected={isSelected}
      onSelectedChange={onSelectedChange}
      alignIndicator="start"
      className="items-start"
    >
      <FormField.Indicator>
        <Checkbox className="mt-0.5" />
      </FormField.Indicator>
      <FormField.Content>
        <FormField.Title className="text-lg">{title}</FormField.Title>
        <FormField.Description className="text-base">
          {description}
        </FormField.Description>
      </FormField.Content>
    </FormField>
  );
};

export default function BasicUsage() {
  const [fields, setFields] = React.useState({
    newsletter: true,
    marketing: false,
    terms: false,
  });

  const fieldConfigs: Record<
    keyof typeof fields,
    { title: string; description: string }
  > = {
    newsletter: {
      title: 'Subscribe to newsletter',
      description: 'Get weekly updates about new features and tips',
    },
    marketing: {
      title: 'Marketing communications',
      description: 'Receive promotional emails and special offers',
    },
    terms: {
      title: 'Accept terms and conditions',
      description: 'Agree to our Terms of Service and Privacy Policy',
    },
  };

  const handleFieldChange = (key: keyof typeof fields) => (value: boolean) => {
    setFields((prev) => ({ ...prev, [key]: value }));
  };

  const fieldKeys = Object.keys(fields) as Array<keyof typeof fields>;

  return (
    <View className="flex-1 items-center justify-center px-5">
      <Surface className="py-5 w-full">
        {fieldKeys.map((key, index) => (
          <React.Fragment key={key}>
            {index > 0 && <Divider className="my-4" />}
            <CheckboxField
              isSelected={fields[key]}
              onSelectedChange={handleFieldChange(key)}
              title={fieldConfigs[key].title}
              description={fieldConfigs[key].description}
            />
          </React.Fragment>
        ))}
      </Surface>
    </View>
  );
}
```

## Anatomy

```tsx
<Checkbox>
  <Checkbox.Indicator>...</Checkbox.Indicator>
</Checkbox>
```

- **Checkbox**: Main container that handles selection state and user interaction. Renders default indicator with animated checkmark if no children provided. Automatically detects surface context for proper styling. Features press scale animation that can be customized or disabled. Supports render function children to access state (`isSelected`, `isInvalid`, `isDisabled`).
- **Checkbox.Indicator**: Optional checkmark container with default slide, scale, opacity, and border radius animations when selected. Renders animated check icon with SVG path drawing animation if no children provided. All animations can be individually customized or disabled. Supports render function children to access state.

## API Reference

### Checkbox

| prop                | type                                                                   | default     | description                                                                                                                                                          |
| ------------------- | ---------------------------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`          | `React.ReactNode \| ((props: CheckboxRenderProps) => React.ReactNode)` | `undefined` | Child elements or render function to customize the checkbox                                                                                                          |
| `isSelected`        | `boolean`                                                              | `undefined` | Whether the checkbox is currently selected                                                                                                                           |
| `onSelectedChange`  | `(isSelected: boolean) => void`                                        | `undefined` | Callback fired when the checkbox selection state changes                                                                                                             |
| `isDisabled`        | `boolean`                                                              | `false`     | Whether the checkbox is disabled and cannot be interacted with                                                                                                       |
| `isInvalid`         | `boolean`                                                              | `false`     | Whether the checkbox is invalid (shows danger color)                                                                                                                 |
| `isOnSurface`       | `boolean`                                                              | `undefined` | Whether checkbox is on a surface background (auto-detected if not set)                                                                                               |
| `hitSlop`           | `number`                                                               | `6`         | Hit slop for the pressable area                                                                                                                                      |
| `animation`         | `CheckboxRootAnimation`                                                | `undefined` | Animation configuration for press scale animation. Use `"disable-all"` to disable all animations including indicator, or `"disabled"` to disable only root animation |
| `className`         | `string`                                                               | `undefined` | Additional CSS classes to apply                                                                                                                                      |
| `...PressableProps` | `PressableProps`                                                       | -           | All standard React Native Pressable props are supported (except disabled)                                                                                            |

#### CheckboxRenderProps

| prop         | type      | description                      |
| ------------ | --------- | -------------------------------- |
| `isSelected` | `boolean` | Whether the checkbox is selected |
| `isInvalid`  | `boolean` | Whether the checkbox is invalid  |
| `isDisabled` | `boolean` | Whether the checkbox is disabled |

#### CheckboxRootAnimation

Configuration object or string literal to control root checkbox animations.

**Type:** `CheckboxRootAnimation = boolean | "disabled" | "disable-all" | { scale?: AnimationValue }`

**String values:**

- `"disabled" | false`: Disables only the root press scale animation
- `"disable-all"`: Disables all animations (root and indicator)

**Object configuration:**

| prop    | type                                                                            | description                             |
| ------- | ------------------------------------------------------------------------------- | --------------------------------------- |
| `scale` | `AnimationValue<{ value?: [number, number]; timingConfig?: WithTimingConfig }>` | Configuration for press scale animation |

**scale** properties:

- `value` (`[number, number]`, default: `[1, 0.95]`): Scale values for [unpressed, pressed] states
- `timingConfig` (`WithTimingConfig`): Animation timing configuration from Reanimated (default: `{ duration: 150 }`)

### Checkbox.Indicator

| prop                   | type                                                                   | default     | description                                                                                            |
| ---------------------- | ---------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------ |
| `children`             | `React.ReactNode \| ((props: CheckboxRenderProps) => React.ReactNode)` | `undefined` | Content or render function for the checkbox indicator                                                  |
| `className`            | `string`                                                               | `undefined` | Additional CSS classes for the indicator                                                               |
| `iconProps`            | `CheckboxIndicatorIconProps`                                           | `undefined` | Custom props for the default animated check icon                                                       |
| `animation`            | `CheckboxIndicatorAnimation`                                           | `undefined` | Animation configuration for indicator animations. Use `"disabled"` to disable all indicator animations |
| `...AnimatedViewProps` | `AnimatedProps<ViewProps>`                                             | -           | All standard React Native Animated View props are supported                                            |

#### CheckboxIndicatorIconProps

Props for customizing the default animated check icon.

| prop            | type     | description                                      |
| --------------- | -------- | ------------------------------------------------ |
| `size`          | `number` | Icon size                                        |
| `strokeWidth`   | `number` | Icon stroke width                                |
| `color`         | `string` | Icon color (defaults to theme accent-foreground) |
| `enterDuration` | `number` | Duration of enter animation (check appearing)    |
| `exitDuration`  | `number` | Duration of exit animation (check disappearing)  |

#### CheckboxIndicatorAnimation

Configuration object or string literal to control indicator animations.

**Type:** `CheckboxIndicatorAnimation = boolean | "disabled" | { opacity?: AnimationValue; borderRadius?: AnimationValue; translateX?: AnimationValue; scale?: AnimationValue }`

**String values:**

- `"disabled" | false`: Disables all indicator animations (opacity, borderRadius, translateX, scale)

**Object configuration:**

| prop           | type                                                                            | description                                    |
| -------------- | ------------------------------------------------------------------------------- | ---------------------------------------------- |
| `opacity`      | `AnimationValue<{ value?: [number, number]; timingConfig?: WithTimingConfig }>` | Opacity animation configuration                |
| `borderRadius` | `AnimationValue<{ value?: [number, number]; timingConfig?: WithTimingConfig }>` | Border radius animation configuration          |
| `translateX`   | `AnimationValue<{ value?: [number, number]; timingConfig?: WithTimingConfig }>` | Horizontal translation animation configuration |
| `scale`        | `AnimationValue<{ value?: [number, number]; timingConfig?: WithTimingConfig }>` | Scale animation configuration                  |

**Default animation values:**

- `opacity`: `value: [0, 1]`, `timingConfig: { duration: 100 }`
- `borderRadius`: `value: [8, 0]`, `timingConfig: { duration: 50 }`
- `translateX`: `value: [-4, 0]`, `timingConfig: { duration: 100 }`
- `scale`: `value: [0.8, 1]`, `timingConfig: { duration: 100 }`

Each animation property supports:

- `value` (`[number, number]`): Animation values for [unselected, selected] states
- `timingConfig` (`WithTimingConfig`): Reanimated timing configuration

---

## chip

# Chip

Displays a compact element in a capsule shape.

## Imports

Note: Before importing this component, ensure you have completed the setup as per the [Quick Start guide](../../../README.md).

```tsx
import { Chip } from 'heroui-native';
```

## Usage

### Basic Usage

The Chip component displays text or custom content in a capsule shape.

```tsx
<Chip>Basic Chip</Chip>
```

### Sizes

Control the chip size with the `size` prop.

```tsx
<Chip size="sm">Small</Chip>
<Chip size="md">Medium</Chip>
<Chip size="lg">Large</Chip>
```

### Variants

Choose between different visual styles with the `variant` prop.

```tsx
<Chip variant="primary">Primary</Chip>
<Chip variant="secondary">Secondary</Chip>
<Chip variant="tertiary">Tertiary</Chip>
<Chip variant="soft">Soft</Chip>
```

### Colors

Apply different color themes with the `color` prop.

```tsx
<Chip color="accent">Accent</Chip>
<Chip color="default">Default</Chip>
<Chip color="success">Success</Chip>
<Chip color="warning">Warning</Chip>
<Chip color="danger">Danger</Chip>
```

### With Icons

Add icons or custom content alongside text using compound components.

```tsx
<Chip>
  <Icon name="star" size={12} />
  <Chip.Label>Featured</Chip.Label>
</Chip>

<Chip>
  <Chip.Label>Close</Chip.Label>
  <Icon name="close" size={12} />
</Chip>
```

### Custom Styling

Apply custom styles using className or style props.

```tsx
<Chip className="bg-purple-600 px-6">
  <Chip.Label className="text-white">Custom</Chip.Label>
</Chip>
```

## Example

```tsx
import { Chip } from 'heroui-native';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ChipExample() {
  return (
    <View className="gap-4 p-4">
      <View className="flex-row flex-wrap gap-2">
        <Chip size="sm">Small</Chip>
        <Chip size="md">Medium</Chip>
        <Chip size="lg">Large</Chip>
      </View>

      <View className="flex-row flex-wrap gap-2">
        <Chip variant="primary" color="accent">
          Primary
        </Chip>
        <Chip variant="secondary" color="success">
          <View className="size-1.5 rounded-full bg-success" />
          <Chip.Label>Success</Chip.Label>
        </Chip>
        <Chip variant="tertiary" color="warning">
          <Ionicons name="star" size={12} color="#F59E0B" />
          <Chip.Label>Premium</Chip.Label>
        </Chip>
      </View>

      <View className="flex-row gap-2">
        <Chip variant="secondary">
          <Chip.Label>Remove</Chip.Label>
          <Ionicons name="close" size={14} color="#6B7280" />
        </Chip>
        <Chip className="bg-purple-600">
          <Chip.Label className="text-white font-semibold">Custom</Chip.Label>
        </Chip>
      </View>
    </View>
  );
}
```

## Anatomy

```tsx
<Chip>
  <Chip.Label>...</Chip.Label>
</Chip>
```

- **Chip**: Main container that displays a compact element
- **Chip.Label**: Text content of the chip

## API Reference

### Chip

| prop                         | type                                                          | default     | description                                          |
| ---------------------------- | ------------------------------------------------------------- | ----------- | ---------------------------------------------------- |
| `children`                   | `React.ReactNode`                                             | -           | Content to render inside the chip                    |
| `size`                       | `'sm' \| 'md' \| 'lg'`                                        | `'md'`      | Size of the chip                                     |
| `variant`                    | `'primary' \| 'secondary' \| 'tertiary' \| 'soft'`            | `'primary'` | Visual variant of the chip                           |
| `color`                      | `'accent' \| 'default' \| 'success' \| 'warning' \| 'danger'` | `'accent'`  | Color theme of the chip                              |
| `className`                  | `string`                                                      | -           | Additional CSS classes to apply                      |
| `...Animated.PressableProps` | `Animated.PressableProps`                                     | -           | All Reanimated AnimatedPressable props are supported |

### Chip.Label

| prop           | type              | default | description                            |
| -------------- | ----------------- | ------- | -------------------------------------- |
| `children`     | `React.ReactNode` | -       | Text or content to render as the label |
| `className`    | `string`          | -       | Additional CSS classes to apply        |
| `...TextProps` | `TextProps`       | -       | All standard Text props are supported  |

---

## dialog

# Dialog

Displays a modal overlay with animated transitions and gesture-based dismissal.

## Imports

Note: Before importing this component, ensure you have completed the setup as per the [Quick Start guide](../../../README.md).

```tsx
import { Dialog, useDialog, useDialogAnimation } from 'heroui-native';
```

## Usage

### Basic Dialog

Simple dialog with title, description, and close button.

```tsx
<Dialog isOpen={isOpen} onOpenChange={setIsOpen}>
  <Dialog.Trigger asChild>
    <Button>Open Dialog</Button>
  </Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content>
      <Dialog.Close />
      <Dialog.Title>...</Dialog.Title>
      <Dialog.Description>...</Dialog.Description>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog>
```

### Custom Animations

Configure open and close animations with spring or timing. The `closeDelay` should typically match your closing animation duration.

```tsx
<Dialog
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  closeDelay={200} // Match this with onClose animation duration
  progressAnimationConfigs={{
    onOpen: {
      animationType: 'spring',
      animationConfig: { damping: 130, stiffness: 1100 },
    },
    onClose: {
      animationType: 'timing',
      animationConfig: { duration: 200 }, // Should match closeDelay
    },
  }}
>
  <Dialog.Trigger>...</Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content>...</Dialog.Content>
  </Dialog.Portal>
</Dialog>
```

### Custom Backdrop

Replace the default overlay with custom content.

```tsx
<Dialog isOpen={isOpen} onOpenChange={setIsOpen}>
  <Dialog.Trigger>...</Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay className="bg-transparent">
      <BlurView style={StyleSheet.absoluteFill} />
    </Dialog.Overlay>
    <Dialog.Content>...</Dialog.Content>
  </Dialog.Portal>
</Dialog>
```

### Scrollable Content

Handle long content with scroll views.

```tsx
<Dialog isOpen={isOpen} onOpenChange={setIsOpen}>
  <Dialog.Trigger>...</Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content>
      <Dialog.Close />
      <Dialog.Title>...</Dialog.Title>
      <View className="h-[300px]">
        <ScrollView>...</ScrollView>
      </View>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog>
```

### Form Dialog

Dialog with text inputs and keyboard handling.

```tsx
<Dialog isOpen={isOpen} onOpenChange={setIsOpen}>
  <Dialog.Trigger>...</Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay />
    <KeyboardAvoidingView behavior="padding">
      <Dialog.Content>
        <Dialog.Close />
        <Dialog.Title>...</Dialog.Title>
        <TextField>...</TextField>
        <Button onPress={handleSubmit}>Submit</Button>
      </Dialog.Content>
    </KeyboardAvoidingView>
  </Dialog.Portal>
</Dialog>
```

## Example

```tsx
import { Button, Dialog } from 'heroui-native';
import { View } from 'react-native';
import { useState } from 'react';

export default function DialogExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog isOpen={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Button variant="primary">Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Close />
          <View className="mb-5 gap-1.5">
            <Dialog.Title>Confirm Action</Dialog.Title>
            <Dialog.Description>
              Are you sure you want to proceed with this action? This cannot be
              undone.
            </Dialog.Description>
          </View>
          <View className="flex-row justify-end gap-3">
            <Dialog.Close asChild>
              <Button variant="ghost" size="sm">
                Cancel
              </Button>
            </Dialog.Close>
            <Button size="sm">Confirm</Button>
          </View>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
```

## Anatomy

```tsx
<Dialog>
  <Dialog.Trigger>...</Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay>...</Dialog.Overlay>
    <Dialog.Content>
      <Dialog.Close>...</Dialog.Close>
      <Dialog.Title>...</Dialog.Title>
      <Dialog.Description>...</Dialog.Description>
    </Dialog.Content>
  </Dialog.Portal>
</Dialog>
```

- **Dialog**: Root component that manages open state and provides context to child components.
- **Dialog.Trigger**: Pressable element that opens the dialog when pressed.
- **Dialog.Portal**: Renders dialog content in a portal with centered layout and animation control.
- **Dialog.Overlay**: Background overlay that appears behind the dialog content, typically closes dialog when pressed.
- **Dialog.Content**: Main dialog container with gesture support for drag-to-dismiss.
- **Dialog.Close**: Close button that dismisses the dialog when pressed.
- **Dialog.Title**: Dialog title text with semantic heading role.
- **Dialog.Description**: Dialog description text that provides additional context.

## API Reference

### Dialog

| prop                       | type                             | default | description                                                                          |
| -------------------------- | -------------------------------- | ------- | ------------------------------------------------------------------------------------ |
| `children`                 | `React.ReactNode`                | -       | Dialog content and trigger elements                                                  |
| `isOpen`                   | `boolean`                        | -       | Controlled open state of the dialog                                                  |
| `isDefaultOpen`            | `boolean`                        | `false` | Initial open state when uncontrolled                                                 |
| `closeDelay`               | `number`                         | `500`   | Delay in milliseconds before dialog closes (should match closing animation duration) |
| `isDismissKeyboardOnClose` | `boolean`                        | `true`  | Whether to dismiss keyboard when dialog closes                                       |
| `progressAnimationConfigs` | `DialogProgressAnimationConfigs` | -       | Animation configuration for open/close transitions                                   |
| `onOpenChange`             | `(value: boolean) => void`       | -       | Callback when open state changes                                                     |
| `...ViewProps`             | `ViewProps`                      | -       | All standard React Native View props are supported                                   |

#### DialogProgressAnimationConfigs

| prop      | type                                             | description                         |
| --------- | ------------------------------------------------ | ----------------------------------- |
| `onOpen`  | `SpringAnimationConfig \| TimingAnimationConfig` | Animation configuration for opening |
| `onClose` | `SpringAnimationConfig \| TimingAnimationConfig` | Animation configuration for closing |

### Dialog.Trigger

| prop                       | type                    | default | description                                                    |
| -------------------------- | ----------------------- | ------- | -------------------------------------------------------------- |
| `children`                 | `React.ReactNode`       | -       | Trigger element content                                        |
| `asChild`                  | `boolean`               | `true`  | Render as child element without wrapper                        |
| `...TouchableOpacityProps` | `TouchableOpacityProps` | -       | All standard React Native TouchableOpacity props are supported |

### Dialog.Portal

| prop         | type                   | default | description                                      |
| ------------ | ---------------------- | ------- | ------------------------------------------------ |
| `children`   | `React.ReactNode`      | -       | Portal content (overlay and dialog)              |
| `className`  | `string`               | -       | Additional CSS classes for portal container      |
| `style`      | `StyleProp<ViewStyle>` | -       | Additional styles for portal container           |
| `hostName`   | `string`               | -       | Optional portal host name for specific container |
| `forceMount` | `boolean`              | -       | Force mount when closed for animation purposes   |

### Dialog.Overlay

| prop                         | type              | default | description                                                                         |
| ---------------------------- | ----------------- | ------- | ----------------------------------------------------------------------------------- |
| `children`                   | `React.ReactNode` | -       | Custom overlay content                                                              |
| `className`                  | `string`          | -       | Additional CSS classes for overlay                                                  |
| `isDefaultAnimationDisabled` | `boolean`         | `false` | Disables default opacity animation. Use when animating with custom useAnimatedStyle |
| `isCloseOnPress`             | `boolean`         | `true`  | Whether pressing overlay closes dialog                                              |
| `forceMount`                 | `boolean`         | -       | Force mount when closed for animation purposes                                      |
| `...PressableProps`          | `PressableProps`  | -       | All standard React Native Pressable props are supported                             |

### Dialog.Content

| prop                         | type                                 | default | description                                                                                   |
| ---------------------------- | ------------------------------------ | ------- | --------------------------------------------------------------------------------------------- |
| `children`                   | `React.ReactNode`                    | -       | Dialog content                                                                                |
| `className`                  | `string`                             | -       | Additional CSS classes for content container                                                  |
| `style`                      | `StyleProp<ViewStyle>`               | -       | Additional styles for content container                                                       |
| `onLayout`                   | `(event: LayoutChangeEvent) => void` | -       | Layout event handler                                                                          |
| `isDefaultAnimationDisabled` | `boolean`                            | `false` | Disables default animations (opacity, scale). Use when animating with custom useAnimatedStyle |
| `forceMount`                 | `boolean`                            | -       | Force mount when closed for animation purposes                                                |
| `...Animated.ViewProps`      | `Animated.ViewProps`                 | -       | All Reanimated Animated.View props are supported                                              |

### Dialog.Close

| prop                       | type                    | default | description                                                    |
| -------------------------- | ----------------------- | ------- | -------------------------------------------------------------- |
| `children`                 | `React.ReactNode`       | -       | Custom close button content                                    |
| `className`                | `string`                | -       | Additional CSS classes for close button                        |
| `iconProps`                | `DialogCloseIconProps`  | -       | Configuration for default close icon                           |
| `asChild`                  | `boolean`               | -       | Render as child element without wrapper                        |
| `...TouchableOpacityProps` | `TouchableOpacityProps` | -       | All standard React Native TouchableOpacity props are supported |

#### DialogCloseIconProps

| prop    | type     | description                                 |
| ------- | -------- | ------------------------------------------- |
| `size`  | `number` | Icon size (default: 18)                     |
| `color` | `string` | Icon color (default: '--colors-foreground') |

### Dialog.Title

| prop           | type              | default | description                                        |
| -------------- | ----------------- | ------- | -------------------------------------------------- |
| `children`     | `React.ReactNode` | -       | Title content                                      |
| `className`    | `string`          | -       | Additional CSS classes for title                   |
| `...TextProps` | `TextProps`       | -       | All standard React Native Text props are supported |

### Dialog.Description

| prop           | type              | default | description                                        |
| -------------- | ----------------- | ------- | -------------------------------------------------- |
| `children`     | `React.ReactNode` | -       | Description content                                |
| `className`    | `string`          | -       | Additional CSS classes for description             |
| `...TextProps` | `TextProps`       | -       | All standard React Native Text props are supported |

### useDialog

Hook to access dialog primitive context.

```tsx
const { isOpen, onOpenChange } = useDialog();
```

| property       | type                       | description                   |
| -------------- | -------------------------- | ----------------------------- |
| `isOpen`       | `boolean`                  | Current open state            |
| `onOpenChange` | `(value: boolean) => void` | Function to change open state |

### useDialogAnimation

Hook to access dialog animation context for advanced customization.

```tsx
const { dialogState, progress, isDragging } = useDialogAnimation();
```

| property      | type                          | description                                  |
| ------------- | ----------------------------- | -------------------------------------------- |
| `dialogState` | `'idle' \| 'open' \| 'close'` | Internal dialog state                        |
| `progress`    | `SharedValue<number>`         | Animation progress (0=idle, 1=open, 2=close) |
| `isDragging`  | `SharedValue<boolean>`        | Whether dialog is being dragged              |

---

## divider

# Divider

A simple line to separate content visually.

## Imports

Note: Before importing this component, ensure you have completed the setup as per the [Quick Start guide](../../../README.md).

```tsx
import { Divider } from 'heroui-native';
```

## Usage

### Basic Usage

The Divider component creates a visual separation between content sections.

```tsx
<Divider />
```

### Orientation

Control the direction of the divider with the `orientation` prop.

```tsx
<View>
  <Text>Horizontal divider</Text>
  <Divider orientation="horizontal" />
  <Text>Content below</Text>
</View>

<View className="h-24 flex-row">
  <Text>Left</Text>
  <Divider orientation="vertical" />
  <Text>Right</Text>
</View>
```

### Variants

Choose between thin and thick variants for different visual emphasis.

```tsx
<Divider variant="thin" />
<Divider variant="thick" />
```

### Custom Thickness

Set a specific thickness value for precise control.

```tsx
<Divider thickness={1} />
<Divider thickness={5} />
<Divider thickness={10} />
```

## Example

```tsx
import { Divider, Surface } from 'heroui-native';
import { Text, View } from 'react-native';

export default function DividerExample() {
  return (
    <Surface variant="secondary" className="px-6 py-7">
      <Text className="text-base font-medium text-foreground">
        HeroUI Native
      </Text>
      <Text className="text-sm text-muted">
        A modern React Native component library.
      </Text>
      <Divider className="my-4" />
      <View className="flex-row items-center h-5">
        <Text className="text-sm text-foreground">Components</Text>
        <Divider orientation="vertical" className="mx-3" />
        <Text className="text-sm text-foreground">Themes</Text>
        <Divider orientation="vertical" className="mx-3" />
        <Text className="text-sm text-foreground">Examples</Text>
      </View>
    </Surface>
  );
}
```

## API Reference

### Divider

| prop           | type                         | default        | description                                                                                  |
| -------------- | ---------------------------- | -------------- | -------------------------------------------------------------------------------------------- |
| `variant`      | `'thin' \| 'thick'`          | `'thin'`       | Variant style of the divider                                                                 |
| `orientation`  | `'horizontal' \| 'vertical'` | `'horizontal'` | Orientation of the divider                                                                   |
| `thickness`    | `number`                     | `undefined`    | Custom thickness in pixels. Controls height for horizontal or width for vertical orientation |
| `className`    | `string`                     | `undefined`    | Additional CSS classes to apply                                                              |
| `...ViewProps` | `ViewProps`                  | -              | All standard React Native View props are supported                                           |

---

## drop-shadow-view

# DropShadowView

Container that wraps children with platform-specific drop shadows.

## Imports

Note: Before importing this component, ensure you have completed the setup as per the [Quick Start guide](../../../README.md).

```tsx
import { DropShadowView } from 'heroui-native';
```

## Usage

### Basic Usage

The DropShadowView component provides optimized shadow rendering with automatic theme awareness.

```tsx
<DropShadowView>...</DropShadowView>
```

### Shadow Sizes

Control shadow depth with preset sizes from none to extra large.

```tsx
<DropShadowView shadowSize="none">...</DropShadowView>

<DropShadowView shadowSize="xs">...</DropShadowView>

<DropShadowView shadowSize="sm">...</DropShadowView>

<DropShadowView shadowSize="md">...</DropShadowView>

<DropShadowView shadowSize="lg">...</DropShadowView>

<DropShadowView shadowSize="xl">...</DropShadowView>
```

### Custom Shadow Colors

Apply custom shadow colors that work across both platforms.

```tsx
<DropShadowView shadowColor="#3b82f6">...</DropShadowView>

<DropShadowView shadowColor="#10b981">...</DropShadowView>

<DropShadowView shadowColor="rgba(139, 92, 246, 0.5)">...</DropShadowView>
```

### Platform-Specific Customization

Fine-tune shadows for each platform using dedicated style props.

```tsx
<DropShadowView
  iosShadowStyle={{
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  }}
  androidShadowStyle={{
    elevation: 10,
  }}
>
  ...
</DropShadowView>
```

## Example

```tsx
import { DropShadowView } from 'heroui-native';
import { ScrollView, Text, View } from 'react-native';

export default function DropShadowViewExample() {
  return (
    <ScrollView className="bg-background p-4">
      <View className="gap-4">
        <DropShadowView className="bg-surface-1 p-4 rounded-lg" shadowSize="sm">
          <Text className="text-foreground font-semibold">Small Shadow</Text>
          <Text className="text-muted text-sm">
            Subtle elevation for cards and containers
          </Text>
        </DropShadowView>

        <DropShadowView className="bg-surface-1 p-6 rounded-lg" shadowSize="md">
          <Text className="text-lg font-semibold text-foreground mb-2">
            Card Component
          </Text>
          <Text className="text-muted mb-4">
            This card uses medium shadow for standard elevation.
          </Text>
          <View className="flex-row gap-2">
            <View className="bg-accent px-3 py-1 rounded">
              <Text className="text-accent-foreground text-sm">Action</Text>
            </View>
          </View>
        </DropShadowView>

        <DropShadowView
          className="bg-surface-1 p-4 rounded-lg"
          shadowSize="xl"
          shadowColor="red"
        >
          <Text className="text-red-900 font-semibold">Custom Blue Shadow</Text>
          <Text className="text-red-700 text-sm">
            Large shadow with custom color
          </Text>
        </DropShadowView>
      </View>
    </ScrollView>
  );
}
```

## API Reference

### DropShadowView

| prop                    | type                                             | default                                       | description                                      |
| ----------------------- | ------------------------------------------------ | --------------------------------------------- | ------------------------------------------------ |
| `children`              | `React.ReactNode`                                | -                                             | Content to be wrapped with the drop shadow       |
| `shadowSize`            | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'`                                        | Shadow size preset                               |
| `shadowColor`           | `string`                                         | `'black'` for light, `'white'` for dark theme | Shadow color                                     |
| `className`             | `string`                                         | -                                             | Additional CSS classes for styling               |
| `iosShadowStyle`        | `IOSShadowStyle`                                 | -                                             | iOS-specific shadow style overrides              |
| `androidShadowStyle`    | `AndroidShadowStyle`                             | -                                             | Android-specific shadow style overrides          |
| `...Animated.ViewProps` | `Animated.ViewProps`                             | -                                             | All Reanimated Animated.View props are supported |

### IOSShadowStyle

| prop            | type                         | description                                     |
| --------------- | ---------------------------- | ----------------------------------------------- |
| `shadowColor`   | `ViewStyle['shadowColor']`   | Shadow color                                    |
| `shadowOffset`  | `ViewStyle['shadowOffset']`  | Shadow offset `{width: number, height: number}` |
| `shadowOpacity` | `ViewStyle['shadowOpacity']` | Shadow opacity (0-1)                            |
| `shadowRadius`  | `ViewStyle['shadowRadius']`  | Shadow blur radius                              |

### AndroidShadowStyle

| prop          | type                       | description             |
| ------------- | -------------------------- | ----------------------- |
| `shadowColor` | `ViewStyle['shadowColor']` | Shadow color            |
| `elevation`   | `ViewStyle['elevation']`   | Shadow elevation (0-24) |

---

## error-view

# ErrorView

Displays validation error message content with smooth animations.

## Imports

Note: Before importing this component, ensure you have completed the setup as per the [Quick Start guide](../../../README.md).

```tsx
import { ErrorView } from 'heroui-native';
```

## Usage

### Basic Usage

The ErrorView component displays error messages when validation fails.

```tsx
<ErrorView isInvalid={true}>This field is required</ErrorView>
```

### Controlled Visibility

Control when the error appears using the `isInvalid` prop.

```tsx
const [isInvalid, setIsInvalid] = useState(false);

<ErrorView isInvalid={isInvalid}>
  Please enter a valid email address
</ErrorView>;
```

### Custom Content

Pass custom React components as children instead of strings.

```tsx
<ErrorView isInvalid={true}>
  <View className="flex-row items-center">
    <Icon name="alert-circle" />
    <Text className="ml-2 text-danger">Invalid input</Text>
  </View>
</ErrorView>
```

### Custom Animations

Override default entering and exiting animations.

```tsx
import { SlideInDown, SlideOutUp } from 'react-native-reanimated';

<ErrorView
  isInvalid={true}
  entering={SlideInDown.duration(200)}
  exiting={SlideOutUp.duration(150)}
>
  Field validation failed
</ErrorView>;
```

### Custom Styling

Apply custom styles to the container and text elements.

```tsx
<ErrorView
  isInvalid={true}
  className="mt-2"
  classNames={{
    container: 'bg-danger/10 p-2 rounded',
    text: 'text-xs font-medium',
  }}
>
  Password must be at least 8 characters
</ErrorView>
```

### Custom Text Props

Pass additional props to the Text component when children is a string.

```tsx
<ErrorView
  isInvalid={true}
  textProps={{
    numberOfLines: 1,
    ellipsizeMode: 'tail',
    style: { letterSpacing: 0.5 }
  }}
>
  This is a very long error message that might need to be truncated
</ErrorView>
```

## Example

```tsx
import { ErrorView, TextField } from 'heroui-native';
import { useState } from 'react';
import { View } from 'react-native';

export default function ErrorViewExample() {
  const [email, setEmail] = useState('');
  const [showError, setShowError] = useState(false);

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleBlur = () => {
    setShowError(email !== '' && !isValidEmail);
  };

  return (
    <View className="p-4">
      <TextField>
        <TextField.Label>Email Address</TextField.Label>
        <TextField.Input
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          onBlur={handleBlur}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextField.Description>
          We'll use this to contact you
        </TextField.Description>
      </TextField>

      <ErrorView isInvalid={showError} className="ml-1">
        Please enter a valid email address
      </ErrorView>
    </View>
  );
}
```

## API Reference

### ErrorView

| prop                   | type                                    | default     | description                                                           |
| ---------------------- | --------------------------------------- | ----------- | --------------------------------------------------------------------- |
| `children`             | `React.ReactNode`                       | `undefined` | The content of the error field. String children are wrapped with Text |
| `isInvalid`            | `boolean`                               | `false`     | Controls the visibility of the error field                            |
| `className`            | `string`                                | `undefined` | Additional CSS classes for the container                              |
| `classNames`           | `{ container?: string, text?: string }` | `undefined` | Additional CSS classes for different parts of the component           |
| `textProps`            | `TextProps`                             | `undefined` | Additional props to pass to the Text component when children is a string |
| `...AnimatedViewProps` | `AnimatedProps<ViewProps>`              | -           | All Reanimated Animated.View props are supported                      |

---

## form-field

# FormField

Provides consistent layout and interaction for form controls with label, description, and error handling. Perfect for Switch and Checkbox components when you want the entire field to be pressable.

## Imports

Note: Before importing this component, ensure you have completed the setup as per the [Quick Start guide](../../../README.md).

```tsx
import { FormField } from 'heroui-native';
```

## Usage

### Basic Usage

FormField wraps form controls to provide consistent layout and state management.

```tsx
<FormField isSelected={value} onSelectedChange={setValue}>
  <FormField.Content>
    <FormField.Title>Label text</FormField.Title>
  </FormField.Content>
  <FormField.Indicator>
    <Switch />
  </FormField.Indicator>
</FormField>
```

### With Description

Add helper text below the label using the Description component.

```tsx
<FormField isSelected={value} onSelectedChange={setValue}>
  <FormField.Content>
    <FormField.Title>Enable notifications</FormField.Title>
    <FormField.Description>
      Receive push notifications about your account activity
    </FormField.Description>
  </FormField.Content>
  <FormField.Indicator>
    <Switch />
  </FormField.Indicator>
</FormField>
```

### With Error Message

Display validation errors using the ErrorMessage component.

```tsx
<FormField isSelected={value} onSelectedChange={setValue} isInvalid={!value}>
  <FormField.Content>
    <FormField.Title>I agree to the terms</FormField.Title>
  </FormField.Content>
  <FormField.Indicator>
    <Checkbox />
  </FormField.Indicator>
  <FormField.ErrorMessage>This field is required</FormField.ErrorMessage>
</FormField>
```

### Inline Layout

Use inline layout for compact horizontal form fields.

```tsx
<View className="flex-row gap-4">
  <FormField isSelected={value1} onSelectedChange={setValue1} isInline>
    <FormField.Content>
      <FormField.Title>Option 1</FormField.Title>
    </FormField.Content>
    <FormField.Indicator>
      <Switch />
    </FormField.Indicator>
  </FormField>

  <FormField isSelected={value2} onSelectedChange={setValue2} isInline>
    <FormField.Content>
      <FormField.Title>Option 2</FormField.Title>
    </FormField.Content>
    <FormField.Indicator>
      <Switch />
    </FormField.Indicator>
  </FormField>
</View>
```

### Vertical Orientation

Stack the indicator above the content for vertical layouts.

```tsx
<FormField
  isSelected={value}
  onSelectedChange={setValue}
  orientation="vertical"
>
  <FormField.Content>
    <FormField.Title>Vertical layout</FormField.Title>
    <FormField.Description>
      The control appears above the text
    </FormField.Description>
  </FormField.Content>
  <FormField.Indicator>
    <Switch />
  </FormField.Indicator>
</FormField>
```

### Disabled and Read-Only States

Control interactivity with disabled and read-only props.

```tsx
<FormField isSelected={value} onSelectedChange={setValue} isDisabled>
  <FormField.Content>
    <FormField.Title>Disabled field</FormField.Title>
  </FormField.Content>
  <FormField.Indicator>
    <Switch />
  </FormField.Indicator>
</FormField>
```

## Example

```tsx
import { Checkbox, FormField, Switch } from 'heroui-native';
import React from 'react';
import { ScrollView, View } from 'react-native';

export default function FormFieldExample() {
  const [notifications, setNotifications] = React.useState(false);
  const [terms, setTerms] = React.useState(false);
  const [newsletter, setNewsletter] = React.useState(true);

  return (
    <ScrollView className="bg-background p-4">
      <View className="gap-4">
        <FormField
          isSelected={notifications}
          onSelectedChange={setNotifications}
        >
          <FormField.Content>
            <FormField.Title>Enable notifications</FormField.Title>
            <FormField.Description>
              Receive push notifications about your account activity
            </FormField.Description>
          </FormField.Content>
          <FormField.Indicator>
            <Switch />
          </FormField.Indicator>
        </FormField>

        <FormField
          isSelected={terms}
          onSelectedChange={setTerms}
          isInvalid={!terms}
        >
          <FormField.Content>
            <FormField.Title>
              I agree to the terms and conditions
            </FormField.Title>
            <FormField.Description>
              By checking this box, you agree to our Terms of Service
            </FormField.Description>
          </FormField.Content>
          <FormField.Indicator className="mt-0.5">
            <Checkbox />
          </FormField.Indicator>
          <FormField.ErrorMessage>
            This field is required
          </FormField.ErrorMessage>
        </FormField>

        <FormField isSelected={newsletter} onSelectedChange={setNewsletter}>
          <FormField.Content>
            <FormField.Title>Subscribe to newsletter</FormField.Title>
          </FormField.Content>
          <FormField.Indicator>
            <Checkbox color="warning" />
          </FormField.Indicator>
        </FormField>
      </View>
    </ScrollView>
  );
}
```

## Anatomy

```tsx
<FormField>
  <FormField.Content>
    <FormField.Title>...</FormField.Title>
    <FormField.Description>...</FormField.Description>
  </FormField.Content>
  <FormField.Indicator>...</FormField.Indicator>
  <FormField.ErrorMessage>...</FormField.ErrorMessage>
</FormField>
```

- **FormField**: Root container that manages layout and state propagation
- **FormField.Content**: Container for label and description text
- **FormField.Title**: Primary text title for the control
- **FormField.Description**: Secondary descriptive helper text
- **FormField.Indicator**: Container for the form control component
- **FormField.ErrorMessage**: Validation error message display

## API Reference

### FormField

| prop                       | type                            | default        | description                                                  |
| -------------------------- | ------------------------------- | -------------- | ------------------------------------------------------------ |
| children                   | `React.ReactNode`               | -              | Content to render inside the form control                    |
| orientation                | `'horizontal' \| 'vertical'`    | `'horizontal'` | Layout orientation of the form control                       |
| alignIndicator             | `'start' \| 'end'`              | `'end'`        | Alignment of the indicator (horizontal orientation only)     |
| isSelected                 | `boolean`                       | `undefined`    | Whether the control is selected/checked                      |
| isDisabled                 | `boolean`                       | `false`        | Whether the form control is disabled                         |
| isInline                   | `boolean`                       | `false`        | Whether the form control is inline (for flex-row containers) |
| isInvalid                  | `boolean`                       | `false`        | Whether the form control is invalid                          |
| className                  | `string`                        | -              | Custom class name for the root element                       |
| onSelectedChange           | `(isSelected: boolean) => void` | -              | Callback when selection state changes                        |
| ...Animated.PressableProps | `AnimatedProps<PressableProps>` | -              | All Reanimated AnimatedPressable props are supported         |

### FormField.Content

| prop                  | type                       | default | description                                      |
| --------------------- | -------------------------- | ------- | ------------------------------------------------ |
| children              | `React.ReactNode`          | -       | Content to render inside the content container   |
| className             | `string`                   | -       | Custom class name for the content element        |
| ...Animated.ViewProps | `AnimatedProps<ViewProps>` | -       | All Reanimated Animated.View props are supported |

### FormField.Title

| prop                  | type                       | default | description                                     |
| --------------------- | -------------------------- | ------- | ----------------------------------------------- |
| children              | `React.ReactNode`          | -       | Title text content                              |
| className             | `string`                   | -       | Custom class name for the title element         |
| ...Animated.TextProps | `AnimatedProps<TextProps>` | -       | All Reanimated AnimatedText props are supported |

### FormField.Description

| prop                  | type                       | default | description                                     |
| --------------------- | -------------------------- | ------- | ----------------------------------------------- |
| children              | `React.ReactNode`          | -       | Description text content                        |
| className             | `string`                   | -       | Custom class name for the description element   |
| ...Animated.TextProps | `AnimatedProps<TextProps>` | -       | All Reanimated AnimatedText props are supported |

### FormField.Indicator

| prop                  | type                       | default | description                                      |
| --------------------- | -------------------------- | ------- | ------------------------------------------------ |
| children              | `React.ReactNode`          | -       | Control component to render (Switch, Checkbox)   |
| className             | `string`                   | -       | Custom class name for the indicator element      |
| ...Animated.ViewProps | `AnimatedProps<ViewProps>` | -       | All Reanimated Animated.View props are supported |

### FormField.ErrorMessage

| prop                  | type                           | default | description                                             |
| --------------------- | ------------------------------ | ------- | ------------------------------------------------------- |
| children              | `React.ReactNode`              | -       | Error message content                                   |
| isInvalid             | `boolean`                      | `false` | Controls the visibility of the error field              |
| className             | `string`                       | -       | Custom class name for styling                           |
| classNames            | `ElementSlots<ErrorViewSlots>` | -       | Custom class names for different parts of the component |
| ...Animated.ViewProps | `AnimatedProps<ViewProps>`     | -       | All Reanimated Animated.View props are supported        |

#### ElementSlots<ErrorViewSlots>

| prop        | type     | description                               |
| ----------- | -------- | ----------------------------------------- |
| `container` | `string` | Custom class name for the error container |
| `text`      | `string` | Custom class name for the error text      |

## Hooks

### useFormField

**Returns:**

| property           | type                                           | description                                    |
| ------------------ | ---------------------------------------------- | ---------------------------------------------- |
| `isSelected`       | `boolean \| undefined`                         | Whether the control is selected/checked        |
| `onSelectedChange` | `((isSelected: boolean) => void) \| undefined` | Callback when selection state changes          |
| `isDisabled`       | `boolean`                                      | Whether the form control is disabled           |
| `isInline`         | `boolean`                                      | Whether the form control is inline             |
| `isInvalid`        | `boolean`                                      | Whether the form control is invalid            |
| `isPressed`        | `SharedValue<boolean>`                         | Reanimated shared value indicating press state |

---

## popover

# Popover

Displays a floating content panel anchored to a trigger element with placement and alignment options.

## Imports

Note: Before importing this component, ensure you have completed the setup as per the [Quick Start guide](../../../README.md).

```tsx
import { Popover } from 'heroui-native';
```

## Usage

### Basic Usage

The Popover component uses compound parts to create floating content panels.

```tsx
<Popover>
  <Popover.Trigger>...</Popover.Trigger>
  <Popover.Portal>
    <Popover.Overlay />
    <Popover.Content>...</Popover.Content>
  </Popover.Portal>
</Popover>
```

### With Title and Description

Structure popover content with title and description for better information hierarchy.

```tsx
<Popover>
  <Popover.Trigger>...</Popover.Trigger>
  <Popover.Portal>
    <Popover.Overlay />
    <Popover.Content>
      <Popover.Close />
      <Popover.Title>...</Popover.Title>
      <Popover.Description>...</Popover.Description>
    </Popover.Content>
  </Popover.Portal>
</Popover>
```

### With Arrow

Add an arrow pointing to the trigger element for better visual connection.

```tsx
<Popover>
  <Popover.Trigger>...</Popover.Trigger>
  <Popover.Portal>
    <Popover.Overlay />
    <Popover.Content placement="top">
      <Popover.Arrow />
      ...
    </Popover.Content>
  </Popover.Portal>
</Popover>
```

### Width Control

Control the width of the popover content using the `width` prop.

```tsx
{
  /* Fixed width in pixels */
}
<Popover>
  <Popover.Trigger>...</Popover.Trigger>
  <Popover.Portal>
    <Popover.Overlay />
    <Popover.Content width={320}>...</Popover.Content>
  </Popover.Portal>
</Popover>;

{
  /* Match trigger width */
}
<Popover>
  <Popover.Trigger>...</Popover.Trigger>
  <Popover.Portal>
    <Popover.Overlay />
    <Popover.Content width="trigger">...</Popover.Content>
  </Popover.Portal>
</Popover>;

{
  /* Full width (100%) */
}
<Popover>
  <Popover.Trigger>...</Popover.Trigger>
  <Popover.Portal>
    <Popover.Overlay />
    <Popover.Content width="full">...</Popover.Content>
  </Popover.Portal>
</Popover>;

{
  /* Auto-size to content (default) */
}
<Popover>
  <Popover.Trigger>...</Popover.Trigger>
  <Popover.Portal>
    <Popover.Overlay />
    <Popover.Content width="content-fit">...</Popover.Content>
  </Popover.Portal>
</Popover>;
```

### Bottom Sheet Presentation

Use bottom sheet presentation for mobile-optimized interaction patterns.

```tsx
<Popover>
  <Popover.Trigger>...</Popover.Trigger>
  <Popover.Portal>
    <Popover.Overlay />
    <Popover.Content presentation="bottom-sheet">
      <Popover.Title>...</Popover.Title>
      <Popover.Description>...</Popover.Description>
      <Popover.Close asChild>
        <Button>Close</Button>
      </Popover.Close>
    </Popover.Content>
  </Popover.Portal>
</Popover>
```

### Placement Options

Control where the popover appears relative to the trigger element.

```tsx
<Popover>
  <Popover.Trigger>...</Popover.Trigger>
  <Popover.Portal>
    <Popover.Content placement="left">...</Popover.Content>
  </Popover.Portal>
</Popover>
```

### Alignment Options

Fine-tune content alignment along the placement axis.

```tsx
<Popover>
  <Popover.Trigger>...</Popover.Trigger>
  <Popover.Portal>
    <Popover.Content placement="top" align="start">
      ...
    </Popover.Content>
  </Popover.Portal>
</Popover>
```

### Custom Animation

Configure custom animations for open and close transitions.

```tsx
<Popover>
  <Popover.Trigger>...</Popover.Trigger>
  <Popover.Portal
    progressAnimationConfigs={{
      onOpen: {
        animationType: 'spring',
        animationConfig: { damping: 15, stiffness: 300 },
      },
      onClose: {
        animationType: 'timing',
        animationConfig: { duration: 200 },
      },
    }}
  >
    <Popover.Content>...</Popover.Content>
  </Popover.Portal>
</Popover>
```

### Programmatic control

```tsx
// Open or close popover programmatically using ref
const popoverRef = useRef<PopoverTriggerRef>(null);

// Open programmatically
popoverRef.current?.open();

// Close programmatically
popoverRef.current?.close();

// Full example
<Popover>
  <Popover.Trigger ref={popoverRef} asChild>
    <Button>Trigger</Button>
  </Popover.Trigger>
  <Popover.Portal>
    <Popover.Overlay />
    <Popover.Content>
      <Text>Content</Text>
      <Button onPress={() => popoverRef.current?.close()}>Close</Button>
    </Popover.Content>
  </Popover.Portal>
</Popover>;
```

## Example

```tsx
import { Ionicons } from '@expo/vector-icons';
import { Button, Popover, useThemeColor } from 'heroui-native';
import { Text, View } from 'react-native';

export default function PopoverExample() {
  const themeColorMuted = useThemeColor('muted');

  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="tertiary" size="sm">
          <Button.StartContent>
            <Ionicons
              name="information-circle"
              size={20}
              color={themeColorMuted}
            />
          </Button.StartContent>
          <Button.LabelContent>Show Info</Button.LabelContent>
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Overlay />
        <Popover.Content width={320} className="gap-1 rounded-xl px-6 py-4">
          <Popover.Close className="absolute top-3 right-3 z-50" />
          <Popover.Title>Information</Popover.Title>
          <Popover.Description>
            This popover includes a title and description to provide more
            structured information to users.
          </Popover.Description>
        </Popover.Content>
      </Popover.Portal>
    </Popover>
  );
}
```

## Anatomy

```tsx
<Popover>
  <Popover.Trigger>...</Popover.Trigger>
  <Popover.Portal>
    <Popover.Overlay />
    <Popover.Content>
      <Popover.Arrow />
      <Popover.Close />
      <Popover.Title>...</Popover.Title>
      <Popover.Description>...</Popover.Description>
    </Popover.Content>
  </Popover.Portal>
</Popover>
```

- **Popover**: Main container that manages open/close state, positioning, and provides context to child components.
- **Popover.Trigger**: Clickable element that toggles popover visibility. Wraps any child element with press handlers.
- **Popover.Portal**: Renders popover content in a portal layer above other content. Ensures proper stacking and positioning.
- **Popover.Overlay**: Optional background overlay. Can be transparent or semi-transparent to capture outside clicks.
- **Popover.Content**: Container for popover content with positioning, styling, and collision detection. Supports both popover and bottom-sheet presentations.
- **Popover.Arrow**: Optional arrow element pointing to the trigger. Automatically positioned based on placement.
- **Popover.Close**: Close button that dismisses the popover when pressed. Renders a default X icon if no children provided.
- **Popover.Title**: Optional title text with pre-styled typography.
- **Popover.Description**: Optional description text with muted styling.

## API Reference

### Popover

| prop           | type                        | default | description                                         |
| -------------- | --------------------------- | ------- | --------------------------------------------------- |
| `children`     | `ReactNode`                 | -       | Children elements to be rendered inside the popover |
| `isOpen`       | `boolean`                   | -       | Whether the popover is open (controlled mode)       |
| `onOpenChange` | `(isOpen: boolean) => void` | -       | Callback when the popover open state changes        |
| `closeDelay`   | `number`                    | `400`   | Delay in milliseconds before closing the popover    |
| `asChild`      | `boolean`                   | `false` | Whether to render as a child element                |
| `...ViewProps` | `ViewProps`                 | -       | All standard React Native View props are supported  |

### Popover.Trigger

| prop                | type             | default | description                                             |
| ------------------- | ---------------- | ------- | ------------------------------------------------------- |
| `children`          | `ReactNode`      | -       | The trigger element content                             |
| `className`         | `string`         | -       | Additional CSS classes for the trigger                  |
| `asChild`           | `boolean`        | `true`  | Whether to render as a child element                    |
| `...PressableProps` | `PressableProps` | -       | All standard React Native Pressable props are supported |

### Popover.Portal

| prop                       | type                              | default | description                                         |
| -------------------------- | --------------------------------- | ------- | --------------------------------------------------- |
| `children`                 | `ReactNode`                       | -       | The portal content (required)                       |
| `hostName`                 | `string`                          | -       | Optional name of the host element for the portal    |
| `forceMount`               | `boolean`                         | -       | Whether to force mount the component in the DOM     |
| `className`                | `string`                          | -       | Additional CSS classes for the portal container     |
| `progressAnimationConfigs` | `PopoverProgressAnimationConfigs` | -       | Animation configurations for open/close transitions |
| `...ViewProps`             | `ViewProps`                       | -       | All standard React Native View props are supported  |

#### PopoverProgressAnimationConfigs

| prop      | type                                             | description                         |
| --------- | ------------------------------------------------ | ----------------------------------- |
| `onOpen`  | `SpringAnimationConfig \| TimingAnimationConfig` | Animation configuration for opening |
| `onClose` | `SpringAnimationConfig \| TimingAnimationConfig` | Animation configuration for closing |

### Popover.Overlay

| prop                         | type                 | default | description                                          |
| ---------------------------- | -------------------- | ------- | ---------------------------------------------------- |
| `className`                  | `string`             | -       | Additional CSS classes for the overlay               |
| `closeOnPress`               | `boolean`            | `true`  | Whether to close the popover when overlay is pressed |
| `forceMount`                 | `boolean`            | -       | Whether to force mount the component in the DOM      |
| `isDefaultAnimationDisabled` | `boolean`            | `false` | Whether to disable the default opacity animation     |
| `asChild`                    | `boolean`            | `false` | Whether to render as a child element                 |
| `...Animated.ViewProps`      | `Animated.ViewProps` | -       | All Reanimated Animated.View props are supported     |

### Popover.Content (Popover Presentation)

| prop                         | type                                             | default         | description                                            |
| ---------------------------- | ------------------------------------------------ | --------------- | ------------------------------------------------------ |
| `children`                   | `ReactNode`                                      | -               | The popover content                                    |
| `width`                      | `number \| 'trigger' \| 'content-fit' \| 'full'` | `'content-fit'` | Width sizing strategy for the content                  |
| `placement`                  | `'top' \| 'bottom' \| 'left' \| 'right'`         | `'bottom'`      | Placement of the popover relative to trigger           |
| `align`                      | `'start' \| 'center' \| 'end'`                   | `'start'`       | Alignment along the placement axis                     |
| `avoidCollisions`            | `boolean`                                        | `true`          | Whether to flip placement when close to viewport edges |
| `offset`                     | `number`                                         | `0`             | Distance from trigger element in pixels                |
| `alignOffset`                | `number`                                         | `0`             | Offset along the alignment axis in pixels              |
| `disablePositioningStyle`    | `boolean`                                        | `false`         | Whether to disable automatic positioning styles        |
| `forceMount`                 | `boolean`                                        | -               | Whether to force mount the component in the DOM        |
| `insets`                     | `Insets`                                         | -               | Screen edge insets to respect when positioning         |
| `className`                  | `string`                                         | -               | Additional CSS classes for the content container       |
| `presentation`               | `'popover'`                                      | -               | Presentation mode for the popover                      |
| `isDefaultAnimationDisabled` | `boolean`                                        | `false`         | Whether to disable the default animations              |
| `asChild`                    | `boolean`                                        | `false`         | Whether to render as a child element                   |
| `...Animated.ViewProps`      | `Animated.ViewProps`                             | -               | All Reanimated Animated.View props are supported       |

### Popover.Content (Bottom Sheet Presentation)

| prop                       | type                   | default | description                                      |
| -------------------------- | ---------------------- | ------- | ------------------------------------------------ |
| `children`                 | `ReactNode`            | -       | The bottom sheet content                         |
| `presentation`             | `'bottom-sheet'`       | -       | Presentation mode for the popover                |
| `bottomSheetViewClassName` | `string`               | -       | Additional CSS classes for the bottom sheet view |
| `bottomSheetViewProps`     | `BottomSheetViewProps` | -       | Props for the bottom sheet view                  |
| `enablePanDownToClose`     | `boolean`              | `true`  | Whether pan down gesture closes the sheet        |
| `backgroundStyle`          | `ViewStyle`            | -       | Style for the bottom sheet background            |
| `handleIndicatorStyle`     | `ViewStyle`            | -       | Style for the bottom sheet handle indicator      |
| `...BottomSheetProps`      | `BottomSheetProps`     | -       | All @gorhom/bottom-sheet props are supported     |

### Popover.Arrow

| prop           | type                                     | default | description                                         |
| -------------- | ---------------------------------------- | ------- | --------------------------------------------------- |
| `className`    | `string`                                 | -       | Additional CSS classes for the arrow                |
| `height`       | `number`                                 | `8`     | Height of the arrow in pixels                       |
| `width`        | `number`                                 | `16`    | Width of the arrow in pixels                        |
| `color`        | `string`                                 | -       | Color of the arrow (defaults to content background) |
| `placement`    | `'top' \| 'bottom' \| 'left' \| 'right'` | -       | Placement of the popover (inherited from content)   |
| `...ViewProps` | `ViewProps`                              | -       | All standard React Native View props are supported  |

### Popover.Close

| prop                | type                    | default | description                                             |
| ------------------- | ----------------------- | ------- | ------------------------------------------------------- |
| `children`          | `ReactNode`             | -       | The close button content                                |
| `className`         | `string`                | -       | Additional CSS classes for the close button             |
| `iconProps`         | `PopoverCloseIconProps` | -       | Close icon configuration                                |
| `hitSlop`           | `number \| Insets`      | `12`    | Additional touch area around the button                 |
| `asChild`           | `boolean`               | -       | Whether to render as a child element                    |
| `...PressableProps` | `PressableProps`        | -       | All standard React Native Pressable props are supported |

#### PopoverCloseIconProps

| prop    | type     | default              | description       |
| ------- | -------- | -------------------- | ----------------- |
| `size`  | `number` | `18`                 | Size of the icon  |
| `color` | `string` | `--colors.muted` | Color of the icon |

### Popover.Title

| prop           | type        | default | description                                        |
| -------------- | ----------- | ------- | -------------------------------------------------- |
| `children`     | `ReactNode` | -       | The title text content                             |
| `className`    | `string`    | -       | Additional CSS classes for the title               |
| `...TextProps` | `TextProps` | -       | All standard React Native Text props are supported |

### Popover.Description

| prop           | type        | default | description                                        |
| -------------- | ----------- | ------- | -------------------------------------------------- |
| `children`     | `ReactNode` | -       | The description text content                       |
| `className`    | `string`    | -       | Additional CSS classes for the description         |
| `...TextProps` | `TextProps` | -       | All standard React Native Text props are supported |

---

## pressable-feedback

# PressableFeedback

Container component that provides visual feedback for press interactions with automatic scale animation.

## Imports

Note: Before importing this component, ensure you have completed the setup as per the [Quick Start guide](../../../README.md).

```tsx
import { PressableFeedback } from 'heroui-native';
```

## Usage

### Basic Usage

The PressableFeedback component wraps content to provide press feedback effects. By default, it applies a subtle scale animation when pressed.

```tsx
<PressableFeedback>...</PressableFeedback>
```

### Highlight Variant

Default iOS-style highlight feedback effect with automatic scale animation.

```tsx
<PressableFeedback feedbackVariant="highlight">...</PressableFeedback>
```

### Ripple Variant

Android-style ripple feedback effect that emanates from the press point, combined with scale animation.

```tsx
<PressableFeedback feedbackVariant="ripple">...</PressableFeedback>
```

### Custom Highlight Animation

Configure highlight overlay opacity and background color while maintaining the default scale effect.

```tsx
<PressableFeedback
  feedbackVariant="highlight"
  animation={{
    highlight: {
      opacity: { value: [0, 0.2] },
      backgroundColor: { value: '#3b82f6' },
    },
  }}
>
  ...
</PressableFeedback>
```

### Custom Ripple Animation

Configure ripple effect color, opacity, and duration along with scale animation.

```tsx
<PressableFeedback
  feedbackVariant="ripple"
  animation={{
    ripple: {
      backgroundColor: { value: '#ec4899' },
      opacity: { value: [0, 0.3, 0] },
      progress: { baseDuration: 600 },
    },
  }}
>
  ...
</PressableFeedback>
```

### Feedback Position

Control whether the feedback effect renders above or below content.

```tsx
<PressableFeedback feedbackPosition="behind">
  ...
</PressableFeedback>

<PressableFeedback feedbackPosition="top">
  ...
</PressableFeedback>
```

### Custom Scale Animation

Customize or disable the default scale animation on press.

```tsx
<PressableFeedback
  animation={{
    scale: {
      value: 0.98,
      timingConfig: { duration: 150 }
    }
  }}
>
  ...
</PressableFeedback>

<PressableFeedback animation={{ scale: "disabled" }}>
  ...
</PressableFeedback>
```

### Disabled State

Disable press interactions and all feedback animations.

```tsx
<PressableFeedback animation="disabled">...</PressableFeedback>
```

## Example

```tsx
import { PressableFeedback, Card } from 'heroui-native';
import { View, Text, Image } from 'react-native';

export default function PressableFeedbackExample() {
  return (
    <View className="flex-1 items-center justify-center px-5">
      <View className="flex-row gap-4">
        <PressableFeedback
          feedbackVariant="ripple"
          className="flex-1 aspect-[1/1.3] rounded-3xl"
          animation={{
            ripple: {
              backgroundColor: { value: '#fecdd3' },
              opacity: { value: [0, 0.2, 0] },
            },
          }}
        >
          <Card className="flex-1">
            <View className="flex-1 gap-4">
              <Card.Header>
                <Image
                  source={{
                    uri: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg',
                  }}
                  style={{
                    height: 60,
                    aspectRatio: 1,
                    borderRadius: 14,
                  }}
                />
              </Card.Header>
              <Card.Body className="flex-1">
                <Card.Title>Indie Hackers</Card.Title>
                <Card.Description className="text-sm">
                  148 members
                </Card.Description>
              </Card.Body>
              <Card.Footer className="flex-row items-center gap-2">
                <View className="size-3 rounded-full bg-rose-400" />
                <AppText className="text-sm font-medium text-foreground">
                  @indiehackers
                </AppText>
              </Card.Footer>
            </View>
          </Card>
        </PressableFeedback>
        <PressableFeedback
          feedbackVariant="ripple"
          className="flex-1 aspect-[1/1.3] rounded-3xl"
          animation={{
            ripple: {
              backgroundColor: { value: '#67e8f9' },
            },
          }}
        >
          <Card className="flex-1">
            <View className="flex-1 gap-4">
              <Card.Header>
                <Image
                  source={{
                    uri: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo2.jpg',
                  }}
                  style={{
                    height: 60,
                    aspectRatio: 1,
                    borderRadius: 14,
                  }}
                />
              </Card.Header>
              <Card.Body className="flex-1">
                <Card.Title>AI Builders</Card.Title>
                <Card.Description className="text-sm">
                  362 members
                </Card.Description>
              </Card.Body>
              <Card.Footer className="flex-row items-center gap-2">
                <View className="size-3 rounded-full bg-emerald-400" />
                <AppText className="text-sm font-medium text-foreground">
                  @aibuilders
                </AppText>
              </Card.Footer>
            </View>
          </Card>
        </PressableFeedback>
      </View>
    </View>
  );
}
```

## API Reference

### PressableFeedback

The component includes a default scale animation (0.985) that is automatically applied on press. This scale value is intelligently adjusted based on container width for consistent visual feedback across different sizes.

| prop               | type                                                                                                                        | default       | description                                                                                                                           |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `children`         | `React.ReactNode`                                                                                                           | -             | Content to be wrapped with press feedback                                                                                             |
| `feedbackVariant`  | `'highlight' \| 'ripple'`                                                                                                   | `'highlight'` | Type of feedback effect to display                                                                                                    |
| `feedbackPosition` | `'behind' \| 'top'`                                                                                                         | `'top'`       | Controls z-index positioning of feedback effect relative to children                                                                  |
| `isDisabled`       | `boolean`                                                                                                                   | `false`       | Whether the pressable component is disabled                                                                                           |
| `className`        | `string`                                                                                                                    | -             | Additional CSS classes                                                                                                                |
| `animation`        | `boolean \| 'disabled' \| 'disable-all' \| PressableFeedbackHighlightRootAnimation \| PressableFeedbackRippleRootAnimation` | -             | Animation configuration. Set to `'disabled'` to disable root animations, `'disable-all'` to disable all animations including children |
| `...AnimatedProps` | `AnimatedProps<PressableProps>`                                                                                             | -             | All Reanimated Animated Pressable props are supported                                                                                 |

#### PressableFeedbackHighlightRootAnimation

| prop        | type                                  | description                               |
| ----------- | ------------------------------------- | ----------------------------------------- |
| `scale`     | `PressableFeedbackScaleAnimation`     | Scale animation for the root container    |
| `highlight` | `PressableFeedbackHighlightAnimation` | Highlight overlay animation configuration |

#### PressableFeedbackRippleRootAnimation

| prop     | type                               | description                            |
| -------- | ---------------------------------- | -------------------------------------- |
| `scale`  | `PressableFeedbackScaleAnimation`  | Scale animation for the root container |
| `ripple` | `PressableFeedbackRippleAnimation` | Ripple effect animation configuration  |

#### PressableFeedbackScaleAnimation

| prop                     | type               | default                                              | description                                                                |
| ------------------------ | ------------------ | ---------------------------------------------------- | -------------------------------------------------------------------------- |
| `value`                  | `number`           | `0.985`                                              | Scale value when pressed (automatically adjusted based on container width) |
| `timingConfig`           | `WithTimingConfig` | `{ duration: 300, easing: Easing.out(Easing.ease) }` | Animation timing configuration                                             |
| `ignoreScaleCoefficient` | `boolean`          | `false`                                              | Ignore automatic scale coefficient and use the scale value directly        |

#### PressableFeedbackHighlightAnimation

| prop              | type                            | description                           |
| ----------------- | ------------------------------- | ------------------------------------- |
| `opacity`         | `AnimationValue<OpacityConfig>` | Opacity animation for highlight       |
| `backgroundColor` | `AnimationValue<ColorConfig>`   | Background color of highlight overlay |

#### PressableFeedbackRippleAnimation

| prop              | type                                  | description                       |
| ----------------- | ------------------------------------- | --------------------------------- |
| `backgroundColor` | `AnimationValue<ColorConfig>`         | Background color of ripple effect |
| `progress`        | `AnimationValue<ProgressConfig>`      | Progress animation configuration  |
| `opacity`         | `AnimationValue<RippleOpacityConfig>` | Opacity animation for ripple      |
| `scale`           | `AnimationValue<RippleScaleConfig>`   | Scale animation for ripple        |

#### ProgressConfig

| prop                        | type      | default | description                                                                  |
| --------------------------- | --------- | ------- | ---------------------------------------------------------------------------- |
| `baseDuration`              | `number`  | `1000`  | Base duration for ripple progress (automatically adjusted based on diagonal) |
| `minBaseDuration`           | `number`  | -       | Minimum base duration for the ripple progress animation                      |
| `ignoreDurationCoefficient` | `boolean` | `false` | Ignore automatic duration coefficient and use base duration directly         |

---

## radio-group

# RadioGroup

A set of radio buttons where only one option can be selected at a time.

## Imports

Note: Before importing this component, ensure you have completed the setup as per the [Quick Start guide](../../../README.md).

```tsx
import { RadioGroup } from 'heroui-native';
```

## Usage

### Basic Usage

RadioGroup with simple string children automatically renders title and indicator.

```tsx
<RadioGroup value={value} onValueChange={setValue}>
  <RadioGroup.Item value="option1">Option 1</RadioGroup.Item>
  <RadioGroup.Item value="option2">Option 2</RadioGroup.Item>
  <RadioGroup.Item value="option3">Option 3</RadioGroup.Item>
</RadioGroup>
```

### With Descriptions

Add descriptive text below each radio option for additional context.

```tsx
<RadioGroup value={value} onValueChange={setValue}>
  <RadioGroup.Item value="standard">
    <View>
      <RadioGroup.Label>Standard Shipping</RadioGroup.Label>
      <RadioGroup.Description>
        Delivered in 5-7 business days
      </RadioGroup.Description>
    </View>
    <RadioGroup.Indicator />
  </RadioGroup.Item>
  <RadioGroup.Item value="express">
    <View>
      <RadioGroup.Label>Express Shipping</RadioGroup.Label>
      <RadioGroup.Description>
        Delivered in 2-3 business days
      </RadioGroup.Description>
    </View>
    <RadioGroup.Indicator />
  </RadioGroup.Item>
</RadioGroup>
```

### Custom Indicator

Replace the default indicator thumb with custom content.

```tsx
<RadioGroup value={value} onValueChange={setValue}>
  <RadioGroup.Item value="custom">
    <RadioGroup.Label>Custom Option</RadioGroup.Label>
    <RadioGroup.Indicator>
      {value === 'custom' && (
        <Animated.View entering={FadeIn}>
          <Icon name="check" size={12} />
        </Animated.View>
      )}
    </RadioGroup.Indicator>
  </RadioGroup.Item>
</RadioGroup>
```

### With Render Function

Use a render function on RadioGroup.Item to access state and customize the entire content.

```tsx
<RadioGroup value={value} onValueChange={setValue}>
  <RadioGroup.Item value="option1">
    {({ isSelected, isInvalid, isDisabled }) => (
      <>
        <RadioGroup.Label>Option 1</RadioGroup.Label>
        <RadioGroup.Indicator>
          {isSelected && <CustomIcon />}
        </RadioGroup.Indicator>
      </>
    )}
  </RadioGroup.Item>
</RadioGroup>
```

### With Error Message

Display validation errors below the radio group.

```tsx
<RadioGroup value={value} onValueChange={setValue} isInvalid={!value}>
  <RadioGroup.Item value="agree">I agree to the terms</RadioGroup.Item>
  <RadioGroup.Item value="disagree">I do not agree</RadioGroup.Item>
  <RadioGroup.ErrorMessage>
    Please select an option to continue
  </RadioGroup.ErrorMessage>
</RadioGroup>
```

## Example

```tsx
import { RadioGroup, Surface, useThemeColor } from 'heroui-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { AppText } from '../components/app-text';

export default function PaymentMethodExample() {
  const [paymentMethod, setPaymentMethod] = React.useState('card');
  const themeColorForeground = useThemeColor('foreground');

  return (
    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
      <RadioGroup.Item value="card">
        <View>
          <View className="flex-row items-center gap-1.5">
            <Ionicons
              name="card-outline"
              size={16}
              color={themeColorForeground}
            />
            <RadioGroup.Label>Credit/Debit Card</RadioGroup.Label>
          </View>
          <RadioGroup.Description>
            Pay securely with your credit or debit card
          </RadioGroup.Description>
        </View>
        <RadioGroup.Indicator />
      </RadioGroup.Item>

      <RadioGroup.Item value="paypal">
        <View>
          <RadioGroup.Label>PayPal</RadioGroup.Label>
          <RadioGroup.Description>
            Fast and secure payment with PayPal
          </RadioGroup.Description>
        </View>
        <RadioGroup.Indicator />
      </RadioGroup.Item>

      <RadioGroup.Item value="bank">
        <View>
          <RadioGroup.Label>Bank Transfer</RadioGroup.Label>
          <RadioGroup.Description>
            Direct transfer from your bank account
          </RadioGroup.Description>
        </View>
        <RadioGroup.Indicator />
      </RadioGroup.Item>
    </RadioGroup>
  );
}
```

## Anatomy

```tsx
<RadioGroup>
  <RadioGroup.Item>
    <RadioGroup.Label>...</RadioGroup.Label>
    <RadioGroup.Description>...</RadioGroup.Description>
    <RadioGroup.Indicator>
      <RadioGroup.IndicatorThumb />
    </RadioGroup.Indicator>
  </RadioGroup.Item>
  <RadioGroup.ErrorMessage>...</RadioGroup.ErrorMessage>
</RadioGroup>
```

- **RadioGroup**: Container that manages the selection state of radio items. Supports both horizontal and vertical orientations.
- **RadioGroup.Item**: Individual radio option within a RadioGroup. Must be used inside RadioGroup. Handles selection state and renders default indicator if no children provided. Supports render function children to access state (`isSelected`, `isInvalid`, `isDisabled`).
- **RadioGroup.Label**: Optional clickable text label for the radio option. Linked to the radio for accessibility.
- **RadioGroup.Description**: Optional secondary text below the label. Provides additional context about the radio option.
- **RadioGroup.Indicator**: Optional container for the radio circle. Renders default thumb if no children provided. Manages the visual selection state.
- **RadioGroup.IndicatorThumb**: Optional inner circle that appears when selected. Animates scale based on selection. Can be replaced with custom content.
- **RadioGroup.ErrorMessage**: Error message displayed when radio group is invalid. Shown with animation below the radio group content.

## API Reference

### RadioGroup

| prop            | type                    | default     | description                                        |
| --------------- | ----------------------- | ----------- | -------------------------------------------------- |
| `children`      | `React.ReactNode`       | `undefined` | Radio group content                                |
| `value`         | `string \| undefined`   | `undefined` | The currently selected value of the radio group    |
| `onValueChange` | `(val: string) => void` | `undefined` | Callback fired when the selected value changes     |
| `isDisabled`    | `boolean`               | `false`     | Whether the entire radio group is disabled         |
| `isInvalid`     | `boolean`               | `false`     | Whether the radio group is invalid                 |
| `isOnSurface`   | `boolean`               | `undefined` | Whether the radio group is on surface              |
| `className`     | `string`                | `undefined` | Custom class name                                  |
| `...ViewProps`  | `ViewProps`             | -           | All standard React Native View props are supported |

### RadioGroup.Item

| prop                | type                                                                         | default     | description                                                               |
| ------------------- | ---------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------- |
| `children`          | `React.ReactNode \| ((props: RadioGroupItemRenderProps) => React.ReactNode)` | `undefined` | Radio item content or render function to customize the radio item         |
| `value`             | `string`                                                                     | `undefined` | The value associated with this radio item                                 |
| `isDisabled`        | `boolean`                                                                    | `false`     | Whether this specific radio item is disabled                              |
| `isInvalid`         | `boolean`                                                                    | `false`     | Whether the radio item is invalid                                         |
| `className`         | `string`                                                                     | `undefined` | Custom class name                                                         |
| `...PressableProps` | `PressableProps`                                                             | -           | All standard React Native Pressable props are supported (except disabled) |

#### RadioGroupItemRenderProps

| prop         | type      | description                        |
| ------------ | --------- | ---------------------------------- |
| `isSelected` | `boolean` | Whether the radio item is selected |
| `isInvalid`  | `boolean` | Whether the radio item is invalid  |
| `isDisabled` | `boolean` | Whether the radio item is disabled |

### RadioGroup.Indicator

| prop                    | type                       | default     | description                                      |
| ----------------------- | -------------------------- | ----------- | ------------------------------------------------ |
| `children`              | `React.ReactNode`          | `undefined` | Indicator content                                |
| `isOnSurface`           | `boolean`                  | `undefined` | Whether the indicator is on surface              |
| `className`             | `string`                   | `undefined` | Custom class name                                |
| `...Animated.ViewProps` | `AnimatedProps<ViewProps>` | -           | All Reanimated Animated.View props are supported |

### RadioGroup.IndicatorThumb

| prop                    | type                       | default     | description                                      |
| ----------------------- | -------------------------- | ----------- | ------------------------------------------------ |
| `className`             | `string`                   | `undefined` | Custom class name                                |
| `...Animated.ViewProps` | `AnimatedProps<ViewProps>` | -           | All Reanimated Animated.View props are supported |

### RadioGroup.Label

| prop                    | type                       | default     | description                                      |
| ----------------------- | -------------------------- | ----------- | ------------------------------------------------ |
| `children`              | `React.ReactNode`          | `undefined` | Label text content                               |
| `className`             | `string`                   | `undefined` | Custom class name for the label element          |
| `...Animated.TextProps` | `AnimatedProps<TextProps>` | -           | All Reanimated Animated.Text props are supported |

### RadioGroup.Description

| prop                    | type                       | default     | description                                      |
| ----------------------- | -------------------------- | ----------- | ------------------------------------------------ |
| `children`              | `React.ReactNode`          | `undefined` | Description text content                         |
| `className`             | `string`                   | `undefined` | Custom class name for the description element    |
| `...Animated.TextProps` | `AnimatedProps<TextProps>` | -           | All Reanimated Animated.Text props are supported |

### RadioGroup.ErrorMessage

| prop                    | type                           | default     | description                                      |
| ----------------------- | ------------------------------ | ----------- | ------------------------------------------------ |
| `children`              | `React.ReactNode`              | `undefined` | The content of the error field                   |
| `isInvalid`             | `boolean`                      | `false`     | Controls the visibility of the error field       |
| `className`             | `string`                       | `undefined` | Additional CSS class for styling                 |
| `classNames`            | `ElementSlots<ErrorViewSlots>` | `undefined` | Additional CSS classes for different parts       |
| `textProps`             | `TextProps`                    | `undefined` | Additional props to pass to the Text component   |
| `...Animated.ViewProps` | `AnimatedProps<ViewProps>`     | -           | All Reanimated Animated.View props are supported |

## Hooks

### useRadioGroup

**Returns:**

| Property        | Type                      | Description                                    |
| --------------- | ------------------------- | ---------------------------------------------- |
| `value`         | `string \| undefined`     | Currently selected value                       |
| `isDisabled`    | `boolean`                 | Whether the radio group is disabled            |
| `isInvalid`     | `boolean`                 | Whether the radio group is in an invalid state |
| `onValueChange` | `(value: string) => void` | Function to change the selected value          |

### useRadioGroupItem

**Returns:**

| Property     | Type      | Description                        |
| ------------ | --------- | ---------------------------------- |
| `isSelected` | `boolean` | Whether the radio item is selected |
| `isDisabled` | `boolean` | Whether the radio item is disabled |
| `isInvalid`  | `boolean` | Whether the radio item is invalid  |

---

## scroll-shadow

# ScrollShadow

Adds dynamic gradient shadows to scrollable content based on scroll position and overflow.

## Imports

Note: Before importing this component, ensure you have completed the setup as per the [Quick Start guide](../../../README.md).

```tsx
import { ScrollShadow } from 'heroui-native';
```

## Usage

### Basic Usage

Wrap any scrollable component to automatically add edge shadows.

```tsx
<ScrollShadow LinearGradientComponent={LinearGradient}>
  <ScrollView>...</ScrollView>
</ScrollShadow>
```

### Horizontal Scrolling

The component auto-detects horizontal scrolling from the child's `horizontal` prop.

```tsx
<ScrollShadow LinearGradientComponent={LinearGradient}>
  <FlatList horizontal data={data} renderItem={...} />
</ScrollShadow>
```

### Custom Shadow Size

Control the gradient shadow height/width with the `size` prop.

```tsx
<ScrollShadow size={100} LinearGradientComponent={LinearGradient}>
  <ScrollView>...</ScrollView>
</ScrollShadow>
```

### Visibility Control

Specify which shadows to display using the `visibility` prop.

```tsx
<ScrollShadow visibility="top" LinearGradientComponent={LinearGradient}>
  <ScrollView>...</ScrollView>
</ScrollShadow>

<ScrollShadow visibility="bottom" LinearGradientComponent={LinearGradient}>
  <ScrollView>...</ScrollView>
</ScrollShadow>

<ScrollShadow visibility="none" LinearGradientComponent={LinearGradient}>
  <ScrollView>...</ScrollView>
</ScrollShadow>
```

### Custom Shadow Color

Override the default shadow color which uses the theme's background.

```tsx
<ScrollShadow color="#ffffff" LinearGradientComponent={LinearGradient}>
  <ScrollView>...</ScrollView>
</ScrollShadow>
```

### With Custom Scroll Handler

**Important:** ScrollShadow internally converts the child to a Reanimated animated component. If you need to use the `onScroll` prop, you must use `useAnimatedScrollHandler` from react-native-reanimated.

```tsx
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useAnimatedScrollHandler } from 'react-native-reanimated';

const scrollHandler = useAnimatedScrollHandler({
  onScroll: (event) => {
    console.log(event.contentOffset.y);
  },
});

<ScrollShadow LinearGradientComponent={LinearGradient}>
  <Animated.ScrollView onScroll={scrollHandler}>...</Animated.ScrollView>
</ScrollShadow>;
```

## Example

```tsx
import { ScrollShadow, Surface } from 'heroui-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, ScrollView, Text, View } from 'react-native';

export default function ScrollShadowExample() {
  const horizontalData = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    title: `Card ${i + 1}`,
  }));

  return (
    <View className="flex-1 bg-background">
      <Text className="px-5 py-3 text-lg font-semibold">Horizontal List</Text>
      <ScrollShadow LinearGradientComponent={LinearGradient}>
        <FlatList
          data={horizontalData}
          horizontal
          renderItem={({ item }) => (
            <Surface variant="2" className="w-32 h-24 justify-center px-4">
              <Text>{item.title}</Text>
            </Surface>
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="p-5 gap-4"
        />
      </ScrollShadow>

      <Text className="px-5 py-3 text-lg font-semibold">Vertical Content</Text>
      <ScrollShadow
        size={80}
        className="h-48"
        LinearGradientComponent={LinearGradient}
      >
        <ScrollView
          contentContainerClassName="p-5"
          showsVerticalScrollIndicator={false}
        >
          <Text className="mb-4 text-2xl font-bold">Long Content</Text>
          <Text className="mb-4 text-base leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </Text>
          <Text className="mb-4 text-base leading-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae.
          </Text>
        </ScrollView>
      </ScrollShadow>
    </View>
  );
}
```

## API Reference

### ScrollShadow

| prop           | type                                                                   | default     | description                                                                                                   |
| -------------- | ---------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `children`     | `React.ReactElement`                                                   | -           | The scrollable component to enhance with shadows. Must be a single React element (ScrollView, FlatList, etc.) |
| `LinearGradientComponent` | `ComponentType<LinearGradientProps>`                           | **required** | LinearGradient component from any compatible library (expo-linear-gradient, react-native-linear-gradient, etc.) |
| `size`         | `number`                                                               | `50`        | Size (height/width) of the gradient shadow in pixels                                                          |
| `orientation`  | `'horizontal' \| 'vertical'`                                           | auto-detect | Orientation of the scroll shadow. If not provided, will auto-detect from child's `horizontal` prop            |
| `visibility`   | `'auto' \| 'top' \| 'bottom' \| 'left' \| 'right' \| 'both' \| 'none'` | `'auto'`    | Visibility mode for the shadows. 'auto' shows shadows based on scroll position and content overflow           |
| `color`        | `string`                                                               | theme color | Custom color for the gradient shadow. If not provided, uses the theme's background color                      |
| `isEnabled`    | `boolean`                                                              | `true`      | Whether the shadow effect is enabled                                                                          |
| `className`    | `string`                                                               | -           | Additional CSS classes to apply to the container                                                              |
| `...ViewProps` | `ViewProps`                                                            | -           | All standard React Native View props are supported                                                            |

### LinearGradientProps

The `LinearGradientComponent` prop expects a component that accepts these props:

| prop           | type                              | description                                                                |
| -------------- | --------------------------------- | -------------------------------------------------------------------------- |
| `colors`       | `any`                             | Array of colors for the gradient                                          |
| `locations`    | `any` (optional)                  | Array of numbers defining the location of each gradient color stop        |
| `start`        | `any` (optional)                  | Start point of the gradient (e.g., `{ x: 0, y: 0 }`)                    |
| `end`          | `any` (optional)                  | End point of the gradient (e.g., `{ x: 1, y: 0 }`)                      |
| `style`        | `StyleProp<ViewStyle>` (optional) | Style to apply to the gradient view                                      |

---

## select

# Select

Displays a list of options for the user to pick from—triggered by a button.

## Imports

Note: Before importing this component, ensure you have completed the setup as per the [Quick Start guide](../../../README.md).

```tsx
import { Select } from 'heroui-native';
```

## Usage

### Basic Usage

The Select component uses compound parts to create dropdown selection interfaces.

```tsx
<Select>
  <Select.Trigger>...</Select.Trigger>
  <Select.Portal>
    <Select.Overlay />
    <Select.Content>
      <Select.Item value="1" label="Option 1" />
      <Select.Item value="2" label="Option 2" />
    </Select.Content>
  </Select.Portal>
</Select>
```

### With Value Display

Display the selected value in the trigger using the Value component.

```tsx
<Select>
  <Select.Trigger>
    <Select.Value placeholder="Choose an option" />
  </Select.Trigger>
  <Select.Portal>
    <Select.Overlay />
    <Select.Content>
      <Select.Item value="apple" label="Apple" />
      <Select.Item value="orange" label="Orange" />
      <Select.Item value="banana" label="Banana" />
    </Select.Content>
  </Select.Portal>
</Select>
```

### Popover Presentation

Use popover presentation for floating content with automatic positioning.

```tsx
<Select>
  <Select.Trigger>...</Select.Trigger>
  <Select.Portal>
    <Select.Overlay />
    <Select.Content presentation="popover" placement="bottom" align="center">
      <Select.Item value="1" label="Item 1" />
      <Select.Item value="2" label="Item 2" />
    </Select.Content>
  </Select.Portal>
</Select>
```

### Width Control

Control the width of the select content using the `width` prop. This only works with popover presentation.

```tsx
{
  /* Fixed width in pixels */
}
<Select>
  <Select.Trigger>...</Select.Trigger>
  <Select.Portal>
    <Select.Overlay />
    <Select.Content width={280} presentation="popover">
      <Select.Item value="1" label="Item 1" />
    </Select.Content>
  </Select.Portal>
</Select>;

{
  /* Match trigger width */
}
<Select>
  <Select.Trigger>...</Select.Trigger>
  <Select.Portal>
    <Select.Overlay />
    <Select.Content width="trigger" presentation="popover">
      <Select.Item value="1" label="Item 1" />
    </Select.Content>
  </Select.Portal>
</Select>;

{
  /* Full width (100%) */
}
<Select>
  <Select.Trigger>...</Select.Trigger>
  <Select.Portal>
    <Select.Overlay />
    <Select.Content width="full" presentation="popover">
      <Select.Item value="1" label="Item 1" />
    </Select.Content>
  </Select.Portal>
</Select>;

{
  /* Auto-size to content (default) */
}
<Select>
  <Select.Trigger>...</Select.Trigger>
  <Select.Portal>
    <Select.Overlay />
    <Select.Content width="content-fit" presentation="popover">
      <Select.Item value="1" label="Item 1" />
    </Select.Content>
  </Select.Portal>
</Select>;
```

### Bottom Sheet Presentation

Use bottom sheet for mobile-optimized selection experience.

```tsx
<Select>
  <Select.Trigger>...</Select.Trigger>
  <Select.Portal>
    <Select.Overlay />
    <Select.Content presentation="bottom-sheet" snapPoints={['35%']}>
      <Select.Item value="1" label="Item 1" />
      <Select.Item value="2" label="Item 2" />
    </Select.Content>
  </Select.Portal>
</Select>
```

### Dialog Presentation

Use dialog presentation for centered modal-style selection.

```tsx
<Select>
  <Select.Trigger>...</Select.Trigger>
  <Select.Portal>
    <Select.Overlay />
    <Select.Content presentation="dialog">
      <Select.Close />
      <Select.ListLabel>Choose an option</Select.ListLabel>
      <Select.Item value="1" label="Item 1" />
      <Select.Item value="2" label="Item 2" />
    </Select.Content>
  </Select.Portal>
</Select>
```

### Custom Item Content

Customize item appearance with custom content and indicators.

```tsx
<Select>
  <Select.Trigger>...</Select.Trigger>
  <Select.Portal>
    <Select.Overlay />
    <Select.Content>
      <Select.Item value="us" label="United States">
        <View className="flex-row items-center gap-3 flex-1">
          <Text>🇺🇸</Text>
          <Select.ItemLabel />
        </View>
        <Select.ItemIndicator />
      </Select.Item>
      <Select.Item value="uk" label="United Kingdom">
        <View className="flex-row items-center gap-3 flex-1">
          <Text>🇬🇧</Text>
          <Select.ItemLabel />
        </View>
        <Select.ItemIndicator />
      </Select.Item>
    </Select.Content>
  </Select.Portal>
</Select>
```

### With Item Description

Add descriptions to items for additional context.

```tsx
<Select>
  <Select.Trigger>...</Select.Trigger>
  <Select.Portal>
    <Select.Overlay />
    <Select.Content>
      <Select.Item value="basic" label="Basic">
        <View className="flex-1">
          <Select.ItemLabel />
          <Select.ItemDescription>
            Essential features for personal use
          </Select.ItemDescription>
        </View>
        <Select.ItemIndicator />
      </Select.Item>
    </Select.Content>
  </Select.Portal>
</Select>
```

### Controlled Mode

Control the select state programmatically.

```tsx
const [value, setValue] = useState();
const [isOpen, setIsOpen] = useState(false);

<Select
  value={value}
  onValueChange={setValue}
  isOpen={isOpen}
  onOpenChange={setIsOpen}
>
  <Select.Trigger>
    <Select.Value placeholder="Select..." />
  </Select.Trigger>
  <Select.Portal>
    <Select.Overlay />
    <Select.Content>
      <Select.Item value="1" label="Option 1" />
      <Select.Item value="2" label="Option 2" />
    </Select.Content>
  </Select.Portal>
</Select>;
```

## Example

```tsx
import { Button, Select } from 'heroui-native';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

type CountryOption = {
  value: string;
  label: string;
  flag: string;
  code: string;
};

const COUNTRIES: CountryOption[] = [
  { value: 'US', label: 'United States', flag: '🇺🇸', code: '+1' },
  { value: 'GB', label: 'United Kingdom', flag: '🇬🇧', code: '+44' },
  { value: 'CA', label: 'Canada', flag: '🇨🇦', code: '+1' },
  { value: 'AU', label: 'Australia', flag: '🇦🇺', code: '+61' },
];

export default function SelectExample() {
  const [country, setCountry] = useState<CountryOption>();

  return (
    <Select
      value={country}
      onValueChange={(value) => {
        const selected = COUNTRIES.find((c) => c.value === value?.value);
        setCountry(selected);
      }}
    >
      <Select.Trigger asChild>
        <Button variant="tertiary" size="sm">
          {country ? (
            <View className="flex-row items-center gap-2">
              <Text className="text-base">{country.flag}</Text>
              <Text className="text-sm text-foreground">{country.code}</Text>
            </View>
          ) : (
            <Text className="text-foreground">Select Country</Text>
          )}
        </Button>
      </Select.Trigger>
      <Select.Portal>
        <Select.Overlay />
        <Select.Content width={280} className="rounded-2xl" placement="bottom">
          <ScrollView>
            {COUNTRIES.map((item) => (
              <Select.Item
                key={item.value}
                value={item.value}
                label={item.label}
              >
                <View className="flex-row items-center gap-3 flex-1">
                  <Text className="text-2xl">{item.flag}</Text>
                  <Text className="text-sm text-muted w-10">{item.code}</Text>
                  <Text className="text-base text-foreground flex-1">
                    {item.label}
                  </Text>
                </View>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </ScrollView>
        </Select.Content>
      </Select.Portal>
    </Select>
  );
}
```

## Anatomy

```tsx
<Select>
  <Select.Trigger>
    <Select.Value />
  </Select.Trigger>
  <Select.Portal>
    <Select.Overlay />
    <Select.Content>
      <Select.Close />
      <Select.ListLabel>...</Select.ListLabel>
      <Select.Item>
        <Select.ItemLabel />
        <Select.ItemDescription>...</Select.ItemDescription>
        <Select.ItemIndicator />
      </Select.Item>
    </Select.Content>
  </Select.Portal>
</Select>
```

- **Select**: Main container that manages open/close state, value selection and provides context to child components.
- **Select.Trigger**: Clickable element that toggles the select visibility. Wraps any child element with press handlers.
- **Select.Value**: Displays the selected value or placeholder text. Automatically updates when selection changes.
- **Select.Portal**: Renders select content in a portal layer above other content. Ensures proper stacking and positioning.
- **Select.Overlay**: Optional background overlay. Can be transparent or semi-transparent to capture outside clicks.
- **Select.Content**: Container for select content with three presentation modes: popover (floating with positioning), bottom sheet modal, or dialog modal.
- **Select.Close**: Close button that dismisses the select when pressed. Renders a default X icon if no children provided.
- **Select.ListLabel**: Label for the list of items with pre-styled typography.
- **Select.Item**: Selectable option item. Handles selection state and press events.
- **Select.ItemLabel**: Displays the label text for an item.
- **Select.ItemDescription**: Optional description text for items with muted styling.
- **Select.ItemIndicator**: Optional indicator shown for selected items. Renders a check icon by default.

## API Reference

### Select

| prop                       | type                        | default | description                                        |
| -------------------------- | --------------------------- | ------- | -------------------------------------------------- |
| `children`                 | `ReactNode`                 | -       | The content of the select                          |
| `value`                    | `any`                       | -       | The selected value (controlled mode)               |
| `onValueChange`            | `(value: any) => void`      | -       | Callback when the value changes                    |
| `defaultValue`             | `any`                       | -       | The default selected value (uncontrolled mode)     |
| `isOpen`                   | `boolean`                   | -       | Whether the select is open (controlled mode)       |
| `onOpenChange`             | `(isOpen: boolean) => void` | -       | Callback when the select open state changes        |
| `closeDelay`               | `number`                    | `400`   | Delay in milliseconds before closing the select    |
| `isDisabled`               | `boolean`                   | `false` | Whether the select is disabled                     |
| `isDismissKeyboardOnClose` | `boolean`                   | `true`  | Whether to dismiss keyboard when select closes     |
| `asChild`                  | `boolean`                   | `false` | Whether to render as a child element               |
| `...ViewProps`             | `ViewProps`                 | -       | All standard React Native View props are supported |

### Select.Trigger

| prop                | type             | default | description                                             |
| ------------------- | ---------------- | ------- | ------------------------------------------------------- |
| `children`          | `ReactNode`      | -       | The trigger element content                             |
| `className`         | `string`         | -       | Additional CSS classes for the trigger                  |
| `asChild`           | `boolean`        | `true`  | Whether to render as a child element                    |
| `...PressableProps` | `PressableProps` | -       | All standard React Native Pressable props are supported |

### Select.Value

| prop           | type        | default | description                                        |
| -------------- | ----------- | ------- | -------------------------------------------------- |
| `placeholder`  | `string`    | -       | Placeholder text when no value is selected         |
| `className`    | `string`    | -       | Additional CSS classes for the value               |
| `...TextProps` | `TextProps` | -       | All standard React Native Text props are supported |

### Select.Portal

| prop                       | type                             | default | description                                         |
| -------------------------- | -------------------------------- | ------- | --------------------------------------------------- |
| `children`                 | `ReactNode`                      | -       | The portal content (required)                       |
| `className`                | `string`                         | -       | Additional CSS classes for the portal container     |
| `progressAnimationConfigs` | `SelectProgressAnimationConfigs` | -       | Animation configurations for open/close transitions |
| `hostName`                 | `string`                         | -       | Optional name of the host element for the portal    |
| `forceMount`               | `boolean`                        | -       | Whether to force mount the component in the DOM     |
| `...ViewProps`             | `ViewProps`                      | -       | All standard React Native View props are supported  |

#### SelectProgressAnimationConfigs

| prop      | type                                             | description                         |
| --------- | ------------------------------------------------ | ----------------------------------- |
| `onOpen`  | `SpringAnimationConfig \| TimingAnimationConfig` | Animation configuration for opening |
| `onClose` | `SpringAnimationConfig \| TimingAnimationConfig` | Animation configuration for closing |

### Select.Overlay

| prop                         | type                 | default | description                                         |
| ---------------------------- | -------------------- | ------- | --------------------------------------------------- |
| `className`                  | `string`             | -       | Additional CSS classes for the overlay              |
| `isDefaultAnimationDisabled` | `boolean`            | `false` | Whether to disable the default opacity animation    |
| `closeOnPress`               | `boolean`            | `true`  | Whether to close the select when overlay is pressed |
| `forceMount`                 | `boolean`            | -       | Whether to force mount the component in the DOM     |
| `asChild`                    | `boolean`            | `false` | Whether to render as a child element                |
| `...Animated.ViewProps`      | `Animated.ViewProps` | -       | All Reanimated Animated.View props are supported    |

### Select.Content (Popover Presentation)

| prop                         | type                                             | default         | description                                            |
| ---------------------------- | ------------------------------------------------ | --------------- | ------------------------------------------------------ |
| `children`                   | `ReactNode`                                      | -               | The select content                                     |
| `width`                      | `number \| 'trigger' \| 'content-fit' \| 'full'` | `'content-fit'` | Width sizing strategy for the content                  |
| `presentation`               | `'popover'`                                      | `'popover'`     | Presentation mode for the select                       |
| `placement`                  | `'top' \| 'bottom' \| 'left' \| 'right'`         | `'bottom'`      | Placement of the content relative to trigger           |
| `align`                      | `'start' \| 'center' \| 'end'`                   | `'center'`      | Alignment along the placement axis                     |
| `avoidCollisions`            | `boolean`                                        | `true`          | Whether to flip placement when close to viewport edges |
| `offset`                     | `number`                                         | `8`             | Distance from trigger element in pixels                |
| `alignOffset`                | `number`                                         | `0`             | Offset along the alignment axis in pixels              |
| `className`                  | `string`                                         | -               | Additional CSS classes for the content container       |
| `isDefaultAnimationDisabled` | `boolean`                                        | `false`         | Whether to disable the default animations              |
| `disablePositioningStyle`    | `boolean`                                        | `false`         | Whether to disable automatic positioning styles        |
| `forceMount`                 | `boolean`                                        | -               | Whether to force mount the component in the DOM        |
| `insets`                     | `Insets`                                         | -               | Screen edge insets to respect when positioning         |
| `asChild`                    | `boolean`                                        | `false`         | Whether to render as a child element                   |
| `...Animated.ViewProps`      | `Animated.ViewProps`                             | -               | All Reanimated Animated.View props are supported       |

### Select.Content (Bottom Sheet Presentation)

| prop                       | type               | default | description                                      |
| -------------------------- | ------------------ | ------- | ------------------------------------------------ |
| `children`                 | `ReactNode`        | -       | The bottom sheet content                         |
| `presentation`             | `'bottom-sheet'`   | -       | Presentation mode for the select                 |
| `bottomSheetViewClassName` | `string`           | -       | Additional CSS classes for the bottom sheet view |
| `...BottomSheetProps`      | `BottomSheetProps` | -       | All @gorhom/bottom-sheet props are supported     |

### Select.Content (Dialog Presentation)

| prop                         | type                                     | default | description                                      |
| ---------------------------- | ---------------------------------------- | ------- | ------------------------------------------------ |
| `children`                   | `ReactNode`                              | -       | The dialog content                               |
| `presentation`               | `'dialog'`                               | -       | Presentation mode for the select                 |
| `classNames`                 | `{ wrapper?: string; content?: string }` | -       | Additional CSS classes for wrapper and content   |
| `isDefaultAnimationDisabled` | `boolean`                                | `false` | Whether to disable the default animations        |
| `forceMount`                 | `boolean`                                | -       | Whether to force mount the component in the DOM  |
| `asChild`                    | `boolean`                                | `false` | Whether to render as a child element             |
| `...Animated.ViewProps`      | `Animated.ViewProps`                     | -       | All Reanimated Animated.View props are supported |

### Select.Close

| prop                | type                   | default | description                                             |
| ------------------- | ---------------------- | ------- | ------------------------------------------------------- |
| `children`          | `ReactNode`            | -       | The close button content                                |
| `className`         | `string`               | -       | Additional CSS classes for the close button             |
| `iconProps`         | `SelectCloseIconProps` | -       | Close icon configuration                                |
| `asChild`           | `boolean`              | -       | Whether to render as a child element                    |
| `...PressableProps` | `PressableProps`       | -       | All standard React Native Pressable props are supported |

#### SelectCloseIconProps

| prop    | type     | default          | description       |
| ------- | -------- | ---------------- | ----------------- |
| `size`  | `number` | `18`             | Size of the icon  |
| `color` | `string` | `--colors-muted` | Color of the icon |

### Select.ListLabel

| prop           | type        | default | description                                        |
| -------------- | ----------- | ------- | -------------------------------------------------- |
| `children`     | `ReactNode` | -       | The label text content                             |
| `className`    | `string`    | -       | Additional CSS classes for the list label          |
| `...TextProps` | `TextProps` | -       | All standard React Native Text props are supported |

### Select.Item

| prop                | type             | default | description                                             |
| ------------------- | ---------------- | ------- | ------------------------------------------------------- |
| `children`          | `ReactNode`      | -       | Custom item content. Defaults to label and indicator    |
| `value`             | `any`            | -       | The value associated with this item (required)          |
| `label`             | `string`         | -       | The label text for this item (required)                 |
| `isDisabled`        | `boolean`        | `false` | Whether this item is disabled                           |
| `className`         | `string`         | -       | Additional CSS classes for the item                     |
| `...PressableProps` | `PressableProps` | -       | All standard React Native Pressable props are supported |

### Select.ItemLabel

| prop           | type        | default | description                                        |
| -------------- | ----------- | ------- | -------------------------------------------------- |
| `className`    | `string`    | -       | Additional CSS classes for the item label          |
| `...TextProps` | `TextProps` | -       | All standard React Native Text props are supported |

### Select.ItemDescription

| prop           | type        | default | description                                        |
| -------------- | ----------- | ------- | -------------------------------------------------- |
| `children`     | `ReactNode` | -       | The description text content                       |
| `className`    | `string`    | -       | Additional CSS classes for the item description    |
| `...TextProps` | `TextProps` | -       | All standard React Native Text props are supported |

### Select.ItemIndicator

| prop           | type                           | default | description                                        |
| -------------- | ------------------------------ | ------- | -------------------------------------------------- |
| `children`     | `ReactNode`                    | -       | Custom indicator content. Defaults to check icon   |
| `className`    | `string`                       | -       | Additional CSS classes for the item indicator      |
| `iconProps`    | `SelectItemIndicatorIconProps` | -       | Check icon configuration                           |
| `...ViewProps` | `ViewProps`                    | -       | All standard React Native View props are supported |

#### SelectItemIndicatorIconProps

| prop    | type     | default          | description       |
| ------- | -------- | ---------------- | ----------------- |
| `size`  | `number` | `16`             | Size of the icon  |
| `color` | `string` | `--colors-muted` | Color of the icon |

## Hooks

### useSelect

Hook to access the Select root context. Returns the select state and control functions.

```tsx
import { useSelect } from 'heroui-native';

const {
  isOpen,
  onOpenChange,
  selectState,
  isDisabled,
  triggerPosition,
  setTriggerPosition,
  contentLayout,
  setContentLayout,
  nativeID,
  progress,
  isDragging,
  closeDelay,
  value,
  onValueChange,
  isDismissKeyboardOnClose,
} = useSelect();
```

#### Return Value

| property                   | type                                         | description                                           |
| -------------------------- | -------------------------------------------- | ----------------------------------------------------- |
| `isOpen`                   | `boolean`                                    | Whether the select is currently open                  |
| `onOpenChange`             | `(open: boolean) => void`                    | Callback to change the open state                     |
| `selectState`              | `'idle' \| 'open' \| 'close'`                | Extended internal state for animation control         |
| `isDisabled`               | `boolean \| undefined`                       | Whether the select is disabled                        |
| `triggerPosition`          | `LayoutPosition \| null`                     | Position of the trigger element relative to viewport  |
| `setTriggerPosition`       | `(position: LayoutPosition \| null) => void` | Updates the trigger element's position                |
| `contentLayout`            | `LayoutRectangle \| null`                    | Layout measurements of the select content             |
| `setContentLayout`         | `(layout: LayoutRectangle \| null) => void`  | Updates the content layout measurements               |
| `nativeID`                 | `string`                                     | Unique identifier for the select instance             |
| `progress`                 | `SharedValue<number>`                        | Progress value for animations (0-1)                   |
| `isDragging`               | `SharedValue<boolean>`                       | Whether the select content is currently being dragged |
| `closeDelay`               | `number \| undefined`                        | Delay in milliseconds before the select closes        |
| `value`                    | `SelectOption \| undefined`                  | Currently selected option                             |
| `onValueChange`            | `(option: SelectOption) => void`             | Callback fired when the selected value changes        |
| `isDismissKeyboardOnClose` | `boolean \| undefined`                       | Whether to dismiss keyboard when the select closes    |

### useSelectItem

Hook to access the Select Item context. Returns the item's value and label.

```tsx
import { useSelectItem } from 'heroui-native';

const { itemValue, label } = useSelectItem();
```

#### Return Value

| property    | type     | description                        |
| ----------- | -------- | ---------------------------------- |
| `itemValue` | `string` | The value of the current item      |
| `label`     | `string` | The label text of the current item |

---

## skeleton

# Skeleton

Displays a loading placeholder with shimmer or pulse animation effects.

## Imports

Note: Before importing this component, ensure you have completed the setup as per the [Quick Start guide](../../../README.md).

```tsx
import { Skeleton } from 'heroui-native';
```

## Usage

### Basic Usage

The Skeleton component creates an animated placeholder while content is loading.

```tsx
<Skeleton className="h-20 w-full rounded-lg" />
```

### With Content

Show skeleton while loading, then display content when ready.

```tsx
<Skeleton isLoading={isLoading} className="h-20 rounded-lg">
  <View className="h-20 bg-primary rounded-lg">
    <Text>Loaded Content</Text>
  </View>
</Skeleton>
```

### Animation Types

Control the animation style with the `animationType` prop.

```tsx
<Skeleton animationType="shimmer" className="h-20 w-full rounded-lg" />
<Skeleton animationType="pulse" className="h-20 w-full rounded-lg" />
<Skeleton animationType="none" className="h-20 w-full rounded-lg" />
```

### Custom Shimmer Configuration

Customize the shimmer effect with duration, speed, and highlight color.

```tsx
<Skeleton
  className="h-16 w-full rounded-lg"
  animationType="shimmer"
  shimmerConfig={{
    duration: 2000,
    speed: 2,
    highlightColor: 'rgba(59, 130, 246, 0.3)',
  }}
>
  ...
</Skeleton>
```

### Custom Pulse Configuration

Configure pulse animation with duration and opacity range.

```tsx
<Skeleton
  className="h-16 w-full rounded-lg"
  animationType="pulse"
  pulseConfig={{
    duration: 500,
    minOpacity: 0.1,
    maxOpacity: 0.8,
  }}
>
  ...
</Skeleton>
```

### Shape Variations

Create different skeleton shapes using className for styling.

```tsx
<Skeleton className="h-4 w-full rounded-md" />
<Skeleton className="h-4 w-3/4 rounded-md" />
<Skeleton className="h-4 w-1/2 rounded-md" />
<Skeleton className="size-12 rounded-full" />
```

### Custom Enter/Exit Animations

Apply custom Reanimated transitions when skeleton appears or disappears.

```tsx
<Skeleton
  entering={FadeIn.duration(300)}
  exiting={FadeOut.duration(300)}
  isLoading={isLoading}
  className="h-20 w-full rounded-lg"
>
  ...
</Skeleton>
```

## Example

```tsx
import { Avatar, Card, Skeleton } from 'heroui-native';
import { useState } from 'react';
import { Image, Text, View } from 'react-native';

export default function SkeletonExample() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Card className="p-4">
      <View className="flex-row items-center gap-3 mb-4">
        <Skeleton isLoading={isLoading} className="h-10 w-10 rounded-full">
          <Avatar size="sm" alt="Avatar">
            <Avatar.Image source={{ uri: 'https://i.pravatar.cc/150?img=4' }} />
            <Avatar.Fallback />
          </Avatar>
        </Skeleton>

        <View className="flex-1 gap-1">
          <Skeleton isLoading={isLoading} className="h-3 w-32 rounded-md">
            <Text className="font-semibold text-foreground">John Doe</Text>
          </Skeleton>
          <Skeleton isLoading={isLoading} className="h-3 w-24 rounded-md">
            <Text className="text-sm text-muted">@johndoe</Text>
          </Skeleton>
        </View>
      </View>

      <Skeleton
        isLoading={isLoading}
        className="h-48 w-full rounded-lg"
        shimmerConfig={{
          duration: 1500,
          speed: 1,
        }}
      >
        <View className="h-48 bg-surface-tertiary rounded-lg overflow-hidden">
          <Image
            source={{
              uri: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/backgrounds/cards/car1.jpg',
            }}
            className="h-full w-full"
          />
        </View>
      </Skeleton>
    </Card>
  );
}
```

## API Reference

### Skeleton

| prop                    | type                             | default     | description                                      |
| ----------------------- | -------------------------------- | ----------- | ------------------------------------------------ |
| `children`              | `React.ReactNode`                | -           | Content to show when not loading                 |
| `isLoading`             | `boolean`                        | `true`      | Whether the skeleton is currently loading        |
| `animationType`         | `'shimmer' \| 'pulse' \| 'none'` | `'shimmer'` | Animation type                                   |
| `className`             | `string`                         | -           | Additional CSS classes for styling               |
| `shimmerConfig`         | `ShimmerConfig`                  | -           | Shimmer animation configuration                  |
| `pulseConfig`           | `PulseConfig`                    | -           | Pulse animation configuration                    |
| `...Animated.ViewProps` | `AnimatedProps<ViewProps>`       | -           | All Reanimated Animated.View props are supported |

#### ShimmerConfig

| prop             | type             | description                                        |
| ---------------- | ---------------- | -------------------------------------------------- |
| `duration`       | `number`         | Animation duration in milliseconds (default: 1500) |
| `easing`         | `EasingFunction` | Easing function for the animation                  |
| `speed`          | `number`         | Speed multiplier for the animation (default: 1)    |
| `highlightColor` | `string`         | Highlight color for the shimmer effect             |

#### PulseConfig

| prop         | type             | description                                        |
| ------------ | ---------------- | -------------------------------------------------- |
| `duration`   | `number`         | Animation duration in milliseconds (default: 1000) |
| `easing`     | `EasingFunction` | Easing function for the animation                  |
| `minOpacity` | `number`         | Minimum opacity value (default: 0.5)               |
| `maxOpacity` | `number`         | Maximum opacity value (default: 1)                 |

---

## skeleton-group

# SkeletonGroup

Coordinates multiple skeleton loading placeholders with centralized animation control.

## Imports

Note: Before importing this component, ensure you have completed the setup as per the [Quick Start guide](../../../README.md).

```tsx
import { SkeletonGroup } from 'heroui-native';
```

## Usage

### Basic Usage

The SkeletonGroup component manages multiple skeleton items with shared loading state and animation.

```tsx
<SkeletonGroup isLoading={isLoading}>
  <SkeletonGroup.Item className="h-4 w-full rounded-md" />
  <SkeletonGroup.Item className="h-4 w-3/4 rounded-md" />
  <SkeletonGroup.Item className="h-4 w-1/2 rounded-md" />
</SkeletonGroup>
```

### With Container Layout

Use className on the group to control layout of skeleton items.

```tsx
<SkeletonGroup isLoading={isLoading} className="flex-row items-center gap-3">
  <SkeletonGroup.Item className="h-12 w-12 rounded-lg" />
  <View className="flex-1 gap-1.5">
    <SkeletonGroup.Item className="h-4 w-full rounded-md" />
    <SkeletonGroup.Item className="h-3 w-2/3 rounded-md" />
  </View>
</SkeletonGroup>
```

### With isSkeletonOnly for Pure Skeleton Layouts

Use `isSkeletonOnly` when the group contains only skeleton placeholders with layout wrappers (like View) that have no content to render in the loaded state. This prop hides the entire group when `isLoading` is false, preventing empty containers from affecting your layout.

```tsx
<SkeletonGroup
  isLoading={isLoading}
  isSkeletonOnly // Hides entire group when isLoading is false
  className="flex-row items-center gap-3"
>
  <SkeletonGroup.Item className="h-12 w-12 rounded-lg" />
  {/* This View is only for layout, no content */}
  <View className="flex-1 gap-1.5">
    <SkeletonGroup.Item className="h-4 w-full rounded-md" />
    <SkeletonGroup.Item className="h-3 w-2/3 rounded-md" />
  </View>
</SkeletonGroup>
```

### With Animation Types

Control animation style for all items in the group.

```tsx
<SkeletonGroup isLoading={isLoading} animationType="pulse">
  <SkeletonGroup.Item className="h-10 w-10 rounded-full" />
  <SkeletonGroup.Item className="h-4 w-32 rounded-md" />
  <SkeletonGroup.Item className="h-3 w-24 rounded-md" />
</SkeletonGroup>
```

### With Custom Animation Configuration

Configure shimmer or pulse animations for the entire group.

```tsx
<SkeletonGroup
  isLoading={isLoading}
  animationType="shimmer"
  shimmerConfig={{
    duration: 2000,
    highlightColor: 'rgba(59, 130, 246, 0.3)',
  }}
>
  <SkeletonGroup.Item className="h-16 w-full rounded-lg" />
  <SkeletonGroup.Item className="h-4 w-3/4 rounded-md" />
</SkeletonGroup>
```

### With Enter/Exit Animations

Apply Reanimated transitions when the group appears or disappears.

```tsx
<SkeletonGroup
  entering={FadeInLeft}
  exiting={FadeOutRight}
  isLoading={isLoading}
  className="w-full gap-2"
>
  <SkeletonGroup.Item className="h-4 w-full rounded-md" />
  <SkeletonGroup.Item className="h-4 w-3/4 rounded-md" />
</SkeletonGroup>
```

## Example

```tsx
import { Card, SkeletonGroup, Avatar } from 'heroui-native';
import { useState } from 'react';
import { Text, View, Image } from 'react-native';

export default function SkeletonGroupExample() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <SkeletonGroup isLoading={isLoading}>
      <Card className="p-4">
        <Card.Header>
          <View className="flex-row items-center gap-3 mb-4">
            <SkeletonGroup.Item className="h-10 w-10 rounded-full">
              <Avatar size="sm" alt="Avatar">
                <Avatar.Image
                  source={{ uri: 'https://i.pravatar.cc/150?img=4' }}
                />
                <Avatar.Fallback />
              </Avatar>
            </SkeletonGroup.Item>

            <View className="flex-1 gap-1">
              <SkeletonGroup.Item className="h-3 w-32 rounded-md">
                <Text className="font-semibold text-foreground">John Doe</Text>
              </SkeletonGroup.Item>
              <SkeletonGroup.Item className="h-3 w-24 rounded-md">
                <Text className="text-sm text-muted">@johndoe</Text>
              </SkeletonGroup.Item>
            </View>
          </View>

          <View className="mb-4 gap-1.5">
            <SkeletonGroup.Item className="h-4 w-full rounded-md">
              <Text className="text-base text-foreground">
                This is the first line of the post content.
              </Text>
            </SkeletonGroup.Item>
            <SkeletonGroup.Item className="h-4 w-full rounded-md">
              <Text className="text-base text-foreground">
                Second line with more interesting content to read.
              </Text>
            </SkeletonGroup.Item>
            <SkeletonGroup.Item className="h-4 w-2/3 rounded-md">
              <Text className="text-base text-foreground">
                Last line is shorter.
              </Text>
            </SkeletonGroup.Item>
          </View>
        </Card.Header>

        <SkeletonGroup.Item className="h-48 w-full rounded-lg">
          <View className="h-48 bg-surface-tertiary rounded-lg overflow-hidden">
            <Image
              source={{
                uri: 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/backgrounds/cards/car1.jpg',
              }}
              className="h-full w-full"
            />
          </View>
        </SkeletonGroup.Item>
      </Card>
    </SkeletonGroup>
  );
}
```

## Anatomy

```tsx
<SkeletonGroup>
  <SkeletonGroup.Item />
</SkeletonGroup>
```

- **SkeletonGroup**: Root container that provides centralized control for all skeleton items
- **SkeletonGroup.Item**: Individual skeleton item that inherits props from the parent group

## API Reference

### SkeletonGroup

| prop                    | type                             | default     | description                                                            |
| ----------------------- | -------------------------------- | ----------- | ---------------------------------------------------------------------- |
| `children`              | `React.ReactNode`                | -           | SkeletonGroup.Item components and layout elements                      |
| `isLoading`             | `boolean`                        | `true`      | Whether the skeleton items are currently loading                       |
| `isSkeletonOnly`        | `boolean`                        | `false`     | Hides entire group when isLoading is false (for skeleton-only layouts) |
| `animationType`         | `'shimmer' \| 'pulse' \| 'none'` | `'shimmer'` | Animation type for all items in the group                              |
| `className`             | `string`                         | -           | Additional CSS classes for the group container                         |
| `style`                 | `StyleProp<ViewStyle>`           | -           | Custom styles for the group container                                  |
| `shimmerConfig`         | `ShimmerConfig`                  | -           | Shimmer animation configuration for all items                          |
| `pulseConfig`           | `PulseConfig`                    | -           | Pulse animation configuration for all items                            |
| `...Animated.ViewProps` | `AnimatedProps<ViewProps>`       | -           | All Reanimated Animated.View props are supported                       |

#### ShimmerConfig

| prop             | type             | description                                        |
| ---------------- | ---------------- | -------------------------------------------------- |
| `duration`       | `number`         | Animation duration in milliseconds (default: 1500) |
| `easing`         | `EasingFunction` | Easing function for the animation                  |
| `speed`          | `number`         | Speed multiplier for the animation (default: 1)    |
| `highlightColor` | `string`         | Highlight color for the shimmer effect             |

#### PulseConfig

| prop         | type             | description                                        |
| ------------ | ---------------- | -------------------------------------------------- |
| `duration`   | `number`         | Animation duration in milliseconds (default: 1000) |
| `easing`     | `EasingFunction` | Easing function for the animation                  |
| `minOpacity` | `number`         | Minimum opacity value (default: 0.3)               |
| `maxOpacity` | `number`         | Maximum opacity value (default: 1)                 |

### SkeletonGroup.Item

| prop                    | type                             | default   | description                                                         |
| ----------------------- | -------------------------------- | --------- | ------------------------------------------------------------------- |
| `children`              | `React.ReactNode`                | -         | Content to show when not loading                                    |
| `isLoading`             | `boolean`                        | inherited | Whether the skeleton is currently loading (overrides group setting) |
| `animationType`         | `'shimmer' \| 'pulse' \| 'none'` | inherited | Animation type (overrides group setting)                            |
| `className`             | `string`                         | -         | Additional CSS classes for styling the item                         |
| `shimmerConfig`         | `ShimmerConfig`                  | inherited | Shimmer animation configuration (overrides group setting)           |
| `pulseConfig`           | `PulseConfig`                    | inherited | Pulse animation configuration (overrides group setting)             |
| `...Animated.ViewProps` | `AnimatedProps<ViewProps>`       | -         | All Reanimated Animated.View props are supported                    |

## Important Notes

### Props Inheritance

SkeletonGroup.Item components inherit all animation-related props from their parent SkeletonGroup:

- `isLoading`
- `animationType`
- `shimmerConfig`
- `pulseConfig`

Individual items can override any inherited prop by providing their own value.

---

## spinner

# Spinner

Displays an animated loading indicator.

## Imports

Note: Before importing this component, ensure you have completed the setup as per the [Quick Start guide](../../../README.md).

```tsx
import { Spinner } from 'heroui-native';
```

## Usage

### Basic Usage

The Spinner component displays a rotating loading indicator.

```tsx
<Spinner />
```

### Sizes

Control the spinner size with the `size` prop.

```tsx
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
```

### Colors

Use predefined color variants or custom colors.

```tsx
<Spinner color="default" />
<Spinner color="success" />
<Spinner color="warning" />
<Spinner color="danger" />
<Spinner color="#8B5CF6" />
```

### Loading State

Control the visibility of the spinner with the `isLoading` prop.

```tsx
<Spinner isLoading={true} />
<Spinner isLoading={false} />
```

### Animation Speed

Customize the rotation speed using the compound Indicator component.

```tsx
<Spinner>
  <Spinner.Indicator speed={0.5} />
</Spinner>

<Spinner>
  <Spinner.Indicator speed={2} />
</Spinner>
```

### Custom Icon

Replace the default spinner icon with custom content.

```tsx
const themeColorForeground = useThemeColor('foreground')

<Spinner>
  <Spinner.Indicator>
    <Ionicons name="refresh" size={24} color={themeColorForeground} />
  </Spinner.Indicator>
</Spinner>

<Spinner>
  <Spinner.Indicator>
    <Text>⏳</Text>
  </Spinner.Indicator>
</Spinner>
```

## Example

```tsx
import { Spinner } from 'heroui-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function SpinnerExample() {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <View className="gap-4 p-4 bg-background">
      <View className="flex-row items-center gap-2 p-4 rounded-lg bg-stone-200">
        <Spinner size="sm" color="default" />
        <Text className="text-stone-500">Loading content...</Text>
      </View>

      <View className="items-center p-8 rounded-2xl bg-stone-200">
        <Spinner size="lg" color="success" isLoading={isLoading} />
        <Text className="text-stone-500 mt-4">Processing...</Text>
        <TouchableOpacity onPress={() => setIsLoading(!isLoading)}>
          <Text className="text-primary mt-2 text-sm">
            {isLoading ? 'Tap to stop' : 'Tap to start'}
          </Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row gap-4 items-center justify-center">
        <Spinner size="md" color="#EC4899">
          <Spinner.Indicator speed={0.7}>
            <Ionicons name="refresh" size={24} color="#EC4899" />
          </Spinner.Indicator>
        </Spinner>
      </View>
    </View>
  );
}
```

## Anatomy

```tsx
<Spinner>
  <Spinner.Indicator>...</Spinner.Indicator>
</Spinner>
```

- **Spinner**: Main container that controls loading state, size, and color. Renders a default animated indicator if no children provided.
- **Spinner.Indicator**: Optional sub-component for customizing animation speed, easing, and icon appearance. Accepts custom children to replace the default icon.

## API Reference

### Spinner

| prop           | type                                                        | default     | description                                        |
| -------------- | ----------------------------------------------------------- | ----------- | -------------------------------------------------- |
| `children`     | `React.ReactNode`                                           | `undefined` | Content to render inside the spinner               |
| `size`         | `'sm' \| 'md' \| 'lg'`                                      | `'md'`      | Size of the spinner                                |
| `color`        | `'default' \| 'success' \| 'warning' \| 'danger' \| string` | `'default'` | Color theme of the spinner                         |
| `isLoading`    | `boolean`                                                   | `true`      | Whether the spinner is loading                     |
| `className`    | `string`                                                    | `undefined` | Custom class name for the spinner                  |
| `...ViewProps` | `ViewProps`                                                 | -           | All standard React Native View props are supported |

### Spinner.Indicator

| prop                    | type                         | default     | description                                      |
| ----------------------- | ---------------------------- | ----------- | ------------------------------------------------ |
| `children`              | `React.ReactNode`            | `undefined` | Content to render inside the indicator           |
| `speed`                 | `number`                     | `1`         | Speed in rounds per second                       |
| `animationEasing`       | `WithTimingConfig['easing']` | `undefined` | Reanimated timing easing for indicator           |
| `iconProps`             | `SpinnerIconProps`           | `undefined` | Props for the default icon                       |
| `className`             | `string`                     | `undefined` | Custom class name for the indicator element      |
| `...Animated.ViewProps` | `Animated.ViewProps`         | -           | All Reanimated Animated.View props are supported |

### SpinnerIconProps

| prop     | type               | default          | description        |
| -------- | ------------------ | ---------------- | ------------------ |
| `width`  | `number \| string` | `24`             | Width of the icon  |
| `height` | `number \| string` | `24`             | Height of the icon |
| `color`  | `string`           | `'currentColor'` | Color of the icon  |

---

## surface

# Surface

Container component that provides elevation and background styling.

## Imports

Note: Before importing this component, ensure you have completed the setup as per the [Quick Start guide](../../../README.md).

```tsx
import { Surface } from 'heroui-native';
```

## Usage

### Basic Usage

The Surface component creates a container with consistent padding and styling.

```tsx
<Surface>...</Surface>
```

### Variants

Control the visual appearance with different surface levels.

```tsx
<Surface variant="default">
  ...
</Surface>

<Surface variant="secondary">
  ...
</Surface>

<Surface variant="tertiary">
  ...
</Surface>

<Surface variant="quaternary">
  ...
</Surface>
```

### Nested Surfaces

Create visual hierarchy by nesting surfaces with different variants.

```tsx
<Surface variant="default">
  ...
  <Surface variant="secondary">
    ...
    <Surface variant="tertiary">
      ...
      <Surface variant="quaternary">...</Surface>
    </Surface>
  </Surface>
</Surface>
```

### Custom Styling

Apply custom styles using className or style props.

```tsx
<Surface className="bg-accent-soft">
  ...
</Surface>

<Surface variant="quaternary" className="p-0">
  ...
</Surface>
```

## Example

```tsx
import { Surface } from 'heroui-native';
import { Text, View } from 'react-native';

export default function SurfaceExample() {
  return (
    <View className="gap-4">
      <Surface variant="default" className="gap-2">
        <AppText className="text-foreground">Surface Content</AppText>
        <AppText className="text-muted">
          This is a default surface variant. It uses bg-surface styling.
        </AppText>
      </Surface>

      <Surface variant="secondary" className="gap-2">
        <AppText className="text-foreground">Surface Content</AppText>
        <AppText className="text-muted">
          This is a secondary surface variant. It uses bg-surface-secondary
          styling.
        </AppText>
      </Surface>

      <Surface variant="tertiary" className="gap-2">
        <AppText className="text-foreground">Surface Content</AppText>
        <AppText className="text-muted">
          This is a tertiary surface variant. It uses bg-surface-tertiary
          styling.
        </AppText>
      </Surface>

      <Surface variant="quaternary" className="gap-2">
        <AppText className="text-foreground">Surface Content</AppText>
        <AppText className="text-muted">
          This is a quaternary surface variant. It uses bg-surface-quaternary
          styling.
        </AppText>
      </Surface>
    </View>
  );
}
```

## API Reference

### Surface

| prop           | type                                                                      | default     | description                                            |
| -------------- | ------------------------------------------------------------------------- | ----------- | ------------------------------------------------------ |
| `variant`      | `'default' \| 'secondary' \| 'tertiary' \| 'quaternary' \| 'transparent'` | `'default'` | Visual variant controlling background color and border |
| `children`     | `React.ReactNode`                                                         | -           | Content to be rendered inside the surface              |
| `className`    | `string`                                                                  | -           | Additional CSS classes to apply                        |
| `...ViewProps` | `ViewProps`                                                               | -           | All standard React Native View props are supported     |

---

## switch

# Switch

A toggle control that allows users to switch between on and off states.

## Imports

Note: Before importing this component, ensure you have completed the setup as per the [Quick Start guide](../../../README.md).

```tsx
import { Switch } from 'heroui-native';
```

## Usage

### Basic Usage

The Switch component renders with default thumb if no children provided.

```tsx
<Switch isSelected={isSelected} onSelectedChange={setIsSelected} />
```

### With Custom Thumb

Replace the default thumb with custom content using the Thumb component.

```tsx
<Switch isSelected={isSelected} onSelectedChange={setIsSelected}>
  <Switch.Thumb>...</Switch.Thumb>
</Switch>
```

### With Start and End Content

Add icons or text that appear on each side of the switch.

```tsx
<Switch isSelected={isSelected} onSelectedChange={setIsSelected}>
  <Switch.Thumb />
  <Switch.StartContent>...</Switch.StartContent>
  <Switch.EndContent>...</Switch.EndContent>
</Switch>
```

### With Render Function

Use render functions for dynamic content based on switch state.

```tsx
<Switch isSelected={isSelected} onSelectedChange={setIsSelected}>
  {({ isSelected, isDisabled }) => (
    <>
      <Switch.Thumb>
        {({ isSelected }) => (isSelected ? <CheckIcon /> : <XIcon />)}
      </Switch.Thumb>
    </>
  )}
</Switch>
```

### With Custom Animations

Customize animations for the switch root and thumb components.

```tsx
<Switch
  animation={{
    scale: {
      value: [1, 0.9],
      timingConfig: { duration: 200 },
    },
    backgroundColor: {
      value: ['#172554', '#eab308'],
    },
  }}
>
  <Switch.Thumb
    animation={{
      left: {
        value: 4,
        springConfig: {
          damping: 30,
          stiffness: 300,
          mass: 1,
        },
      },
      backgroundColor: {
        value: ['#dbeafe', '#854d0e'],
      },
    }}
  />
</Switch>
```

### Disable Animations

Disable animations entirely or only for specific components.

```tsx
{
  /* Disable all animations including children */
}
<Switch animation="disable-all">
  <Switch.Thumb />
</Switch>;

{
  /* Disable only root animations, thumb can still animate */
}
<Switch>
  <Switch.Thumb animation={false} />
</Switch>;
```

## Example

```tsx
import { Switch } from 'heroui-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import Animated, { ZoomIn } from 'react-native-reanimated';

export default function SwitchExample() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <View className="flex-row gap-4">
      <Switch
        isSelected={darkMode}
        onSelectedChange={setDarkMode}
        className="w-[56px] h-[32px]"
        animation={{
          backgroundColor: {
            value: ['#172554', '#eab308'],
          },
        }}
      >
        <Switch.Thumb
          className="size-[22px]"
          animation={{
            left: {
              value: 4,
              springConfig: {
                damping: 30,
                stiffness: 300,
                mass: 1,
              },
            },
          }}
        />
        <Switch.StartContent className="left-2">
          {darkMode && (
            <Animated.View key="sun" entering={ZoomIn.springify()}>
              <Ionicons name="sunny" size={16} color="#854d0e" />
            </Animated.View>
          )}
        </Switch.StartContent>
        <Switch.EndContent className="right-2">
          {!darkMode && (
            <Animated.View key="moon" entering={ZoomIn.springify()}>
              <Ionicons name="moon" size={16} color="#dbeafe" />
            </Animated.View>
          )}
        </Switch.EndContent>
      </Switch>
    </View>
  );
}
```

## Anatomy

```tsx
<Switch>
  <Switch.Thumb>...</Switch.Thumb>
  <Switch.StartContent>...</Switch.StartContent>
  <Switch.EndContent>...</Switch.EndContent>
</Switch>
```

- **Switch**: Main container that handles toggle state and user interaction. Renders default thumb if no children provided. Animates scale (on press) and background color based on selection state. Acts as a pressable area for toggling.
- **Switch.Thumb**: Optional sliding thumb element that moves between positions. Uses spring animation for smooth transitions. Can contain custom content like icons or be customized with different styles and animations.
- **Switch.StartContent**: Optional content displayed on the left side of the switch. Typically used for icons or text that appear when switch is off. Positioned absolutely within the switch container.
- **Switch.EndContent**: Optional content displayed on the right side of the switch. Typically used for icons or text that appear when switch is on. Positioned absolutely within the switch container.

## API Reference

### Switch

| prop                        | type                                                                 | default     | description                                                            |
| --------------------------- | -------------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------- |
| `children`                  | `React.ReactNode \| ((props: SwitchRenderProps) => React.ReactNode)` | `undefined` | Content to render inside the switch, or a render function              |
| `isSelected`                | `boolean`                                                            | `undefined` | Whether the switch is currently selected                               |
| `isDisabled`                | `boolean`                                                            | `false`     | Whether the switch is disabled and cannot be interacted with           |
| `className`                 | `string`                                                             | `undefined` | Custom class name for the switch                                       |
| `animation`                 | `SwitchRootAnimation`                                                | `undefined` | Animation configuration for switch (see Animation Configuration below) |
| `onSelectedChange`          | `(isSelected: boolean) => void`                                      | `undefined` | Callback fired when the switch selection state changes                 |
| `...AnimatedPressableProps` | `AnimatedProps<PressableProps>`                                      | -           | All React Native Reanimated Pressable props are supported              |

#### SwitchRenderProps

| prop         | type      | description                    |
| ------------ | --------- | ------------------------------ |
| `isSelected` | `boolean` | Whether the switch is selected |
| `isDisabled` | `boolean` | Whether the switch is disabled |

#### SwitchRootAnimation

Animation configuration for the Switch root component. Can be:

- `false` or `"disabled"`: Disable only root animations (children can still animate)
- `"disable-all"`: Disable all animations including children
- `true` or `undefined`: Use default animations
- `object`: Custom animation configuration with the following properties:

**Animation Properties:**

| property          | type                          | default     | description                                   |
| ----------------- | ----------------------------- | ----------- | --------------------------------------------- |
| `scale`           | `AnimationValue<ScaleConfig>` | `undefined` | Scale animation configuration for press state |
| `backgroundColor` | `AnimationValue<BgConfig>`    | `undefined` | Background color animation configuration      |

**ScaleConfig:**

| property       | type               | default             | description                       |
| -------------- | ------------------ | ------------------- | --------------------------------- |
| `value`        | `[number, number]` | `[1, 0.96]`         | Scale values [unpressed, pressed] |
| `timingConfig` | `WithTimingConfig` | `{ duration: 150 }` | Animation timing configuration    |

**BgConfig:**

| property       | type               | default                                                        | description                                    |
| -------------- | ------------------ | -------------------------------------------------------------- | ---------------------------------------------- |
| `value`        | `[string, string]` | Uses theme colors (surface-quaternary, accent)                 | Background color values [unselected, selected] |
| `timingConfig` | `WithTimingConfig` | `{ duration: 175, easing: Easing.bezier(0.25, 0.1, 0.25, 1) }` | Animation timing configuration                 |

### Switch.Thumb

| prop           | type                                                                 | default     | description                                              |
| -------------- | -------------------------------------------------------------------- | ----------- | -------------------------------------------------------- |
| `children`     | `React.ReactNode \| ((props: SwitchRenderProps) => React.ReactNode)` | `undefined` | Content to render inside the thumb, or a render function |
| `className`    | `string`                                                             | `undefined` | Custom class name for the thumb element                  |
| `animation`    | `SwitchThumbAnimation`                                               | `undefined` | Animation configuration for thumb (see below)            |
| `...ViewProps` | `ViewProps`                                                          | -           | All standard React Native View props are supported       |

#### SwitchThumbAnimation

Animation configuration for the Switch thumb component. Can be:

- `false` or `"disabled"`: Disable all animations
- `true` or `undefined`: Use default animations
- `object`: Custom animation configuration with the following properties:

**Animation Properties:**

| property          | type                         | default     | description                              |
| ----------------- | ---------------------------- | ----------- | ---------------------------------------- |
| `left`            | `AnimationValue<LeftConfig>` | `undefined` | Left position animation configuration    |
| `backgroundColor` | `AnimationValue<BgConfig>`   | `undefined` | Background color animation configuration |

**LeftConfig:**

The `left` animation moves the thumb between left and right positions. When you provide a single `value` (e.g., `value: 2`), it applies the same offset to both sides: `2px` from the left when unselected, and `2px` from the right when selected.

| property       | type               | default                                      | description                                       |
| -------------- | ------------------ | -------------------------------------------- | ------------------------------------------------- |
| `value`        | `number`           | `2`                                          | Offset value from the edges (left/right)          |
| `springConfig` | `WithSpringConfig` | `{ damping: 120, stiffness: 1600, mass: 2 }` | Spring animation configuration for thumb position |

**BgConfig:**

| property       | type               | default                                                        | description                                    |
| -------------- | ------------------ | -------------------------------------------------------------- | ---------------------------------------------- |
| `value`        | `[string, string]` | `['white', theme accent-foreground color]`                     | Background color values [unselected, selected] |
| `timingConfig` | `WithTimingConfig` | `{ duration: 175, easing: Easing.bezier(0.25, 0.1, 0.25, 1) }` | Animation timing configuration                 |

### Switch.StartContent

| prop           | type              | default     | description                                        |
| -------------- | ----------------- | ----------- | -------------------------------------------------- |
| `children`     | `React.ReactNode` | `undefined` | Content to render inside the switch content        |
| `className`    | `string`          | `undefined` | Custom class name for the content element          |
| `...ViewProps` | `ViewProps`       | -           | All standard React Native View props are supported |

### Switch.EndContent

| prop           | type              | default     | description                                        |
| -------------- | ----------------- | ----------- | -------------------------------------------------- |
| `children`     | `React.ReactNode` | `undefined` | Content to render inside the switch content        |
| `className`    | `string`          | `undefined` | Custom class name for the content element          |
| `...ViewProps` | `ViewProps`       | -           | All standard React Native View props are supported |

## Styling Notes

### Border Styling

If you need to apply a border to the switch root, use the `outline` style properties instead of `border`. This ensures the border doesn't affect the internal layout calculations for the thumb position:

```tsx
<Switch className="outline outline-accent">
  <Switch.Thumb />
</Switch>
```

Using `outline` keeps the border visual without impacting the switch's internal width calculations, ensuring the thumb animates correctly.

## Integration with FormField

The Switch component integrates seamlessly with FormField for press state sharing:

```tsx
<FormField isSelected={isSelected} onSelectedChange={setIsSelected}>
  <FormField.Content>
    <FormField.Title>Enable notifications</FormField.Title>
    <FormField.Description>Receive push notifications</FormField.Description>
  </FormField.Content>
  <FormField.Indicator>
    <Switch />
  </FormField.Indicator>
</FormField>
```

When wrapped in FormField, the Switch will automatically respond to press events on the entire FormField container, creating a larger touch target and better user experience.

## Hooks

### useSwitch

A hook that provides access to the Switch context. This is useful when building custom switch components or when you need to access switch state in child components.

**Returns:**

| Property     | Type      | Description                    |
| ------------ | --------- | ------------------------------ |
| `isSelected` | `boolean` | Whether the switch is selected |
| `isDisabled` | `boolean` | Whether the switch is disabled |

**Example:**

```tsx
import { useSwitch } from 'heroui-native';

function CustomSwitchContent() {
  const { isSelected, isDisabled } = useSwitch();

  return (
    <View>
      <Text>Status: {isSelected ? 'On' : 'Off'}</Text>
      {isDisabled && <Text>Disabled</Text>}
    </View>
  );
}

// Usage
<Switch>
  <CustomSwitchContent />
  <Switch.Thumb />
</Switch>;
```

---

## tabs

# Tabs

Organize content into tabbed views with animated transitions and indicators.

## Imports

Note: Before importing this component, ensure you have completed the setup as per the [Quick Start guide](../../../README.md).

```tsx
import { Tabs } from 'heroui-native';
```

## Usage

### Basic Usage

The Tabs component uses compound parts to create navigable content sections.

```tsx
<Tabs value="tab1" onValueChange={setActiveTab}>
  <Tabs.List>
    <Tabs.Indicator />
    <Tabs.Trigger value="tab1">
      <Tabs.Label>Tab 1</Tabs.Label>
    </Tabs.Trigger>
    <Tabs.Trigger value="tab2">
      <Tabs.Label>Tab 2</Tabs.Label>
    </Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="tab1">...</Tabs.Content>
  <Tabs.Content value="tab2">...</Tabs.Content>
</Tabs>
```

### Pill Variant

Default rounded pill style for tab triggers.

```tsx
<Tabs value={activeTab} onValueChange={setActiveTab} variant="pill">
  <Tabs.List>
    <Tabs.Indicator />
    <Tabs.Trigger value="settings">
      <Tabs.Label>Settings</Tabs.Label>
    </Tabs.Trigger>
    <Tabs.Trigger value="profile">
      <Tabs.Label>Profile</Tabs.Label>
    </Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="settings">...</Tabs.Content>
  <Tabs.Content value="profile">...</Tabs.Content>
</Tabs>
```

### Line Variant

Underline style indicator for a more minimal appearance.

```tsx
<Tabs value={activeTab} onValueChange={setActiveTab} variant="line">
  <Tabs.List>
    <Tabs.Indicator />
    <Tabs.Trigger value="overview">
      <Tabs.Label>Overview</Tabs.Label>
    </Tabs.Trigger>
    <Tabs.Trigger value="analytics">
      <Tabs.Label>Analytics</Tabs.Label>
    </Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="overview">...</Tabs.Content>
  <Tabs.Content value="analytics">...</Tabs.Content>
</Tabs>
```

### Scrollable Tabs

Handle many tabs with horizontal scrolling.

```tsx
<Tabs value={activeTab} onValueChange={setActiveTab}>
  <Tabs.List>
    <Tabs.ScrollView scrollAlign="center">
      <Tabs.Indicator />
      <Tabs.Trigger value="tab1">
        <Tabs.Label>First Tab</Tabs.Label>
      </Tabs.Trigger>
      <Tabs.Trigger value="tab2">
        <Tabs.Label>Second Tab</Tabs.Label>
      </Tabs.Trigger>
      <Tabs.Trigger value="tab3">
        <Tabs.Label>Third Tab</Tabs.Label>
      </Tabs.Trigger>
      <Tabs.Trigger value="tab4">
        <Tabs.Label>Fourth Tab</Tabs.Label>
      </Tabs.Trigger>
      <Tabs.Trigger value="tab5">
        <Tabs.Label>Fifth Tab</Tabs.Label>
      </Tabs.Trigger>
    </Tabs.ScrollView>
  </Tabs.List>
  <Tabs.Content value="tab1">...</Tabs.Content>
  <Tabs.Content value="tab2">...</Tabs.Content>
  <Tabs.Content value="tab3">...</Tabs.Content>
  <Tabs.Content value="tab4">...</Tabs.Content>
  <Tabs.Content value="tab5">...</Tabs.Content>
</Tabs>
```

### Disabled Tabs

Disable specific tabs to prevent interaction.

```tsx
<Tabs value={activeTab} onValueChange={setActiveTab}>
  <Tabs.List>
    <Tabs.Indicator />
    <Tabs.Trigger value="active">
      <Tabs.Label>Active</Tabs.Label>
    </Tabs.Trigger>
    <Tabs.Trigger value="disabled" isDisabled>
      <Tabs.Label>Disabled</Tabs.Label>
    </Tabs.Trigger>
    <Tabs.Trigger value="another">
      <Tabs.Label>Another</Tabs.Label>
    </Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="active">...</Tabs.Content>
  <Tabs.Content value="another">...</Tabs.Content>
</Tabs>
```

### With Icons

Combine icons with labels for enhanced visual context.

```tsx
<Tabs value={activeTab} onValueChange={setActiveTab}>
  <Tabs.List>
    <Tabs.Indicator />
    <Tabs.Trigger value="home">
      <Icon name="home" size={16} />
      <Tabs.Label>Home</Tabs.Label>
    </Tabs.Trigger>
    <Tabs.Trigger value="search">
      <Icon name="search" size={16} />
      <Tabs.Label>Search</Tabs.Label>
    </Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="home">...</Tabs.Content>
  <Tabs.Content value="search">...</Tabs.Content>
</Tabs>
```

## Example

```tsx
import { Tabs, TextField, FormField, Checkbox, Button } from 'heroui-native';
import { useState } from 'react';
import { View, Text } from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from 'react-native-reanimated';

const AnimatedContentContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <Animated.View
    entering={FadeIn.duration(200)}
    exiting={FadeOut.duration(200)}
    className="gap-6"
  >
    {children}
  </Animated.View>
);

export default function TabsExample() {
  const [activeTab, setActiveTab] = useState('general');

  const [showSidebar, setShowSidebar] = useState(true);
  const [accountActivity, setAccountActivity] = useState(true);
  const [name, setName] = useState('');

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} variant="pill">
      <Tabs.List>
        <Tabs.ScrollView>
          <Tabs.Indicator />
          <Tabs.Trigger value="general">
            <Tabs.Label>General</Tabs.Label>
          </Tabs.Trigger>
          <Tabs.Trigger value="notifications">
            <Tabs.Label>Notifications</Tabs.Label>
          </Tabs.Trigger>
          <Tabs.Trigger value="profile">
            <Tabs.Label>Profile</Tabs.Label>
          </Tabs.Trigger>
        </Tabs.ScrollView>
      </Tabs.List>

      <Animated.View
        layout={LinearTransition.duration(200)}
        className="px-4 py-6 border border-border rounded-xl"
      >
        <Tabs.Content value="general">
          <AnimatedContentContainer>
            <FormField
              isSelected={showSidebar}
              onSelectedChange={setShowSidebar}
              alignIndicator="start"
            >
              <FormField.Indicator>
                <Checkbox />
              </FormField.Indicator>
              <FormField.Content>
                <FormField.Title>Show sidebar</FormField.Title>
                <FormField.Description>
                  Display the sidebar navigation panel
                </FormField.Description>
              </FormField.Content>
            </FormField>
          </AnimatedContentContainer>
        </Tabs.Content>

        <Tabs.Content value="notifications">
          <AnimatedContentContainer>
            <FormField
              isSelected={accountActivity}
              onSelectedChange={setAccountActivity}
            >
              <FormField.Indicator>
                <Checkbox />
              </FormField.Indicator>
              <FormField.Content>
                <FormField.Title>Account activity</FormField.Title>
                <FormField.Description>
                  Notifications about your account activity
                </FormField.Description>
              </FormField.Content>
            </FormField>
          </AnimatedContentContainer>
        </Tabs.Content>

        <Tabs.Content value="profile">
          <AnimatedContentContainer>
            <TextField isRequired>
              <TextField.Label>Name</TextField.Label>
              <TextField.Input
                value={name}
                onChangeText={setName}
                placeholder="Enter your full name"
              />
            </TextField>
            <Button size="sm" className="self-start">
              <Button.Label>Update profile</Button.Label>
            </Button>
          </AnimatedContentContainer>
        </Tabs.Content>
      </Animated.View>
    </Tabs>
  );
}
```

## Anatomy

```tsx
<Tabs>
  <Tabs.List>
    <Tabs.ScrollView>
      <Tabs.Indicator />
      <Tabs.Trigger>
        <Tabs.Label>...</Tabs.Label>
      </Tabs.Trigger>
    </Tabs.ScrollView>
  </Tabs.List>
  <Tabs.Content>...</Tabs.Content>
</Tabs>
```

- **Tabs**: Main container that manages tab state and selection. Controls active tab, handles value changes, and provides context to child components.
- **Tabs.List**: Container for tab triggers. Groups triggers together with optional styling variants (pill or line).
- **Tabs.ScrollView**: Optional scrollable wrapper for tab triggers. Enables horizontal scrolling when tabs overflow with automatic centering of active tab.
- **Tabs.Trigger**: Interactive button for each tab. Handles press events to change active tab and measures its position for indicator animation.
- **Tabs.Label**: Text content for tab triggers. Displays the tab title with appropriate styling.
- **Tabs.Indicator**: Animated visual indicator for active tab. Smoothly transitions between tabs using spring or timing animations.
- **Tabs.Content**: Container for tab panel content. Shows content when its value matches the active tab.

## API Reference

### Tabs

| prop            | type                      | default  | description                                        |
| --------------- | ------------------------- | -------- | -------------------------------------------------- |
| `children`      | `React.ReactNode`         | -        | Children elements to be rendered inside tabs       |
| `value`         | `string`                  | -        | Currently active tab value                         |
| `variant`       | `'pill' \| 'line'`        | `'pill'` | Visual variant of the tabs                         |
| `className`     | `string`                  | -        | Additional CSS classes for the container           |
| `onValueChange` | `(value: string) => void` | -        | Callback when the active tab changes               |
| `...ViewProps`  | `ViewProps`               | -        | All standard React Native View props are supported |

### Tabs.List

| prop           | type              | default | description                                        |
| -------------- | ----------------- | ------- | -------------------------------------------------- |
| `children`     | `React.ReactNode` | -       | Children elements to be rendered inside the list   |
| `className`    | `string`          | -       | Additional CSS classes                             |
| `...ViewProps` | `ViewProps`       | -       | All standard React Native View props are supported |

### Tabs.ScrollView

| prop                        | type                                     | default    | description                                              |
| --------------------------- | ---------------------------------------- | ---------- | -------------------------------------------------------- |
| `children`                  | `React.ReactNode`                        | -          | Children elements to be rendered inside the scroll view  |
| `scrollAlign`               | `'start' \| 'center' \| 'end' \| 'none'` | `'center'` | Scroll alignment variant for the selected item           |
| `className`                 | `string`                                 | -          | Additional CSS classes for the scroll view               |
| `contentContainerClassName` | `string`                                 | -          | Additional CSS classes for the content container         |
| `...ScrollViewProps`        | `ScrollViewProps`                        | -          | All standard React Native ScrollView props are supported |

### Tabs.Trigger

| prop                | type              | default | description                                             |
| ------------------- | ----------------- | ------- | ------------------------------------------------------- |
| `children`          | `React.ReactNode` | -       | Children elements to be rendered inside the trigger     |
| `value`             | `string`          | -       | The unique value identifying this tab                   |
| `isDisabled`        | `boolean`         | `false` | Whether the trigger is disabled                         |
| `className`         | `string`          | -       | Additional CSS classes                                  |
| `...PressableProps` | `PressableProps`  | -       | All standard React Native Pressable props are supported |

### Tabs.Label

| prop           | type              | default | description                                        |
| -------------- | ----------------- | ------- | -------------------------------------------------- |
| `children`     | `React.ReactNode` | -       | Text content to be rendered as label               |
| `className`    | `string`          | -       | Additional CSS classes                             |
| `...TextProps` | `TextProps`       | -       | All standard React Native Text props are supported |

### Tabs.Indicator

| prop                    | type                           | default              | description                                      |
| ----------------------- | ------------------------------ | -------------------- | ------------------------------------------------ |
| `children`              | `React.ReactNode`              | -                    | Custom indicator content                         |
| `className`             | `string`                       | -                    | Additional CSS classes                           |
| `animationConfig`       | `TabsIndicatorAnimationConfig` | `{ type: 'spring' }` | Animation configuration for the indicator        |
| `...Animated.ViewProps` | `Animated.ViewProps`           | -                    | All Reanimated Animated.View props are supported |

#### TabsIndicatorAnimationConfig

| prop     | type                                   | description                        |
| -------- | -------------------------------------- | ---------------------------------- |
| `type`   | `'spring' \| 'timing'`                 | Type of animation to use           |
| `config` | `WithSpringConfig \| WithTimingConfig` | Reanimated animation configuration |

### Tabs.Content

| prop           | type              | default | description                                         |
| -------------- | ----------------- | ------- | --------------------------------------------------- |
| `children`     | `React.ReactNode` | -       | Children elements to be rendered inside the content |
| `value`        | `string`          | -       | The value of the tab this content belongs to        |
| `className`    | `string`          | -       | Additional CSS classes                              |
| `...ViewProps` | `ViewProps`       | -       | All standard React Native View props are supported  |

---

## text-field

# TextField

A text input component with label, description, and error handling for collecting user input.

## Imports

Note: Before importing this component, ensure you have completed the setup as per the [Quick Start guide](../../../README.md).

```tsx
import { TextField } from 'heroui-native';
```

## Usage

### Basic Usage

TextField provides a complete form input structure with label and description.

```tsx
<TextField>
  <TextField.Label>Email</TextField.Label>
  <TextField.Input placeholder="Enter your email" />
  <TextField.Description>We'll never share your email</TextField.Description>
</TextField>
```

### With Required Field

Mark fields as required to show an asterisk in the label.

```tsx
<TextField isRequired>
  <TextField.Label>Username</TextField.Label>
  <TextField.Input placeholder="Choose a username" />
</TextField>
```

### With Start and End Content

Add icons or other content at the beginning or end of the input.

```tsx
<TextField>
  <TextField.Label>Password</TextField.Label>
  <TextField.Input placeholder="Enter password" secureTextEntry>
    <TextField.InputStartContent>...</TextField.InputStartContent>
    <TextField.InputEndContent>...</TextField.InputEndContent>
  </TextField.Input>
</TextField>
```

### With Validation

Display error messages when the field is invalid.

```tsx
<TextField isRequired isInvalid={true}>
  <TextField.Label>Email</TextField.Label>
  <TextField.Input placeholder="Enter your email" />
  <TextField.ErrorMessage>Please enter a valid email</TextField.ErrorMessage>
</TextField>
```

### With Local Invalid State Override

Override the context's invalid state for individual components.

```tsx
<TextField isInvalid={true}>
  <TextField.Label isInvalid={false}>Email</TextField.Label>
  <TextField.Input placeholder="Enter your email" isInvalid={false} />
  <TextField.Description>
    This shows despite input being invalid
  </TextField.Description>
  <TextField.ErrorMessage>Email format is incorrect</TextField.ErrorMessage>
</TextField>
```

### Multiline Input

Create text areas for longer content.

```tsx
<TextField>
  <TextField.Label>Message</TextField.Label>
  <TextField.Input
    placeholder="Type your message..."
    multiline
    numberOfLines={4}
  />
  <TextField.Description>Maximum 500 characters</TextField.Description>
</TextField>
```

### Disabled State

Disable the entire field to prevent interaction.

```tsx
<TextField isDisabled>
  <TextField.Label>Disabled Field</TextField.Label>
  <TextField.Input placeholder="Cannot edit" value="Read only value" />
</TextField>
```

### Custom Colors

Customize the input colors for different states.

```tsx
<TextField>
  <TextField.Label>Custom Styled</TextField.Label>
  <TextField.Input
    placeholder="Custom colors"
    colors={{
      blurBackground: '#eff6ff',
      focusBackground: '#dbeafe',
      blurBorder: '#2563eb',
      focusBorder: '#1d4ed8',
      errorBorder: '#dc2626',
    }}
  />
</TextField>
```

## Example

```tsx
import { Ionicons } from '@expo/vector-icons';
import { TextField, useThemeColor } from 'heroui-native';
import React from 'react';
import { ScrollView, View } from 'react-native';

export default function TextFieldExample() {
  const themeColorMuted = useThemeColor('muted');
  const [email, setEmail] = React.useState('');
  const isInvalidEmail =
    email !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <ScrollView className="bg-background p-6">
      <View className="gap-6">
        <TextField isRequired isInvalid={isInvalidEmail}>
          <TextField.Label>Email Address</TextField.Label>
          <TextField.Input
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          >
            <TextField.InputStartContent>
              <Ionicons name="mail-outline" size={16} color={themeColorMuted} />
            </TextField.InputStartContent>
          </TextField.Input>
          <TextField.Description>
            We'll send a confirmation to this email
          </TextField.Description>
          <TextField.ErrorMessage>
            Please enter a valid email address
          </TextField.ErrorMessage>
        </TextField>

        <TextField isRequired>
          <TextField.Label>Password</TextField.Label>
          <TextField.Input placeholder="Enter password" secureTextEntry>
            <TextField.InputStartContent>
              <Ionicons
                name="lock-closed-outline"
                size={16}
                color={themeColorMuted}
              />
            </TextField.InputStartContent>
            <TextField.InputEndContent>
              <Ionicons name="eye-outline" size={16} color={themeColorMuted} />
            </TextField.InputEndContent>
          </TextField.Input>
        </TextField>

        <TextField>
          <TextField.Label>Bio</TextField.Label>
          <TextField.Input
            placeholder="Tell us about yourself..."
            multiline
            numberOfLines={4}
          />
          <TextField.Description>
            Brief description for your profile
          </TextField.Description>
        </TextField>
      </View>
    </ScrollView>
  );
}
```

## Anatomy

```tsx
<TextField>
  <TextField.Label>...</TextField.Label>
  <TextField.Input>
    <TextField.InputStartContent>...</TextField.InputStartContent>
    <TextField.InputEndContent>...</TextField.InputEndContent>
  </TextField.Input>
  <TextField.Description>...</TextField.Description>
  <TextField.ErrorMessage>...</TextField.ErrorMessage>
</TextField>
```

- **TextField**: Root container that provides spacing and state management
- **TextField.Label**: Label with optional asterisk for required fields
- **TextField.Input**: Input container with animated border and background
- **TextField.InputStartContent**: Optional content at the start of the input
- **TextField.InputEndContent**: Optional content at the end of the input
- **TextField.Description**: Helper text displayed below the input
- **TextField.ErrorMessage**: Error message shown when field is invalid

## API Reference

### TextField

| prop         | type              | default | description                                         |
| ------------ | ----------------- | ------- | --------------------------------------------------- |
| children     | `React.ReactNode` | -       | Content to render inside the text field             |
| isDisabled   | `boolean`         | `false` | Whether the entire text field is disabled           |
| isInvalid    | `boolean`         | `false` | Whether the text field is in an invalid state       |
| isRequired   | `boolean`         | `false` | Whether the text field is required (shows asterisk) |
| className    | `string`          | -       | Custom class name for the root element              |
| ...ViewProps | `ViewProps`       | -       | All standard React Native View props are supported  |

### TextField.Label

| prop                  | type                       | default     | description                                                  |
| --------------------- | -------------------------- | ----------- | ------------------------------------------------------------ |
| children              | `React.ReactNode`          | -           | Label text content                                           |
| isInvalid             | `boolean`                  | `undefined` | Whether the label is in an invalid state (overrides context) |
| className             | `string`                   | -           | Custom class name for the label element                      |
| classNames            | `ElementSlots<LabelSlots>` | -           | Custom class names for different parts of the label          |
| ...Animated.TextProps | `AnimatedProps<TextProps>` | -           | All Reanimated Animated.Text props are supported             |

#### ElementSlots<LabelSlots>

| prop     | type     | description                          |
| -------- | -------- | ------------------------------------ |
| text     | `string` | Custom class name for the label text |
| asterisk | `string` | Custom class name for the asterisk   |

### TextField.Input

| prop                 | type                       | default          | description                                                  |
| -------------------- | -------------------------- | ---------------- | ------------------------------------------------------------ |
| children             | `React.ReactNode`          | -                | Content to render inside the input container                 |
| isInvalid            | `boolean`                  | `undefined`      | Whether the input is in an invalid state (overrides context) |
| className            | `string`                   | -                | Custom class name for the input container                    |
| classNames           | `ElementSlots<InputSlots>` | -                | Custom class names for different parts of the input          |
| colors               | `TextFieldInputColors`     | -                | Custom colors for input background and border                |
| animationConfig      | `WithTimingConfig`             | -                | Reanimated timing configuration for focus/blur transitions           |
| placeholderTextColor | `string`                   | `--colors-muted` | Color of the placeholder text                                |
| ...TextInputProps    | `TextInputProps`           | -                | All standard React Native TextInput props are supported      |

#### ElementSlots<InputSlots>

| prop      | type     | description                                  |
| --------- | -------- | -------------------------------------------- |
| container | `string` | Custom class name for the input container    |
| input     | `string` | Custom class name for the text input element |

#### TextFieldInputColors

| prop            | type     | description                            |
| --------------- | -------- | -------------------------------------- |
| blurBackground  | `string` | Background color when input is blurred |
| focusBackground | `string` | Background color when input is focused |
| errorBackground | `string` | Background color when input is invalid |
| blurBorder      | `string` | Border color when input is blurred     |
| focusBorder     | `string` | Border color when input is focused     |
| errorBorder     | `string` | Border color when input is invalid     |

### TextField.InputStartContent

| prop         | type              | default | description                                        |
| ------------ | ----------------- | ------- | -------------------------------------------------- |
| children     | `React.ReactNode` | -       | Content to render at the start of the input        |
| className    | `string`          | -       | Custom class name for the start content element    |
| ...ViewProps | `ViewProps`       | -       | All standard React Native View props are supported |

### TextField.InputEndContent

| prop         | type              | default | description                                        |
| ------------ | ----------------- | ------- | -------------------------------------------------- |
| children     | `React.ReactNode` | -       | Content to render at the end of the input          |
| className    | `string`          | -       | Custom class name for the end content element      |
| ...ViewProps | `ViewProps`       | -       | All standard React Native View props are supported |

### TextField.Description

| prop                  | type                       | default     | description                                                        |
| --------------------- | -------------------------- | ----------- | ------------------------------------------------------------------ |
| children              | `React.ReactNode`          | -           | Description text content                                           |
| isInvalid             | `boolean`                  | `undefined` | Whether the description is in an invalid state (overrides context) |
| className             | `string`                   | -           | Custom class name for the description element                      |
| ...Animated.TextProps | `AnimatedProps<TextProps>` | -           | All Reanimated Animated.Text props are supported                   |

### TextField.ErrorMessage

| prop                  | type                           | default     | description                                                    |
| --------------------- | ------------------------------ | ----------- | -------------------------------------------------------------- |
| children              | `React.ReactNode`              | -           | Error message content                                          |
| isInvalid             | `boolean`                      | `undefined` | Controls the visibility of the error field (overrides context) |
| className             | `string`                       | -           | Custom class name for styling                                  |
| classNames            | `ElementSlots<ErrorViewSlots>` | -           | Custom class names for different parts of the component        |
| ...Animated.ViewProps | `AnimatedProps<ViewProps>`     | -           | All Reanimated Animated.View props are supported               |

#### ElementSlots<ErrorViewSlots>

| prop      | type     | description                               |
| --------- | -------- | ----------------------------------------- |
| container | `string` | Custom class name for the error container |
| text      | `string` | Custom class name for the error text      |

---

