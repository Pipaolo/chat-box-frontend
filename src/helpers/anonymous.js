import {
  uniqueNamesGenerator,
  adjectives,
  animals,
  colors,
} from "unique-names-generator";

import { v4 as uuidv4 } from "uuid";

export const generateRandomUser = () => {
  // Generate a suitable name for the anonymous user.
  const randomName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals],
    separator: "-",
  });
  const randomNames = randomName.split("-");

  let username = "";

  // Build Username
  randomNames.forEach((s) => {
    const capitalizedName = s.charAt(0).toUpperCase() + s.slice(1);
    username += capitalizedName;
  });

  // This will be used for storing a temporary userID
  const uuid = uuidv4();

  return {
    username,
    _id: uuid,
    isAnonymous: true,
  };
};
