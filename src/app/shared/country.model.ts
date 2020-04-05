import { CountryInfo } from './model/country-Info.model';

export class Country {

    country: string;
    countryInfo: CountryInfo;
    updated: number;
    cases: number;
    todayCases: number;
    deaths: number;
    todayDeaths: number;
    recovered: number;
    active: number;
    critical: number;
    casesPerOneMilion: number;
    deathsPerOneMilion: number;
    tests: number;
    testsPerOneMilion: number;

    


}