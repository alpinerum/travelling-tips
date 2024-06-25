import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.page.html',
  styleUrls: ['./tickets.page.scss'],
})
export class TicketsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  public goBack() {
    this.navCtrl.navigateRoot('');
  }

  ngOnInit() {
  }

}
