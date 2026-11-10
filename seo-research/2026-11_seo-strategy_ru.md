# Paddington Park Dubai — SEO-стратегия и контент-план (11–24 ноября 2026)

Внутренний документ для анализа и утверждения. Подготовлен 10.11.2026.
Сайт: https://paddingtonparkdubai.com/ · Регион: Дубай (Arjan / Al Barsha South и соседние районы) · Языки: EN, AR.

---

## 0. Ограничения исследования (прочитать первым)

| Что требовалось | Что удалось | Последствие |
|---|---|---|
| Частотность запросов (Keyword Planner, Semrush, Ahrefs) | Нет доступа: API-ключей нет, хосты сервисов закрыты в среде | **Цифр частотности в документе нет.** ВЧ/СЧ/НЧ — экспертная оценка по насыщенности выдачи, помечена как гипотеза |
| Google Trends за 3–9.11.2026 | Доступ к trends.google.com в среде отклонён | Динамику интереса оцениваю по новостному фону недели (подтверждено источниками), а не по индексу Trends |
| Локальная выдача Google AE | Доступен только веб-поиск с геолокацией США | Состав выдачи — ориентир, а не точная позиция в Google.ae |
| Подсказки Google (autocomplete) EN/AR | Хост закрыт | Арабские формулировки собраны по арабской выдаче и арабским каталогам, без autocomplete |

**Что нужно сделать до финального утверждения (30–40 минут):** прогнать список из Приложения А в Google Keyword Planner (бесплатно в аккаунте Google Ads, локация — Dubai или UAE, языки English и Arabic, период — 12 месяцев). Это заменит оценки реальными диапазонами частотности. Если хотите, чтобы я сделал это сам, нужен доступ к trends.google.com и suggestqueries.google.com в настройках среды или выгрузка из Keyword Planner или Semrush.

---

## 1. Выводы по сайту

### 1.1. Продукт и позиционирование (подтверждено сайтом)

- **Формат:** British Early Childhood Centre, программа EYFS, возраст от 45 дней до FS2 (5 лет).
- **Группы:** 0–1, 1–2, 2–3, 3–4, 4–5 лет. Для 3–5 лет есть программа подготовки к школе «Education Starts Here».
- **Главное отличие — кампус.** Здание 29 000 sq ft построено специально под детский центр и имеет овальную архитектуру. Открытая зона — 30 000 sq ft («a park larger than the building»). На территории есть театр, полноразмерный крытый спортзал, музыка, арт и спорт.
- **Команда:** principal Rania Galbraith; учителя по возрастным группам; учитель арабского языка и исламского воспитания (Ms Samar); медсестра с сертификатом DHA; охрана.
- **Режим:** ежедневно с 8:00 до 19:00. Для работающих родителей это сильный аргумент: многие сады работают по полдня.
- **Дополнительно:** каникулярные лагеря. Ближайший — Winter Camp, 14.12.2026–04.01.2027. Также проводятся родительские мероприятия (Parenting Morning с Joys of Childhood, вебинары). Сестринский центр — Paddington ELC в JLT.
- **Адрес:** 54 street, Arjan, Al Barsha South 3. Каналы связи: WhatsApp, форма «Book a tour», «Request the pricelist».
- **Позиционирование одной фразой:** «британский EYFS-сад-кампус с собственным парком, театром и спортзалом в Arjan». Сильная сторона — пространство и «полное детство под одной крышей». Слабее раскрыты доверие (лицензия, рейтинги, отзывы) и цена.

### 1.2. Контент и техническое SEO (подтверждено проверкой страниц)

| Наблюдение | Почему важно для SEO |
|---|---|
| Сайт — одна посадочная страница на Tilda и `/arabic`. **Блога нет** | Пересекаться с уже опубликованными статьями нечему, но для 6 статей нужно сначала создать раздел (Tilda Feeds или отдельные страницы `/blog/...`). Это блокер для плана |
| На сайте **не упоминается лицензия KHDA**: нет ни номера разрешения, ни ссылки на реестр | После рейда 6 ноября (см. п. 3) это главный вопрос доверия. Нужно подтвердить у заказчика номер permit и вывести его на сайт |
| Цены скрыты за «Request the pricelist» | Запросы про стоимость — одни из главных. Без хотя бы диапазона цен или описания того, что входит в стоимость, страница проигрывает каталогам |
| Нет микроразметки (0 блоков JSON-LD) | Нет данных `ChildCare` / `Preschool` / `LocalBusiness`: адреса, часов работы, возрастов. Это потеря для локальной выдачи |
| У `<html>` нет атрибута `lang`, в `<head>` нет `hreflang` | EN- и AR-версии хуже связываются поисковиком. Арабская страница переведена частично: форма записи и часть блоков остались на английском, H2 — 1 против 8 на EN |
| 23 из ~35 изображений без `alt` | Мелкая доработка, но для фотокампуса она полезна |
| `sitemap.xml` отдал 403 на обычный запрос, но открылся через другой клиент. В нём есть страницы, которые отвечают 403 (`summer_camp26`, `page5827…`) | Гипотеза: защита от ботов или неопубликованные страницы. Проверить в Search Console отчёт «Файлы Sitemap» и «Страницы» |
| Брендовый поиск «Paddington Park nursery Arjan» в использованном поиковике не нашёл сайт. Вместо него — каталоги и сестринский Paddington (JLT) | Гипотеза: слабая видимость и путаница брендов. Проверить в Google Search Console по запросам с «paddington» |

