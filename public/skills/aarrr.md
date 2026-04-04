---
description: Use when diagnosing growth bottlenecks by analyzing the full user lifecycle funnel from acquisition through revenue
---

# AARRR Pirate Metrics

A growth analytics framework that breaks the user lifecycle into five measurable stages: Acquisition, Activation, Retention, Referral, and Revenue. By tracking conversion rates between stages, teams can identify exactly where the funnel leaks and focus optimization efforts on the highest-leverage bottleneck rather than guessing.

## Steps

1. **Define Each Stage for Your Product** — Map the five AARRR stages to concrete, measurable events in your product. Acquisition = how users find you (channels, campaigns). Activation = the "aha moment" (first value experience). Retention = users coming back (repeat usage within a defined window). Referral = users bringing others (invites, shares). Revenue = users paying (conversion to paid, expansion).

2. **Instrument and Collect Data** — Ensure analytics tracking is in place for each stage's key events. Pull current metrics: visitors, signups, activated users, retained users by cohort, referral actions, and revenue events. Establish the baseline conversion rate between each consecutive stage.

3. **Identify the Bottleneck** — Compare stage-to-stage conversion rates. The stage with the largest drop-off or the lowest absolute conversion is your primary bottleneck. Resist the urge to optimize everywhere at once — focus on the single weakest link.

4. **Diagnose Root Causes** — For the identified bottleneck stage, dig deeper. Segment by channel, cohort, device, geography, or user type. Look for patterns: which segments convert well and which do not? Run qualitative research (surveys, session recordings, interviews) to understand why users drop off.

5. **Design and Run Experiments** — Generate hypotheses to improve the bottleneck metric. Prioritize by expected impact and ease of execution. Run A/B tests or time-bound experiments. Measure the change in the stage conversion rate, not just vanity metrics.

6. **Iterate and Move to the Next Bottleneck** — Once the target conversion rate improves meaningfully, re-examine the full funnel. The next weakest stage becomes the new focus. Repeat the cycle.

## Output Format

A structured report containing:

- **Funnel Definition Table**: Each AARRR stage mapped to specific product events and metrics
- **Baseline Funnel Metrics**: Current conversion rates between each stage with absolute numbers
- **Bottleneck Analysis**: The identified weakest stage, supporting data, and segmented breakdown
- **Root Cause Hypotheses**: Top 3-5 hypotheses explaining the drop-off, with supporting evidence
- **Experiment Plan**: Prioritized list of experiments to address the bottleneck, each with hypothesis, metric, and success criteria
- **Funnel Health Dashboard**: Recommended ongoing metrics and alert thresholds for each stage
