import { Link } from "react-router";
import { GiCompactDisc } from "react-icons/gi";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { SearchHeader } from "./SearchHeader";
import { Switch } from "@/components/ui/switch";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "@/components/theme-provider";
import { useRef } from "react";
import { useGSAP, gsap } from "@/lib";
import { useSearch } from "../hooks/useSearch";

const menuItemsNav = [
  { icon: MdOutlineCatchingPokemon, label: "PokèDev List", to: "/" },
  { icon: GiCompactDisc, label: "Favorites Pokemons", to: "/favorites" },
];

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const containerTitleRef = useRef<HTMLDivElement>(null);
  const { clearSearchParams } = useSearch();

  useGSAP(
    () => {
      gsap.from(".title-pokedev", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power1.out",
      });
    },
    { scope: containerTitleRef },
  );

  return (
    <header>
      <div className="flex justify-between items-center p-4 w-full">
        <div className="flex items-center gap-7 mr-4">
          <div className="flex items-center gap-2">
            <img src="./images/PokéDevLogo.png" alt="logo" />
            <div
              onClick={clearSearchParams}
              className="text-2xl font-outfit font-bold text-text-tertiary cursor-pointer"
              ref={containerTitleRef}
            >
              <h1 className="title-pokedev">PokèDev</h1>
            </div>
          </div>
          <SearchHeader />
          <div className="flex items-center gap-4 text-text-tertiary font-outfit font-semibold">
            {menuItemsNav.map((item, index) => {
              return (
                <Link
                  to={item.to}
                  key={index}
                  className="flex items-center hover:text-text-primary transition-colors"
                >
                  {item.icon && <item.icon className="text-xl" />}
                  <span className="ml-2">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex  gap-1">
          {theme === "dark" ? <FaMoon /> : <FaSun />}
          <Switch
            checked={theme === "dark"}
            onCheckedChange={(check) => {
              setTheme(check ? "dark" : "light");
            }}
          />
        </div>
      </div>
    </header>
  );
};
