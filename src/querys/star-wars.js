import { gql } from "apollo-boost";

export const STAR_WARS_PEOPLE = gql`
{
    allPersons(first: 10) {
      id
      name
      eyeColor
      hairColor
      skinColor
      birthYear
      vehicles{
        name
      } 
      homeworld {
        id
        name
      }
      species {
        id
        name
      }
    }
  }`