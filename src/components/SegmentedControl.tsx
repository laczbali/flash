import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "@/constants/theme";

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

export default function SegmentedControl({ options, value, onChange }: Props) {
  return (
    <View style={styles.track}>
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <Pressable
            key={option.value}
            style={[styles.segment, selected && styles.segmentSelected]}
            onPress={() => onChange(option.value)}
          >
            <Text style={[styles.label, selected && styles.labelSelected]}>
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    flexDirection: "row",
    backgroundColor: colors.surfaceHigh,
    borderRadius: 10,
    padding: 4,
    gap: 4,
  },
  segment: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 7,
    alignItems: "center",
  },
  segmentSelected: {
    backgroundColor: colors.primaryContainer,
  },
  label: {
    fontSize: 10,
    fontWeight: "700",
    color: colors.textSecondary,
    letterSpacing: 0.8,
  },
  labelSelected: {
    color: colors.onPrimaryContainer,
  },
});
