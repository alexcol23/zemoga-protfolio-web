import {Component , OnInit} from '@angular/core';

@Component({
    selector: 'app-navbar' ,
    templateUrl: './navbar.component.html' ,
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    toProfile(): void {
        document.getElementById('profile').scrollIntoView({behavior: 'smooth'});
    }

    toTweets(): void {
        document.getElementById('tweets').scrollIntoView({behavior: 'smooth'});
    }
}
