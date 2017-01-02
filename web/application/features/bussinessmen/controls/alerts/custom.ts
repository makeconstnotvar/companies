import {Component} from "@angular/core";
@Component({
    selector: 'alert-custom',
    template: `<div class="alert alert-danger alert--inline">{{error}}
                    <a class="underline" href="{{urlFeedback}}">Служба поддержки</a>.
                    <a class="pointer" (click)="hide()">
                        <i class="fa fa-times"></i>
                    </a>
                </div>`
})
export class AlertCustom {
    hide() {

    }
}