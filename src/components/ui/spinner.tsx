import { cn } from "cn";

import { MdOutlineCatchingPokemon } from "react-icons/md";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <MdOutlineCatchingPokemon
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      className={cn("size-9 animate-spin", className)}
      {...props}
    />
  );
}

export { Spinner };
