import { Component, OnInit } from '@angular/core';

interface AsideItem {
  name: string;
  status: string;
  icon: string;
}
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  asideItems: AsideItem[] = [
    { name: 'Personal information', status: 'checked ', icon: 'uil uil-check' },
    { name: 'Contact information', status: 'checked', icon: 'uil uil-check' },
    { name: 'Relationship', status: 'checked', icon: 'uil uil-check' },
    { name: 'Beneficiaries', status: 'active', icon: 'uil uil-circle' },
    { name: 'Account Characteristic', status: 'blocked', icon: 'uil uil-circle' },
    { name: 'Review', status: 'blocked', icon: 'uil uil-circle' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
