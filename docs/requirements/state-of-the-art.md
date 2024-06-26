# Аналіз предметної області

## Вступ

Цей документ містить аналіз області, пов'язаної з проєктом. В ньому розглядаються ключові етапи життєвого циклу програмного забезпечення, включаючи приклади різних методологій розробки, разом з їх перевагами і недоліками. Також надається порівняльний аналіз існуючих систем управління проєктами для виявлення можливих прогалин та можливостей для вдосконалення, а також визначається, які характеристики слід реалізувати в нашій системі.

### Зміст
* [Основні терміни](#основні-терміни), які допоможуть користувачеві краще розібратися у структурі систем управління проєктами.
* [Різноманітні підходи та методи вирішення завдань](#підходи-та-методи-вирішення-завдань) у сфері управління проєктами.
* [Порівняльна характеристика існуючих інструментів для розв'язання завдань](#порівняльна-характеристика-існуючих-засобів-вирішення-завдання), де користувач може ознайомитися з усіма перевагами та недоліками систем.
* [Висновки](#висновки).
* [Посилання](#посилання).

## Основні терміни

[Проєкт (Project)](https://uk.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D1%94%D0%BA%D1%82) — це набір дій та завдань, спрямованих на досягнення конкретної мети та створення нового продукту. Проєкт має обмеження в часі, бюджеті та ресурсах, і має чітко визначений початок і кінець. Успіх проєкту вимірюється тим, наскільки він відповідає поставленим цілям і вимогам, а також чи був виконаний в межах обмежень.

[Система управління проєктами (Project management software, PMS)](https://xn--90aamhd6acpq0s.xn--j1amh/teoriya/sistemi-upravl-nnya-proektami/) — це програма або онлайн-сервіс, який допомагає планувати завдання, складати розклад, розподіляти ресурси, відстежувати ефективність роботи кожного фахівця та всієї команди під час розробки проєкту.

[Модель (Model)](https://elearning.sumdu.edu.ua/free_content/lectured:de1c9452f2a161439391120eef364dd8ce4d8e5e/20160217112601/183252/index.html) — абстрактний об'єкт, що використовується для вивчення властивостей об'єкта-оригіналу, спрощення системи для її аналізу та передбачення, а також отримання якісних та кількісних результатів, необхідних для прийняття обґрунтованого управлінського рішення.

[Програмне забезпечення (Software)](https://uk.theastrologypage.com/software-program) — частина комп’ютерної або інформаційної системи, яка включає набір інструкцій, модулів або процедур, необхідних для виконання певного типу роботи з цією системою.

[Життєвий цикл розробки програмного забезпечення (Software development life cycle, SDLC)](https://www.maxzosim.com/software-development-life-cycle-sdlc/) — поняття, що визначає кроки, пов'язані з розробкою програмного забезпечення на кожному етапі. SDLC охоплює детальний план будівництва, розгортання та підтримки програмного забезпечення. Метою SDLC є надання високоякісного продукту, що відповідає вимогам замовника.

[Продуктовий беклог (Product backlog)](https://wezom.com.ua/ua/blog/beklog-produkta-kak-napravit-razrabotchikov-v-pravilnoe-ruslo) — артефакт, що містить всі вимоги до майбутнього програмного продукту, впорядковані за пріоритетом.

[Скрам (Scrum)](https://brander.ua/blog/skram-shcho-tse-take-ta-yak-tsym-korystuvatysya) — гнучка методологія управління проєктами, яка розбиває великий проєкт на малі підзадачі-спринти, виконувані командою за двотижневими ітераціями.

[Спринт (Sprint)](https://brainrain.com.ua/uk/cprint-v-skrame/) — часовий відрізок, протягом якого створюється готовий до використання інкремент продукту.

[Канбан (Kanban)](https://www.ukraine.com.ua/uk/blog/interesting/chto-takoe-kanban.html) — гнучкий метод управління проєктами, що ґрунтується на еволюційних змінах в процесі роботи.

[Дошка Канбан (Kanban board)](https://uaspectr.com/2021/01/26/shho-take-kanban/) — інструмент для спільної роботи над проєктами, на якій фіксуються всі завдання та відповідальні за їх виконання учасники.

[Контроль версій (Version control)](https://uk.wikibooks.org/wiki/Pro_GIT/%D0%92%D1%81%D1%82%D1%83%D0%BF/%D0%9F%D1%80%D0%BE_%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D1%8C_%D0%B2%D0%B5%D1%80%D1%81%D1%96%D0%B9) — система, що веде протокол змін в проєкті для збереження попередніх версій програмного забезпечення.



## Підходи та методи вирішення завдань

### Загальні стадії

Незалежно від методології розробки програмного забезпечення, існують основні етапи, яких дотримуються всі підходи. Вони можуть варіюватися, але загальний принцип залишається однаковим. Зазвичай процес розробки ПЗ складається з таких етапів:

1. **Аналіз вимог**. На цьому етапі досліджується ідея, формується розуміння того, що хоче отримати клієнт та яким він уявляє свій майбутній продукт. Вивчаються конкуренти, аналізуються подібні продукти на ринку, визначається цільова аудиторія та проводяться аналітичні дослідження.

2. **Проектування**. Розробляється план завдань, створюється проєкт та прототипи, які дозволяють на цьому етапі побачити, як виглядатиме продукт та яка буде його логіка. Враховується дизайн, продумується структура та створюється архітектура програми.

3. **Розробка та програмування**. Дизайнери працюють над зовнішнім виглядом та користувацьким досвідом (UX), а програмісти перетворюють ці ідеї на робочий інструмент. На цьому етапі створюється готове програмне забезпечення, яке можна використовувати у бізнесі.

4. **Документація**. Усі дії фіксуються у документації. Створюється технічна документація для програмістів, які забезпечуватимуть технічну підтримку, а також інструкції для користувачів. Документація детально описує основні принципи роботи програми та її функціонал.

5. **Тестування**. Після завершення розробки продукту він проходить ретельне тестування. Створюється система оцінки працездатності програми. Здійснюються функціональне, інтеграційне, модульне та інші види тестування для перевірки працездатності програми в різних умовах.

6. **Впровадження та супровід**. Після успішного тестування програми та усунення всіх серйозних дефектів настає час для релізу. Після випуску версії проєкту в роботу включається відділ технічної підтримки, який забезпечує зворотний зв'язок з користувачами, консультує та аналізує стан продукту.


### Waterfall (каскадна модель)

Класична та доволі стара модель, яка може зустрітися й сьогодні. Принцип роботи досить простий: кожний наступний етап виконується лише тоді, коли повністю завершено попередній. Існує чітке розподілення етапів, й технологія реалізується ніби каскадом, поступово рухаючись від першого до останнього етапу.

Ця модель чітко визначає терміни проходження кожного етапу та повністю документує кожний етап. Але є недолік: зробити крок назад дуже складно. Внесення змін до існуючого проекту коштує дуже дорого і є проблематичним. Такий спосіб підходить лише для чітко розписаних проектів, де є повне розуміння того, що створюється, для яких цілей та які вимоги виставляються. [[1]](https://www.techtarget.com/searchsoftwarequality/definition/waterfall-model)

![Waterfall](https://training.qatestlab.com/wp-content/uploads/2021/09/Waterfall-model.jpg)

Схема Waterfall [[1.1]](https://training.qatestlab.com/wp-content/uploads/2021/09/Waterfall-model.jpg)

### Spiral (спіральна модель)

Робота йде по спіралі, на кожному витку якої здійснюється 4 основні дії: створення плану, аналіз ризиків, розробка та конструювання, оцінка результату та збирання відгуків. Якщо всі етапи успішно пройдені, то технологія переходить на новий виток. Сам перехід нагадує інкрементну модель, де кожен блок розробляється незалежно та приєднується до спочатку створеного базового функціонала.

Особливість підходу полягає в тому, що більше часу йде на аналіз, розрахунки та оцінку наслідків, ніж безпосередньо на саму розробку. Спіральні моделі розробки підходять для великих проєктів, де припущення помилок призводить до великих втрат та негативних наслідків. Акцент робиться на оцінці ризиків та можливості зробити "крок назад", чи мінімізувати втрати у випадку можливого провалу ризикового проєкту. [[5]](https://qalight.ua/baza-znaniy/cpiralna-model-spiral-model/)

![Spiral](https://training.qatestlab.com/wp-content/uploads/2021/09/Spiral-model.jpg)

Схема Spiral [[1.5]](https://training.qatestlab.com/wp-content/uploads/2021/09/Spiral-model.jpg)

### Agile (гнучка методологія)

Чудове рішення для створення продукту, який не до кінця сформований у своїй ідеї. Особливість полягає в тому, що замовник може одразу спостерігати за змінами у розробці та коригувати дії. Завдання розбиваються на короткі спринти, виконання яких займає від 1 до 4 тижнів. Також відбуваються регулярні обговорення, на яких визначаються цілі на кожен спринт.

Цей метод фокусується на тому, як задовольнити користувачів, а не на документації та жорстких процедурах. Через те, що неможливо визначити точний час на реалізацію ідеї, не можна наперед визначити точну вартість. Але якщо проект розрахований на тривалий життєвий цикл, то повинен мати адаптивність до змін на ринку, для чого відмінно підходить цей метод. Він дозволяє підлаштовуватися під нові вимоги та постійно розвивати продукт. [[4]](https://www.wrike.com/project-management-guide/faq/what-is-agile-methodology-in-project-management/)

![Agile](https://training.qatestlab.com/wp-content/uploads/2021/09/Agile-model1.jpg)

Схема Agile [1.4](https://training.qatestlab.com/wp-content/uploads/2021/09/Agile-model1.jpg)

### Scrum-методологія

Дана методологія передбачає роботу короткими відрізками – спринтами тривалістю від 1 до 4 тижнів. Як правило, результат спринту – це робочий продукт з очікуваним приростом функціонала. Ідея полягає в тому, щоб кожен відрізок приносив результат, який можна продемонструвати замовнику. Після схвалення від клієнта команда приступає до наступного спринту і весь процес повторюється.

Поділ всього обсягу завдань на невеликі робочі цикли дає змогу оперативно виявляти проблеми та непорозуміння із замовником. Проте таку методологію доволі складно впровадити у великих організаціях, де важко координувати роботу багатьох команд. Крім того, вона вимагає від учасників часу на навчання та адаптацію. [[7]](https://apix-drive.com/ua/blog/useful/metod-scrum)

![Scrum](https://training.qatestlab.com/wp-content/uploads/2021/09/Scrum1.jpg)

Схема Scrum [[1.7]](https://training.qatestlab.com/wp-content/uploads/2021/09/Scrum1.jpg)

### V-Model (V-подібна модель)

Робота йде по спіралі, на кожному витку якої здійснюється 4 основні дії: створення плану, аналіз ризиків, розробка та конструювання, оцінка результату та збирання відгуків. Якщо всі етапи успішно пройдені, то технологія переходить на новий виток. Сам перехід нагадує інкрементну модель, де кожен блок розробляється незалежно та приєднується до спочатку створеного базового функціонала.

Особливість підходу полягає в тому, що більше часу йде на аналіз, розрахунки та оцінку наслідків, ніж безпосередньо на саму розробку. Спіральні моделі розробки підходять для великих проєктів, де припущення помилок призводить до великих втрат та негативних наслідків. Акцент робиться на оцінці ризиків та можливості зробити "крок назад", чи мінімізувати втрати у випадку можливого провалу ризикового проєкту. [[6]](https://qalight.ua/baza-znaniy/v-model-v-model/)

![V-Model](https://training.qatestlab.com/wp-content/uploads/2021/09/V-model-1.jpg)

Схема V-Model [[1.6]](https://training.qatestlab.com/wp-content/uploads/2021/09/V-model-1.jpg)

### DevOps-методологія

Це набір практик, що поєднує розробку програмного забезпечення з його обслуговуванням і експлуатацією. Назва відображає дві частини: Development and Operations (розробка та операції). DevOps виник на основі попередніх практик. Серед них – система Agile, Toyota Way та Lean manufacturing.

Основна мета DevOps – скоротити час між тим, коли внесли зміни у код і тим, коли клієнт ці зміни відчув, не впливаючи при цьому на надійність продукту. Цілі розвитку узгоджуються з потребами організації для створення цінності бізнесу. [[9]](https://www.superprof.com.ua/blog/shcho-take-devops/)

![DevOps](https://devopedia.org/images/article/54/7602.1513404277.png)

Схема DevOps [[1.9]](https://devopedia.org/images/article/54/7602.1513404277.png)

## Порівняльна характеристика існуючих засобів вирішення завдання

[GitHub Projects](https://github.com) - це інструмент для керування проєктами, вбудований у платформу GitHub. Основна ідея GitHub Projects полягає в дошках, які відображають різні етапи проєкту. Завдання, створені на цих дошках, можуть мати як користувацькі, так і вбудовані мітки, такі як відповідальні особи, рецензенти, терміни та пріоритети виконання завдань, пов'язані репозиторії. Система також інтегрується з проблемами GitHub та запитами на злиття, що сприяє безперешкодному координуванню вдосконалення коду. Завдяки інтуїтивному інтерфейсу та потужному функціоналу, GitHub Projects дозволяє програмістам ефективно планувати та успішно завершувати проєкти з розробки програмного забезпечення.

[Trello](https://trello.com) — система управління проєктами, створена для безперебійної співпраці та організації виконання завдань. Trello надає користувачам інтуїтивно зрозумілу платформу для планування, відстеження та виконання задумів будь-якого масштабу. В основі Trello використовується система дошок, списків і карток. Дошки відповідають проєктам, списки класифікують завдання за їхніми статусами виконання, а картки представляють окремі завдання. Однією з головних переваг Trello є її легка інтеграція із великою кількістю сторонніх програм, що покращує функціональність і адаптивність платформи. Зручний інтерфейс у поєднанні із продуманим функціоналом робить цю систему ідеальним вибором для команд, які шукають ефективний інструмент для керування проєктами.

[JIRA](https://www.atlassian.com/software/jira) — це широко використовуване програмне забезпечення для управління проектами та відстеження проблем, розроблене Atlassian. JIRA слугує універсальною та комплексною платформою, розробленою для оптимізації управління проєктами, покращення співпраці та підвищення ефективності робочого процесу для організацій будь-якого розміру та галузі. Система створювалася як заміна Bugzilla й багато в чому повторює її архітектуру. Головними елементами JIRA є проблема(issue) і робочий процес(workflow). Issue описує роботу, яка має бути виконана, і може містити пріоритет, автора і позначення того, хто має над ним працювати.

[Asana](https://asana.com) — відома веб-платформа для керування завданнями та проєктами, призначена для покращення співпраці та продуктивності в командах і організаціях. Заснована в 2008 році система стала надійним рішенням для оптимізації робочих процесів, відстеження завдань і досягнення цілей. Основна мета Asana — допомогти командам і окремим особам ефективніше керувати своєю роботою, надаючи централізовану платформу для управління завданнями та проєктами. Вона відома своїм зручним інтерфейсом і здатністю адаптуватися до широкого діапазону робочих процесів, що робить її придатною для підприємств будь-якого розміру та галузей.

[Microsoft Project](https://www.microsoft.com/uk-ua/microsoft-365/project/project-management-software) —  це система управління проєктами, розроблена компанією Microsoft. Цей програмний продукт призначений для допомоги менеджерам проєктів у плануванні, розподілі ресурсів до завдань, відстеженні прогресу, управлінні бюджетом та аналізі завантаженості роботи. Версії Microsoft Project Online і Project Server надають засоби для командної роботи та спільного доступу до проєктів у реальному часі. Крім того, система підтримує різні методології, включаючи традиційне управління проєктами, а також адаптивні методи, такі як Scrum і Kanban, а також має вбудовану інтеграцію з іншими продуктами Microsoft.

[ClickUp](https://clickup.com) — це хмарна платформа для управління проєктами та завданнями, що допомагає командам ефективно організовувати роботу, співпрацювати та слідкувати за виконанням завдань. ClickUp побудований навколо різних модулів, таких як завдання, документи, цілі та чат, дозволяючи структурувати різні аспекти роботи у єдиному середовищі. Ситема пропонує зручний інтерфейс з багатою кастомізацією. Однією з найбільших відзнак платформи є високий рівень підтримки та надійності, роблячи СlickUp бажаним вибором для будь-якого користувача. Система надає функції автоматизації для автоматичного виконання рутинних процесів й підтримує високу інтеграцію з популярними сервісами, що значно підвищує ефективність роботи всієї команди.

### Порівняльна таблиця

<table>
    <tr>
        <td><b>Вимоги</b></td>
        <td><b>Критерії</b></td>
        <td><b>GitHub Projects</b></td>
        <td><b>Trello</b></td>
        <td><b>JIRA</b></td>
        <td><b>Asana</b></td>
        <td><b>Microsoft Project</b></td>
        <td><b>ClickUp</b></td>
    </tr>
    <tr>
        <td rowspan="6"><b>Functional</b> (функціональність)</td>
        <td>Наявність API</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
    </tr>
    <tr>
        <td>Кросплатформеність</td>
        <td>🟡</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
    </tr>
    <tr>
        <td>Контроль та розподіл ресурсів</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
    </tr>
    <tr>
        <td>Система сповіщень</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
    </tr>
    <tr>
        <td>Наявність Scrum/Kanban дошок</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
    </tr>
    <tr>
        <td>Можливість інтеграції third-party сервісів</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
    </tr>
    <tr>
        <td rowspan="5"><b>Usability</b> (зручність)</td>
        <td>Інтуїтивний та зручний інтерфейс</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
    </tr>
    <tr>
        <td>Можливість працювати офлайн</td>
        <td>🟡</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟡</td>
        <td>🔴</td>
        <td>🟢</td>
    </tr>
    <tr>
        <td>Кастомізація інтерфейсу</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
    </tr>
    <tr>
        <td>Підтримка декількох мов</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
    </tr>
    <tr>
        <td>Наявність готових темплейтів</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟡</td>
    </tr>
    <tr>
        <td rowspan="4"><b>Reliability</b> (надійність)</td>
        <td>Багаторівнева автентифікація</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
    </tr>
    <tr>
        <td>Система доступу на основі ролей</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
    </tr>
    <tr>
        <td>Протокол шифрування</td>
        <td>TLS</td>
        <td>TLS</td>
        <td>TLS</td>
        <td>TLS</td>
        <td>TLS</td>
        <td>TLS</td>
    </tr>
    <tr>
        <td>Високий рівень SLA (Service Level Agreement)</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
    </tr>
    <tr>
        <td rowspan="3"><b>Productivity</b> (продуктивність)</td>
        <td>Швидкість синхронізації змін, внесених в проєкт</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
    </tr>
    <tr>
        <td>Середня швидкість відповіді сервера</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟡</td>
        <td>🟢</td>
        <td>🟢</td>
    </tr>
    <tr>
        <td>Стійкість до збоїв</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
    </tr>
    <tr>
        <td rowspan="3"><b>Support</b> (підтримка)</td>
        <td>Активна й відкрита спільнота (групи в соціальних мережах, тощо)</td>
        <td>🟡</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
    </tr>
    <tr>
        <td>Документація та FAQ</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
    </tr>
    <tr>
        <td>Онлайн підтримка</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
        <td>🟢</td>
    </tr>
</table>

## Висновки

Під час аналізу різноманітних програм та веб-сервісів для управління проектами ми виявили, що жоден із них не може відповісти на всі потреби користувачів. Кожен інструмент має свої переваги і обмеження, які можуть бути значущими залежно від конкретного контексту.

З урахуванням цього ми вважаємо, що створення власної системи управління проектами є обґрунтованим. Ми плануємо розробити унікальний продукт, який буде враховувати не лише базові потреби користувача, але й додаткові функції та можливості, що були відсутні або обмежені у наявних рішеннях. Наша мета - створити інструмент, який дозволить ефективно керувати проектами, враховуючи унікальні потреби та вимоги користувачів.

## Посилання

1. [Waterfall model](https://www.techtarget.com/searchsoftwarequality/definition/waterfall-model)
2. [Software Engineering | Incremental process model](https://www.google.com/amp/s/www.geeksforgeeks.org/software-engineering-incremental-process-model/amp/)
4. [What Is Agile Methodology in Project Management?](https://www.wrike.com/project-management-guide/faq/what-is-agile-methodology-in-project-management/)
5. [Спіральна модель (spiral model)](https://qalight.ua/baza-znaniy/cpiralna-model-spiral-model/)
6. [V-модель (v-model)](https://qalight.ua/baza-znaniy/v-model-v-model/)
7. [Метод Scrum - як виправдати очікування замовника](https://apix-drive.com/ua/blog/useful/metod-scrum)
8. [Що таке DevOps і навіщо він потрібен?](https://www.superprof.com.ua/blog/shcho-take-devops/)
9. [About Projects - GitHub Docs](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
10. [What is Trello: Learn Features, Uses & More | Trello](https://trello.com/tour)
11. [Jira Software for Teams | Atlassian](https://www.atlassian.com/software/jira/guides/getting-started/who-uses-jira#for-project-management-teams)
12. [About Asana](https://asana.com/company)
13. [Програмне забезпечення для керування проєктами | Microsoft Project](https://www.microsoft.com/uk-ua/microsoft-365/project/project-management-software)
14. [ClickUp™ | About](https://clickup.com/about)
15. Зображення та схеми моделей [1.1](https://training.qatestlab.com/wp-content/uploads/2021/09/Waterfall-model.jpg), [1.2](https://training.qatestlab.com/wp-content/uploads/2021/09/incremental_model.jpg), [1.3](https://s.dou.ua/storage-files/ite.jpg), [1.4](https://training.qatestlab.com/wp-content/uploads/2021/09/Agile-model1.jpg), [1.5](https://training.qatestlab.com/wp-content/uploads/2021/09/Spiral-model.jpg), [1.6](https://training.qatestlab.com/wp-content/uploads/2021/09/V-model-1.jpg), [1.7](https://training.qatestlab.com/wp-content/uploads/2021/09/Scrum1.jpg), [1.8](https://nix-united.com/wp-content/uploads/2021/01/RAD_graphics_01.jpg), [1.9](https://devopedia.org/images/article/54/7602.1513404277.png), [1.10](https://www.freecodecamp.org/news/content/images/size/w1600/2021/04/MVC3.png), та [1.11](https://cms-cdn.katalon.com/large_banner_6_3cc61378b6.png)