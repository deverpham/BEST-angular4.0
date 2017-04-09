import {Directive,HostListener,ElementRef,Input } from '@angular/core';
@Directive({
  selector:'[auto-hide]'
})
export class AutoHide {
    @Input() color:string;
    @Input() fontSize:number;
    constructor( public el:ElementRef) {

      console.log('autoHide works');
    }
    @HostListener('click')
    hoverTrigger() {
      console.log(this.el);
      this.el.nativeElement.style.color=this.color;
      this.el.nativeElement.style.fontSize=this.fontSize+'px';
    }
}
