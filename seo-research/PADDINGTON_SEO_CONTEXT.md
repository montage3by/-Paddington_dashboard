# Paddington Park Dubai — SEO-исследование: полный контекст

Сводный файл для переноса работы в другую ветку или сессию. Собран 12.11.2026 из ветки `claude/paddington-seo-november` (последний коммит перед сборкой: `9d4f349`).
Файл самодостаточен: в нём есть всё, что нужно, чтобы продолжить работу без истории переписки.

---

## 1. Проект и рамки

| Параметр | Значение |
|---|---|
| Клиент | Paddington Park, British Early Childhood Centre (Дубай) |
| Сайт | https://paddingtonparkdubai.com/ (Tilda, одна посадочная страница + `/arabic`) |
| Адрес | 54 street, Arjan, Al Barsha South 3, Dubai |
| Регион продвижения | Дубай: Arjan, Al Barsha South и соседние районы (Dubai Hills, Motor City, Sports City, JVC) |
| Языки анализа | EN (основной для контента), AR (вспомогательная аналитика) |
| Период трендов | 3–9 ноября 2026 |
| Период контент-плана | 11–24 ноября 2026, 6 статей |
| Аудитория | Родители в Дубае, семьи экспатов (недавно переехавшие или переезжающие) |
| Репозиторий | `montage3by/-Paddington_dashboard`. Основное содержимое — рекламный дашборд Google Ads (Next.js), **к SEO не относится** |

### Правила работы, согласованные с пользователем

- Код сайта, рекламный дашборд, данные и настройки не изменять.
- Pull Request не создавать, ветки не сливать без разрешения.
- SEO-материалы хранить в `seo-research/`.
- Пользователь — маркетолог. Общение и аналитика на русском, статьи и план для заказчика на английском.
- Не выдумывать метрики, цифры и факты. Разделять подтверждённое и гипотезы, давать источники.

---

## 2. Что известно о Paddington Park (только с сайта, проверено 10.11.2026)

- British EYFS, от **45 дней до FS2**; группы 0–1, 1–2, 2–3, 3–4, 4–5 лет.
- Программа **«Education Starts Here»** для 3–5 лет: раннее чтение, письмо, математика через игру.
- Кампус: здание **29 000 sq ft** специальной постройки, овальная архитектура; **30 000 sq ft** открытой зоны («a park larger than the building»); **театр**, полноразмерный **крытый спортзал**, музыка, арт, спорт.
- Команда: principal **Mrs Rania Galbraith**; учителя по возрастам; **Ms Samar — учитель арабского и исламского воспитания**; **Ms Jini — медсестра с сертификатом DHA**; охранник.
- Режим: **ежедневно с 8:00 до 19:00**.
- Лагеря: **Winter Camp 14.12.2026 – 04.01.2027**, Spring Camp 5–12.04.2027, Summer Camp 05.07–27.08.2027, Autumn Camp — октябрь 2027 (даты не объявлены). Программу запрашивают через WhatsApp +971 52 129 0607.
- Театральные занятия: «From 1 session per week, in our own theatre on campus. No experience needed».
- Сестринский центр: Paddington Early Learning Centre, JLT (cluster P), сайт paddingtonelc.com.
- Мероприятия для родителей: Parenting Morning с Joys of Childhood (страница `/pm24may`).

**Чего на сайте нет, и поэтому в статьях этого не утверждаем:**
- номера лицензии KHDA и вообще упоминания лицензии;
- цен (есть только кнопка «Request the pricelist»);
- соотношения воспитателей и детей;
- порядка адаптации;
- возрастов, часов и цен лагерей;
- отзывов.

---

## 3. Аудит сайта (SEO)

| Проблема | Значение |
|---|---|
| **Нет блога** | Перед публикацией статей нужно создать раздел (Tilda Feeds или страницы `/blog/...`) |
| Нет упоминания лицензии KHDA | Пробел доверия. Заказчику рекомендовано вывести номер разрешения |
| Цены скрыты | Сайт проигрывает каталогам по запросам о стоимости |
| 0 блоков JSON-LD | Нужны `ChildCare` / `Preschool` / `LocalBusiness`, `FAQPage`, `Event` для лагерей |
| Нет `lang` у `<html>` и `hreflang` в `<head>` | EN и AR хуже связаны |
| `/arabic` переведена частично | Форма на английском, H2: 1 против 8 на EN |
| 23 изображения без `alt` | Мелкая доработка |
| `sitemap.xml` отдаёт 403 на curl, но открывается через другой клиент; в нём есть страницы с ответом 403 (`summer_camp26`, `page5827…`) | Гипотеза: защита от ботов или неопубликованные страницы. Проверить в Search Console |
| Брендовый поиск не нашёл сайт (поисковик не Google) | Гипотеза о слабой видимости. Проверить в Search Console |

---

## 4. Аудитория и боли

