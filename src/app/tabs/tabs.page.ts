import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private navCtrl: NavController) {}

  public navigationBudget() {
    this.navCtrl.navigateForward('/budget-friendly-tips');
  }

  public navigationLuxurious() {
    this.navCtrl.navigateForward('/luxurious');
  }

  public navigationTickets() {
    this.navCtrl.navigateForward('/tickets');
  }

}
