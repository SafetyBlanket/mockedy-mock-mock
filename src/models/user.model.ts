import { observable, computed, action, makeAutoObservable } from 'mobx';
import faker from 'faker';

/**
 * @description This is an example of using models via vanilla interface
 */
export interface UserInterface {
  id?: string;
  firstName: string;
  lastName: string;
}

/**
 * @description This is an example of Mobx.js model implementation
 */
export class UserModel {
  @observable 
    id?: string = faker.random.alphaNumeric(10);
  
  @observable
    firstName: string = faker.name.firstName();

  @observable 
    lastName: string = faker.name.lastName();

  @computed
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  
  @computed
    get isValid(): boolean {
      return [!!this.firstName, !!this.lastName].reduce((a, c) => a && c);
    }

  @action
    reset() {
      this.firstName = '';
      this.lastName = '';
    }

  
  constructor() {
    makeAutoObservable(this);
  }
}
