function convertToScrabble(message) {
  return message.split('').map((character) => {
    if (character === ' ') {
      return ':scrabble-blank:'
    }

    if (/[a-zA-Z]/.test(character)) {
      return `:scrabble-${character.toLowerCase()}:`
    }

    return '';
  }).join('');
}

console.log(convertToScrabble(process.argv[2]));
