import { Component } from '@angular/core';
import { ROUTS } from '@shared/constants/routs';

interface Location {
  from: string; // ?
  to: string;
  name: string;
  address: string;
}

interface Event {
  day: number;
  month: number;
  locations: Location[];
  announcements: string[];
}

interface Fractions {
  title: string;
  color: string;
  items: Fraction[];
  announcements: Announcement[];
}

interface Fraction {
  uuid: string;
  title: string;
}

enum AnnouncementType {
  NORMAL = 'normal',
  WARNING = 'warning',
  ALERT = 'alert',
}

interface Announcement {
  text: string;
  type: AnnouncementType;
}

@Component({
  selector: 'app-forthcoming-event',
  templateUrl: './forthcoming-event.component.html',
  styleUrls: ['./forthcoming-event.component.scss'],
})
export class ForthcomingEventComponent {
  public ROUTS = ROUTS;
  public ANNOUNCEMENT_TYPE = AnnouncementType;
  public event: Event = {
    day: 28,
    month: 0,
    locations: [
      {
        from: '11:00',
        to: '12:30',
        name: 'Администрация Ленинского района',
        address: 'Ленина, 46',
      },
      {
        from: '11:00',
        to: '12:30',
        name: 'Автозавод',
        address: 'пл. Киселёва',
      },
      {
        from: '11:00',
        to: '12:30',
        name: 'Мыза',
        address: 'напротив ТЦ «Жанто-2»',
      },
      {
        from: '11:00',
        to: '12:30',
        name: 'Кстово',
        address: 'пр-кт. Капитана Рачкова, 12',
      },
    ],
    announcements: [
      'Дарьино и Мещера в этот раз не открываются ид-за недостатка волонтеров. На Автозаводе количество ребят также критически низкое и если кто-то откажется или заболеет, то точка тоже может не открыться. Просим всех, у кого есть возможность и желание присоединиться к нашим волонтерам и сделать прием сырья более комфортным и быстрым.',
      'Напомним, что прием посетителей в Экоцентре в день акции не осуществляется! Но можно прийти и помочь нам с разгрузкой машин к 13:30. Мы вам будем очень рады!',
    ],
  };

  public fractions: Fractions[] = [
    {
      title: 'постоянные фракции',
      color: '#72F2F2',
      items: [
        { uuid: '1', title: 'бумага и тонкий картон' },
        { uuid: '2', title: 'картон и гофрокартон' },
        { uuid: '3', title: 'стекло' },
        { uuid: '4', title: 'алюминиевые банки от напитков' },
        { uuid: '5', title: 'фольга' },
        { uuid: '6', title: 'металл' },
        { uuid: '7', title: 'выдувной ПЭТ прозрачный стандартных цветов' },
        { uuid: '8', title: 'выдувной ПЭТ прозрачный нестандартных цветов' },
        { uuid: '9', title: '2-ПНД твердый' },
        { uuid: '10', title: '2-ПНД крышки' },
        { uuid: '11', title: 'другие крышки' },
        { uuid: '12', title: 'батарейки' },
        { uuid: '13', title: 'некрупная бытовая техника' },
        { uuid: '13', title: 'пластиковые карты без чипа' },
      ],
      announcements: [],
    },
    {
      title: 'редкие фракции',
      color: '#F272A8',
      items: [
        { uuid: '14', title: 'диски CD и DVD' },
        { uuid: '15', title: 'коробки от CD и DVD дисков' },
        { uuid: '16', title: 'пластиковые зубные щетки' },
        { uuid: '17', title: 'ПВХ круги и матрасы' },
        { uuid: '18', title: 'твердый 4 ПВД (ПЭ, ПЕ)' },
      ],
      announcements: [],
    },
    {
      title: 'сложные фракции',
      color: '#F2A072',
      items: [
        { uuid: '19', title: 'полипропилен 5PP твёрдый бесцветный' },
        { uuid: '20', title: 'полипропилен 5PP твёрдый белый' },
        { uuid: '21', title: 'полипропилен 5PP твёрдый цветной' },
        { uuid: '22', title: 'полипропилен 5РР с впаянной этикеткой' },
        { uuid: '23', title: 'аккумуляторы телефонные' },
        { uuid: '24', title: 'фильтры для воды' },
      ],
      announcements: [],
    },
    {
      title: 'реюз',
      color: '#9BF272',
      items: [
        { uuid: '25', title: 'для РазДельно' },
        { uuid: '26', title: 'капроновые колготки' },
      ],
      announcements: [
        {
          text: 'Прием вязаных вещей завершён!',
          type: AnnouncementType.ALERT,
        },
      ],
    },
  ];
}
