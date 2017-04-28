import { NgRedux } from 'ng2-redux';
import { Injectable } from '@angular/core';

import { FiledListService } from './filedList.service';
import { IAppState } from '../store/IAppState';
import { RELOAD_LIST, UPDATE_LIST } from '../store/actions';

@Injectable()
export class FiledListActions {
    constructor(private ngRedux: NgRedux<IAppState>, private filedListService: FiledListService) {}

    getFiledList()
    {
        this.filedListService.getFiledList()
            .subscribe(list => {
                this.ngRedux.dispatch({
                    type: RELOAD_LIST,
                    payload: list
                })
            });
    }
}