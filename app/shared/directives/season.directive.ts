import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from "@angular/core";

// Structural Directive
// Directive which changes the DOM.

@Directive({
    selector: "[jbSeason]"
})
export class SeasonDirective implements OnInit {

    @Input("jbSeason") season: string;
    
    constructor(private templateRef: TemplateRef<any>, 
        private viewContainer: ViewContainerRef) { }

    ngOnInit(): void {
        if(this.isSeason()) {
            // Directive-הוראה ליצור את התגית של ה
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            // Directive-הוראה לא ליצור את התגית של ה
            this.viewContainer.clear();
        }
    }

    private isSeason(): boolean {
        let month = new Date().getMonth() + 1;
        switch(this.season) {
            case "spring": return month >= 4 && month <= 5;
            case "summer": return month >= 6 && month <= 9;
            case "autumn": return month >= 10 && month <= 11;
            case "winter": return month == 12 || month >= 1 && month <= 3;
            default: return false;
        }
    }

}