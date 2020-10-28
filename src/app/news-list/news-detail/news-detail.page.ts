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
    article;
    link: string = null;


    constructor(private  NewsApi: NewsApiService,
                private socialSharing: SocialSharing,
                private activatedRoute: ActivatedRoute,
                private  router: Router) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('artUrl')) {
                this.router.navigate(['/news-list']);
                return;
            }
            const artUrl = paramMap.get('artUrl');
            this.article = this.NewsApi.getArticle(artUrl);
        });
        this.article = this.NewsApi.currentArticle;
        console.log(this.NewsApi.currentArticle);
    }

    ShareGeneric() {
        this.socialSharing.share('Optional message', 'Optional title', null, this.link = this.NewsApi.currentArticle.url).then(() => {
          console.log(this.link);
        }).catch(() => {
        });
    }
}
