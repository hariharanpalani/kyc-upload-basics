import { Component, Input, OnChanges } from "@angular/core";
import { KycInstaService } from "../kyc.service";
import 'rxjs/add/operator/do';

@Component({
    selector: 'doc-card',
    template: `
        <div class="card" style="width: 18rem;" scanner [visible]="visible">
            <img class="card-img-top" [src]="file.imageData">
            <div class="card-body">
                <div *ngIf="result">{{ result.prediction }}</div>
            </div>
        </div>    
    `
})
export class DocumentCardComponent implements OnChanges {
    @Input() file: any;
    visible = false;
    result: any;

    constructor(private service: KycInstaService) {

    }

    ngOnChanges() {
        if(this.file) {
            this.visible = true;
            this.service.predict(this.file.imageData.split(',')[1])
                .do(() => this.visible = true)
                .subscribe(result => {
                    this.result = result;
                }, (err) => {
                }, () => {
                    this.visible = false;
                });
        }
    }
}