import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Anime } from "./animes/anime.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  animes: Anime[];
  animeForm: FormGroup;
  rates: String[];
  success: Boolean;

  constructor(formGroup: FormBuilder) {
    this.animeForm = formGroup.group({
      title: ["", Validators.required],
      rate: ["", Validators.required]
    });
    this.rates = Anime.RATES;
    this.animes = [];
    this.success = false;
  }

  onSubmit(form: any) {
    if (!form.valid) {
      this.success = false;
      return false;
    }
    let title = form.value.title;
    let rate = form.value.rate;
    this.animes.push(new Anime(title, rate));
    console.log(`Anime ${title} has been saved`);
    form.controls["title"].setValue("");
    form.controls["rate"].setValue("");
    this.success = true;
  }
}
