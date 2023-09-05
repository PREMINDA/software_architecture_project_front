import {Directive, EventEmitter, HostBinding, HostListener, Output} from '@angular/core';
import {FileHandel} from "../model/file-handle";
import {DomSanitizer} from "@angular/platform-browser";

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

  @Output() files : EventEmitter<FileHandel> = new EventEmitter();

  @HostBinding("style.background") private background = "#eee";

  constructor(private sanitizer : DomSanitizer) { }

  @HostListener("dragover", ["$event"])
  public onDragOver(evt: DragEvent){
    evt.preventDefault();
    evt.stopPropagation();
    this.background ="#999";
  }

  @HostListener("dragleave", ["$event"])
  public onDragLeave(evt: DragEvent){
    evt.preventDefault();
    evt.stopPropagation();
    this.background ="#eee";
  }

  @HostListener("drop", ["$event"])
  public onDrop(evt: DragEvent){
    evt.preventDefault();
    evt.stopPropagation();
    this.background ="#eee";
// @ts-ignore
    const file = evt.dataTransfer.files[0];

    const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
    let fileHandel: FileHandel
    fileHandel = {file, url};
    this.files.emit(fileHandel);
  }

}