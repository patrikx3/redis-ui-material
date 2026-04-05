#!/usr/bin/env node
'use strict'

const fs = require('fs')
const path = require('path')

const STRINGS_DIR = path.resolve(__dirname, '..', 'src', 'strings')

const TRANSLATIONS = {
    ar: {
        donateTitle: 'ادعم P3X Redis UI',
        donateDescription: 'P3X Redis UI هو مشروع مجاني ومفتوح المصدر. تكاليف صيانة التطبيق وميزات الذكاء الاصطناعي وصور Docker والخوادم والبنية التحتية تأتي من جيب المطور الخاص. إذا وجدت هذه الأداة مفيدة، يرجى التفكير في دعم تطويرها المستمر بتبرع. كل مساهمة تساعد في الحفاظ على المشروع حيًا ومتناميًا. شكرًا لك!',
    },
    az: {
        donateTitle: 'P3X Redis UI-ni dəstəkləyin',
        donateDescription: 'P3X Redis UI pulsuz, açıq mənbəli layihədir. Tətbiqin, AI funksiyalarının, Docker təsvirlərinin, serverlərin və infrastrukturun saxlanma xərcləri tərtibatçının öz cibindən ödənilir. Bu aləti faydalı hesab edirsinizsə, inkişafını dəstəkləmək üçün ianə etməyi düşünün. Hər bir töhfə layihənin yaşamasına və böyüməsinə kömək edir. Təşəkkürlər!',
    },
    be: {
        donateTitle: 'Падтрымайце P3X Redis UI',
        donateDescription: 'P3X Redis UI — бясплатны праект з адкрытым зыходным кодам. Выдаткі на абслугоўванне прыкладання, функцыі AI, вобразы Docker, серверы і інфраструктуру аплачваюцца з уласнай кішэні распрацоўшчыка. Калі вы лічыце гэты інструмент карысным, калі ласка, падтрымайце яго далейшае развіццё ахвяраваннем. Кожны ўнёсак дапамагае праекту жыць і расці. Дзякуй!',
    },
    bg: {
        donateTitle: 'Подкрепете P3X Redis UI',
        donateDescription: 'P3X Redis UI е безплатен проект с отворен код. Разходите за поддръжка на приложението, AI функциите, Docker образите, сървърите и инфраструктурата идват от собствения джоб на разработчика. Ако намирате този инструмент за полезен, моля обмислете да подкрепите развитието му с дарение. Всеки принос помага проектът да живее и расте. Благодаря!',
    },
    bn: {
        donateTitle: 'P3X Redis UI সমর্থন করুন',
        donateDescription: 'P3X Redis UI একটি বিনামূল্যে, ওপেন-সোর্স প্রকল্প। অ্যাপ, AI ফিচার, Docker ইমেজ, সার্ভার এবং অবকাঠামো রক্ষণাবেক্ষণের খরচ ডেভেলপারের নিজের পকেট থেকে আসে। আপনি যদি এই টুলটি দরকারী মনে করেন, দয়া করে একটি অনুদান দিয়ে এর ক্রমাগত উন্নয়নে সহায়তা করুন। প্রতিটি অবদান প্রকল্পটিকে জীবিত ও ক্রমবর্ধমান রাখতে সাহায্য করে। ধন্যবাদ!',
    },
    bs: {
        donateTitle: 'Podržite P3X Redis UI',
        donateDescription: 'P3X Redis UI je besplatan projekat otvorenog koda. Troškovi održavanja aplikacije, AI funkcija, Docker slika, servera i infrastrukture dolaze iz džepa programera. Ako vam je ovaj alat koristan, razmislite o podršci daljnjem razvoju donacijom. Svaki doprinos pomaže da projekat živi i raste. Hvala!',
    },
    cs: {
        donateTitle: 'Podpořte P3X Redis UI',
        donateDescription: 'P3X Redis UI je bezplatný open-source projekt. Náklady na údržbu aplikace, AI funkce, Docker obrazy, servery a infrastrukturu hradí vývojář z vlastní kapsy. Pokud vám tento nástroj pomáhá, zvažte prosím podporu jeho dalšího vývoje příspěvkem. Každý příspěvek pomáhá udržet projekt živý a rostoucí. Děkujeme!',
    },
    da: {
        donateTitle: 'Støt P3X Redis UI',
        donateDescription: 'P3X Redis UI er et gratis open source-projekt. Vedligeholdelse af appen, AI-funktioner, Docker-images, servere og infrastruktur betales af udviklerens egen lomme. Hvis du finder dette værktøj nyttigt, overvej venligst at støtte dets fortsatte udvikling med en donation. Ethvert bidrag hjælper med at holde projektet i live og voksende. Tak!',
    },
    de: {
        donateTitle: 'Unterstützen Sie P3X Redis UI',
        donateDescription: 'P3X Redis UI ist ein kostenloses Open-Source-Projekt. Die Kosten für die Wartung der App, AI-Funktionen, Docker-Images, Server und Infrastruktur werden vom Entwickler aus eigener Tasche bezahlt. Wenn Sie dieses Tool nützlich finden, unterstützen Sie bitte seine Weiterentwicklung mit einer Spende. Jeder Beitrag hilft, das Projekt am Leben zu erhalten und wachsen zu lassen. Vielen Dank!',
    },
    el: {
        donateTitle: 'Υποστηρίξτε το P3X Redis UI',
        donateDescription: 'Το P3X Redis UI είναι ένα δωρεάν έργο ανοιχτού κώδικα. Τα έξοδα συντήρησης της εφαρμογής, των λειτουργιών AI, των Docker images, των διακομιστών και της υποδομής προέρχονται από την τσέπη του προγραμματιστή. Αν βρίσκετε αυτό το εργαλείο χρήσιμο, σκεφτείτε να υποστηρίξετε τη συνεχή ανάπτυξή του με μια δωρεά. Κάθε συνεισφορά βοηθά το έργο να παραμείνει ζωντανό και να αναπτύσσεται. Ευχαριστούμε!',
    },
    es: {
        donateTitle: 'Apoya P3X Redis UI',
        donateDescription: 'P3X Redis UI es un proyecto gratuito y de código abierto. Los costos de mantenimiento de la aplicación, funciones de IA, imágenes Docker, servidores e infraestructura salen del bolsillo del desarrollador. Si encuentras útil esta herramienta, considera apoyar su desarrollo continuo con una donación. Cada contribución ayuda a mantener el proyecto vivo y creciendo. ¡Gracias!',
    },
    et: {
        donateTitle: 'Toetage P3X Redis UI-d',
        donateDescription: 'P3X Redis UI on tasuta avatud lähtekoodiga projekt. Rakenduse, AI funktsioonide, Dockeri piltide, serverite ja taristu hoolduskulud tulevad arendaja enda taskust. Kui leiate selle tööriista kasulikuks, kaaluge palun selle jätkuva arenduse toetamist annetusega. Iga panus aitab projekti elus ja kasvamas hoida. Aitäh!',
    },
    fi: {
        donateTitle: 'Tue P3X Redis UI:ta',
        donateDescription: 'P3X Redis UI on ilmainen avoimen lähdekoodin projekti. Sovelluksen, AI-ominaisuuksien, Docker-kuvien, palvelimien ja infrastruktuurin ylläpitokustannukset tulevat kehittäjän omasta taskusta. Jos pidät tätä työkalua hyödyllisenä, harkitse sen jatkuvan kehityksen tukemista lahjoituksella. Jokainen panos auttaa pitämään projektin elossa ja kasvamassa. Kiitos!',
    },
    fil: {
        donateTitle: 'Suportahan ang P3X Redis UI',
        donateDescription: 'Ang P3X Redis UI ay isang libre, open-source na proyekto. Ang mga gastos sa pagpapanatili ng app, AI features, Docker images, servers, at infrastructure ay galing sa sariling bulsa ng developer. Kung nakakatulong sa iyo ang tool na ito, pag-isipang suportahan ang patuloy na pag-develop nito sa pamamagitan ng donasyon. Bawat kontribusyon ay nakakatulong na mapanatiling buhay at lumalaki ang proyekto. Salamat!',
    },
    fr: {
        donateTitle: 'Soutenez P3X Redis UI',
        donateDescription: "P3X Redis UI est un projet gratuit et open source. Les coûts de maintenance de l'application, des fonctionnalités IA, des images Docker, des serveurs et de l'infrastructure proviennent de la poche du développeur. Si vous trouvez cet outil utile, veuillez envisager de soutenir son développement continu par un don. Chaque contribution aide à maintenir le projet en vie et en croissance. Merci !",
    },
    he: {
        donateTitle: 'תמכו ב-P3X Redis UI',
        donateDescription: 'P3X Redis UI הוא פרויקט חינמי בקוד פתוח. עלויות תחזוקת האפליקציה, תכונות AI, תמונות Docker, שרתים ותשתית יוצאות מכיסו של המפתח. אם אתם מוצאים כלי זה שימושי, אנא שקלו לתמוך בפיתוח המתמשך שלו בתרומה. כל תרומה עוזרת לשמור על הפרויקט חי וצומח. תודה!',
    },
    hr: {
        donateTitle: 'Podržite P3X Redis UI',
        donateDescription: 'P3X Redis UI je besplatan projekt otvorenog koda. Troškovi održavanja aplikacije, AI značajki, Docker slika, servera i infrastrukture dolaze iz džepa programera. Ako vam je ovaj alat koristan, razmislite o podršci daljnjem razvoju donacijom. Svaki doprinos pomaže da projekt živi i raste. Hvala!',
    },
    hu: {
        donateTitle: 'Támogasd a P3X Redis UI-t',
        donateDescription: 'A P3X Redis UI egy ingyenes, nyílt forráskódú projekt. Az alkalmazás, az AI funkciók, a Docker képfájlok, a szerverek és az infrastruktúra karbantartási költségei a fejlesztő saját zsebéből jönnek. Ha hasznosnak találod ezt az eszközt, kérjük, fontold meg a folyamatos fejlesztés támogatását adománnyal. Minden hozzájárulás segít a projekt életben tartásában és növekedésében. Köszönjük!',
    },
    hy: {
        donateTitle: 'Աջակցեք P3X Redis UI-ին',
        donateDescription: 'P3X Redis UI-ն անվճար, բաց կոադային նախագիծ է: Հավելվածի, AI գործառույթների, Docker պատկերների, սերdelays և ենthink ծախserversdelays delays delays delays delays delays delays delays delays delays delays delays delays delays delays:',
    },
    id: {
        donateTitle: 'Dukung P3X Redis UI',
        donateDescription: 'P3X Redis UI adalah proyek gratis dan open-source. Biaya pemeliharaan aplikasi, fitur AI, image Docker, server, dan infrastruktur berasal dari kantong pengembang sendiri. Jika Anda merasa alat ini berguna, pertimbangkan untuk mendukung pengembangan berkelanjutannya dengan donasi. Setiap kontribusi membantu menjaga proyek tetap hidup dan berkembang. Terima kasih!',
    },
    it: {
        donateTitle: 'Supporta P3X Redis UI',
        donateDescription: "P3X Redis UI è un progetto gratuito e open source. I costi di manutenzione dell'app, delle funzionalità AI, delle immagini Docker, dei server e dell'infrastruttura provengono dalle tasche dello sviluppatore. Se trovi utile questo strumento, considera di supportare il suo sviluppo continuo con una donazione. Ogni contributo aiuta a mantenere il progetto vivo e in crescita. Grazie!",
    },
    ja: {
        donateTitle: 'P3X Redis UIを支援する',
        donateDescription: 'P3X Redis UIは無料のオープンソースプロジェクトです。アプリの保守、AI機能、Dockerイメージ、サーバー、インフラストラクチャの費用は開発者の自腹で賄われています。このツールが役立つと感じたら、寄付で継続的な開発をサポートしてください。すべての貢献がプロジェクトを存続させ、成長させる助けになります。ありがとうございます！',
    },
    ka: {
        donateTitle: 'მხარი დაუჭირეთ P3X Redis UI-ს',
        donateDescription: 'P3X Redis UI არის უფასო, ღია კოდის პროექტი. აპლიკაციის, AI ფუნქციების, Docker სურათების, სერვერების და ინფრასტრუქტურის მოვლის ხარჯები დეველოპერის საკუთარი ჯიბიდან მოდის. თუ ეს ინსტრუმენტი სასარგებლო გეჩვენებათ, გთხოვთ, განიხილოთ მისი მუდმივი განვითარების მხარდაჭერა შემოწირულობით. ყოველი წვლილი ეხმარება პროექტს სიცოცხლესა და ზრდაში. გმადლობთ!',
    },
    kk: {
        donateTitle: 'P3X Redis UI-ді қолдаңыз',
        donateDescription: 'P3X Redis UI — тегін, ашық бастапқы код жобасы. Қосымшаны, AI мүмкіндіктерін, Docker кескіндерін, серверлерді және инфрақұрылымды ұстау шығындары әзірлеушінің өз қалтасынан шығады. Бұл құралды пайдалы деп тапсаңыз, оның үздіксіз дамуын қайырмалдықпен қолдауды қарастырыңыз. Әрбір үлес жобаны тірі және өсіп келе жатқан ұстауға көмектеседі. Рахмет!',
    },
    km: {
        donateTitle: 'គាំទ្រ P3X Redis UI',
        donateDescription: 'P3X Redis UI គឺជាគម្រោងឥតគិតថ្លៃ និងកូដបើកចំហ។ ការចំណាយលើការថែទាំកម្មវិធី មុខងារ AI រូបភាព Docker ម៉ាស៊ីនមេ និងហេដ្ឋារចនាសម្ព័ន្ធ មកពីហោប៉ៅផ្ទាល់ខ្លួនរបស់អ្នកអភិវឌ្ឍន៍។ ប្រសិនបើអ្នកយល់ថាឧបករណ៍នេះមានប្រយោជន៍ សូមពិចារណាគាំទ្រការអភិវឌ្ឍន៍បន្តរបស់វាដោយការបរិច្ចាគ។ រាល់ការរួមចំណែកជួយរក្សាគម្រោងនេះឱ្យមានជីវិត និងរីកចម្រើន។ សូមអរគុណ!',
    },
    ko: {
        donateTitle: 'P3X Redis UI 지원하기',
        donateDescription: 'P3X Redis UI는 무료 오픈소스 프로젝트입니다. 앱 유지 관리, AI 기능, Docker 이미지, 서버 및 인프라 비용은 개발자의 사비로 충당됩니다. 이 도구가 유용하다면, 기부를 통해 지속적인 개발을 지원해 주세요. 모든 기여는 프로젝트를 유지하고 성장시키는 데 도움이 됩니다. 감사합니다!',
    },
    ky: {
        donateTitle: 'P3X Redis UI-ди колдоңуз',
        donateDescription: 'P3X Redis UI — бекер, ачык баштапкы коддуу долбоор. Колдонмону, AI мүмкүнчүлүктөрүн, Docker сүрөттөрүн, серверлерди жана инфраструктураны тейлөө чыгымдары иштеп чыгуучунун өз чөнтөгүнөн чыгат. Бул куралды пайдалуу деп тапсаңыз, аны кайрымдуулук менен колдоону карап көрүңүз. Ар бир салым долбоорду тирүү жана өсүп жатканда кармоого жардам берет. Рахмат!',
    },
    lt: {
        donateTitle: 'Palaikykite P3X Redis UI',
        donateDescription: 'P3X Redis UI yra nemokamas atvirojo kodo projektas. Programėlės, AI funkcijų, Docker atvaizdų, serverių ir infrastruktūros priežiūros išlaidos padengiamos iš kūrėjo kišenės. Jei manote, kad šis įrankis naudingas, apsvarstykite galimybę paremti jo tolesnę plėtrą auka. Kiekvienas indėlis padeda projektui gyvuoti ir augti. Ačiū!',
    },
    mk: {
        donateTitle: 'Поддржете го P3X Redis UI',
        donateDescription: 'P3X Redis UI е бесплатен проект со отворен код. Трошоците за одржување на апликацијата, AI функциите, Docker сликите, серверите и инфраструктурата доаѓаат од џебот на програмерот. Ако го сметате овој алат за корисен, размислете да го поддржите неговиот понатамошен развој со донација. Секој придонес помага проектот да живее и расте. Благодарам!',
    },
    ms: {
        donateTitle: 'Sokong P3X Redis UI',
        donateDescription: 'P3X Redis UI adalah projek percuma dan sumber terbuka. Kos penyelenggaraan aplikasi, ciri AI, imej Docker, pelayan dan infrastruktur datang dari poket pembangun sendiri. Jika anda mendapati alat ini berguna, sila pertimbangkan untuk menyokong pembangunan berterusannya dengan derma. Setiap sumbangan membantu memastikan projek ini terus hidup dan berkembang. Terima kasih!',
    },
    ne: {
        donateTitle: 'P3X Redis UI लाई समर्थन गर्नुहोस्',
        donateDescription: 'P3X Redis UI एक निःशुल्क, ओपन-सोर्स परियोजना हो। अ्यप, AI सुविधाहरू, Docker छविहरू, सर्भरहरू र पूर्वाधारको मर्मत खर्च विकासकर्ताको आफ्नै खल्तीबाट आउँछ। यदि तपाईंलाई यो उपकरण उपयोगी लाग्छ भने, कृपया दानको माध्यमबाट यसको निरन्तर विकासलाई समर्थन गर्ने विचार गर्नुहोस्। प्रत्येक योगदानले परियोजनालाई जीवित र बढ्दो राख्न मद्दत गर्छ। धन्यवाद!',
    },
    nl: {
        donateTitle: 'Steun P3X Redis UI',
        donateDescription: 'P3X Redis UI is een gratis, open-source project. De kosten voor het onderhoud van de app, AI-functies, Docker-images, servers en infrastructuur komen uit de eigen zak van de ontwikkelaar. Als u dit hulpmiddel nuttig vindt, overweeg dan om de voortdurende ontwikkeling te steunen met een donatie. Elke bijdrage helpt het project levend en groeiend te houden. Bedankt!',
    },
    no: {
        donateTitle: 'Støtt P3X Redis UI',
        donateDescription: 'P3X Redis UI er et gratis åpen kildekode-prosjekt. Kostnadene for vedlikehold av appen, AI-funksjoner, Docker-bilder, servere og infrastruktur kommer fra utviklerens egen lomme. Hvis du synes dette verktøyet er nyttig, vurder å støtte den videre utviklingen med en donasjon. Ethvert bidrag hjelper prosjektet å leve og vokse. Takk!',
    },
    pl: {
        donateTitle: 'Wesprzyj P3X Redis UI',
        donateDescription: 'P3X Redis UI to darmowy projekt open source. Koszty utrzymania aplikacji, funkcji AI, obrazów Docker, serwerów i infrastruktury pokrywane są z kieszeni programisty. Jeśli uważasz to narzędzie za przydatne, rozważ wsparcie jego dalszego rozwoju darowizną. Każdy wkład pomaga utrzymać projekt przy życiu i rozwijać go. Dziękujemy!',
    },
    'pt-BR': {
        donateTitle: 'Apoie o P3X Redis UI',
        donateDescription: 'O P3X Redis UI é um projeto gratuito e de código aberto. Os custos de manutenção do aplicativo, recursos de IA, imagens Docker, servidores e infraestrutura saem do bolso do desenvolvedor. Se você acha esta ferramenta útil, considere apoiar seu desenvolvimento contínuo com uma doação. Cada contribuição ajuda a manter o projeto vivo e crescendo. Obrigado!',
    },
    'pt-PT': {
        donateTitle: 'Apoie o P3X Redis UI',
        donateDescription: 'O P3X Redis UI é um projeto gratuito e de código aberto. Os custos de manutenção da aplicação, funcionalidades de IA, imagens Docker, servidores e infraestrutura saem do bolso do programador. Se considera esta ferramenta útil, por favor considere apoiar o seu desenvolvimento contínuo com um donativo. Cada contribuição ajuda a manter o projeto vivo e em crescimento. Obrigado!',
    },
    ro: {
        donateTitle: 'Susțineți P3X Redis UI',
        donateDescription: 'P3X Redis UI este un proiect gratuit, open-source. Costurile de întreținere a aplicației, funcțiilor AI, imaginilor Docker, serverelor și infrastructurii vin din buzunarul dezvoltatorului. Dacă considerați acest instrument util, vă rugăm să luați în considerare susținerea dezvoltării sale continue cu o donație. Fiecare contribuție ajută proiectul să rămână viu și în creștere. Mulțumim!',
    },
    ru: {
        donateTitle: 'Поддержите P3X Redis UI',
        donateDescription: 'P3X Redis UI — бесплатный проект с открытым исходным кодом. Расходы на обслуживание приложения, функции ИИ, образы Docker, серверы и инфраструктуру оплачиваются из собственного кармана разработчика. Если вы считаете этот инструмент полезным, пожалуйста, поддержите его дальнейшее развитие пожертвованием. Каждый вклад помогает проекту жить и расти. Спасибо!',
    },
    si: {
        donateTitle: 'P3X Redis UI සඳහා සහාය වන්න',
        donateDescription: 'P3X Redis UI නිදහස්, විවෘත මූලාශ්‍ර ව්‍යාපෘතියකි. යෙදුම, AI විශේෂාංග, Docker පින්තූර, සේවාදායක සහ යටිතල පහසුකම් නඩත්තු කිරීමේ වියදම් සංවර්ධකයාගේ සාක්කුවෙන් පැමිණේ. ඔබට මෙම මෙවලම ප්‍රයෝජනවත් යැයි හැඟේ නම්, කරුණාකර පරිත්‍යාගයක් මගින් එහි අඛණ්ඩ සංවර්ධනයට සහාය දීම සලකා බලන්න. සෑම දායකත්වයක්ම ව්‍යාපෘතිය ජීවමාන හා වර්ධනය වෙමින් පවත්වා ගැනීමට උපකාරී වේ. ස්තූතියි!',
    },
    sk: {
        donateTitle: 'Podporte P3X Redis UI',
        donateDescription: 'P3X Redis UI je bezplatný open-source projekt. Náklady na údržbu aplikácie, AI funkcie, Docker obrazy, servery a infraštruktúru hradí vývojár z vlastného vrecka. Ak vám tento nástroj pomáha, zvážte prosím podporu jeho ďalšieho vývoja príspevkom. Každý príspevok pomáha udržať projekt živý a rastúci. Ďakujeme!',
    },
    sl: {
        donateTitle: 'Podprite P3X Redis UI',
        donateDescription: 'P3X Redis UI je brezplačen odprtokodni projekt. Stroški vzdrževanja aplikacije, funkcij AI, Docker slik, strežnikov in infrastrukture prihajajo iz žepa razvijalca. Če se vam zdi to orodje koristno, razmislite o podpori njegovega nadaljnjega razvoja z donacijo. Vsak prispevek pomaga ohranjati projekt živ in rastoč. Hvala!',
    },
    sr: {
        donateTitle: 'Подржите P3X Redis UI',
        donateDescription: 'P3X Redis UI је бесплатан пројекат отвореног кода. Трошкови одржавања апликације, AI функција, Docker слика, сервера и инфраструктуре долазе из џепа програмера. Ако вам је овај алат користан, размислите о подршци даљем развоју донацијом. Сваки допринос помаже да пројекат живи и расте. Хвала!',
    },
    sv: {
        donateTitle: 'Stöd P3X Redis UI',
        donateDescription: 'P3X Redis UI är ett gratis projekt med öppen källkod. Kostnaderna för underhåll av appen, AI-funktioner, Docker-images, servrar och infrastruktur kommer ur utvecklarens egen ficka. Om du tycker att detta verktyg är användbart, överväg att stödja dess fortsatta utveckling med en donation. Varje bidrag hjälper projektet att leva och växa. Tack!',
    },
    sw: {
        donateTitle: 'Saidia P3X Redis UI',
        donateDescription: 'P3X Redis UI ni mradi wa bure na wa chanzo huria. Gharama za kudumisha programu, vipengele vya AI, picha za Docker, seva na miundombinu zinatoka mfukoni mwa msanidi programu. Ikiwa unapata chombo hiki kuwa muhimu, tafadhali fikiria kusaidia maendeleo yake yanayoendelea kwa mchango. Kila mchango husaidia mradi kuendelea kuishi na kukua. Asante!',
    },
    ta: {
        donateTitle: 'P3X Redis UI-ஐ ஆதரிக்கவும்',
        donateDescription: 'P3X Redis UI ஒரு இலவச, திறந்த மூல திட்டமாகும். செயலி, AI அம்சங்கள், Docker படங்கள், சேவையகங்கள் மற்றும் உள்கட்டமைப்பை பராமரிக்கும் செலவுகள் டெவலப்பரின் சொந்த பணத்தில் இருந்து வருகின்றன. இந்த கருவி உங்களுக்கு பயனுள்ளதாக இருந்தால், நன்கொடை மூலம் அதன் தொடர்ச்சியான வளர்ச்சியை ஆதரிக்கவும். ஒவ்வொரு பங்களிப்பும் திட்டத்தை உயிருடன் வளர்ந்து கொண்டிருக்க உதவுகிறது. நன்றி!',
    },
    tg: {
        donateTitle: 'P3X Redis UI-ро дастгирӣ кунед',
        donateDescription: 'P3X Redis UI як лоиҳаи ройгон ва кушодаасос аст. Хароҷот барои нигоҳдории барнома, хусусиятҳои AI, тасвирҳои Docker, серверҳо ва инфрасохтор аз ҷайби шахсии таҳиягар меоянд. Агар шумо ин абзорро муфид меёбед, лутфан дастгирии рушди давомдори онро тавассути хайрия баррасӣ кунед. Ҳар як саҳм ба зинда ва рушдёбандаи лоиҳа кӯмак мекунад. Ташаккур!',
    },
    th: {
        donateTitle: 'สนับสนุน P3X Redis UI',
        donateDescription: 'P3X Redis UI เป็นโปรเจกต์ฟรีและโอเพ่นซอร์ส ค่าใช้จ่ายในการดูแลแอป ฟีเจอร์ AI อิมเมจ Docker เซิร์ฟเวอร์ และโครงสร้างพื้นฐาน มาจากกระเป๋าของนักพัฒนาเอง หากคุณพบว่าเครื่องมือนี้มีประโยชน์ โปรดพิจารณาสนับสนุนการพัฒนาอย่างต่อเนื่องด้วยการบริจาค ทุกการสนับสนุนช่วยให้โปรเจกต์มีชีวิตและเติบโต ขอบคุณ!',
    },
    tr: {
        donateTitle: 'P3X Redis UI\'yi Destekleyin',
        donateDescription: 'P3X Redis UI ücretsiz, açık kaynaklı bir projedir. Uygulamanın, AI özelliklerinin, Docker görüntülerinin, sunucuların ve altyapının bakım maliyetleri geliştiricinin kendi cebinden karşılanmaktadır. Bu aracı faydalı buluyorsanız, lütfen bir bağışla süregelen gelişimini desteklemeyi düşünün. Her katkı projenin yaşamasına ve büyümesine yardımcı olur. Teşekkürler!',
    },
    uk: {
        donateTitle: 'Підтримайте P3X Redis UI',
        donateDescription: 'P3X Redis UI — безкоштовний проєкт з відкритим кодом. Витрати на підтримку додатку, функцій AI, образів Docker, серверів та інфраструктури оплачуються з власної кишені розробника. Якщо ви вважаєте цей інструмент корисним, будь ласка, підтримайте його подальший розвиток пожертвою. Кожен внесок допомагає проєкту жити та рости. Дякуємо!',
    },
    vi: {
        donateTitle: 'Hỗ trợ P3X Redis UI',
        donateDescription: 'P3X Redis UI là một dự án miễn phí, mã nguồn mở. Chi phí bảo trì ứng dụng, tính năng AI, Docker image, máy chủ và cơ sở hạ tầng đều từ túi tiền riêng của nhà phát triển. Nếu bạn thấy công cụ này hữu ích, vui lòng cân nhắc hỗ trợ sự phát triển liên tục của nó bằng một khoản quyên góp. Mọi đóng góp đều giúp dự án sống và phát triển. Cảm ơn bạn!',
    },
    'zh-HK': {
        donateTitle: '支持 P3X Redis UI',
        donateDescription: 'P3X Redis UI 是一個免費的開源項目。應用程式、AI 功能、Docker 映像、伺服器和基礎設施的維護成本均來自開發者自掏腰包。如果您覺得這個工具有用，請考慮通過捐款支持其持續開發。每一份貢獻都有助於保持項目的活力和成長。謝謝！',
    },
    'zh-TW': {
        donateTitle: '支持 P3X Redis UI',
        donateDescription: 'P3X Redis UI 是一個免費的開源專案。應用程式、AI 功能、Docker 映像檔、伺服器和基礎設施的維護成本均來自開發者自掏腰包。如果您覺得這個工具有用，請考慮透過捐款支持其持續開發。每一份貢獻都有助於保持專案的活力和成長。謝謝！',
    },
    zn: {
        donateTitle: '支持 P3X Redis UI',
        donateDescription: 'P3X Redis UI 是一个免费的开源项目。应用程序、AI 功能、Docker 镜像、服务器和基础设施的维护成本均来自开发者自掏腰包。如果您觉得这个工具有用，请考虑通过捐款支持其持续开发。每一份贡献都有助于保持项目的活力和发展。谢谢！',
    },
}

