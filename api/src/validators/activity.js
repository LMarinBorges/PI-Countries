module.exports = (body) => {
  const errors = [];
  if (typeof body !== "object") {
    errors.push("Body must be an object.");
    return errors;
  }

  const { name, difficulty, duration, season, countries } = body;
  if (typeof name !== "string") errors.push("Name must be a string.");
  if (typeof difficulty !== "number" || difficulty < 1 || difficulty > 5)
    errors.push("Difficulty must be a number between 1 and 5.");
  if (typeof duration !== "number") errors.push("Duration must be a number.");
  if (typeof season !== "number" || season < 0 || season > 3)
    errors.push("Season must be a number between 0 and 3.");
  if (!Array.isArray(countries)) {
    errors.push("Countries must be an array.");
    return errors;
  }

  if (
    countries.some((value) => typeof value !== "string" || value.length !== 3)
  )
    errors.push("Countries array must only contain 3-letter country codes.");

  return errors;
};
