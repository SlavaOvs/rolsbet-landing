# RolsBet Bonus Wheel Landing

Адаптивный регистрационный лендинг без сборщика и тяжелых библиотек.

## Запуск

Откройте `index.html` напрямую или запустите локальный статический сервер в этой папке.

## URL-параметры

- `geo=uz`, `geo=eg`, `geo=kz` и другие ключевые GEO
- `currency=UZS`, `currency=EGP`, `currency=EUR`
- `lang=ru`, `lang=en`, `lang=ar` и другие поддерживаемые языки
- `mode=casino` или `mode=sport`

Примеры:

- `?geo=uz&lang=uz&mode=casino`
- `?currency=EGP&lang=ar&mode=sport`
- `?lang=en&mode=sport`

При конфликте параметров `currency` имеет приоритет над `geo`. Неизвестные GEO используют EUR.

## Регистрация

После выигрыша открывается прототип формы. При отправке выполняется переход:

- `/registration?bonus=casino_welcome&currency=EUR`
- `/registration?bonus=sport_welcome&currency=EUR`

## Состояния

Casino/Sport, desktop/mobile, popup результата и Arabic RTL доступны в одной интерактивной реализации через переключатели и URL-параметры.
