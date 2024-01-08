import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BulletinServiceService } from '../bulletin-service.service';

@Component({
  selector: 'app-bulletin-create',
  templateUrl: './bulletin-create.component.html',
  styleUrls: ['./bulletin-create.component.css']
})
export class BulletinCreateComponent implements OnInit{
  
  constructor(public bulletinService: BulletinServiceService) {}

  ngOnInit(): void {
  }

  onaddbulletin(bulletinform: NgForm){
    if (bulletinform.invalid)
    {
      alert('invalid!')
      return
    }
    alert(bulletinform.value.enteredID+':'+bulletinform.value.enteredText)
  }
}
