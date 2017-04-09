import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <div [ngPlural]='name' [ngStyle]='style' >
    <ng-template ngPluralCase='=Deverpham'>{{name}}</ng-template>
    </div>
    <input [(ngModel)] ='colorString' />
    <button (click)='changeColor()' auto-hide
            [color]='colorString'
            [fontSize]='fontSize'>Change Color</button>
    <input [(ngModel)] ='fontSize' />
    <button (click) ='changeFontSize()'>Change Font Size</button>
  `
})
export class AppComponent  {
  colorString:string;
  fontSize:number;
  name='Deverpham';
    style:any = {
      fontSize:'14px',
      background:'green'
    }
    changeColor() {
        this.style.background = this.colorString || 'red';
        this.style.transition='all 0.5s'
    }
    changeFontSize() {
      this.style.fontSize=this.fontSize +'px';
    }
}
