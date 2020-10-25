import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    dynamicPositionClass:string = '';
  
    @HostListener('window:resize', ['$event'])
    getScreenHeight(event?){
      if(window.innerHeight<=500){
        this.dynamicPositionClass = 'bottomRelative';
      }else{
        this.dynamicPositionClass = 'bottomStick';
      }
    }
    

  constructor(private breakpointObserver: BreakpointObserver) {
    this.getScreenHeight();
  }

}
