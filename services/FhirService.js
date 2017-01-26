

class FhirService {

  constructor() {

  }

  authorize() {
    window.FHIR.oauth2.authorize({
      "client": {
        "client_id": "2e5e6d70-62d5-4a7f-8735-8a5475c5e12c",
        "scope": "user/*.read"
      },
      "server": "https://fhir-api-dstu2.smarthealthit.org"
    });
  }

}



export default new FhirService();
