import { Directive, OnInit, ElementRef, Renderer2, Input, OnChanges,  } from "@angular/core";
import { keyframes, AnimationPlayer, style, animate, transition } from "@angular/animations";

@Directive({
    selector: '[scanner]'
})
export class ScannerDirective implements OnChanges {
    @Input() visible = false;
    scanElement: any;

    constructor(private element: ElementRef, private renderer: Renderer2) {
        this.scanElement = this.renderer.createElement('div');
        this.renderer.addClass(this.scanElement, "scanner");
        this.renderer.setStyle(this.scanElement, 'display', 'none');
        this.renderer.appendChild(this.element.nativeElement, this.scanElement);
    }

    ngOnChanges() {
        if(this.visible) {
            this.renderer.setStyle(this.scanElement, 'display', 'block');
            this.renderer.setStyle(this.scanElement, 'width', this.element.nativeElement.offsetWidth + 'px');
        } else {
            this.renderer.setStyle(this.scanElement, 'display', 'none');
        }
    }
}
