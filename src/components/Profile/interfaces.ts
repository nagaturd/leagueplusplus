export interface ISummoner {
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

export interface IRankedStats {
  leagueId?: string;
  queueType?: string;
  tier?: string;
  rank?: string;
  summonerId?: string;
  summonerName?: string;
  leaguePoints?: number;
  wins?: number;
  losses?: number;
  veteran?: boolean;
  inactive?: boolean;
  freshBlood?: boolean;
  hotStreak?: boolean;
}
