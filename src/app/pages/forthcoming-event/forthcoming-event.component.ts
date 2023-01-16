import { Component } from '@angular/core';

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
  items: string[];
  announcements: Announcement[];
}

interface RecyclablesItem {
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
  public announcementType = AnnouncementType;
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
        // TODO: uuid вторсырья
        'бумага и тонкий картон',
        'картон и гофрокартон',
        'стекло',
        'алюминиевые банки от напитков',
        'фольга',
        'металл',
        'выдувной ПЭТ прозрачный стандартных цветов',
        'выдувной ПЭТ прозрачный нестандартных цветов',
        '2-ПНД твердый',
        '2-ПНД крышки',
        'другие крышки',
        'батарейки',
        'некрупная бытовая техника',
        'пластиковые карты без чипа',
      ],
      announcements: [],
    },
    {
      title: 'редкие фракции',
      color: '#F272A8',
      items: [
        'диски CD и DVD',
        'коробки от CD и DVD дисков',
        'пластиковые зубные щетки',
        'ПВХ круги и матрасы',
        'твердый 4 ПВД (ПЭ, ПЕ)',
      ],
      announcements: [],
    },
    {
      title: 'сложные фракции',
      color: '#F2A072',
      items: [
        'полипропилен 5PP твёрдый бесцветный',
        'полипропилен 5PP твёрдый белый',
        'полипропилен 5PP твёрдый цветной',
        'полипропилен 5РР с впаянной этикеткой',
        'аккумуляторы телефонные',
        'фильтры для воды',
      ],
      announcements: [],
    },
    {
      title: 'реюз',
      color: '#9BF272',
      items: ['для РазДельно', 'капроновые колготки'],
      announcements: [{
        text: 'Прием вязаных вещей завершён!',
        type: AnnouncementType.ALERT,
      }],
    },
  ];
}
