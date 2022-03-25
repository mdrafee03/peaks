interface GuardianSingle {
  response: {
    status: string;
    total: number;
    content: {
      id: string;
      sectionId: string;
      sectionName: string;
      webPublicationDate: string;
      webTitle: string;
      webUrl: string;
      apiUrl: string;
      fields: {
        body: string;
        trailText: string;
        headline: string;
      };
    };
  };
}
export default GuardianSingle;
