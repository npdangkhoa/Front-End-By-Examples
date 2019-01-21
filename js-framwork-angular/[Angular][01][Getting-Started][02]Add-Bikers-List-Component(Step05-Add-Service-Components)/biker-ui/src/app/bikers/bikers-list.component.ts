import { Component } from '@angular/core';
import { IBiker } from './biker';
import { BikersService } from './bikers.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'pm-bikers',
    templateUrl: './bikers-list.component.html'
})
export class BikerListComponent{
    showImage: boolean = true;
    pageTitle: String = 'Bikers List';
    private _listFilter: string;

    filterBikers: IBiker[];
    bikers: IBiker[];

    observerbleBikes: Observable<IBiker[]>;
    errorMessage: String;

    constructor(private bikersService: BikersService){
        console.log(">>>>>>>>>>constructor");
        this.observerbleBikes = this.bikersService.getBikers();
        this.observerbleBikes.subscribe(
            bikes => {
                this.bikers = bikes;
                this.filterBikers = this.bikers;
            },
            error => this.errorMessage = <any>error
        );
        
        bikes => {
            this.bikers = bikes;
            this.filterBikers = this.bikers;
        }


    }

    ngOnInit(): void {
        console.log(">>>>>>>>>>ngOnInit");

    }

    onRatingClicked(message: String): void {
        this.pageTitle = 'Bikers List: ' + message;
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
