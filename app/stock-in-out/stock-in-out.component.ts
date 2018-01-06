import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'jb-stock-in-out',
    templateUrl: './stock-in-out.component.html',
    styleUrls: ['./stock-in-out.component.css']
})
export class StockInOutComponent implements OnInit {

    @Input() unitsInStock: number;
    @Input() unitsOnOrder: number;
    imageSource: string;

    ngOnInit() {
        if(this.unitsOnOrder >= this.unitsInStock) {
            this.imageSource = "/assets/images/out-of-stock.png";
        }
        else {
            this.imageSource = "/assets/images/now-in-stock.png";
        }
    }
}
