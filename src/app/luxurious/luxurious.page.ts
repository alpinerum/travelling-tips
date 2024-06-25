import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-luxurious',
  templateUrl: './luxurious.page.html',
  styleUrls: ['./luxurious.page.scss'],
})
export class LuxuriousPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  public goBack() {
    this.navCtrl.navigateRoot('');
  }

  ngOnInit() {
  }

}
