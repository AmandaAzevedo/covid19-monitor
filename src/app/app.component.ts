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
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  }
  public barChartLabels = [ '2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40, 10], label:'Series A'},
    {data: [25, 40, 65, 90, 65, 60, 20, 15], label:'Series B'},
  ]

  ngOnInit(): void {
    this.service.getAllCountry().subscribe(result => { });
    this.service.getGlobalInfo().subscribe(result=>{});
    this.service.getCountryByIso3(Countries.Brazil).subscribe(result=>{});
    this.service.getAllInfosToMap().subscribe(result=>{});
    this.service.getAllHistoricalDate().subscribe(result=>{});
  }

  constructor(private service: NovelCovidService) { }

}
