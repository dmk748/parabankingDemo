import {faker} from '@faker-js/faker';

export class RandomDataGenerator {
    
    static getFirstName(): string {
        return faker.person.firstName();
    }   
    static getLastName(): string {
        return faker.person.lastName();
    }
    static getAddress(): string {
        return faker.location.streetAddress();
    }
    static getCity(): string {
        return faker.location.city();
    }
    static getState(): string {
        return faker.location.state();
    }
    static getZipCode(): string {
        return faker.location.zipCode();
    }
    static getPhoneNumber(): string {
        return faker.phone.number();
    }
    static getEmail(): string {
        return faker.internet.email();
    }
    static getSSN(): string {
        return faker.string.numeric(9);
    }
    static getUsername(): string {
        return faker.internet.username();
    }
    static getPassword(): string {
        return faker.internet.password();
    }
    static getRegistrationUser() {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      phoneNumber: faker.phone.number(),
      ssn: faker.string.numeric(9),
      username: faker.internet.username(),
      password: faker.internet.password() 
    };
  }
}