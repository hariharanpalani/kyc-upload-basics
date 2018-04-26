import { Component } from '@angular/core';
import { Ng4FilesService } from './ng4-files/services/ng4-files.service';
import { Ng4FilesSelected, Ng4FilesStatus } from './ng4-files/declarations/ng4-files-selected';
import { KycInstaService } from './kyc.service';

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

    selectedFiles.files.forEach(file => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.files.push({
            imageData: reader.result
          });
        };
    });
    /*let reader = new FileReader();
    reader.readAsDataURL(selectedFiles.files[0]);
    reader.onload = () => {
      this.imageData = reader.result;     
      this.service.predict(reader.result.split(',')[1]).subscribe((result: any) => this.result = result);
    };*/
  }
}
