import { Component, Input, SimpleChanges } from '@angular/core';
import { PASSWORD_STRENGTH } from 'src/app/consts';
@Component({
  selector: '[data-complexityLevel]',
  templateUrl: './complexityLevel.component.html',
  styleUrls: ['./complexityLevel.scss'],
})
export class ComplexityLevel {
  @Input() level = PASSWORD_STRENGTH.EMPTY;
  sectionsClass = {
    first: 'bg-grey',
    second: 'bg-grey',
    third: 'bg-grey',
  };
  ngOnChanges(changes: SimpleChanges) {
    const currentLevel: string = changes['level'].currentValue;
    switch (currentLevel) {
      case PASSWORD_STRENGTH.EMPTY:
        console.log('all sections are gray');
        this.sectionsClass.first = 'bg-grey';
        this.sectionsClass.second = 'bg-grey';
        this.sectionsClass.third = 'bg-grey';
        break;
      case PASSWORD_STRENGTH.WEAK:
        console.log('all sections are red;');
        this.sectionsClass.first = 'bg-red';
        this.sectionsClass.second = 'bg-red';
        this.sectionsClass.third = 'bg-red';
        break;
      case PASSWORD_STRENGTH.EASY:
        console.log('the first section is red the rest are gray');
        this.sectionsClass.first = 'bg-red';
        this.sectionsClass.second = 'bg-grey';
        this.sectionsClass.third = 'bg-grey';
        break;
      case PASSWORD_STRENGTH.MEDIUM:
        console.log('the first two sections are yellow the last one is gray');
        this.sectionsClass.first = 'bg-yellow';
        this.sectionsClass.second = 'bg-yellow';
        this.sectionsClass.third = 'bg-grey';
        break;
      case PASSWORD_STRENGTH.STRONG:
        console.log('all sections are green;');
        this.sectionsClass.first = 'bg-green';
        this.sectionsClass.second = 'bg-green';
        this.sectionsClass.third = 'bg-green';
        break;
      default:
        console.log("Doesn't match pattern");
        this.sectionsClass.first = 'bg-grey';
        this.sectionsClass.second = 'bg-grey';
        this.sectionsClass.third = 'bg-grey';
    }
  }
}
