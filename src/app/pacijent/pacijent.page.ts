import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacijent',
  templateUrl: './pacijent.page.html',
  styleUrls: ['./pacijent.page.scss'],
})
export class PacijentPage implements OnInit {
  queryText: string;
  constructor() { }

  ngOnInit() {
  }

}
