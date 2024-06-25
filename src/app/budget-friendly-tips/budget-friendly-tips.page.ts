import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-budget-friendly-tips',
  templateUrl: './budget-friendly-tips.page.html',
  styleUrls: ['./budget-friendly-tips.page.scss'],
})
export class BudgetFriendlyTipsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  public goBack() {
    this.navCtrl.navigateRoot('');
  }

  ngOnInit() {
  }

}
