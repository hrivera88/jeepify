import {Http, Response} from '@angular/http'; 
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()

export class AuthService {

    constructor(private http: Http) {

    }

    spotifyLogin() {
        return this.http.get('http://localhost:8082/login').map((res: Response) => {
            return res.json();
        });
    }

    

}