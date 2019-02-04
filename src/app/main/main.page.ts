import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: 'main.page.html',
  styleUrls: ['main.page.scss']
})
export class MainPage implements OnInit {
  policyUrl: string = "https://frontend-developers.tistory.com/1";

  constructor(
  ) { }

  ngOnInit(): void { }
}
