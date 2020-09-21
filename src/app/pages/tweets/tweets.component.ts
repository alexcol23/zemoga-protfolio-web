import {Component , Input} from '@angular/core';
import {TweetModel} from '../../model/tweet.model';

@Component({
    selector: 'app-tweets' ,
    templateUrl: './tweets.component.html' ,
    styleUrls: ['./tweets.component.css']
})
export class TweetsComponent {

    @Input('tweets') tweets: TweetModel[] = [];

    constructor() {
    }

}
