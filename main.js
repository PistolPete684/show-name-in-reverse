function nameShuffler(str){
  // Split the full name into an array of first and last names
  let splitWord = str.split(" ");
  // Use template literals to reverse the order upon returning the name
  return `${splitWord[1]} ${splitWord[0]}`;
}