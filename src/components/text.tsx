
import type { TextProps as RNTextProps } from "react-native";
import { Text as RNText } from "react-native";
import { cn } from "heroui-native";

export function Text({
  children,
  className,
  ...restProps
}: {
  className?: string;
} & RNTextProps) {
  return (
    <RNText
      className={cn("text-base text-foreground font-normal", className)}
      {...restProps}
    >
      {children}
    </RNText>
  );
}
