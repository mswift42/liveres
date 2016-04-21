import {Injectable} from 'angular2/core';

export class SidenavCategory {
    constructor(public category: String,
                public icon: String) {}
}


@Injectable()
export class SidenavService {

    constructor() {}
    getCategories() {
        return [
            new SidenavCategory("contact", "account circle"),
            new SidenavCategory("profile", "face"),
            new SidenavCategory("projects", "history"),
            new SidenavCategory("employment", "card travel"),
            new SidenavCategory("education", "question answer"),
            new SidenavCategory("awards", "stars")
        ]
    }


}
