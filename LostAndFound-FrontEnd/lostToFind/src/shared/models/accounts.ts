import {ModelBase} from './model-base';

export class Account extends ModelBase{
  username: string;
  email: string;
  cellphone: number;
  password: string;
}
