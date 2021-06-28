import {AccountType} from '@models/AccountType';

export enum Ways {
  ONE_WAY,
  TWO_WAY
}

export const WaysList = [
  {label: 'one way', value: Ways.ONE_WAY},
  {label: 'user', value: Ways.TWO_WAY}
];
