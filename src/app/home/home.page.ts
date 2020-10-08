import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  btnBoolean = false;
  text = 'Ready to create?';
  btnText = 'Ready';

  onChangeText(){
    if (this.btnBoolean){
      this.text = 'Ready to create?';
      this.btnText = 'Ready';
      this.btnBoolean = false;
    }else {
      this.text = 'Unready to create?';
      this.btnText = 'Unready';
      this.btnBoolean = true;
    }
  }
  constructor() {}

}
