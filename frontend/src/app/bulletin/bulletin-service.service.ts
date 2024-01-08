import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject, subscribeOn } from 'rxjs'
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class BulletinServiceService {

  private bulletindisplay:{_id:string,id:string,name:string,_v:string}[] = [];
  private updatedbulletindisplay = new Subject<{_id:string,id:string,name:string,_v:string}[]>();

  constructor(private http: HttpClient) { }

  addbulletin_service(pid:string, ptext:string)
  {
    this.http.post<{message:string,bulletin:any}>('http://localhost:3000/api/posts/create',{id:pid,text:ptext})
    .subscribe((thebulletin)=>
    {
      this.bulletindisplay.push(thebulletin.bulletin);
      this.updatedbulletindisplay.next([...this.bulletindisplay]);
    })
  }

  getbulletin_service(){
    this.http.get<{message:string,bulletin:any}>('http://localhost:3000/api/posts')
    .subscribe((thebulletin)=>
    {
    this.bulletindisplay = thebulletin.bulletin
    this.updatedbulletindisplay.next([...this.bulletindisplay]);
    })
  }

  deletebulletin_service(bulletinid: string){
    this.http.delete<{message:string,bulletin:any}>('http://localhost:3000/api/posts/id' + bulletinid)
    .subscribe((thebulletin)=>
    {
    const updatedbulletindisplay = this.bulletindisplay.filter(bulletin=>bulletin._id!==bulletinid);
    this.bulletindisplay = updatedbulletindisplay;
    this.updatedbulletindisplay.next([...this.bulletindisplay]);
    })
  }

  getUpdateListener()
  {
    return this.updatedbulletindisplay.asObservable();
  }
}
