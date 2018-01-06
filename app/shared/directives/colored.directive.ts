import { OnInit, Directive, ElementRef, Renderer2, Input } from "@angular/core";

// Attribute Directive - Influancing an existing element.

@Directive({
    selector: "[jbColored]"
})
export class ColoredDirective implements OnInit {

    @Input("jbColored") color: string;

    // elementRef = Directive-המכילה את ה HTML-תגית ה
    // renderer = רכיב המאפשר לבצע שינויים על התגית
    constructor(private elementRef: ElementRef,
        private renderer: Renderer2) { }

    ngOnInit(): void {
        if (!this.color) {
            this.color = this.getRandomColor();
        }
        this.renderer.setStyle(this.elementRef.nativeElement,
            "color", this.color);
    }

    private getRandomColor(): string {
        let red = Math.floor(256 * Math.random());
        let green = Math.floor(256 * Math.random());
        let blue = Math.floor(256 * Math.random());
        let color = `rgb(${red},${green},${blue})`;
        return color;
    }
}