interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonName: (name: string) => void;
  pokemonList: Pokemon[];
}

function NavBar({ setPokemonName, pokemonList }: NavBarProps) {
  return (
    <nav>
      {pokemonList.map((onePokemonfromTheList) => (
        <button
          type="button"
          onClick={() => setPokemonName(onePokemonfromTheList.name)}
          key={onePokemonfromTheList.name}
        >
          {onePokemonfromTheList.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
