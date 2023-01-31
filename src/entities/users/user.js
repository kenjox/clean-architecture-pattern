export default class User {
  constructor({ id, name = null, email = null, gender }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.gender = Gender.NOT_SPECIFIED;
  }
}

export const Gender = {
  MALE: 'male',
  FEMALE: 'female',
  NOT_SPECIFIED: 'not specified',
};
