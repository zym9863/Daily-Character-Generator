interface Character {
  personality: string;
  hobby: string;
  occupation: string;
  trait: string;
}

interface CharacterData {
  personalities: string[];
  hobbies: string[];
  occupations: string[];
  traits: string[];
}

function getRandomElement<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export function generateCharacter(data: CharacterData): Character {
  return {
    personality: getRandomElement(data.personalities),
    hobby: getRandomElement(data.hobbies),
    occupation: getRandomElement(data.occupations),
    trait: getRandomElement(data.traits)
  };
}