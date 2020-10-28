import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class NewsApiService {
    apiKey = environment.apiKey;
    apiUrl = environment.apiUrl;
    currentArticle: any;
    constructor(private http: HttpClient) {
    }
    getData(url){
        return this.http.get(`${this.apiUrl}/${url}&apiKey=${this.apiKey}`);
    }
    getArticle(artUrl: string) {
        return {
            ...this.currentArticle.find(article => {
                return article.url === artUrl;
            })
        };
    }
}
