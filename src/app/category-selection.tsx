import SegmentedControl from "@/components/SegmentedControl";
import { colors, spacing } from "@/constants/theme";
import { Stack, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Difficulty = "easy" | "medium" | "hard" | "mixed";
type SessionLength = "10" | "20" | "30" | "40" | "50" | "inf";

type Category = { name: string; count: number };

const CATEGORIES: Category[] = [
  { name: "Business", count: 124 },
  { name: "Travel", count: 86 },
  { name: "Food", count: 82 },
  { name: "Emotions", count: 54 },
  { name: "Hobbies", count: 78 },
  { name: "Nature", count: 63 },
  { name: "Technology", count: 41 },
  { name: "Lifestyle", count: 110 },
];

const difficultyOptions = [
  { label: "Easy", value: "easy" },
  { label: "Medium", value: "medium" },
  { label: "Hard", value: "hard" },
  { label: "Mixed", value: "mixed" },
];

const sessionLengthOptions = [
  { label: "10", value: "10" },
  { label: "20", value: "20" },
  { label: "30", value: "30" },
  { label: "40", value: "40" },
  { label: "50", value: "50" },
  { label: "∞", value: "inf" },
];

export default function CategorySelectionScreen() {
  const { mode } = useLocalSearchParams<{ mode: "learn" | "review" }>();
  const isReview = mode === "review";

  const [difficulty, setDifficulty] = useState<Difficulty>("mixed");
  const [sessionLength, setSessionLength] = useState<SessionLength>("20");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      <Stack.Screen options={{ title: "Select Topic" }} />
      <SafeAreaView style={styles.safe}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* Difficulty — review mode only */}
          {isReview && (
            <View style={styles.section}>
              <Text style={styles.sectionLabel}>DIFFICULTY</Text>
              <Text style={styles.description}>
                Difficulty influences which words are chosen for review. Words
                you frequently miss are categorized as difficult, while words
                you consistently remember are marked as easy.
              </Text>
              <SegmentedControl
                options={difficultyOptions}
                value={difficulty}
                onChange={(v) => setDifficulty(v as Difficulty)}
              />
            </View>
          )}

          {/* Session length */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>SESSION LENGTH (WORDS)</Text>
            <SegmentedControl
              options={sessionLengthOptions}
              value={sessionLength}
              onChange={(v) => setSessionLength(v as SessionLength)}
            />
          </View>

          {/* Random */}
          <Pressable
            style={[
              styles.card,
              styles.randomCard,
              selectedCategory === "random" && styles.cardSelected,
            ]}
            onPress={() => setSelectedCategory("random")}
          >
            <Text style={styles.randomLabel}>Random</Text>
          </Pressable>

          {/* Category grid */}
          <View style={styles.grid}>
            {CATEGORIES.map((cat) => (
              <Pressable
                key={cat.name}
                style={[
                  styles.card,
                  styles.categoryCard,
                  selectedCategory === cat.name && styles.cardSelected,
                ]}
                onPress={() => setSelectedCategory(cat.name)}
              >
                <Text style={styles.categoryName}>{cat.name}</Text>
                <Text style={styles.categoryCount}>{cat.count} ITEMS</Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: spacing.md,
    gap: spacing.md,
  },

  section: {
    gap: spacing.sm,
  },
  sectionLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: colors.textSecondary,
    letterSpacing: 2,
    paddingHorizontal: 2,
  },
  description: {
    fontSize: 11,
    color: colors.textSecondary,
    lineHeight: 17,
    paddingHorizontal: 2,
    opacity: 0.7,
  },

  card: {
    backgroundColor: colors.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.outlineVariant + "4D",
  },
  cardSelected: {
    borderColor: colors.primary,
  },

  randomCard: {
    padding: spacing.lg,
    alignItems: "center",
    justifyContent: "center",
  },
  randomLabel: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.textPrimary,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
  categoryCard: {
    width: "47%",
    padding: spacing.md,
    gap: spacing.xs,
  },
  categoryName: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  categoryCount: {
    fontSize: 10,
    fontWeight: "700",
    color: colors.textSecondary,
    letterSpacing: 1,
  },
});
