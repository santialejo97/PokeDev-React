import { Badge } from "@/components/ui/badge";
import { useBadge } from "../hooks/useBadge";
import type { pokeType } from "../interfaces";

interface BadgeCustomerPokeProp {
  type: pokeType;
}

export const BadgeCustomerPoke = ({ type }: BadgeCustomerPokeProp) => {
  const { color, title } = useBadge(type);
  return (
    <Badge variant={type}>
      <span className={`h-1.5 w-1.5 rounded-full ${color}`}></span> {title}
    </Badge>
  );
};
