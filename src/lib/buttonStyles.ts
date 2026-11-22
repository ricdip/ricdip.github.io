// Shared button styling, reused by CtaButton and CvButton so the two stay in sync.
export const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-2.5 font-mono text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export const buttonVariants = {
  primary: "bg-accent text-zinc-950 hover:bg-accent-strong",
  ghost:
    "border border-zinc-300 text-zinc-700 hover:border-accent hover:text-accent-strong dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-accent dark:hover:text-accent",
} as const;

export const buttonDisabled =
  "cursor-not-allowed border border-zinc-300 text-zinc-400 dark:border-zinc-700 dark:text-zinc-600";
