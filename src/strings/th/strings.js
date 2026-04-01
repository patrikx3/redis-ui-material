const strings = {
  error: {
    cleared_license: "ใบอนุญาตเคลียร์แล้ว",
    invalid_license: "ใบอนุญาตไม่ถูกต้อง",
    license_max_devices_reached: "ถึงจำนวนที่นั่งอุปกรณ์สูงสุดแล้ว",
    license_readonly: "ใบอนุญาตสามารถเปลี่ยนแปลงได้จากเทอร์มินัลเซิร์ฟเวอร์เท่านั้น",
    server_error: "ข้อผิดพลาดของเซิร์ฟเวอร์ โปรดลองอีกครั้ง"
  },
  title: {
    donate: "บริจาค",
    jsonRecursive: "ขยายใบทั้งหมด",
    name: "P3X Redis UI",
    nameDonated: "P3X Redis UI+",
    main: "คุณสามารถเลือกการเชื่อมต่อ Redis เพื่อเชื่อมต่อจา��เมนูด้านล่างซ้าย",
    statistics: "สถิติ",
    error: "เกิดข้อผิดพลาด",
    connectingRedis: "กำลังเชื่อมต่อกับ Redis ...",
    socketioConnectError: "ข้อผิดพลาด Socket.IO",
    db: "DB",
    server: "เซิร์ฟเวอร์",
    clients: "ลูกค้า",
    memory: "หน่วยความจำ",
    persistence: "ความพากเพียร",
    stats: "สถิติ",
    replication: "การจำลองแบบ",
    cpu: "CPU",
    cluster: "Cluster",
    modules: "โมดูล",
    errorstats: "สถิติข้อผิดพลาด",
    commandstats: "สถิติคำสั่ง",
    latencystats: "สถิติเวลาแฝง",
    keysizes: "ขนาดคีย์",
    threads: "เธรด",
  },
  confirm: {
    dropIndex: "คุณแน่ใจหรือว่าต้องการลบดัชนีนี้?",
    uploadBuffer: "คุณแน่ใจหรือว่าจะอัปโหลดข้อมูลไบนารีนี้",
    uploadBufferDone: "ข้อมูลไบนารี่ถูกอัพโหลด",
    uploadBufferDoneAndSave: "ข้อมูลไบนารีถูกอัพโหลดและบันทึกบนเซิร์ฟเวอร์",
    title: "ยืนยัน",
    alert: "การแจ้งเตือน",
    info: "ข้อมูล",
    deleteListItem: "คุณแน่ใจที่จะลบรายการนี้หรือไม่?",
    deleteHashKey: "คุณแน่ใจหรือไม่ว่าจะลบรายการคีย์แฮชนี้",
    deleteStreamTimestamp: "คุณแน่ใจหรือว่าจะลบการประทับเวลาสตรีมนี้",
    deleteSetMember: "คุณแน่ใจหรือว่าจะลบสมาชิกชุดนี้",
    deleteZSetMember: "คุณแน่ใจหรือไม่ที่จะลบสมาชิกชุดที่เรียงลำดับนี้",
    deleteConnection: "ยืนยัน",
    deleteConnectionText: "คุณแน่ใจหรือไม่ว่าจะ��บการเชื่อมต่อ Redis นี้",
    deleteNode: "คุณแน่ใจหรือไม่ว่าจะลบโหนด Redis นี้",
    deleteAllKeys: opts => {
      return `ลบแผนผังนี้และกุญแจทั้งหมด (${opts.key})?`;
    },
    socketioConnectError: "Socket.IO ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ คุณสามารถโหลดซ้ำและลองแ��้ไขข้อผิดพลาดในการเชื่อมต่อด้วยตนเอง ไคลเอ็นต์ไม่ทราบวิธีแก้ปัญหาด้วยตนเอง",
    socketioAuthRequired: "ต้องมีการอนุญาต Socket.IO โปรดตรวจสอบสิทธิ์ด้วย HTTP Basic Auth (ชื่อผู้ใช้/รหัสผ่าน) แล้วโหลดซ้ำ",
    deleteKey: "คุณแน่ใจหรือว่าจะลบคีย์นี้",
    rename: {
      title: "คุณแน่ใจหรือว่าจะเปลี่ยนชื่อคีย์นี้",
      textContent: "การดำเนินการนี้จะเปลี่ยนชื่อคีย์อย่างถาวร",
      placeholder: "คีย์ Redis (จำเป็น)"
    },
    ttl: {
      title: "คุณแน่ใจหรือไม่ว่าต้องการเปลี่ยน TTL ของคีย์นี้",
      textContent: "การเปลี่ยน TTL จะอัปเดตเวลาใช้งานของคีย์นี้ เว้นว่างไว้เพื่อเก็บคีย์นี้ไว้ตลอดไป",
      placeholder: "TTL ของคีย์ TTL (จำนวนเต็มหรือว่าง)",
      placeholderPlaceholder: "ความว่างเปล่าหมายความว่ามันคงอยู่ตลอดไป มิฉะนั้นให้ป้อนจำนวนเต็ม",
      convertTextToTime: "แปลงข้อความเป็นเวลา",
      convertTextToTimePlaceholder: "เช่น 1d จะเป็น 86400"
    },
    license: {
      title: "กำหนดใบอนุญาต",
      textContent: "หากคุณต้องการใช้คุณสมบัติแบบชำระเงิน โปรดติดต่อ support@corifeus.com เพื่อขอใบอนุญาต ราคาคือ Pro 400 HUF/เดือน (€1/เดือน) หรือ 4,000 HUF/ปี (€10/ปี) และ Enterprise 1,200 HUF/เดือน (3 ยูโร/เดือน) หรือ 12,000 HUF/ปี (30 ยูโร/ปี) รายปีคือ 10x ต่อเดือน ด้วย 27% VAT ยอดรวมคือ Pro 500 HUF/เดือน (1.27 ยูโร/เดือน) หรือ 5,100 HUF/ปี (12.70 ยูโร/ปี), Enterprise 1,500 HUF/เดือน (3.81 ยูโร/เดือน) หรือ 15,200 HUF/ปี (€38.10/ปี) การตรวจสอบใบอนุญาตต้องมีการเข้าถึงอินเทอร์เน็ต ใบอนุญาตเริ่มต้นประกอบด้วย 5 ที่นั่ง หากต้องการที่นั่งเพิ่มเติม โปรดติดต่อเราที่ support@corifeus.com",
      placeholder: "รหัสใบอนุญาต"
    }
  },
  language: {
    ar: "العربية / Arabic",
    az: "Azərbaycanca / Azerbaijani",
    be: "Беларуская / Belarusian",
    bg: "Български / Bulgarian",
    bn: "বাংলা / Bengali",
    cs: "Čeština / Czech",
    da: "Dansk / Danish",
    de: "Deutsch / German",
    el: "Ελληνικά / Greek",
    en: "English",
    es: "Español / Spanish",
    et: "Eesti / Estonian",
    fi: "Suomi / Finnish",
    fil: "Filipino / Filipino",
    fr: "Français / French",
    he: "עברית / Hebrew",
    hr: "Hrvatski / Croatian",
    hu: "Magyar / Hungarian",
    hy: "Հայերեն / Armenian",
    id: "Bahasa Indonesia / Indonesian",
    it: "Italiano / Italian",
    ja: "日本語 / Japanese",
    ka: "ქართული / Georgian",
    kk: "Қазақша / Kazakh",
    km: "ខ្មែរ / Khmer",
    ko: "한국어 / Korean",
    ky: "Кыргызча / Kyrgyz",
    lt: "Lietuvių / Lithuanian",
    mk: "Македонски / Macedonian",
    ms: "Bahasa Melayu / Malay",
    ne: "नेपाली / Nepali",
    nl: "Nederlands / Dutch",
    no: "Norsk / Norwegian",
    pl: "Polski / Polish",
    "pt-BR": "Português (Brasil) / Portuguese (Brazil)",
    "pt-PT": "Português / Portuguese",
    ro: "Română / Romanian",
    ru: "Русский / Russian",
    sk: "Slovenčina / Slovak",
    sl: "Slovenščina / Slovenian",
    sr: "Српски / Serbian",
    sv: "Svenska / Swedish",
    tg: "Тоҷикӣ / Tajik",
    th: "ไทย / Thai",
    tr: "Türkçe / Turkish",
    uk: "Українська / Ukrainian",
    vi: "Tiếng Việt / Vietnamese",
    "zh-HK": "中文（香港） / Chinese (Hong Kong)",
    "zh-TW": "中文（台灣） / Chinese (Taiwan)",
    zn: "中文 / Chinese",
    bs: 'Bosanski / Bosnian',
    si: 'සිංහල / Sinhala',
    sw: 'Kiswahili / Swahili',
    ta: 'தமிழ் / Tamil'
  },
  intention: {
    copy: "คัดลอก",
    downloadBuffer: "ดาวน์โหลด��บนารี่",
    setBuffer: "อัปโหลดไบนารี",
    exportKeys: "ส่งออกคีย์",
    exportAllKeys: (opts) => `ส่งออกคีย์ทั้งหมด ${opts.count} รายการ`,
    exportSearchResults: (opts) => `ส่งออก ${opts.count} ผลลัพธ์`,
    importKeys: "นำเข้าคีย์",
    saveWithFormatJson: "บันทึกด้วยรูปแบบ",
    formatJson: "จัดรูปแบบ Json",
    wrap: "ห่อ",
    unwrap: "แกะห่อ",
    downloadJson: "ดาวน์โหลด JSON.dll",
    pubsubMonitor: "มอนิเตอร์ PubSub",
    // When you translate the language, keep the Language in English
    // eg. Idioma / Language
    language: "ภาษา",
    ok: "ตกลง",
    addKey: "เพิ่มลงในคีย์นี้",
    addKeyRoot: "เพิ่มคี���์รูท",
    reloadKey: "โหลดคีย์ซ้ำ",
    reload: "โหลดซ้ำ",
    close: "ปิด",
    commands: "คำสั่ง",
    view: "ดู",
    statistics: "สถิติ",
    refresh: "รีเฟรช",
    pause: "หยุดชั่วคราว",
    resume: "ดำเนินการต่อ",
    clear: "ชัดเจน",
    rename: "เปลี่ยนชื่อ",
    main: "ฐานข้อมูล",
    cancel: "ยกเลิก",
    theme: "ธีม",
    github: "GitHub",
    githubRepo: "พื้นที่เก็บข้อมูล",
    githubRelease: "ข่าวประชาสัมพันธ์",
    githubChangelog: "บันทึกการเปลี่ยนแปลง",
    info: "Info",
    settings: "การตั้งค่า",
    connect: "เชื่อมต่อ",
    disconnect: "ตัดการเชื่อมต่อ",
    overview: "ภาพรวม",
    console: "คอนโซล",
    noConnections: "ไม่มีการเชื่อมต่อ เพิ่มการเชื่อมต่อในเมนูการตั้งค่า",
    noConnectionsInSettings: "ไม่มีการเชื่อมต่อ คุณสามารถเพิ่มการเชื่อมต่อใหม่ด้านบนได้",
    connectionAdd: "การเชื่อมต่อใหม่",
    addGroup: "เพิ่มกลุ่ม",
    extend: "ขยาย",
    collapse: "ยุบ",
    add: "เพิ่ม",
    edit: "แก้ไข",
    save: "บันทึก",
    ttl: "ตั้งค่า TTL",
    license: "กำหนดใบอนุญาต",
    delete: "ลบ",
    remove: "ลบ",
    sure: "แน่นอน",
    testConnection: "ทดสอบการเชื่อมต่อ",
    getKey: "กำลังโหลดคีย์ Redis และข้อมูลที่เกี่ยวข้อง ...",
    jsonViewShow: "จอแสดงผล JSON",
    jsonViewEditor: "แก้ไข JSON",
    quickConsole: "คอนโซลด่วน",
  },
  label: {
    id: {
      nodeId: "รหัสโหนด",
      id: "รหัสการเชื่อมต่อ",
      info: "หากคุณไม่ต้องการเปลี่ยนคุณสมบัติของ: sshPassword, sshPrivateKey, รหัสผ่าน, tlsCrt, tlsKey, tlsCa โปรดป้อน ID ของการเชื่อมต่อในคุณสมบัติเหล่านั้นเพื่อรักษาค่าคุณสมบัติให้คงเดิม หากคุณต้องการตรรกะเดียวกันในรหัสผ่านโหนด ให้ป้อน ID โหนดในรหัสผ่านโหนด"
    },
    secureFeature: "หากคุณเห็นค่าที่ขึ้นต้นด้วย P3X และมีลักษณะเหมือนกัน แสดงว่าเป็นคุณสมบัติที่ปลอดภัย หากต้องการเปลี่ยนการตั้งค่า เพียงแทนที่การตั้งค่าเหล่านี้ด้วยค่าว่างหรืออย่างอื่น จากนั้นระบบจะบันทึกการตั้งค่าเหล่านั้น หากคุณไม่เปลี่ยนการตั้งค่า การตั้งค่าจะถูกเก็บไว้เหมือนเดิมบนเซิร์ฟเวอร์",
    aiTranslating: "กำลังแปล...",
    aiSettings: "ตั้งค่า AI",
    aiGroqApiKey: "คีย์ API Groq",
    aiGroqApiKeyInfo: "ไม่บังคับ คีย์ API Groq ของคุณเองเพื่อประสิทธิภาพที่ดีขึ้น รับคีย์ฟรีจาก",
    aiGroqApiKeyPlaceholder: "gsk_...",
    aiGroqApiKeySaved: "บันทึกคีย์ API AI แล้ว",
    aiGroqApiKeyInvalid: "Invalid Groq API key",
    aiGroqApiKeyNotSet: "ยังไม่ตั้งค่า (ค่าเริ่มต้นเซิร์ฟเวอร์)",
    aiEnabled: "AI เปิดใช้งาน",
    aiEnabledYes: "ใช่",
    aiEnabledNo: "ไม่",
    aiRouteViaNetwork: "Route via network.corifeus.com",
    aiRoutingDirect: "Queries go directly to Groq using your own API key, bypassing network.corifeus.com.",
    aiRoutingNetwork: "AI queries are routed through network.corifeus.com. If you have your own free Groq API key, you can turn off this switch to route directly to Groq without network.corifeus.com.",
    ssh: {
      on: "เปิด SSH",
      off: "ปิด SSH",
      sshHost: "โฮสต์ SSH",
      sshPort: "พอร์ต SSH",
      sshUsername: "ชื่อผู้ใช้ SSH",
      sshPassword: "รหัสผ่าน SSH",
      sshPrivateKey: "รหัสส่วนตัว SSH"
    },
    isBuffer: opts => `[object ArrayBuffer] หมายความว่าค่าเป็นข้อมูลไบนารีหรือค่ามากกว่า ${opts.maxValueAsBuffer}`,
    streamValue: `ฟิลด์สตรีมและค่าเป็น oneliner เช่น: field1 value1 "field 2" "value 2"`,
    streamTimestampId: `'*' หมายถึง สร้างอัตโนมัติหรือสเปคเป็น <millisecondsTime>-<sequenceNumber>`,
    unableToLoadKey: ({
      key
    }) => {
      return `ไม่สามารถโหลดคีย์นี้ได้: ${key}. เป็นไปได้ คีย์ถูกลบไปแล้ว ข้อผิดพลาดที่แน่นอนอยู่ในคอนโซล`;
    },
    bigJson: "อ็อบเจ็กต์ JSON นี้มีขนาดเกิน 10 kb ดังนั้นตรวจสอบให้แน่ใจว่าคุณรู้ว่าคุณกำลังทำอะไรอยู่ เนื่องจากบางฟังก์ชันอาจแสดงผลช้า",
    addNode: "เพิ่มโหนด",
    validateJson: "ตรวจสอบ JSON",
    reducedFunction: `ฟังก์ชั่นลดลง`,
    tooManyKeys: opts => {
      return `สำหรับฟังก์ชันสูงสุดที่อนุญาตทั้งหมด คีย์ทั้งหมดคือ ${opts.maxLightKeysCount} นับ ฐานข้อมูลนี้มีมากกว่าคีย์ที่อนุญาตทั้งหมด ${opts.count}. การเรียงลำดับคีย์และข้อมูลแผนผังแฟนซีเพิ่มเติมถูกปิดใช้งาน การค้นหาเกิดขึ้นเฉพาะบนเซิร์ฟเวอร์แทนการค้นหาไคลเอ็นต์`;
    },
    redisCommandNotFound: "ไม่พบการจับคู่คำสั่ง Redis ...",
    treeKeyStore: `การเรียงลำดับ (การเปรียบเทียบแบบธรรมชาติ) จะดำเนินการบนไคลเอนต์หรือที่เรียกว่าเบราว์เซอร์ ซึ่งหมายความว่ามีการลงโทษสำหรับชุดขนาดใหญ่ขนาดใหญ่ เช่น มากกว่า 10,000 คีย์ ซึ่งอาจเพิ่มเวลาเล็กน้อยในการแสดงผลเพจ ไม่มีการเรียงลำดับคีย์ใน Redis มีเพียงเท่านี้เท่านั้น`,
    socketIoTimeout: options => {
      return `Socket.IO หมดเวลาสำหรับคำขอนี้ (สูงสุด ${options.timeout / 1000} วินาที) ...`;
    },
    resizerInfo: options => {
      return `ความกว้างขั้นต่ำของแผงด้านซ้ายหรือด้านขวาคือ ${options.width}พิกเซล`;
    },
    jsonViewNotParsable: "ค่านี้ไม่สามารถแยกวิเคราะห์ JSON ได้  ",
    ttlTitle: "ตั้งค่า TTL เป็นวินาที",
    passwordSecure: "รหัสผ่านอาจจะว่างเปล่า แต่ยังคงแสดงตัวอักษร นี่คือคุณลักษณะด้านความปลอดภัย",
    tlsWithoutCert: "เปิดใช้งาน TLS โดยไม่มีใบรับรองเพิ่มเติม",
    tlsRejectUnauthorized: "ปฏิเสธใบรับรองที่ไม่ได้รับอนุญาต",
    tlsSecure: "หากคุณเห็นการกำหนดค่า TLS ที่ขึ้นต้นด้วย P3X หรือการต���้งค่า TLS ทั้งหมดเหมือนกัน แสดงว่าเป็นคุณสมบัติที่ปลอดภัย หากต้องการเปลี่ยนการตั้งค่า เพียงแทนที่การตั้งค่าเหล่านี้ด้วยค่าว่างหรืออย่างอื่น จากนั้นระบบจะบันทึกการตั้งค่าเหล่านั้น หากคุณไม่เปลี่ยนการตั้งค่า TLS การตั้งค่าจะถูกเก็บไว้เหมือนเดิมบนเซิร์ฟเวอร์",
    treeSeparatorEmpty: "หากตัวแยกแผ��ผังว่างเปล่า ต้นไม้จะไม่มีโหนดที่ซ้อนกัน เป็นเพียงรายการล้วนๆ",
    treeSeparatorEmptyNote: "ไม่มีโหนดที่ซ้อนกัน เป็นเพียงรายการล้วนๆ",
    welcomeConsole: "ยินดีต้อนรับสู่คอนโซล Redis",
    welcomeConsoleInfo: "เปิดใช้งานประวัติเคอร์เซอร์ขึ้นหรือลง",
    redisListIndexInfo: "เว้นว่างไว้เพื่อต่อท้าย -1 เพื่อเติมหรือบันทึกลงในตำแหน่งที่แสดง",
    console: "คอนโซล",
    connectiondAdd: "เพิ่มการเชื่อมต่อ",
    connectiondEdit: "แก้ไขการเชื่อมต่อ",
    connectiondView: "ดูการเชื่อมต่อ",
    connections: "การเชื่อมต่อ",
    licenseInfo: "ใบอนุญาต",
    licenseEditable: "ใบอนุญาตแก้ไขได้",
    licenseEditableYes: "ใช่",
    licenseEditableNo: "ไม่",
    licenseTerminalOnly: "ใบอนุญาตสามารถกำหนดค่าได้จากเทอร์มินัลเซิร์ฟเวอร์เท่านั้น",
    licenseTierPolicyTitle: "นโยบายระดับ",
    licenseTierPolicyText: "<h4>Free</h4>core Redis UI เท่านั้น; ไม่มีช่องสัญญาณ SSH, ไม่มีโหมดการเชื่อมต่อแบบอ่านอย่างเดียว, ไม่มี Cluster/Sentinel, ไม่มีการแก้ไข JSON/อัปโหลดไบนารี/ไบนารีดาวน์โหลด, ไม่มี ReJSON.<br/><strong>ราคา: 0 HUF/เดือน (0 ยูโร/เดือน).</strong><br/><br/><h4>Pro</h4>SSH tunneling, โหมดการเชื่อมต่อแบบอ่านอย่างเดียว (รวมถึง --readonly-connections/-r), แก้ไข JSON, อัปโหลดไบนารี่, ดาวน์โหลดไบนารี, ReJSON.<br/><strong>ราคาพื้นฐาน: 400 HUF/เดือน (1 ยูโร/เดือน) หรือ 4,000 HUF/ปี (€10/ปี).</strong><br/><strong>รวมด้วย 27% VAT: 500 HUF/เดือน (1.27 ยูโร/เดือน) หรือ 5,100 HUF/ปี (€12.70/ปี).</strong><br/><br/><h4>Enterprise</h4>SSH tunneling, Cluster และ Sentinel รวมถึงแก้ไข JSON, อัปโหลดไบนารี, ดาวน์โหลดไบนารี, ReJSON; --readonly-connections/-r ยังใช้งานได้ <br/><strong>ราคาพื้นฐาน: 1,200 HUF/เดือน (3 ยูโร/เดือน) หรือ 12,000 HUF/ปี (€30/ปี).</strong><br/><strong>รวมด้วย 27% VAT: 1,500 HUF/เดือน (€3.81/เดือน) หรือ 15,200 HUF/ปี (€38.10/ปี).</strong><br/><br/><h4>Yกฎช่วงแรก</h4>Yราคาช่วงต้นคือ 10 เท่าของรายเดือน ราคา<br/><br/><h4>Seats</h4>ใบอนุญาตเริ่มต้นประกอบด้วย 5 ที่นั่ง หากคุณต้องการที่นั่งเพิ่ม โปรดติดต่อเราที่ <a href='mailto:mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><br/><h4>Enterprise ทดลองใช้</h4> ฟรี 10 วันสำหรับทุกคนที่มีที่อยู่อีเมลจริง (อีเมลที่ไม่ใช่การทดสอบ).<br/><hr/><h4>ข้อมูลการเรียกเก็บเงินในอีเมล</h4>Name, อีเมลการเรียกเก็บเงิน, รหัสประเทศ, รหัสไปรษณีย์, เมือง, ที่อยู่, VAT ID (ไม่จำเป็น).<br/><br/><h4>Payment</h4>PayPal การชำระเงินมีเฉพาะใน HUF (ฟอรินต์); หลังจากโอนเงินแล้ว @ <a href='https://paypal.me/corifeus'>https://paypal.me/corifeus</a> ฉันจะส่งใบแจ้งหนี้ไปให้คุณ การชำระเงินทั้งหมดไม่สามารถคืนเงินได้<br/><br/><h4>VAT</h4>VAT จะถูกเพิ่มเข้าไปในราคา (27% ใน ฮังการี).<br/><hr/><h4>ติดต่อ</h4>หากคุณต้องการทักทายหรือมีคำถาม โปรดติดต่อ <a href='mailto:mailto:support@corifeus.com'>support@corifeus.com</a>.<br/><hr/><h4>Language</h4>ใบแจ้งหนี้และใบอนุญาต การสื่อสารทางอีเมลเป็นภาษาอังกฤษ สกุลเงินของใบแจ้งหนี้คือ HUF.<br/><hr/><h4>Note</h4>License การตรวจสอบความถูกต้องต้องมีการเข้าถึงอินเทอร์เน็ต",
    licenseState: "รัฐ",
    licenseStateActive: "ใช้งานอยู่",
    licenseStateInactive: "ไม่ได้ใช้งาน",
    licenseStateNoLicense: "ไม่มีใบอนุญาต",
    licenseKeyMasked: "คีย์ที่บันทึกไว้",
    licenseTier: "ชั้น",
    licenseValid: "ถูกต้อง",
    licenseStatus: "สถานะใบอนุญาต",
    licenseReason: "เหตุผล",
    licenseCheckedAt: "ตรวจที่",
    licenseStartsAt: "เริ่มต้นที่",
    licenseExpiresAt: "หมดอายุที่",
    licenseDaysLeft: "เหลืออีกไม่กี่วัน",
    licenseMaxDevices: "อุปกรณ์สูงสุด",
    licenseActiveDevices: "อุปกรณ์ที่ใช้งานอยู่",
    licenseActiveDevicesInfo: "หากไม่ได้ใช้งานอุปกรณ์อีกต่อไป ที่นั่งจะถูกปล่อยโดยอัตโนมัติหลังจากผ่านไป 75 นาที",
    licenseCustomerEmail: "อีเมล์ลูกค้า",
    licenseFeatures: "คุณสมบัติ",
    licenseFeaturesEmpty: "ไม่มีคุณสมบัติพิเศษ",
    licenseFeatureReadonlyMode: "โหมดการเชื่อมต่อแบบอ่านอย่างเดียว",
    licenseFeatureReadonlyConnectionsFlag: "การเชื่อมต่อแบบอ่านอย่างเดียว (--readonly-connections/-r)",
    licenseFeatureSsh: "การขุดอุโมงค์ SSH",
    licenseFeatureCluster: "การเชื่อมต่อ Cluster",
    licenseFeatureSentinel: "การเชื่อมต่อ Sentinel",
    licenseFeatureReJSON: "ReJSON (ชนิดข้อมูล JSON)",
    keysSort: {
      on: "เปิดการเรียงลำดับคีย์",
      off: "การเรียงลำดับคีย์ออก"
    },
    cluster: {
      on: "เปิด Cluster",
      off: "ปิด Cluster"
    },
    sentinel: {
      on: "เปิด Sentinel",
      off: "ปิด Sentinel",
      name: "ชื่อ Sentinel"
    },
    readonly: {
      on: "เปิดอ่านอย่างเดียว",
      off: "ปิดอ่านอย่างเดียว"
    },
    proSshOnly: "SSH มีให้ใช้งานในรุ่น Pro หรือ Enterprise",
    proReadonlyOnly: "โหมดการเชื่อมต่อแบบอ่านอย่างเดียวมีให้ใช้งานในรุ่น Pro หรือ Enterprise",
    enterpriseClusterSentinelOnly: "Cluster ��ละ Sentinel มีเฉพาะใน Enterprise เท่านั้น",
    theme: {
      light: "เบา",
      dark: "องค์กรแห่งความมืด",
      darkNeu: "มืด",
      darkoBluo: "ดาร์โก บลู",
      enterprise: "องค์กร",
      redis: "Redis",
      matrix: "เมทริกซ์"
    },
    connected: opts => {
      return `เชื่อมต่อแล้ว: ${opts.name}`;
    },
    tree: "ต้นไม้",
    askAuth: "ขออนุญาติ",
    keyboardShortcuts: "Keyboard Shortcuts",
    about: "About",
    supportedLanguages: "Supported Languages",
    version: "Version",
    redisVersion: "Redis Version",
    modules: "โมดูล",
    shortcutRefresh: "Refresh",
    shortcutSearch: "Focus Search",
    shortcutNewKey: "New Key",
    shortcutDisconnect: "ตัดการเชื่อมต่อ",
    themeAuto: "Auto (system)",
    shortcutCommandPalette: "Command Palette",
    commandPalette: "Command Palette",
    noResults: "No results",
    redisCommandsReference: "คำสั่ง Redis",
    ungrouped: "ไม่มีกลุ่ม",
    grouped: "Grouped",
    connectFirst: "เชื่อมต่อกับเซิร์ฟเวอร์ Redis ก่อน",
    searchLanguage: "ค้นหาภาษา...",
    exportProgress: "กำลังส่งออกคีย์...",
    importProgress: "กำลังนำเข้าคีย์...",
    importPreview: "แสดงตัวอย่าง",
    importOverwrite: "เขียนทับ",
    importSkip: "ข้าม",
    importConflict: "หากคีย์มีอยู่แล้ว:",
    noKeysToExport: "ไม่มีคีย์ที่จะส่งออก",
    time: "เวลา",
    loading: "กำลังโหลด...",
    autoRefresh: "อัตโนมัติ",
    exportSearchHint: "ส่งออกเฉพาะคีย์ที่ตรงกับการค้นหาปัจจุบัน",
    importSearchHint: "การนำเข้าจะใช้กับฐานข้อมูลทั้งหมด ไม่ใช่แค่ผลการค้นหา",
    importNoKeys: "ไม่พบคีย์ในไฟล์",
  },
  status: {
    dataCopied: "ข้อมูลอยู่ในคลิปบอร์ด",
    licenseSaved: "บันทึกใบอนุญาตแล้ว",
    exportDone: "ส่งออกเสร็จสิ้น",
    indexCreated: "สร้างดัชนีแล้ว",
    indexDropped: "ลบดัชนีแล้ว",
    importDone: (opts) => `นำเข้าเสร็จสิ้น: ${opts.created} สร้างแล้ว, ${opts.skipped} ข้ามแล้ว, ${opts.errors} ข้อผิดพลาด`,
    nodeRemoved: "นำโหนดออกแล้ว",
    keyIsNotExisting: "คีย์นี้อาจถูกลบหรือหมดอายุแล้ว",
    keyCount: opts => {
      if (opts.keyCount === 0) {
        return "ไม่มีกุญแจ";
      } else if (opts.keyCount === 1) {
        return "1 คีย์";
      } else {
        return `${opts.keyCount} กุญแจ`;
      }
    },
    treeExpandAll: "ขยายใบต้นไม้ทั้งหมด การดำเนินการนี้อาจมีราคาแพงและอาจต้องใช้เวลา ...",
    noRedisKeys: "ไม่มีคีย์ในฐานข้อมูลนี้",
    redisConnected: "เชื่อมต่อ Redis ส���เร็จแล้ว",
    reloadingDataInfo: "กำลังโหลดข้อมูลข้อมูล Redis อีกครั้ง",
    added: "เพิ่มแล้ว",
    saved: "อัปเดตแล้ว",
    cancelled: "ยกเลิกแล้ว",
    deleted: "ลบแล้ว",
    savedRedis: "ข้อมูล Redis จะถูกบันทึกไว้",
    redisDisconnected: opts => {
      return `การเชื่อมต่อปัจจุบันมีข้อผิดพลาด: ${opts.error.message}`;
    },
    dbChanged: opts => {
      return `ดัชนี db ตั้งค่าเป็น ${opts.db}. `;
    },
    treeDeleted: opts => {
      return `ทรีคีย์ถูกลบแล้ว (${opts.key}).`;
    },
    deletedKey: opts => {
      return `คีย์ถูกลบแล้ว (${opts.key}).`;
    },
    renamedKey: "เปลี่ยนชื่อคีย์นี้แล้ว",
    ttlChanged: "TTL ของคีย์นี้มีการเปลี่ยนแปลง",
    notInteger: "อินพุตนี้ไม่ใช่จำ���วนเต็ม",
    persisted: "กุญแจดอกนี้จะคงอยู่ตลอดไป",
    set: "กุญแจถูกตั้งค่า/เพิ่ม"
  },
  code: {
    "delete-connection": "การเชื่อมต่อนี้ถูกลบแล้ว ดังนั้นคุณจึงยกเลิกการเชื่อมต่อกับอินสแตนซ์ Redis นี้",
    "save-connection": "การเชื่อมต่อน��้มีการเปลี่ยนแปลง ดังนั้นคุณจึงยกเลิกการเชื่อมต่อกับอินสแตนซ์ Redis นี้ คุณสามารถเชื่อมต่อใหม่ได้",
    "readonly-connections": "การเชื่อมต่อเพิ่ม/บันทึก/ลบเป็นแบบอ่านอย่างเดียวเท่านั้น!",
    "readonly-connection-mode": "การเชื่อมต่อนี้เป็นโหมดอ่านอย่างเดียว!",
    "list-out-of-bounds": "ดัชนีรายการนี้อยู่นอกขอบเขต",
    "donation-ware-feature": "คุณลักษณะนี้มีอยู่ในเวอร์ชันบริจาค",
    "feature-pro-readonly-required": "โหมดการเชื่อมต่อแบบอ่านอย่างเดียวต้องใช้ใบอนุญาต Pro หรือ Enterprise",
    "feature-pro-ssh-required": "การทำทันเนล SSH จำเป็นต้องมีใบอนุญาต Pro หรือ Enterprise",
    "feature-enterprise-cluster-sentinel-required": "Cluster และ Sentinel จำเป็นต้องมีใบอนุญาตระดับองค์กร",
    "feature-pro-json-binary-required": "แก้ไข JSON อัปโหลดไบนารี่ และดาวน์โหลดไบนารี่ต้องใช้ใบอนุญาต Pro หรือ Enterprise",
    "feature-pro-rejson-required": "ReJSON (ประเภทข้อมูล JSON) ต้องใช้ใบอนุญาต Pro หรือ Enterprise",
    "invalid-json-value": "ค่านี้ไม่ถูกต้อง JSON",
    "http_auth_required": "ต้องมีการอนุญาต: โปรดตรวจสอบสิทธิ์กับ HTTP Basic Auth และโหลดซ้ำ",
    "auto-connection-failed": "เป็นไปได้ การเชื่อมต่อถูกลบออก และการเชื่อมต่ออัตโนมัติล้มเหลวด้วยเหตุนี้",
    invalid_console_command: "คำสั่งนี้ใช้ไม่ได้กับ GUI"
  },
  licenseReason: {
    LICENSE_VALID: "ใบอนุญาตถูกต้อง",
    LICENSE_INVALID: "ใบอนุญาตไม่ถูกต้อง",
    LICENSE_MISSING: "ไม่ม��การตั้งค่ารหัสใบอนุญาต",
    LICENSE_DISABLED: "ใบอนุญาตถูกปิดใช้งานในการกำหนดค่าเซิร์ฟเวอร์",
    LICENSE_NOT_FOUND: "ไม่พบใบอนุญาต",
    LICENSE_EXPIRED: "ใบอนุญาตหมดอายุแล้ว",
    LICENSE_CLEARED: "ล้างรหัสใบอนุญาตแล้ว",
    LICENSE_MAX_DEVICES_REACHED: "ถึงจำนวนที่นั่งอุปกรณ์สูงสุดแล้ว",
    PRODUCT_MISMATCH: "ผลิตภัณฑ์ลิขสิทธิ์ไม่ตรงกัน"
  },
  licenseStatusValue: {
    active: "ใช้งานอยู่",
    deleted: "ลบแล้ว",
    all: "ทั้งหมด",
    expired: "หมดอายุแล้ว",
    missing: "หายไป",
    inactive: "ไม่ได้ใช้งาน"
  },
  form: {
    error: {
      required: "จำเป็น",
      port: "พอร์ตอ���ู่ระหว่าง 1-65535",
      invalid: "แบบฟอร์มไม่ถูกต้อง"
    },
    connection: {
      label: {
        name: "ชื่อ",
        group: "Group",
        host: "ชื่อโฮสต์",
        port: "ท่าเรือ",
        password: "รหัสผ่าน",
        username: "ชื่อผู้ใช้"
      }
    },
    treeSettings: {
      maxValueDisplay: "ความยาวสตริงการแสดงค่าสูงสุด",
      maxValueDisplayInfo: "หากตั้งค่าเป็น 0 แสดงค่าเต็ม หากมากกว่า 0 ให้ตัดทอนตามความยาวนี้ ถ้า -1: สำหรับสตริง ให้ซ่อนค่าจนกว่าจะแก้ไข สำหรับประเภทอื่นๆ ให้แสดงเ���ื้อหาทั้งหมด",
      maxKeys: "จำนวนคีย์สูงสุด",
      maxKeysInfo: "เพื่อให้ GUI ไม่ขัดข้อง เราจึงจำกัดจำนวนคีย์สูงสุด",
      keyCount: () => {
        return `จำนวนปุ่ม: ${p3xr.state.keysRaw.length}`;
      },
      label: {
        animation: "ใช้ภาพเคลื่อนไหว",
        noAnimation: "ไม่มีภาพเคลื่อนไหว",
        jsonFormatTwoSpace: "จัดรูปแบบ JSON โดยเว้นวรรค 2 ช่อง",
        jsonFormatFourSpace: "จัดรูปแบบ JSON ด้วยช่องว่าง 4 ช่อง",
        formName: "การตั้งค่า Redis",
        searchModeClient: "โหมดการค้นหาลูกค้า",
        searchModeServer: "โหมดการค้นหาเซิร์ฟเวอร์",
        searchModeStartsWith: "ค้นหาด้วยการเริ่มต้นด้วยโหมด",
        searchModeIncludes: "ค้นหารวมถึงโหมด"
      },
      field: {
        treeSeparator: "เครื่องแยกต้นไม้",
        treeSeparatorSelector: "ตัวเลือกตัวแยกต้���ไม้",
        page: "จำนวนเพจต้นไม้",
        keyPageCount: "จำนวนการเพจคีย์",
        keysSort: "จัดเรียงคีย์",
        searchMode: "โหมดการค้นหา",
        searchModeStartsWith: "ค้นหาเริ่มต้นด้วย / รวม"
      },
      error: {
        keyPageCount: "จำนวนหน้าหลักต้องเป็นจำนวนเต็มระหว่าง 5 - 100",
        page: "จำนวนหน้าต้องเป็นจำนวนเต็มระหว่าง 10 - 5,000",
        maxValueDisplay: "ค่าที่แสดงสูงสุดต้องเป็นจำนวนเต็มระ���ว่าง -1 ถึง 32768",
        maxKeys: "ค่าจำนวนคีย์สูงสุดต้องเป็นจำนวนเต็มระหว่าง 100 ถึง 100,000"
      }
    },
    key: {
      label: {
        formName: {
          add: "เพิ่มคีย์ Redis ใหม่",
          edit: "แก้ไขคีย์ Redis",
          append: "เพิ่มไปยังคีย์ Redis ที่มีอยู่"
        }
      },
      field: {
        streamTimestamp: "การประทับเวลา",
        key: "คีย์",
        type: "ประเภท",
        index: "ดัชนี",
        hashKey: "แฮชคีย์",
        score: "คะแนน",
        value: "ความคุ้มค่า"
      },
      error: {
        streamTimestamp: "ต้องมีการประทับเวลา รูปแบบ Redis หรือเป็น *",
        key: "สิ่งสำคัญคือต้องมีอักขระอย่างน้อยหนึ่งตัว",
        hashKey: "คีย์ตารางแฮชมีอักขระอย่างน้อยหนึ่งตัว",
        score: "จำเป็นต้องมีคะแนนชุดการเรียงลำดับ",
        value: "ต้องระบุค่า"
      }
    },
    main: {
      label: {
        database: "DB"
      }
    }
  },
  page: {
    search: {
      title: "ค้นหา",
      index: "ดัชนี",
      query: "คำค้นหา",
      results: "ผลลัพธ์",
      noIndex: "ไม่พบดัชนี",
      createIndex: "สร้างดัชนี",
      dropIndex: "ลบดัชนี",
      indexInfo: "ข้อมูลดัชนี",
      indexName: "ชื่อดัชนี",
      prefix: "คำนำหน้าคีย์ (ไม่บังคับ)",
      fieldName: "ชื่อฟิลด์",
    },
    monitor: {
      title: "การตรวจสอบ",
      memory: "หน่วยความจำ",
      opsPerSec: "ปฏิบัติการ/วินาที",
      clients: "ไคลเอนต์",
      blocked: "ถูกบล็อก",
      hitsMisses: "อัตราการเข้าถึง",
      networkIo: "เครือข่าย I/O",
      slowLog: "บันทึกช้า",
      totalCommands: "ทั้งหมด",
      expired: "หมดอายุ",
      evicted: "ถูกลบ",
      clientList: "รายชื่อไคลเอนต์",
      topKeys: "คีย์ที่ใหญ่ที่สุดตามหน่วยความจำ",
      killClient: "ปิดไคลเอนต์",
      clientKilled: "ไคลเอนต์ถูกปิด",
      confirmKillClient: "คุณแน่ใจหรือว่าต้องการปิดไคลเอนต์นี้?",
      noKeys: "ไม่มีคีย์",
      noClients: "ไม่มีไคลเอนต์",
    },
    overview: {
      noConnected: "ไม่มีการเชื่อมต่อกับ Redis",
      overviewClients: "รายชื่อการเชื่อมต่อตามจำนวนลูกค้า",
      connectedCount: opt => {
        if (opt.length === 1) {
          return "ลูกค้า 1 ราย";
        }
        return `${opt.length} ลูกค้า`;
      }
    },
    key: {
      label: {
        key: "คีย์",
        encoding: "การเข้ารหัส",
        length: "ขนาด",
        ttl: "TTL",
        ttlTitle: "ถึงเวลามีชีวิตอยู่",
        type: "ประเภท",
        ttlNotExpire: "ไม่หมดอายุ",
        lengthString: "ไบต์",
        lengthItem: "รายการ",
        actions: "การดำเนินการ"
      },
      list: {
        table: {
          index: "ดัชนี",
          value: "ความคุ้มค่า"
        }
      },
      hash: {
        table: {
          hashkey: "แฮชคีย์",
          value: "ความคุ้มค่า"
        }
      },
      set: {
        table: {
          value: "สมาชิก"
        }
      },
      zset: {
        table: {
          value: "สมาชิก",
          score: "คะแนน"
        }
      },
      stream: {
        table: {
          timestamp: "รหัสการประทับเวลา",
          field: "สนาม",
          value: "ความคุ้มค่า"
        }
      }
    },
    treeControls: {
      settings: "การตั้งค่าต้นไม้",
      expandAll: "ขยายทั้งหมด",
      collapseAll: "ยุบทั้งหมด",
      search: {
        search: "ค้นหาในคีย์",
        clear: "ล้างการค้นหาปัจจุบันเพื่อตั้งค่าว่าง",
        placeholderClient: "ค้นหาฝั่งไคลเอ็นต์",
        placeholderServer: "ค้นหาฝั่งเซิร์ฟเวอร์",
        info: "การค้นหาฝั่งไคลเอ็นต์หมายความว่าตรงกับข้อความในการป้อนข้อมูลการค้นหา การค้นหาฝั่งเซิร์ฟเวอร์หมายความว่าเหมือนกับการค้นหาในรูปแบบคีย์เป็น *{search-text}* สำหรับชุดการค้นหาขนาดใหญ่ ควรใช้การค้นหาฝั่งเซิร์ฟเวอร์จะดีกว่า สำหรับชุดการค้นหาที่มีขนาดเล็ก ควรใช้โหมดการค้นหาฝั่งไคลเอ็นต์จะดีกว่า" + ` หากนับคีย์หมด ${p3xr.settings.maxLightKeysCount}คุณสามารถค้นหาได้เฉพาะฝั่งเซิร์ฟเวอร์เท่านั้น`,
        largeSetInfo: "ในชุดใหญ่ การค้นหาฝั่งไคลเอ็นต์จะถูกปิดใช้งาน ดังนั้นตอนนี้ทำได้เฉพาะการค้นหาฝั่งเซิร์ฟเวอร์เท่านั้น",
        infoDetails: "หากต้องการทราบว่าการค้นหาทำงานอย่างไร โปรดตรวจสอบการตั้งค่า"
      },
      pager: {
        next: "ถัดไป",
        prev: "ก่อนหน้า",
        first: "อันดับแรก",
        last: "สุดท้าย"
      }
    }
  },
  time: {
    loading: "กำลังโหลด...",
    years: "ปี",
    months: "เดือน",
    days: "วัน",
    year: "ปี",
    month: "เดือน",
    day: "วัน"
  },
  redisTypes: {
    string: "String",
    list: "List",
    hash: "Hash table",
    set: "Set",
    zset: "Sorted set - zset",
    stream: "Stream",
    json: "JSON"
  }
};
module.exports = strings;
