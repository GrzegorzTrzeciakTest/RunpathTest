import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'runpath',
  template: `

  <div class='container'>
    <div class='row'>
          <div class="col-sm">
              <label class="control">Filter
                  <input type="text" class="input" placeholder="filter" [(ngModel)]="filter">
              </label>
          </div>
          <div class="col-sm">
              <label class="control">Items per page
                  <input type="number" class="input" min="0" [(ngModel)]="config.itemsPerPage">
              </label>
          </div>
          <div class="col-sm">
              <label class="control">Current page
                  <input type="number" class="input" min="0" [(ngModel)]="config.currentPage">
              </label>
          </div>
    </div>
  </div>

  <div class="container">
      <div  class='media' *ngFor="let item of data | stringFilter: filter | paginate: config">
          <img src={{item.thumbnailUrl}}  class="mr-3 image-placeholder" />
          <div class="media-body">
            <div><b>Title: </b><span>{{ item.title }}</span> </div>
          </div>
      </div>
  </div>

    <div class="text-center">
        <pagination-controls [id]="config.id"
                             [maxSize]="maxSize"
                             [responsive]="responsive"
                             [previousLabel]="labels.previousLabel"
                             [nextLabel]="labels.nextLabel"
                             (pageChange)="onPageChange($event)"></pagination-controls>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./runpath.component.css']
})


export class RunpathComponent {

  public stringFilter : string = '';
  public filter: string = '';
  public maxSize: number = 7;
  public responsive: boolean = false;

  public config = {
      id: 'advanced',
      itemsPerPage: 10,
      currentPage: 1
  };

  public labels: any = {
      previousLabel: 'Previous',
      nextLabel: 'Next'
  };

  data : any;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {}

  onPageChange(number: number) {
    this.config.currentPage = number;
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((resolvers: {data : any}) => {
      this.data = resolvers.data;

      console.log(resolvers);
    });
  }
}
