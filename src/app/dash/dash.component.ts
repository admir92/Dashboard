import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent {
rate = 5;
  organizations =
      [
        { description: 'Curabitur in finibus lacus nam accumsan celerisque',
         number: 25, activeColor: 'blue', cols: 2, rows: 1},
        { description: 'General', number: 25, bgColor: 'blue', cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },


      ];

      assets =
      [
        { description: 'Curabitur in finibus lacus nam accumsan celerisque',
         number: 25, activeColor: 'blue', cols: 2, rows: 1},
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },


      ];  

      trattamenties =
      [
        { description: 'Curabitur in finibus lacus nam accumsan celerisque',
         number: 25, activeColor: 'blue', cols: 2, rows: 1},
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },


      ];  

      informatives =
      [
        { description: 'Curabitur in finibus lacus nam accumsan celerisque',
         number: 25, activeColor: 'blue', cols: 2, rows: 1},
         { description: 'Curabitur in finibus lacus nam accumsan celerisque',
         number: 25, cols: 2, rows: 1},
         { description: 'Curabitur in finibus lacus nam accumsan celerisque',
         number: 25, cols: 2, rows: 1},
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },

      ];  

      impattos =
      [
        { description: 'Curabitur in finibus lacus nam accumsan celerisque',
         number: 25, activeColor: 'blue', cols: 2, rows: 1},
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },

      ]; 

      violazzionies =
      [
        { description: 'Curabitur in finibus lacus nam accumsan celerisque',
         number: 25, activeColor: 'blue', cols: 2, rows: 1},
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },
        { description: 'General', number: 25, cols: 1, rows: 1 },

      ]; 

      fixLis=[
      {title: 'Organization', link: '/dashboard#organization'}, 
      {title: 'Asset', link: '/dashboard#asset'},
      {title: 'Trattamenti ', link: '/dashboard#trattamenti'},
      {title: 'Informative ', link: '/dashboard#informative'},
      {title: 'Impatto ', link: '/dashboard#impatto'},
      {title: 'Violazzioni ', link: '/dashboard#violazzioni'},
    
    ]
     
      

}
