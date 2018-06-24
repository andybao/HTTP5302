import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { PlanetService } from "../planet.service";
import {Planet} from "../planet";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  num: number;
  planet: Planet;

  getNum(): void {
    this.num = +this.route.snapshot.paramMap.get('id');
    console.log(this.num);
  }

  constructor(
      private route: ActivatedRoute,
      private location: Location,
      private planetService: PlanetService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.planetService.getPlanet(id).subscribe(data => this.planet = data );

  }

}
