import { Component } from '@angular/core';
import { IBiker } from './biker';

@Component({
    selector: 'pm-bikers',
    templateUrl: './bikers-list.component.html'
})
export class BikerListComponent{
    showImage: boolean = true;
    pageTitle: String = 'Bikers List';
    private _listFilter: string = 'Davis';

    filterBikers: IBiker[];
    bikers: IBiker[] = [
        {
        "id": 1001,
        "name": "samantha Davis",
        "email": "samantha@gmail.com",
        "phone": "4448-295-55555",
        "model": "Golval-carbon",
        "serialNumber": null,
        "birthday": "2110-01-08T17:00:00.000+0000",
        "starRating": 3.4,
        "salary":3400,
        "image": "http://blog.mola-light.com/wp-content/uploads/2013/01/007_FaceBike_JE12113_Final.jpg"
        },
        {
        "id": 1002,
        "name": "Warren Davis",
        "email": "davis@gmail.com",
        "phone": "4448-295-55555",
        "model": "Golval-carbon",
        "serialNumber": null,
        "birthday": "2110-01-08T17:00:00.000+0000",
        "starRating": 4.4,
        "salary":4400,
        "image": "http://blog.mola-light.com/wp-content/uploads/2013/01/008_FaceBike_JE12157_Final.jpg"

        },
        {
        "id": 1003,
        "name": "Tomy Ngo",
        "email": "Tomy@gmail.com",
        "phone": "4448-295-55555",
        "model": "Golval-carbon",
        "serialNumber": null,
        "birthday": "2110-01-08T17:00:00.000+0000",
        "starRating": 5.0,
        "salary":5400,
        "image": "http://blog.mola-light.com/wp-content/uploads/2013/01/013_FaceBike_JE11923_Final.jpg"
        }
        ];


    constructor(){
        console.log('constructor of list biker');
        this.filterBikers = this.bikers;
        this.listFilter = 'Davis';
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    };

    public get listFilter(): string {
        return this._listFilter;
    }
    public set listFilter(value: string) {
        console.log('filter by:' + value);
        this._listFilter = value;
        this.filterBikers = this.listFilter ? this.performFilter(value) : this.bikers;
    }

    performFilter(filterBy: string): IBiker[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.bikers.filter((bike:IBiker) => {
            return bike.name.toLocaleLowerCase().indexOf(filterBy) > -1;
        });
    }
}
