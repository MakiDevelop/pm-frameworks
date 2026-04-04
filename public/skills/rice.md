---
description: Use when you need a quantitative scoring method to rank competing product initiatives on a consistent scale
---

# RICE Scoring Model

A prioritization framework that scores initiatives across four dimensions — Reach, Impact, Confidence, and Effort — to produce a single comparable score. RICE removes gut-feel bias from roadmap decisions by forcing teams to estimate each factor explicitly. The resulting score enables apples-to-apples comparison across very different types of work.

## Steps

1. **Estimate Reach** — Define the number of users or events this initiative will affect within a specific time period (e.g., per quarter). Use real data: analytics, funnel metrics, or segment sizes. Express as a concrete number, not a qualitative label.

2. **Estimate Impact** — Assess how much this initiative will move the target metric per user reached. Use a standardized scale: 3 = massive, 2 = high, 1 = medium, 0.5 = low, 0.25 = minimal. Anchor each level to a concrete definition relevant to your product.

3. **Estimate Confidence** — Rate your confidence in the Reach and Impact estimates. 100% = backed by data, 80% = strong evidence, 50% = educated guess, 20% = speculation. This penalizes poorly understood initiatives and rewards validated hypotheses.

4. **Estimate Effort** — Calculate the total person-months (or person-weeks) required from all teams: engineering, design, QA, data, ops. Round up. Include hidden costs like coordination overhead and technical debt.

5. **Calculate the RICE Score** — Apply the formula: RICE = (Reach x Impact x Confidence) / Effort. Compute for every candidate initiative. The higher the score, the better the return on investment of team time.

6. **Rank and Decide** — Sort initiatives by RICE score. Review the top and bottom of the list for sanity. Discuss any surprises. Adjust if strategic context demands it, but document deviations from the ranking with clear rationale.

## Output Format

A structured report containing:

- **Scoring Table**: Each initiative with Reach, Impact, Confidence, Effort, and final RICE score
- **Ranked List**: Initiatives sorted by RICE score from highest to lowest
- **Assumptions Log**: For each initiative, the key assumptions behind Reach and Impact estimates
- **Confidence Gaps**: Initiatives with Confidence below 50% flagged for further research before commitment
- **Recommended Roadmap**: Top N initiatives that fit within available capacity, with rationale for any rank-order overrides
