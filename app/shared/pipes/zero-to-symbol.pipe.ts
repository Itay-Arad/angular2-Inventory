import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: "zero2Symbol"
})
export class ZeroToSymbolPipe implements PipeTransform {

    transform(value: number, symbol: string = "---"): string {
        return (value == 0) ? symbol : value.toString();
    }

}