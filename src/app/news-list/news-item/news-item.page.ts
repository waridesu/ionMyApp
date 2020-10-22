import {Component, OnInit} from '@angular/core';
import {NewsApiService} from '../../service/news-api.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.page.html',
  styleUrls: ['./news-item.page.scss'],
})
export class NewsItemPage implements OnInit {
  mArticles: Array<any>;

  constructor(public newsApi: NewsApiService) { }

  ngOnInit() {
    this.newsApi.initArticles().subscribe(data => this.mArticles = data[`articles`]);
    console.log(this.mArticles);

  }

}
