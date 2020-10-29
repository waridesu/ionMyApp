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
    article;
    link = this.article.url;


    constructor(private NewsApi: NewsApiService,
                private socialSharing: SocialSharing,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.link = this.activatedRoute.snapshot.paramMap.get('link');
        console.log(this.link);
    }

    ShareGeneric() {
        this.socialSharing.share('Optional message', 'Optional title', null, this.link = this.NewsApi.currentArticle.url).then(() => {
          console.log(this.link);
        }).catch(() => {
        });
    }
}
