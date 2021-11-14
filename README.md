# SimpleWordAnalyzer
A simple word analyzer for mobile web app assignment.

## How?!?!
1. Initialized all variables that you need: `wordSplit`, `wordInput`, `countVowel`, `countConsonant` and `countChar`.
2. In the `analyzeWord()` function, get the length of the word to put into `countChar` .
3. Make the `wordInput` into uppercase letters (to make vowel checks more simple) and then split the characters to put inside an array `wordSplit`.
4. Use `for` loop to check each character of `wordSplit`, to check vowel first, then whitespace and lastly consonant.
5. Show the display into `render` function with details for the result above, with `TextInput` for inputting `wordInput` and `Button` to run the `analyzeWord()` function.

For more details, check `App.js`, thanks.
