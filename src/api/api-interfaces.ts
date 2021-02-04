export interface ISummonerAPI {
  id?: string;
  accountId?: string;
  puuid?: string;
  name?: string;
  profileIconId?: number;
  revisionDate?: number;
  summonerLevel?: number;
  status?: {
    message?: string;
    status_code?: number;
  };
}
