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
    if (pokemon.hp == 0) {
      console.log(`El pokemon ${pokemon.name} de tipo ${pokemon.type} ha fallecido en el campo de batalla.`)
    } 
  }
}

class PokemonFuego extends Pokemon {
  constructor(name) {
    super(name, "Fuego");
  }
  attack(pokemon) {
    if (pokemon.type === "Planta") {
      super.attack(pokemon);
      super.attack(pokemon);
    } else {
      super.attack(pokemon);
    }
  }
}

class PokemonAgua extends Pokemon{
    constructor(name){
        super(name, 'Water')
    }
    attack (pokemon){
      if (pokemon.type === 'Fuego'){
        super.attack(pokemon)
        super.attack(pokemon)
      }else{
        super.attack(pokemon)
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
    if (pokemon.type === "Electric") {
      super.attack(pokemon);
      super.attack(pokemon);
    } else {
      super.attack(pokemon);
    }
  }
}

const charizard = new PokemonFuego('Charizard')
const squirtle = new PokemonAgua('Squirtle')
const pikachu = new PokemonElectricidad('Pikachu')
const bulbasur = new PokemonPlanta('Bulbasur')

squirtle.attack(charizard) // ??
charizard.attack(squirtle) // ??
pikachu.attack(squirtle) // ??
bulbasur.attack(pikachu) // ??
