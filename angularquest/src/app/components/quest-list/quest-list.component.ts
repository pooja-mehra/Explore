import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../../data/topic';
import { QuestService } from 'src/app/services/quest.service';
import {AppComponent} from 'src/app/app.component';



@Component({
  selector: 'app-quest-list',
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.css']
})
export class QuestListComponent implements OnInit {
	@Input()  	
	topics !: Topic[];
	currentIndex = -1;
  	currentTopic?: Topic;
	
  
  constructor(private questService: QuestService,public app: AppComponent) { }

  ngOnInit(): void {
    this.retrieveTopics();
  }
  retrieveTopics(): void {
    this.questService.getAll()
      .subscribe(
        data => {
          this.topics = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveTopics();
    this.currentTopic = undefined;
    this.currentIndex = -1;
  }
	selectedTopic?: Topic;
	onSelect(topic: Topic): void {
  	this.selectedTopic = topic;
}

}
