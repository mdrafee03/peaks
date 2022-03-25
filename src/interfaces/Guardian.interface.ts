interface Result {
  id: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  fields: {
    trailText: string;
    body: string;
  };
}
interface GuardianData {
  response: {
    status: string;
    total: number;
    pageSize: number;
    pages: number;
    currentPage: number;
    orderBy: 'newest' | 'oldest';
    results: Result[];
  };
}
export default GuardianData;
