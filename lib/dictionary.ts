// Sample dictionary mapping
// This can be extended or replaced with a more comprehensive dictionary
const dictionary: Record<string, string> = {
  hello: "greetings",
  world: "universe",
  good: "excellent",
  bad: "poor",
  happy: "joyful",
  sad: "melancholy",
  big: "enormous",
  small: "tiny",
  fast: "rapid",
  slow: "gradual",
  hot: "scorching",
  cold: "freezing",
  new: "novel",
  old: "ancient",
  beautiful: "stunning",
  ugly: "unattractive",
  smart: "intelligent",
  dumb: "unintelligent",
  rich: "wealthy",
  poor: "impoverished",
  friend: "companion",
  enemy: "adversary",
  love: "adoration",
  hate: "detest",
  work: "labor",
  play: "recreation",
  eat: "consume",
  drink: "imbibe",
  sleep: "slumber",
  wake: "arise",
  talk: "converse",
  listen: "hear",
  walk: "stroll",
  run: "sprint",
  jump: "leap",
  sit: "rest",
  stand: "rise",
  laugh: "chuckle",
  cry: "weep",
  smile: "grin",
  frown: "grimace",
  think: "ponder",
  know: "understand",
  learn: "study",
  teach: "instruct",
  help: "assist",
  hurt: "harm",
  start: "begin",
  stop: "cease",
  create: "generate",
  destroy: "demolish",
  build: "construct",
  break: "shatter",
  open: "unlock",
  close: "shut",
  find: "discover",
  lose: "misplace",
  give: "provide",
  take: "seize",
  buy: "purchase",
  sell: "vend",
  pay: "compensate",
  receive: "accept",
  send: "transmit",
  get: "obtain",
  make: "produce",
  use: "utilize",
  need: "require",
  want: "desire",
  like: "enjoy",
  dislike: "disapprove",
  try: "attempt",
  succeed: "accomplish",
  fail: "falter",
  win: "triumph",
  lose: "forfeit",
  begin: "commence",
  end: "conclude",
  come: "arrive",
  go: "depart",
  stay: "remain",
  leave: "exit",
  return: "revert",
  move: "shift",
  change: "alter",
  grow: "develop",
  shrink: "contract",
  improve: "enhance",
  worsen: "deteriorate",
  increase: "augment",
  decrease: "diminish",
  add: "append",
  subtract: "deduct",
  multiply: "proliferate",
  divide: "separate",
  count: "enumerate",
  measure: "gauge",
  weigh: "assess",
  see: "observe",
  watch: "monitor",
  look: "gaze",
  hear: "perceive",
  smell: "detect",
  taste: "savor",
  touch: "contact",
  feel: "sense",
}

export function transformText(text: string): { result: string; unmapped: string[] } {
  // Split the input text into words
  const words = text.split(/\b/)
  const unmappedWords: string[] = []

  // Transform each word using the dictionary
  const transformedWords = words.map((word) => {
    // Check if the word is in the dictionary (case-insensitive)
    const lowerWord = word.toLowerCase()

    // Skip transformation for whitespace and punctuation
    if (/^\s*$/.test(word) || /^[^\w\s]$/.test(word)) {
      return word
    }

    if (dictionary[lowerWord]) {
      // Preserve original capitalization
      if (word[0] === word[0].toUpperCase()) {
        return dictionary[lowerWord].charAt(0).toUpperCase() + dictionary[lowerWord].slice(1)
      }
      return dictionary[lowerWord]
    } else {
      // Add to unmapped words if it's an actual word (not whitespace or punctuation)
      if (/^[a-zA-Z]+$/.test(word)) {
        unmappedWords.push(word)
      }
      return word
    }
  })

  return {
    result: transformedWords.join(""),
    unmapped: [...new Set(unmappedWords)], // Remove duplicates
  }
}
