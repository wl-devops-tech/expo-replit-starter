import { Screen } from "~/components/screen";
import { Text } from "~/components/text";
import { ThemeToggle } from "~/components/theme-toggle";

export default function SettingsScreen() {
  return (
    <Screen safeAreaEdges={["top"]}>
      <Text >Hello from settings screen</Text>
      <ThemeToggle />
    </Screen>
  );
}
