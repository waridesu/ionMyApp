import {Component, OnInit} from '@angular/core';
import {NewsApiService} from '../service/news-api.service';

@Component({
    selector: 'app-news-list',
    templateUrl: './news-list.page.html',
    styleUrls: ['./news-list.page.scss'],
})
export class NewsListPage implements OnInit {
    mSources: Array<any>;
    mArticles: Array<any>;

    constructor(public newsApi: NewsApiService) {
        console.log('app component constructor called');
    }


    ngOnInit() {
        // load articles
        this.newsApi.initArticles().subscribe(data => this.mArticles = data[`articles`]);
        // load news sources
        this.newsApi.initSources().subscribe(data => this.mSources = data[`sources`]);
    }
    searchArticles(source) {
        console.log(`selected source is: ${source}`);
        this.newsApi.getArticlesByID(source).subscribe(data => this.mArticles = data[`articles`]);
    }
}
