import {Injectable} from '@angular/core';

@Injectable()
export class JP_SearchService {
    searchTerm: string;

    setTerm(term) {
        this.searchTerm = term;
        console.log(this.searchTerm);
    }

    getTerm() {
        return this.searchTerm;
    }

}