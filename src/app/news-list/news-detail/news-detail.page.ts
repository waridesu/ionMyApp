import { Component, OnInit } from '@angular/core';
import {NewsApiService} from '../../service/news-api.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  article;
  constructor(private  NewsApi: NewsApiService) { }

  ngOnInit() {
    this.article = this.NewsApi.currentArticle;
    console.log(this.NewsApi.currentArticle);
  }

}
