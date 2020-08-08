export interface Poll extends PollForm {
  id: number; // 12
  results: number[]; // [0, 0, 0, 0, 5, 7, 2]  voted: boolean;
}
export interface PollForm {
  question: string; // Which days of week you like most?
  options: string[]; // ["Monday", "Tuesday", ...]
  thumbnail: string; // https://image.png
}

export interface PollVote {
  id: number;
  vote: number;
}

export interface Voter {
  id: string; //0xJHSADjH5412SXD
  voted: number[]; //12
}
