import config from "../config.json";

export const UserType = {
  ADMIN: "ADMIN",
  SPECIAL_GUEST: "SPECIAL_GUEST",
  GUEST: "GUEST",
};

const getApiUrl = (key) => {
  const url = config.endpoints[key];

  if (!url) {
    throw new Error(`API URL for "${key}" not found.`);
  }

  return url;
};

export default getApiUrl;
