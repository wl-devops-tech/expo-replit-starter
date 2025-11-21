import { useScrollToTop } from "@react-navigation/native";
import { cn } from "heroui-native";
import type { ReactNode } from "react";
import { useRef, useState } from "react";
import type {
  KeyboardAvoidingViewProps,
  LayoutChangeEvent,
  ScrollView,
  ScrollViewProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import {
  type ExtendedEdge,
  useSafeAreaInsetsStyle,
} from "~/hooks/use-safe-area-insets-style";

export const DEFAULT_BOTTOM_OFFSET = 50;

type BaseScreenProps = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  keyboardOffset?: number;
  keyboardBottomOffset?: number;
  KeyboardAvoidingViewProps?: KeyboardAvoidingViewProps;
  className?: string;
  safeAreaEdges?: ExtendedEdge[];
};

type FixedScreenProps = BaseScreenProps & {
  preset?: "fixed";
};

type ScrollScreenProps = BaseScreenProps & {
  preset?: "scroll";
  keyboardShouldPersistTaps?: "handled" | "always" | "never";
  ScrollViewProps?: ScrollViewProps;
};

type AutoScreenProps = Omit<ScrollScreenProps, "preset"> & {
  preset?: "auto";
  scrollEnabledToggleThreshold?: { percent?: number; point?: number };
};

export type ScreenProps =
  | ScrollScreenProps
  | FixedScreenProps
  | AutoScreenProps;

const isIos = Platform.OS === "ios";

function isNonScrolling(preset?: ScreenProps["preset"]) {
  return !preset || preset === "fixed";
}

function useAutoPreset(props: AutoScreenProps): {
  scrollEnabled: boolean;
  onContentSizeChange: (w: number, h: number) => void;
  onLayout: (e: LayoutChangeEvent) => void;
} {
  const { preset, scrollEnabledToggleThreshold } = props;
  const { percent = 0.92, point = 0 } = scrollEnabledToggleThreshold || {};

  const scrollViewHeight = useRef<null | number>(null);
  const scrollViewContentHeight = useRef<null | number>(null);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  function updateScrollState() {
    if (
      scrollViewHeight.current === null ||
      scrollViewContentHeight.current === null
    )
      return;

    const contentFitsScreen = (function () {
      if (point) {
        return (
          scrollViewContentHeight.current < scrollViewHeight.current - point
        );
      } else {
        return (
          scrollViewContentHeight.current < scrollViewHeight.current * percent
        );
      }
    })();

    if (scrollEnabled && contentFitsScreen) setScrollEnabled(false);
    if (!scrollEnabled && !contentFitsScreen) setScrollEnabled(true);
  }

  function onContentSizeChange(w: number, h: number) {
    scrollViewContentHeight.current = h;
    updateScrollState();
  }

  function onLayout(e: LayoutChangeEvent) {
    const { height } = e.nativeEvent.layout;
    scrollViewHeight.current = height;
    updateScrollState();
  }

  if (preset === "auto") updateScrollState();

  return {
    scrollEnabled: preset === "auto" ? scrollEnabled : true,
    onContentSizeChange,
    onLayout,
  };
}

function ScreenWithoutScrolling(props: ScreenProps) {
  const { style, contentContainerStyle, children, className } = props;
  return (
    <View className={cn("flex-1 h-full w-full", className)} style={style}>
      <View
        className={cn(
          "justify-start items-stretch",
          props.preset === "fixed" && "justify-end",
        )}
        style={contentContainerStyle}
      >
        {children}
      </View>
    </View>
  );
}

function ScreenWithScrolling(props: ScreenProps) {
  const {
    children,
    keyboardShouldPersistTaps = "handled",
    keyboardBottomOffset = DEFAULT_BOTTOM_OFFSET,
    contentContainerStyle,
    ScrollViewProps,
    style,
    className,
  } = props as ScrollScreenProps;

  const ref = useRef<ScrollView>(null);

  const { scrollEnabled, onContentSizeChange, onLayout } = useAutoPreset(
    props as AutoScreenProps,
  );

  useScrollToTop(ref);

  return (
    <KeyboardAwareScrollView
      bottomOffset={keyboardBottomOffset}
      {...{ keyboardShouldPersistTaps, scrollEnabled, ref }}
      {...ScrollViewProps}
      onLayout={(e) => {
        onLayout(e);
        ScrollViewProps?.onLayout?.(e);
      }}
      onContentSizeChange={(w: number, h: number) => {
        onContentSizeChange(w, h);
        ScrollViewProps?.onContentSizeChange?.(w, h);
      }}
      className={cn("flex-1 h-full w-full", className)}
      style={[ScrollViewProps?.style, style]}
      contentContainerStyle={[
        { justifyContent: "flex-start", alignItems: "stretch" },
        ScrollViewProps?.contentContainerStyle,
        contentContainerStyle,
      ]}
    >
      {children}
    </KeyboardAwareScrollView>
  );
}

export function Screen(props: ScreenProps) {
  const {
    KeyboardAvoidingViewProps,
    keyboardOffset = 0,
    className,
    safeAreaEdges,
  } = props;

  const containerInsets = useSafeAreaInsetsStyle(safeAreaEdges);


  return (
    <View
      className={cn("flex-1 h-full w-full bg-background", className)}
      style={[
        containerInsets,
      ]}
    >
      <KeyboardAvoidingView
        behavior={isIos ? "padding" : "height"}
        keyboardVerticalOffset={keyboardOffset}
        {...KeyboardAvoidingViewProps}
        className="flex-1"
        style={KeyboardAvoidingViewProps?.style}
      >
        {isNonScrolling(props.preset) ? (
          <ScreenWithoutScrolling {...props} />
        ) : (
          <ScreenWithScrolling {...props} />
        )}
      </KeyboardAvoidingView>
    </View>
  );
}
