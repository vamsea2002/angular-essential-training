import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
  selector: "mw-media-item",
  templateUrl: "./media-item.component.html",
  styleUrls: ["./media-item.component.css"],
})
export class MediaItemComponent {
  @Input() mediaItem: any;
  @Input() someItem: any;
  @Output() delete = new EventEmitter();

  onDelete() {
    console.log("Delete");
    this.delete.emit(this.mediaItem);
  }
}
