class Pokemon {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.hp = 100;
    this.level = 1;
  }

  attack(pokemon) {
    pokemon.hp -= 10;
    console.log(`${this.name} de tipo ${this.type} está atacando a ${pokemon.name} 
      de tipo ${pokemon.type} y le queda de vida ${pokemon.hp}`);
  }
}

const pikachu = new Pokemon("Pikachu", "Eléctrico");
const bulbasaur = new Pokemon("Bulbasaur", "Planta");

pikachu.attack(bulbasaur);
pikachu.attack(bulbasaur);
bulbasaur.attack(pikachu);
console.log(pikachu.hp); // ??
console.log(bulbasaur.hp); // ??

class PokemonFuego extends Pokemon {
  constructor(name) {
    super(name, "Fuego");
  }
  attack(pokemon) {
    if (pokemon.type === "Fuego") {
      super.attack(pokemon);
      super.attack(pokemon);
    } else {
      super.attack(pokemon);
    }
  }
}

class PokemonElectricidad extends Pokemon {
  constructor(name) {
    super(name, "Electric");
  }
  attack(pokemon) {
    if (pokemon.type === "Water") {
      super.attack(pokemon);
      super.attack(pokemon);
    } else {
      super.attack(pokemon);
    }
  }
}

class PokemonPlanta extends Pokemon {
  constructor(name) {
    super(name, "Planta");
  }
  attack(pokemon) {
    if (pokemon.type === "Electrico") {
      super.attack(pokemon);
      super.attack(pokemon);
    } else {
      super.attack(pokemon);
    }
  }
}

const charizard = new PokemonFuego("Charizard");
const squirtle = new PokemonFuego("Squirtle");
