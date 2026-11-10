# Paddington Park Dubai — SEO-стратегия и контент-план (11–24 ноября 2026)

Внутренний документ для анализа и утверждения. Версия 2 от 10.11.2026: добавлены данные Google Trends, по ним пересмотрен план.
Сайт: https://paddingtonparkdubai.com/ · Регион: Дубай (Arjan / Al Barsha South и соседние районы) · Языки: EN, AR.

---

## 0. Источники данных и ограничения

| Источник | Что дал | Ограничение |
|---|---|---|
| **Google Trends** (регион Dubai `AE-DU`, при нехватке данных — UAE `AE`; 12 месяцев: 09.11.2025–10.11.2026; дневные данные 15.09–10.11.2026; 5 лет для сезонности) | Относительный интерес к запросам, сравнение между ними, сезонность, динамика за 3–9 ноября, популярные и растущие связанные запросы | **Показывает индекс, а не число запросов в месяц.** Значения ниже ~3 нестабильны: Trends работает на выборке. Сравнение — широкое соответствие, без кавычек. В «nursery» попадают садовые питомники (plant nursery, Warsan nursery) |
| Публичные страницы сайта | Продукт, структура, технические проблемы | — |
| Веб-поиск (геолокация США) и СМИ ОАЭ | Состав выдачи, конкуренты, новостной фон | Не локализованная выдача Google.ae |
| Keyword Planner, Semrush, Ahrefs | **Не использовались**, доступа нет | **Абсолютных значений частотности в документе нет** |

**Как читать индекс.** Все запросы сведены на одну шкалу: среднее значение «nursery dubai» за 12 месяцев = **100**. Индекс 27 означает, что запрос ищут примерно в 3,7 раза реже, чем «nursery dubai». Сводка и исходные группы сравнения — в `seo-research/data/google-trends_dubai_12m_index.csv`.

Абсолютную частотность по-прежнему стоит проверить в Keyword Planner по Приложению А. Индексы Trends позволяют выбрать ВЧ и расставить приоритеты, но не дают цифр для отчёта заказчику.

---

## 1. Выводы по сайту

### 1.1. Продукт и позиционирование (по сайту)

- **Формат:** British Early Childhood Centre, EYFS, от 45 дней до FS2 (5 лет); группы 0–1, 1–2, 2–3, 3–4, 4–5. Для 3–5 лет — подготовка к школе «Education Starts Here».
- **Кампус — главное отличие:** здание 29 000 sq ft овальной архитектуры, построенное под детский центр; 30 000 sq ft открытого пространства («a park larger than the building»); театр, полноразмерный крытый спортзал, музыка, арт, спорт.
- **Команда:** principal Rania Galbraith, учителя по возрастам, учитель арабского и исламского воспитания (Ms Samar), медсестра с сертификатом DHA, охрана.
- **Режим:** ежедневно с 8:00 до 19:00.
- **Дополнительно:** сезонные лагеря (Winter Camp 14.12.2026–04.01.2027), родительские мероприятия, сестринский центр Paddington ELC в JLT.
- **Позиционирование:** британский EYFS-сад-кампус с парком, театром и спортзалом в Arjan. Хорошо раскрыто пространство. Слабо раскрыты доверие (лицензия, отзывы) и цена.

### 1.2. Контент и техническое SEO

| Наблюдение | Значение |
|---|---|
| Одна посадочная страница на Tilda и `/arabic`. **Блога нет** | Конфликтов с прошлыми статьями нет. Раздел блога нужно создать до 11.11: без него план не запустить |
| **Нет упоминания лицензии KHDA** | После рейда 6.11 это главный пробел доверия |
| Цены скрыты («Request the pricelist») | Проигрыш каталогам по запросам о цене |
| Нет JSON-LD (`ChildCare` / `Preschool` / `LocalBusiness`) | Потеря для локальной выдачи |
| Нет `lang` у `<html>` и `hreflang` в `<head>`; `/arabic` переведена частично (форма на английском, H2: 1 против 8) | EN и AR хуже связаны |
| 23 изображения без `alt` | Мелкая доработка |
| `sitemap.xml` отвечает 403 на обычный запрос; в нём есть страницы, которые отвечают 403 | Гипотеза: защита от ботов или неопубликованные страницы. Проверить в Search Console |
| Брендовый запрос в использованном поисковике не нашёл сайт, в выдаче — каталоги и Paddington JLT | Гипотеза о слабой видимости. Проверить в Search Console |

---

## 2. Аудитория, боли и критерии выбора

### 2.1. Сегменты