| Сегмент | Потребность |
|---|---|
| Экспаты: недавно переехавшие или переезжающие | Не знают систему (KHDA, EYFS, FS1/FS2), нет помощи родных. Нужен надёжный сад рядом и мягкая адаптация |
| Работающие мамы младенцев | Декрет в частном секторе ОАЭ — 60 дней (45 полностью оплачиваемых и 15 за половину зарплаты). Нужны ясли, длинный день, медсестра |
| Жители Arjan и соседних районов | Близко к дому, британская программа, понятная цена |
| Арабские и мусульманские семьи | EYFS плюс арабский и исламское воспитание |
| Родители 2–4-летних | Новые правила возраста FS1/FS2 в ОАЭ (2026), подготовка к школе |

**Главные вопросы родителей:**
- лицензия KHDA и DHA;
- соотношение воспитателей и детей, квалификация и текучесть персонала;
- охрана;
- питание;
- часы работы;
- что входит в цену;
- можно ли начать в середине года;
- как проходит адаптация;
- подготовка к FS1/FS2;
- арабский язык.

**Рынок:**
- 2024–25: 29 634 ребёнка в 312 частных садах Дубая, +8% за год (Dubai Media Office).
- 2026–27: открываются 17 новых центров, это более 1 700 мест (KHDA).

---

## 5. Данные поискового спроса

### 5.1. Методика и ограничения

- **Источник:** Google Trends, регион Dubai (`AE-DU`), при нехватке данных — UAE (`AE`). Выгрузка 10.11.2026 через API Trends с хоста trends.google.com (доступ выдан в окружении сессии).
- **Периоды:** 12 месяцев (09.11.2025–10.11.2026, по неделям), дневные данные 15.09–10.11.2026, 5 лет для сезонности.
- **Шкала:** все запросы сведены через общий якорь. **Среднее «nursery dubai» за 12 месяцев = 100.**
- **Это относительный индекс, а не частотность в месяц.** Значения ниже ~3 нестабильны: Trends работает на выборке. Сравнение — широкое соответствие. В «nursery» попадают садовые питомники (plant nursery, Warsan nursery), в «daycare» — передержка собак.
- **Не использовались:** Keyword Planner, Semrush, Ahrefs (нет доступа), Google Autocomplete (хост не разрешён). Веб-поиск в сессии — с геолокацией США.
- **Классификация:** ВЧ ≥ 15, СЧ 3–15, НЧ < 3 (по индексу).

### 5.2. Индексы запросов (Дубай, 12 месяцев)

| Запрос | Язык | Индекс (среднее) | Пик недели | Класс |
|---|---|---|---|---|
| nursery | EN | 434.5 | 648.7 | — (широкий, шум) |
| khda | EN | 345 | 1103.5 | — (широкий, шум) |
| nursery dubai | EN | 100 | 153.3 | ВЧ |
| kindergarten | EN | 71.2 | 136.2 | ВЧ |
| preschool | EN | 40.1 | 77.8 | ВЧ |
| khda rating | EN | 39.5 | 84.3 | ВЧ |
| daycare | EN | 35.5 | 84.3 | ВЧ |
| british nursery | EN | 26.9 | 62.9 | ВЧ |
| nursery in dubai | EN | 26.4 | 58.4 | ВЧ |
| nursery near me | EN | 18.8 | 50.6 | ВЧ |
| fs1 | EN | 18.6 | 59.8 | ВЧ |
| eyfs | EN | 18.5 | 55.2 | ВЧ |
| winter camp | EN | 11.8 | 142.7 | СЧ |
| nursery fees | EN | 8.5 | 41.4 | СЧ |
| حضانة | AR | 6.5 | 42 | СЧ |
| روضة | AR | 3.3 | 51.3 | СЧ |
| winter camp dubai | EN | 3.2 | 51.9 | СЧ |
| baby nursery | EN | 1.5 | 38.9 | НЧ |
| kindergarten dubai | EN | 1.4 | 36.8 | НЧ |
| best nursery in dubai | EN | 1.2 | 27.6 | НЧ |
| nursery al barsha | EN | 1 | 33.1 | НЧ |
| nurseries in dubai | EN | 0.9 | 32.4 | НЧ |
| حضانة دبي | AR | 0.5 | 26.4 | НЧ |
| حضانات | AR | 0.1 | 4.7 | НЧ |
| nursery arjan | EN | 0 | 0 | НЧ |

*«winter camp»: в среднем за год 11,8, но в пиковую неделю 142,7 — сезонный ВЧ. «nursery» и «khda» шире целевого спроса и не таргетируются напрямую.*

**Дополнительно измерено позже (та же шкала):**

| Запрос | Индекс |
|---|---|
| montessori | 51,5 (широкий: есть «montessori dubai», «montessori school», «montessori nursery», а также мебель и игрушки) |
| british curriculum | 48,4 (почти целиком школы) |
| american curriculum | 5,1 |
| reggio emilia | 1,2 |
| montessori nursery | 0,2 |
| eyfs vs montessori | ниже порога |

