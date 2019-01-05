import {  Injectable } from '@angular/core';
import { IBiker } from './biker';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class BikersService{
    //TODO: we must declare 'app/api' into assets in angular.json
     BikersUrl: string = 'app/api/data.json';

     observableBike: Observable<IBiker[]>;

    constructor(private http: HttpClient){
        
    }

    getBikers(): Observable<IBiker[]> {
    // We need to pass HTTP URL to Http.get()
    // and it will return the instance of RxJS Observable. 
     this.observableBike = this.http.get<IBiker[]>(this.BikersUrl);
     this.observableBike.pipe(
         tap(data => console.log('JSON Data: ' + JSON.stringify(data))),
         catchError(this.handleError)
     );


     return  this.observableBike;
    }

    private handleError(error: HttpErrorResponse){
        let errorMess = 'Error';
        return throwError(errorMess);
    }
}