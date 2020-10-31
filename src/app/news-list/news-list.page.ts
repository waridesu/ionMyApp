import {Component, OnInit} from '@angular/core';
import {NewsApiService} from '../service/news-api.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-news-list',
    templateUrl: './news-list.page.html',
    styleUrls: ['./news-list.page.scss'],
})
export class NewsListPage implements OnInit {
    articles;
    page = 1;

    constructor(private newsApi: NewsApiService, private router: Router) {
        console.log('app component constructor called');
    }


    ngOnInit() {
    }

    ionViewDidEnter() {
        this.newsApi.getData('everything?q=bitcoin&pageSize=10&page=${this.page}').subscribe((data) => {
            console.log(data);
            this.articles = data[`articles`];
        });
    }


    onSingleNews(article) {
        this.newsApi.currentArticle = article;
        this.router.navigate(['news-list/' + article.source.name]);
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
                    this.articles.push(article);
                }
                event.target.complete();
            });
    }
}
