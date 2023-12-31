import { Component, OnInit } from '@angular/core';
import { ITeam } from '../Model/iteam';
import { Router } from '@angular/router';
import { IplService } from '../ipl.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addteams',
  templateUrl: './addteams.component.html',
  styleUrls: ['./addteams.component.css']
})
export class AddteamsComponent implements OnInit {

  teamdata:ITeam={TeamId:0,Name:''}

  constructor(private fb:FormBuilder, private service:IplService,private route:Router) { }
  addteamForm=this.fb.group({
    Name:['']
  })

  addTeamData()
  {
    this.teamdata=this.addteamForm.value;
    this.service.addTeams(this.teamdata).subscribe(()=>{
      alert('Record added')
      this.route.navigate(['/getTeams'])
    })
  }
  
  ngOnInit(): void {
  }

}
