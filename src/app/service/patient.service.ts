import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private patientApiUrl = environment.patientApiUrl;

  constructor(private http: HttpClient) {
  }
}
