import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Country } from '../model/country.model';
import { GlobalInfo } from '../model/global-info.model';

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


}