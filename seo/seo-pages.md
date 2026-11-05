# Внутренняя оптимизация по страницам: paddingtonparkdubai.com

Актуально на 5 ноября 2026. Ниже по страницам: что поменять, где это сделать в Tilda и что вписать.

**Файлы в этой папке:**
- `blocks/new/` — новый код HTML-блоков (T123). Файл заменяет весь код блока: «Контент» → выделить всё → вставить. Имя файла: `<язык>-<порядковый номер блока на странице>-rec<id блока>.html`. Блок с формой «COME AND SEE PADDINGTON PARK» (стандартный, между блоками 2 и 3) не трогать.
- `blocks/no-image-compression/` — те же SEO-правки, но со старыми адресами картинок. Это запасной вариант, если в предпросмотре пропадут фото.
- `blocks/original/` — текущий код блоков для отката.
- `head/home-en.html`, `head/arabic.html` — код для «Настройки страницы → Ещё → HTML-код для вставки внутрь HEAD».
- Рабочий файл с кнопками копирования: https://claude.ai/artifact/HbE1zzDgYogeoDBEbho7rn

Обозначения: 🔴 — обязательно, 🟡 — желательно, ⚪ — проверить.

---

## 1. Главная (EN) — `/`

**Title и Description** (Настройки страницы → SEO): ⚪ оставить как есть, только проверить.
- Title: `Paddington Park | British Nursery in Arjan, Dubai` (49 символов)
- Description: `British EYFS nursery in Arjan, Al Barsha South. Ages 45 days to FS2 on a purpose-built 29,000 sq ft campus with park, theatre and gym. Book a tour.` (148 символов)

**Заголовки** (уже есть в новом коде блоков 1, 2 и 3):
- [ ] 🔴 Один H1 на первом экране: `Paddington Park / British Nursery` (было оформлено обычным текстом: «Paddington Park ECC / British Curriculum»)
- [ ] 🔴 5 заголовков возрастных вкладок перевести из H1 в H2: The very beginning, First steps in social development, Growing confidence, Foundations of learning, Confidently prepared for school
- [ ] 🟡 H2 для разделов «OUR SPACE: Purpose-Built for Children» и «What are the most exciting things about Paddington Park?»
- [ ] 🟡 «British Curriculum: EYFS» — в Zero Block, оформлен обычным текстом. Можно поставить тег H2 в настройках элемента. В новый код это не вошло

**Alt у изображений** (уже есть в новом коде блоков): 🔴 у 37 из 57 картинок alt не было, у половины галереи alt не соответствует снимку.

