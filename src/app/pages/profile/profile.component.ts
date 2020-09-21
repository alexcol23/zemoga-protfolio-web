import {Component , OnInit} from '@angular/core';
import {PortfolioService} from '../../service/portfolio.service';
import {PersonalInfoModel} from '../../model/personal-info.model';
import {TweetModel} from '../../model/tweet.model';
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
    selector: 'app-profile' ,
    templateUrl: './profile.component.html' ,
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    public personalInfo: PersonalInfoModel;
    public tweets: TweetModel[] = [];

    constructor( private portfolioService: PortfolioService ) {
    }

    ngOnInit(): void {
        this.portfolioService.getPortfolioInformation(4)
            .subscribe(( data: any ) => {
                this.personalInfo = data.personalInformation;
                this.tweets = data.tweets;
            });
    }

    savePersonalInfo( form: NgForm ) {
        Swal.fire({
            title: 'few seconds more' ,
            text: 'Saving Information' ,
            icon: 'info' ,
            allowOutsideClick: false
        });
        Swal.showLoading();
        const personalInfoUpdated = {...this.personalInfo};
        personalInfoUpdated.name = form.value['name'];
        personalInfoUpdated.lastName = form.value['lastName'];
        personalInfoUpdated.description = form.value['description'];
        this.portfolioService.updatePersonalInfo(personalInfoUpdated)
            .subscribe(data => {
                this.personalInfo = data;
                Swal.fire({
                    title: this.personalInfo.name ,
                    text: 'updated successfully' ,
                    icon: 'success'
                });
            });

    }
}