**Ниже порога Trends (≈ 0):**
- EN: licensed nursery, illegal nursery, unlicensed nursery, nursery licence, nursery arjan, nursery jvc, settling in nursery, kids winter camp, winter camp for kids.
- AR: حضانة اطفال، روضة اطفال، حضانة قريبة مني، رسوم الحضانة، حضانة رضع، حضانة بريطانية، مخيم شتوي.

### 5.3. Связанные запросы

- **«nursery» (Дубай, 12 мес.), топ:** nursery dubai 100, british nursery 32, nursery in dubai 32, chubby cheeks nursery 29, nursery near me 24, plant nursery 21, british orchard nursery 18, warsan nursery 16, blossom nursery 12, redwood nursery 9, maple bear nursery 7, emirates british nursery 6, numu nursery 5, little diamond nursery 4.
- **«nursery dubai», топ:** warsan nursery dubai 100, best nursery dubai 84, chubby cheeks nursery dubai 84, british orchard nursery dubai 60, blossom nursery dubai 44, redwood nursery dubai 29.
- **Растущие за 30 дней:** **dubai nursery safety inspection arrests — Breakout**, green grass nursery, kids spot nursery, tiny tots nursery, little champions nursery, emirates british nursery motor city, toddler town british nursery; chubby cheeks nursery fees +50%.
- **«nursery near me»:** nursery school near me, kids nursery near me, baby nursery near me (**+130%** за год).
- **«british nursery»:** emirates british nursery, toddler town british nursery, emirates british nursery fees.
- **«khda»:** khda school, khda dubai, khda rating, khda school rating, what is khda, khda calendar.
- **«winter camp»:** winter camp dubai, kids winter camp, winter camp near me.
- **«حضانة» (ОАЭ):** حضانة اطفال, حضانة الطفل (опека, юридический смысл), названия садов; растёт **حضانة بالانجليزي (+70%)**.

### 5.4. Динамика 3–9 ноября 2026 (дневные данные, Дубай; внутренняя шкала набора)

| Запрос | 3–9.11 | 27.10–2.11 | 6–26.10 |
|---|---|---|---|
| nursery | 60,9 | 54,9 | 51,7 |
| khda | 40,9 | 48,1 | 42,2 |
| british nursery | 3,6 | 3,7 | 1,2 |
| nursery near me | 2,9 | 2,1 | 0,0 |
| winter camp | 1,1 | 0,4 | 0,0 |

**Вывод:**
- «nursery» вырос на 11% к прошлой неделе, пики 7–8.11 (67 и 72) пришлись сразу на рейд 6.11.
- Интерес выражался новостными формулировками, а практические запросы («how to check licence») остались ниже порога.

### 5.5. Сезонность

- **nursery:** главный пик — конец августа и начало сентября (максимум года — неделя 30.08–05.09.2026). Второй пик — **январь**, третий — апрель.
- **winter camp:** в 2025 году рост начался в середине ноября (16–22.11), пик пришёлся на **30.11–13.12**, к 21.12 интерес нулевой.
- **khda:** провалы в июле и декабре, пики в апреле и январе.

### 5.6. Выводы по арабскому спросу

- В Дубае арабский спрос на порядок меньше английского: «حضانة» = 6,5 против 100, и слово означает ещё и «опеку».
- Арабоязычные ищут сады по названию и англоязычные сады («حضانة بالانجليزي»).
- **Решение:** блог на английском, арабскую главную усилить. AR-версии статей — опционально.

### 5.7. Конкуренты в выдаче

- **Каталоги:** Edarabia, edcare.ae, mdares.ai (AR), schoolsclassify, bestnursery.ae.
- **Порталы недвижимости:** Property Finder, Bayut / MyBayut, bhomes.
- **Сады, которые ищут по названию, и соседи:** Chubby Cheeks (в т. ч. Arjan), British Orchard, Blossom и Redwood (Motor City), Emirates British, Little Diamond (Arjan), Dibber (Al Barsha South), Building Blocks (Motor City), Ladybird и Wonder Years (JVC), Maple Bear.
- **СМИ:** Gulf News, Khaleej Times, The National.
- **Районные гайды от садов** по Arjan и Al Barsha South в выдаче не найдены.

---

## 6. Ключевые решения (журнал)

1. **10.11, версия 1 плана:** выбор тем без данных о частотности, оценки по составу выдачи.
2. **10.11, версия 2 (по Google Trends):**
   - статья о лицензии перенацелена на ВЧ «khda rating»;
   - гайд по Arjan объединён с темой переезда в статью «Как выбрать британский сад»;
   - добавлена тема EYFS/FS1;
   - приоритет лагеря поднят;
   - ВЧ «nursery dubai», «british nursery», «nursery near me» закреплены за главной и Google Business Profile, а не за блогом.
