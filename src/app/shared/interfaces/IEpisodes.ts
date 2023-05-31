import { IInfo } from "./IInfo";

export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface IEpisodes extends IInfo{
  results: IEpisode[]
}