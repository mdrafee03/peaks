import { GuardianData } from 'src/interfaces/Guardian.interface';

interface TopArticles {
  news: GuardianData[];
  sports: GuardianData[];
  culture: GuardianData[];
  lifeandstyle: GuardianData[];
}

export default TopArticles;
