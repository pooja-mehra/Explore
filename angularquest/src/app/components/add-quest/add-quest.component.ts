import { Component, OnInit } from '@angular/core';
import { QuestService } from 'src/app/services/quest.service';
import { Quest } from 'src/app/data/quest';

@Component({
  selector: 'app-add-quest',
  templateUrl: './add-quest.component.html',
  styleUrls: ['./add-quest.component.css']
})
export class AddQuestComponent implements OnInit {
  quest: Quest = {
    id: '',
    topic: '',
    problem: ''
  };
  submitted = false;
  constructor(private questservice:QuestService) {}

  ngOnInit(): void {
  }
  saveQuest(): void {
     const data ={
      topic: this.quest.topic,
      problem: this.quest.problem
    };

    this.questservice.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newQuest(): void {
    this.submitted = false;
    this.quest = {
      id: '',
      topic: '',
      problem: '',
    };
  }


}