> Эти доработки не входят в задачу, код сайта я не трогал. Без пунктов про лицензию, блог и разметку статьи дадут меньше эффекта.

---

## 2. Аудитория, боли и критерии выбора

### 2.1. Сегменты

| # | Сегмент | Ситуация | Главная потребность |
|---|---|---|---|
| 1 | **Экспаты, недавно переехавшие или переезжающие** (UK, Европа, СНГ, Индия, Ближний Восток) | Не знают местную систему (KHDA, FS1/FS2, сроки записи), нет помощи родственников | Быстро найти надёжный сад рядом с новым жильём и мягко адаптировать ребёнка |
| 2 | **Работающие мамы младенцев** | Декрет в частном секторе ОАЭ — 60 дней (45 полностью оплачиваемых и 15 за половину зарплаты) ([Gulf News](https://gulfnews.com/living-in-uae/ask-us/new-uae-labour-law-maternity-leave-extended-to-60-days-1.1637570400069)), то есть ребёнку около 2 месяцев | Безопасный уход за младенцем, длинный день, медсестра |
| 3 | **Местные жители Arjan, Al Barsha South, Dubai Hills, Motor City, Sports City, JVC** | Arjan — относительно новый район, семьи часто ищут сады в соседних кварталах ([Property Finder](https://www.propertyfinder.ae/blog/wp-json/wp/v2/posts/198490)) | Близко к дому, британская программа, понятная цена |
| 4 | **Арабские и мусульманские семьи** (эмиратцы, арабы-экспаты) | Ищут на арабском, ценят арабский язык и исламские ценности в программе | EYFS плюс арабский и исламское воспитание. Ms Samar — готовое отличие |
| 5 | **Родители 2–4-летних перед школой** | Новые правила возраста для FS1/FS2 в ОАЭ на 2026 год ([Khaleej Times](https://www.khaleejtimes.com/uae/explained-uae-updates-fs1-fs2-school-admission-rules-under-new-age-cut-off)), очереди в школы | Решить, где проходить FS1/FS2: в школе или в саду до FS2. Подготовка к школе |

### 2.2. Боли (по разделам родительских гайдов и вопросов в СМИ ОАЭ)

1. **Безопасность и легальность.** 6.11.2026 Dubai Police закрыла 33 нелицензированных сада в жилых зданиях и арестовала 34 человека ([The National](https://www.thenationalnews.com/news/uae/2026/11/06/dubai-police-shut-down-33-illegal-nurseries-operating-in-residential-buildings/), [Khaleej Times](https://www.khaleejtimes.com/uae/dubai-police-shut-33-unlicensed-nurseries-34-operators-arrested), [Gulf News](https://gulfnews.com/uae/dubai/dubai-police-arrest-34-over-33-illegal-nurseries-putting-children-at-risk-1.500738277)). Полиция призывает родителей проверять лицензию до записи.
2. **Непрозрачная цена.** Оценки годовой стоимости в открытых источниках сильно расходятся: от ~AED 15 000 до 45 000+ за типичный сад и до 70–120 тыс. за премиальный. Официальной средней цифры KHDA нет ([Vesta Solutions](https://vesta-solutions.ae/dubai-nursery-and-childcare-costs-2026-khda-licensed-options-and-monthly-fees/)). Это коммерческие оценки, а не официальные данные.
3. **Адаптация после переезда.** Слёзы и регресс после смены страны; эксперты отдельно отмечают «транзитный» характер жизни экспатов в Дубае ([Thrive](https://www.thrive.ae/blog/separation-anxiety-dubai)).
4. **Младенцы и рано заканчивающийся декрет.** Тревога «как оставить 2-месячного ребёнка».
5. **Расписание.** Для работающих родителей часы работы часто решают выбор ([Gulf News](https://gulfnews.com/parenting/learning-play/your-ultimate-guide-to-choosing-a-nursery-in-the-uae-1.1586365187729)).
6. **Сезонные болезни.** Педиатры ОАЭ фиксируют рост гриппа и RSV у детей в холодный сезон, в школах и садах действует правило «24 часа без температуры» ([Khaleej Times](https://www.khaleejtimes.com/lifestyle/health/flu-cases-uae-children-high-till-april-weather-changes), [Gulf News](https://gulfnews.com/uae/flu-alert-dubai-schools-issue-influenza-guidelines-with-24-hour-rule-1.500300431)). В основном это материалы 2022–2025 годов, свежих данных за ноябрь 2026 не нашёл.
7. **Каникулы.** Зимние школьные каникулы 2026–27 — 14.12.2026–03.01.2027, они короче прошлогодних ([Gulf News](https://gulfnews.com/living-in-uae/education/uae-school-winter-break-2026-2027-calendar-1.500733406)). Родителям нужен уход на эти недели.

### 2.3. Вопросы, которые родители задают при выборе (по гайдам Gulf News, The National, Property Finder)

- Есть ли у сада лицензия KHDA и где её проверить? Есть ли медицинская лицензия DHA?
- Каково соотношение воспитателей и детей, какая у них квалификация, часто ли меняется персонал?
- Какая охрана, есть ли CCTV, как устроен вход?
- Где готовят еду и что входит в меню?
- Часы работы, гибкие тарифы (полдня или полный день), сколько стоят дополнительные дни?
- Что входит в стоимость: регистрационный взнос, депозит, форма, питание?
- Можно ли начать в середине года и есть ли лист ожидания?
- Как проходит адаптация (settling-in)?
- Как сад готовит к FS1/FS2 и к британской школе?
- Есть ли арабский язык и исламское воспитание?

Источники: [Gulf News — ultimate guide](https://gulfnews.com/parenting/learning-play/your-ultimate-guide-to-choosing-a-nursery-in-the-uae-1.1586365187729), [The National — more than fees](https://www.thenationalnews.com/business/more-than-just-fees-to-consider-when-enrolling-in-uae-nurseries-1.208065), [Property Finder — how to choose](https://www.propertyfinder.ae/blog/how-to-choose-nursery/).

### 2.4. Рыночный контекст (подтверждено)

- 2024–25: 29 634 ребёнка в 312 частных early childhood centres Дубая, рост на 8% за год ([Dubai Media Office](https://mediaoffice.ae/en/news/2025/october/02-10/dubai-early-childhood-sector-sees-continued-growth-with-8-percent-rise-in-enrolment)).
- 2026–27: открываются ещё 17 ECC, это более 1 700 мест ([KHDA](https://web.khda.gov.ae/en/About-Us/News/2026/Dubai%E2%80%99s-private-education-sector-expands-with-new)).
- **Вывод (интерпретация):** конкуренция за родителя растёт, а нехватка мест, по данным Dubai Media Office, снизилась после пика 2023–24. Значит, решает доверие и ясность предложения, а не наличие свободного места.

---

## 3. Поисковый спрос

### 3.1. Динамика 3–9 ноября 2026 (по новостному фону, не по Google Trends)

| Событие | Даты | Подтверждение | Влияние на спрос (гипотеза) |
|---|---|---|---|
| Рейд на 33 нелегальных сада | 6.11.2026, широкое освещение 6–7.11 | Публикации The National, Khaleej Times, Gulf News, Gulf Today, Emirates 24|7, Dubai Eye | Всплеск запросов о лицензии и безопасности садов, вероятно и на арабском |
| Приближение зимних каникул | 14.12 | Календарь МОЕ/KHDA | Рост запросов «winter camp» с конца ноября. Сезонность типичная, но цифр у меня нет |
| National Day | 2–3.12 | Gulf News | Слабый SEO-повод, лучше для соцсетей |
| Holiday-сезон переездов, январский старт | 4.01.2027 | Календарь | Запросы о поступлении в середине года |

### 3.2. Ключевые запросы

**Обозначения.** Частотность — **оценка**: ВЧ = общегородской коммерческий запрос, СЧ = уточнённый, НЧ = длинный хвост или микрорайон. Конкурентность — по составу выдачи: **В** — первые позиции заняты крупными каталогами (Edarabia, edcare, Bayut, Property Finder, mdares.ai) и СМИ; **С** — каталоги и сайты отдельных садов; **Н** — сильных точных ответов нет. Всё это нужно проверить по Приложению А.

#### Английские запросы

| Запрос | Перевод | Интент | Частотность (оценка) | Конкурентность (по выдаче) | Статья |
|---|---|---|---|---|---|
| nursery in dubai / nurseries in dubai | детский сад в Дубае | коммерч.-навигац. | ВЧ | В | главная (не статья) |
| british nursery dubai | британский сад Дубай | коммерч. | ВЧ–СЧ | В | главная |
| nursery fees dubai | стоимость сада Дубай | коммерч.-инфо | ВЧ | В | №4 |
| how much is nursery in dubai per month | сколько стоит сад в месяц | инфо | СЧ | С | №4 |
| licensed nursery dubai / KHDA nursery | лицензированный сад / KHDA | инфо-коммерч. | СЧ, всплеск в ноябре | С | №1 |
| how to check nursery license dubai | как проверить лицензию сада | инфо | НЧ, всплеск | Н–С | №1 |
| illegal nursery dubai | нелегальный сад Дубай | новостной | НЧ, всплеск | В (СМИ) | №1 (дополнительный) |
| nursery in arjan / nursery arjan dubai | сад в Арджане | коммерч.-локал. | НЧ | Н | №2 + главная |
| nursery al barsha south | сад Аль-Барша Юг | коммерч.-локал. | НЧ–СЧ | С | №2 |
| nursery near dubai hills / motor city / sports city | сад рядом с … | коммерч.-локал. | НЧ | С | №2 |
| baby nursery dubai / infant care dubai | ясли / уход за младенцами | коммерч. | СЧ | С | №5 |
| nursery from 45 days dubai | сад с 45 дней | коммерч. | НЧ | Н–С | №5 |
| winter camp dubai 2026 / winter camps for kids dubai | зимний лагерь Дубай | коммерч., сезон | ВЧ в сезон | В (Edarabia, Kidzapp) | №3 |
| winter camp for toddlers dubai / nursery winter camp | зимний лагерь для малышей | коммерч. | НЧ | С | №3 |
| settling in nursery / nursery settling in period | адаптация в саду | инфо | СЧ (глобально) | С | №6 |
| moving to dubai with a toddler / with kids | переезд в Дубай с малышом | инфо | СЧ | С | №6 |
| nursery admission dubai mid year / january | поступление в сад в середине года | инфо-коммерч. | НЧ | Н | №6 |
| EYFS nursery dubai / what is EYFS | EYFS сад / что такое EYFS | инфо | СЧ | С | резерв |
| FS1 age dubai 2026 / FS1 nursery or school | возраст FS1 / сад или школа | инфо | СЧ (актуально в 2026) | В (СМИ) | резерв |

#### Арабские запросы (собраны по арабской выдаче и каталогам, а не переводом английских)

| Запрос | Перевод | Наблюдение | Частотность (оценка) | Конкурентность | Где использовать |
|---|---|---|---|---|---|
| حضانة في دبي / حضانات دبي | сад / сады в Дубае | Базовая форма. В выдаче арабские версии каталогов (mdares.ai, edcare.ae/ar) | ВЧ | В | `/arabic` |
| حضانة أطفال دبي | детский сад (ясли) Дубай | Типичная разговорная формулировка | ВЧ–СЧ | В | `/arabic` |
| حضانة بريطانية دبي / منهج بريطاني | британский сад / британская программа | Каталоги выделяют EYFS как «المرحلة التأسيسية للسنوات الأولى» | СЧ | С | `/arabic`, AR-версия №2 |
| حضانة مرخصة دبي / هيئة المعرفة | лицензированный сад / KHDA | После рейда полиция дала номер 901 для жалоб (по англоязычным СМИ; арабские публикации отдельно не проверял) | НЧ, всплеск | С | AR-версия №1 (приоритет) |
| رسوم الحضانات في دبي | стоимость садов | В каталогах указаны «تبدأ من» цены | СЧ | В | AR-блок в №4 |
| حضانة للرضع دبي / من عمر 45 يوم | ясли для младенцев / с 45 дней | **Собственная арабская формулировка**: «45 يوماً» встречается в описаниях почти всех арабских каталогов | НЧ–СЧ | С | AR-версия №5 |
| حضانة قريبة مني | сад рядом со мной | Мобильный локальный интент. Проверить в Keyword Planner | СЧ (гипотеза) | — | Google Business Profile |
| حضانة في البرشاء جنوب / أرجان | сад в Аль-Барша Юг / Арджан | Точных ответов в выдаче почти нет | НЧ | Н | `/arabic` |
| حضانة عربي وتربية إسلامية | сад с арабским и исламским воспитанием | Конкуренты (Al-Fajr ECC, AlMayameen, Aga Khan ELC) прямо продают этот блок ([edcare](https://edcare.ae/nurseries/al-fajr-early-childhood-center)) | НЧ | С | `/arabic`, AR-блоки |
| المخيم الشتوي للأطفال دبي | зимний лагерь для детей | Есть госстраница Dubai Municipality о зимнем лагере ([dm.gov.ae](https://www.dm.gov.ae/%D8%A7%D9%86%D8%B7%D9%84%D8%A7%D9%82-%D8%A7%D9%84%D9%85%D8%AE%D9%8A%D9%85-%D8%A7%D9%84%D8%B4%D8%AA%D9%88%D9%8A-%D9%84%D9%84%D8%A3%D8%B7%D9%81%D8%A7%D9%84-%D9%83%D9%85%D8%B3%D8%A7%D8%AD%D8%A9-%D8%A5/)) | СЧ в сезон | С | AR-версия №3 |

**Выводы по арабскому спросу (интерпретация):**
1. Арабская выдача ещё сильнее занята каталогами (mdares.ai, edcare/ar, arabmls). Сайтов отдельных садов с хорошим арабским текстом мало, поэтому полноценная `/arabic` даст конкурентное преимущество.
2. Для арабских семей важнее, чем в EN-сегменте, лицензия, арабский язык и исламское воспитание, а также возраст «من 45 يوماً».
3. В рамках этого плана рекомендую **AR-версии для статей №1 и №5** (опционально №3): у них самый явный собственный арабский спрос.

### 3.3. Конкуренты в выдаче

| Тип | Кто | Что делают | Чем можно выиграть |
|---|---|---|---|
| Каталоги | Edarabia (UAE), edcare.ae, mdares.ai, schoolsclassify, bestnursery.ae | Списки «Best nurseries 2026 fees», страницы каждого сада, лагеря | Карточки в каталогах (см. рекомендации) и точные ответы, которых в каталогах нет: «что входит в цену», «как проверить лицензию» |
| Порталы недвижимости | Property Finder, Bayut (MyBayut), bhomes | Гайды по районам: «nurseries near Arjan / JVC / Al Barsha» | Страница от первого лица о районе Arjan / Al Barsha South: таких гайдов от садов района в выдаче не нашёл |
| Сады-соседи | Dibber Al Barsha South, Chubby Cheeks Arjan, Little Diamond (Arjan), Blossom & Redwood (Motor City), Building Blocks (Motor City), Ladybird & Wonder Years (JVC), Dovecote (Al Barsha South) | Kid's Island, Chubby Cheeks, Thrive ведут блоги об адаптации; Chubby Cheeks публикует спонсорские статьи в Gulf News | Кампус и парк, длинный день до 19:00, FS2, арабский и исламское воспитание, медсестра DHA |
| СМИ | Gulf News, Khaleej Times, The National | Новости и общие гайды | С новостями не конкурировать, ссылаться на них как на источники |

Источники по соседям: [Property Finder — Arjan](https://www.propertyfinder.ae/en/area-insights/dubai/arjan), [dubaischoolhub — Chubby Cheeks Arjan](https://dubaischoolhub.pages.dev/nurseries/chubby-cheeks-early-learning-center-branch-arjan), [Edarabia — Building Blocks Motor City](https://www.edarabia.com/94660/building-blocks-nursery-motorcity-dubai-uae), [Bayut — JVC nurseries](https://bayut.com/mybayut/nurseries-jumeirah-village-circle-dubai).

---

## 4. Контент-план из 6 статей

### 4.1. Приоритеты и календарь

> В этом документе статьи пронумерованы **по приоритету**, а в англоязычном плане для заказчика — **по дате публикации**.

| Приоритет | Дата | Статья | Почему такой приоритет |
|---|---|---|---|
| 1 | **Ср 11.11** | Как проверить лицензию сада в Дубае | Самый свежий повод (рейд 6.11) и закрытие главной боли доверия |
| 3 | **Пт 13.11** | Зимний лагерь для малышей 2026 | Привязка к дате: лагерь 14.12, странице нужно время на индексацию |
| 2 | **Пн 16.11** | Гайд по садам Arjan и Al Barsha South | Максимальная коммерческая релевантность и низкая конкуренция |
| 5 | **Ср 18.11** | Ясли с 45 дней для работающих родителей | Сегмент с высокой конверсией, сильная арабская версия |
| 4 | **Пт 20.11** | Стоимость сада в Дубае 2026–27 | ВЧ-запрос, но высокая конкуренция: нужна подготовка цифр с заказчиком |
| 6 | **Пн 23.11** | Переезд в Дубай с малышом: старт в январе и адаптация | Сезон январского старта (4.01) |

> **Условие запуска:** до 11.11 создать раздел блога, а лучше подтвердить номер KHDA permit. Если блог не готов, сдвиньте весь план, но статью №3 (лагерь) опубликуйте не позже 20.11.

### 4.2. Карта ключевых запросов (защита от пересечений)

| Статья | Главный кластер | Чего статья **не** берёт (отдаёт другой) |
|---|---|---|
| 1 | licensed / KHDA / check license | стоимость → №4; выбор района → №2 |
| 2 | nursery arjan / al barsha south / near X | «nursery in dubai», «british nursery dubai» → главная |
| 3 | winter camp toddlers / nursery winter camp | общий выбор сада |
| 4 | nursery fees / cost / what's included | лицензия → №1 |
| 5 | baby / infant / 45 days | адаптация старших → №6 |
| 6 | moving with toddler / mid-year / settling in | адаптация младенцев → №5 |

Главная страница остаётся целевой для «british nursery arjan» и «nursery in dubai». Каждая статья ссылается на неё анкором из своего кластера, а не точным коммерческим запросом главной.

---

### Статья 1 — 11.11.2026 · Приоритет 1

**Тема:** как родителю проверить лицензию сада в Дубае после рейда на нелегальные сады.
**Рабочий заголовок (H1):** How to Check If a Nursery Is Licensed in Dubai: A Parent's Safety Checklist
**Аудитория и потребность:** все сегменты, особенно недавно переехавшие и арабские семьи. Нужно понять, как отличить легальный сад и какие вопросы задать.
**Ключевые запросы:** licensed nursery dubai · KHDA licensed nursery · how to check nursery license dubai. Дополнительные: KHDA early childhood centre directory, unlicensed nursery dubai, nursery safety checklist, DHA nurse nursery. AR: حضانة مرخصة دبي، التحقق من ترخيص الحضانة، هيئة المعرفة والتنمية البشرية حضانة.
**Частотность и конкурентность:** точных данных нет. Оценка: СЧ/НЧ с ноябрьским всплеском, конкуренция С. На точный вопрос «как проверить» в выдаче — коммерческие страницы про открытие садов, а не ответ для родителей ([uaeexperthub](https://www.uaeexperthub.com/nursery-regulations-licensing-dubai-khda/)).
**Обоснование:** повод подтверждён шестью СМИ (6–7.11.2026), полиция прямо призывает родителей проверять лицензию. Для Paddington Park это способ показать прозрачность.
**Структура:**
- H1 How to Check If a Nursery Is Licensed in Dubai
  - H2 Why licensing matters: what happened in November 2026 *(коротко, со ссылками на СМИ)*
  - H2 Who licenses nurseries in Dubai: KHDA and DHA
  - H2 How to verify a licence in 4 steps
    - H3 Ask for the KHDA permit number
    - H3 Check it in the official KHDA directory
    - H3 Confirm the nurse and clinic approval (DHA)
    - H3 Look for the licence at reception
  - H2 Red flags: signs of an unlicensed nursery
  - H2 10 safety questions to ask on a nursery tour
  - H2 How Paddington Park meets these standards *(permit, DHA-nurse, security, campus)*
  - H2 FAQ
**SEO Title:** How to Check a Nursery Licence in Dubai (KHDA) | Parent Checklist
**Meta Description:** Learn how to verify a nursery's KHDA licence in Dubai, spot red flags of unlicensed childcare and which safety questions to ask on a tour. Free checklist.
**CTA:** «Book a tour — ask us to show our KHDA permit and meet our DHA-certified nurse».
**Риск:** публиковать только после того, как заказчик подтвердит номер permit. Процедуру проверки сверить с сайтом KHDA: в найденных источниках она описана вторично.

---

### Статья 2 — 16.11.2026 · Приоритет 2

**Тема:** гайд по выбору сада для семей Arjan, Al Barsha South и соседних районов.
**H1:** Choosing a Nursery in Arjan & Al Barsha South: A Local Parents' Guide
**Аудитория и потребность:** жители и новосёлы Arjan, Al Barsha South, Dubai Hills, Motor City, Sports City, Miracle Garden area. Нужен сад рядом и понимание, как сравнивать варианты.
**Ключевые запросы:** nursery in arjan · nursery al barsha south · nursery near dubai hills. Дополнительные: nursery near motor city, nursery sports city, british nursery near me, nursery with outdoor play dubai. AR: حضانة في أرجان، حضانة البرشاء جنوب.
**Частотность и конкурентность:** точных данных нет. Оценка: НЧ по каждому району, суммарно кластер значимый; конкуренция Н–С. В выдаче по Arjan — порталы недвижимости и каталоги, страниц садов с районным гайдом не нашёл ([Property Finder](https://www.propertyfinder.ae/blog/wp-json/wp/v2/posts/198490), [Bayut — Al Barsha](https://www.bayut.com/mybayut/best-nurseries-al-barsha)).
**Обоснование:** наиболее коммерческий кластер с самой слабой конкуренцией. Для Arjan есть прямое подтверждение, что семьи ищут сады в соседних районах.
**Структура:**
- H1 Choosing a Nursery in Arjan & Al Barsha South
  - H2 Family life in Arjan: what parents need nearby
  - H2 Commute matters: nurseries within 10 minutes of Arjan *(Al Barsha South, Dubai Hills, Motor City, Sports City — без рейтинга конкурентов)*
  - H2 What to compare: curriculum, hours, outdoor space, ages
    - H3 British EYFS vs other curricula
    - H3 Full-day hours for working parents
    - H3 Outdoor space in Dubai's climate
  - H2 A look inside Paddington Park *(кампус, парк, театр, спортзал)*
  - H2 FAQ
**SEO Title:** Nursery in Arjan & Al Barsha South: A Local Parents' Guide
**Meta Description:** Looking for a nursery in Arjan or Al Barsha South? Compare curriculum, hours and outdoor space, and see what families nearby should look for. Book a tour.
**CTA:** «Book a campus tour — 54 street, Arjan. Open daily 8 AM–7 PM».
**Риск:** каннибализация с главной. Анкор на главную — «British nursery in Arjan», в статье упор на район и сравнение.

---

### Статья 3 — 13.11.2026 · Приоритет 3

**Тема:** как выбрать зимний лагерь для ребёнка до 5 лет в Дубае.
**H1:** Winter Camp for Toddlers in Dubai 2026: How to Choose the Right One
**Аудитория и потребность:** работающие родители детей 1–5 лет. Каникулы 14.12–03.01, нужен уход и занятия.
**Ключевые запросы:** winter camp for toddlers dubai · nursery winter camp dubai 2026. Дополнительные: winter camp dubai december 2026, kids winter camp al barsha, indoor winter activities toddlers dubai. AR: المخيم الشتوي للأطفال دبي.
**Частотность и конкурентность:** точных данных нет. Общий «winter camps dubai» — сезонный ВЧ с высокой конкуренцией (Edarabia «18 Amazing Winter Camps 2026», Kidzapp). Нишевый «for toddlers / nursery» — НЧ, конкуренция С. Большинство найденных карточек конкурентов с датами 2025 ([Edarabia](https://www.edarabia.com/134489/dubai-winter-camps-kids)).
**Обоснование:** у Paddington есть продукт с датой (14.12.2026–04.01.2027) и CTA уже на сайте. Большинство лагерей рассчитаны на детей 5+, а сегмент до 5 лет обслужен хуже. Это вывод по составу выдачи.
**Структура:**
- H1 Winter Camp for Toddlers in Dubai 2026
  - H2 UAE winter break 2026–27: key dates
  - H2 What makes a good camp for under-5s
    - H3 Age-appropriate groups and ratios
    - H3 Indoor + outdoor balance in December weather
    - H3 Familiar routine: meals, naps, hours
  - H2 Questions to ask before booking
  - H2 Paddington Park Winter Camp: dates & daily programme
  - H2 FAQ
**SEO Title:** Winter Camp for Toddlers in Dubai 2026 | Ages 1–5, Arjan
**Meta Description:** Winter break runs 14 Dec–3 Jan. Here's how to choose a winter camp for under-5s in Dubai, what to ask, and how Paddington Park's camp in Arjan works.
**CTA:** «Request the Winter Camp programme on WhatsApp» (ссылка с готовым текстом уже есть на сайте).
**Нужно от заказчика:** программа, возраст, часы, цена или «on request».

---

### Статья 4 — 20.11.2026 · Приоритет 4

**Тема:** сколько стоит сад в Дубае и что входит в стоимость.
**H1:** Nursery Fees in Dubai 2026–27: What's Included and How to Compare
**Аудитория и потребность:** все сегменты, особенно экспаты: им нужно спланировать бюджет и сравнить предложения.
**Ключевые запросы:** nursery fees dubai · how much is nursery in dubai per month. Дополнительные: nursery cost dubai 2026, british nursery fees dubai, nursery registration fee dubai, full day nursery price. AR: رسوم الحضانات في دبي.
**Частотность и конкурентность:** точных данных нет. Оценка: ВЧ, конкуренция В (Edarabia «2026 Fees», bestnursery.ae, консалтинговые блоги).
**Обоснование:** одна из главных болей. На сайте цена скрыта. Выиграть у каталогов можно разбором структуры цены («что спросить про доплаты») с честным диапазоном.
**Структура:**
- H1 Nursery Fees in Dubai 2026–27
  - H2 Typical price ranges and why estimates differ *(со ссылками, без «официальной средней»)*
  - H2 What drives the price: hours, age group, campus, staff
  - H2 What's included — and what may cost extra
    - H3 Registration fee and deposit
    - H3 Meals, uniform, trips, camps
    - H3 Siblings and term payments
  - H2 How to compare nurseries fairly: a checklist
  - H2 Paddington Park fees: how to get our price list
  - H2 FAQ
**SEO Title:** Nursery Fees in Dubai 2026–27: What's Included & How to Compare
**Meta Description:** How much does nursery cost in Dubai in 2026–27? See typical ranges, hidden extras to ask about, and a checklist to compare nurseries fairly.
**CTA:** «Request the 2026–27 price list» (форма или WhatsApp).
**Решение за заказчиком:** публиковать ли собственный диапазон («from AED …»). Без него статья слабее.

---

### Статья 5 — 18.11.2026 · Приоритет 5

**Тема:** ясли с 45 дней: как подготовиться к выходу на работу.
**H1:** Baby Nursery in Dubai from 45 Days: A Guide for Parents Going Back to Work
**Аудитория и потребность:** мамы младенцев, вероятно с декретом 60 дней в частном секторе. Нужны безопасный уход, медсестра и длинный день.
**Ключевые запросы:** baby nursery dubai · infant care dubai · nursery from 45 days dubai. Дополнительные: nursery for newborns dubai, baby room nursery, maternity leave uae nursery, nursing breaks. AR: حضانة للرضع دبي، حضانة من عمر 45 يوم.
**Частотность и конкурентность:** точных данных нет. Оценка: СЧ/НЧ, конкуренция С. В выдаче — каталоги со списками «от 45 дней», экспертных материалов для родителей мало ([Bayut — working parents](https://www.bayut.com/mybayut/nurseries-dubai-business-hubs-working-parents/)).
**Обоснование:** 45 дней — минимальный возраст приёма в Дубае, а декрет в частном секторе — 60 дней. Отсюда острая и конкретная потребность. У Paddington отдельная группа 0–1 и медсестра DHA.
**Структура:**
- H1 Baby Nursery in Dubai from 45 Days
  - H2 Maternity leave in the UAE and when babies start nursery *(ссылки на закон, без юридических советов)*
  - H2 What a good baby room looks like
    - H3 Ratios and key person
    - H3 Sleep, feeding and milk routines
    - H3 Health: nurse on site, hygiene, sickness policy
  - H2 Preparing your baby (and yourself) for the first weeks
  - H2 Our 0–1 programme at Paddington Park
  - H2 FAQ
**SEO Title:** Baby Nursery in Dubai from 45 Days | Infant Care Guide
**Meta Description:** Going back to work after maternity leave? What to look for in a Dubai baby nursery from 45 days: ratios, sleep and feeding routines, nurse on site.
**CTA:** «Visit our Baby Room — book a tour».
**Плюс:** AR-версия, потому что есть собственный арабский спрос.

---

### Статья 6 — 23.11.2026 · Приоритет 6

**Тема:** переезд в Дубай с ребёнком 1–4 лет: как начать сад в январе и пройти адаптацию.
**H1:** Moving to Dubai with a Toddler: Starting Nursery in January and Settling In
**Аудитория и потребность:** экспаты, которые переезжают на зимних каникулах или к январскому старту (4.01.2027). Нужны сроки, документы и план адаптации.
**Ключевые запросы:** moving to dubai with a toddler · nursery admission dubai january · settling in nursery. Дополнительные: mid-year nursery enrolment dubai, documents for nursery admission dubai, separation anxiety nursery, expat kids adjusting dubai.
**Частотность и конкурентность:** точных данных нет. Оценка: СЧ/НЧ, конкуренция С. Темы адаптации разбирают блоги садов и Thrive, а связку «переезд + январь + адаптация» в выдаче не нашёл ([Thrive](https://www.thrive.ae/blog/separation-anxiety-dubai), [Kid's Island](https://kidsislandnursery.squarespace.com/blog/tag/Expat)).
**Обоснование:** экспаты — приоритетный сегмент в брифе. Январь — естественная точка входа, а Dubai Media Office сообщает о снижении нехватки мест, так что старт в середине года реален.
**Структура:**
- H1 Moving to Dubai with a Toddler
  - H2 Can you start nursery mid-year in Dubai?
  - H2 Timeline: what to do 6, 4 and 2 weeks before the move
  - H2 Documents nurseries usually ask for *(сверить с заказчиком)*
  - H2 Settling in after a big move
    - H3 Why relocation makes settling harder
    - H3 A gradual start: what a settling-in week looks like
    - H3 Signs your child is adjusting
  - H2 How Paddington Park supports new families
  - H2 FAQ
**SEO Title:** Moving to Dubai with a Toddler: Starting Nursery in January
**Meta Description:** Relocating to Dubai? How to enrol your toddler in nursery mid-year, which documents to prepare, and how to make settling in easier after the move.
**CTA:** «Moving soon? Book a video call or tour and reserve a January place».
**Нужно от заказчика:** порядок адаптации, список документов, есть ли места на январь.

---

### 4.3. Резервные темы (если какая-то не пройдёт согласование)

1. **FS1 & FS2 in a nursery or at school? New UAE age rules explained** — актуально на 2026 год, к тому же Paddington ведёт до FS2. Риск: сильные СМИ в выдаче.
2. **What is EYFS? A guide for Dubai parents** — стабильный инфо-запрос, низкая конверсия.
3. **Nursery & flu season in Dubai: when to keep your child home** — сезонно, но свежих данных за ноябрь 2026 нет.

---

## 5. Рекомендации вне контент-плана (кратко)

1. Вывести на сайт номер KHDA permit и ссылку на реестр, лицензию DHA для медпункта. Обязательно до публикации статьи №1.
2. Создать раздел блога и FAQ-блок на главной.
3. Добавить JSON-LD `ChildCare` / `Preschool` (адрес, часы, возраст), `FAQPage` в статьях, `Event` для лагерей.
4. Привести в порядок EN/AR: атрибут `lang`, `hreflang` в `<head>`, полный перевод `/arabic`, включая форму.
5. Проверить в Google Search Console индексацию, sitemap и брендовые запросы с «paddington».
6. Google Business Profile: категории «Nursery school», «Preschool», «Day care center», фото кампуса, отзывы.
7. Карточки в каталогах (Edarabia, edcare, mdares.ai, Bayut schools): они занимают топ, поэтому присутствие там — тоже часть SEO.

---

## Приложение А. Список для проверки в Google Keyword Planner

Настройки: Location — Dubai (и отдельно United Arab Emirates); Language — English, затем Arabic; Date range — последние 12 месяцев (ноябрь 2025 – октябрь 2026).

```
nursery in dubai
nurseries in dubai
british nursery dubai
nursery fees dubai
how much is nursery in dubai
licensed nursery dubai
khda nursery
how to check nursery license dubai
nursery in arjan
nursery arjan dubai
nursery al barsha south
nursery near dubai hills
nursery motor city
baby nursery dubai
infant care dubai
nursery from 45 days
winter camp dubai
winter camp for toddlers dubai
nursery winter camp
settling in nursery
moving to dubai with toddler
nursery admission dubai
eyfs nursery dubai
fs1 age dubai
حضانة في دبي
حضانات دبي
حضانة أطفال دبي
حضانة بريطانية دبي
حضانة مرخصة
رسوم الحضانات في دبي
حضانة للرضع
حضانة قريبة مني
حضانة البرشاء جنوب
حضانة أرجان
المخيم الشتوي للأطفال دبي
```

После выгрузки нужно: заменить в таблицах 3.2 оценки на диапазоны; при необходимости поменять местами статьи №4 и №2 по приоритету, если «nursery fees dubai» окажется кратно выше локальных запросов.

## Приложение Б. Источники

- Сайт заказчика: https://paddingtonparkdubai.com/, https://paddingtonparkdubai.com/arabic, https://paddingtonparkdubai.com/pm24may (проверено 10.11.2026)
- Рейд на нелегальные сады, 6.11.2026: [The National](https://www.thenationalnews.com/news/uae/2026/11/06/dubai-police-shut-down-33-illegal-nurseries-operating-in-residential-buildings/), [Gulf News](https://gulfnews.com/uae/dubai/dubai-police-arrest-34-over-33-illegal-nurseries-putting-children-at-risk-1.500738277), [Khaleej Times](https://www.khaleejtimes.com/uae/dubai-police-shut-33-unlicensed-nurseries-34-operators-arrested), [Gulf Today](https://www.gulftoday.ae/news/2026/11/06/dubai-police-shut-down-33-unlicensed-nurseries-arrests-34-suspects)
- Рынок: [Dubai Media Office, 10.2025](https://mediaoffice.ae/en/news/2025/october/02-10/dubai-early-childhood-sector-sees-continued-growth-with-8-percent-rise-in-enrolment), [KHDA, 08.2026](https://web.khda.gov.ae/en/About-Us/News/2026/Dubai%E2%80%99s-private-education-sector-expands-with-new)
- Календарь: [Gulf News — winter break 2026–27](https://gulfnews.com/living-in-uae/education/uae-school-winter-break-2026-2027-calendar-1.500733406)
- Декрет: [Gulf News — 60 days](https://gulfnews.com/living-in-uae/ask-us/new-uae-labour-law-maternity-leave-extended-to-60-days-1.1637570400069)
- FS1/FS2: [Khaleej Times](https://www.khaleejtimes.com/uae/explained-uae-updates-fs1-fs2-school-admission-rules-under-new-age-cut-off)
- Стоимость (коммерческие оценки): [Vesta Solutions](https://vesta-solutions.ae/dubai-nursery-and-childcare-costs-2026-khda-licensed-options-and-monthly-fees/), [Edarabia — UK EYFS nurseries](https://www.edarabia.com/nurseries/uk-eyfs/)
- Выбор сада: [Gulf News](https://gulfnews.com/parenting/learning-play/your-ultimate-guide-to-choosing-a-nursery-in-the-uae-1.1586365187729), [The National](https://www.thenationalnews.com/business/more-than-just-fees-to-consider-when-enrolling-in-uae-nurseries-1.208065), [Property Finder](https://www.propertyfinder.ae/blog/how-to-choose-nursery/)
- Здоровье: [Khaleej Times — flu till April](https://www.khaleejtimes.com/lifestyle/health/flu-cases-uae-children-high-till-april-weather-changes), [Gulf News — 24-hour rule](https://gulfnews.com/uae/flu-alert-dubai-schools-issue-influenza-guidelines-with-24-hour-rule-1.500300431)
- Лагеря: [Edarabia — Dubai winter camps 2026](https://www.edarabia.com/134489/dubai-winter-camps-kids)
- Арабский сегмент: [edcare — Al-Fajr ECC](https://edcare.ae/nurseries/al-fajr-early-childhood-center), [mdares.ai — British nurseries (AR)](https://mdares.ai/ae-ar/schools/british-rose-nursery-dubai)
