export interface BloqueSidur {
  nota?: string
  hebreo: string
  fonetica: string
  espanol: string
}

export interface SeccionSidur {
  id: string
  titulo: string
  subtitulo?: string
  bloques: BloqueSidur[]
}

export const seccionesShajaritShabat: SeccionSidur[] = [
  {
    id: "meditacion",
    titulo: "Meditación para Iniciar",
    subtitulo: "Se canta o recita",
    bloques: [
      {
        hebreo: "בְּשָׁעָה שֶׁהַבֹּקֶר מַגִּיעַ, אֲנַחְנוּ פּוֹתְחִים אֶת לִבֵּנוּ לְאוֹר הַיּוֹם וּלְאוֹר הַשְּׁכִינָה. מְנִיחִים אֶת תַּרְדֵּמַת הַלַּיְלָה וּמַזְמִינִים אֶת הַחֶסֶד לָשֶׁבֶת בְּתוֹכֵנוּ. בְּשִׁירָה וּבִתְפִלָּה, בְּהִתְבּוֹנְנוּת וּבְהַכָּרָה, אָנוּ מְקַדְּשִׁים אֶת הַזְּמַן וּמְקַבְּלִים אֶת הַיּוֹם כְּמַתָּנָה נֶאֱמָנָה וּכְרוּחַ מְרַפֵּאת.\n\nוּבְכַוָּנָה טְהוֹרָה אָנוּ נוֹטְלִים אֶת יָדֵינוּ, לְטַהֵר אֶת מַעֲשֵׂינוּ וּלְקַדֵּשׁ אֶת הַיּוֹם. בְּבִרְכָּה וּבְהִתְעַלְּלוּת אָנוּ מַתְעִיטִים אֶת הַטַּלִּית, לְהִתְעַטֵּף בְּאוֹר הַמִּצְוָה וּבְצֵל כְּנָפֶיהָ.\n\nבְּכָךְ אָנוּ נִכְנָסִים לִתְפִלַּת שַׁחֲרִית הַצִּבּוּרִית, בְּלֵב נָכוֹן וּבְרוּחַ מְאֻחֶדֶת.",
        fonetica: "Besháa shehabóker magía, anajnu fotjím et libénu leor hayóm uleor hashjiná. Menijím et tardémat halailá umazminím et hajésed lashevet betojénu. Béshirá uvetfilá, behitbonénut uvehakará, anu mekadshím et hazmán umekablim et hayóm kematána neemáná ukerúaj merafét.\n\nUvjaváná tehorá anu notlím et yadénu, letahér et maasénu ulekadésh et hayóm. Bevirká uvehitallút anu matitím et hatallít, lehitatéf beor hamitsvá uvetzel knaféja.\n\nBekaj anu niknasím litfilat shahjarit hatsiburít, belev nakón uverúaj meujedet.",
        espanol: "En el instante en que la mañana llega, abrimos nuestro corazón a la luz del día y a la luz de la Presencia Divina. Dejamos atrás el sueño de la noche e invitamos al amor y la bondad a morar dentro de nosotros. Con canto y plegaria, con contemplación y conciencia, santificamos el tiempo y recibimos el día como un don fiel y como un espíritu que sana.\n\nCon intención pura lavamos nuestras manos, para purificar nuestras acciones y consagrar el día. Con bendición y elevación nos envolvemos en el talit, para cubrirnos con la luz del mandamiento y bajo la sombra de sus alas.\n\nAsí entramos en la plegaria comunitaria de Shajarit, con corazón dispuesto y espíritu unido."
      }
    ]
  },
  {
    id: "ma-tovu",
    titulo: "Ma Tovu",
    subtitulo: "¡Cuán hermosas son tus tiendas!",
    bloques: [
      {
        hebreo: "מַה טּוֹבוּ אֹהָלֶיךָ יַעֲקֹב, מִשְׁכְּנֹתֶיךָ יִשְׂרָאֵל.\nוַאֲנִי בְּרֹב חַסְדְּךָ אָבוֹא בֵיתֶךָ, אֶשְׁתַּחֲוֶה אֶל הֵיכַל קָדְשְׁךָ בְּיִרְאָתֶךָ.\nיְהֹוָה אָהַבְתִּי מְעוֹן בֵּיתֶךָ, וּמְקוֹם מִשְׁכַּן כְּבוֹדֶךָ.\nוַאֲנִי אֶשְׁתַּחֲוֶה וְאֶכְרָעָה, אֶבְרְכָה לִפְנֵי יְהֹוָה עֹשִׂי.\nוַאֲנִי תְפִלָּתִי לְךָ יְהֹוָה עֵת רָצוֹן, אֱלֹהִים בְּרָב חַסְדֶּךָ עֲנֵנִי בֶאֱמֶת יִשְׁעֶךָ.",
        fonetica: "Ma tovú ohaléja Ya\'akóv, mishkenotéja Yisrael.\nVa\'aní beróv jasdéja avó betéja, eshtajahavé el heijal kodshejá beiratéja.\nAdonay, ahavtí me\'ón betéja, umekom mishkán kevodéja.\nVa\'aní eshtajahavé ve\'ekra\'á, evrejá lifné Adonay osí.\nVa\'aní tefilatí lejá Adonay et ratzón, Elohím beróv jasdéja anéni be\'emet ish\'éja.",
        espanol: "¡Cuán hermosas son tus tiendas, oh Yaakov, tus moradas, oh Israel!\nY yo, por la abundancia de Tu misericordia, entraré en Tu casa; me postraré hacia Tu santuario sagrado con reverencia.\nAdonay, he amado la morada de Tu casa y el lugar donde habita Tu gloria.\nY yo me postraré y me inclinaré, bendeciré ante Adonay, mi Hacedor.\nY yo, mi plegaria a Ti, Adonay, en tiempo de favor: oh Elohim, por Tu gran misericordia, respóndeme con la verdad de Tu salvación."
      }
    ]
  },
  {
    id: "adon-olam",
    titulo: "Adon Olam / Soberano del universo",
    subtitulo: "Se canta o recita",
    bloques: [
      {
        hebreo: "אֲדוֹן עוֹלָם אֲשֶׁר מָלַךְ, בְּטֶרֶם כָּל יְצִיר נִבְרָא.\nלְעֵת נַעֲשָׂה בְּחֶפְצוֹ כָּל, אֲזַי מֶלֶךְ שְׁמוֹ נִקְרָא.\nוְאַחֲרֵי כִּכְלּוֹת הַכֹּל, לְבַדּוֹ יִמְלֹךְ נוֹרָא.\nוְהוּא הָיָה וְהוּא הֹוֶה, וְהוּא יִהְיֶה בְּתִפְאֲרָה.\n\nוְהוּא אֶחָד וְאֵין שֵׁנִי, לְהַמְשִׁילוֹ וּלְהַחְבִּירָה.\nבְּלִי רֵאשִׁית בְּלִי תַּכְלִית, וְלוֹ הָעֹז וְהַמִּשְׂרָה.\nבְּלִי עֶרֶךְ בְּלִי דִּמְיוֹן, בְּלִי שִׁנּוּי וּתְמוּרָה.\nבְּלִי חִבּוּר בְּלִי פֵּרוּד, גְּדוֹל כֹּחַ וּגְבוּרָה.\nוְהוּא אֱלִי וְחַי גּוֹאֲלִי, וְצוּר חֶבְלִי בְּיוֹם צָרָה.\nוְהוּא נִסִּי וּמָנֻסִּי, מְנַת כּוֹסִי בְּיוֹם אֶקְרָא.\nוְהוּא רוֹפֵא וְהוּא מַרְפֵּא, וְהוּא צוֹפֶה וְהוּא עֶזְרָה.\nבְּיָדוֹ אַפְקִיד רוּחִי, בְּעֵת אִישַׁן וְאָעִירָה.\nוְעִם רוּחִי גְּוִיָּתִי, יְיָ לִי וְלֹא אִירָא.\nבְּמִקְדָּשׁוֹ תָּגֶל נַפְשִׁי, מְשִׁיחֵנוּ יִשְׁלַח מְהֵרָה.\nוְאָז נָשִׁיר בְּבֵית קָדְּשִׁי, אָמֵן אָמֵן שֵׁם הַנּוֹרָא.",
        fonetica: "Adón Olam asher malaj, beterem kol yetsir nivra.\nLe\'et na\'asá bejeftsó kol, azay Mélej shemó nikrá.\nVe\'ajarey kijlót hakol, levado yimlój norá.\nVehú hayá, vehú hové, vehú yihyé betifará.\n\nVehú ejád ve\'én shení, lehamshiló uljahbirá.\nBelí re\'shít, belí tajlít, veló ha\'óz vehamishrá.\nBelí érej, belí dimyón, belí shinúy utmurá.\nBelí jibúr, belí perúd, gedól koaj ugvurá.\nVehú Elí vejai go\'alí, vetsur jevlí beyóm tsará.\nVehú nisí umanusí, menat kosí beyóm ekrá.\nVehú rofé vehú marpé, vehú tsofé vehú ezrá.\nBeyadó afkíd rují, be\'et ishán ve\'a\'irá.\nVe\'im rují geviyatí, Adonay lí velo irá.\nBemikdashó taguél nafshí, Meshijénu yishlaj mehérá.\nVe\'az nashír beveit kodshí, amén amén Shem haNorá.",
        espanol: "Soberano del universo, que reinó antes de que toda criatura fuera formada. Cuando todo fue hecho por Su voluntad, entonces fue llamado Rey. Y después de que todo haya terminado, Él, solo, reinará con majestad.\n\nÉl es Uno, y no hay segundo que se le compare o asemeje. Sin principio, sin fin; a Él pertenecen el poder y el dominio. Sin medida, sin imagen; sin cambio ni sustitución. Sin unión ni separación; grande en fuerza y poder.\nÉl es mi Elohim y mi viviente Redentor, roca de mi destino en el día de angustia. Él es mi estandarte y mi refugio, mi porción en el día que clamo. Él es sanador y medicina, vigía y ayuda. En Su mano encomiendo mi espíritu, cuando duermo y cuando despierto. Y con mi espíritu, también mi cuerpo; Adonay está conmigo, no temeré. En Su santuario se alegrará mi alma; que nuestro Mesías sea enviado pronto. Y entonces cantaremos en Su Casa Sagrada: amén, amén, Su Nombre reverenciado."
      }
    ]
  },
  {
    id: "hareni-mekabel",
    titulo: "Hareni Mekabel / Yo Acepto",
    subtitulo: "Este texto direcciona la kavaná comunitaria",
    bloques: [
      {
        hebreo: "הֲרֵינִי מְקַבֵּל עָלַי מִצְוַת עֲשֵׂה שֶׁל וְאָהַבְתָּ לְרֵעֲךָ כָּמוֹךָ.\nוַהֲרֵינִי אוֹהֵב כָּל אֶחָד מִבְּנֵי יִשְׂרָאֵל כְּנַפְשִׁי וּמְאוֹדִי.\nוַהֲרֵינִי מְזַמֵּן אֶת פִּי לְהִתְפַּלֵּל לִפְנֵי מֶלֶךְ מַלְכֵי הַמְּלָכִים, הַקָּדוֹשׁ בָּרוּךְ הוּא.",
        fonetica: "Haréni mekabel alay mitsvat asé shel \'Ve\'ahavtá lere\'ajá kamójá\'.\nVa\'haréyni ohev kol ejád mibnéi Yisrael kenafshí u-me\'odí.\nVa\'haréyni mezamén et pí lehitpalél lifné Mélej maljéi hamelajím, HaKadosh Barúj Hú.",
        espanol: "He aquí que yo acepto sobre mí el precepto positivo de \'amarás a tu prójimo como a ti mismo\'.\nHe aquí que yo le profeso amor a cada miembro del pueblo de Israel como si fuera mi propia alma y cuerpo.\nY he aquí que yo dispongo mi boca a rezar delante del Soberano Rey de reyes, el Santo, bendito es."
      }
    ]
  },
  {
    id: "eloheinu",
    titulo: "Elohénu veElohé Avotéinu",
    subtitulo: "Elohim nuestro, Elohim de nuestros padres",
    bloques: [
      {
        hebreo: "אֱלֹהֵינוּ וֵאלֹהֵי אֲבוֹתֵינוּ, זָכְרֵנוּ בְּזִכְרוֹן טוֹב מִלְּפָנֶיךָ וּפָקְדֵנוּ בִּפְקוּדַת יְשׁוּעָה וְרַחֲמִים מִשְּׁמֵי שְׁמֵי קֶדֶם.\nוּזְכֹר לָנוּ יְהֹוָה אֱלֹהֵינוּ אַהֲבַת הַקַּדְמוֹנִים אַבְרָהָם, יִצְחָק וְיִשְׂרָאֵל עֲבָדֶיךָ.\nאֶת הַבְּרִית וְאֶת הַחֶסֶד וְאֶת הַשְּׁבוּעָה שֶׁנִּשְׁבַּעְתָּ לְאַבְרָהָם אָבִינוּ בְּהַר הַמּוֹרִיָּה.\nוְאֶת הָעֲקֵדָה שֶׁעָקַד אֶת יִצְחָק בְּנוֹ עַל גַּבֵּי הַמִּזְבֵּחַ, כַּכָּתוּב בְּתוֹרָתָךְ.",
        fonetica: "Elohénu veElohé aboténu, zojrénu bezijrón tov miléfanéja, ufokdénu bifkudát yeshuá veraḥamím mishém shemé kedém.\nUzjor lánu Adonay Elohénu ahavat hakadmónim, Avrahám, Yitsják veYisrael avadéja.\nEt haberít veet hajeséd veet hashevuá shenishba\'ta leAvrahám avínu behar haMoriyá.\nVeet ha\'akedá she\'akád et Yitsják benó al gabé hamizbéaj, kakatúv betorataj.",
        espanol: "Elohim nuestro, Elohim de nuestros padres: recuérdanos con buena memoria ante Ti, y visítanos con salvación y misericordia desde los cielos, cielos antiguos.\nY recuerda para nosotros, oh Eterno, nuestro Elohim, el amor de los antepasados: Abraham, Isaac e Israel, tus siervos.\nRecuerda el pacto, la bondad y el juramento que juraste a nuestro padre Abraham en el monte Moriyá, y la prueba de Isaac, a quien ató en el altar, como está escrito en Tu Torá."
      }
    ]
  },
  {
    id: "ana-bejoaj",
    titulo: "Aná Bejoaj",
    subtitulo: "Se canta o recita",
    bloques: [
      {
        hebreo: "אָנָּא בְּכֹחַ גְּדֻלַּת יְמִינְךָ תַּתִּיר צְרוּרָה.\nקַבֵּל רִנַּת עַמְּךָ שַׂגְּבֵנוּ טַהֲרֵנוּ נוֹרָא.\nנָא גִבּוֹר דוֹרְשֵׁי יִחוּדְךָ כְּבָבַת שָׁמְרֵם.\nבָּרְכֵם טַהֲרֵם רַחֲמֵי צִדְקָתְךָ תָּמִיד גָּמְלֵם.\nחֲסִין קָדוֹשׁ בְּרוֹב טוּבְךָ נַהֵל עֲדָתְךָ.\nיָחִיד גֵּאָה לְעַמְּךָ פְּנֵי זוֹכְרֵי קְדֻשָּׁתְךָ.\nשַׁוְעָתֵנוּ קַבֵּל וּשְׁמַע צַעֲקָתֵנוּ יוֹדֵעַ תַּעֲלוּמוֹת.",
        fonetica: "Aná, bejóaj guedulat yeminja, tatir tserurá.\nKabel rinat \'amejá, saguebenu, taharenu, norá.\nNa guibor, doreshe ijudeja, kebabat shomrem.\nBarejem, taharem, rajamé tsidkatja tamid gomlem.\nJasín kadosh, berob tubjá nahel \'adatja.\nYajid gueé, le\'amejá pené, zojeré kedushateja.\nShav\'atenu kabel ushmá tsa\'akatenu, yodea\' ta\'alumot.",
        espanol: "Por favor, con la fuerza de Tu diestra, libera lo atado.\nRecibe el canto de Tu pueblo, fortalécenos, purifícanos, Temible.\nPoderoso, guarda como a la niña de Tus ojos a quienes buscan Tu unicidad.\nBendícelos, purifícalos, con Tu compasión justa trátalos siempre con bondad.\nFuerte y Santo, con la abundancia de Tu bondad guía a Tu congregación.\nÚnico y Exaltado, vuelve Tu rostro hacia Tu pueblo que recuerda Tu santidad.\nRecibe nuestra súplica, escucha nuestro clamor, Tú que conoces los misterios ocultos."
      }
    ]
  },
  {
    id: "barju-et-adonai",
    titulo: "Barjú et Adonai",
    subtitulo: "El Sha\"tz dice al Kahal",
    bloques: [
      {
        hebreo: "בָּרְכוּ אֶת יְיָ כָּל עַבְדֵי יְיָ הָעֹמְדִים בְּבֵית יְיָ.\nשְׂאוּ יְדֵיכֶם קֹדֶשׁ וּבָרְכוּ אֶת יְיָ.\nבָּרוּךְ יְיָ מִצִּיּוֹן שֹׁכֵן יְרוּשָׁלָיִם. הַלְלוּיָהּ.",
        fonetica: "Barjú et Adonai kol avdé Adonai haomdím bevet Adonai.\nSeú yedejém kódesh uvarejú et Adonai.\nBaruj Adonai mitzión shojén Yerushaláim. Haleluyá.",
        espanol: "Bendecid a Adonai, todos los siervos de Adonai, que están de pie en la casa de Adonai.\nAlzad vuestras manos en santidad y bendecid a Adonai.\nBendito sea Adonai desde Sión, que mora en Jerusalén. ¡Aleluya!"
      }
    ]
  },
  {
    id: "hashem-melej",
    titulo: "Hashem Melej",
    subtitulo: "Se canta o recita",
    bloques: [
      {
        hebreo: "יְהוָה מֶלֶךְ, יְהוָה מָלַךְ, יְהוָה יִמְלֹךְ לְעוֹלָם וָעֶד.\nיְהוָה מֶלֶךְ, יְהוָה מָלַךְ, יְהוָה יִמְלֹךְ לְעוֹלָם וָעֶד.\n\nוְהָיָה יְהוָה לְמֶלֶךְ עַל כָּל הָאָרֶץ.\nבַּיּוֹם הַהוּא יִהְיֶה יְהוָה אֶחָד וּשְׁמוֹ אֶחָד.\nהוֹשִׁיעֵנוּ יְהוָה אֱלֹהֵינוּ וְקַבְּצֵנוּ מִן הַגּוֹיִם, לְהוֹדוֹת לְשֵׁם קָדְשֶׁךָ לְהִשְׁתַּבֵּחַ בִּתְהִלָּתֶךָ.\nבָּרוּךְ יְהוָה אֱלֹהֵי יִשְׂרָאֵל מִן הָעוֹלָם וְעַד הָעוֹלָם.\nוְאָמַר כָּל הָעָם: אָמֵן, הַלְלוּיָהּ.\nכָּל הַנְּשָׁמָה תְּהַלֵּל יָהּ, הַלְלוּיָהּ.",
        fonetica: "Hashem mélej, Hashem malaj, Hashem yimloj leolám va\'ed.\nHashem mélej, Hashem malaj, Hashem yimloj leolám va\'ed.\n\nVehayá Hashem lemélej al kol haárets.\nBayom hahú yihyé Hashem ejad ushmó ejad.\nHoshiénu Adonai Elohenu vekabetsénu min hagoim, lehodot leshem kodsheja, lehishtabéaj bit\'hilateja.\nBaruj Adonai Elohé Israel min haolám vead haolám. Veamar kol ha\'am: amén, haleluyá.\nKol haneshamá tehalel Yah, haleluyá.",
        espanol: "Hashem es Rey; Hashem ha reinado; Hashem reinará por siempre jamás.\n\nEl Eterno será Rey sobre toda la tierra; en ese día el Eterno será Uno y Su Nombre será Uno.\nSálvanos, oh Eterno, nuestro Elohim, y reúnenos de entre las naciones, para agradecer Tu santo Nombre y glorificarnos en Tus alabanzas.\nBendito sea el Eterno, Elohim de Israel, desde siempre y por toda la eternidad. Y todo el pueblo dirá: amén, ¡haleluyá!\nToda alma alabará a Yah, ¡haleluyá!"
      }
    ]
  },
  {
    id: "salmo-19",
    titulo: "Salmo 19",
    bloques: [
      {
        hebreo: "לַמְנַצֵּחַ מִזְמוֹר לְדָוִד.\nהַשָּׁמַיִם מְסַפְּרִים כְּבוֹד אֵל, וּמַעֲשֵׂה יָדָיו מַגִּיד הָרָקִיעַ.\nיוֹם לְיוֹם יַבִּיעַ אֹמֶר, וְלַיְלָה לְלַיְלָה יְחַוֶּה דָּעַת.\nאֵין אֹמֶר וְאֵין דְּבָרִים, בְּלִי נִשְׁמָע קוֹלָם.\nבְּכָל הָאָרֶץ יָצָא קַוָּם, וּבִקְצֵה תֵבֵל מִלֵּיהֶם.\nלַשֶּׁמֶשׁ שָׂם אֹהֶל בָּהֶם, וְהוּא כְּחָתָן יֹצֵא מֵחֻפָּתוֹ.\nיָשִׂישׂ כְּגִבּוֹר לָרוּץ אֹרַח.\nמִקְצֵה הַשָּׁמַיִם מוֹצָאוֹ, וּתְקוּפָתוֹ עַל קְצוֹתָם.\nוְאֵין נִסְתָּר מֵחַמָּתוֹ.\n\nתּוֹרַת יְיָ תְּמִימָה מְשִׁיבַת נָפֶשׁ.\nעֵדוּת יְיָ נֶאֱמָנָה מַחְכִּימַת פֶּתִי.\nפִּקּוּדֵי יְיָ יְשָׁרִים מְשַׂמְּחֵי לֵב.\nמִצְוַת יְיָ בָּרָה מְאִירַת עֵינָיִם.\nיִרְאַת יְיָ טְהוֹרָה עוֹמֶדֶת לָעַד.\nמִשְׁפְּטֵי יְיָ אֱמֶת צָדְקוּ יַחְדָּו.\nהַנֶּחֱמָדִים מִזָּהָב וּמִפָּז רָב, וּמְתוּקִים מִדְּבַשׁ וְנֹפֶת צוּפִים.\nגַּם עַבְדְּךָ נִזְהָר בָּהֶם, בְּשָׁמְרָם עֵקֶב רָב.\nשְׁגִיאוֹת מִי יָבִין, מִנִּסְתָּרוֹת נַקֵּנִי.\nגַּם מִזֵּדִים חֲשֹׂךְ עַבְדֶּךָ, אַל יִמְשְׁלוּ בִי אָז אֵיתָם.\nוְנִקֵּיתִי מִפֶּשַׁע רָב.\nיִהְיוּ לְרָצוֹן אִמְרֵי פִי, וְהֶגְיוֹן לִבִּי לְפָנֶיךָ יְיָ צוּרִי וְגֹאֲלִי.",
        fonetica: "Lamnatséaj mizmor leDavid.\nHashamayim mesaprim kevod El, umaasé yadáv maguid haraqía.\nYom leyom yabía ómer, velaila lelaila yejave daat.\nEn ómer veen devarim, belí nishmá qolam.\nBejol haárets yatsá qavam, uviktsé tevel milehem.\nLashemesh sam ohel bahem, vehú kejatán yotsé mejupató.\nYasís keguibór laruts oraj.\nMiqtsé hashamayim motsaó, utqufató al qetsotam.\nVeein nistar mejamató.\n\nTorat Adonay temimá meshívat nafesh.\nEdut Adonay neemaná majkimat peti.\nPiqudé Adonay yesharim mesameje-lev.\nMitsvat Adonay bará meirat enayim.\nYirat Adonay tehorá omédet laad.\nMishpeté Adonay emet, tsadqu yajdav.\nHanejemadim mizahav umipaz rav; umetukim midevash venofet tsufim.\nGam avdejá nizhar bahem; beshomram ékev rav.\nSheguiot mi yavin; minstarot naqeni.\nGam mizedim jasoj avdejá; al yimshlu bi, az eitam; venikéti mipesha rav.\nYihyu leratson imré fi, vehegyon libi, lefaneja Adonay tsuri vegoali.",
        espanol: "Los cielos proclaman la gloria de Elohim y el firmamento anuncia la obra de sus manos; cada día y cada noche transmiten sabiduría sin necesidad de palabras, extendiendo su voz por toda la tierra.\nEl sol, como esposo que sale de su tálamo, recorre su camino con fuerza y nada se esconde de su calor.\n\nLa Torá de Adonai es perfecta y convierte el alma; su testimonio es fiel y hace sabio al sencillo. Sus mandamientos son rectos y alegran el corazón; su precepto es puro y alumbra los ojos.\nEl temor de Adonai es limpio y permanece para siempre; sus juicios son verdad y todos justos.\nSon más deseables que el oro y más dulces que la miel, y en guardarlos hay gran recompensa.\nLíbrame de mis errores ocultos y de las soberbias para que no me dominen; entonces seré íntegro y limpio de gran rebelión.\nSean gratos los dichos de mi boca y la meditación de mi corazón delante de ti, oh Adonai, roca mía y redentor mío."
      }
    ]
  },
  {
    id: "salmo-33",
    titulo: "Salmo 33",
    bloques: [
      {
        hebreo: "רַנְּנוּ צַדִּיקִים בַּיהוָה, לַיְשָׁרִים נָאוָה תְהִלָּה.\nהוֹדוּ לַיהוָה בְּכִנּוֹר, בְּנֵבֶל עָשׂוֹר זַמְּרוּ לוֹ.\nשִׁירוּ לוֹ שִׁיר חָדָשׁ, הֵיטֵיבוּ נַגֵּן בִּתְרוּעָה.\nכִּי יָשָׁר דְּבַר יְהוָה, וְכָל מַעֲשֵׂהוּ בֶּאֱמוּנָה.\nאֹהֵב צְדָקָה וּמִשְׁפָּט, חֶסֶד יְהוָה מָלְאָה הָאָרֶץ.\nבִּדְבַר יְהוָה שָׁמַיִם נַעֲשׂוּ, וּבְרוּחַ פִּיו כָּל צְבָאָם.\nכֹּנֵס כַּנֵּד מֵי הַיָּם, נֹתֵן בָּאוֹצָרוֹת תְּהוֹמוֹת.\nיִירְאוּ מֵיְהוָה כָּל הָאָרֶץ, מִמֶּנּוּ יָגוּרוּ כָּל יֹשְׁבֵי תֵבֵל.\nכִּי הוּא אָמַר וַיֶּהִי, הוּא צִוָּה וַיַּעֲמֹד.\nיְהוָה הֵפִיר עֲצַת גּוֹיִם, הֵנִיא מַחְשְׁבוֹת עַמִּים.\nעֲצַת יְהוָה לְעוֹלָם תַּעֲמוֹד, מַחְשְׁבוֹת לִבּוֹ לְדוֹר וָדוֹר.\nאַשְׁרֵי הַגּוֹי אֲשֶׁר יְהוָה אֱלֹהָיו, הָעָם בָּחַר לְנַחֲלָה לוֹ.\nמִשָּׁמַיִם הִבִּיט יְהוָה, רָאָה אֶת כָּל בְּנֵי הָאָדָם.\nמִמְּכוֹן שִׁבְתּוֹ הִשְׁגִּיחַ, אֶל כָּל יֹשְׁבֵי הָאָרֶץ.\nהַיֹּצֵר יַחַד לִבָּם, הַמֵּבִין אֶל כָּל מַעֲשֵׂיהֶם.\nאֵין הַמֶּלֶךְ נוֹשָׁע בְּרֹב חָיִל, גִּבּוֹר לֹא יִנָּצֵל בְּרֹב כֹּחַ.\nשֶׁקֶר הַסּוּס לִתְשׁוּעָה, וּבְרֹב חֵילוֹ לֹא יְמַלֵּט.\nהִנֵּה עֵין יְהוָה אֶל יְרֵאָיו, לַמְיַחֲלִים לְחַסְדּוֹ.\nלְהַצִּיל מִמָּוֶת נַפְשָׁם, וּלְחַיּוֹתָם בָּרָעָב.\nנַפְשֵׁנוּ חִכְּתָה לַיהוָה, עֶזְרֵנוּ וּמָגִנֵּנוּ הוּא.\nכִּי בוֹ יִשְׂמַח לִבֵּנוּ, כִּי בְשֵׁם קָדְשׁוֹ בָטָחְנוּ.\nיְהִי חַסְדְּךָ יְהוָה עָלֵינוּ, כַּאֲשֶׁר יִחַלְנוּ לָךְ.",
        fonetica: "Ranenú tsadikím BAdonáy, laysharím navá tehilá.\nHodú Ladonáy bejinór, benébel \'asór zamerú-lo.\nShirú lo shir jadásh, hetíbu naguén bitru\'á.\nKi-yashár debár-Adonáy, vejól-ma\'aséhu beemuná.\nOhéb tsedaká umishpát, jésed Adonáy maleá haárets.\nBidbár Adonáy shamáyim na\'asú, ubrúaj piv kol-tsebaám.\nKonés kanéd me hayám, notén beotsarót tehomót.\nYireú MeAdonáy kol-haárets, miménu yagurú kol-yoshebé tebél.\nKi hu amár veyehi, hu-tsivá vaya\'amód.\nAdonáy hetír \'atsát goyím, hení majshebót \'amím.\n\'atsát Adonáy le\'olám ta\'amód, majshebót libó ledór vadór.\nAshré hagóy ashér-Adonáy Eloháv, ha\'ám bajár lenajalá lo.\nMishamáyim hibít Adonáy, raá et-kol-bené haadám.\nMimejón-shibtó hishguíaj, el kol-yoshebé haárets.\nHayotsér iájad libám, hamebín el kol ma\'asehém.\nEn-hamélej noshá\' berób-jáyil, guibór lo-yinatsél berób-kóaj.\nShéker hasús litshu\'á, ubrób jeló lo iemalét.\nHiné \'en Adonáy el yereáv, lamyajalím lejasdó.\nLehatsíl mimávet nafshám, uljayotám bara\'áb.\nNafshenu jiketá LAdonáy, \'ezrenu umaguinenu hu.\nKi-bo yismáj libenu, ki beshém kodshó batajnu.\nYehí-jasdejá Adonáy \'alenu, kaashér yijalnu laj.",
        espanol: "Alaben justos a Adonai, a los rectos conviene la alabanza.\nDen gracias a Adonai con arpa, con lira de diez cuerdas cántenle.\nCanten para Él cántico nuevo, toquen con arte y júbilo.\nRecta es la palabra de Adonai, fiel toda su obra.\nÉl ama justicia y juicio, la tierra está llena de su bondad.\nPor su palabra fueron hechos los cielos, por el aliento de su boca sus huestes.\nJunta las aguas del mar, guarda los abismos.\nTema toda la tierra a Adonai, tiemblen los habitantes del mundo.\nÉl habló y fue hecho, ordenó y todo se mantuvo.\nAdonai frustra planes de naciones, pero su consejo permanece siempre.\nBienaventurada la nación cuyo Elohim es Adonai, el pueblo que Él escogió.\nDesde los cielos observa Adonai, ve a todos los hombres.\nDesde su morada vigila, entiende todas sus obras.\nEl rey no se salva por su ejército, ni el valiente por su fuerza.\nVano es el caballo para librar, con su poder no puede salvar.\nEl ojo de Adonai está sobre quienes le temen, sobre los que esperan en su misericordia.\nPara librar sus almas de la muerte, y darles vida en el hambre.\nNuestra alma espera en Adonai, Él es ayuda y escudo.\nEn Él se alegra nuestro corazón, porque confiamos en su santo Nombre.\nSea tu misericordia, oh Adonai, sobre nosotros, como esperamos en ti."
      }
    ]
  },
  {
    id: "salmo-34",
    titulo: "Salmo 34",
    bloques: [
      {
        hebreo: "לְדָוִד בְּשַׁנּוֹתוֹ אֶת טַעְמוֹ לִפְנֵי אֲבִימֶלֶךְ, וַיְגָרֲשֵׁהוּ וַיֵּלַךְ.\nאֲבָרֲכָה אֶת יְהוָה בְּכָל עֵת, תָּמִיד תְּהִלָּתוֹ בְּפִי.\nבַּיהוָה תִּתְהַלֵּל נַפְשִׁי, יִשְׁמְעוּ עֲנָוִים וְיִשְׂמָחוּ.\nגַּדְּלוּ לַיהוָה אִתִּי, וּנְרוֹמְמָה שְׁמוֹ יַחְדָּו.\nדָּרַשְׁתִּי אֶת יְהוָה וְעָנָנִי, וּמִכָּל מְגוּרוֹתַי הִצִּילָנִי.\nהִבִּיטוּ אֵלָיו וְנָהָרוּ, וּפְנֵיהֶם אַל יֶחְפָּרוּ.\nזֶה עָנִי קָרָא וַיהוָה שָׁמֵעַ, וּמִכָּל צָרוֹתָיו הוֹשִׁיעוֹ.\nחֹנֶה מַלְאַךְ יְהוָה סָבִיב, לִירֵאָיו וַיְחַלְּצֵם.\nטַעֲמוּ וּרְאוּ כִּי טוֹב יְהוָה, אַשְׁרֵי הַגֶּבֶר יֶחֱסֶה בּוֹ.\nיְרֵאוּ אֶת יְהוָה קְדֹשָׁיו, כִּי אֵין מַחְסוֹר לִירֵאָיו.\nכְּפִירִים רָשׁוּ וְרָעֵבוּ, וְדֹרְשֵׁי יְהוָה לֹא יַחְסְרוּ כָל טוֹב.\nלְכוּ בָנִים שִׁמְעוּ לִי, יִרְאַת יְהוָה אֲלַמֶּדְכֶם.\nמִי הָאִישׁ הֶחָפֵץ חַיִּים, אֹהֵב יָמִים לִרְאוֹת טוֹב.\nנְצֹר לְשׁוֹנְךָ מֵרָע, וּשְׂפָתֶיךָ מִדַּבֵּר מִרְמָה.\nסוּר מֵרָע וַעֲשֵׂה טוֹב, בַּקֵּשׁ שָׁלוֹם וְרָדְפֵהוּ.\nעֵינֵי יְהוָה אֶל צַדִּיקִים, וְאָזְנָיו אֶל שַׁוְעָתָם.\nפְּנֵי יְהוָה בְּעֹשֵׂי רָע, לְהַכְרִית מֵאֶרֶץ זִכְרָם.\nצָעֲקוּ וַיהוָה שָׁמֵעַ, וּמִכָּל צָרוֹתָם הִצִּילָם.\nקָרוֹב יְהוָה לְנִשְׁבְּרֵי לֵב, וְאֶת דַּכְּאֵי רוּחַ יוֹשִׁיעַ.\nרַבּוֹת רָעוֹת צַדִּיק, וּמִכֻּלָּם יַצִּילֶנּוּ יְהוָה.\nשֹׁמֵר כָּל עַצְמוֹתָיו, אַחַת מֵהֵנָּה לֹא נִשְׁבָּרָה.\nתְּמוֹתֵת רָשָׁע רָעָה, וְשֹׂנְאֵי צַדִּיק יֶאְשָׁמוּ.\nפּוֹדֶה יְהוָה נֶפֶשׁ עֲבָדָיו, וְלֹא יֶאְשְׁמוּ כָּל הַחֹסִים בּוֹ.",
        fonetica: "LeDavid, beshanotó et ta\'mó lifné abimélej, vaygareshehu vayelaj.\nAbarejá et-Adonay bejol-\'et, tamid tehilató befí.\nBAdonay tithalel nafshí, yishme\'ú \'anavim veyismájú.\nGadelú LAdonay ití, unromemá shemó yajdav.\nDarashti et-Adonay ve\'anani, umikol megurotay hitsilani.\nHibitu elav venaharu, ufnehem al-yejparu.\nZe aní kará Vadonay shamea\', umikol-tsarotav hoshí\'ó.\njóné mal\'aj-Adonay, sabib lireav vayjaletsem.\nTa\'amu ur\'ú ki-tob Adonay, ashre haguéber yejesé-bo.\nYer\'ú et-Adonay kedoshav, ki-én majsor lireav.\nKefirim rashú ve\'ebu, vedoreshé Adonay lo-yajserú jol-tob.\nLejú banim shim\'ú-li, yirat Adonay alamedjem.\nMi-haísh hejaféts jayim, oheb yamim lir\'ot tob.\nNetsor leshonejá merá\', usfateja midaber mirmá.\nSur merá\' va\'asé-tob bakesh shalom verodfehu.\n\'Ené Adonay el-tsadikim, veoznav el-shav-\'atam.\nPené Adonay be\'ose ra\' lehajrit eerets zijram.\nTsa\'akú VAdonay shamea\', umikol tsarotam hitsilam.\nKarob Adonay lenishberé lev, veet dakee-rúaj yoshía\'.\nRabot ra\'ot tsadík, umikulam yatsilenu Adonay.\nShomer kol-\'atsmotav, ajat mehena lo nishbara.\nTemotet rashá\' ra\'á\', vesoneé tsadik yeshamu.\nPodé Adonay néfesh \'abadav, veló yeshemú kol hajosim bo.",
        espanol: "De David, cuando fingió estar loco ante Abimélej, quien lo echó y él se fue.\nBendeciré a Adonai en todo tiempo, su alabanza estará siempre en mi boca.\nEn Adonai se gloría mi alma; lo oirán los humildes y se alegrarán.\nEngrandezcan conmigo a Adonai, exaltemos juntos su Nombre.\nBusqué a Adonai y me respondió, me libró de mis temores.\nLo miraron y resplandecieron, sus rostros no fueron avergonzados.\nEste pobre clamó y Adonai lo oyó, lo libró de sus angustias.\nEl ángel de Adonai acampa alrededor de los que le temen y los rescata.\nGusten y vean que Adonai es bueno; dichoso el que confía en Él.\nTeman a Adonai, sus santos, pues nada falta a quienes le temen.\nLos leoncillos padecen hambre, pero a los que buscan a Adonai nada les falta.\nVengan, hijos, escúchenme; les enseñaré el temor de Adonai.\n¿Quién desea vida y muchos días para ver el bien?\nGuarda tu lengua del mal, tus labios de hablar engaño.\nApártate del mal y haz el bien, busca la paz y síguela.\nLos ojos de Adonai están sobre los justos, sus oídos atentos a su clamor.\nEl rostro de Adonai contra los que hacen el mal, para borrar su memoria.\nClamaron y Adonai los oyó, los libró de sus angustias.\nAdonai está cerca de los quebrantados de corazón, salva a los abatidos.\nMuchas son las aflicciones del justo, pero Adonai lo libra de todas.\nProtege sus huesos, ni uno solo será quebrado.\nLa maldad matará al impío, y los que odian al justo serán condenados.\nAdonai rescata el alma de sus siervos, no serán condenados los que en Él confían."
      }
    ]
  },
  {
    id: "salmo-90",
    titulo: "Salmo 90",
    bloques: [
      {
        hebreo: "תְּפִלָּה לְמֹשֶׁה אִישׁ הָאֱלֹהִים.\nאֲדֹנָי מָעוֹן אַתָּה הָיִיתָ לָּנוּ, בְּדֹר וָדֹר.\nבְּטֶרֶם הָרִים יֻלָּדוּ, וַתְּחֹלֵל אֶרֶץ וְתֵבֵל.\nוּמֵעוֹלָם עַד עוֹלָם אַתָּה אֵל.\nתָּשֵׁב אֱנוֹשׁ עַד דַּכָּא, וַתֹּאמֶר שׁוּבוּ בְנֵי אָדָם.\nכִּי אֶלֶף שָׁנִים בְּעֵינֶיךָ, כְּיוֹם אֶתְמוֹל כִּי יַעֲבֹר.\nוְאַשְׁמוּרָה בַלָּיְלָה.\nזְרַמְתָּם שֵׁנָה יִהְיוּ, בַּבֹּקֶר כֶּחָצִיר יַחֲלֹף.\nבַּבֹּקֶר יָצִיץ וְחָלָף, לָעֶרֶב יְמוֹלֵל וְיָבֵשׁ.\nכִּי כָלִינוּ בְאַפֶּךָ, וּבַחֲמָתְךָ נִבְהָלְנוּ.\nשַׁתָּה עֲוֹנֹתֵינוּ לְנֶגְדֶּךָ, עֲלֻמֵנוּ לִמְאוֹר פָּנֶיךָ.\nכִּי כָל יָמֵינוּ פָּנוּ בְעֶבְרָתֶךָ, כִּלִּינוּ שָׁנֵינוּ כְּמוֹ הֶגֶה.\nיְמֵי שְׁנוֹתֵינוּ בָהֶם שִׁבְעִים שָׁנָה, וְאִם בִּגְבוּרוֹת שְׁמוֹנִים שָׁנָה.\nוְרָהְבָּם עָמָל וָאָוֶן, כִּי גָז חִישׁ וַנָּעֻפָה.\nמִי יוֹדֵעַ עֹז אַפֶּךָ, וּכְיִרְאָתְךָ עֶבְרָתֶךָ.\nלִמְנוֹת יָמֵינוּ כֵּן הוֹדַע, וְנָבִא לְבַב חָכְמָה.\nשׁוּבָה יְהוָה עַד מָתָי, וְהִנָּחֵם עַל עֲבָדֶיךָ.\nשַׂבְּעֵנוּ בַבֹּקֶר חַסְדֶּךָ, וּנְרַנְּנָה וְנִשְׂמְחָה בְּכָל יָמֵינוּ.\nשַׂמְּחֵנוּ כִּימוֹת עִנִּיתָנוּ, שְׁנוֹת רָאִינוּ רָעָה.\nיֵרָאֶה אֶל עֲבָדֶיךָ פָּעֳלֶךָ, וַהֲדָרְךָ עַל בְּנֵיהֶם.\nוִיהִי נֹעַם אֲדֹנָי אֱלֹהֵינוּ עָלֵינוּ, וּמַעֲשֵׂה יָדֵינוּ כּוֹנְנָה עָלֵינוּ, וּמַעֲשֵׂה יָדֵינוּ כּוֹנְנֵהוּ.",
        fonetica: "Tefilá leMoshé ish-haElohim.\nAdonay, maón atá haíta lanu bedor vador.\nBetérem harim yuládu, vatejolél érets vetevél.\nUmeolám ad-olám atá El.\nTashév enosh ad-daká, vatómer: shúvu bene-adam.\nKi élef shaním beénejá keyóm etmol ki yaabór.\nVeashmurá balayla.\nZeramtám shená yihyú; babóker kejasír yajálof.\nBabóker yatsíts vejálaf; laérev yemolél veyabésh.\nKi-jalínu beapejá, ubejamatéja nibhálnu.\nShatá avonoténu lenegdejá; aluméinu limor panéja.\nKi kol-yaménu panú beebratéja; kilínu shanéinu kemo-hegué.\nYeméi shenoténu bahem shivím shaná; veim bigvurót shemónim shaná.\nVerahbám amál vaáven; ki gaz jísh, vanaúfa.\nMi yodéa oz apejá; ujiratéja ebratéja.\nLimnót yaménu ken hodá; venaví lebav jojmá.\nShuvá Adonay ad matay; vehinajem al avadéja.\nSabéenu babóker jasdéja; veneranená venismejá bejol yaménu.\nSamejéinu kimót initánu; shenót raínu raá.\nYeraé el-avadéja paoléja; vahadaréja al benehém.\nVihi nóam Adonay Elohénu alénu; umaasé yadenú konená alénu; umaasé yadenú konenéhu.",
        espanol: "Oración de Moshé, varón de Elohim:\nAdonai, tú has sido nuestro refugio de generación en generación.\nAntes que nacieran los montes y formases la tierra y el mundo, desde la eternidad hasta la eternidad, tú eres Elohim.\nHaces volver al hombre al polvo y dices: \"Volveos, hijos de los hombres\".\nMil años ante tus ojos son como el día de ayer que pasó, como una vigilia de la noche.\nNos consumes como un sueño; por la mañana somos como la hierba que brota, por la mañana florece y crece; a la tarde se corta y se seca.\nSomos consumidos por tu ira y turbados por tu indignación. Pusiste nuestras iniquidades delante de ti, nuestros secretos a la luz de tu rostro.\nNuestros días declinan por tu ira; acabamos nuestros años como un suspiro.\nLos días de nuestra edad son setenta años — ochenta en los más fuertes — pero su orgullo es trabajo y vanidad; pronto pasan y volamos.\n¿Quién conoce el poder de tu ira y tu furor como el temor que te es debido?\nEnséñanos a contar nuestros días para traer al corazón sabiduría.\nVuélvete, Adonai — ¿hasta cuándo? — y compadécete de tus siervos.\nSácianos por la mañana de tu misericordia, y nos alegraremos todos nuestros días.\nAlégranos conforme a los días que nos afligiste, a los años en que vimos el mal.\nAparezca tu obra sobre tus siervos y tu gloria sobre sus hijos.\nSea la luz de Adonai, nuestro Elohim, sobre nosotros; confirma la obra de nuestras manos — sí, confirma la obra de nuestras manos."
      }
    ]
  },
  {
    id: "salmo-91",
    titulo: "Salmo 91",
    bloques: [
      {
        hebreo: "יֹשֵׁב בְּסֵתֶר עֶלְיוֹן, בְּצֵל שַׁדַּי יִתְלוֹנָן.\nאֹמַר לַיהוָה מַחְסִי וּמְצוּדָתִי, אֱלֹהַי אֶבְטַח בּוֹ.\nכִּי הוּא יַצִּילְךָ מִפַּח יָקוּשׁ, מִדֶּבֶר הַוּוֹת.\nבְּאֶבְרָתוֹ יָסֵךְ לָךְ, וְתַחַת כְּנָפָיו תֶּחְסֶה.\nצִנָּה וְסֹחֵרָה אֲמִתּוֹ.\nלֹא תִירָא מִפַּחַד לָיְלָה, מֵחֵץ יָעוּף יוֹמָם.\nמִדֶּבֶר בָּאֹפֶל יַהֲלֹךְ, מִקֶּטֶב יָשׁוּד צָהֳרָיִם.\nיִפֹּל מִצִּדְךָ אֶלֶף, וּרְבָבָה מִימִינֶךָ אֵלֶיךָ לֹא יִגָּשׁ.\nרַק בְּעֵינֶיךָ תַבִּיט, וְשִׁלּוּמַת רְשָׁעִים תִּרְאֶה.\nכִּי אַתָּה יְהוָה מַחְסִי, עֶלְיוֹן שַׂמְתָּ מְעוֹנֶךָ.\nלֹא תְאֻנֶּה אֵלֶיךָ רָעָה, וְנֶגַע לֹא יִקְרַב בְּאָהֳלֶךָ.\nכִּי מַלְאָכָיו יְצַוֶּה לָךְ, לִשְׁמָרְךָ בְּכָל דְּרָכֶיךָ.\nעַל כַּפַּיִם יִשָּׂאוּנְךָ, פֶּן תִּגֹּף בָּאֶבֶן רַגְלֶךָ.\nעַל שַׁחַל וָפֶתֶן תִּדְרֹךְ, תִּרְמֹס כְּפִיר וְתַנִּין.\nכִּי בִי חָשַׁק וַאֲפַלְּטֵהוּ, אֲשַׂגְּבֵהוּ כִּי יָדַע שְׁמִי.\nיִקְרָאֵנִי וְאֶעֱנֵהוּ, עִמּוֹ אָנֹכִי בְצָרָה.\nאֲחַלְּצֵהוּ וַאֲכַבְּדֵהוּ.\nאֹרֶךְ יָמִים אַשְׂבִּיעֵהוּ, וְאַרְאֵהוּ בִּישׁוּעָתִי.",
        fonetica: "Yosheb beséter \'elyón, betsel Shaday yitlonán.\nOmar LAdonay: majsí umtsudatí, Elohay etbaj-bo.\nKi hu yatsiléja mipaj yakush, midéber havot.\nBeebrató yasék laj, vetaját kenafav tejse.\nTsiná vesojerá amitó.\nLo-tirá mipajád laila, mejéts ya\'úf yomam.\nMidéber baófel yahalój, mikéteb yashúd tsohoráyim.\nYipól mitsidéja élef, urbabá mimineja --- eleja lo yigash.\nRak be\'eneja tabít, veshilumat resha\'im tiré.\nKi atá Adonay majsí, \'elyón samta me\'oneja.\nLo-teuné eleja ra\'á, venega\' lo-yikrab beaholeja.\nKi malajáv yetsavé-laj, lishmorjá bejol derajeja.\nAl kapáyim yisáunujá, pen-tigóf baéven ragleja.\nAl-shajál vaféten tidrój, timrós kafír vetanín.\nKi víjashak vaafaltéhu, asagvéhu ki yadá shemí.\nYikra\'eni ve\'aanéhu, imo anojí betsará.\nAjaltséhu vaajabdéhu.\nOrej yamím asbiéhu, veharéhu bishuatí.",
        espanol: "El que habita al abrigo del Altísimo morará bajo la sombra del Shaday.\nDiré a Adonai: \"Mi refugio y fortaleza, mi Elohim, en Él confiaré\".\nÉl te librará del lazo del cazador y de la peste destructora.\nCon sus alas te cubrirá, bajo sus plumas hallarás refugio; su verdad será escudo y protección.\nNo temerás el terror nocturno, ni la flecha que vuela de día, ni la peste que anda en la oscuridad, ni la plaga que destruye al mediodía.\nCaerán mil a tu lado y diez mil a tu diestra, pero a ti no llegará.\nSolo con tus ojos mirarás y verás la paga de los impíos.\nPorque has puesto a Adonai por tu refugio, al Altísimo por tu morada, no te sobrevendrá mal ni plaga tocará tu tienda.\nPues a sus ángeles mandará sobre ti para guardarte en todos tus caminos.\nEn sus manos te llevarán para que tu pie no tropiece en piedra.\nPisarás al león y al áspid, hollarás al cachorro y a la serpiente.\n\"Por cuanto en mí ha puesto su amor, yo lo libraré; lo exaltaré porque ha conocido mi Nombre.\nMe invocará y yo le responderé; con él estaré en la angustia.\nLo rescataré y lo honraré.\nLo saciaré con larga vida y le mostraré mi salvación.\""
      }
    ]
  },
  {
    id: "salmo-98",
    titulo: "Salmo 98",
    bloques: [
      {
        hebreo: "מִזְמוֹר, שִׁירוּ לַיהוָה שִׁיר חָדָשׁ, כִּי נִפְלָאוֹת עָשָׂה.\nהוֹשִׁיעָה לוֹ יְמִינוֹ, וּזְרוֹעַ קָדְשׁוֹ.\nהוֹדִיעַ יְהוָה יְשׁוּעָתוֹ, לְעֵינֵי הַגּוֹיִם גִּלָּה צִדְקָתוֹ.\nזָכַר חַסְדּוֹ וֶאֱמוּנָתוֹ לְבֵית יִשְׂרָאֵל.\nרָאוּ כָּל אַפְסֵי אָרֶץ, אֵת יְשׁוּעַת אֱלֹהֵינוּ.\nהָרִיעוּ לַיהוָה כָּל הָאָרֶץ, פִּצְחוּ וְרַנְּנוּ וְזַמֵּרוּ.\nזַמְּרוּ לַיהוָה בְּכִנּוֹר, בְּכִנּוֹר וְקוֹל זִמְרָה.\nבַּחֲצֹצְרוֹת וְקוֹל שׁוֹפָר, הָרִיעוּ לִפְנֵי הַמֶּלֶךְ יְהוָה.\nיִרְעַם הַיָּם וּמְלוֹאוֹ, תֵּבֵל וְיֹשְׁבֵי בָהּ.\nנְהָרוֹת יִמְחֲאוּ כָף, יַחַד הָרִים יְרַנֵּנוּ.\nלִפְנֵי יְהוָה כִּי בָא לִשְׁפֹּט הָאָרֶץ.\nיִשְׁפֹּט תֵּבֵל בְּצֶדֶק, וְעַמִּים בְּמֵישָׁרִים.",
        fonetica: "Mizmór, shirú LAdonay shir jadash, ki nifla\'ót asá.\nHoshí\'a lo yeminó uzroa kodshó.\nHodía Adonay yeshuató, leénei hagoyim gilá tsidkató.\nZajár jasdó veemunató leveit Israel.\nRaú kol afsei-árets et yeshuat Elohénu.\nHariú LAdonay kol-haárets, pitsjú veranenú vezamerú.\nZamerú LAdonay bejinór, bejinór vekol zimrá.\nBajatsotsrot vekol shofár hariú lifné hamelej Adonay.\nYir\'am hayám umelóo, tevel veyoshvé bah.\nNeharót yimjau-kaf, yajád harím yerenenú lifné Adonay.\nKi va lishpot haárets; yishpot tevel betsédek, veamím bemeisharím.",
        espanol: "Canten a Adonai un cántico nuevo, porque ha hecho maravillas; su diestra y su santo brazo le dieron victoria.\nAdonai hizo conocer su salvación y reveló su justicia a las naciones.\nSe acordó de su misericordia y fidelidad hacia Israel, y todos los confines de la tierra vieron la salvación de nuestro Elohim.\nAclamen a Adonai toda la tierra, rompan en júbilo y canten.\nCanten para Adonai con arpa, voz de cántico, trompetas y shofar ante el Rey, Adonai.\nBrame el mar y su plenitud, el mundo y sus habitantes; los ríos batan las manos y los montes juntos canten de gozo delante de Adonai, porque viene a juzgar la tierra con justicia y a los pueblos con rectitud."
      }
    ]
  },
  {
    id: "salmo-121",
    titulo: "Salmo 121",
    bloques: [
      {
        hebreo: "שִׁיר לַמַּעֲלוֹת, אֶשָּׂא עֵינַי אֶל הֶהָרִים, מֵאַיִן יָבֹא עֶזְרִי.\nעֶזְרִי מֵעִם יְהוָה, עֹשֵׂה שָׁמַיִם וָאָרֶץ.\nאַל יִתֵּן לַמּוֹט רַגְלֶךָ, אַל יָנוּם שֹׁמְרֶךָ.\nהִנֵּה לֹא יָנוּם וְלֹא יִישָׁן, שֹׁמֵר יִשְׂרָאֵל.\nיְהוָה שֹׁמְרֶךָ, יְהוָה צִלְּךָ עַל יַד יְמִינֶךָ.\nיוֹמָם הַשֶּׁמֶשׁ לֹא יַכֶּכָּה, וְיָרֵחַ בַּלָּיְלָה.\nיְהוָה יִשְׁמָרְךָ מִכָּל רָע, יִשְׁמֹר אֶת נַפְשֶׁךָ.\nיְהוָה יִשְׁמָר צֵאתְךָ וּבוֹאֶךָ, מֵעַתָּה וְעַד עוֹלָם.",
        fonetica: "Shir lamáalot, esá einái el-heharím, meáyin yavo ezrí.\nEzrí meim Adonay, osé shamáyim vaárets.\nAl yitén lamót ragleja, al yanúm shomreja.\nHiné lo yanúm velo yishán shomer Israel.\nAdonay shomreja, Adonay tsiljá al yad yeminéja.\nYomam hashemesh lo yakéka, veyaréaj balayla.\nAdonay yishmorjá mikol ra, yishmor et nafsheja.\nAdonay yishmor tsetjá uvoeja, meatá vead olam.",
        espanol: "Canto de las ascensiones. Alzaré mis ojos a los montes, ¿de dónde vendrá mi socorro?\nMi socorro viene de Adonai, que hizo los cielos y la tierra.\nNo permitirá que resbale tu pie, ni se dormirá tu guardador.\nHe aquí, no se adormecerá ni dormirá el guardador de Israel.\nAdonai es tu guardador, Adonai es tu sombra a tu mano derecha.\nEl sol no te herirá de día, ni la luna de noche.\nAdonai te guardará de todo mal, Él guardará tu alma.\nAdonai guardará tu salida y tu entrada desde ahora y para siempre."
      }
    ]
  },
  {
    id: "salmo-122",
    titulo: "Salmo 122",
    bloques: [
      {
        hebreo: "שִׁיר הַמַּעֲלוֹת לְדָוִד, שָׂמַחְתִּי בְּאֹמְרִים לִי בֵּית יְהוָה נֵלֵךְ.\nעֹמְדוֹת הָיוּ רַגְלֵינוּ, בִּשְׁעָרַיִךְ יְרוּשָׁלִָם.\nיְרוּשָׁלִָם הַבְּנוּיָה כְּעִיר, שֶׁחֻבְּרָה לָּהּ יַחְדָּו.\nשֶׁשָּׁם עָלוּ שְׁבָטִים, שִׁבְטֵי יָהּ עֵדוּת לְיִשְׂרָאֵל.\nלְהוֹדוֹת לְשֵׁם יְהוָה.\nכִּי שָׁמָּה יָשְׁבוּ כִסְאוֹת לְמִשְׁפָּט, כִּסְאוֹת לְבֵית דָּוִד.\nשַׁאֲלוּ שְׁלוֹם יְרוּשָׁלִָם, יִשְׁלָיוּ אֹהֲבָיִךְ.\nיְהִי שָׁלוֹם בְּחֵילֵךְ, שַׁלְוָה בְּאַרְמְנוֹתָיִךְ.\nלְמַעַן אַחַי וְרֵעָי, אֲדַבְּרָה נָא שָׁלוֹם בָּךְ.\nלְמַעַן בֵּית יְהוָה אֱלֹהֵינוּ, אֲבַקְשָׁה טוֹב לָךְ.",
        fonetica: "Shir hamáalot leDavid: samájti beomrim lí, beit Adonay nelej.\nOmdót hayú ragléinu bishaaráyij Yerushaláyim.\nYerushaláyim habenuyá keír shejubrá-lah yajdáv.\nSheshám alu shevatím, shivtei-Yah, edút leIsrael, lehodót leshem Adonay.\nKi shamá yashvú kis\'ot lemishpát, kis\'ot lebeit David.\nSha\'alu shalom Yerushaláyim, yishlayú ohavéij.\nYehi shalom bejeiléj, shalvá bearmnotáyij.\nLemáan ajái vere\'ai, adabráná shalom baj.\nLemáan beit Adonay Elohénu, avakshá tov laj.",
        espanol: "Canto de las ascensiones, de David. Me alegré con los que me decían: \"A la casa de Adonai iremos\".\nNuestros pies estuvieron dentro de tus puertas, oh Jerusalén.\nJerusalén está edificada como ciudad compacta y unida.\nAdonde suben las tribus, las tribus de Yah, testimonio para Israel, para alabar el Nombre de Adonai.\nAllí están los tronos de juicio, los tronos de la casa de David.\nOren por la paz de Jerusalén; prosperen los que te aman.\nHaya paz dentro de tus muros, tranquilidad en tus palacios.\nPor mis hermanos y compañeros diré: \"Sea la paz en ti\".\nPor la casa de Adonai nuestro Elohim buscaré tu bien."
      }
    ]
  },
  {
    id: "salmo-135",
    titulo: "Salmo 135",
    bloques: [
      {
        hebreo: "הַלְלוּיָהּ, הַלְלוּ אֶת שֵׁם יְהוָה.\nהַלְלוּ עַבְדֵי יְהוָה, הָעֹמְדִים בְּבֵית יְהוָה, בְּחַצְרוֹת בֵּית אֱלֹהֵינוּ.\nהַלְלוּ יָהּ כִּי טוֹב יְהוָה, זַמְּרוּ לִשְׁמוֹ כִּי נָעִים.\nכִּי יַעֲקֹב בָּחַר לוֹ יָהּ, יִשְׂרָאֵל לִסְגֻלָּתוֹ.\nכִּי אֲנִי יָדַעְתִּי כִּי גָדוֹל יְהוָה, וַאֲדֹנֵינוּ מִכָּל אֱלֹהִים.\nכֹּל אֲשֶׁר חָפֵץ יְהוָה עָשָׂה, בַּשָּׁמַיִם וּבָאָרֶץ בַּיַּמִּים וְכָל תְּהֹמוֹת.\nמַעֲלֶה נְשִׂיאִים מִקְצֵה הָאָרֶץ, בְּרָקִים לַמָּטָר עָשָׂה.\nמוֹצֵא רוּחַ מֵאוֹצְרוֹתָיו.\nשֶׁהִכָּה בִּכּוּרֵי מִצְרַיִם, מֵאָדָם עַד בְּהֵמָה.\nשֶׁשָּׁלַח אֹתוֹת וּמֹפְתִים בְּתוֹכֵךְ מִצְרַיִם, בְּפַרְעֹה וּבְכָל עֲבָדָיו.\nשֶׁהִכָּה גּוֹיִם רַבִּים, וְהָרַג מְלָכִים עֲצוּמִים.\nלְסִיחוֹן מֶלֶךְ הָאֱמֹרִי, וּלְעוֹג מֶלֶךְ הַבָּשָׁן.\nוּלְכֹל מַמְלְכוֹת כְּנָעַן.\nוְנָתַן אַרְצָם נַחֲלָה, נַחֲלָה לְיִשְׂרָאֵל עַמּוֹ.\nיְהוָה שִׁמְךָ לְעוֹלָם, יְהוָה זִכְרְךָ לְדוֹר וָדוֹר.\nכִּי יָדִין יְהוָה עַמּוֹ, וְעַל עֲבָדָיו יִתְנֶחָם.\nעֲצַבֵּי הַגּוֹיִם כֶּסֶף וְזָהָב, מַעֲשֵׂה יְדֵי אָדָם.\nפֶּה לָהֶם וְלֹא יְדַבֵּרוּ, עֵינַיִם לָהֶם וְלֹא יִרְאוּ.\nאָזְנַיִם לָהֶם וְלֹא יַאֲזִינוּ, אַף אֵין יֶשׁ רוּחַ בְּפִיהֶם.\nכְּמוֹהֶם יִהְיוּ עֹשֵׂיהֶם, כֹּל אֲשֶׁר בֹּטֵחַ בָּהֶם.\nבֵּית יִשְׂרָאֵל בָּרֲכוּ אֶת יְהוָה, בֵּית אַהֲרֹן בָּרֲכוּ אֶת יְהוָה.\nבֵּית הַלֵּוִי בָּרֲכוּ אֶת יְהוָה, יְרֵאֵי יְהוָה בָּרֲכוּ אֶת יְהוָה.\nבָּרוּךְ יְהוָה מִצִּיּוֹן, שֹׁכֵן יְרוּשָׁלִָם. הַלְלוּיָהּ.",
        fonetica: "Haleluyáh, halelú et shem Adonay.\nHalelú avdé Adonay, haomdím beveit Adonay, bejatserót beit Elohénu.\nHalelú-Yah ki tov Adonay, zamerú lishmó ki naím.\nKi Yaakóv bajár lo Yah, Israel lisgulató.\nKi aní yadáti ki gadól Adonay, vaadonéinu mikol Elohím.\nKol asher jafétz Adonay asá bashamáyim uvaárets, bayamím vejol tehomót.\nMaalé nesiím miktsé-haárets, berakím lamátar asá, motse rúaj meotserotáv.\nShehiká bikuré Mitzráyim meadam ad-behemá.\nSheshálaj otót umoftím betójech Mitzráyim, beParó uvekol avadáv.\nShehiká goyím rabím veharág melajím atsumím.\nLesijón melej haemorí, uleOg melej habashán, ulekol mamlajót Kenáan.\nVenatán artsám najalá, najalá leIsrael amó.\nAdonay shimjá leolám, Adonay zijkrá ledor vador.\nKi yadín Adonay amó, veal avadáv yitnejám.\nAtsabéi hagoyím kesef vezaháv, maasé yedei adam.\nPe lahem velo yedaberú, eináyim lahem velo yirú, oznaím lahem velo yaazínu, af ein-yesh rúaj befíhem.\nKemohem yihyú oséihem, kol asher botéaj bahem.\nBeit Israel barjú et Adonay, beit Aharón barjú et Adonay.\nBeit Haleví barjú et Adonay, yereéi Adonay barjú et Adonay.\nBarúj Adonay mitsiyón, shojén Yerushaláyim. Haleluyáh.",
        espanol: "¡Aleluya! Alaben el Nombre de Adonai, alaben siervos de Adonai.\nAlaben a Yah porque Adonai es bueno; canten salmos a su Nombre porque es agradable.\nYah escogió a Jacob, a Israel como su especial tesoro.\nYo sé que Adonai es grande, nuestro Adonai sobre todos los elohim.\nTodo lo que quiso Adonai lo hizo en los cielos, en la tierra, en los mares y en todos los abismos.\nHace subir las nubes desde los extremos de la tierra, produce relámpagos para la lluvia, saca el viento de sus depósitos.\nHirió a los primogénitos de Egipto, de hombres y de bestias; envió señales y prodigios en medio de Egipto, contra Faraón y todos sus siervos.\nHirió a muchas naciones y mató a reyes poderosos: a Sijón rey de los amorreos, a Og rey de Basán y a todos los reinos de Canaán.\nDio sus tierras en herencia, herencia a Israel su pueblo.\nAdonai, tu Nombre es eterno, tu memoria de generación en generación.\nAdonai juzgará a su pueblo y tendrá compasión de sus siervos.\nLos ídolos de las naciones son plata y oro, obra de manos humanas; tienen boca y no hablan, ojos y no ven, oídos y no oyen, tampoco hay aliento en sus bocas.\nComo ellos serán los que los hacen, todos los que confían en ellos.\nCasa de Israel, bendigan a Adonai; casa de Aarón, bendigan a Adonai; casa de Leví, bendigan a Adonai; los que temen a Adonai, bendigan a Adonai.\nBendito sea Adonai desde Sión, que habita en Jerusalén. ¡Aleluya!"
      }
    ]
  },
  {
    id: "salmo-136",
    titulo: "Salmo 136",
    bloques: [
      {
        hebreo: "הוֹדוּ לַיהוָה כִּי טוֹב, כִּי לְעוֹלָם חַסְדּוֹ.\nהוֹדוּ לֵאלֹהֵי הָאֱלֹהִים, כִּי לְעוֹלָם חַסְדּוֹ.\nהוֹדוּ לַאֲדוֹנֵי הָאֲדוֹנִים, כִּי לְעוֹלָם חַסְדּוֹ.\nלְעֹשֵׂה נִפְלָאוֹת גְּדֹלוֹת לְבַדּוֹ, כִּי לְעוֹלָם חַסְדּוֹ.\nלְעֹשֵׂה הַשָּׁמַיִם בִּתְבוּנָה, כִּי לְעוֹלָם חַסְדּוֹ.\nלְרֹקַע הָאָרֶץ עַל הַמָּיִם, כִּי לְעוֹלָם חַסְדּוֹ.\nלְעֹשֵׂה אוֹרִים גְּדֹלִים, כִּי לְעוֹלָם חַסְדּוֹ.\nאֶת הַשֶּׁמֶשׁ לְמֶמְשֶׁלֶת בַּיּוֹם, כִּי לְעוֹלָם חַסְדּוֹ.\nאֶת הַיָּרֵחַ וְכוֹכָבִים לְמֶמְשְׁלוֹת בַּלָּיְלָה, כִּי לְעוֹלָם חַסְדּוֹ.\nלְמַכֵּה מִצְרַיִם בִּבְכוֹרֵיהֶם, כִּי לְעוֹלָם חַסְדּוֹ.\nוַיּוֹצֵא יִשְׂרָאֵל מִתּוֹכָם, כִּי לְעוֹלָם חַסְדּוֹ.\nבְּיָד חֲזָקָה וּבִזְרוֹעַ נְטוּיָה, כִּי לְעוֹלָם חַסְדּוֹ.\nלְגֹזֵר יַם סוּף לִגְזָרִים, כִּי לְעוֹלָם חַסְדּוֹ.\nוְהֶעֱבִיר יִשְׂרָאֵל בְּתוֹכוֹ, כִּי לְעוֹלָם חַסְדּוֹ.\nוְנִעֵר פַּרְעֹה וְחֵילוֹ בְּיַם סוּף, כִּי לְעוֹלָם חַסְדּוֹ.\nלְמוֹלִיךְ עַמּוֹ בַּמִּדְבָּר, כִּי לְעוֹלָם חַסְדּוֹ.\nלְמַכֵּה מְלָכִים גְּדוֹלִים, כִּי לְעוֹלָם חַסְדּוֹ.\nוַיְהָרֹג מְלָכִים אַדִּירִים, כִּי לְעוֹלָם חַסְדּוֹ.\nלְסִיחוֹן מֶלֶךְ הָאֱמֹרִי, כִּי לְעוֹלָם חַסְדּוֹ.\nוּלְעוֹג מֶלֶךְ הַבָּשָׁן, כִּי לְעוֹלָם חַסְדּוֹ.\nוַיִּתֵּן אַרְצָם לְנַחֲלָה, כִּי לְעוֹלָם חַסְדּוֹ.\nנַחֲלָה לְיִשְׂרָאֵל עַבְדּוֹ, כִּי לְעוֹלָם חַסְדּוֹ.\nשֶׁבְּשִׁפְלוּתֵנוּ זָכַר לָנוּ, כִּי לְעוֹלָם חַסְדּוֹ.\nוַיִּפְרְקֵנוּ מִצָּרֵינוּ, כִּי לְעוֹלָם חַסְדּוֹ.\nנֹתֵן לֶחֶם לְכָל בָּשָׂר, כִּי לְעוֹלָם חַסְדּוֹ.\nהוֹדוּ לְאֵל הַשָּׁמָיִם, כִּי לְעוֹלָם חַסְדּוֹ.",
        fonetica: "Hodú LAdonay ki tov, ki leolám jasdó.\nHodú leElohé haElohim, ki leolám jasdó.\nHodú laAdonéi haAdoním, ki leolám jasdó.\nLeosé nifla\'ót gedolót levadó, ki leolám jasdó.\nLeosé hashamáyim bitbuná, ki leolám jasdó.\nLeroká haárets al hamáyim, ki leolám jasdó.\nLeosé orím gedolím, ki leolám jasdó.\nEt hashémesh lememshelet bayóm, ki leolám jasdó.\nEt hayaréaj vekojavím lememshelót balaylá, ki leolám jasdó.\nLemaké Mitzráyim bivjoréhem, ki leolám jasdó.\nVayotsé Israel mitojám, ki leolám jasdó.\nBeyad jazaká uvizroa netuyá, ki leolám jasdó.\nLegozér Yam Suf ligzarím, ki leolám jasdó.\nVeheevír Israel betojó, ki leolám jasdó.\nVeniér Paró vejiló beYam Suf, ki leolám jasdó.\nLemolíj amó bamidbár, ki leolám jasdó.\nLemaké melajím gedolím, ki leolám jasdó.\nVayharóg melajím adirím, ki leolám jasdó.\nLesijón melej haemorí, ki leolám jasdó.\nUleOg melej habashán, ki leolám jasdó.\nVayitén artsám lenajalá, ki leolám jasdó.\nNajalá leIsrael avdó, ki leolám jasdó.\nShebeshifluténu zakár lanu, ki leolám jasdó.\nVayifrkenu mitsarénu, ki leolám jasdó.\nNotén lejem lekol basar, ki leolám jasdó.\nHodú leEl hashamáyim, ki leolám jasdó.",
        espanol: "Den gracias a Adonai porque es bueno, porque para siempre es su misericordia.\nDen gracias al Elohim de los elohim, porque para siempre es su misericordia.\nDen gracias al Señor de los señores, porque para siempre es su misericordia.\nAl único que hace grandes maravillas, porque para siempre es su misericordia.\nAl que hizo los cielos con sabiduría... Al que afirmó la tierra sobre las aguas... Al que hizo las grandes lumbreras: el sol para señorear en el día, la luna y las estrellas para la noche...\nAl que hirió a Egipto en sus primogénitos y sacó a Israel con mano fuerte y brazo extendido...\nAl que dividió el Mar Rojo y pasó a Israel por en medio...\nAl que condujo a su pueblo por el desierto...\nAl que hirió a grandes reyes y mató a poderosos: Sijón rey de los amorreos y Og rey de Basán...\nAl que dio sus tierras en herencia, herencia a Israel su siervo...\nAl que se acordó de nosotros en nuestra humillación y nos libró de nuestros enemigos...\nAl que da alimento a todo ser viviente...\nDen gracias al Elohim de los cielos, porque para siempre es su misericordia."
      }
    ]
  },
  {
    id: "salmo-145",
    titulo: "Salmo 145",
    bloques: [
      {
        hebreo: "אֲרוֹמִמְךָ אֱלוֹהַי הַמֶּלֶךְ, וַאֲבָרֲכָה שִׁמְךָ לְעוֹלָם וָעֶד.\nבְּכָל יוֹם אֲבָרֲכֶךָ, וַאֲהַלְלָה שִׁמְךָ לְעוֹלָם וָעֶד.\nגָּדוֹל יְהוָה וּמְהֻלָּל מְאֹד, וְלִגְדֻלָּתוֹ אֵין חֵקֶר.\nדּוֹר לְדוֹר יְשַׁבַּח מַעֲשֶׂיךָ, וּגְבוּרוֹתֶיךָ יַגִּידוּ.\nהֲדַר כְּבוֹד הוֹדֶךָ, וְדִבְרֵי נִפְלְאוֹתֶיךָ אָשִׂיחָה.\nוְעֹז נוֹרְאוֹתֶיךָ יֹאמֵרוּ, וּגְדוּלָּתְךָ אֲסַפְּרֶנָּה.\nזֵכֶר רַב טוּבְךָ יַבִּיעוּ, וְצִדְקָתְךָ יְרַנֵּנוּ.\nחַנּוּן וְרַחוּם יְהוָה, אֶרֶךְ אַפַּיִם וּגְדוֹל חָסֶד.\nטוֹב יְהוָה לַכֹּל, וְרַחֲמָיו עַל כָּל מַעֲשָׂיו.\nיוֹדוּךָ יְהוָה כָּל מַעֲשֶׂיךָ, וַחֲסִידֶיךָ יְבָרְכוּךָ.\nכְּבוֹד מַלְכוּתְךָ יֹאמֵרוּ, וּגְבוּרָתְךָ יְדַבֵּרוּ.\nלְהוֹדִיעַ לִבְנֵי הָאָדָם גְּבוּרוֹתָיו, וּכְבוֹד הֲדַר מַלְכוּתוֹ.\nמַלְכוּתְךָ מַלְכוּת כָּל עוֹלָמִים, וּמֶמְשֶׁלְתְּךָ בְּכָל דוֹר וָדוֹר.\nסוֹמֵךְ יְהוָה לְכָל הַנֹּפְלִים, וְזוֹקֵף לְכָל הַכְּפוּפִים.\nעֵינֵי כֹל אֵלֶיךָ יְשַׂבֵּרוּ, וְאַתָּה נוֹתֵן לָהֶם אֶת אָכְלָם בְּעִתּוֹ.\nפּוֹתֵחַ אֶת יָדֶךָ, וּמַשְׂבִּיעַ לְכָל חַי רָצוֹן.\nצַדִּיק יְהוָה בְּכָל דְּרָכָיו, וְחָסִיד בְּכָל מַעֲשָׂיו.\nקָרוֹב יְהוָה לְכָל קֹרְאָיו, לְכֹל אֲשֶׁר יִקְרָאֻהוּ בֶאֱמֶת.\nרְצוֹן יְרֵאָיו יַעֲשֶׂה, וְאֶת שַׁוְעָתָם יִשְׁמַע וְיוֹשִׁיעֵם.\nשׁוֹמֵר יְהוָה אֶת כָּל אֹהֲבָיו, וְאֵת כָּל הָרְשָׁעִים יַשְׁמִיד.\nתְּהִלַּת יְהוָה יְדַבֶּר פִּי, וִיבָרֵךְ כָּל בָּשָׂר שֵׁם קָדְשׁוֹ לְעוֹלָם וָעֶד.",
        fonetica: "Aromimjá Elohai hamelej, vaavarejá shimjá leolám vaed.\nBejol yom avarejeka, vaahalelá shimjá leolám vaed.\nGadol Adonay umehulál meod, veligdulató ein jequer.\nDor ledor yeshabaj maaséja, ugevurotéja yaguidú.\nHadár kevod hodéja, vedivré niflaotéja asijá.\nVeoz norotéja yoméru, ugedulatjá asaprená.\nZéjer rav tuvjá yabíu, vetsidkatjá yeranénu.\nJanún verajúm Adonay, erej apáyim ugdol jaséd.\nTov Adonay lakól, verajamáv al kol maasáv.\nYodujá Adonay kol maaséja, vajasidéja yevarejúja.\nKevod maljutjá yoméru, ugevuratjá yedaberú.\nLehodía livné haadam gevurotáv, ukevód hadár maljutó.\nMaljutjá maljut kol olamím, umemsheltjá bekol dor vador.\nSomej Adonay lekol hanoflím, vezokéf lekol hakechufím.\nEinei kol eleja yesaberú, veatá notén lahem et ajlam beitó.\nPotéaj et yadeja, umasbiá lekol jai ratzón.\nTzadík Adonay bekol derajáv, vejasíd bekol maasáv.\nKaróv Adonay lekol korav, lekol asher yikrauhu beemét.\nRatzón yereav yaasé, veet shavátam yishmá veyoshiem.\nShomér Adonay et kol ohaváv, veet kol harreshaim yashmíd.\nTehilát Adonay yedaber pí, veyevarej kol basar shem kodshó leolám vaed.",
        espanol: "Te exaltaré, mi Elohim, el Rey, y bendeciré tu Nombre por siempre jamás.\nCada día te bendeciré y alabaré tu Nombre eternamente.\nGrande es Adonai y digno de suprema alabanza, su grandeza es inescrutable.\nGeneración tras generación celebrará tus obras y anunciará tus proezas.\nEl esplendor de la gloria de tu majestad y tus maravillas meditaré.\nEl poder de tus hechos temibles proclamarán, y tu grandeza contaré.\nLa memoria de tu inmensa bondad expresarán, y tu justicia cantarán.\nClemente y compasivo es Adonai, lento para la ira y grande en misericordia.\nBueno es Adonai para con todos, y sus compasiones sobre todas sus obras.\nTe alabarán Adonai todas tus criaturas, y tus fieles te bendecirán.\nLa gloria de tu reino dirán, y hablarán de tu poder.\nPara dar a conocer a los hijos de los hombres tus proezas y la gloria de tu majestad.\nTu reino es reino de todos los siglos, y tu dominio permanece por todas las generaciones.\nAdonai sostiene a los que caen y levanta a los que están encorvados.\nLos ojos de todos esperan en ti, y tú les das su alimento a su tiempo.\nAbres tu mano y sacias de favor a todo ser viviente.\nJusto es Adonai en todos sus caminos, y bondadoso en todas sus obras.\nCercano está Adonai a todos los que le invocan, a todos los que le invocan de verdad.\nEl deseo de los que le temen cumplirá, escuchará su clamor y los salvará.\nAdonai guarda a todos los que le aman, pero destruirá a todos los malvados.\nLa alabanza de Adonai proclamará mi boca, y bendecirá toda carne su santo Nombre por siempre jamás."
      }
    ]
  },
  {
    id: "salmo-146",
    titulo: "Salmo 146",
    bloques: [
      {
        hebreo: "הַלְלוּיָהּ, הַלְלִי נַפְשִׁי אֶת יְהוָה.\nאֲהַלְלָה יְהוָה בְּחַיַּי, אֲזַמְּרָה לֵאלֹהַי בְּעוֹדִי.\nאַל תִּבְטְחוּ בִנְדִיבִים, בְּבֶן אָדָם שֶׁאֵין לוֹ תְשׁוּעָה.\nתֵּצֵא רוּחוֹ יָשׁוּב לְאַדְמָתוֹ, בַּיּוֹם הַהוּא אָבְדוּ עֶשְׁתֹּנֹתָיו.\nאַשְׁרֵי שֶׁאֵל יַעֲקֹב בְּעֶזְרוֹ, שִׂבְרוֹ עַל יְהוָה אֱלֹהָיו.\nעֹשֵׂה שָׁמַיִם וָאָרֶץ, אֶת הַיָּם וְאֶת כָּל אֲשֶׁר בָּם.\nהַשֹּׁמֵר אֱמֶת לְעוֹלָם.\nעֹשֶׂה מִשְׁפָּט לַעֲשׁוּקִים, נֹתֵן לֶחֶם לָרְעֵבִים.\nיְהוָה מַתִּיר אֲסוּרִים, יְהוָה פֹּקֵחַ עִוְרִים.\nיְהוָה זֹקֵף כְּפוּפִים, יְהוָה אֹהֵב צַדִּיקִים.\nיְהוָה שֹׁמֵר אֶת הַגֵּרִים, יָתוֹם וְאַלְמָנָה יְעוֹדֵד.\nוְדֶרֶךְ רְשָׁעִים יְעַוֵּת.\nיִמְלֹךְ יְהוָה לְעוֹלָם, אֱלֹהַיִךְ צִיּוֹן לְדוֹר וָדוֹר. הַלְלוּיָהּ.",
        fonetica: "Haleluyá, halelí nafshí et Adonay.\nAhalelá Adonay bejayái, azamrá leElohai beodí.\nAl tivtejú bindivím, beben adam sheein lo teshúah.\nTetsé rujó yashúv leadmató, bayom hahu avdú eshtonotáv.\nAshré sheEl Yaakóv beezró, sivró al Adonay Elohav.\nOsé shamáyim vaárets, et hayám veet kol asher bam, hashomér emet leolám.\nOsé mishpát laashukím, notén lejem larreevím.\nAdonay matír asurím, Adonay pokéaj ivrím.\nAdonay zokéf kefufím, Adonay ohév tzadikím.\nAdonay shomér et hagerím, yatóm vealmáná yeoded, vedérej reshaím yeavét.\nYimlój Adonay leolám, Eloháij Tzión ledor vador. Haleluyá.",
        espanol: "¡Aleluya! Alaba, oh alma mía, a Adonai.\nAlabaré a Adonai mientras viva, cantaré salmos a mi Elohim mientras exista.\nNo confíen en príncipes, ni en hijo de hombre que no puede salvar.\nSale su espíritu, vuelve a la tierra; en ese mismo día perecen sus planes.\nBienaventurado aquel cuyo auxilio es el Elohim de Jacob, cuya esperanza está en Adonai su Elohim.\nEl que hizo los cielos y la tierra, el mar y todo lo que en ellos hay, el que guarda la verdad para siempre.\nEl que hace justicia a los oprimidos y da pan a los hambrientos.\nAdonai libera a los cautivos, Adonai abre los ojos de los ciegos.\nAdonai levanta a los caídos, Adonai ama a los justos.\nAdonai guarda a los extranjeros, sostiene al huérfano y a la viuda, pero trastorna el camino de los malvados.\nAdonai reinará para siempre, tu Elohim, oh Sión, de generación en generación. ¡Aleluya!"
      }
    ]
  },
  {
    id: "salmo-147",
    titulo: "Salmo 147",
    bloques: [
      {
        hebreo: "הַלְלוּיָהּ, כִּי טוֹב זַמְּרָה לֵאלֹהֵינוּ, כִּי נָעִים נָאוָה תְהִלָּה.\nבּוֹנֵה יְרוּשָׁלִַם יְהוָה, נִדְחֵי יִשְׂרָאֵל יְכַנֵּס.\nהָרוֹפֵא לִשְׁבוּרֵי לֵב, וּמְחַבֵּשׁ לְעַצְּבוֹתָם.\nמוֹנֶה מִסְפָּר לַכּוֹכָבִים, לְכֻלָּם שֵׁמוֹת יִקְרָא.\nגָּדוֹל אֲדוֹנֵינוּ וְרַב כֹּחַ, לִתְבוּנָתוֹ אֵין מִסְפָּר.\nמְעוֹדֵד עֲנָוִים יְהוָה, מַשְׁפִּיל רְשָׁעִים עֲדֵי אָרֶץ.\nעֱנוּ לַיהוָה בְּתוֹדָה, זַמְּרוּ לֵאלֹהֵינוּ בְּכִנּוֹר.\nהַמְכַסֶּה שָׁמַיִם בְּעָבִים, הַמֵּכִין לָאָרֶץ מָטָר.\nהַמַּצְמִיחַ הָרִים חָצִיר.\nנֹתֵן לִבְהֵמָה לַחְמָהּ, לִבְנֵי עֹרֵב אֲשֶׁר יִקְרָאוּ.\nלֹא בִגְבוּרַת הַסּוּס יֶחְפָּץ, לֹא בְשׁוֹקֵי הָאִישׁ יִרְצֶה.\nרוֹצֶה יְהוָה אֶת יְרֵאָיו, אֶת הַמְיַחֲלִים לְחַסְדּוֹ.\nשַׁבְּחוּ יְרוּשָׁלִַם אֶת יְהוָה, הַלְלִי אֱלֹהַיִךְ צִיּוֹן.\nכִּי חִזַּק בַּרִיחֵי שְׁעָרָיִךְ, בֵּרֵךְ בָּנָיִךְ בְּקִרְבֵּךְ.\nהַשֵּׂם גְּבוּלֵךְ שָׁלוֹם, חֵלֶב חִטִּים יַשְׂבִּיעֵךְ.\nהַשֹּׁלֵחַ אִמְרָתוֹ אָרֶץ, עַד מְהֵרָה יָרוּץ דְּבָרוֹ.\nהַנֹּתֵן שֶׁלֶג כַּצָּמֶר, כְּפוֹר כָּאֵפֶר יְפַזֵּר.\nמַשְׁלִיךְ קַרְחוֹ כְפִתִּים, לִפְנֵי קָרָתוֹ מִי יַעֲמֹד.\nיִשְׁלַח דְּבָרוֹ וְיַמְסֵם, יַשֵּׁב רוּחוֹ יִזְּלוּ מָיִם.\nמַגִּיד דְּבָרוֹ לְיַעֲקֹב, חֻקָּיו וּמִשְׁפָּטָיו לְיִשְׂרָאֵל.\nלֹא עָשָׂה כֵן לְכָל גוֹי, וּמִשְׁפָּטִים בַּל יְדָעוּם. הַלְלוּיָהּ.",
        fonetica: "Haleluyá, ki tov zamrá leEloheinu, ki naím navá tehilá.\nBoné Yerushaláim Adonay, nidjéi Israel yekanés.\nHarofé lishburéi lev, umejabésh leatzvotám.\nMoné mispár lakojavím, leculám shemot yikrá.\nGadol Adonéinu verav koaj, litbunató ein mispár.\nMeodéd anavím Adonay, mashpíl reshaím adei-árets.\nEnú laAdonay betodá, zamrú leEloheinu bekinnór.\nHamejasé shamáyim beavím, hamejín laárets matár, hamatzmíaj harím jatzír.\nNotén livhemá lajmá, livné orev asher yikraú.\nLo bigvurat hassús jechpátz, lo beshokéi haish yirtzé.\nRotsé Adonay et yereav, et hameyajalím lejasdó.\nShabjú Yerushaláim et Adonay, halelí Eloháij Tzión.\nKi jizák barijéi shearéja, beréj banáij bekirbéj.\nHasém gevuléj shalom, jelev jitím yasbiéj.\nHasholéaj imrató árets, ad mehérá yarútz devaró.\nHanotén sheleg katsámer, kefór kaéfer yefazér.\nMashlíj karjó kefitím, lifné karató mi yaamód.\nYishláj devaró veyamseem, yashev rujó yizlú maím.\nMaguid devaró leYaakóv, jukáv umishpatáv leIsrael.\nLo asá jen lekol goy, umishpatím bal yedaúm. Haleluyá.",
        espanol: "¡Aleluya! Porque es bueno cantar salmos a nuestro Elohim, porque es agradable y hermosa la alabanza.\nAdonai edifica Jerusalén, reúne a los desterrados de Israel.\nÉl sana a los quebrantados de corazón y venda sus heridas.\nCuenta el número de las estrellas, a todas ellas llama por su nombre.\nGrande es nuestro Adonai y poderoso en fuerza, su entendimiento es infinito.\nAdonai sostiene a los humildes y humilla a los malvados hasta la tierra.\nCanten a Adonai con acción de gracias, toquen salmos a nuestro Elohim con el arpa.\nÉl cubre los cielos con nubes, prepara la lluvia para la tierra, hace brotar hierba en los montes.\nDa su alimento a los animales, a los hijos del cuervo que claman.\nNo se deleita en la fuerza del caballo, ni se complace en las piernas del hombre.\nAdonai se complace en los que le temen, en los que esperan en su misericordia.\nAlaba, Jerusalén, a Adonai; alaba a tu Elohim, oh Sión.\nPorque fortaleció los cerrojos de tus puertas, bendijo a tus hijos dentro de ti.\nPuso paz en tus fronteras, te sacia con lo mejor del trigo.\nEnvía su palabra a la tierra, velozmente corre su mandato.\nDa la nieve como lana, esparce la escarcha como ceniza.\nArroja su hielo como pedazos, ¿quién resistirá delante de su frío?\nEnvía su palabra y los derrite, hace soplar su viento y fluyen las aguas.\nDeclara su palabra a Jacob, sus estatutos y juicios a Israel.\nNo hizo así con ninguna otra nación, ni conocieron sus juicios. ¡Aleluya!"
      }
    ]
  },
  {
    id: "salmo-148",
    titulo: "Salmo 148",
    bloques: [
      {
        hebreo: "הַלְלוּיָהּ, הַלְלוּ אֶת יְהוָה מִן הַשָּׁמַיִם.\nהַלְלוּהוּ בַּמְּרוֹמִים.\nהַלְלוּהוּ כָּל מַלְאָכָיו, הַלְלוּהוּ כָּל צְבָאָיו.\nהַלְלוּהוּ שֶׁמֶשׁ וְיָרֵחַ, הַלְלוּהוּ כָּל כּוֹכְבֵי אוֹר.\nהַלְלוּהוּ שְׁמֵי הַשָּׁמַיִם, וְהַמַּיִם אֲשֶׁר מֵעַל הַשָּׁמַיִם.\nיְהַלְלוּ אֶת שֵׁם יְהוָה, כִּי הוּא צִוָּה וְנִבְרָאוּ.\nוַיַּעֲמִידֵם לָעַד לְעוֹלָם, חָק נָתַן וְלֹא יַעֲבוֹר.\nהַלְלוּ אֶת יְהוָה מִן הָאָרֶץ, תַּנִּינִים וְכָל תְּהֹמוֹת.\nאֵשׁ וּבָרָד שֶׁלֶג וְקִיטוֹר, רוּחַ סְעָרָה עֹשָׂה דְבָרוֹ.\nהֶהָרִים וְכָל גְּבָעוֹת, עֵץ פְּרִי וְכָל אֲרָזִים.\nהַחַיָּה וְכָל בְּהֵמָה, רֶמֶשׂ וְצִפּוֹר כָּנָף.\nמַלְכֵי אֶרֶץ וְכָל לְאֻמִּים, שָׂרִים וְכָל שֹׁפְטֵי אָרֶץ.\nבַּחוּרִים וְגַם בְּתוּלוֹת, זְקֵנִים עִם נְעָרִים.\nיְהַלְלוּ אֶת שֵׁם יְהוָה, כִּי נִשְׂגָּב שְׁמוֹ לְבַדּוֹ.\nהוֹדוֹ עַל אֶרֶץ וְשָׁמָיִם.\nוַיָּרֶם קֶרֶן לְעַמּוֹ, תְּהִלָּה לְכָל חֲסִידָיו.\nלִבְנֵי יִשְׂרָאֵל עַם קְרוֹבוֹ. הַלְלוּיָהּ.",
        fonetica: "Haleluyá, halelú et Adonay min hashamayím; halelúhu bameromím.\nHalelúhu kol malajáv; halelúhu kol tsebaáv.\nHalelúhu shémesh veyaréaj; halelúhu kol kojvé or.\nHalelúhu shmé hashamayím; vehamáyim asher meál hashamayím.\nYehalelú et shém Adonay; ki hú tsivá venivraú.\nVayaamidéem la\'ad leolám; jok natán veló yaabór.\nHalelú et Adonay min haárets; taniním vejol tehomót.\nEsh ubarád, shéleg vekitor; rúaj seará osá devaró.\nHeharím vejol guevaót; éts perí vejol arazím.\nHajayá vejol behema; rémes vetsipór kanáf.\nMaljéi érets vejol leumím; sarím vejol shoftéi árets.\nBajurím vegam betulót; zekením im nearím.\nYehalelú et shém Adonay; ki nisgáv shemó levadó.\nHodó al érets veshamayím.\nVayarém kerén leamó; tehilá lejol jasidáv.\nLivné Yisrael am kerovó --- Haleluyá.",
        espanol: "¡Aleluya! Alaben a Adonai desde los cielos, alábenlo en las alturas.\nAlábenlo todos sus ángeles, alábenlo todos sus ejércitos.\nAlábenlo sol y luna, alábenlo todas las estrellas de luz.\nAlábenlo cielos de los cielos, y las aguas que están sobre los cielos.\nAlaben el Nombre de Adonai, porque Él mandó y fueron creados.\nLos afirmó para siempre jamás, les dio decreto que no pasará.\nAlaben a Adonai desde la tierra, monstruos marinos y todos los abismos.\nFuego y granizo, nieve y vapor, viento de tempestad que ejecuta su palabra.\nLos montes y todos los collados, árbol de fruto y todos los cedros.\nLas bestias y todo ganado, reptiles y aves que vuelan.\nLos reyes de la tierra y todos los pueblos, príncipes y todos los jueces de la tierra.\nLos jóvenes y también las doncellas, los ancianos junto con los niños.\nAlaben el Nombre de Adonai, porque sólo su Nombre es excelso; su gloria está sobre la tierra y los cielos.\nÉl exaltó el poder de su pueblo, alabanza de todos sus fieles, de los hijos de Israel, su pueblo cercano. ¡Aleluya!"
      }
    ]
  },
  {
    id: "salmo-150",
    titulo: "Salmo 150",
    bloques: [
      {
        hebreo: "הַלְלוּיָהּ, הַלְלוּ אֵל בְּקָדְשׁוֹ.\nהַלְלוּהוּ בִּרְקִיעַ עֻזּוֹ.\nהַלְלוּהוּ בִגְבוּרוֹתָיו, הַלְלוּהוּ כְּרֹב גֻּדְלוֹ.\nהַלְלוּהוּ בְּתֵקַע שׁוֹפָר, הַלְלוּהוּ בְּנֵבֶל וְכִנּוֹר.\nהַלְלוּהוּ בְּתֹף וּמָחוֹל, הַלְלוּהוּ בְּמִנִּים וְעוּגָב.\nהַלְלוּהוּ בְּצִלְצְלֵי שָׁמַע, הַלְלוּהוּ בְּצִלְצְלֵי תְרוּעָה.\nכֹּל הַנְּשָׁמָה תְּהַלֵּל יָהּ. הַלְלוּיָהּ.",
        fonetica: "Haleluyá, halelú El bekodshó.\nHalelúhu birkiá uzó.\nHalelúhu bigvurotáv; halelúhu keróv gudló.\nHalelúhu betéka shofár; halelúhu benevel vejinnór.\nHalelúhu betóf umajól; halelúhu beminím veugáv.\nHalelúhu betziltzeléi shamá; halelúhu betziltzeléi teruá.\nKol haneshamá tehalél Yah --- Haleluyá.",
        espanol: "¡Aleluya! Alaben a Elohim en su santuario; alábenlo en la magnificencia de su firmamento.\nAlábenlo por sus proezas; alábenlo conforme a la grandeza de su poder.\nAlábenlo con sonido de shofar; alábenlo con arpa y lira.\nAlábenlo con pandero y danza; alábenlo con cuerdas y flauta.\nAlábenlo con címbalos resonantes; alábenlo con címbalos de júbilo.\nTodo lo que respira alabe a Yah. ¡Aleluya!"
      }
    ]
  },
  {
    id: "kadish-israel",
    titulo: "Kadish Al Israel / Kadish por Israel",
    bloques: [
      {
        hebreo: "יִתְגַּדַּל וְיִתְקַדַּשׁ שְׁמֵהּ רַבָּא. (אָמֵן)\nבְּעָלְמָא דִּי בְרָא כִּרְעוּתֵהּ, וְיַמְלִיךְ מַלְכוּתֵהּ, וְיַצְמַח פּוּרְקָנֵהּ, וִיקָרֵב מְשִׁיחֵהּ. (אָמֵן)\nבְּחַיֵּיכוֹן וּבְיוֹמֵיכוֹן וּבְחַיֵּי דְכָל בֵּית יִשְׂרָאֵל, בַּעֲגָלָא וּבִזְמַן קָרִיב, וְאִמְרוּ אָמֵן.\n\nאָמֵן. יְהֵא שְׁמֵהּ רַבָּא מְבָרַךְ לְעָלַם וּלְעָלְמֵי עָלְמַיָּא.\nיִתְבָּרַךְ, וְיִשְׁתַּבַּח, וְיִתְפָּאַר, וְיִתְרוֹמַם, וְיִתְנַשֵּׂא, וְיִתְהַדָּר, וְיִתְעַלֶּה, וְיִתְהַלָּל שְׁמֵהּ דְּקֻדְשָׁא, בְּרִיךְ הוּא. (אָמֵן)\n\nלְעֵלָּא מִן כָּל בִּרְכָתָא וְשִׁירָתָא, תֻּשְׁבְּחָתָא וְנֶחֱמָתָא, דַּאֲמִירָן בְּעָלְמָא, וְאִמְרוּ אָמֵן. (אָמֵן)\n\nעַל יִשְׂרָאֵל וְעַל רַבָּנָן, וְעַל תַּלְמִידֵיהוֹן, וְעַל כָּל תַּלְמִידֵי תַּלְמִידֵיהוֹן, דְּעָסְקִין בְּאוֹרַיְתָא קַדִּישְׁתָּא, דִּי בְאַתְרָא הָדֵין וְדִי בְכָל אֲתַר וַאֲתַר.\nיְהֵא לָנָא וּלְהוֹן וּלְכוֹן חִנָּא וְחִסְדָּא וְרַחֲמֵי, מִן קֳדָם מָארֵי שְׁמַיָּא וְאַרְעָא, וְאִמְרוּ אָמֵן. (אָמֵן)\n\nיְהֵא שְׁלָמָא רַבָּא מִן שְׁמַיָּא, חַיִּים וְשָׂבָע, וִישׁוּעָה וְנֶחָמָה, וְשֵׁיזָבָא וּרְפוּאָה, וּגְאֻלָּה וּסְלִיחָה, וְכַפָּרָה וְרֵיוַח וְהַצָּלָה, לָנוּ וּלְכָל עַמּוֹ יִשְׂרָאֵל, וְאִמְרוּ אָמֵן. (אָמֵן)\n\nעוֹשֶׂה שָׁלוֹם בִּמְרוֹמָיו, הוּא בְּרַחֲמָיו יַעֲשֶׂה שָׁלוֹם עָלֵינוּ וְעַל כָּל עַמּוֹ יִשְׂרָאֵל, וְאִמְרוּ אָמֵן. (אָמֵן)",
        fonetica: "Yitgadal veyitkadash shemé rabá. (Amén)\nBealmá di berá jir\'utéh, veyamlij maljutéh, veyatsmaj purkanéh, vikaréb meshijéh. (Amén)\nBejayejón uveyomejón, uvejayéi dejol bet Yisrael, ba\'agalá ubizman karív, veimrú Amén.\n\nAmén. Yehé shemé rabá mevaráj le\'alam ule\'almé almaya.\nYitbaráj, ve\'yishtabáj, ve\'yitpaár, ve\'yitromám, ve\'yitnasé, ve\'yithadár, ve\'yit\'alé, ve\'yithalál shemé dekudshá beríj Hu. (Amén)\n\nLe\'éla min kol birjatá, shiratá, tishbejatá venejematá, daamíran bealmá, veimrú Amén. (Amén)\n\nAl Yisrael ve\'al rabbanán, ve\'al talmidéhon, ve\'al kol talmidéi talmidéhon, de\'askín beoraitá kadishtá, di beatrá hadéin, ve\'di bejol atár va\'atár.\nYehé laná ulehon ulejón jiná vejisdá verajaméi, min kodám Maréi shemayá ve\'ar\'á, veimrú Amén. (Amén)\n\nYehé shlamá rabá min shmayá, jayím vesabá, veyeshuá venejamá, veshejzavá urefuá, ugeulá uslijá, vekapará verevaj vehatzalá, lanú ulekol amó Yisrael, veimrú Amén. (Amén)\n\nOsé shalom bimromáv, hu berajamáv yaasé shalom aleinu ve\'al kol amó Yisrael, veimrú Amén. (Amén)",
        espanol: "Que se magnifique y santifique Su gran Nombre. (Amén)\nEn el mundo que Él creó conforme a Su voluntad; que haga reinar Su soberanía, haga florecer Su salvación y haga que Su ungido se aproxime. (Amén)\nEn la vida y los días de ustedes, así como en las vidas de toda la Casa de Israel, prontamente y en tiempo cercano. Y digan: Amén.\n\nAmén. Que Su gran Nombre sea bendito eternamente y por siempre jamás.\nQue se bendiga, alabe, glorifique, ensalce, exalte, magnifique, sublime y loe el Nombre del Santo, bendito es. (Amén)\n\nPor encima de todas las bendiciones, cánticos, alabanzas y consolaciones que son dichas en el mundo. Y digan: Amén. (Amén)\n\nSobre Israel, sobre los sabios, sobre sus discípulos y sobre todos los discípulos de sus discípulos, que se ocupan en la Torá sagrada, aquí y en todo lugar.\nQue haya para nosotros, para ellos y para todos ustedes gracia, bondad y misericordia de parte del Dueño de los cielos y la tierra. Y digan: Amén. (Amén)\n\nQue haya paz abundante desde el cielo, vida, plenitud, salvación, consuelo, liberación, sanación, redención, perdón, expiación, alivio y rescate, para nosotros y para todo Su pueblo Israel. Y digan: Amén. (Amén)\n\nEl que hace la paz en Sus alturas, Él, en Su misericordia, hará la paz sobre nosotros y sobre todo Su pueblo Israel. Y digan: Amén. (Amén)"
      }
    ]
  },
  {
    id: "shema",
    titulo: "Keriat Shema / Recitación del Shema",
    subtitulo: "Escucha, Israel",
    bloques: [
      {
        nota: "El Sha\"tz proclama: Barjú et Adonay hamvoráj — La congregación responde: Barúj Adonay hamvoráj leolám va\'ed",
        hebreo: "שְׁמַע יִשְׂרָאֵל, יְהוָה אֱלֹהֵינוּ, יְהוָה אֶחָד.\n\nבָּרוּךְ שֵׁם כְּבוֹד מַלְכוּתוֹ, לְעוֹלָם וָעֶד.\n\nוְאָהַבְתָּ אֵת יְהוָה אֱלֹהֶיךָ, בְּכָל לְבָבְךָ וּבְכָל נַפְשְׁךָ וּבְכָל מְאֹדֶךָ.\nוְהָיוּ הַדְּבָרִים הָאֵלֶּה אֲשֶׁר אָנֹכִי מְצַוְּךָ הַיּוֹם, עַל לְבָבֶךָ.\nוְשִׁנַּנְתָּם לְבָנֶיךָ, וְדִבַּרְתָּ בָּם, בְּשִׁבְתְּךָ בְּבֵיתֶךָ וּבְלֶכְתְּךָ בַדֶּרֶךְ, וּבְשָׁכְבְּךָ וּבְקוּמֶךָ.\nוּקְשַׁרְתָּם לְאוֹת עַל יָדֶךָ, וְהָיוּ לְטֹטָפֹת בֵּין עֵינֶיךָ.\nוּכְתַבְתָּם עַל מְזוּזוֹת בֵּיתֶךָ, וּבִשְׁעָרֶיךָ.",
        fonetica: "Shemá Yisrael Adonay Elohénu Adonay Ejád.\n\nBarúj shem kevód maljutó leolám va\'ed.\n\nVe\'ahavtá et Adonay Elohéja, bejol levavéja, uvejol nafshejá, uvejol meodéja.\nVehayú hadevarím haeléh asher Anojí metzavéja hayóm al levavéja.\nVeshinantám levanéja, vedibartá bam, beshivtéja bevéiteja, uvelejtéja badérej, uvshojbéja uvkuméja.\nUkshartám leot al yadeja, vehayú letotafót ben enéja.\nUjtavtám al mezuzót béiteja uvishaaréja.",
        espanol: "Escucha, Israel: Adonay es nuestro Elohim, Adonay es Uno.\n\nBendito sea el Nombre de la gloria de Su reino por siempre jamás.\n\nY amarás a Adonay tu Elohim con todo tu corazón, con toda tu alma y con todas tus fuerzas.\nGrabarás en tu corazón estas palabras que Yo te ordeno hoy.\nLas enseñarás a tus hijos y hablarás de ellas estando en tu casa y andando por el camino, al acostarte y al levantarte.\nLas atarás como señal sobre tu brazo y estarán como frontales entre tus ojos.\nLas escribirás en los postes de tu casa y en tus portales."
      },
      {
        nota: "Vehaya im Shamoa",
        hebreo: "וְהָיָה אִם שָׁמֹעַ תִּשְׁמְעוּ אֶל מִצְוֹתַי...",
        fonetica: "Vehaiá im shamoa tishmeú el mitzvotái...",
        espanol: "Y sucederá que, si escuchan diligentemente mis mandamientos que hoy les prescribo, amando a Adonay su Elohim y sirviéndole con todo su corazón y con toda su alma, Yo daré la lluvia de su tierra a su tiempo..."
      },
      {
        nota: "Vayomer",
        hebreo: "וַיֹּאמֶר יְהוָה אֶל מֹשֶׁה לֵּאמֹר: דַּבֵּר אֶל בְּנֵי יִשְׂרָאֵל וְאָמַרְתָּ אֲלֵהֶם, וְעָשׂוּ לָהֶם צִיצִת עַל כַּנְפֵי בִגְדֵיהֶם לְדֹרֹתָם...",
        fonetica: "Vayómer Adonay el Moshé lemór: Dabér el bené Yisrael veamartá alehem...",
        espanol: "Y Adonay dijo a Moshé: Habla a los hijos de Israel y diles que se hagan flecos en los bordes de sus mantos, por todas sus generaciones, y pongan sobre el fleco del borde un cordón celeste..."
      },
      {
        nota: "Veyatziv",
        hebreo: "וְיַצִּיב וְנָכוֹן וְקַיָּם וְיָשָׁר וְנֶאֱמָן...",
        fonetica: "Veyatzív venajón vekayám veyashár veneemán...",
        espanol: "Firme, verdadero, eterno, recto, fiel, amado, querido, agradable, hermoso, temible, poderoso, perfecto, aceptado, bueno y bello es este asunto sobre nosotros por siempre jamás..."
      }
    ]
  },
  {
    id: "salmo-92",
    titulo: "Salmo 92",
    subtitulo: "Mizmór shir leyóm hashabát",
    bloques: [
      {
        hebreo: "מִזְמוֹר שִׁיר לְיוֹם הַשַּׁבָּת.\nטוֹב לְהֹדוֹת לַיהוָה, וּלְזַמֵּר לְשִׁמְךָ עֶלְיוֹן.\nלְהַגִּיד בַּבֹּקֶר חַסְדֶּךָ, וֶאֱמוּנָתְךָ בַּלֵּילוֹת.\nעֲלֵי עָשׂוֹר וְעַל נֵבֶל, עֲלֵי הִגָּיוֹן בְּכִנּוֹר.\nכִּי שִׂמַּחְתַּנִי יְהוָה בְּפָעֳלֶךָ, בְּמַעֲשֵׂי יָדֶיךָ אֲרַנֵּן.\nמַה גָּדְלוּ מַעֲשֶׂיךָ יְהוָה, מְאֹד עָמְקוּ מַחְשְׁבוֹתֶיךָ.\nאִישׁ בַּעַר לֹא יֵדָע, וּכְסִיל לֹא יָבִין אֶת זֹאת.\nבְּפֹרַח רְשָׁעִים כְּמוֹ עֵשֶׂב, וַיָּצִיצוּ כָּל פֹּעֲלֵי אָוֶן, לְהִשָּׁמְדָם עֲדֵי עַד.\nוְאַתָּה מָרוֹם לְעוֹלָם יְהוָה.\nכִּי הִנֵּה אֹיְבֶיךָ יְהוָה, כִּי הִנֵּה אֹיְבֶיךָ יֹאבֵדוּ, יִתְפָּרְדוּ כָּל פֹּעֲלֵי אָוֶן.\nוַתָּרֶם כִּרְאֵם קַרְנִי, בַּלֹּתִי בְּשֶׁמֶן רַעֲנָן.\nוַתַּבֵּט עֵינִי בְּשׁוּרָי, בַּקָּמִים עָלַי מְרֵעִים תִּשְׁמַעְנָה אָזְנָי.\n\nצַדִּיק כַּתָּמָר יִפְרָח, כְּאֶרֶז בַּלְּבָנוֹן יִשְׂגֶּה.\nשְׁתוּלִים בְּבֵית יְהוָה, בְּחַצְרוֹת אֱלֹהֵינוּ יַפְרִיחוּ.\nעוֹד יְנוּבוּן בְּשֵׂיבָה, דְּשֵׁנִים וְרַעֲנַנִּים יִהְיוּ.\nלְהַגִּיד כִּי יָשָׁר יְהוָה, צוּרִי וְלֹא עַוְלָתָה בּוֹ.",
        fonetica: "Mizmór shir leyóm hashabát.\nTóv lehodót laAdonay, ulezamér leshimjá Elyón.\nLehagíd babóker jasdejá, veemunatjá balelót.\nAléi asór veal nével, aléi higayón bekínor.\nKi simajtáni Adonay befaoletjá, bemaaséi yadeja aranen.\nMá gadlú maaséja Adonay, meód amkú majshevoteja.\nIsh baár lo yedá, uksíl lo yavín et zot.\nBefóraj reshaím kemo ésev, vayatzítzu kol poaléi aven, lehishamdam adei ad.\nVe\'atá maróm leolám Adonay.\nKi hineh oyvéja Adonay, ki hineh oyvéja yobédú, yitparadú kol poaléi aven.\nVatarém kirém karní, balotí beshémen raanan.\nVatábét einí beshurái, bakamím alái mereím tishmaená oznaí.\n\nTzadík katamár yifráj, keerez balvanón yisgué.\nShetulím beveit Adonay, bejatzrót Elohénu yafrijú.\nOd yenubún beseivá, deshením veraanaím yihyú.\nLehagíd ki yashár Adonay, tsurí velo avlata bó.",
        espanol: "Bueno es alabarte, oh Adonay, y cantar salmos a tu Nombre, oh Altísimo.\nAnunciar por la mañana tu misericordia y tu fidelidad cada noche, en el decacordio y en el salterio, en tono suave con el arpa.\nPor cuanto me has alegrado, oh Adonay, con tus obras; en las obras de tus manos me gozo.\n¡Cuán grandes son tus obras, oh Adonay! Profundos son tus pensamientos.\nEl hombre necio no sabe, y el insensato no entiende esto.\nCuando brotan los impíos como la hierba y florecen todos los que hacen iniquidad, es para ser destruidos eternamente.\nMas Tú, Adonay, para siempre eres Altísimo.\nPorque he aquí tus enemigos, oh Adonay, perecerán; serán esparcidos todos los que hacen maldad.\nPero Tú aumentarás mis fuerzas como las del búfalo; seré ungido con aceite fresco.\n\nEl justo florecerá como la palmera; crecerá como cedro en el Líbano.\nPlantados en la casa de Adonay, en los atrios de nuestro Elohim florecerán.\nAun en la vejez fructificarán; estarán vigorosos y verdes, para anunciar que Adonay mi fortaleza es recto, y que en Él no hay injusticia."
      }
    ]
  },
  {
    id: "aseret-hadevarim",
    titulo: "Aseret HaDevarim / Los Diez Mandamientos",
    bloques: [
      {
        hebreo: "וַיְדַבֵּר אֱלֹהִים אֵת כָּל הַדְּבָרִים הָאֵלֶּה לֵאמֹר:\n\nאָנֹכִי יְהוָה אֱלֹהֶיךָ, אֲשֶׁר הוֹצֵאתִיךָ מֵאֶרֶץ מִצְרַיִם מִבֵּית עֲבָדִים.\nלֹא יִהְיֶה לְךָ אֱלֹהִים אֲחֵרִים, עַל פָּנָי.\nלֹא תַעֲשֶׂה לְךָ פֶסֶל, וְכָל תְּמוּנָה... לֹא תִשְׁתַּחֲוֶה לָהֶם וְלֹא תָעָבְדֵם.\nלֹא תִשָּׂא אֶת שֵׁם יְהוָה אֱלֹהֶיךָ לַשָּׁוְא.\nזָכוֹר אֶת יוֹם הַשַּׁבָּת, לְקַדְּשׁוֹ.\nכַּבֵּד אֶת אָבִיךָ וְאֶת אִמֶּךָ.\nלֹא תִרְצָח.\nלֹא תִנְאָף.\nלֹא תִגְנֹב.\nלֹא תַעֲנֶה בְרֵעֲךָ, עֵד שָׁקֶר.\nלֹא תַחְמֹד.",
        fonetica: "Vayedabér Elohím et kol hadevarím haelé lemór:\n\nAnojí Adonay Elohéja asher hotzetíja meéretz Mitzráyim mibet avadím.\nLo yihyé lejá Elohím ajerím al panái.\nLo taasé lejá fésel vejol temuná... lo tishtajavé lahem velo taavdém.\nLo tissá et shem Adonay Elohéja lashav.\nZajór et yom hashabát lekadshó.\nKabéd et avíja veet imeja.\nLo tirtsáj.\nLo tináf.\nLo tignóv.\nLo taané bereajá ed shakéR.\nLo tajmód.",
        espanol: "Y habló Elohim todas estas palabras, diciendo:\n\nYo soy Adonay tu Elohim, que te saqué de la tierra de Egipto, de casa de servidumbre.\nNo tendrás otros dioses delante de Mí.\nNo te harás imagen ni semejanza... No te inclinarás ante ellas ni las servirás.\nNo tomarás el Nombre de Adonay tu Elohim en vano.\nAcuérdate del día de Shabat para santificarlo.\nHonra a tu padre y a tu madre.\nNo matarás.\nNo cometerás adulterio.\nNo robarás.\nNo darás falso testimonio contra tu prójimo.\nNo codiciarás."
      }
    ]
  },
  {
    id: "kadish-titkabal",
    titulo: "Kadish Titkabal",
    bloques: [
      {
        hebreo: "יִתְגַּדַּל וְיִתְקַדַּשׁ שְׁמֵהּ רַבָּא. (אָמֵן)\nבְּעָלְמָא דִּי בְרָא כִּרְעוּתֵהּ... (אָמֵן)\nבְּחַיֵּיכוֹן וּבְיוֹמֵיכוֹן... וְאִמְרוּ אָמֵן.\n\nיְהֵא שְׁמֵהּ רַבָּא מְבָרַךְ לְעָלַם וּלְעָלְמֵי עָלְמַיָּא.\nיִתְבָּרַךְ וְיִשְׁתַּבַּח... שְׁמֵהּ דְּקֻדְשָׁא, בְּרִיךְ הוּא. (אָמֵן)\n\nלְעֵלָּא מִן כָּל בִּרְכָתָא... וְאִמְרוּ אָמֵן. (אָמֵן)\n\nתִּתְקַבַּל צְלוֹתָנָא וּבָעוּתָנָא... קֹדֶם אֲבוּנָא דְבִשְׁמַיָּא, וְאִמְרוּ אָמֵן. (אָמֵן)\n\nיְהֵא שְׁלָמָא רַבָּא מִן שְׁמַיָּא... לָנוּ וּלְכָל עַמּוֹ יִשְׂרָאֵל, וְאִמְרוּ אָמֵן. (אָמֵן)\n\nעוֹשֶׂה שָׁלוֹם בִּמְרוֹמָיו, הוּא בְּרַחֲמָיו יַעֲשֶׂה שָׁלוֹם עָלֵינוּ וְעַל כָּל עַמּוֹ יִשְׂרָאֵל, וְאִמְרוּ אָמֵן. (אָמֵן)",
        fonetica: "Yitgadal veyitkadash shemeh rabá. (Amén)\nBe\'alma di berá jir\'uteh... (Amén)\nBejayejón ubiyomejón... veimrú Amén.\n\nYehé shemeh rabá mebaraj le\'alam ule\'almé almaya.\nYitbaraj, veyishtabaj... shemeh dekudshá, berij hu. (Amén)\n\nLe\'ela min kol birjatá... veimrú Amén. (Amén)\n\nTitkabél tzelotaná ubautaná... kodém abuná debishmayá, veimrú Amén. (Amén)\n\nYehé shlamá rabá min shmayá... lanú ulekol amó Yisrael, veimrú Amén. (Amén)\n\nOsé shalom bimromáv, hu berajamáv yaasé shalom aleinu ve\'al kol amó Yisrael, veimrú Amén. (Amén)",
        espanol: "Sea engrandecido y santificado Su gran Nombre. (Amén)...\nEn el mundo que Él creó según Su voluntad; que establezca Su reino, haga florecer la redención y acerque al Mesías. (Amén)\nEn vida nuestra, en nuestros días y en la vida de toda la casa de Israel, pronto y en tiempo cercano, y digamos: Amén.\n\nSea Su gran Nombre bendito por siempre y para toda la eternidad.\nBendito, alabado, glorificado, exaltado, ensalzado, honrado, elevado y loado sea el Nombre del Santo, bendito es. (Amén)\n\nMás allá de toda bendición, cántico, alabanza y consolación que se pronuncian en el mundo, y digamos: Amén. (Amén)\n\nQue sean aceptadas nuestras plegarias y súplicas junto con las de toda la casa de Israel delante de nuestro Padre que está en los cielos, y digamos: Amén. (Amén)\n\nQue haya abundante paz desde el cielo, vida, saciedad, salvación, consuelo, liberación, sanidad, redención, perdón, expiación, alivio y rescate para nosotros y para todo Su pueblo Israel, y digamos: Amén. (Amén)\n\nEl que hace la paz en Sus alturas, Él, en Su misericordia, hará la paz sobre nosotros y sobre todo Su pueblo Israel. Y digamos: Amén. (Amén)"
      }
    ]
  },
  {
    id: "seder-tora",
    titulo: "Seder de la Lectura de la Torá",
    subtitulo: "La Kahal debe estar de pie",
    bloques: [
      {
        nota: "Antes de sacar el Sefer Torá",
        hebreo: "אַתָּה הָרְאֵתָ לָדַעַת, כִּי יְהוָה הוּא הָאֱלֹהִים, אֵין עוֹד מִלְּבַדּוֹ.\nאֵין כָּמוֹךָ בָאֱלֹהִים אֲדֹנָי, וְאֵין כְּמַעֲשֶׂיךָ.\nיְהִי יְהוָה אֱלֹהֵינוּ עִמָּנוּ, כַּאֲשֶׁר הָיָה עִם אֲבֹתֵינוּ...",
        fonetica: "Atá horetá ladaát ki Adonay hu haElohím, ein od milvadó.\nEin kamója baElohím Adonay, veein kemaaséja.\nYehí Adonay Elohénu imánu kaasher hayá im avotéinu...",
        espanol: "Tú has sido mostrado para saber que Adonay es el Elohim; no hay otro fuera de Él...\nNo hay como Tú entre los dioses, Adonay, ni como Tus obras.\nSea Adonay nuestro Elohim con nosotros, como estuvo con nuestros padres; no nos deje ni nos abandone..."
      },
      {
        nota: "Al alzar el Sefer Torá",
        hebreo: "וְזֹאת הַתּוֹרָה אֲשֶׁר שָׂם מֹשֶׁה לִפְנֵי בְּנֵי יִשְׂרָאֵל.\nעַל פִּי יְהוָה בְּיַד מֹשֶׁה.",
        fonetica: "Vezot haTorá asher sam Moshé lifné bené Israel.\nAl pí Adonay beyad Moshé.",
        espanol: "Esta es la Torá que Moshé puso en presencia de los hijos de Israel. Según la instrucción de Adonay, por medio de Moshé."
      }
    ]
  },
  {
    id: "bendiciones-tora",
    titulo: "Bendiciones por la Lectura de la Torá",
    bloques: [
      {
        nota: "El Olé dice",
        hebreo: "בָּרְכוּ אֶת יְהֹוָה הַמְבֹרָךְ.\nבָּרוּךְ יְהֹוָה הַמְבֹרָךְ לְעוֹלָם וָעֶד.\n\nבָּרוּךְ אַתָּה יְהֹוָה, אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר בָּחַר בָּנוּ מִכָּל הָעַמִּים וְנָתַן לָנוּ אֶת תּוֹרָתוֹ.\nבָּרוּךְ אַתָּה יְהֹוָה, נוֹתֵן הַתּוֹרָה.",
        fonetica: "Barejú et Adonai hamevoraj.\nBaruj Adonai hamevoraj leolam vaed.\n\nBaruj atá Adonay Elohénu Mélej haolám, ashér bajar banu mikól haamím venatán lanu et Torató.\nBaruj atá Adonay, notén haTorá.",
        espanol: "Bendigan a Adonay, el Bendito.\nBendito es Adonay, el Bendito, por siempre jamás.\n\nBendito eres Tú Adonai... que nos ha escogido de entre todas las naciones y nos ha entregado Su Torá. Bendito eres Tú Adonai, dador de la Torá."
      },
      {
        nota: "Después de la lectura",
        hebreo: "בָּרוּךְ אַתָּה יְהֹוָה, אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר נָתַן לָנוּ אֶת תּוֹרָתוֹ תּוֹרַת אֱמֶת, וְחַיֵּי עוֹלָם נָטַע בְּתוֹכֵנוּ.\nבָּרוּךְ אַתָּה יְהֹוָה, נוֹתֵן הַתּוֹרָה.",
        fonetica: "Baruj atá Adonay, Elohénu Mélej haolám, ashér natán lanu et Torató Torát emét, vejayé olam natá betojénu.\nBaruj atá Adonay, notén haTorá.",
        espanol: "Bendito eres Tú... que nos ha entregado Su Torá, Torá de verdad, y ha implantado en nuestro interior vida eterna. Bendito eres Tú Adonai, dador de la Torá."
      }
    ]
  },
  {
    id: "bendicion-congregacion",
    titulo: "Bendición por la Congregación",
    bloques: [
      {
        hebreo: "יְהִי שֵׁם יְהוָה מְבֹרָךְ, מֵעַתָּה וְעַד עוֹלָם.\nמִי שֶׁבֵּרַךְ אֲבוֹתֵינוּ אַבְרָהָם יִצְחָק וְיַעֲקֹב... הוּא יְבָרֵךְ אֶת כָּל הַקָּהָל הַקָּדוֹשׁ הַזֶּה...\nיְהֵא לָנָא וּלְהוֹן וּלְכוֹן חִנָּא וְחִסְדָּא וְרַחֲמֵי... וְאִמְרוּ אָמֵן.\n\nוְכֵן יְהִי רָצוֹן, וְנֹאמַר אָמֵן.",
        fonetica: "Yehí shem Adonay mevoráj me\'atá ve\'ad olám.\nMi sheberáj avoténu Avrahám, Itzjak veYaakóv... hu yevárej et kol hakahal hakadósh hazé...\nYehé laná ulehon ulejón jiná vejisdá verajaméi... veimrú Amén.\n\nVején yehí ratzón, venómar Amén.",
        espanol: "Sea bendito el Nombre de Adonay desde ahora y por siempre.\nQuien bendijo a nuestros padres Abraham, Itzjak e Yaakov... Él bendiga a toda esta sagrada congregación...\nQue haya para nosotros... gracia, bondad y misericordia... Y digan: Amén.\n\nY así sea Su voluntad, y digamos: Amén."
      }
    ]
  },
  {
    id: "medio-kadish",
    titulo: "Medio Kadish",
    bloques: [
      {
        hebreo: "יִתְגַּדַּל וְיִתְקַדַּשׁ שְׁמֵהּ רַבָּא. (אָמֵן)\n... יְהֵא שְׁמֵהּ רַבָּא מְבָרַךְ לְעָלַם וּלְעָלְמֵי עָלְמַיָּא...",
        fonetica: "Yitgadal veyitkadash shemeh rabá. (Amén)\n... Yehé shemeh rabá mebaraj le\'alam ule\'almé almaya...",
        espanol: "Que se magnifique y santifique Su gran Nombre. (Amén)...\nQue Su gran Nombre sea bendito eternamente..."
      }
    ]
  },
  {
    id: "hajnasa",
    titulo: "Hajnasá — Retorno del Sefer Torá",
    bloques: [
      {
        hebreo: "בָּרוּךְ יְהוָה אֱלֹהֵי יִשְׂרָאֵל, מִן הָעוֹלָם וְעַד הָעוֹלָם.\nוַיֹּאמֶר כָּל הָעָם: אָמֵן, הַלְלוּיָהּ.",
        fonetica: "Baruj Adonay Elohé Yisrael min haolám vead haolám.\nVeamár kol ha\'ám: Amén, Haleluyáh.",
        espanol: "Bendito sea Adonay, Elohim de Israel, desde la eternidad y hasta la eternidad.\nY todo el pueblo diga: Amén, Aleluya."
      },
      {
        nota: "Al Introducir el Sefer Torá",
        hebreo: "שׁוּבָה לִמְעוֹנָךְ וּשְׁכוֹן בֵּית מַאֲוַיָּךְ...\nיְבָרֶכְךָ יְהוָה וְיִשְׁמְרֶךָ.\nיָאֵר יְהוָה פָּנָיו אֵלֶיךָ, וִיחֻנֶּךָּ.\nיִשָּׂא יְהוָה פָּנָיו אֵלֶיךָ, וְיָשֵׂם לְךָ שָׁלוֹם.",
        fonetica: "Shuvá lim\'onéja, ushkón bevét maavayéja...\nYevarejéja Adonay veyish\'meréja.\nYaer Adonay panáv eléja, vijunéka.\nIsá Adonay panáv eléjaveyasém lejá shalom.",
        espanol: "Retorna a Tu morada y habita en la casa de Tu anhelo...\nQue Adonai te bendiga y te guarde.\nQue Adonai resplandezca su rostro hacia ti y te de gracia.\nQue Adonai vuelva su rostro hacia ti y te conceda paz."
      },
      {
        nota: "Osé Shalom",
        hebreo: "עוֹשֶׂה שָׁלוֹם בִּמְרוֹמָיו, הוּא בְּרַחֲמָיו יַעֲשֶׂה שָׁלוֹם עָלֵינוּ וְעַל כָּל עַמּוֹ יִשְׂרָאֵל, וְעַל כָּל יוֹשְׁבֵי תֵבֵל, וְאִמְרוּ אָמֵן.",
        fonetica: "Osé shalom bimromáv, hu berajamáv yaasé shalom aléinu ve\'al kol amó Yisrael, ve\'al kol yoshvé tevél, ve\'imrú Amén.",
        espanol: "El que hace la paz en Sus alturas, Él en Su misericordia hará la paz sobre nosotros, sobre todo Su pueblo Israel y sobre todos los habitantes de la tierra. Y digan: Amén."
      }
    ]
  }
]
