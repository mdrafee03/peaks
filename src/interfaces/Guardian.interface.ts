export interface GuardianData {
  id: string;
  webTitle: string;
  webUrl?: string;
  webPublicationDate: string;
  apiUrl?: string;
  fields?: {
    trailText?: string;
    body?: string;
    main?: string;
  };
}
export interface GuardianResponse {
  response: {
    status: string;
    total: number;
    pageSize: number;
    pages: number;
    currentPage: number;
    orderBy: 'newest' | 'oldest';
    results: GuardianData[];
  };
}
