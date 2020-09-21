import {PersonalInfoModel} from './personal-info.model';
import {TweetModel} from './tweet.model';

export class ProfileResponseMode {

    personalInformation: PersonalInfoModel;
    tweets: TweetModel[];

    constructor( personalInformation: PersonalInfoModel , tweets: TweetModel[] ) {
        this.personalInformation = personalInformation;
        this.tweets = tweets;
    }
}
