import { Component } from "@angular/core";

@Component({
  selector: "mw-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  firstMediaItem = { id: 1, name: "Vamsi", medium:"Series", year:"1-13-2016" };
  someFirstItem = {Age:100, Name:"Vamsi"}
  secondItem = {Age:6, Name:"Vyshnav"}
  onMediaItemDelete(mediaItem:any){}
}
