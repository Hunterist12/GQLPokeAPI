const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    pokemon(name: String!): Pokemon
  }

  type Pokemon {
    id: ID!
    name: String
    types: [Type]
    height: Int
    weight: Int
  }

  enum Type {
    BUG
    DARK
    DRAGON
    ELECTRIC
    FAIRY
    FIGHTING
    FIRE
    FLYING
    GHOST
    GRASS
    GROUND
    ICE
    NORMAL
    POISON
    PSYCHIC
    ROCK
    STEEL
    WATER
  }
`

module.exports = typeDefs
