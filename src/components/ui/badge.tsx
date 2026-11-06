import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        // Variantes originales de shadcn/ui
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",

        secondary:
          "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",

        destructive:
          "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",

        outline:
          "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",

        link: "text-primary underline-offset-4 hover:underline",

        // Tipos de Pokémon
        normal:
          "inline-flex items-center gap-1.5 rounded-md border border-stone-500/30 bg-stone-500/15 px-2.5 py-0.5 text-xs font-semibold text-stone-400",

        fire: "inline-flex items-center gap-1.5 rounded-md border border-red-500/30 bg-red-500/15 px-2.5 py-0.5 text-xs font-semibold text-red-400",

        water:
          "inline-flex items-center gap-1.5 rounded-md border border-sky-500/30 bg-sky-500/15 px-2.5 py-0.5 text-xs font-semibold text-sky-400",

        grass:
          "inline-flex items-center gap-1.5 rounded-md border border-green-500/30 bg-green-500/15 px-2.5 py-0.5 text-xs font-semibold text-green-400",

        electric:
          "inline-flex items-center gap-1.5 rounded-md border border-yellow-500/30 bg-yellow-500/15 px-2.5 py-0.5 text-xs font-semibold text-yellow-400",

        ice: "inline-flex items-center gap-1.5 rounded-md border border-cyan-500/30 bg-cyan-500/15 px-2.5 py-0.5 text-xs font-semibold text-cyan-300",

        fighting:
          "inline-flex items-center gap-1.5 rounded-md border border-orange-500/30 bg-orange-500/15 px-2.5 py-0.5 text-xs font-semibold text-orange-400",

        poison:
          "inline-flex items-center gap-1.5 rounded-md border border-purple-500/30 bg-purple-500/15 px-2.5 py-0.5 text-xs font-semibold text-purple-400",

        ground:
          "inline-flex items-center gap-1.5 rounded-md border border-amber-600/30 bg-amber-600/15 px-2.5 py-0.5 text-xs font-semibold text-amber-400",

        flying:
          "inline-flex items-center gap-1.5 rounded-md border border-sky-500/30 bg-sky-500/15 px-2.5 py-0.5 text-xs font-semibold text-sky-400",

        psychic:
          "inline-flex items-center gap-1.5 rounded-md border border-fuchsia-500/30 bg-fuchsia-500/15 px-2.5 py-0.5 text-xs font-semibold text-fuchsia-400",

        bug: "inline-flex items-center gap-1.5 rounded-md border border-lime-500/30 bg-lime-500/15 px-2.5 py-0.5 text-xs font-semibold text-lime-400",

        rock: "inline-flex items-center gap-1.5 rounded-md border border-orange-700/30 bg-orange-700/15 px-2.5 py-0.5 text-xs font-semibold text-orange-300",

        ghost:
          "inline-flex items-center gap-1.5 rounded-md border border-violet-500/30 bg-violet-500/15 px-2.5 py-0.5 text-xs font-semibold text-violet-400",

        dragon:
          "inline-flex items-center gap-1.5 rounded-md border border-indigo-500/30 bg-indigo-500/15 px-2.5 py-0.5 text-xs font-semibold text-indigo-400",

        dark: "inline-flex items-center gap-1.5 rounded-md border border-slate-500/30 bg-slate-500/15 px-2.5 py-0.5 text-xs font-semibold text-slate-400",

        steel:
          "inline-flex items-center gap-1.5 rounded-md border border-gray-400/30 bg-gray-400/15 px-2.5 py-0.5 text-xs font-semibold text-gray-300",

        fairy:
          "inline-flex items-center gap-1.5 rounded-md border border-pink-500/30 bg-pink-500/15 px-2.5 py-0.5 text-xs font-semibold text-pink-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props,
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  });
}

export { Badge, badgeVariants };