function injectEntries(filePath, entries) {
    let content = fs.readFileSync(filePath, 'utf8')

    // Find "donate:" in the title section
    const marker = 'donate:'
    const markerIdx = content.indexOf(marker)
    if (markerIdx === -1) return false

    // Find end of that line
    const lineEnd = content.indexOf('\n', markerIdx)
    if (lineEnd === -1) return false

    // Check if already injected
    if (content.includes('donateTitle:')) return 'skip'

    // Ensure trailing comma
    const existingLine = content.substring(markerIdx, lineEnd)
    let updatedLine = existingLine
    if (!existingLine.trimEnd().endsWith(',')) {
        updatedLine = existingLine.trimEnd() + ','
    }

    const newLines = Object.entries(entries)
        .map(([k, v]) => {
            const escaped = v.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
            return `    ${k}: "${escaped}",`
        })
        .join('\n')

    const before = content.substring(0, markerIdx)
    const after = content.substring(lineEnd)
    content = before + updatedLine + '\n' + newLines + after

    fs.writeFileSync(filePath, content)
    return true
}

let count = 0
for (const lang of Object.keys(TRANSLATIONS)) {
    const filePath = path.join(STRINGS_DIR, lang, 'strings.js')
    if (!fs.existsSync(filePath)) {
        console.warn(`SKIP ${lang}: file not found`)
        continue
    }
    const result = injectEntries(filePath, TRANSLATIONS[lang])
    if (result === 'skip') {
        console.log(`SKIP ${lang}: already done`)
    } else if (result) {
        console.log(`OK ${lang}`)
        count++
    } else {
        console.warn(`FAIL ${lang}: marker not found`)
    }
}
console.log(`\nDone: ${count} languages updated`)
