import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidationFormPageRoutingModule } from './validation-form-routing.module';

import { ValidationFormPage } from './validation-form.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ValidationFormPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [ValidationFormPage]
})
export class ValidationFormPageModule {}
