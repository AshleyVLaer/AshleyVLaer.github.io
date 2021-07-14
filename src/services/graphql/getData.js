export const ALL_POKEMONS_QUERY = `{    
    Pokemons(first: 151) {
        id
        name
    }
}`;

export const POKEMON_BY_NAME_QUERY = `
query Pokemon($name: String!) {
    Pokemon(name: $name) {
        id
        name
        image
        abilities {
          name
        }
        stats {
          name
          value
        }
        types {
          name
        }
        moves {
          name 
          type
          learnMethod
        }
      }
}`
