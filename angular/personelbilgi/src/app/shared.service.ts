import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:56688/api";
  readonly PhotoUrl="http://localhost:56688/Photos/";

  constructor(private http:HttpClient) { }
  //departman için fonksiyonlar
  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Departman');
  }
  addDepartman(val:any){
    return this.http.post(this.APIUrl+'/Departman',val);
  }
  updateDepartman(val:any){
    return this.http.put(this.APIUrl+'/Departman',val);
  }
  deleteDepartman(val:any){
    return this.http.delete(this.APIUrl+'/Departman/'+val); //id ye göre silme oldugundan departman/ yaptık
  }

  //personel için fonksiyonlar
  getPerList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Personel');
  }
  addPersonel(val:any){
    return this.http.post(this.APIUrl+'/Personel',val);
  }
  updatePersonel(val:any){
    return this.http.put(this.APIUrl+'/Personel',val);
  }
  deletePersonel(val:any){
    return this.http.delete(this.APIUrl+'/Personel/'+val);
  }
  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Personel/SaveFile',val);
  }
  getAllDepartmanAdlari():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Personel/GetAllDepartmanAdlari');
  }
}