| № | Где | Было | Новый alt |
|---|---|---|---|
| 1 | Шапка: логотип (2 шт.) | пусто | Paddington Park nursery logo |
| 2 | Галерея: здание | пусто | Paddington Park nursery building in Arjan, Al Barsha South |
| 3 | Галерея | Warm and calming nursery classroom environment at Paddington Park Dubai | Classroom with a sensory table and floor cushions at Paddington Park nursery in Arjan |
| 4 | Галерея | EYFS classroom with natural wooden furniture at Paddington Park nursery Dubai | EYFS classroom with wooden tables and a play house at Paddington Park, Dubai |
| 5 | Галерея | Outdoor play area with natural materials at Paddington Park EYFS nursery Dubai | Wooden swing set in the shaded sand play area at Paddington Park nursery |
| 6 | Галерея | FS1 children learning through play at Paddington Park Early Childhood Centre | Cosy reading house with floor cushions in a Paddington Park classroom |
| 7 | Галерея | Children engaged in play-based learning at Paddington Park British nursery | Bright nursery classroom with natural wooden furniture at Paddington Park Early Childhood Centre |
| 8 | Галерея | Forest school inspired outdoor learning at Paddington Park nursery in Dubai | Sand garden with stepping stones and an olive tree at Paddington Park, Arjan |
| 9 | Галерея | Montessori-inspired preschool classroom at Paddington Park Arjan Dubai | Classroom with child-sized tables and chairs at Paddington Park nursery, Dubai |
| 10 | Галерея | Bright and spacious outdoor area for preschool children at Paddington Park | Outdoor wooden deck and grass under shade sails at Paddington Park |
| 11 | Галерея | Baby room designed for comfort and early development at Paddington Park nursery | Toddler playroom with a wooden train set and a play tent at Paddington Park |
| 12 | Галерея | Nature-inspired playground at Paddington Park Early Childhood Centre Dubai | Wooden play tower with a slide in the Paddington Park outdoor playground |
| 13 | Галерея | Parent coworking area inside Paddington Park nursery in Arjan Dubai | Parent meeting room at Paddington Park nursery in Arjan |
| 14 | Галерея | Family-friendly early childhood centre with parent facilities in Dubai | Corridor with a nature mural at Paddington Park Early Childhood Centre |
| 15 | Галерея | Children performing in the theatre hall at Paddington Park nursery Dubai | Multipurpose theatre hall at Paddington Park nursery, Dubai |
| 16 | Галерея | Child-friendly medical and wellness room at Paddington Park Early Childhood Centre | Nurse's medical room at Paddington Park nursery |
| 17 | Галерея | Indoor gym for early childhood physical development at Paddington Park | Indoor gym for physical development at Paddington Park, Arjan |
| 18 | Галерея | Children participating in music and movement classes at Paddington Park | Music room with a piano at Paddington Park nursery |
| 19 | Галерея | Children enjoying water play at Paddington Park nursery and daycare in Arjan | Water feature and palm trees at the Paddington Park campus |
| 20 | Галерея | Premium early childhood campus… (7.jpg) | Climbing frame with a climbing wall in the outdoor park at Paddington Park |
| 21 | Галерея | Premium early childhood campus… (9.jpg) | Curved glass corridor overlooking the inner park at Paddington Park |
| 22 | Вкладка 0–1 | пусто | Baby in the Paddington Park uniform, baby room (0–1 years) |
| 23 | Вкладка 1–2 | пусто | Toddler at Paddington Park nursery, 1–2 years group |
| 24 | Вкладка 2–3 | пусто | Child in the 2–3 years toddler class at Paddington Park |
| 25 | Вкладка 3–4 | пусто | FS1 child (3–4 years) at Paddington Park British nursery |
| 26 | Вкладка 4–5 | пусто | FS2 child (4–5 years) at Paddington Park, ready for school |
| 27 | Кэмп: осень | пусто | Autumn Camp for children at Paddington Park, Arjan |
| 28 | Кэмп: зима | пусто | Winter Camp for children at Paddington Park, Arjan |
| 29 | Кэмп: весна | пусто | Spring Camp for children at Paddington Park, Arjan |
| 30 | Кэмп: лето | пусто | Summer Camp for children at Paddington Park, Arjan |
| 31 | Подвал: логотип | «Links» | Paddington Park logo |
| 32 | Подвал: иконка WhatsApp | пусто | WhatsApp |

**Контент:**
- [ ] 🔴 Блок кэмпов: ближайший — Winter Camp (14 декабря 2026 – 4 января 2027), Autumn Camp перенести в конец с «October 2027 · dates to be announced» (уже в коде блока 4)
- [ ] 🟡 Выбрать одно официальное название (сейчас встречаются «Paddington Park ECC», «Early Childhood Centre», «British Early Childhood Centre», «Early Learning Centre») и один формат адреса: в шапке «dubai, Al Barsha South 3, Arjan», в подвале «54 street Arjan, Al Barsha South 3, Dubai, UAE»
- [ ] 🟡 Добавить блок отзывов родителей (из GBP) и FAQ
- [ ] 🟡 Решить вопрос с ценами: сейчас 5 кнопок «Request the pricelist» и ни одной цифры

