import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class starComponent{
    @Input() 
    rating: number;
    starWidth: number;

    @Output()
    notify: EventEmitter<string> = new EventEmitter<string>();


    ngOnChanges(): void {
        this.starWidth = this.rating * 75/5;
    }

    ngOnClick(): void{
        this.notify.emit('Rating number is: ' + this.rating);
    }
}

