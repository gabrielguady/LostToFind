import {ModelBase} from './model-base';

export class LostItem extends ModelBase{
  title: string;
  last_seen_details: string;
  reward : string;
  date_lost : Date;
  is_resolved: boolean;
}
