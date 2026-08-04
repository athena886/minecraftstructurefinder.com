export const STRUCTURES = {
  1: { key: "desert-pyramid", name: "Desert Pyramid", icon: "▲", color: "#c88d39", description: "TNT trap, enchanted golden apples" },
  2: { key: "jungle-temple", name: "Jungle Temple", icon: "◆", color: "#477a3f", description: "Dispenser traps, treasure chests" },
  4: { key: "igloo", name: "Igloo", icon: "⌂", color: "#78a5b8", description: "Secret basement, golden apple" },
  5: { key: "village", name: "Village", icon: "⌂", color: "#9a683c", description: "Trading & iron golem spawns" },
  7: { key: "shipwreck", name: "Shipwreck", icon: "⚓", color: "#4b8295", description: "Buried treasure map" },
  8: { key: "ocean-monument", name: "Ocean Monument", icon: "♜", color: "#2e938d", description: "Sponges, prismarine, guardians" },
  9: { key: "woodland-mansion", name: "Woodland Mansion", icon: "▦", color: "#5d503f", description: "Totems of undying, vexes" },
  10: { key: "pillager-outpost", name: "Pillager Outpost", icon: "♜", color: "#925446", description: "Crossbows, bad omen banner" },
  11: { key: "ruined-portal", name: "Ruined Portal", icon: "◇", color: "#9a57a3", description: "Loot chest, crying obsidian" },
  12: { key: "ruined-portal", name: "Ruined Portal", icon: "◇", color: "#9a57a3", description: "Loot chest, crying obsidian" },
  13: { key: "ancient-city", name: "Ancient City", icon: "✦", color: "#214d72", description: "Swift Sneak enchantment, Warden danger" },
  18: { key: "nether-fortress", name: "Nether Fortress", icon: "♜", color: "#7d3535", description: "Blaze rods, wither skeletons" },
  19: { key: "bastion-remnant", name: "Bastion Remnant", icon: "▦", color: "#5b4038", description: "Piglin trades, gold blocks" },
  20: { key: "end-city", name: "End City", icon: "✧", color: "#745d9d", description: "Elytra, shulker shells" },
  24: { key: "trial-chambers", name: "Trial Chambers", icon: "⬡", color: "#d06d32", description: "Trial keys, breeze rods, mace" },
  100: { key: "stronghold", name: "Stronghold", icon: "♜", color: "#626a70", description: "End portal location" },
};

export function getStructure(type) {
  return STRUCTURES[type] || { key: `structure-${type}`, name: "Structure", icon: "•", color: "#68706a" };
}
