import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { timer } from 'rxjs';
import { timeInterval, TimeInterval } from 'rxjs/internal/operators/timeInterval';
import { base_url } from 'src/app/constants';
import { Project } from 'src/app/models/models';

@Component({
  selector: 'app-project-visual',
  templateUrl: './project-visual.component.html',
  styleUrls: ['./project-visual.component.scss']
})
export class ProjectVisualComponent {

  @Input() project:Project
  @Output() close = new EventEmitter<void>()

  feedback = ""

  closeDetails(){
    this.close.emit()
  }
  constructor(private http:HttpClient){}
  isPosted= false;
  postFeedback(){
    this.http.post(base_url+"Project/add-feedback",{feedback:this.feedback,rating:3,project_id:this.project.project_id}).subscribe()
  }
  

}
