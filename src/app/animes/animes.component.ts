import { Component, OnInit, Input } from "@angular/core";
import { Anime } from "./anime.model";

@Component({
  selector: "app-animes",
  templateUrl: "./animes.component.html",
  styleUrls: ["./animes.component.css"]
})
export class AnimesComponent implements OnInit {
  @Input() animes: Anime[];

  constructor() {}

  ngOnInit() {}
}
