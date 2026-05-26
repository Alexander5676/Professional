import { professions } from "../data/professions";

export function getRecommendations(traits, personalityId) {
  const personalityBoost = {
    introvert: ["data-analyst", "software-engineer"],
    leader: ["product-manager"],
    researcher: ["data-analyst", "software-engineer"],
    strategist: ["product-manager", "ux-ui-designer"],
  };

  const scored = professions.map((p) => {
    let score = 0;
    Object.entries(p.traits).forEach(([trait, weight]) => {
      score += (traits[trait] || 0) * weight;
    });
    if (personalityBoost[personalityId]?.includes(p.id)) score *= 1.1;
    return { ...p, match: Math.min(99, Math.round(score / 25)) };
  });

  return scored.sort((a, b) => b.match - a.match).slice(0, 3);
}
