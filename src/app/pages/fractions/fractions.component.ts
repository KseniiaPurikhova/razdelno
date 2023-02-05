import { Component } from '@angular/core';
import { ROUTS } from '@shared/constants/routs';
import { FormControl } from '@angular/forms';
import { debounceTime, takeUntil } from 'rxjs';
import { BaseComponent } from '@shared/components/base-component';

export enum FractionType {
  COMMON = 'постоянные',
  RARE = 'редкие',
  DIFFICULT = 'сложные',
  REUSE = 'реюз',
}

export interface Fraction {
  uuid: string;
  title: string;
  type: FractionType;
  labels?: string[];
  imgCover: string;
}

export interface FractionDetailed extends Fraction {
  imgSamples: string[];
  descriptions: string[];
}

@Component({
  selector: 'app-fractions',
  templateUrl: './fractions.component.html',
  styleUrls: ['./fractions.component.scss'],
})
export class FractionsComponent extends BaseComponent {
  ROUTS = ROUTS;
  searchControl = new FormControl('');
  allFractions: Fraction[] = [
    {
      uuid: '1',
      title: 'мягкий картон и бумага',
      type: FractionType.COMMON,
      labels: ['PAP21', 'PAP22'],
      imgCover: 'PAP22_бумага.jpg',
    },
    {
      uuid: '2',
      title: 'гофрокартон',
      type: FractionType.COMMON,
      labels: ['PAP20'],
      imgCover: 'PAP20_гофрокартон.jpg',
    },
    {
      uuid: '3',
      title: 'пульперкартон',
      type: FractionType.COMMON,
      imgCover: 'пульперкартон.jpg',
    },
    {
      uuid: '4',
      title: 'стекло',
      type: FractionType.COMMON,
      // labels: ['PAP20', 'PAP20', "PAP20", "PAP20", "PAP20"],
      // labels: ['GL70', 'GL71', "GL72", "GL73", "GL74"],
      // 70– бесцветное, 71 – зеленое, 72 – коричневое, 73 – темно-коричневое, 74 – светло-коричневое.
      imgCover: 'стекло.jpg',
    },
  ];
  fractions: Fraction[] = [...this.allFractions];

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(debounceTime(300), takeUntil(this.onDestroy$))
      .subscribe((search) => {
        if (search?.trim()?.length) {
          this.fractions = this.allFractions.filter((fraction) =>
            fraction.title.includes(search)
          );
        } else {
          this.fractions = [...this.allFractions];
        }
      });
  }

  clearSearch() {
    this.searchControl.setValue('');
  }
}
