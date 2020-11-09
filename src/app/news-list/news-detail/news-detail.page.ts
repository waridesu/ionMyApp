import {Component, OnInit} from '@angular/core';
import {NewsApiService} from '../../service/news-api.service';
import {SocialSharing} from '@ionic-native/social-sharing/ngx';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-news-detail',
    templateUrl: './news-detail.page.html',
    styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
    item;


    constructor(private NewsApi: NewsApiService,
                private socialSharing: SocialSharing, private ac: ActivatedRoute) {
    }

    ngOnInit() {
        this.ac.queryParams.subscribe( (res) => {
            this.item = [JSON.parse(res.item)];
        });
    }

    ShareGeneric() {
        this.socialSharing.share('Optional message', 'Optional title', null, ).then(() => {
        }).catch(() => {
        });
    }
}