**Скорость** (в коде блоков 1–4): 🔴 главная весит 24,5 МБ на мобильном. Картинки переведены на сжатый WebP, по оценке 25 проверенных фото станут весить около 1,7 МБ вместо 16 МБ. После вставки кода проверить в предпросмотре, что все фото на месте.

**HTML-код для HEAD** (Настройки страницы → Ещё → HTML-код для вставки внутрь HEAD):
- [ ] 🔴 hreflang EN↔AR
- [ ] 🟡 Разметка Schema `ChildCare` / `Preschool`: название, адрес, телефон, email, часы работы, Instagram. Сверить название, дни работы и адрес
- Код — в рабочем файле, шаг 4

---

## 2. Арабская версия — `/arabic`

**Title и Description:** ⚪ оставить.
- Title: `بادينغتون بارك | حضانة بريطانية في أرجان، دبي`
- Description: `حضانة بمنهج EYFS البريطاني في أرجان، البرشاء جنوب. من عمر 45 يوماً حتى FS2 في حرم مبني خصيصاً بمساحة 29,000 قدم مربع مع حديقة ومسرح وصالة رياضية. احجزوا جولة.`

**Заголовки** (в новом коде блоков 1–3):
- [ ] 🔴 Один H1: `بادينغتون بارك / حضانة بريطانية` (было: «بادينغتون بارك / منهج بريطاني»)
- [ ] 🔴 5 заголовков возрастных вкладок перевести из H1 в H2
- [ ] 🟡 H2 для «مساحتنا: مبنية خصيصاً للأطفال» и «ما الذي يميّز بادينغتون بارك؟»

**Alt на арабском** (в новом коде блоков): 🔴 сейчас у галереи английские alt, у остальных картинок alt нет.

| № | Где | Было | Новый alt |
|---|---|---|---|
| 1 | Шапка: логотип (2 шт.) | пусто | شعار حضانة بادينغتون بارك |
| 2 | Галерея: здание | пусто | مبنى حضانة بادينغتون بارك في أرجان، البرشاء جنوب |
| 3 | Галерея | англ. alt | فصل دراسي مع طاولة حسية ووسائد أرضية في حضانة بادينغتون بارك في أرجان |
| 4 | Галерея | англ. alt | فصل EYFS بطاولات خشبية وبيت لعب في بادينغتون بارك، دبي |
| 5 | Галерея | англ. alt | أرجوحة خشبية في منطقة لعب رملية مظللة في حضانة بادينغتون بارك |
| 6 | Галерея | англ. alt | ركن قراءة مريح بوسائد أرضية في أحد فصول بادينغتون بارك |
| 7 | Галерея | англ. alt | فصل مشرق بأثاث خشبي طبيعي في مركز بادينغتون بارك للطفولة المبكرة |
| 8 | Галерея | англ. alt | حديقة رملية بممر من الحجارة وشجرة زيتون في بادينغتون بارك، أرجان |
| 9 | Галерея | англ. alt | فصل بطاولات وكراسٍ بمقاس الأطفال في حضانة بادينغتون بارك، دبي |
| 10 | Галерея | англ. alt | منصة خشبية وعشب تحت المظلات في الحديقة الخارجية في بادينغتون بارك |
| 11 | Галерея | англ. alt | غرفة لعب للأطفال الصغار مع قطار خشبي وخيمة لعب في بادينغتون بارك |
| 12 | Галерея | англ. alt | برج لعب خشبي مع زحليقة في ساحة اللعب الخارجية في بادينغتون بارك |
| 13 | Галерея | англ. alt | غرفة اجتماعات أولياء الأمور في حضانة بادينغتون بارك في أرجان |
| 14 | Галерея | англ. alt | ممر بجدارية مستوحاة من الطبيعة في مركز بادينغتون بارك للطفولة المبكرة |
| 15 | Галерея | англ. alt | مسرح متعدد الاستخدامات في حضانة بادينغتون بارك، دبي |
| 16 | Галерея | англ. alt | غرفة الممرضة الطبية في حضانة بادينغتون بارك |
| 17 | Галерея | англ. alt | صالة رياضية داخلية للنمو البدني في بادينغتون بارك، أرجان |
| 18 | Галерея | англ. alt | غرفة موسيقى مع بيانو في حضانة بادينغتون بارك |
| 19 | Галерея | англ. alt | نافورة مياه وأشجار نخيل في حرم بادينغتون بارك |
| 20 | Галерея | англ. alt | إطار تسلق مع جدار تسلق في الحديقة الخارجية في بادينغتون بارك |
| 21 | Галерея | англ. alt | ممر زجاجي منحنٍ يطل على الحديقة الداخلية في بادينغتون بارك |
| 22 | Вкладка 0–1 | пусто | رضيع بزي بادينغتون بارك، غرفة الرضع (0–1 سنة) |
| 23 | Вкладка 1–2 | пусто | طفل صغير في حضانة بادينغتون بارك، مجموعة 1–2 سنة |
| 24 | Вкладка 2–3 | пусто | طفل في فصل 2–3 سنوات في بادينغتون بارك |
| 25 | Вкладка 3–4 | пусто | طفل في FS1 (3–4 سنوات) في حضانة بادينغتون بارك البريطانية |
| 26 | Вкладка 4–5 | пусто | طفل في FS2 (4–5 سنوات) في بادينغتون بارك، جاهز للمدرسة |
| 27 | Кэмп: осень | пусто | مخيم الخريف للأطفال في بادينغتون بارك، أرجان |
| 28 | Кэмп: зима | пусто | مخيم الشتاء للأطفال في بادينغتون بارك، أرجان |
| 29 | Кэмп: весна | пусто | مخيم الربيع للأطفال في بادينغتون بارك، أرجان |
| 30 | Кэмп: лето | пусто | المخيم الصيفي للأطفال في بادينغتون بارك، أرجان |
| 31 | Подвал: логотип | «Links» | شعار بادينغتون بارك |
| 32 | Подвал: иконка WhatsApp | пусто | WhatsApp |

