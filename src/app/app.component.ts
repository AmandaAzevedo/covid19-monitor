import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NovelCovidService } from './shared/service/novel-covid.service';
import { Countries } from './shared/model/country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: []
})
export class AppComponent {
  title = 'covid19-monitor';

  ngOnInit(): void {
    this.service.getAllCountry().subscribe(result => { });
    this.service.getGlobalInfo().subscribe(result=>{});
    this.service.getCountryByIso3(Countries.Brazil).subscribe(result=>{});
   
  }

  constructor(private service: NovelCovidService) { }

}
