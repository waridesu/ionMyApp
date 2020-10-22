import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class NewsApiService {
    apiKey = '95310c35d6c84a77becd32c87b9cd263';

    constructor(private http: HttpClient) {
    }

    initSources() {
        return this.http.get(`https://newsapi.org/v2/sources?language=en&apiKey=${this.apiKey}`);
    }

    initArticles() {
        return this.http.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.apiKey}`);
    }

    getArticlesByID(source: string) {
        return this.http.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${this.apiKey}`);
    }
}
