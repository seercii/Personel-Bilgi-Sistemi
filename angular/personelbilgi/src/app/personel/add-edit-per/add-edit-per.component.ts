import { Component,  OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-per',
  templateUrl: './add-edit-per.component.html',
  styleUrls: ['./add-edit-per.component.css']
})

export class AddEditPerComponent implements OnInit {
  constructor(private service:SharedService) { }

  @Input() 
  per:any;
  PersonelId:string |undefined;
  PersonelAd:string |undefined;
  Departman:string |undefined;
  GirisTarihi:string |undefined;
  FotografAd:string |undefined;
  FotografAdPath:string |undefined;

  DepartmanList:any=[];

  ngOnInit():void{
    this.loadDepartmanList();
  }
  loadDepartmanList(){
    this.service.getAllDepartmanAdlari().subscribe((data:any)=>{
      this.DepartmanList=data;
      this.PersonelId=this.per.PersonelId;
      this.PersonelAd=this.per.PersonelAd;
      this.Departman=this.per.Departman;
      this.GirisTarihi=this.per.GirisTarihi;
      this.FotografAd=this.per.FotografAd;
      this.FotografAdPath=this.service.PhotoUrl+this.FotografAd;

    });
  }


  addPersonel(){
    var val={PersonelId:this.PersonelId,
            PersonelAd:this.PersonelAd,
            Departman:this.Departman,
            GirisTarihi:this.GirisTarihi,
            FotografAd:this.FotografAd };

            this.service.addPersonel(val).subscribe(res=>{
              alert(res.toString());
            });
  }
  updatePersonel(){
    var val={PersonelId:this.PersonelId,
            PersonelAd:this.PersonelAd,
            Departman:this.Departman,
            GirisTarihi:this.GirisTarihi,
            FotografAd:this.FotografAd};

            this.service.updatePersonel(val).subscribe(res=>{
              alert(res.toString());
            });
  }

  uploadPhoto(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);
    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.FotografAd=data.toString();
      this.FotografAdPath=this.service.PhotoUrl+this.FotografAd;
    });
  }
}