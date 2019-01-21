import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToSpace'
})
export class ConvertToSpacePipe implements PipeTransform{

    transform(value: string, arg: string): String {
        return value.split(arg).join(' ');
    }

}