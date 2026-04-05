#!/usr/bin/env node
'use strict'

const fs = require('fs')
const path = require('path')

const STRINGS_DIR = path.resolve(__dirname, '..', 'src', 'strings')

const TRANSLATIONS = {
    ar: {
        AI_DISABLED: 'الذكاء الاصطناعي معطل. قم بتفعيله في إعدادات AI.',
        AI_PROMPT_REQUIRED: 'مطلوب إدخال نص للذكاء الاصطناعي.',
        GROQ_API_KEY_READONLY: 'مفتاح Groq API للقراءة فقط ولا يمكن تعديله.',
        blocked_api_access: 'خطة Groq API الخاصة بك لا تسمح بالوصول إلى هذا النموذج. يرجى ترقية خطة Groq أو استخدام وكيل network.corifeus.com.',
        rate_limit: 'تم الوصول إلى حد معدل AI. حاول مرة أخرى لاحقًا أو استخدم مفتاح Groq API الخاص بك في الإعدادات.',
    },
    az: {
        AI_DISABLED: 'AI deaktivdir. AI Parametrlərindən aktivləşdirin.',
        AI_PROMPT_REQUIRED: 'AI sorğusu tələb olunur.',
        GROQ_API_KEY_READONLY: 'Groq API açarı yalnız oxunur və dəyişdirilə bilməz.',
        blocked_api_access: 'Groq API planınız bu modelə girişə icazə vermir. Groq planınızı yüksəldin və ya network.corifeus.com proksisindən istifadə edin.',
        rate_limit: 'AI limit həddinə çatıldı. Daha sonra yenidən cəhd edin və ya Parametrlərdə öz Groq API açarınızı istifadə edin.',
    },
    be: {
        AI_DISABLED: 'AI адключаны. Уключыце яго ў наладах AI.',
        AI_PROMPT_REQUIRED: 'Патрабуецца запыт AI.',
        GROQ_API_KEY_READONLY: 'Ключ Groq API даступны толькі для чытання і не можа быць зменены.',
        blocked_api_access: 'Ваш план Groq API не дазваляе доступ да гэтай мадэлі. Калі ласка, абнавіце план Groq або выкарыстоўвайце проксі network.corifeus.com.',
        rate_limit: 'Дасягнуты ліміт AI. Паспрабуйце пазней або выкарыстоўвайце свой уласны ключ Groq API ў наладах.',
    },
    bg: {
        AI_DISABLED: 'AI е деактивиран. Активирайте го в AI настройките.',
        AI_PROMPT_REQUIRED: 'Необходим е AI запрос.',
        GROQ_API_KEY_READONLY: 'Ключът на Groq API е само за четене и не може да бъде променен.',
        blocked_api_access: 'Вашият план на Groq API не позволява достъп до този модел. Моля, надградете плана си или използвайте прокси network.corifeus.com.',
        rate_limit: 'Достигнат е лимитът на AI. Опитайте по-късно или използвайте собствен Groq API ключ в настройките.',
    },
    bn: {
        AI_DISABLED: 'AI নিষ্ক্রিয়। AI সেটিংসে এটি সক্রিয় করুন।',
        AI_PROMPT_REQUIRED: 'AI প্রম্পট প্রয়োজন।',
        GROQ_API_KEY_READONLY: 'Groq API কী শুধুমাত্র পঠনযোগ্য এবং পরিবর্তন করা যায় না।',
        blocked_api_access: 'আপনার Groq API পরিকল্পনা এই মডেলে অ্যাক্সেসের অনুমতি দেয় না। অনুগ্রহ করে আপনার Groq পরিকল্পনা আপগ্রেড করুন বা network.corifeus.com প্রক্সি ব্যবহার করুন।',
        rate_limit: 'AI হার সীমায় পৌঁছেছে। পরে আবার চেষ্টা করুন বা সেটিংসে আপনার নিজের Groq API কী ব্যবহার করুন।',
    },
    bs: {
        AI_DISABLED: 'AI je onemogućen. Omogućite ga u AI postavkama.',
        AI_PROMPT_REQUIRED: 'AI upit je obavezan.',
        GROQ_API_KEY_READONLY: 'Groq API ključ je samo za čitanje i ne može se mijenjati.',
        blocked_api_access: 'Vaš Groq API plan ne dozvoljava pristup ovom modelu. Nadogradite Groq plan ili koristite network.corifeus.com proxy.',
        rate_limit: 'Dostignut je AI limit. Pokušajte ponovo kasnije ili koristite vlastiti Groq API ključ u postavkama.',
    },
    cs: {
        AI_DISABLED: 'AI je deaktivováno. Povolte ho v nastavení AI.',
        AI_PROMPT_REQUIRED: 'Je vyžadován AI dotaz.',
        GROQ_API_KEY_READONLY: 'Klíč Groq API je pouze pro čtení a nelze ho upravit.',
        blocked_api_access: 'Váš plán Groq API neumožňuje přístup k tomuto modelu. Upgradujte svůj plán Groq nebo použijte proxy network.corifeus.com.',
        rate_limit: 'Byl dosažen limit AI. Zkuste to později nebo použijte vlastní klíč Groq API v nastavení.',
    },
    da: {
        AI_DISABLED: 'AI er deaktiveret. Aktiver det i AI-indstillinger.',
        AI_PROMPT_REQUIRED: 'AI-forespørgsel er påkrævet.',
        GROQ_API_KEY_READONLY: 'Groq API-nøglen er skrivebeskyttet og kan ikke ændres.',
        blocked_api_access: 'Din Groq API-plan tillader ikke adgang til denne model. Opgrader din Groq-plan eller brug network.corifeus.com proxy.',
        rate_limit: 'AI-hastighedsgrænse nået. Prøv igen senere eller brug din egen Groq API-nøgle i indstillingerne.',
    },
    de: {
        AI_DISABLED: 'AI ist deaktiviert. Aktivieren Sie es in den AI-Einstellungen.',
        AI_PROMPT_REQUIRED: 'AI-Eingabe ist erforderlich.',
        GROQ_API_KEY_READONLY: 'Der Groq API-Schlüssel ist schreibgeschützt und kann nicht geändert werden.',
        blocked_api_access: 'Ihr Groq API-Plan erlaubt keinen Zugriff auf dieses Modell. Bitte upgraden Sie Ihren Groq-Plan oder verwenden Sie den network.corifeus.com Proxy.',
        rate_limit: 'AI-Ratenlimit erreicht. Versuchen Sie es später erneut oder verwenden Sie Ihren eigenen Groq API-Schlüssel in den Einstellungen.',
    },
    el: {
        AI_DISABLED: 'Το AI είναι απενεργοποιημένο. Ενεργοποιήστε το στις ρυθμίσεις AI.',
        AI_PROMPT_REQUIRED: 'Απαιτείται ερώτημα AI.',
        GROQ_API_KEY_READONLY: 'Το κλειδί Groq API είναι μόνο για ανάγνωση και δεν μπορεί να τροποποιηθεί.',
        blocked_api_access: 'Το πλάνο Groq API σας δεν επιτρέπει πρόσβαση σε αυτό το μοντέλο. Αναβαθμίστε το πλάνο Groq ή χρησιμοποιήστε τον proxy network.corifeus.com.',
        rate_limit: 'Συμπληρώθηκε το όριο AI. Δοκιμάστε αργότερα ή χρησιμοποιήστε το δικό σας κλειδί Groq API στις ρυθμίσεις.',
    },
    es: {
        AI_DISABLED: 'AI está desactivado. Actívelo en la configuración de AI.',
        AI_PROMPT_REQUIRED: 'Se requiere una consulta de AI.',
        GROQ_API_KEY_READONLY: 'La clave de Groq API es de solo lectura y no se puede modificar.',
        blocked_api_access: 'Su plan de Groq API no permite el acceso a este modelo. Actualice su plan de Groq o use el proxy network.corifeus.com.',
        rate_limit: 'Se alcanzó el límite de AI. Inténtelo más tarde o use su propia clave de Groq API en la configuración.',
    },
    et: {
        AI_DISABLED: 'AI on keelatud. Lubage see AI seadetes.',
        AI_PROMPT_REQUIRED: 'AI päring on nõutav.',
        GROQ_API_KEY_READONLY: 'Groq API võti on kirjutuskaitstud ja seda ei saa muuta.',
        blocked_api_access: 'Teie Groq API plaan ei luba juurdepääsu sellele mudelile. Uuendage oma Groq plaani või kasutage network.corifeus.com puhverserverit.',
        rate_limit: 'AI piirang saavutatud. Proovige hiljem uuesti või kasutage seadetes oma Groq API võtit.',
    },
    fi: {
        AI_DISABLED: 'AI on pois käytöstä. Ota se käyttöön AI-asetuksissa.',
        AI_PROMPT_REQUIRED: 'AI-kysely vaaditaan.',
        GROQ_API_KEY_READONLY: 'Groq API-avain on vain luku -tilassa eikä sitä voi muokata.',
        blocked_api_access: 'Groq API-suunnitelmasi ei salli pääsyä tähän malliin. Päivitä Groq-suunnitelmasi tai käytä network.corifeus.com-välityspalvelinta.',
        rate_limit: 'AI-nopeusraja saavutettu. Yritä myöhemmin uudelleen tai käytä omaa Groq API-avainta asetuksissa.',
    },
    fil: {
        AI_DISABLED: 'Ang AI ay naka-disable. I-enable ito sa AI Settings.',
        AI_PROMPT_REQUIRED: 'Kinakailangan ang AI prompt.',
        GROQ_API_KEY_READONLY: 'Ang Groq API key ay read-only at hindi maaaring baguhin.',
        blocked_api_access: 'Hindi pinapayagan ng iyong Groq API plan ang access sa modelong ito. Mag-upgrade ng Groq plan o gamitin ang network.corifeus.com proxy.',
        rate_limit: 'Naabot na ang AI rate limit. Subukan muli mamaya o gamitin ang sariling Groq API key sa Settings.',
    },
    fr: {
        AI_DISABLED: "L'IA est désactivée. Activez-la dans les paramètres IA.",
        AI_PROMPT_REQUIRED: "Une requête IA est requise.",
        GROQ_API_KEY_READONLY: "La clé Groq API est en lecture seule et ne peut pas être modifiée.",
        blocked_api_access: "Votre plan Groq API ne permet pas l'accès à ce modèle. Veuillez mettre à niveau votre plan Groq ou utiliser le proxy network.corifeus.com.",
        rate_limit: "Limite de débit IA atteinte. Réessayez plus tard ou utilisez votre propre clé Groq API dans les paramètres.",
    },
    he: {
        AI_DISABLED: 'AI מושבת. הפעל אותו בהגדרות AI.',
        AI_PROMPT_REQUIRED: 'נדרשת שאילתת AI.',
        GROQ_API_KEY_READONLY: 'מפתח Groq API הוא לקריאה בלבד ולא ניתן לשנותו.',
        blocked_api_access: 'תוכנית Groq API שלך אינה מאפשרת גישה למודל זה. שדרג את תוכנית Groq או השתמש בפרוקסי network.corifeus.com.',
        rate_limit: 'הגעת למגבלת קצב AI. נסה שוב מאוחר יותר או השתמש במפתח Groq API שלך בהגדרות.',
    },
    hr: {
        AI_DISABLED: 'AI je onemogućen. Omogućite ga u AI postavkama.',
        AI_PROMPT_REQUIRED: 'AI upit je obavezan.',
        GROQ_API_KEY_READONLY: 'Groq API ključ je samo za čitanje i ne može se mijenjati.',
        blocked_api_access: 'Vaš Groq API plan ne dopušta pristup ovom modelu. Nadogradite Groq plan ili koristite network.corifeus.com proxy.',
        rate_limit: 'Dosegnut je AI limit. Pokušajte ponovno kasnije ili koristite vlastiti Groq API ključ u postavkama.',
    },
    hu: {
        AI_DISABLED: 'Az AI le van tiltva. Engedélyezze az AI beállításokban.',
        AI_PROMPT_REQUIRED: 'AI lekérdezés szükséges.',
        GROQ_API_KEY_READONLY: 'A Groq API kulcs csak olvasható és nem módosítható.',
        blocked_api_access: 'A Groq API csomagja nem engedélyezi a hozzáférést ehhez a modellhez. Frissítse a Groq csomagját vagy használja a network.corifeus.com proxyt.',
        rate_limit: 'AI sebességkorlát elérve. Próbálja újra később vagy használja saját Groq API kulcsát a beállításokban.',
    },
    hy: {
        AI_DISABLED: 'AI-ն անջատված է: Միացրեք այն AI կարգավորումներում:',
        AI_PROMPT_REQUIRED: 'AI հարցումը պարտադիր է:',
        GROQ_API_KEY_READONLY: 'Groq API բանալին միայն կարդալու համար է և չի կարող փոփոխվել:',
        blocked_api_access: 'Ձեր Groq API պլանը թույլ չի տալիս մուտք գործել այս մdelays: Խնդրում ենք թարմացնել Groq պլdelays կամ օգտagorespace network.corifeus.com proxy-ն:',
        rate_limit: 'AI արագdelays սdelays հasiondelays: Փdelays ավdelays delays delays delays Groq API delays delays delays:',
    },
    id: {
        AI_DISABLED: 'AI dinonaktifkan. Aktifkan di Pengaturan AI.',
        AI_PROMPT_REQUIRED: 'Permintaan AI diperlukan.',
        GROQ_API_KEY_READONLY: 'Kunci Groq API hanya-baca dan tidak dapat diubah.',
        blocked_api_access: 'Paket Groq API Anda tidak mengizinkan akses ke model ini. Tingkatkan paket Groq Anda atau gunakan proxy network.corifeus.com.',
        rate_limit: 'Batas kecepatan AI tercapai. Coba lagi nanti atau gunakan kunci Groq API Anda sendiri di Pengaturan.',
    },
    it: {
        AI_DISABLED: "L'AI è disabilitata. Abilitala nelle impostazioni AI.",
        AI_PROMPT_REQUIRED: 'È richiesta una richiesta AI.',
        GROQ_API_KEY_READONLY: 'La chiave Groq API è di sola lettura e non può essere modificata.',
        blocked_api_access: 'Il tuo piano Groq API non consente l\'accesso a questo modello. Aggiorna il tuo piano Groq o usa il proxy network.corifeus.com.',
        rate_limit: 'Limite di velocità AI raggiunto. Riprova più tardi o usa la tua chiave Groq API nelle impostazioni.',
    },
    ja: {
        AI_DISABLED: 'AIが無効です。AI設定で有効にしてください。',
        AI_PROMPT_REQUIRED: 'AIプロンプトが必要です。',
        GROQ_API_KEY_READONLY: 'Groq APIキーは読み取り専用で変更できません。',
        blocked_api_access: 'お使いのGroq APIプランではこのモデルにアクセスできません。Groqプランをアップグレードするか、network.corifeus.comプロキシを使用してください。',
        rate_limit: 'AIレート制限に達しました。後でもう一度お試しいただくか、設定で独自のGroq APIキーを使用してください。',
    },
    ka: {
        AI_DISABLED: 'AI გამორთულია. ჩართეთ AI პარამეტრებში.',
        AI_PROMPT_REQUIRED: 'AI მოთხოვნა სავალდებულოა.',
        GROQ_API_KEY_READONLY: 'Groq API გასაღები მხოლოდ წასაკითხია და ვერ შეიცვლება.',
        blocked_api_access: 'თქვენი Groq API გეგმა არ იძლევა ამ მოდელზე წვდომის საშუალებას. გააუმჯობესეთ Groq გეგმა ან გამოიყენეთ network.corifeus.com პროქსი.',
        rate_limit: 'AI სიჩქარის ლიმიტი მიღწეულია. სცადეთ მოგვიანებით ან გამოიყენეთ თქვენი Groq API გასაღები პარამეტრებში.',
    },
    kk: {
        AI_DISABLED: 'AI өшірілген. AI параметрлерінде қосыңыз.',
        AI_PROMPT_REQUIRED: 'AI сұрауы қажет.',
        GROQ_API_KEY_READONLY: 'Groq API кілті тек оқу үшін және өзгертуге болмайды.',
        blocked_api_access: 'Groq API жоспарыңыз бұл модельге кіруге рұқсат бермейді. Groq жоспарын жаңартыңыз немесе network.corifeus.com проксиін пайдаланыңыз.',
        rate_limit: 'AI жылдамдық шегіне жетті. Кейінірек қайталаңыз немесе параметрлерде өз Groq API кілтіңізді пайдаланыңыз.',
    },
    km: {
        AI_DISABLED: 'AI ត្រូវបានបិទ។ បើកវានៅក្នុងការកំណត់ AI។',
        AI_PROMPT_REQUIRED: 'ត្រូវការសំណួរ AI។',
        GROQ_API_KEY_READONLY: 'សោ Groq API គឺអានតែប៉ុណ្ណោះ ហើយមិនអាចកែប្រែបានទេ។',
        blocked_api_access: 'គម្រោង Groq API របស់អ្នកមិនអនុញ្ញាតឱ្យចូលប្រើម៉ូដែលនេះទេ។ សូមធ្វើឱ្យប្រសើរគម្រោង Groq ឬប្រើ proxy network.corifeus.com។',
        rate_limit: 'ដល់កំណត់អត្រា AI។ សូមព្យាយាមម្តងទៀតនៅពេលក្រោយ ឬប្រើសោ Groq API ផ្ទាល់ខ្លួននៅក្នុងការកំណត់។',
    },
    ko: {
        AI_DISABLED: 'AI가 비활성화되었습니다. AI 설정에서 활성화하세요.',
        AI_PROMPT_REQUIRED: 'AI 프롬프트가 필요합니다.',
        GROQ_API_KEY_READONLY: 'Groq API 키는 읽기 전용이며 수정할 수 없습니다.',
        blocked_api_access: 'Groq API 플랜에서 이 모델에 대한 액세스를 허용하지 않습니다. Groq 플랜을 업그레이드하거나 network.corifeus.com 프록시를 사용하세요.',
        rate_limit: 'AI 속도 제한에 도달했습니다. 나중에 다시 시도하거나 설정에서 자신의 Groq API 키를 사용하세요.',
    },
    ky: {
        AI_DISABLED: 'AI өчүрүлгөн. AI жөндөөлөрүндө иштетиңиз.',
        AI_PROMPT_REQUIRED: 'AI суроосу талап кылынат.',
        GROQ_API_KEY_READONLY: 'Groq API ачкычы окуу үчүн гана жана өзгөртүүгө болбойт.',
        blocked_api_access: 'Groq API планыңыз бул моделге кирүүгө уруксат бербейт. Groq планын жаңыртыңыз же network.corifeus.com проксисин колдонуңуз.',
        rate_limit: 'AI ылдамдык чегине жетти. Кийинчерээк кайталаңыз же жөндөөлөрдө өз Groq API ачкычыңызды колдонуңуз.',
    },
    lt: {
        AI_DISABLED: 'AI išjungtas. Įjunkite jį AI nustatymuose.',
        AI_PROMPT_REQUIRED: 'Reikalinga AI užklausa.',
        GROQ_API_KEY_READONLY: 'Groq API raktas yra tik skaitomas ir negali būti keičiamas.',
        blocked_api_access: 'Jūsų Groq API planas neleidžia pasiekti šio modelio. Atnaujinkite savo Groq planą arba naudokite network.corifeus.com tarpinį serverį.',
        rate_limit: 'Pasiektas AI greičio limitas. Bandykite vėliau arba naudokite savo Groq API raktą nustatymuose.',
    },
    mk: {
        AI_DISABLED: 'AI е оневозможен. Овозможете го во AI поставки.',
        AI_PROMPT_REQUIRED: 'Потребно е AI барање.',
        GROQ_API_KEY_READONLY: 'Groq API клучот е само за читање и не може да се менува.',
        blocked_api_access: 'Вашиот Groq API план не дозволува пристап до овој модел. Надградете го Groq планот или користете network.corifeus.com прокси.',
        rate_limit: 'Достигнат е AI лимитот. Обидете се повторно подоцна или користете сопствен Groq API клуч во поставките.',
    },
    ms: {
        AI_DISABLED: 'AI dinyahaktifkan. Aktifkan dalam Tetapan AI.',
        AI_PROMPT_REQUIRED: 'Permintaan AI diperlukan.',
        GROQ_API_KEY_READONLY: 'Kunci Groq API adalah baca sahaja dan tidak boleh diubah.',
        blocked_api_access: 'Pelan Groq API anda tidak membenarkan akses kepada model ini. Naik taraf pelan Groq anda atau gunakan proksi network.corifeus.com.',
        rate_limit: 'Had kadar AI dicapai. Cuba lagi kemudian atau gunakan kunci Groq API anda sendiri dalam Tetapan.',
    },
    ne: {
        AI_DISABLED: 'AI निष्क्रिय छ। AI सेटिङमा सक्रिय गर्नुहोस्।',
        AI_PROMPT_REQUIRED: 'AI प्रम्प्ट आवश्यक छ।',
        GROQ_API_KEY_READONLY: 'Groq API कुञ्जी पठन-मात्र हो र परिमार्जन गर्न सकिँदैन।',
        blocked_api_access: 'तपाईंको Groq API योजनाले यो मोडेलमा पहुँच दिँदैन। Groq योजना अपग्रेड गर्नुहोस् वा network.corifeus.com प्रोक्सी प्रयोग गर्नुहोस्।',
        rate_limit: 'AI दर सीमामा पुगियो। पछि फेरि प्रयास गर्नुहोस् वा सेटिङमा आफ्नो Groq API कुञ्जी प्रयोग गर्नुहोस्।',
    },
    nl: {
        AI_DISABLED: 'AI is uitgeschakeld. Schakel het in bij AI-instellingen.',
        AI_PROMPT_REQUIRED: 'AI-prompt is vereist.',
        GROQ_API_KEY_READONLY: 'De Groq API-sleutel is alleen-lezen en kan niet worden gewijzigd.',
        blocked_api_access: 'Uw Groq API-plan staat geen toegang tot dit model toe. Upgrade uw Groq-plan of gebruik de network.corifeus.com proxy.',
        rate_limit: 'AI-snelheidslimiet bereikt. Probeer het later opnieuw of gebruik uw eigen Groq API-sleutel in de instellingen.',
    },
    no: {
        AI_DISABLED: 'AI er deaktivert. Aktiver det i AI-innstillinger.',
        AI_PROMPT_REQUIRED: 'AI-forespørsel er påkrevd.',
        GROQ_API_KEY_READONLY: 'Groq API-nøkkelen er skrivebeskyttet og kan ikke endres.',
        blocked_api_access: 'Groq API-planen din tillater ikke tilgang til denne modellen. Oppgrader Groq-planen din eller bruk network.corifeus.com proxy.',
        rate_limit: 'AI-hastighetsgrense nådd. Prøv igjen senere eller bruk din egen Groq API-nøkkel i innstillingene.',
    },
    pl: {
        AI_DISABLED: 'AI jest wyłączone. Włącz je w ustawieniach AI.',
        AI_PROMPT_REQUIRED: 'Zapytanie AI jest wymagane.',
        GROQ_API_KEY_READONLY: 'Klucz Groq API jest tylko do odczytu i nie może być modyfikowany.',
        blocked_api_access: 'Twój plan Groq API nie pozwala na dostęp do tego modelu. Zaktualizuj plan Groq lub użyj proxy network.corifeus.com.',
        rate_limit: 'Osiągnięto limit AI. Spróbuj ponownie później lub użyj własnego klucza Groq API w ustawieniach.',
    },
    'pt-BR': {
        AI_DISABLED: 'IA está desativada. Ative nas configurações de IA.',
        AI_PROMPT_REQUIRED: 'Consulta de IA é obrigatória.',
        GROQ_API_KEY_READONLY: 'A chave Groq API é somente leitura e não pode ser modificada.',
        blocked_api_access: 'Seu plano Groq API não permite acesso a este modelo. Atualize seu plano Groq ou use o proxy network.corifeus.com.',
        rate_limit: 'Limite de taxa de IA atingido. Tente novamente mais tarde ou use sua própria chave Groq API nas configurações.',
    },
    'pt-PT': {
        AI_DISABLED: 'IA está desativada. Ative nas definições de IA.',
        AI_PROMPT_REQUIRED: 'Consulta de IA é obrigatória.',
        GROQ_API_KEY_READONLY: 'A chave Groq API é apenas de leitura e não pode ser modificada.',
        blocked_api_access: 'O seu plano Groq API não permite acesso a este modelo. Atualize o seu plano Groq ou utilize o proxy network.corifeus.com.',
        rate_limit: 'Limite de taxa de IA atingido. Tente novamente mais tarde ou utilize a sua própria chave Groq API nas definições.',
    },
    ro: {
        AI_DISABLED: 'AI este dezactivat. Activați-l în setările AI.',
        AI_PROMPT_REQUIRED: 'Interogarea AI este necesară.',
        GROQ_API_KEY_READONLY: 'Cheia Groq API este doar pentru citire și nu poate fi modificată.',
        blocked_api_access: 'Planul dvs. Groq API nu permite accesul la acest model. Actualizați planul Groq sau utilizați proxy-ul network.corifeus.com.',
        rate_limit: 'Limita de rată AI atinsă. Încercați din nou mai târziu sau utilizați propria cheie Groq API în setări.',
    },
    ru: {
        AI_DISABLED: 'AI отключен. Включите его в настройках AI.',
        AI_PROMPT_REQUIRED: 'Требуется запрос AI.',
        GROQ_API_KEY_READONLY: 'Ключ Groq API доступен только для чтения и не может быть изменён.',
        blocked_api_access: 'Ваш план Groq API не позволяет доступ к этой модели. Обновите план Groq или используйте прокси network.corifeus.com.',
        rate_limit: 'Достигнут лимит AI. Попробуйте позже или используйте свой ключ Groq API в настройках.',
    },
    si: {
        AI_DISABLED: 'AI අක්‍රියයි. AI සැකසුම් තුළ සක්‍රිය කරන්න.',
        AI_PROMPT_REQUIRED: 'AI ඉල්ලීම අවශ්‍යයි.',
        GROQ_API_KEY_READONLY: 'Groq API යතුර කියවීම පමණක් වන අතර වෙනස් කළ නොහැක.',
        blocked_api_access: 'ඔබේ Groq API සැලැස්ම මෙම ආකෘතියට ප්‍රවේශය ලබා දෙන්නේ නැත. Groq සැලැස්ම උත්ශ්‍රේණි කරන්න හෝ network.corifeus.com proxy භාවිතා කරන්න.',
        rate_limit: 'AI අනුපාත සීමාවට ළඟා විය. පසුව නැවත උත්සාහ කරන්න හෝ සැකසුම් තුළ ඔබේම Groq API යතුර භාවිතා කරන්න.',
    },
    sk: {
        AI_DISABLED: 'AI je deaktivované. Povoľte ho v nastaveniach AI.',
        AI_PROMPT_REQUIRED: 'Je vyžadovaný AI dotaz.',
        GROQ_API_KEY_READONLY: 'Kľúč Groq API je iba na čítanie a nedá sa upraviť.',
        blocked_api_access: 'Váš plán Groq API neumožňuje prístup k tomuto modelu. Aktualizujte plán Groq alebo použite proxy network.corifeus.com.',
        rate_limit: 'Dosiahnutý limit AI. Skúste to neskôr alebo použite vlastný kľúč Groq API v nastaveniach.',
    },
    sl: {
        AI_DISABLED: 'AI je onemogočen. Omogočite ga v nastavitvah AI.',
        AI_PROMPT_REQUIRED: 'Zahteva AI je obvezna.',
        GROQ_API_KEY_READONLY: 'Ključ Groq API je samo za branje in ga ni mogoče spremeniti.',
        blocked_api_access: 'Vaš načrt Groq API ne dovoljuje dostopa do tega modela. Nadgradite načrt Groq ali uporabite proxy network.corifeus.com.',
        rate_limit: 'Dosežena je omejitev AI. Poskusite znova pozneje ali uporabite lastni ključ Groq API v nastavitvah.',
    },
    sr: {
        AI_DISABLED: 'AI је онемогућен. Омогућите га у AI подешавањима.',
        AI_PROMPT_REQUIRED: 'AI упит је обавезан.',
        GROQ_API_KEY_READONLY: 'Groq API кључ је само за читање и не може се мењати.',
        blocked_api_access: 'Ваш Groq API план не дозвољава приступ овом моделу. Надоградите Groq план или користите network.corifeus.com прокси.',
        rate_limit: 'Достигнут је AI лимит. Покушајте поново касније или користите сопствени Groq API кључ у подешавањима.',
    },
    sv: {
        AI_DISABLED: 'AI är inaktiverad. Aktivera det i AI-inställningar.',
        AI_PROMPT_REQUIRED: 'AI-förfrågan krävs.',
        GROQ_API_KEY_READONLY: 'Groq API-nyckeln är skrivskyddad och kan inte ändras.',
        blocked_api_access: 'Din Groq API-plan tillåter inte åtkomst till denna modell. Uppgradera din Groq-plan eller använd network.corifeus.com proxy.',
        rate_limit: 'AI-hastighetsgräns nådd. Försök igen senare eller använd din egen Groq API-nyckel i inställningarna.',
    },
    sw: {
        AI_DISABLED: 'AI imezimwa. Iwashe katika Mipangilio ya AI.',
        AI_PROMPT_REQUIRED: 'Ombi la AI linahitajika.',
        GROQ_API_KEY_READONLY: 'Ufunguo wa Groq API ni wa kusoma tu na hauwezi kubadilishwa.',
        blocked_api_access: 'Mpango wako wa Groq API hauruhusu ufikiaji wa modeli hii. Boresha mpango wako wa Groq au tumia proksi ya network.corifeus.com.',
        rate_limit: 'Kikomo cha kiwango cha AI kimefikiwa. Jaribu tena baadaye au tumia ufunguo wako wa Groq API katika Mipangilio.',
    },
    ta: {
        AI_DISABLED: 'AI முடக்கப்பட்டுள்ளது. AI அமைப்புகளில் இயக்கவும்.',
        AI_PROMPT_REQUIRED: 'AI வினவல் தேவை.',
        GROQ_API_KEY_READONLY: 'Groq API விசை படிக்க மட்டுமே மற்றும் மாற்ற முடியாது.',
        blocked_api_access: 'உங்கள் Groq API திட்டம் இந்த மாதிரிக்கான அணுகலை அனுமதிக்கவில்லை. Groq திட்டத்தை மேம்படுத்தவும் அல்லது network.corifeus.com ப்ராக்ஸியைப் பயன்படுத்தவும்.',
        rate_limit: 'AI வீத வரம்பு எட்டப்பட்டது. பின்னர் மீண்டும் முயற்சிக்கவும் அல்லது அமைப்புகளில் உங்கள் சொந்த Groq API விசையைப் பயன்படுத்தவும்.',
    },
    tg: {
        AI_DISABLED: 'AI ғайрифаъол аст. Онро дар танзимоти AI фаъол кунед.',
        AI_PROMPT_REQUIRED: 'Дархости AI лозим аст.',
        GROQ_API_KEY_READONLY: 'Калиди Groq API танҳо барои хондан аст ва тағйир дода намешавад.',
        blocked_api_access: 'Нақшаи Groq API-и шумо ба ин модел дастрасӣ намедиҳад. Нақшаи Groq-ро навсозӣ кунед ё прокси network.corifeus.com-ро истифода баред.',
        rate_limit: 'Ба ҳадди суръати AI расидед. Баъдтар бори дигар кӯшиш кунед ё калиди Groq API-и худро дар танзимот истифода баред.',
    },
    th: {
        AI_DISABLED: 'AI ถูกปิดใช้งาน เปิดใช้งานในการตั้งค่า AI',
        AI_PROMPT_REQUIRED: 'ต้องมีคำถาม AI',
        GROQ_API_KEY_READONLY: 'คีย์ Groq API เป็นแบบอ่านอย่างเดียวและไม่สามารถแก้ไขได้',
        blocked_api_access: 'แผน Groq API ของคุณไม่อนุญาตให้เข้าถึงโมเดลนี้ กรุณาอัปเกรดแผน Groq หรือใช้ proxy network.corifeus.com',
        rate_limit: 'ถึงขีดจำกัดอัตรา AI แล้ว ลองอีกครั้งในภายหลังหรือใช้คีย์ Groq API ของคุณเองในการตั้งค่า',
    },
    tr: {
        AI_DISABLED: 'AI devre dışı. AI Ayarlarında etkinleştirin.',
        AI_PROMPT_REQUIRED: 'AI sorgusu gereklidir.',
        GROQ_API_KEY_READONLY: 'Groq API anahtarı salt okunurdur ve değiştirilemez.',
        blocked_api_access: 'Groq API planınız bu modele erişime izin vermiyor. Groq planınızı yükseltin veya network.corifeus.com proxy kullanın.',
        rate_limit: 'AI hız sınırına ulaşıldı. Daha sonra tekrar deneyin veya Ayarlarda kendi Groq API anahtarınızı kullanın.',
    },
    uk: {
        AI_DISABLED: 'AI вимкнено. Увімкніть його в налаштуваннях AI.',
        AI_PROMPT_REQUIRED: 'Потрібен запит AI.',
        GROQ_API_KEY_READONLY: 'Ключ Groq API доступний лише для читання і не може бути змінений.',
        blocked_api_access: 'Ваш план Groq API не дозволяє доступ до цієї моделі. Оновіть план Groq або використовуйте проксі network.corifeus.com.',
        rate_limit: 'Досягнуто ліміт AI. Спробуйте пізніше або використовуйте власний ключ Groq API в налаштуваннях.',
    },
    vi: {
        AI_DISABLED: 'AI đã bị tắt. Bật nó trong Cài đặt AI.',
        AI_PROMPT_REQUIRED: 'Yêu cầu AI là bắt buộc.',
        GROQ_API_KEY_READONLY: 'Khóa Groq API chỉ đọc và không thể sửa đổi.',
        blocked_api_access: 'Gói Groq API của bạn không cho phép truy cập vào mô hình này. Vui lòng nâng cấp gói Groq hoặc sử dụng proxy network.corifeus.com.',
        rate_limit: 'Đã đạt giới hạn tốc độ AI. Thử lại sau hoặc sử dụng khóa Groq API của riêng bạn trong Cài đặt.',
    },
    'zh-HK': {
        AI_DISABLED: 'AI 已停用。請在 AI 設定中啟用。',
        AI_PROMPT_REQUIRED: '需要 AI 提示。',
        GROQ_API_KEY_READONLY: 'Groq API 金鑰為唯讀，無法修改。',
        blocked_api_access: '您的 Groq API 方案不允許存取此模型。請升級您的 Groq 方案或使用 network.corifeus.com 代理。',
        rate_limit: '已達到 AI 速率限制。請稍後再試或在設定中使用您自己的 Groq API 金鑰。',
    },
    'zh-TW': {
        AI_DISABLED: 'AI 已停用。請在 AI 設定中啟用。',
        AI_PROMPT_REQUIRED: '需要 AI 提示。',
        GROQ_API_KEY_READONLY: 'Groq API 金鑰為唯讀，無法修改。',
        blocked_api_access: '您的 Groq API 方案不允許存取此模型。請升級您的 Groq 方案或使用 network.corifeus.com 代理。',
        rate_limit: '已達到 AI 速率限制。請稍後再試或在設定中使用您自己的 Groq API 金鑰。',
    },
    zn: {
        AI_DISABLED: 'AI 已禁用。请在 AI 设置中启用。',
        AI_PROMPT_REQUIRED: '需要 AI 提示。',
        GROQ_API_KEY_READONLY: 'Groq API 密钥为只读，无法修改。',
        blocked_api_access: '您的 Groq API 计划不允许访问此模型。请升级您的 Groq 计划或使用 network.corifeus.com 代理。',
        rate_limit: '已达到 AI 速率限制。请稍后重试或在设置中使用您自己的 Groq API 密钥。',
    },
}

