import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Country, Countries } from '../model/country.model';
import { GlobalInfo } from '../model/global-info.model';
import { InfosToMap } from '../model/infos-to-map.model';
import { HistoricalDate } from '../model/historical-date.model';

@Injectable({
    providedIn: 'root'
})
export class NovelCovidService {

    private NOVEL_COVID_API_URL: string = 'https://corona.lmao.ninja/';

    constructor(private http: HttpClient) { }

    getAllCountry(sort: string = 'country'): Observable<Array<Country>> {
        let uri: string = this.NOVEL_COVID_API_URL + 'countries';
        return this.http.get<Array<Country>>(uri,
            {
                params: new HttpParams()
                    .set('sort', sort)
            });
    }

    getGlobalInfo(sort: string = 'country'): Observable<GlobalInfo> {
        let uri: string = this.NOVEL_COVID_API_URL + 'all';
        return this.http.get<GlobalInfo>(uri);
    }

    getCountryByIso3(iso3: Countries): Observable<Country> {
        let uri: string = this.NOVEL_COVID_API_URL + 'countries/' + iso3;
        return this.http.get<Country>(uri);
    }

    getAllInfosToMap(): Observable<InfosToMap> {
        let uri: string = this.NOVEL_COVID_API_URL + 'v2/jhucsse';
        return this.http.get<InfosToMap>(uri);
    }

    getAllHistoricalDate(): Observable<Array<HistoricalDate>>{
        let uri: string = this.NOVEL_COVID_API_URL + 'v2/historical';
        return this.http.get<Array<HistoricalDate>>(uri);
    }

}