**Прочее:**
- [ ] 🔴 Кэмпы: ближайший — مخيم الشتاء, осенний в конце (код блока 4)
- [ ] 🔴 HEAD: только hreflang (код в рабочем файле, шаг 4)
- [ ] ⚪ В теге `<html>` нет `lang="ar"` и `dir="rtl"`. Google определяет язык по тексту, поэтому на позиции это почти не влияет. Если в настройках страницы в Tilda есть поле языка, укажите арабский
- [ ] ⚪ Форма «COME AND SEE PADDINGTON PARK» на арабской странице осталась на английском. Перевести

---

## 3. `/summer_camp26` — Summer Camp 2026

- [ ] 🔴 Кэмп закончился, а страница есть в sitemap. Снять с публикации или включить «Запретить индексацию»
- [ ] 🟡 Вместо неё сделать постоянные страницы `/holiday-camps` и `/winter-camp` без года в адресе и обновлять на них даты. Для страницы Winter Camp:
  - Title: `Winter Camp for Kids in Arjan, Dubai | Paddington Park`
  - Description: `Winter Camp at Paddington Park, Arjan: 14 December 2026 – 4 January 2027. Park, gym, theatre and a DHA-certified nurse on campus. Request the programme.`
  - H1: `Winter Camp 2026/27 at Paddington Park`
- Сейчас у страницы: title «SUMMER CAMP 2026» капслоком, пустой description, ни одного заголовка H1–H3, 4 из 5 картинок без alt

---

## 4. `/privacypolicy` и `/termsofuse`

- [ ] 🟡 Добавить description (сейчас пусто):
  - Privacy Policy: `Privacy policy of Paddington Park Early Childhood Centre, Arjan, Dubai.`
  - Terms of Use: `Terms of use of the Paddington Park Early Childhood Centre website.`

---

## 5. Страницы, которые снять с публикации

