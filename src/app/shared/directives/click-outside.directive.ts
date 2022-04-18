import {fromEvent, of, Subject, timer} from "rxjs";
import {delayWhen, filter, map, takeUntil} from "rxjs/operators";
import {Directive, ElementRef, EventEmitter, Input, NgModule, OnDestroy, OnInit, Output} from "@angular/core";

@Directive({
  selector: "[appClickOutside]"
})
export class ClickOutsideDirective implements OnInit, OnDestroy {
  @Input() public delay = 0;
  @Input() public enabled = true;
  @Input() public swCapture = true;
  @Input() public eventName = "click";
  @Input() public exclude = "ignore-click-outside";
  @Output() public appClickOutside = new EventEmitter<void>();
  public destroy$ = new Subject<void>();

  constructor(private el: ElementRef) {
  }

  public ngOnInit(): void {

    fromEvent(document, this.eventName, {capture: this.swCapture})
      .pipe(
        filter(() => this.enabled),
        map((res: PointerEvent) => res.target),
        filter((target: HTMLElement) => this.isElEnabled(target)),
        delayWhen(() => this.delay ? timer(this.delay) : of(null)),
        filter((target: HTMLElement) => !this.el.nativeElement.contains(target)),
        takeUntil(this.destroy$)
      )
      .subscribe(() => this.appClickOutside.emit());
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  private isElEnabled(target: HTMLElement): boolean {
    return !this.exclude
      .split(" ")
      .some((item: string) => target instanceof HTMLElement && target.className.includes(item));
  }
}

@NgModule({
  declarations: [ClickOutsideDirective],
  exports: [ClickOutsideDirective]
})
export class ClickOutsideModule {
}

