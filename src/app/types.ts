export interface Poll {
  id: number; // 12
  question: string; // Which days of week you like most?
  results: number; // [0, 0, 0, 0, 5, 7, 2]
  options: string[]; // ["Monday", "Tuesday", ...]
  thumbnail: string; // https://image.png
}

export interface Voter {
  id: string; //0xJHSADjH5412SXD
  voted: number[]; //12
}