| # | Сегмент | Ситуация | Главная потребность |
|---|---|---|---|
| 1 | **Экспаты: недавно переехавшие или переезжающие** | Не знают местную систему (KHDA, FS1/FS2, сроки), нет помощи родных | Быстро найти надёжный сад рядом с жильём, мягкая адаптация |
| 2 | **Работающие мамы младенцев** | Декрет в частном секторе ОАЭ — 60 дней: 45 оплачиваются полностью, 15 — наполовину ([Gulf News](https://gulfnews.com/living-in-uae/ask-us/new-uae-labour-law-maternity-leave-extended-to-60-days-1.1637570400069)) | Безопасный уход, длинный день, медсестра |
| 3 | **Жители Arjan, Al Barsha South, Dubai Hills, Motor City, Sports City** | Семьи из Arjan часто ищут сады в соседних районах ([Property Finder](https://www.propertyfinder.ae/blog/wp-json/wp/v2/posts/198490)) | Близко, британская программа, понятная цена |
| 4 | **Арабские и мусульманские семьи** | Ценят арабский язык и исламские ценности | EYFS плюс арабский и исламское воспитание |
| 5 | **Родители 2–4-летних** | Новые правила возраста FS1/FS2 в 2026 году ([Khaleej Times](https://www.khaleejtimes.com/uae/explained-uae-updates-fs1-fs2-school-admission-rules-under-new-age-cut-off)), очереди в школы | Где проходить FS1/FS2, подготовка к школе |

### 2.2. Боли

1. **Безопасность и легальность.** 6.11.2026 Dubai Police закрыла 33 нелицензированных сада в жилых зданиях и арестовала 34 человека ([The National](https://www.thenationalnews.com/news/uae/2026/11/06/dubai-police-shut-down-33-illegal-nurseries-operating-in-residential-buildings/), [Gulf News](https://gulfnews.com/uae/dubai/dubai-police-arrest-34-over-33-illegal-nurseries-putting-children-at-risk-1.500738277), [Khaleej Times](https://www.khaleejtimes.com/uae/dubai-police-shut-33-unlicensed-nurseries-34-operators-arrested)). Запрос «dubai nursery safety inspection arrests» в Trends — **Breakout** (подробнее в п. 3.2).
2. **Непрозрачная цена.** Оценки годовой стоимости в открытых источниках сильно расходятся: от ~AED 15–45 тыс. до 70–120 тыс. за премиальные сады. Официальной средней KHDA нет ([Vesta Solutions](https://vesta-solutions.ae/dubai-nursery-and-childcare-costs-2026-khda-licensed-options-and-monthly-fees/)), это коммерческие оценки. В Trends растёт запрос «chubby cheeks nursery fees» (+50% за месяц): цену ищут в связке с конкретным садом.
3. **Система FS1/FS2 и EYFS непонятна.** «fs1» и «eyfs» имеют индекс ~19, это сопоставимо с «nursery near me» (см. п. 3.1).
4. **Адаптация после переезда.** Эксперты отмечают «транзитный» характер жизни экспатов в Дубае ([Thrive](https://www.thrive.ae/blog/separation-anxiety-dubai)).
5. **Младенцы и короткий декрет.** «baby nursery near me» в Trends растёт (+130% за 12 месяцев).
6. **Часы работы** для работающих родителей ([Gulf News](https://gulfnews.com/parenting/learning-play/your-ultimate-guide-to-choosing-a-nursery-in-the-uae-1.1586365187729)).
7. **Каникулы.** Зимние каникулы 14.12.2026–03.01.2027 ([Gulf News](https://gulfnews.com/living-in-uae/education/uae-school-winter-break-2026-2027-calendar-1.500733406)).

### 2.3. Вопросы родителей при выборе сада (по Gulf News, The National, Property Finder)

Есть ли лицензия KHDA и DHA · соотношение воспитателей и детей, квалификация, текучка · охрана и CCTV · питание · часы и гибкие тарифы · что входит в цену (регистрация, депозит, форма, питание) · можно ли начать в середине года · как устроена адаптация · подготовка к FS1/FS2 и школе · арабский и исламское воспитание.
Источники: [Gulf News](https://gulfnews.com/parenting/learning-play/your-ultimate-guide-to-choosing-a-nursery-in-the-uae-1.1586365187729), [The National](https://www.thenationalnews.com/business/more-than-just-fees-to-consider-when-enrolling-in-uae-nurseries-1.208065), [Property Finder](https://www.propertyfinder.ae/blog/how-to-choose-nursery/).

### 2.4. Рынок

- 2024–25: 29 634 ребёнка в 312 частных ECC Дубая, рост на 8% за год ([Dubai Media Office](https://mediaoffice.ae/en/news/2025/october/02-10/dubai-early-childhood-sector-sees-continued-growth-with-8-percent-rise-in-enrolment)).
- 2026–27: открываются ещё 17 ECC, это более 1 700 мест ([KHDA](https://web.khda.gov.ae/en/About-Us/News/2026/Dubai%E2%80%99s-private-education-sector-expands-with-new)).
- **Интерпретация:** конкуренция за родителя растёт. Решает доверие и ясность предложения.

---

## 3. Поисковый спрос (Google Trends)

### 3.1. Ключевые запросы: индекс относительно «nursery dubai» = 100 (Дубай, 12 месяцев)

**ВЧ / СЧ / НЧ** — классификация по индексу: ВЧ ≥ 15, СЧ 3–15, НЧ < 3. Это относительная шкала, абсолютных значений нет. «Пик» — максимальная неделя за 12 месяцев на той же шкале.

#### Английские

| Запрос | Перевод | Индекс (среднее) | Пик | Класс | Интент | Конкуренция (по выдаче) | Где использовать |
|---|---|---|---|---|---|---|---|
| nursery | сад (широкий; включает питомники растений) | 435 | 649 | — | смешанный | — | не таргетировать |
| khda | KHDA | 345 | 1104 | — | в основном школы и новости | В | частично в №1 |
| **nursery dubai** | сад Дубай | **100** | 153 | ВЧ | коммерч. | В (каталоги) | главная |
| kindergarten | детский сад (KG) | 71 | 136 | ВЧ | смешанный, часто учебные материалы | В | не таргетировать |
| preschool | дошкольное учреждение | 40 | 78 | ВЧ | смешанный | В | доп. слово |
| **khda rating** | рейтинг KHDA | **40** | 84 | ВЧ | инфо (в основном про школы) | В | **№1** |
| daycare | ясли / дневной уход | 36 | 84 | ВЧ | смешанный; в Дубае много запросов про собак («dog daycare») | — | не таргетировать |
| **british nursery** | британский сад | **27** | 63 | ВЧ | коммерч.; связанные — бренды (Emirates British Nursery, Toddler Town) | В | главная + **№3** |
| nursery in dubai | сад в Дубае | 26 | 58 | ВЧ | коммерч. | В | главная + №3 |
| **nursery near me** | сад рядом | **19** | 51 | ВЧ | локальный; связанные — «nursery school / kids / baby nursery near me» | В (карты) | Google Business Profile, главная |
| **fs1** | FS1 (первый год британской Foundation Stage) | **19** | 60 | ВЧ | инфо | В (СМИ) | **№4** |
| **eyfs** | EYFS | **19** | 55 | ВЧ | инфо | С | **№4** |
| **winter camp** | зимний лагерь | 12 (в среднем за год) | **143** | **сезонный ВЧ** | коммерч. | В (Edarabia, Kidzapp) | **№2** |
| **nursery fees** | стоимость сада | **8,5** | 41 | СЧ | коммерч.-инфо | В | **№5** |
| winter camp dubai | зимний лагерь Дубай | 3,2 | 52 | СЧ (сезонный) | коммерч. | В | №2 |
| baby nursery | ясли для младенцев | 1,5 | 39 | НЧ, растёт («baby nursery near me» +130%) | коммерч. | С | **№6** |
| best nursery in dubai | лучший сад в Дубае | 1,2 | 28 | НЧ (форма «best nursery dubai» входит в топ связанных с «nursery dubai») | коммерч. | В | №3 |
| kindergarten dubai | детский сад Дубай | 1,4 | 37 | НЧ | коммерч. | В | доп. слово |
| nursery al barsha | сад Al Barsha | 1,0 | 33 | НЧ | локальный | С | №3 |
| nurseries in dubai | сады в Дубае | 0,9 | 32 | НЧ | коммерч. | В | — |
| nursery arjan | сад Arjan | 0 (ниже порога) | — | НЧ | локальный | Н | главная, GBP |
| licensed / illegal / unlicensed nursery | лицензированный / нелегальный сад | 0 (ниже порога, UAE) | — | НЧ | инфо | — | доп. слова в №1 |
| settling in nursery | адаптация в саду | ~0 (UAE) | — | НЧ | инфо | С | раздел в №3 |

**Брендовые запросы.** Значительная часть спроса — названия конкурентов. В топе связанных с «nursery» в Дубае: Chubby Cheeks (29), British Orchard (18), Blossom (12), Redwood (9), Maple Bear (7), Emirates British (6), Numu (5), Little Diamond (4, сад в Arjan). Родители ищут сады по названию, поэтому важны узнаваемость бренда и карточки в каталогах. Растущие брендовые запросы за месяц: Green Grass, Tappy Toes, Little Champions, Tiny Tots.

#### Арабские (исследованы отдельно: связанные запросы и сравнение на общей шкале)

| Запрос | Перевод | Индекс | Пик | Класс | Наблюдение |
|---|---|---|---|---|---|
| حضانة | сад / ясли; **также «опека над ребёнком»** | 6,5 | 42 | СЧ | В связанных по ОАЭ: «حضانة الطفل» (опека, юридический смысл), названия садов. Чистый «садовый» спрос меньше индекса |
| روضة | детский сад (KG); также «сад» в религиозных формулах | 3,3 | 51 | НЧ–СЧ | В связанных — религиозная формула «روضة من رياض الجنة», к садам отношения не имеет |
| حضانة دبي | сад Дубай | 0,5 | 26 | НЧ | Небольшой, но целевой |
| حضانات | сады (мн. ч.) | 0,1 (Дубай) / выше по ОАЭ | 5 | НЧ | — |
| حضانة اطفال / روضة اطفال / حضانة قريبة مني / رسوم الحضانة / حضانة رضع | детский сад / садик / сад рядом / стоимость / ясли | 0 (ниже порога) | — | НЧ | По ОАЭ в связанных есть «حضانة اطفال» (56 от «حضانة») и растущий «حضانة بالانجليزي» (+70%) — арабоязычные ищут англоязычный сад |

**Выводы по арабскому спросу (подтверждено индексом):**
1. В Дубае арабский поиск садов на порядок меньше английского: «حضانة» = 6,5 против «nursery dubai» = 100, при этом часть «حضانة» — юридическая «опека». Основной фокус на английском подтверждён данными.
2. Арабские семьи, судя по запросам с названиями садов и «حضانة بالانجليزي», ищут конкретные бренды и англоязычные сады. Им нужен полноценный `/arabic` с теми же сильными сторонами плюс арабский и исламское воспитание, а не отдельный блог.
3. AR-версии статей в этом плане — **опционально**. Если делать, то для №1 (лицензия): тема касается всех, и госорганы (Dubai Police, KHDA) коммуницируют её на арабском. В Trends арабский объём ниже порога, это решение по смыслу, а не по цифрам.

### 3.2. Динамика 3–9 ноября 2026 (Trends, дневные данные, Дубай)

| Запрос | 3–9.11 | 27.10–2.11 | 6–26.10 | Вывод |
|---|---|---|---|---|
| nursery | 60,9 | 54,9 | 51,7 | **+11% к прошлой неделе, +18% к октябрю.** Пики 7–8.11 (67 и 72) сразу после рейда 6.11 |
| khda | 40,9 | 48,1 | 42,2 | Без всплеска: тема шире садов |
| british nursery | 3,6 | 3,7 | 1,2 | Выше октября, но значения малы и шумные |
| nursery near me | 2,9 | 2,1 | 0,0 | Рост с конца октября (малые значения) |
| winter camp | 1,1 | 0,4 | 0,0 | **Начало сезонного роста** |

Связанные растущие запросы к «nursery» за 30 дней: **«dubai nursery safety inspection arrests» — Breakout** (рост более чем в 50 раз), он же +350% по ОАЭ за 12 месяцев. Это подтверждает, что новость о рейде повлияла на поиск. При этом длинные запросы вроде «licensed nursery» или «how to check nursery license» остаются ниже порога Trends: интерес выражается новостными формулировками, а не практическими.

*Шкала в таблице — внутренняя для этого набора запросов, она не совпадает со шкалой п. 3.1.*

### 3.3. Сезонность (Trends, 5 лет и 12 месяцев, Дубай)

- **«nursery dubai» / «nursery»:** главный пик — конец августа и начало сентября (неделя 30.08–05.09.2026 = максимум года). Второй пик — **январь** (4–24.01.2026: 75–79 против ~65 в ноябре), третий — апрель. Ноябрь — средний месяц, но после него начинается январский набор.
- **«winter camp»:** сезон 2025 начался в середине ноября (16–22.11: 12), пик пришёлся на **30.11–13.12** (22 и 19), к 21.12 интерес нулевой. По 5-летним данным ноябрь и декабрь — единственные месяцы с заметным интересом. **Чтобы успеть к сезону, статью о лагере нужно опубликовать не позже середины ноября.**
- **«khda»:** провалы в июле и декабре (каникулы), пики в апреле и январе.

### 3.4. Конкуренты в выдаче

| Тип | Кто | Чем выигрывать |
|---|---|---|
| Каталоги | Edarabia, edcare.ae, mdares.ai, schoolsclassify, bestnursery.ae | Точными ответами, которых нет в каталогах; собственными карточками в каталогах |
| Порталы недвижимости | Property Finder, Bayut (MyBayut), bhomes | Районным гайдом от первого лица |
| Сады-соседи и бренды поиска | Chubby Cheeks (в т. ч. Arjan), British Orchard, Blossom и Redwood (Motor City), Emirates British, Little Diamond (Arjan), Dibber (Al Barsha South), Building Blocks (Motor City), Ladybird и Wonder Years (JVC) | Кампус и парк, день до 19:00, FS2, арабский и исламское воспитание, медсестра DHA |
| СМИ | Gulf News, Khaleej Times, The National | С новостями не конкурировать, ссылаться на них |

---

## 4. Контент-план (пересмотрен по данным Trends)

### 4.1. Что изменилось относительно версии 1

| Было | Стало | Почему |
|---|---|---|
| №1 «Как проверить лицензию» под long tail «how to check nursery license» | №1 **KHDA: лицензия и рейтинги садов** под ВЧ «khda rating» (40) | «licensed nursery» и аналоги ниже порога Trends, а «khda rating» — ВЧ. В связанных есть «khda rating», «khda school rating», «what is khda». KHDA не публикует сопоставимый рейтинг садов, и этот ответ мало кто даёт |
| Отдельный гайд по Arjan под «nursery arjan» | №3 **Как выбрать британский сад в Дубае** (для новичков в городе) с разделом про Arjan и Al Barsha South | «nursery arjan» ниже порога, «nursery al barsha» = 1. Измеримый спрос — у «british nursery» (27) и «nursery in dubai» (26). Сюда же вошла тема адаптации после переезда |
| Переезд и январский старт | Объединён с №3 | «settling in nursery» ≈ 0, но январь — второй пик спроса: публикация 16.11 попадает в окно подготовки |
| — | №4 **EYFS, FS1 и FS2: сад или школа** | «eyfs» и «fs1» = 19 каждый, ВЧ. Тема актуальна из-за новых правил возраста 2026, и Paddington ведёт детей до FS2 |
| Лагерь — приоритет 3 | Лагерь — **приоритет 2**, публикация 13.11 | Сезонный ВЧ: пик в 2025 — 143 на нашей шкале, рост начинается в середине ноября |
| Ясли — приоритет 5 | Ясли — приоритет 6 | «baby nursery» = 1,5 (НЧ), но растёт и высоко конвертирует |

### 4.2. Календарь и приоритеты

| Дата | № | Статья | Приоритет | Главный запрос (индекс) |
|---|---|---|---|---|
| **Ср 11.11** | 1 | KHDA и детские сады: как проверить лицензию и что значит рейтинг | 1 | khda rating (40) |
| **Пт 13.11** | 2 | Зимний лагерь для детей до 5 лет 2026 | 2 | winter camp (пик 143) / winter camp dubai |
| **Пн 16.11** | 3 | Как выбрать британский сад в Дубае: гайд для семей, недавно переехавших | 3 | british nursery (27) / nursery in dubai (26) |
| **Ср 18.11** | 4 | EYFS, FS1 и FS2: сад или школа | 4 | fs1 (19) / eyfs (19) |
| **Пт 20.11** | 5 | Стоимость сада в Дубае 2026–27 | 5 | nursery fees (8,5) |
| **Пн 23.11** | 6 | Ясли с 45 дней | 6 | baby nursery (1,5, растёт) |

> **Условия запуска:** до 11.11 создать раздел блога и подтвердить у заказчика номер KHDA permit. Если блог не успевают сделать, статью о лагере всё равно нужно выпустить не позже 16–18.11: пик интереса — 30.11–13.12.

### 4.3. Карта запросов (защита от пересечений)

| Страница | Кластер | Не берёт |
|---|---|---|
| Главная | nursery dubai, british nursery arjan, nursery near me | — |
| №1 | khda rating, khda nursery, what is khda, licensed nursery | цена, выбор программы |
| №2 | winter camp (dubai / near me / for kids / toddlers) | выбор сада в целом |
| №3 | how to choose british nursery dubai, best nursery dubai, nursery in dubai + Arjan, Al Barsha South, settling in | «british nursery arjan» → главная; FS1 → №4 |
| №4 | eyfs, fs1, fs2, fs1 age dubai | выбор конкретного сада → №3 |
| №5 | nursery fees dubai, nursery cost | лицензия → №1 |
| №6 | baby nursery (near me), infant care, nursery from 45 days | адаптация старших детей → №3 |

Из статьи №3 ссылка на главную идёт с анкором «British nursery in Arjan». Сама статья не таргетирует «british nursery» как точный коммерческий запрос, а забирает информационный вариант «how to choose a British nursery».

---

### Статья 1 — 11.11.2026 · Приоритет 1

**H1:** KHDA and Nurseries: How to Check a Nursery's Licence and What "KHDA Rating" Means
**Аудитория и потребность:** все сегменты, особенно экспаты: не знают роль KHDA и после рейда хотят убедиться в легальности сада.
**Запросы:** основные — khda rating (40, ВЧ), khda nursery. Дополнительные — what is khda, khda rating nursery, licensed nursery dubai, unlicensed nursery, dubai nursery inspection. AR (опц.): هيئة المعرفة حضانة, حضانة مرخصة.
**Частотность и конкуренция:** «khda rating» — ВЧ в Trends. Большая часть спроса — рейтинги школ, долю садового контекста оценить нельзя. Конкуренция В: сайт KHDA и СМИ. Новостной интерес подтверждён: «dubai nursery safety inspection arrests» — Breakout, «nursery» +11% за 3–9.11.
**Обоснование:** пересечение ВЧ-запроса и острой новостной боли. Родители ищут «KHDA rating» сада, а KHDA не публикует сопоставимую оценку садов ([uaeexperthub](https://www.uaeexperthub.com/nursery-regulations-licensing-dubai-khda/), источник вторичный, сверить с KHDA). Статья объясняет, что проверять вместо рейтинга.
**Структура:**
- H1 KHDA and Nurseries
  - H2 What KHDA does, and what it doesn't, for nurseries
  - H2 Is there a KHDA rating for nurseries?
  - H2 How to check a nursery's licence in 4 steps
    - H3 Ask for the KHDA permit number
    - H3 Find it in the official KHDA directory
    - H3 Check DHA approval for the nurse or clinic
    - H3 Look for the licence at reception
  - H2 Why it matters: the November 2026 crackdown on unlicensed nurseries
  - H2 Red flags of unlicensed childcare
  - H2 Paddington Park: our licence and standards
  - H2 FAQ
**SEO Title:** KHDA Nursery Licence & Ratings Explained | Dubai Parent Guide
**Meta Description:** Is there a KHDA rating for nurseries? How to check a Dubai nursery's KHDA licence, what to ask for on a tour, and red flags of unlicensed childcare.
**CTA:** «Book a tour — we'll show you our KHDA permit and introduce our DHA-certified nurse».
**Условие:** номер permit от заказчика; процедуру сверить с сайтом KHDA.

---

### Статья 2 — 13.11.2026 · Приоритет 2

**H1:** Winter Camp in Dubai 2026 for Toddlers and Preschoolers: How to Choose
**Аудитория и потребность:** работающие родители детей 1–5 лет на каникулы 14.12–03.01.
**Запросы:** основные — winter camp (сезонный ВЧ), winter camp dubai. Дополнительные — winter camp near me, kids winter camp, winter camp for toddlers dubai, nursery winter camp. AR — не нужен.
**Частотность и конкуренция:** в сезон 2025 пик «winter camp» — 143 на нашей шкале, то есть выше среднего «nursery dubai». Сезон длится примерно с 16.11 до 20.12. Конкуренция В (Edarabia «18 Amazing Winter Camps 2026», Kidzapp), в нише «до 5 лет» — С.
**Обоснование:** самый сильный сезонный ВЧ, а у Paddington есть продукт с датой и готовым WhatsApp-CTA. Большинство лагерей рассчитаны на детей 5+.
**Структура:**
- H1 Winter Camp in Dubai 2026 for Toddlers and Preschoolers
  - H2 UAE winter break 2026–27: key dates
  - H2 What makes a good winter camp for under-5s
    - H3 Groups and ratios by age
    - H3 Indoor and outdoor balance in December
    - H3 Familiar routine: meals, naps, hours
  - H2 Questions to ask before booking
  - H2 Paddington Park Winter Camp: dates and programme
  - H2 FAQ
**SEO Title:** Winter Camp Dubai 2026 for Toddlers & Preschoolers | Arjan
**Meta Description:** Winter break runs 14 Dec–3 Jan. How to choose a winter camp in Dubai for children under 5, what to ask before booking, and Paddington Park's camp dates.
**CTA:** «Request the Winter Camp programme on WhatsApp».
**Нужно от заказчика:** программа, возраст, часы, цена.

---

### Статья 3 — 16.11.2026 · Приоритет 3

**H1:** How to Choose a British Nursery in Dubai: A Guide for Families New to the City
**Аудитория и потребность:** экспаты, которые недавно переехали или переезжают к январю, и семьи Arjan, Al Barsha South и соседних районов. Нужно понять, как сравнивать сады и как пройдёт адаптация.
**Запросы:** основные — british nursery (27), nursery in dubai (26), в информационной форме «how to choose». Дополнительные — best nursery dubai, nursery near me, nursery al barsha, nursery arjan, settling in nursery, moving to dubai with toddler.
**Частотность и конкуренция:** основные — ВЧ, конкуренция В (каталоги и бренды). Локальные и «settling in» — НЧ, конкуренция Н–С.
**Обоснование:** статья приводит из информационного ВЧ-кластера на главную. Она закрывает приоритетный сегмент брифа (экспаты и адаптация) и использует январский пик спроса.
**Структура:**
- H1 How to Choose a British Nursery in Dubai
  - H2 British EYFS in Dubai: what to expect
  - H2 What to compare
    - H3 Licence and inspection *(кратко, ссылка на №1)*
    - H3 Hours for working parents
    - H3 Indoor and outdoor space
    - H3 Ratios, staff and nurse
    - H3 Arabic and Islamic studies
  - H2 Questions to ask on a nursery tour
  - H2 Living in Arjan or Al Barsha South? Nurseries close to home
  - H2 Starting mid-year: settling in after a move
  - H2 Paddington Park at a glance
  - H2 FAQ
**SEO Title:** How to Choose a British Nursery in Dubai | Guide for New Families
**Meta Description:** New to Dubai? How to compare British EYFS nurseries: hours, space, staff ratios and the questions to ask on a tour, plus tips for settling in after a move.
**CTA:** «Book a campus tour — Arjan, open daily 8 AM–7 PM».

---

### Статья 4 — 18.11.2026 · Приоритет 4

**H1:** EYFS, FS1 and FS2 Explained: Should Your Child Do FS1 at Nursery or School?
**Аудитория и потребность:** родители 2–4-летних, особенно экспаты, для которых британская система незнакома. Новые правила возраста 2026 добавили неопределённости.
**Запросы:** основные — fs1 (19), eyfs (19). Дополнительные — fs2, fs1 age dubai, eyfs curriculum, fs1 nursery or school, school readiness.
**Частотность и конкуренция:** ВЧ. Конкуренция В по новостным запросам о правилах возраста (Khaleej Times, Gulf News), С по объяснению EYFS.
**Обоснование:** измеримый спрос в 2 раза выше «nursery fees». Paddington — один из немногих садов, которые ведут детей до FS2, и это аргумент против раннего перехода в школу.
**Структура:**
- H1 EYFS, FS1 and FS2 Explained
  - H2 EYFS in simple terms: 7 areas of learning
  - H2 FS1 and FS2: ages and the 2026 UAE cut-off rules
  - H2 FS1 at nursery or at school: pros and cons
  - H2 How to tell your child is ready for school
  - H2 FS1–FS2 at Paddington Park
  - H2 FAQ
**SEO Title:** EYFS, FS1 & FS2 Explained: Nursery or School in Dubai?
**Meta Description:** What EYFS, FS1 and FS2 mean, the new UAE age cut-off rules, and how to decide whether your child should start FS1 at nursery or at school in Dubai.
**CTA:** «Talk to our Head Teacher about FS1–FS2 — book a visit».
**Риск:** правила возраста сверить с актуальными публикациями KHDA и МОЕ на дату выхода.

---

### Статья 5 — 20.11.2026 · Приоритет 5

**H1:** Nursery Fees in Dubai 2026–27: What's Included and How to Compare
**Аудитория и потребность:** все, особенно семьи, которые планируют бюджет переезда.
**Запросы:** основные — nursery fees (8,5, СЧ), nursery fees dubai. Дополнительные — nursery cost dubai, british nursery fees, nursery registration fee, full day nursery price. AR — رسوم الحضانة (ниже порога).
**Частотность и конкуренция:** СЧ, конкуренция В (Edarabia «2026 Fees», bestnursery.ae). Растут брендовые «… nursery fees».
**Обоснование:** коммерческая боль. Каталоги дают цифры, но не объясняют, что входит в цену.
**Структура:**
- H1 Nursery Fees in Dubai 2026–27
  - H2 Typical ranges and why estimates differ
  - H2 What drives the price
  - H2 What's included, and what may cost extra
    - H3 Registration fee and deposit
    - H3 Meals, uniform, trips, camps
    - H3 Siblings and payment terms
  - H2 A checklist to compare nurseries fairly
  - H2 Paddington Park fees: how to get our price list
  - H2 FAQ
**SEO Title:** Nursery Fees in Dubai 2026–27: What's Included & How to Compare
**Meta Description:** How much does nursery cost in Dubai in 2026–27? Typical ranges, hidden extras to ask about, and a checklist to compare nurseries fairly.
**CTA:** «Request the 2026–27 price list».
**Решение за заказчиком:** публиковать ли «from AED …».

---

### Статья 6 — 23.11.2026 · Приоритет 6

**H1:** Baby Nursery in Dubai from 45 Days: A Guide for Parents Going Back to Work
**Аудитория и потребность:** мамы младенцев после 60-дневного декрета.
**Запросы:** основные — baby nursery (1,5), baby nursery near me (+130%). Дополнительные — infant care dubai, nursery from 45 days, nursery for newborns, maternity leave uae.
**Частотность и конкуренция:** НЧ, но растёт. Конкуренция С: каталоги со списками «от 45 дней».
**Обоснование:** узкий сегмент с высокой конверсией и ясной болью. Отдельная группа 0–1 и медсестра DHA — сильные аргументы Paddington.
**Структура:**
- H1 Baby Nursery in Dubai from 45 Days
  - H2 Maternity leave in the UAE and when babies start nursery
  - H2 What a good baby room looks like
    - H3 Ratios and key person
    - H3 Sleep, feeding and milk routines
    - H3 Health: nurse on site, hygiene, sickness policy
  - H2 Preparing for the first weeks
  - H2 Our 0–1 room at Paddington Park
  - H2 FAQ
**SEO Title:** Baby Nursery in Dubai from 45 Days | Infant Care Guide
**Meta Description:** Going back to work after maternity leave? What to look for in a Dubai baby nursery from 45 days: ratios, sleep and feeding routines, nurse on site.
**CTA:** «Visit our Baby Room — book a tour».

---

### 4.4. Резервные темы

1. **Nursery & flu season in Dubai: when to keep your child home.** Сезонно, но спрос в Trends не проверял, свежих данных за ноябрь 2026 нет.
2. **Arabic and Islamic studies in a British nursery** — для `/arabic` и арабских семей, спрос ниже порога Trends.

---

## 5. Рекомендации вне контент-плана

1. **Высокочастотные коммерческие запросы закрывает главная, а не блог.** «nursery dubai» (100), «british nursery» (27), «nursery in dubai» (26), «nursery near me» (19): укрепить title, H1 и тексты главной, добавить блок FAQ и микроразметку `ChildCare`.
2. **Google Business Profile.** «nursery near me» — ВЧ, и в связанных растёт «baby nursery near me». Нужны категории, фото и отзывы.
3. **Бренд и каталоги.** Большая часть спроса — брендовые запросы, поэтому нужны карточки на Edarabia, edcare, mdares.ai и Bayut.
4. Вывести на сайт KHDA permit и лицензию DHA.
5. EN/AR: `lang`, `hreflang`, полный перевод `/arabic`.
6. Search Console: индексация, sitemap, брендовые запросы.

---

## Приложение А. Проверка абсолютной частотности в Keyword Planner

Trends даёт только относительный индекс. Для отчёта заказчику с цифрами прогоните список в Google Keyword Planner: Location — Dubai и UAE; Language — English и Arabic; период — 12 месяцев.

```
nursery dubai
nursery in dubai
british nursery
british nursery dubai
nursery near me
best nursery dubai
khda rating
khda nursery
eyfs
fs1
fs1 age dubai
nursery fees dubai
winter camp dubai
winter camp near me
kids winter camp
baby nursery
baby nursery near me
infant care dubai
nursery al barsha
nursery arjan
settling in nursery
moving to dubai with toddler
حضانة دبي
حضانة اطفال
حضانة بالانجليزي
رسوم الحضانة
```

## Приложение Б. Источники

- **Google Trends** (выгружено 10.11.2026): https://trends.google.com/trends/explore?geo=AE-DU — сводка в `seo-research/data/google-trends_dubai_12m_index.csv`
- Сайт: https://paddingtonparkdubai.com/, https://paddingtonparkdubai.com/arabic (проверено 10.11.2026)
- Рейд 6.11.2026: [The National](https://www.thenationalnews.com/news/uae/2026/11/06/dubai-police-shut-down-33-illegal-nurseries-operating-in-residential-buildings/), [Gulf News](https://gulfnews.com/uae/dubai/dubai-police-arrest-34-over-33-illegal-nurseries-putting-children-at-risk-1.500738277), [Khaleej Times](https://www.khaleejtimes.com/uae/dubai-police-shut-33-unlicensed-nurseries-34-operators-arrested), [Gulf Today](https://www.gulftoday.ae/news/2026/11/06/dubai-police-shut-down-33-unlicensed-nurseries-arrests-34-suspects)
- Рынок: [Dubai Media Office](https://mediaoffice.ae/en/news/2025/october/02-10/dubai-early-childhood-sector-sees-continued-growth-with-8-percent-rise-in-enrolment), [KHDA](https://web.khda.gov.ae/en/About-Us/News/2026/Dubai%E2%80%99s-private-education-sector-expands-with-new)
- Календарь: [Gulf News — winter break 2026–27](https://gulfnews.com/living-in-uae/education/uae-school-winter-break-2026-2027-calendar-1.500733406)
- Декрет: [Gulf News](https://gulfnews.com/living-in-uae/ask-us/new-uae-labour-law-maternity-leave-extended-to-60-days-1.1637570400069)
- FS1/FS2: [Khaleej Times](https://www.khaleejtimes.com/uae/explained-uae-updates-fs1-fs2-school-admission-rules-under-new-age-cut-off)
- Цены: [Vesta Solutions](https://vesta-solutions.ae/dubai-nursery-and-childcare-costs-2026-khda-licensed-options-and-monthly-fees/), [Edarabia](https://www.edarabia.com/nurseries/uk-eyfs/)
- Выбор сада: [Gulf News](https://gulfnews.com/parenting/learning-play/your-ultimate-guide-to-choosing-a-nursery-in-the-uae-1.1586365187729), [The National](https://www.thenationalnews.com/business/more-than-just-fees-to-consider-when-enrolling-in-uae-nurseries-1.208065), [Property Finder](https://www.propertyfinder.ae/blog/how-to-choose-nursery/)
- KHDA и сады: [uaeexperthub](https://www.uaeexperthub.com/nursery-regulations-licensing-dubai-khda/) (вторичный источник)
- Лагеря: [Edarabia — winter camps 2026](https://www.edarabia.com/134489/dubai-winter-camps-kids)
- Адаптация: [Thrive](https://www.thrive.ae/blog/separation-anxiety-dubai)
