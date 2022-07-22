export interface RanksData {
  id: number;
  logo: string;
  name: string;
  players: Player[];
  ranking: number;
}

export interface Player {
  fullname: string;
  image: string;
  nickname: string;
  country: Country;
}

export interface Country {
  flag: string;
  name: string;
}
