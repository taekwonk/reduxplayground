import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

import { FiledListActions } from './filedList.actions';
import { Item } from '../model/item';

@Component({
    selector: 'filed-list',
    templateUrl: './filedList.component.html'
})
export class FiledListComponent implements OnInit {
    @select('filedList')items$:Observable<Item>

    constructor(private filedListActions: FiledListActions) {}

    ngOnInit() {
        this.filedListActions.getFiledList();
    }

}
