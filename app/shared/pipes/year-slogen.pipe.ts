import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: "jbYearSlogen"
})
export class YearSlogenPipe implements PipeTransform {

    transform(value: string): string {
        // value =  Pipe-הערך שמשמאל לפקודת ה
        // פונקציה זו מקבלת את הערך שברצוננו לשנות
        // ומחזירה את הערך אחרי השינוי
        let arr = ["best year ever!", "cool year!", "amazing times!"];
        let index = Math.random() * arr.length;
        index = parseInt("" + index);
        return value + " (" + arr[index] + ")";
    }

}