Как снять: список страниц → страница → Ещё → «Снять с публикации».

**Обязательно** — эти страницы есть в sitemap:
- [ ] 🔴 `page58275589.html` — шаблон «Basic business page», в description текст шаблона «Describe your business…»
- [ ] 🔴 `page58276129.html` — шаблон «Basic business page»
- [ ] 🔴 `page58208851.html` — шаблон «Basic business template»
- [ ] 🔴 `/pm24may` — прошедшее событие, в description текст из шаблона «Template of a painting master class…»
- [ ] 🔴 `/main_old` — старая копия главной. На ней стоит noindex, но в robots.txt она закрыта, поэтому Google этот noindex не видит

**Если не используются в рекламе, рассылках или QR-кодах.** Сейчас они закрыты в robots.txt, но открываются по прямой ссылке. Если страница нужна, оставьте её и включите «Запретить индексацию»:
- [ ] `/join` · `/survey` · `/survey-for-campaign` · `/parent-survey` · `/parenting-mk` · `/mildanair_webinar`
- [ ] `/parentingmorning-31-may` · `/webinar-4june` · `/webinar5thdec` · `/sally_albeer` · `/qudrability1may`
- [ ] `/sleep` (тему стоит переписать в статью блога) · `/schedule` · `/ppproject` · `/bechcentre` · `/old_arabic`
- [ ] `/british-early-childhood-centre` · `/lp-eng-thank-you`

После снятия в `https://paddingtonparkdubai.com/sitemap.xml` должны остаться только `/`, `/arabic`, `/privacypolicy`, `/termsofuse`, а потом и новые страницы.

---

## 6. Новые страницы (план, месяцы 2–3)

| URL | Title | H1 | Главный запрос |
|---|---|---|---|
| `/baby-room` | Baby Room from 45 Days in Arjan, Dubai \| Paddington Park | Baby Room: Nursery from 45 Days | baby nursery Dubai 45 days |
| `/toddlers` | Toddler Nursery in Arjan, Dubai (1–3 years) \| Paddington Park | Toddler Rooms for Ages 1–3 | toddler nursery Arjan |
| `/foundation-stage` | FS1 & FS2 in Arjan, Dubai \| Paddington Park | Foundation Stage: FS1 and FS2 | FS1 FS2 nursery Dubai |
| `/eyfs-curriculum` | EYFS Curriculum at Paddington Park, Dubai | The British EYFS Curriculum | EYFS curriculum Dubai |
| `/fees` | Nursery Fees in Arjan, Dubai \| Paddington Park | Fees and What's Included | nursery fees Arjan |
| `/admissions` | Nursery Admissions in Dubai \| Paddington Park | How to Join Paddington Park | nursery admission Dubai |
| `/campus` | Our Campus: Park, Theatre and Gym \| Paddington Park | A Nursery with a Park Larger than the Building | nursery with outdoor play Dubai |
| `/location` | Nursery near Al Barsha South & JVC \| Paddington Park | How to Find Us in Arjan | nursery near JVC |
| `/ru/blog/...` | см. файл с контент-планом | — | — |

Шаблон каждой страницы: один H1 с запросом, 400–900 слов текста, фото с alt, FAQ, форма «Book a tour», блок с адресом, ссылка с главной.

---

## 7. Настройки всего сайта

- [ ] 🔴 Редирект `www.paddingtonparkdubai.com` → `paddingtonparkdubai.com` (сейчас www отдаёт копию сайта с кодом 200)
- [ ] ⚪ Проверить, что `http://` перенаправляет на `https://`
- [ ] 🟡 Своя страница 404 (сейчас показывается стандартная заглушка Tilda): Настройки сайта → Ещё → Страница 404
- [ ] 🔴 Google Search Console: подтвердить домен и отправить sitemap
- [ ] 🟡 В формах Tilda передавать referrer, чтобы органика не попадала в дашборде в «Не определено»
- [ ] 🔴 Перевыпустить API-ключи Tilda
