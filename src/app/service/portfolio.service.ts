import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PersonalInfoModel} from '../model/personal-info.model';

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {

    constructor( private http: HttpClient ) {
    }

    getPortfolioInformation( userId: number ): any {
        const url = `http://localhost:10010/portfolio-api/v1/profile/personal-info?userId=${userId}`;
        return this.http.get(url);
    }

    updatePersonalInfo( personalInfo: PersonalInfoModel ): any {
        const url = `http://localhost:10010/portfolio-api/v1/profile/personal-info`;
        return this.http.put(url , personalInfo);
    }
}
