function vowelsAndConsonants(s) {
  s.split("").forEach(
    (item) =>
      (item.toLowerCase() === "a" ||
        item.toLowerCase() === "e" ||
        item.toLowerCase() === "i" ||
        item.toLowerCase() === "o" ||
        item.toLowerCase() === "u") &&
      console.log(item)
  );
  s.split("").forEach(
    (item) =>
      item.toLowerCase() !== "a" &&
      item.toLowerCase() !== "e" &&
      item.toLowerCase() !== "i" &&
      item.toLowerCase() !== "o" &&
      item.toLowerCase() !== "u" &&
      console.log(item)
  );
}
