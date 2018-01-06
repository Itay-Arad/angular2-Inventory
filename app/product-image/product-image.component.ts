import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'jb-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent {
    @Input() imageSource: string;

    // 2. יצירת ארוע המסוגל לדווח לרכיב החיצוני
    @Output() onImageClicked = new EventEmitter<string>();

    imageClicked(): void {
        
        // 3. העלאת הארוע - דיווח לרכיב החיצוני
        this.onImageClicked.emit(this.imageSource);
    }
}
