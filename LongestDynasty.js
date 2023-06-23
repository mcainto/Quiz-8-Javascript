function longestDynasty(dynastyReign) {
  if (dynastyReign.length === 0) {
    return "No Data";
  }

  let longestDuration = 0;
  let longestDynastyName = "";

  for (const dynasty of dynastyReign) {
    const startYear = convertYear(dynasty.start);
    const endYear = convertYear(dynasty.end);

    // Check for invalid roman numerals in the end year
    if (endYear === "Invalid") {
      continue;
    }

    const duration = endYear - startYear + 1;

    if (duration > longestDuration) {
      longestDuration = duration;
      longestDynastyName = dynasty.name;
    }
  }

  return longestDynastyName;
}

function convertYear(romanYear) {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let year = 0;
  let currentPos = 0;
  let currentNumeral = "";

  while (currentPos < romanYear.length) {
    const currentChar = romanYear[currentPos];
    currentNumeral += currentChar;

    if (!romanNumerals.hasOwnProperty(currentNumeral)) {
      // Invalid Roman numeral
      return "Invalid";
    }

    const currentVal = romanNumerals[currentNumeral];

    if (
      currentPos === romanYear.length - 1 ||
      !romanNumerals.hasOwnProperty(currentNumeral + romanYear[currentPos + 1])
    ) {
      year += currentVal;
      currentNumeral = "";
    }

    currentPos++;
  }

  return year;
}

// Example usage with sample data
const dynastyReign = [
  { name: "Dynasty A", start: "MCMXC", end: "MMXVIII" },
  { name: "Dynasty B", start: "MCMXV", end: "MCMXXX" },
  { name: "Dynasty C", start: "MCMLXXIX", end: "MCMXCIX" },
  { name: "Dynasty D", start: "MCMXVIII", end: "Invalid" },
  { name: "Dynasty E", start: "MCMXCIX", end: "MMV" },
];

console.log("Longest Reigning Dynasty: ", longestDynasty(dynastyReign));
