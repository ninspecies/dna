function dnaStrand(dna){
  let dic = {"A": "T", "T": "A", "C": "G", "G": "C"}
  let letters = dna.split("")
  let solution = ""
  for (let i = 0; i < letters.length; i++) {
    solution += dic[letters[i]]
  }
  return solution
}