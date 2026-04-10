import { Asset } from "expo-asset";

type Category = { name: string; count: number };

// Each require() registers the asset with Metro at bundle time.
const LANGUAGE_MODULES: Record<string, number> = {
  romanian: require("../app/langs/romanian.csv"),
};

export async function loadCategories(languageName: string): Promise<Category[]> {
  const key = languageName.toLowerCase();
  const moduleId = LANGUAGE_MODULES[key];
  if (moduleId === undefined) return [];

  const asset = Asset.fromModule(moduleId);
  await asset.downloadAsync();

  const response = await fetch(asset.localUri!);
  const csv = await response.text();

  const lines = csv.trim().split("\n").slice(1); // skip header row
  const counts: Record<string, number> = {};

  for (const line of lines) {
    const category = line.split(",")[2]?.trim().replace(/\r$/, "");
    if (category) {
      counts[category] = (counts[category] ?? 0) + 1;
    }
  }

  return Object.entries(counts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
