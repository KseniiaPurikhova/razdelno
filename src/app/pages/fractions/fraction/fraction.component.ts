import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { ROUTS } from '@shared/constants/routs';

@Component({
  selector: 'app-fraction',
  templateUrl: './fraction.component.html',
  styleUrls: ['./fraction.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FractionComponent {
  @HostBinding('class.app-fraction') public readonly hostClass = true;
  public ROUTS = ROUTS;
  public acceptable = [];
  public notAcceptable = [];
  public preparation = [];

  public description = [
    {
      text: 'К этой фракции относятся бумажные изделия без примесей (пластик, фольга, наклейки и т.д), глянцевая бумага, изрисованная бумага, газеты, книги, крафт-бумага, бумажная упаковка и картонная упаковка, картонные бирки, открытки.',
      type: '',
    },
    {
      text: 'Не принимаем грязную и масленную бумагу, обои, салфетки, промокашки, бумагу с восковой пропиткой.',
      type: '',
    },
    {
      text: 'Важно, если бумага или картон сильно блестят и лоснятся, надорвите край и проверьте, есть ли пленка на разрыве. Если есть, это в тетрапак.',
      type: '',
    },
    {
      text:
        'Как подготовить к сдаче:\n' +
        'Убрать скотч, пружинки, скобки, скрепки, «окошечки» из пластика (например упаковка от вермишели);\n' +
        'Лучше всего упаковать в бумажный пакет или коробку, либо перевязать бечевкой.',
      type: '',
    },
  ];
}
