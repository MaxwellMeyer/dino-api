export default class DinoService {
  static async dinoIpsum() {
    try {
      let response = await fetch(
        `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${input1}&words=${input2}`
      );
      if (!response.ok) {
        throw Error(response);
      }
      return response.json();
    } catch (error) {
      return `Oh no, there was an error ${error}`;
    }
  }
}
