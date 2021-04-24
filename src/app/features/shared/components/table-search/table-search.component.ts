import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy, OnChanges } from '@angular/core';
import { fromEvent, Subject, Subscription } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-table-search',
  templateUrl: './table-search.component.html',
  styleUrls: ['./table-search.component.scss']
})
export class TableSearchComponent implements OnInit,OnChanges, AfterViewInit, OnDestroy {
  hideSearchBar = true;
  @Input() searchField = '';
  @Input() gridApi;
  @Input() clientSide = true;
  @Input() disabled: boolean = false;
  @Input() debounceTime = 0;
  @Output() valueChange: EventEmitter<string> = new EventEmitter();
  @ViewChild('searchInput', {static: true}) searchInput: ElementRef;
  unsubscribe$ = new Subject();
  subscriptions:Subscription[]=[];

  constructor() { }


  ngOnChanges(){
    if(this.searchField){
      this.gridApi.setQuickFilter(this.searchField);
    }
  }

  ngOnInit() {
  }

  searchClick() {
    this.hideSearchBar = !this.hideSearchBar;
  }

  paste(event){
    if(event.clipboardData){
      let clipboardData = event.clipboardData;
      let pastedText = clipboardData.getData('text');
      if (this.clientSide) {
        this.gridApi.setQuickFilter(pastedText)
      }
      this.valueChange.next(pastedText);
    }
  }

  onClearSearchBox($event) {
    setTimeout(() => {
      if ($event.target.value.length === 0) {
        if (this.clientSide) {
          this.gridApi.setQuickFilter('');
        }
      }
    }, 0);
  }

  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, 'keyup')
    .pipe(
      debounceTime(this.debounceTime),
      takeUntil(this.unsubscribe$)
    )
    .subscribe((event: any) => {
      if (this.clientSide) {
        this.gridApi.setQuickFilter(event.target.value);
      }
      this.valueChange.next(event.target.value);
    })
  }

  ngOnDestroy() {
    this.unsubscribe$.next(null);
  }

}
