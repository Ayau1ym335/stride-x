// Blog post data - can be moved to a separate file or fetched from backend
export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    content: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: "why-gait-trends-matter",
        title: "Why Gait Trends Matter Between Visits",
        excerpt: "Understanding how tracking movement patterns over time can improve clinical conversations and patient outcomes.",
        date: "2025-01-15",
        readTime: "5 min read",
        category: "Education",
        content: `
# Why Gait Trends Matter Between Visits

When you visit your physical therapist or orthopedist, they get a snapshot of how you're moving *that day*. But what about the other 89 days between quarterly appointments?

## The Gap in Clinical Care

Most patients experience their recovery or condition progression through daily moments that never make it into the clinical record:

- The good days when walking feels easier
- The setbacks after overexertion
- The gradual improvements that are hard to remember weeks later
- The patterns that emerge only over time

**This context gap matters.** Without it, clinicians rely on patient recall (often unreliable) and single-visit observations that may not represent typical function.

## What Trend Data Reveals

Continuous gait tracking captures patterns that snapshots miss:

### Variability Over Time
Some days are genuinely better than others. Trend data shows whether your good days are becoming more frequent, or if variability itself is a pattern worth investigating.

### Response to Activity
When pain or dysfunction follows specific activities, trend data creates a timeline. Did symptoms worsen after the hike, or were they already declining? Objective data answers questions memory can't.

### Gradual Progress
Improvements in gait often happen slowly—too slowly to notice day-to-day. Trend visualization makes subtle progress visible, which matters for motivation and clinical decision-making.

## Supporting, Not Replacing Clinical Judgment

It's important to understand what trend data is—and isn't.

**Trend data is:**
- Context for clinical conversations
- Objective information to supplement patient reports
- A record of what happened between visits

**Trend data is not:**
- A diagnosis
- A replacement for clinical examination
- Sufficient for treatment decisions on its own

The goal is better conversations, not automated healthcare.

## The Bottom Line

When clinicians have objective context about what happened between visits, they can make better-informed decisions. When patients can see their own progress, they stay more engaged in their care.

That's why gait trends matter.

---

*Interested in tracking your movement patterns? [Join our waitlist](/contact) for early access.*
    `,
    },
    {
        slug: "understanding-symmetry-stability",
        title: "How to Interpret Symmetry & Stability (Without Diagnosis)",
        excerpt: "A patient-friendly guide to understanding what gait metrics mean—and what they don't.",
        date: "2025-01-08",
        readTime: "6 min read",
        category: "Education",
        content: `
# How to Interpret Symmetry & Stability (Without Diagnosis)

When you start tracking your gait, you'll see metrics like "symmetry" and "stability." But what do these actually mean? And more importantly, what *don't* they mean?

## Understanding Symmetry

**What it is:** A measure of how similar your left and right sides are during walking. Perfect symmetry would mean identical movement on both sides.

**What you might see:**
- Scores often displayed as percentages (e.g., 92% symmetric)
- Higher numbers generally indicate more balanced movement
- Values may fluctuate day-to-day

**What it doesn't tell you:**
- Whether asymmetry is "good" or "bad" (some asymmetry is normal)
- The cause of any asymmetry
- Whether you need intervention

**How to think about it:** Symmetry is most useful as a trend. Is your symmetry improving, declining, or stable over time? That pattern is more informative than any single number.

## Understanding Stability

**What it is:** A measure of how consistent your gait pattern is from step to step. More stable means less variation between steps.

**What you might see:**
- Often displayed as a variability index or percentage
- Lower variability generally indicates more consistent gait
- May be reported for different aspects (timing, range of motion, etc.)

**What it doesn't tell you:**
- Whether your stability level is "normal" for your age and condition
- The clinical significance of any particular value
- Whether changes require medical attention

**How to think about it:** Like symmetry, stability is most meaningful as a trend. Are you becoming more consistent over time? That's often encouraging. Is variability increasing? Worth mentioning to your clinician.

## The Limitations of Self-Interpretation

Here's the crucial part: **these metrics are context, not conclusions.**

You cannot diagnose yourself using gait metrics. You cannot determine whether a value is concerning without clinical expertise. You cannot know what "normal" means for your specific situation.

What you *can* do:
1. **Track patterns** - Are things improving, declining, or stable?
2. **Note context** - What activities or events correlate with changes?
3. **Share information** - Bring this data to clinical conversations

## When to Share with Your Clinician

Consider mentioning gait trends at your next appointment if:

- You notice a consistent decline over several weeks
- There's a sudden change that persists
- You see patterns related to specific activities
- You simply want another perspective

Your clinician can interpret these trends in the context of your full medical picture—something no tracking app can do.

## The Value of Objective Data

Even with all these limitations, objective data has value. It supplements (not replaces) your subjective experience and gives your care team additional information to work with.

Think of it like keeping a symptom diary, but more consistent and objective. It's a tool for better communication, not a medical analysis.

---

*NMove tracks symmetry, stability, and more. [Learn how it works](/product).*
    `,
    },
    {
        slug: "movement-timeline-appointment",
        title: "What to Bring to Your Next Appointment: Movement Timeline",
        excerpt: "How to use your movement data to have more productive conversations with your healthcare provider.",
        date: "2025-01-01",
        readTime: "4 min read",
        category: "Tips",
        content: `
# What to Bring to Your Next Appointment: Movement Timeline

You've been tracking your movement for weeks. Now you have an appointment with your physical therapist, orthopedist, or primary care doctor. How do you make the most of that data?

## The Problem with Recall

When your doctor asks "How have you been feeling since our last visit?", most of us struggle. We remember the really good days and the really bad ones, but the overall pattern? It's fuzzy.

Studies show patient recall is unreliable, especially over weeks or months. We naturally emphasize recent events and dramatic moments while forgetting the gradual trends that might matter most.

## Enter the Movement Timeline

A movement timeline is simply a record of your gait patterns over time, paired with notes about relevant events. It might show:

- Your daily or weekly trend scores
- Notes you added about pain, activities, or symptoms
- Any flagged changes or deviations

This gives your clinician objective context they wouldn't otherwise have.

## How to Present Your Data

**Keep it simple.** Your clinician has limited time. A one-page summary beats a 20-page report.

**Highlight what matters.** If there's a significant change or pattern, point it out. Don't make them search.

**Add context.** Data without context is less useful. "Stability dropped 15% the week after I increased my walking distance" is more valuable than "Stability dropped 15%."

**Don't over-interpret.** Present the data, but let your clinician draw clinical conclusions. That's their expertise.

## What Clinicians Appreciate

Based on conversations with healthcare providers, here's what they find most useful:

1. **Trend visualization** - A simple chart showing change over time
2. **Notable events** - Correlations between activities and metrics
3. **Patient observations** - Your subjective notes alongside objective data
4. **Brevity** - Respect for their time

## What to Avoid

- Asking for diagnosis based on your tracking data
- Assuming any single metric is definitive
- Overwhelming them with too much information
- Using tracking data to second-guess their recommendations

## The Conversation Starter

Think of your movement timeline as a conversation starter, not a conclusion. It gives you something concrete to discuss and helps ensure important patterns don't get lost to memory.

The goal isn't to replace clinical judgment—it's to inform it with better data.

---

*NMove generates one-page clinician summaries automatically. [See a sample](/for-clinicians).*
    `,
    },
];
