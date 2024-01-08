import { Component, OnInit } from '@angular/core';
import { BulletinServiceService } from '../bulletin-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bulletin-display',
  templateUrl: './bulletin-display.component.html',
  styleUrls: ['./bulletin-display.component.css']
})
export class BulletinDisplayComponent {
  bulletin:{_id:string,id:string,name:string,_v:string}[] = [];

  constructor(public bulletinService: BulletinServiceService) {}

  private bulletinsubscription!: Subscription

  ngOnInit() {
    this.bulletinService.getbulletin_service();
    this.bulletinsubscription = this.bulletinService.getUpdateListener()
    .subscribe((bulletin:{_id:string,id:string,name:string,_v:string}[])=>
    {
      this.bulletin = bulletin;
    });
  }


  ngOnDestroy()
  {
    this.bulletinsubscription.unsubscribe();
  }

  ondelete(bulletinid: string){
    this.bulletinService.deletebulletin_service(bulletinid)
  }
}