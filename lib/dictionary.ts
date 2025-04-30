// Sample dictionary mapping
// This can be extended or replaced with a more comprehensive dictionary
export const dictionary: Record<string, string> = {
  "C3": "q",
  "C#3": "2",
  "D3": "w",
  "D#3": "3",
  "E3": "e",
  "F3": "r",
  "F#3": "5",
  "G3": "t",
  "G#3": "6",
  "A3": "y",
  "A#3": "7",
  "B4": "u",
  "C4": "i",
  "C#4": "9",
  "D4": "o",
  "D#4": "0",
  "E4": "p",
  "F4": "z",
  "F#4": "s",
  "G4": "x",
  "G#4": "d",
  "A4": "c",
  "A#4": "f",
  "B4": "v",
  "C5": "b",
  "C#5": "h",
  "D5": "n",
  "D#5": "j",
  "E5": "m",
  "F5": ",",
  "F#5": "l",
  "G#5": ";",
  "A5": "/",
  "A#5": "'",
}

export function transformText(text: string): { result: string; unmapped: string[] } {

  // Match notes and non-whitespace symbols (commas, periods, etc.)
  let upperText = text.toUpperCase();
  const tokens = upperText.match(/[\w#]+|[^\s\w#]*/g);
  const unmappedWords: string[] = []

  let output = tokens.map(token => {
    // Replace note with number if found, otherwise keep the punctuation
    if(dictionary[token]) {
      return dictionary[token]
    }
    else {
      if(token != "" && token != null)
        unmappedWords.push(token);
      return null;
    }
  }).join(' ');
  console.log("output: ", output)

  return {
    result: output,
    unmapped: [...new Set(unmappedWords)], // Remove duplicates
  }
}
