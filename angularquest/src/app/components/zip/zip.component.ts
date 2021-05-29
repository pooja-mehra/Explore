import { Component, OnInit} from '@angular/core';
import { Zip } from 'src/app/data/zip';
import {ZipService} from 'src/app/services/zip.service';
import {AppComponent} from 'src/app/app.component';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.css']
})
export class ZipComponent implements OnInit {
zipCode: any;
constructor( public zipService:ZipService, public app: AppComponent) {
	}

ngOnInit(): void {
  }

selectedZip!:Zip
onSelect(zipCode:string): void {
	this.zipService.getAll(zipCode).subscribe(data => {
          	console.log(data);
			this.selectedZip = data;
        },
        error => {
          console.log(error);
        }
		);
	
}
}