3. **Статья 1 (KHDA):** сокращена до ~1 800 символов. Тон для общего пользования: **без новостной повестки, без рейда, полиции и запугивания** — продвижение в SEO, а не пересказ новостей.
4. **Статья 1:** **убрано утверждение, что Paddington лицензирован KHDA**: этого нет на сайте. Медсестра DHA оставлена, она указана на сайте.
5. **Статья 4:** «EYFS, FS1 и FS2: сад или школа» заменена на **«How a British Nursery Works: The EYFS and How It Compares with Montessori»**. Причина: montessori = 52, british curriculum = 48, eyfs = 19, а прямые сравнения ниже порога. FS1/FS2 остались разделом статьи. Montessori описывается нейтрально.

---

## 7. Правила для статей (стандарт, утверждённый пользователем)

- **Язык:** британский английский (licence, centre, organise).
- **Объём:** ~1 650–1 820 символов с пробелами без разметки. Ориентир — до 1 800.
- **Структура:** H1 → H2 → H3. Короткое вступление, практические разделы, список вопросов, блок о Paddington, CTA.
- **Тон:** спокойный и полезный, для широкой аудитории. Без новостей, без страха, без давления.
- **Ключевые слова:** вписаны естественно, 1–3 раза каждое, без переспама. Фразы вроде «winter camp near me» дословно не вставлять, если звучат неестественно.
- **Факты:** только проверенные. О Paddington — **только то, что есть на сайте**. Без цифр из вторичных источников (например, нормативов соотношения воспитателей и детей).
- **Стиль без ИИ-оборотов:** не использовать delve, navigate, landscape, crucial, peace of mind, in today's…, furthermore / moreover, искусственные противопоставления; минимум длинных тире. Отдельного инструмента-«гуманизатора» в среде нет, вычитка делается вручную.
- **Каждая статья начинается со служебного комментария `<!-- SEO BRIEF -->`:** slug, SEO Title (≤ 60), Meta Description (≤ 155), ключевые слова, длина, источники, внутренние ссылки, что сделать перед публикацией.
- **Плейсхолдеры CTA:** `[Book a tour]`, `[Request the programme]`. Привязать при публикации.
- **Конкурентов не критиковать.**

---

## 8. Контент-план (актуальный) и статус

| Дата | № | Статья | Главный запрос (индекс) | Статус | Файл |
|---|---|---|---|---|---|
| Ср 11.11 | 1 | KHDA and Nurseries in Dubai: Licences, Ratings and What to Check | khda rating (40) | **Готова** | `seo-research/articles/2026-11-11_khda-nursery-licence-ratings_en.md` |
| Пт 13.11 | 2 | Winter Camp in Dubai for Toddlers and Preschoolers: How to Choose | winter camp (пик 143) | **Готова** | `seo-research/articles/2026-11-13_winter-camp-toddlers-dubai_en.md` |
| Пн 16.11 | 3 | How to Choose a British Nursery in Dubai: A Guide for New Families | british nursery (27) / nursery in dubai (26) | **Готова** | `seo-research/articles/2026-11-16_choose-british-nursery-dubai_en.md` |
| Ср 18.11 | 4 | How a British Nursery Works: The EYFS and How It Compares with Montessori | eyfs (19) / british curriculum (48) / montessori (52) | **Готова** | `seo-research/articles/2026-11-18_eyfs-british-nursery-vs-montessori_en.md` |
| Пт 20.11 | 5 | Nursery Fees in Dubai 2026–27: What's Included and How to Compare | nursery fees (8,5) | Не написана | — |
| Пн 23.11 | 6 | Baby Nursery in Dubai from 45 Days: A Guide for Parents Going Back to Work | baby nursery (1,5, растёт) | Не написана | — |

### Карта запросов (защита от пересечений)

| Страница | Кластер |
|---|---|
| Главная | nursery dubai, british nursery arjan, nursery near me |
| 1 | khda rating, khda, licensed nursery |
| 2 | winter camp dubai, kids winter camp, winter camp for toddlers, holiday camp |
| 3 | how to choose a british nursery, nursery in dubai, nursery arjan / al barsha south, settling in |
| 4 | eyfs, british curriculum, eyfs vs montessori, fs1, fs2 |
| 5 | nursery fees dubai, nursery cost |
| 6 | baby nursery (near me), infant care, nursery from 45 days |

### Внутренние ссылки

- Статья 3 → главная, анкор «British nursery in Arjan».
- Статья 3 → статья 1, анкор «KHDA».
- Статья 4 → статья 3, анкор «a British nursery» во вступлении.

---

## 9. Тексты готовых статей (актуальные версии)

### `seo-research/articles/2026-11-11_khda-nursery-licence-ratings_en.md`

