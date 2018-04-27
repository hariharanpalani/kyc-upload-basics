import { Component } from '@angular/core';
import { Ng4FilesService } from './ng4-files/services/ng4-files.service';
import { Ng4FilesSelected, Ng4FilesStatus } from './ng4-files/declarations/ng4-files-selected';
import { KycInstaService } from './kyc.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imageData: any;
  result: {
    prediction: string
  };

  files = [];

  constructor(private ng4FilesService: Ng4FilesService,
        private service: KycInstaService) {
      this.ng4FilesService.addConfig({
        acceptExtensions: [ 'jpg' ],
        maxFilesCount: 5
      });
  }

  fileSelect(selectedFiles: Ng4FilesSelected) {
    if(selectedFiles.status != Ng4FilesStatus.STATUS_SUCCESS) {
      return;
    }

    this.files = [];
    var timer = 0;

    Observable.from(selectedFiles.files)
      .mergeMap(x => Observable.timer(timer++ * 1000).map(y => x))
      .forEach((value: File) => {
        let reader = new FileReader();
          reader.readAsDataURL(value);
          reader.onload = () => {
            this.files.push({
              imageData: reader.result
            });
          };
      });
  /*  selectedFiles.files.forEach(file => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.files.push({
            imageData: reader.result
          });
        };
    });*/
  }
}
