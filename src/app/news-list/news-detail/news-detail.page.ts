import {Component, OnInit} from '@angular/core';
import {NewsApiService} from '../../service/news-api.service';
import {SocialSharing} from '@ionic-native/social-sharing/ngx';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-news-detail',
    templateUrl: './news-detail.page.html',
    styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
    curArticle: Array<any>;
    some;


    constructor(private NewsApi: NewsApiService,
                private socialSharing: SocialSharing) {
    }

    ngOnInit() {
        this.NewsApi.getArticle('everything?').subscribe((data) => {
            this.curArticle = data[`articles`];
            console.log(data);
            console.log(this.curArticle);
        });
    }

    ShareGeneric() {
        this.socialSharing.share('Optional message', 'Optional title', null, ).then(() => {
        }).catch(() => {
        });
    }
}
