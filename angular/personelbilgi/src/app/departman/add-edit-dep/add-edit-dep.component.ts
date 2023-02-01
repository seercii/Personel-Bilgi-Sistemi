import { Component,  OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {
  constructor(private service:SharedService) {}

  @Input() dep:any;
  DepartmanId!:string;
  DepartmanAd!:string;

  ngOnInit():void{
    this.DepartmanId=this.dep.DepartmanId;
    this.DepartmanAd=this.dep.DepartmanAd;
  }
  addDepartman(){
    var val={DepartmanId:this.DepartmanId,
            DepartmanAd:this.DepartmanAd};
            this.service.addDepartman(val).subscribe(res=>{
              alert(res.toString());
            });
  }
  updateDepartman(){
    var val={DepartmanId:this.DepartmanId,
            DepartmanAd:this.DepartmanAd};
            this.service.updateDepartman(val).subscribe(res=>{
              alert(res.toString());
            });
  }

}
