import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  selectedDate: string = '';
  currentDate: string = '';
  age: number | null = null;

  onSelectedDate(newDate: string){
    this.selectedDate = newDate;
    
  }

  onCurrentDate(newDate: string){
    this.currentDate = newDate;
    
  }

  calculateAge(){
    if(this.selectedDate && this.currentDate){
      const birthDate = new Date(this.selectedDate);
      const currDate = new Date(this.currentDate);

      this.age = currDate.getFullYear() - birthDate.getFullYear();
      //console.log(`Age: ${age} years`);
    }
  }
}
