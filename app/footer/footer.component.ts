import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'jb-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    private currentYear = new Date().getFullYear();

    ngOnDestroy(): void {
        // נהרס Component-מתבצע פעם אחת כאשר ה
        console.log("ngOnDestroy");
    }

    ngAfterViewChecked(): void {
        // View-מתבצע בכל פעם שאנגולר בודקת שינויים ב
        // Child Views-וב
        console.log("ngAfterViewChecked");
    }

    ngAfterViewInit(): void {
        // View-מתבצע פעם אחת אחרי שאנגולר איתחלה את ה
        // Child Views-ואת ה
        console.log("ngAfterViewInit");
    }

    ngAfterContentChecked(): void {
        // View-מתבצע בכל פעם שאנגולר בודקת את המידע החיצוני שהוזרק ל
        console.log("ngAfterContentChecked");
    }

    ngAfterContentInit(): void {
        // View-מתבצע אחרי שאנגולר מזריקה מידע חיצוני ל
        console.log("ngAfterContentInit");
    }

    ngDoCheck(): void {
        // מתבצע בכל פעם שאנגולר מבצעת בדיקת שינוי כלשהי
        console.log("ngDoCheck");
    }

    ngOnInit(): void {
        // Component-מתבצע פעם אחת בטעינה של ה
        // מיועד לפעולות לוגיות הדרושות לביצוע פעם אחת
        console.log("ngOnInit");
    }

    ngOnChanges(changes: SimpleChanges): void {
        // מתבצע ברגע שיש שינוי במשתנים המקושרים למידע חיצוני
        // Binding קישור משתנה למידע חיצוני נקרא
        // זהו אובייקט המכיל את הערך הישן והחדש changes
        console.log("ngOnChanges");
    }
}
