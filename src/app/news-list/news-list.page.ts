import {Component, OnInit} from '@angular/core';
import {NewsApiService} from '../service/news-api.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-news-list',
    templateUrl: './news-list.page.html',
    styleUrls: ['./news-list.page.scss'],
})
export class NewsListPage implements OnInit {
    data: any;
    page = 1;

    constructor(private newsApi: NewsApiService, private router: Router) {
        console.log('app component constructor called');
    }


    ngOnInit() {
        this.newsApi.getData('top-headlines?country=us&category=business&pageSize=10&page=${this.page}').subscribe(data => {
            console.log(data);
            this.data = data;
        });
    }

    onSingleNews(article) {
        this.newsApi.currentArticle = article;
        this.router.navigate(['news-list/news-detail']);
    }
    loadMoreNews(event) {
        this.page++;
        console.log(event);
        this.newsApi
            .getData(
                `top-headlines?country=us&category=business&pageSize=5&page=${
                    this.page
                }`
            )
            .subscribe(data => {
                // console.log(data);
                // this.data = data;
                for (const article of data[`articles`]) {
                    this.data.articles.push(article);
                }
                event.target.complete();
                console.log(this.data);
            });
    }
}
