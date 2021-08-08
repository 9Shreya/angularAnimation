import {Component,HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'infraon';
  collapsed = true;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(scrollY,pageYOffset);

  }
  valueHeight: any = 0;
  @HostListener('window:scroll',['$event']) onScroll($event: Event): void {
    if ($event) {
      console.log($event,pageYOffset);
      this.valueHeight = pageYOffset
    }
  }


}
