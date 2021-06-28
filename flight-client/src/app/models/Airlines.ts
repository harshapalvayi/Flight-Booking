import {Ways} from '@models/Ways';

export enum Airlines {
  AMERICAN_AIRLINES,
  UNITED_AIRLINES,
  DECCAN_AIRLINES,
  AIR_INDIA,
  SPIRIT_AIRLINES,
  QATAR_AIRLINES
}

export enum Airports {
  BOM = 'Mumbai Airport',
  CVG = 'Cincinnati Airport',
  HYD = 'Hyderabad Airport',
  DEL = 'Delhi Airport',
  CAL = 'California Airport'
}

export const AirportList = [
  {label: 'BOM - Mumbai Airport', value: Airports.BOM},
  {label: 'CVG - Cincinnati Airport', value: Airports.CVG},
  {label: 'HYD - Hyderabad Airport', value: Airports.HYD},
  {label: 'DEL - Delhi Airport', value: Airports.DEL},
  {label: 'CAL - California Airport', value: Airports.CAL}
];


export const AirlinesList = [
  {label: 'AMERICAN AIRLINES', value: Airlines.AMERICAN_AIRLINES},
  {label: 'UNITED AIRLINES', value: Airlines.UNITED_AIRLINES},
  {label: 'DECCAN AIRLINES', value: Airlines.DECCAN_AIRLINES},
  {label: 'AIR INDIA', value: Airlines.AIR_INDIA},
  {label: 'QATAR AIRLINES', value: Airlines.QATAR_AIRLINES},
  {label: 'SPIRIT AIRLINES', value: Airlines.SPIRIT_AIRLINES}
];
