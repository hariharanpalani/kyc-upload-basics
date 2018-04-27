import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from '../environments/environment';

@Injectable()
export class KycInstaService {

    constructor(private http: HttpClient) { }

    predict(data: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json'
            })
        };
        return this.http.post(`${environment.appUrl}/Insights/predictOnBase64`, {
            "base64_encoded_image_string": data
        }, httpOptions);
    }
}