````markdown
<!--
SEO BRIEF (not for publication)
URL slug: /blog/khda-nursery-licence-ratings
SEO Title: KHDA Nursery Licence & Ratings Explained | Dubai Parent Guide
Meta Description: Is there a KHDA rating for nurseries in Dubai? What a KHDA licence means, how to check it, and the questions worth asking on a nursery tour.
Keywords: khda rating · licensed nursery · nursery in dubai · british nursery · khda
Length: ~1,668 characters with spaces (body text, without markdown)
Before publishing: link [Book a tour]. The Paddington Park section uses only facts shown on the website (British EYFS, Arjan, 45 days to FS2, DHA-certified nurse, open daily 8 AM-7 PM).
Sources: KHDA ECC directory https://web.khda.gov.ae/en/Education-Directory/Early-Childhood-Centres-(ECC) ;
Quality Framework https://web.khda.gov.ae/en/Guides/Education-Providers/General-Guidelines/Quality-Framework-for-Early-Childhood-Care-and-Edu ;
Administrative Resolution No. (13) of 2026 https://dlp.dubai.gov.ae/Legislation%20Reference/2026/Administrative%20Resolution%20No.%20(13)%20of%202026%20Early%20Childhood%20Care%20and%20Education.html ;
No nursery ratings yet https://gulfnews.com/uae/education/dubai-introduces-quality-standards-for-early-childhood-care-through-new-framework-1.500346210
-->

# KHDA and Nurseries in Dubai: Licences, Ratings and What to Check

Choosing a nursery in Dubai often starts with one question: what is its KHDA rating? Here's how KHDA works for nurseries and what you can check yourself.

## What KHDA does for nurseries

KHDA regulates private education in Dubai, including nurseries, which it calls early childhood centres. Every nursery needs a KHDA permit to operate and can welcome children from 45 days to six years old.

## Is there a KHDA rating for nurseries?

Not yet. Schools in Dubai receive public ratings from Outstanding to Very weak, but nurseries don't. Instead, KHDA's Quality Framework for Early Childhood Care and Education, approved in 2026, describes what good early years care looks like. KHDA plans to build future quality reviews on it.

### What "KHDA approved" means

It means the nursery is licensed. It's a good starting point, but it isn't a quality grade.

## How to check a licensed nursery

### Ask for the permit number

Any licensed nursery will share it, and many display it at reception.

### Use the KHDA directory

Look the nursery up on the KHDA website or app, and check that the name and branch match the one you visited.

## Questions to ask on a tour

- What is the staff-to-child ratio for my child's age?
- What training do the teachers have?
- Is there a nurse on site?
- How much time do children spend outdoors?
- How will you share updates about my child's day?

## Visit Paddington Park

Paddington Park is a British nursery in Arjan for children from 45 days to FS2. Come and see our campus and park, meet our team and our DHA-certified nurse, and ask us anything on your list. We're open daily, 8 AM–7 PM.

**[Book a tour]**
````

### `seo-research/articles/2026-11-13_winter-camp-toddlers-dubai_en.md`

