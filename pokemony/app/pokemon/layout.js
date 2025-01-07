import PokemonPage from "./page";
import DetailsPage from "./[id]/page";

export default function PokemonLayout({ children }) {
  return (
    <div className="pokemon-layout">
        <div className="pokemon-list">
            <PokemonPage />
        </div>
        <div className="pokemon-details">
            <DetailsPage />
        </div>
    </div>
  );
}
