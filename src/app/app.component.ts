import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NovelCovidService } from './shared/service/novel-covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: []
})
export class AppComponent {
  title = 'covid19-monitor';

  ngOnInit(): void {
    this.sevice.getAllCountry().subscribe(result => { });
  }

  constructor(private sevice: NovelCovidService) { }

}