````markdown
<!--
SEO BRIEF (not for publication)
URL slug: /blog/winter-camp-dubai-toddlers
SEO Title: Winter Camp Dubai 2026 for Toddlers & Preschoolers | Arjan
Meta Description: Planning the winter break? How to choose a winter camp in Dubai for children under 5, what to ask before booking, and Paddington Park's camp dates.
Keywords: winter camp Dubai, kids winter camp, winter camp for toddlers, nursery winter camp, holiday camp Dubai, winter break Dubai
Length: ~1,697 characters with spaces (body text, without markdown)
Facts: winter break 14 Dec 2026 – 3 Jan 2027, classes resume 4 Jan 2027 (Gulf News: https://gulfnews.com/living-in-uae/education/uae-school-winter-break-2026-2027-calendar-1.500733406).
Paddington Park camp dates, campus and WhatsApp CTA: paddingtonparkdubai.com (checked 10 Nov 2026). Camp ages, hours and prices are not on the site, so they are not stated.
Before publishing: link [Request the programme] to the site's WhatsApp Winter Camp link.
-->

# Winter Camp in Dubai for Toddlers and Preschoolers: How to Choose

The UAE winter break runs from 14 December 2026 to 3 January 2027. For families with young children, that's three weeks to plan. A good winter camp gives little ones a routine, new friends and plenty to do while parents work.

## What makes a good winter camp for under-5s

Most kids winter camp programmes are built for school-age children. Toddlers and preschoolers need something gentler.

### Groups by age

Look for small groups split by age, so a two-year-old isn't keeping pace with six-year-olds.

### A familiar daily rhythm

Meals, rest time and quiet moments matter as much as activities. Ask how the day is structured from drop-off to pick-up.

### Time indoors and outdoors

December is one of the best months for outdoor play in Dubai. A camp with outdoor space and indoor rooms for music, movement and art keeps the day balanced.

## Why a nursery camp suits little ones

A camp run by a nursery is designed around young children from the start. Staff know early years routines, the rooms are set up for small children, and the day moves at a pace toddlers can enjoy.

## Questions to ask before booking

- Which age groups does the camp accept?
- What does a typical day look like?
- Who leads the activities?
- Are meals included?
- Can my child join for one week, or only for the full camp?

## Winter Camp at Paddington Park

For families in Arjan and Al Barsha South, our Winter Camp runs from 14 December 2026 to 4 January 2027. Children spend their days on our purpose-built campus, with a large outdoor park, a theatre, an indoor gym, and space for music and sport.

**[Request the programme]** on WhatsApp, and we'll send you the full schedule.
````

### `seo-research/articles/2026-11-16_choose-british-nursery-dubai_en.md`

````markdown
<!--
SEO BRIEF (not for publication)
URL slug: /blog/how-to-choose-british-nursery-dubai
SEO Title: How to Choose a British Nursery in Dubai | Guide for New Families
Meta Description: New to Dubai? How to choose a British EYFS nursery: curriculum, location, hours, outdoor space and staff, plus tips for settling in after a move.
Keywords: british nursery Dubai, nursery in Dubai, how to choose a nursery, EYFS nursery, nursery Arjan, nursery Al Barsha South, settling in nursery
Length: ~1,724 characters with spaces (body text, without markdown)
Facts: Paddington Park details from paddingtonparkdubai.com (checked 10 Nov 2026). No licence, ratio, fee or settling-in policy claims about Paddington Park.
Internal links: "British nursery in Arjan" -> homepage; "KHDA" -> /blog/khda-nursery-licence-ratings
Before publishing: link [Book a tour].
-->

# How to Choose a British Nursery in Dubai: A Guide for New Families

Moving to Dubai with a young child means finding a nursery quickly, often in a city you're still getting to know. Here's what to compare and how to make the first weeks easier.

## Start with the curriculum

Most British nurseries in Dubai follow the EYFS (Early Years Foundation Stage), the framework used in England for children up to five. It's play-based, and it leads into FS1 and FS2, the first years of British schooling. If your child will join a British school later, an EYFS nursery keeps the path familiar.

## What to compare

### Location and hours

A short drive matters every day. Check opening hours too: they can decide whether a nursery works for two working parents.

### Space indoors and out

Young children learn by moving. Look at the outdoor area, and ask where children play during the hottest months.

### Staff and care

Ask how long teachers have been with the nursery and who looks after health and first aid. It's also worth checking the nursery's details with KHDA.

### Language and values

Some families want Arabic or Islamic studies alongside English. Ask how these are included in the day.

## Settling in after a move

A new country and a new nursery at once is a lot for a small child. Ask about a gradual start, keep mornings predictable, and give your child a few weeks to adjust.

## Paddington Park in Arjan

Paddington Park is a British nursery in Arjan, Al Barsha South, following the EYFS from 45 days to FS2. Our campus has a large outdoor park, a theatre and an indoor gym. Our team includes an Arabic and Islamic studies teacher and a DHA-certified nurse, and we're open daily, 8 AM–7 PM.

**[Book a tour]** and see the campus for yourself.
````

### `seo-research/articles/2026-11-18_eyfs-british-nursery-vs-montessori_en.md`

````markdown
<!--
SEO BRIEF (not for publication)
URL slug: /blog/eyfs-british-nursery-vs-montessori
SEO Title: EYFS vs Montessori: How a British Nursery Works | Dubai Guide
Meta Description: What is the EYFS and how does a British nursery work? The British curriculum for under-5s, how it compares with Montessori, and the path to FS2.
Keywords: EYFS, British curriculum, British nursery, EYFS vs Montessori, Montessori, FS1, FS2, nursery in Dubai
Length: ~1,819 characters with spaces (body text, without markdown)
Facts: EYFS is the statutory early years framework in England (birth to five; 3 prime + 4 specific areas; key person). Montessori described neutrally, no ranking.
Paddington Park details from paddingtonparkdubai.com (checked 10 Nov 2026): EYFS from 45 days to FS2, "Education Starts Here" for ages 3-5, outdoor park, theatre.
Internal links: "a British nursery" (intro) -> /blog/how-to-choose-british-nursery-dubai
Replaces plan article 4 (EYFS, FS1 and FS2).
Before publishing: link [Book a tour].
-->

# How a British Nursery Works: The EYFS and How It Compares with Montessori

Dubai parents can choose between several early years approaches. If you're looking at a British nursery, the key word is EYFS. Here's what it means in practice and how it differs from Montessori.

## What is the EYFS?

The EYFS (Early Years Foundation Stage) is the framework England uses for children from birth to five. It's the base of the British curriculum in early years, in Dubai and in the UK.

### Seven areas of learning

Three are prime areas: communication and language, physical development, and personal, social and emotional development. Four build on them: literacy, maths, understanding the world, and expressive arts and design.

### Learning through play

Children learn through play, with a mix of activities they choose and ones adults guide. Teachers observe each child and plan the next steps around them.

### A key person

Each child has a key person, one adult who knows them well and keeps in touch with parents.

## EYFS vs Montessori

Montessori nurseries often mix ages in one class and use special Montessori materials, and children choose their own work for long stretches. EYFS groups are usually by age, and teachers combine free play with guided activities. Both value independence. They simply organise the day differently.

## From EYFS to FS1 and FS2

In British schools, the EYFS continues into FS1 and FS2. Staying at a nursery that teaches up to FS2 means your child can finish the Foundation Stage in a familiar place before starting school.

## The EYFS at Paddington Park

Paddington Park follows the EYFS from 45 days to FS2. For ages 3 to 5, our "Education Starts Here" programme builds early reading, writing and maths through play, alongside time in our park and theatre.

**[Book a tour]** and see a day at Paddington Park.
````

---

## 10. Брифы оставшихся статей

### Статья 5 — 20.11.2026: Nursery Fees in Dubai 2026–27: What's Included and How to Compare

- **Запросы:** nursery fees (8,5, СЧ), nursery fees dubai, nursery cost dubai, british nursery fees, nursery registration fee. Растут брендовые «… nursery fees».
- **Конкуренция:** высокая (Edarabia «2026 Fees», bestnursery.ae).
- **Идея:** каталоги дают цифры, но не объясняют, что входит в цену. Статья разбирает структуру стоимости и даёт чек-лист для сравнения.
- **Структура:**
  - H1;
  - H2 Typical ranges and why estimates differ;
  - H2 What drives the price;
  - H2 What's included, and what may cost extra (H3 Registration fee and deposit / Meals, uniform, trips, camps / Siblings and payment terms);
  - H2 A checklist to compare nurseries fairly;
  - H2 Paddington Park fees: how to get our price list.
- **SEO Title:** Nursery Fees in Dubai 2026–27: What's Included & How to Compare
- **Meta:** How much does nursery cost in Dubai in 2026–27? Typical ranges, hidden extras to ask about, and a checklist to compare nurseries fairly.
- **CTA:** Request the 2026–27 price list.
- **Ограничения:**
  - Цен Paddington на сайте нет.
  - Диапазоны по рынку только коммерческие и сильно расходятся: ~AED 15–45 тыс. в год для типичного сада, 70–120 тыс. для премиального (Vesta Solutions). Официальной средней KHDA нет.
  - Решение за заказчиком: можно ли указать «from AED …». Без цифр статью лучше строить вокруг «что спросить о цене».

### Статья 6 — 23.11.2026: Baby Nursery in Dubai from 45 Days: A Guide for Parents Going Back to Work

- **Запросы:** baby nursery (1,5), baby nursery near me (+130%), infant care dubai, nursery from 45 days.
- **Конкуренция:** средняя (каталоги со списками «от 45 дней»).
- **Факты:**
  - сады в Дубае принимают детей с 45 дней;
  - декрет в частном секторе ОАЭ — 60 дней: 45 оплачиваются полностью, 15 — наполовину (Federal Decree-Law No. 33 of 2021, ст. 30; Gulf News);
  - у Paddington есть группа 0–1 (Ms Hollie, Baby Class Teacher) и медсестра с сертификатом DHA.
- **Структура:**
  - H1;
  - H2 Maternity leave in the UAE and when babies start nursery;
  - H2 What a good baby room looks like (H3 Ratios and a key person / Sleep, feeding and milk routines / Health: nurse on site, hygiene, sickness policy);
  - H2 Preparing for the first weeks;
  - H2 Our 0–1 room at Paddington Park.
- **SEO Title:** Baby Nursery in Dubai from 45 Days | Infant Care Guide
- **Meta:** Going back to work after maternity leave? What to look for in a Dubai baby nursery from 45 days: ratios, sleep and feeding routines, nurse on site.
- **CTA:** Visit our Baby Room. Book a tour.
- **На сайте о группе 0–1:** эмоциональное благополучие, раннее общение, физическое развитие, любознательность. Нормативы соотношения не указывать.

---

## 11. Открытые вопросы к заказчику

1. Номер лицензии KHDA: показать на сайте и, при желании, добавить в статью 1.
2. Раздел блога на сайте: без него статьи не опубликовать.
3. Winter Camp: возраст участников, часы, программа, цена. Расхождение дат: каникулы до 03.01, лагерь, по сайту, до 04.01.
4. Цены: можно ли публиковать «from AED …» (статья 5).
5. Группа 0–1: соотношение, режим сна и кормления (статья 6).
6. Фото: ясельная группа, парк, театр, спортзал.

## 12. Рекомендации вне контент-плана

1. Главная: укрепить title, H1 и тексты под «nursery dubai», «british nursery», «nursery near me»; FAQ; JSON-LD `ChildCare`.
2. Google Business Profile: категории, фото, отзывы (растёт «baby nursery near me»).
3. Карточки в каталогах: Edarabia, edcare, mdares.ai, Bayut — значительная часть спроса брендовая.
4. EN/AR: `lang`, `hreflang`, полный перевод `/arabic`.
5. Search Console: индексация, sitemap, брендовые запросы.
6. Абсолютную частотность проверить в Keyword Planner (Dubai/UAE, EN/AR, 12 месяцев). Список запросов — в `seo-research/2026-11_seo-strategy_ru.md`, Приложение А.

---

## 13. Источники

- **Google Trends:** https://trends.google.com/trends/explore?geo=AE-DU (выгрузка 10.11.2026). Сводка — `seo-research/data/google-trends_dubai_12m_index.csv`.
- **Сайт:** https://paddingtonparkdubai.com/, https://paddingtonparkdubai.com/arabic
- **KHDA:**
  - справочник садов: https://web.khda.gov.ae/en/Education-Directory/Early-Childhood-Centres-(ECC)
  - Quality Framework: https://web.khda.gov.ae/en/Guides/Education-Providers/General-Guidelines/Quality-Framework-for-Early-Childhood-Care-and-Edu
  - Administrative Resolution No. (13) of 2026: https://dlp.dubai.gov.ae/Legislation%20Reference/2026/Administrative%20Resolution%20No.%20(13)%20of%202026%20Early%20Childhood%20Care%20and%20Education.html
  - рейтингов садам пока нет: https://gulfnews.com/uae/education/dubai-introduces-quality-standards-for-early-childhood-care-through-new-framework-1.500346210 ; https://whichschooladvisor.com/uae/school-news/khda-launches-new-quality-standards-for-nurseries-and-early-years-in-dubai
  - стандарты здоровья и безопасности (январь 2026): https://gulfnews.com/uae/khda-sets-new-health-and-safety-standards-for-dubais-early-childhood-centres-1.500397753
  - проверки соответствия (сентябрь 2026, вторичный источник): https://www.lexismiddleeast.com/news/2026-09-24_9/en
  - домашние группы при садах (апрель 2026): https://www.thenationalnews.com/news/uae/2026/04/12/dubais-education-authority-approves-nursery-style-learning-at-home/ ; https://www.khaleejtimes.com/uae/education/dubai-khda-clarify-nursery-home-learning-rules-no-direct-application-parents
- **Рынок:**
  - https://mediaoffice.ae/en/news/2025/october/02-10/dubai-early-childhood-sector-sees-continued-growth-with-8-percent-rise-in-enrolment
  - https://web.khda.gov.ae/en/About-Us/News/2026/Dubai%E2%80%99s-private-education-sector-expands-with-new
- **Рейд 6.11.2026** (контекст, в статьях не используется):
  - https://www.thenationalnews.com/news/uae/2026/11/06/dubai-police-shut-down-33-illegal-nurseries-operating-in-residential-buildings/
  - https://gulfnews.com/uae/dubai/dubai-police-arrest-34-over-33-illegal-nurseries-putting-children-at-risk-1.500738277
- **Календарь, каникулы 2026–27:** https://gulfnews.com/living-in-uae/education/uae-school-winter-break-2026-2027-calendar-1.500733406
- **Декрет:** https://gulfnews.com/living-in-uae/ask-us/new-uae-labour-law-maternity-leave-extended-to-60-days-1.1637570400069
- **FS1/FS2, правила возраста:** https://www.khaleejtimes.com/uae/explained-uae-updates-fs1-fs2-school-admission-rules-under-new-age-cut-off
- **Цены (коммерческие оценки):** https://vesta-solutions.ae/dubai-nursery-and-childcare-costs-2026-khda-licensed-options-and-monthly-fees/
- **Выбор сада:**
  - https://gulfnews.com/parenting/learning-play/your-ultimate-guide-to-choosing-a-nursery-in-the-uae-1.1586365187729
  - https://www.propertyfinder.ae/blog/how-to-choose-nursery/
- **Лагеря:** https://www.edarabia.com/134489/dubai-winter-camps-kids

---

## 14. Файлы в ветке `claude/paddington-seo-november`

```
seo-research/
├── PADDINGTON_SEO_CONTEXT.md              ← этот файл
├── 2026-11_seo-strategy_ru.md             ← Блок А: стратегия (RU), v2
├── 2026-11_content-plan_en.md             ← Блок Б: план для заказчика (EN), v2 + новая статья 4
├── data/google-trends_dubai_12m_index.csv ← индексы Trends
└── articles/                              ← 4 готовые статьи (EN)
```

### Как перенести в другую ветку

Перенести только папку `seo-research/` из этой ветки в текущую:

```bash
git fetch origin claude/paddington-seo-november
```

```bash
git checkout origin/claude/paddington-seo-november -- seo-research/
```

```bash
git commit -m "Import Paddington SEO research"
```

Чтобы перенести только этот файл, во второй команде замените `seo-research/` на `seo-research/PADDINGTON_SEO_CONTEXT.md`.