function injectEntries(filePath, entries) {
    let content = fs.readFileSync(filePath, 'utf8')

    const marker = 'invalid_console_command:'
    const markerIdx = content.indexOf(marker)
    if (markerIdx === -1) {
        return false
    }

    // Find end of that line
    const lineEnd = content.indexOf('\n', markerIdx)
    if (lineEnd === -1) return false

    // Ensure trailing comma on existing line
    const existingLine = content.substring(markerIdx, lineEnd)
    let updatedLine = existingLine
    if (!existingLine.trimEnd().endsWith(',')) {
        updatedLine = existingLine.trimEnd() + ','
    }

    // Build new lines
    const newLines = Object.entries(entries)
        .map(([k, v]) => {
            const escaped = v.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
            return `    "${k}": "${escaped}",`
        })
        .join('\n')

    const before = content.substring(0, markerIdx)
    const after = content.substring(lineEnd)
    content = before + updatedLine + '\n' + newLines + after

    // Remove trailing comma before closing brace
    content = content.replace(/,(\s*\n\s*\})/g, '$1')

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
    const content = fs.readFileSync(filePath, 'utf8')
    if (content.includes('blocked_api_access')) {
        console.log(`SKIP ${lang}: already done`)
        continue
    }
    if (injectEntries(filePath, TRANSLATIONS[lang])) {
        console.log(`OK ${lang}`)
        count++
    } else {
        console.warn(`FAIL ${lang}: marker not found`)
    }
}
console.log(`\nDone: ${count} languages updated`)
