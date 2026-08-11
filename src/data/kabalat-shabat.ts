export interface BloqueSiddur {
  hebreo: string
  fonetica: string
  espanol: string
  nota?: string
}

export interface SeccionSiddur {
  id: string
  titulo: string
  subtitulo?: string
  bloques: BloqueSiddur[]
}

export const seccionesKabalatShabat: SeccionSiddur[] = [
  {
    id: `hadlakat-nerot`,
    titulo: `Hadlakat Nerot`,
    subtitulo: `Encendido de las Candelas de Shabat`,
    bloques: [
      {
        hebreo: `אֲנוּ מַדְלִיקִים אֶת הַנֵּרוֹת לִכְבוֹד שַׁבָּת קֹדֶשׁ`,
        fonetica: `Anú madlikim et ha'nerot lijvod Shabat Kodesh`,
        espanol: `Encendemos las luces en honor al Shabat.`,
        nota: `Al encender las luces en honor al Shabat`,
      },
      {
        hebreo: `בָּרוּךְ אַתָּה יְהוָה אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ לְהַדְלִיק נֵר שֶׁל שַׁבָּת`,
        fonetica: `Baruj Atá Adonay Elohenu Mélej ha'olam, asher kideshanu bemitzvotav ve'tzivanu lehadlik ner shel Shabat`,
        espanol: `Bendito eres Tú, Adonay, nuestro Dios, Rey del universo, que nos santificó con Sus mandamientos y nos ordenó encender la candela de Shabat.`,
      },
      {
        hebreo: `בָּרוּךְ אַתָּה יְהוָה אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ לְקַדֵּשׁ אֶת יוֹם הַשַּׁבָּת`,
        fonetica: `Baruj Atá Adonay Elohenu Mélej ha'olam, asher kideshanu bemitzvotav ve'tzivanu lekadesh et yom haShabat`,
        espanol: `Bendito eres Tú, Adonay, nuestro Dios, Rey del universo, que nos santificó con Sus mandamientos y nos ordenó santificar el día de Shabat.`,
        nota: `Bendición Alternativa. Nota: Si Yom Tov cae en Shabat, se incluye "Shabat ve" antes de "Yom Tov"`,
      },
      {
        hebreo: `בָּרוּךְ אַתָּה יְהוָה אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ לְהַדְלִיק נֵר שֶׁל (שַׁבָּת וְיוֹם טוֹב)`,
        fonetica: `Baruj Atá Adonay Elohenu Mélej ha'olam, asher kideshanu bemitzvotav ve'tzivanu lehadlik ner shel (Shabat ve) Yom Tov`,
        espanol: `Bendito eres Tú, Adonay, nuestro Dios, Rey del universo, que nos santificó con Sus mandamientos y nos ordenó encender la vela de (Shabat y) Yom Tov.`,
        nota: `Cuando Yom Tov cae en Shabat`,
      },
    ],
  },
  {
    id: `plegaria-encendido`,
    titulo: `Plegaria Posterior al Encendido`,
    subtitulo: `Oración personal después de encender las velas`,
    bloques: [
      {
        hebreo: `יְהִי רָצוֹן מִלְּפָנֶיךָ אֲדֹנָי אֱלֹהַי וֵאלֹהֵי אֲבוֹתַי, שֶׁתִּתְקַבֵּל תְפִלָּתִי לְפָנֶיךָ, וְתִזְכֶּה אוֹתִי וְאֶת בֵּיתִי לְשָׁלוֹם, אוֹר, שִׂמְחָה וּבְרָכָה. שְׁמוֹר אוֹתִי וְהַצִּילֵנוּ מִכָּל צָרָה, וְשַׁלַּח אוֹרְךָ בְּתוֹכֵנוּ. שֶׁיָּאִיר אוֹר נֵרוֹת אֵלּוּ אֶת נַפְשׁוֹתֵינוּ, וּבְאוֹר הָעוֹלָם רַבִּי יֵשׁוּעַ מִנָּצְרַת הַמָּשִׁיחַ, יִתְעוֹרֵר בָּנוּ שָׁלוֹם, רַחֲמִים וּגְאֻלָּה. אָמֵן.`,
        fonetica: `Yehí ratzón milfanéja Adonái Elohái veElohé avotái, shetitkabél tefilatí lefanéja, vetizké oti veet betí leshalóm, or, simjá uverajá. Shmór oti vehatziléinu mikól tzará, veshaláj orjá betojénu. SheYájir or nerót élu et nafshoténu, uVeOr haOlam Rabi Yeshúa miNatzrat haMashíaj, yit'orér banu shalóm, rajamím ugeulá. Amen.`,
        espanol: `Sea Tu voluntad, Adonay, mi Elohim y Elohim de mis antepasados, que mi plegaria sea aceptada ante Ti, que me concedas a mí y a mi hogar paz, luz, alegría y bendición. protégeme y líbranos de toda angustia, y envía Tu luz dentro de nosotros. Que la luz de estas velas ilumine nuestras almas, y que por la luz del mundo, Rabí Yeshúa de Natzrat, el Mashíaj, se despierte en nosotros la paz, la compasión y la redención. Amen.`,
        nota: `Es costumbre que la mujer recite una plegaria personal al encender las velas`,
      },
    ],
  },
  {
    id: `mizmor-shir`,
    titulo: `Mizmór leDavid`,
    subtitulo: `Salmo 29 — Kabalat Shabat`,
    bloques: [
      {
        hebreo: `מִזְמוֹר לְדָוִד. הָבוּ לַיהוָה בְּנֵי אֵלִים, הָבוּ לַיהוָה כָּבוֹד וָעֹז. הָבוּ לַיהוָה כְּבוֹד שְׁמוֹ, הִשְׁתַּחֲווּ לַיהוָה בְּהַדְרַת קֹדֶשׁ.`,
        fonetica: `Mizmór leDavid. Havú laAdonay bené Elim, havú laAdonay kavód va'oz. Havú laAdonay kevód shemó, hishtajavú laAdonay behadrat kodesh.`,
        espanol: `Salmo de David. Dad a Adonay, hijos de los poderosos, dad a Adonay honor y fortaleza. Dad a Adonay el honor debido a Su nombre; postraos ante Adonay en la majestad de la santidad.`,
      },
      {
        hebreo: `קוֹל יְהוָה עַל הַמָּיִם, אֵל הַכָּבוֹד הִרְעִים, יְהוָה עַל מַיִם רַבִּים. קוֹל יְהוָה בַּכֹּחַ, קוֹל יְהוָה בֶּהָדָר. קוֹל יְהוָה שֹׁבֵר אֲרָזִים, וַיְשַׁבֵּר יְהוָה אֶת אַרְזֵי הַלְּבָנוֹן.`,
        fonetica: `Kol Adonay al hamayim, El hakavód hir'im, Adonay al mayim rabim. Kol Adonay bakoaj, Kol Adonay behadár. Kol Adonay shovér arazim, vayeshaber Adonay et arzé haLevanón.`,
        espanol: `La voz de Adonay está sobre las aguas; Elohim del honor truena; Adonay está sobre muchas aguas. La voz de Adonay es poderosa; la voz de Adonay es majestuosa. La voz de Adonay quiebra los cedros; Adonay quiebra los cedros del Líbano.`,
      },
      {
        hebreo: `וַיַּרְקִידֵם כְּמוֹ עֵגֶל, לְבָנוֹן וְשִׂרְיוֹן כְּמוֹ בֶן רְאֵמִים. קוֹל יְהוָה חֹצֵב לַהֲבוֹת אֵשׁ. קוֹל יְהוָה יָחִיל מִדְבָּר, יָחִיל יְהוָה מִדְבַּר קָדֵשׁ.`,
        fonetica: `Vayarkidém kemo égel, Levanón veSiryón kemo ben re'emim. Kol Adonaj jótzév lajavót esh. Kol Adonay jajil midbar, jajil Adonay midbar Kadesh.`,
        espanol: `Los hace saltar como becerros; al Líbano y al Siryón como crías de búfalo. La voz de Adonay lanza llamas de fuego. La voz de Adonay sacude el desierto; Adonay sacude el desierto de Kadesh.`,
      },
      {
        hebreo: `קוֹל יְהוָה יְחוֹלֵל אַיָּלוֹת, וַיֶּחֱשֹׂף יְעָרוֹת; וּבְהֵיכָלוֹ כֻּלּוֹ אֹמֵר כָּבוֹד. יְהוָה לַמַּבּוּל יָשָׁב, וַיֵּשֶׁב יְהוָה מֶלֶךְ לְעוֹלָם.`,
        fonetica: `Kol Adonay jejolel ayalót, vayejesóf ye'arót; uvehejaló kuló omer kavód. Adonay lamavúl yashav, vayéshev Adonay Mélej le'olam.`,
        espanol: `La voz de Adonay hace parir a las ciervas y desnuda los bosques; y en Su santuario todo proclama: "¡Honor!" Adonay se sienta sobre el diluvio; Adonay se sienta como Rey para siempre.`,
      },
      {
        hebreo: `יְהוָה עֹז לְעַמּוֹ יִתֵּן, יְהוָה יְבָרֵךְ אֶת עַמּוֹ בַשָּׁלוֹם.`,
        fonetica: `Adonay oz le'amo yitén, Adonay yevarej et 'amo vashalóm.`,
        espanol: `Adonay dará fuerza a Su pueblo; Adonay bendecirá a Su pueblo con paz.`,
      },
    ],
  },
  {
    id: `leja-dodi`,
    titulo: `Lejá Dodí`,
    subtitulo: `Ven, mi amado — Poema de Kabalat Shabat`,
    bloques: [
      {
        hebreo: `לְכָה דוֹדִי לִקְרַאת כַּלָּה, פְּנֵי שַׁבָּת נְקַבְּלָה.`,
        fonetica: `Lejá Dodí likrat kalá, pnéi Shabat nekabelá.`,
        espanol: `Ven, mi amado, al encuentro de la novia; recibamos el rostro del Shabat.`,
      },
      {
        hebreo: `שָׁמוֹר וְזָכוֹר בְּדִבּוּר אֶחָד, הִשְׁמִיעָנוּ אֵל הַמְיֻחָד, יְהוָה אֶחָד וּשְׁמוֹ אֶחָד, לְשֵׁם וּלְתִפְאֶרֶת וּלְתְהִלָּה.`,
        fonetica: `Shamór vezajór bedibúr ejád, hishmi'anú El hameyujád, Adonay ejád ushemó ejád, leshem uletiféret uletehilá.`,
        espanol: `"Guardar" y "recordar" en una sola palabra nos hizo oír el Elohím único; Adonay es uno y Su nombre es uno, para gloria, esplendor y alabanza.`,
      },
      {
        hebreo: `לִקְרַאת שַׁבָּת לְכוּ וְנֵלְכָה, כִּי הִיא מְקוֹר הַבְּרָכָה, מֵרֹאשׁ מִקֶּדֶם נְסוּכָה, סוֹף מַעֲשֶׂה בְּמַחֲשָׁבָה תְּחִלָּה.`,
        fonetica: `Likrat Shabat lejú vaneljá, ki hi mekór haberajá, merósh mikedém nesujá, sof maasé bemajshavá tejilá.`,
        espanol: `Al encuentro del Shabat vayamos, pues ella es fuente de bendición; desde el principio fue consagrada, el fin de la obra fue pensado desde el inicio.`,
      },
      {
        hebreo: `מִקְדַּשׁ מֶלֶךְ עִיר מְלוּכָה, קוּמִי צְאִי מִתּוֹךְ הַהֲפֵכָה, רַב לָךְ שֶׁבֶת בְּעֵמֶק הַבָּכָא, וְהוּא יַחְמוֹל עָלַיִךְ חֶמְלָה.`,
        fonetica: `Mikdash Mélej ir melujá, kumi tzeí mitój hahaféjá, rav laj shevet beémek habajá, vehú jajmól aláij jemlá.`,
        espanol: `Santuario del Rey, ciudad real, levántate y sal del caos; basta ya de morar en el valle del llanto, Él tendrá compasión de ti con ternura.`,
      },
      {
        hebreo: `הִתְנַעֲרִי מֵעָפָר קוּמִי, לִבְשִׁי בִּגְדֵי תִפְאַרְתֵּךְ עַמִּי, עַל יַד בֶּן יִשַׁי בֵּית הַלַּחְמִי, קָרְבָה אֶל נַפְשִׁי גְּאֻלָּה.`,
        fonetica: `Hitna'arí me'afar kumí, livshí bigdéi tifartéj 'amí, al yad ben Yishái Beit haLajmí, kervá el nafshí geulá.`,
        espanol: `Sacúdete el polvo, levántate; viste tus ropas de esplendor, pueblo mío. Por la mano del hijo de Yishái de Beit Lejem, se acerca la redención de mi alma.`,
      },
      {
        hebreo: `הִתְעוֹרְרִי הִתְעוֹרְרִי, כִּי בָא אוֹרֵךְ קוּמִי אוֹרִי, עוּרִי עוּרִי שִׁיר דַּבְּרִי, כְּבוֹד יְהוָה עָלַיִךְ נִגְלָה.`,
        fonetica: `Hit'orérí hit'orérí, ki va oréj kumí orí, 'urí 'urí shir davérí, kevód Adonay aláij niglá.`,
        espanol: `Despierta, despierta, pues ha llegado tu luz; levántate y resplandece. Despierta, despierta, canta un cántico, la gloria de Adonay se ha revelado sobre ti.`,
      },
      {
        hebreo: `לֹא תֵבוֹשִׁי וְלֹא תִכָּלְמִי, מַה תִּשְׁתּוֹחֲחִי וּמַה תֶּהֱמִי, בָּךְ יֶחֱסוּ עֲנִיֵּי עַמִּי, וְנִבְנְתָה עִיר עַל תִּלָּהּ.`,
        fonetica: `Ló tevoshí veló tikalmí, mah tishtojají umah tehemí, baj jejésu anijéi 'amí, venivnetá ir al tilá.`,
        espanol: `No te avergüences ni te humilles, ¿por qué te postras y por qué gimes? En ti confiarán los humildes de mi pueblo y la ciudad será reconstruida sobre su colina.`,
      },
      {
        hebreo: `וְהָיוּ לִמְשִׁיסָה שׁוֹסַיִךְ, וְרָחֲקוּ כָּל מְבַלְּעֵיִךְ; יָשִׂישׂ עָלַיִךְ אֱלֹהַיִךְ, כִּמְשׂוֹשׂ חָתָן עַל כַּלָּה.`,
        fonetica: `Vehayú limshisá shosáij, verajakú kol meval'éij; yasís aláij Eloháij, kimsós jatán al kalá.`,
        espanol: `Serán saqueados tus saqueadores, y se alejarán todos tus devoradores. Se regocijará sobre ti tu Elohím, como el gozo del novio por la novia.`,
      },
      {
        hebreo: `יָמִין וּשְׂמֹאל תִּפְרֹצִי, וְאֶת יְהוָה תַּעֲרִיצִי, עַל יַד אִישׁ בֶּן פַּרְצִי, וְנִשְׂמְחָה וְנָגִילָה.`,
        fonetica: `Yamín usmól tifrótzí, veet Adonay ta'arítzí, al yad ish ben Partzí, venismjá venagilá.`,
        espanol: `A derecha e izquierda te expandirás, y a Adonay reverenciarás. Por la mano del hombre, hijo de Partzí, nos alegraremos y nos regocijaremos.`,
      },
      {
        hebreo: `בּוֹאִי בְשָׁלוֹם עֲטֶרֶת בַּעְלָּהּ, גַּם בְּשִׂמְחָה בְּרִנָּה וּבְצָהֳלָה, תּוֹךְ אֱמוּנֵי עַם סְגֻלָּה. בּוֹאִי כַּלָּה. בּוֹאִי כַּלָּה, שַׁבָּת מַלְכְּתָא.`,
        fonetica: `Boí veshalóm ateret ba'alá, gam besimjá beriná uvetzahalá, toj emunéi 'am segulá. Boí kalá. Boí kalá, Shabat Malketá.`,
        espanol: `Ven en paz, corona de tu esposo, también con alegría, canto y júbilo, en medio del pueblo elegido y fiel. Ven, novia. Ven, novia, Reina del Shabat.`,
      },
    ],
  },
  {
    id: `shalom-alejem`,
    titulo: `Shalom Alejém`,
    subtitulo: `Paz sobre vosotros — Saludo a los malajim`,
    bloques: [
      {
        hebreo: `שָׁלוֹם עֲלֵיכֶם מַלְאֲכֵי הַשָּׁרֵת, מַלְאֲכֵי עֶלְיוֹן, מֶלֶךְ מַלְכֵי הַמְּלָכִים, הַקָּדוֹשׁ בָּרוּךְ הוּא.`,
        fonetica: `Shalóm alejém malajéi hasharét, malajéi elyón, Mélej maljéi hamelajím, hakadosh baruj Hu.`,
        espanol: `La paz sea sobre vosotros, malajim servidores, malajim supremos, del Rey de reyes, el Santo, bendito sea.`,
        nota: `Se recita o canta. Repetir 3 veces.`,
      },
      {
        hebreo: `בּוֹאֲכֶם לְשָׁלוֹם מַלְאֲכֵי הַשָּׁלוֹם, מַלְאֲכֵי עֶלְיוֹן, מֶלֶךְ מַלְכֵי הַמְּלָכִים, הַקָּדוֹשׁ בָּרוּךְ הוּא.`,
        fonetica: `Boajém leshalóm malajéi hashalóm, malajéi elyón, Mélej maljéi hamelajím, hakadosh baruj Hu.`,
        espanol: `Entrad en paz, malajim de la paz, malajim supremos, del Rey de reyes, el Santo, bendito sea.`,
        nota: `Repetir 3 veces`,
      },
      {
        hebreo: `בָּרְכוּנוּ לְשָׁלוֹם מַלְאֲכֵי הַשָּׁלוֹם, מַלְאֲכֵי עֶלְיוֹן, מֶלֶךְ מַלְכֵי הַמְּלָכִים, הַקָּדוֹשׁ בָּרוּךְ הוּא.`,
        fonetica: `Barjunú leshalóm malajéi hashalóm, malajéi elyón, Mélej maljéi hamelajím, hakadosh baruj Hu.`,
        espanol: `Bendecidnos con paz, malajim de la paz, malajim supremos, del Rey de reyes, el Santo, bendito sea.`,
        nota: `Repetir 3 veces`,
      },
      {
        hebreo: `בְּשִׁבְתְּכֶם לְשָׁלוֹם מַלְאֲכֵי הַשָּׁלוֹם, מַלְאֲכֵי עֶלְיוֹן, מֶלֶךְ מַלְכֵי הַמְּלָכִים, הַקָּדוֹשׁ בָּרוּךְ הוּא.`,
        fonetica: `Beshivtjém leshalóm malajéi hashalóm, malajéi elyón, Mélej maljéi hamelajím, hakadosh baruj Hu.`,
        espanol: `Al residir con nosotros en paz, malajim de la paz, malajim supremos, del Rey de reyes, el Santo, bendito sea.`,
        nota: `Repetir 3 veces`,
      },
      {
        hebreo: `בְּצֵאתְכֶם לְשָׁלוֹם מַלְאֲכֵי הַשָּׁלוֹם, מַלְאֲכֵי עֶלְיוֹן, מֶלֶךְ מַלְכֵי הַמְּלָכִים, הַקָּדוֹשׁ בָּרוּךְ הוּא.`,
        fonetica: `Betzetjém leshalóm malajéi hashalóm, malajéi elyón, Mélej maljéi hamelajím, hakadosh baruj Hu.`,
        espanol: `Partid en paz, malajim de la paz, malajim supremos, del Rey de reyes, el Santo, bendito sea.`,
        nota: `Repetir 3 veces`,
      },
      {
        hebreo: `כִּי מַלְאָכָיו יְצַוֶּה לָךְ, לִשְׁמָרְךָ בְּכָל דְּרָכֶיךָ. יְהוָה יִשְׁמָר צֵאתְךָ וּבוֹאֶךָ, מֵעַתָּה וְעַד עוֹלָם.`,
        fonetica: `Ki malajáv yetzavé laj, lishmorjá bejol derajéja. Adonay yishmár tzetjá uvoejá, meatá vead olam.`,
        espanol: `Porque Él ordenará a Sus malajim que te cuiden en todos tus caminos. Adonay guardará tu salida y tu llegada, desde ahora y para siempre.`,
      },
    ],
  },
  {
    id: `eshet-jajil`,
    titulo: `Éshet Jáil`,
    subtitulo: `Mujer de Valor — Mishlé 31:10-31`,
    bloques: [
      {
        hebreo: `אֵשֶׁת חַיִל מִי יִמְצָא, וְרָחֹק מִפְּנִינִים מִכְרָהּ.`,
        fonetica: `Éshet jáil mi yimtsá, verajók mifniním mírjá.`,
        espanol: `Una mujer de valor, ¿quién la hallará? Su valor supera al de las perlas.`,
        nota: `El esposo le dedica el poema a su esposa (toma su mano mientras lo lee)`,
      },
      {
        hebreo: `בָּטַח בָּהּ לֵב בַּעְלָהּ, וְשָׁלָל לֹא יֶחְסָר.`,
        fonetica: `Bátaj bah lev ba'alá, veshalál ló jejásar.`,
        espanol: `En ella confía el corazón de su esposo, y no carecerá de ganancia.`,
      },
      {
        hebreo: `גְּמָלַתְהוּ טוֹב וְלֹא רָע, כֹּל יְמֵי חַיֶּיהָ.`,
        fonetica: `Gemalathú tov veló ra, kol yeméi jajéjá.`,
        espanol: `Le da bien y no mal todos los días de su vida.`,
      },
      {
        hebreo: `דָּרְשָׁה צֶמֶר וּפִשְׁתִּים, וַתַּעַשׂ בְּחֵפֶץ כַּפֶּיהָ.`,
        fonetica: `Darshá tzemer ufishtím, vata'as bejéfetz kapejá.`,
        espanol: `Busca lana y lino, y trabaja con manos diligentes.`,
      },
      {
        hebreo: `הָיְתָה כָּאֳנִיּוֹת סוֹחֵר, מִמֶּרְחָק תָּבִיא לַחְמָהּ.`,
        fonetica: `Haitá kaonijót sojér, mimerják taví lajmá.`,
        espanol: `Es como los barcos mercantes: desde lejos trae su sustento.`,
      },
      {
        hebreo: `וַתָּקָם בְּעוֹד לַיְלָה, וַתִּתֵּן טֶרֶף לְבֵיתָהּ, וְחֹק לְנַעֲרוֹתֶיהָ.`,
        fonetica: `Vatakám be'od lailá, vatitén térej levétá, vejók lena'arotéjá.`,
        espanol: `Se levanta aún de noche, y da alimento a su casa y porción a sus criadas.`,
      },
      {
        hebreo: `זָּמְמָה שָׂדֶה וַתִּקָּחֵהוּ, מִפְּרִי כַפֶּיהָ נָטְעָה כָּרֶם.`,
        fonetica: `Zamá sádé vatikajéhu, mifrjí kapejá nata'á kerém.`,
        espanol: `Piensa en un campo y lo adquiere; con el fruto de sus manos planta una viña.`,
      },
      {
        hebreo: `חָֽגְרָה בְעוֹז מָתְנֶיהָ, וַתְּאַמֵּץ זְרוֹעוֹתֶיהָ.`,
        fonetica: `Jagrá be'oz motnéja, vet'amétz zro'otéja.`,
        espanol: `Ciñe con fuerza sus lomos y fortalece sus brazos.`,
      },
      {
        hebreo: `טָֽעֲמָה כִּי טוֹב סַחְרָהּ, לֹא יִכְבֶּה בַלַּיְלָה נֵרָהּ.`,
        fonetica: `Ta'amá ki tov sajrajá, ló yijbéh balailá nerá.`,
        espanol: `Percibe que su comercio es bueno; su lámpara no se apaga de noche.`,
      },
      {
        hebreo: `יָֽדֶיהָ שִׁלְּחָה בַכִּישׁוֹר, וְכַפּוֹתֶיהָ תָּמְכוּ פֶלֶךְ.`,
        fonetica: `Yadéjá shiljá vakishór, vekafotéjá tamjú félej.`,
        espanol: `Extiende sus manos al huso, y sus palmas sostienen la rueca.`,
      },
      {
        hebreo: `כַּפָּהּ פָּרְשָׂה לֶעָנִי, וְיָדֶיהָ שִׁלְּחָה לָאֶבְיוֹן.`,
        fonetica: `Kapáh parsá le'aní, vejadéjá shiljá la'evyón.`,
        espanol: `Abre su palma al pobre, y extiende sus manos al necesitado.`,
      },
      {
        hebreo: `לֹא תִירָא לְבֵיתָהּ מִשֶּׁלֶג, כִּי כָל בֵּיתָהּ לָבוּשׁ שָׁנִים.`,
        fonetica: `Ló tirá levétá misheleg, ki kol betáh lavúsh shanim.`,
        espanol: `No teme por su casa cuando nieva, porque todos en su casa están vestidos de escarlata.`,
      },
      {
        hebreo: `מַרְבַדִּים עָשְׂתָה לָהּ, שֵׁשׁ וְאַרְגָּמָן לְבוּשָׁהּ.`,
        fonetica: `Marvadím asátá lah, shésh veargamán levushá.`,
        espanol: `Ella se hace tapices; lino fino y púrpura son sus vestidos.`,
      },
      {
        hebreo: `נוֹדָע בַשְׁעָרִים בַּעְלָהּ, בְּשִׁבְתּוֹ עִם זִקְנֵי אָרֶץ.`,
        fonetica: `Nodá bash'arím ba'alá, beshivtó im zikné aretz.`,
        espanol: `Su esposo es conocido en las puertas, cuando se sienta con los ancianos de la tierra.`,
      },
      {
        hebreo: `סָדִין עָשְׂתָה וַתִּמְכֹּר, וַחֲגוֹר נָתְנָה לַכְּנַעֲנִי.`,
        fonetica: `Sadín asátá vatimkór, vajagór natná lakna'aní.`,
        espanol: `Hace telas y las vende, y entrega cinturones al mercader.`,
      },
      {
        hebreo: `עֹז וְהָדָר לְבוּשָׁהּ, וַתִּשְׂחַק לְיוֹם אַחֲרוֹן.`,
        fonetica: `Oz vehadár levushá, vatísjaj lejom ajarón.`,
        espanol: `Fuerza y esplendor son su vestidura, y sonríe al día venidero.`,
      },
      {
        hebreo: `פִּיהָ פָּתְחָה בְחָכְמָה, וְתוֹרַת חֶסֶד עַל לְשׁוֹנָהּ.`,
        fonetica: `Pijá patjá bejojmá, vetórat jésed al leshoná.`,
        espanol: `Abre su boca con sabiduría, y la enseñanza de la bondad está en su lengua.`,
      },
      {
        hebreo: `צוֹפִיָּה הֲלִיכוֹת בֵּיתָהּ, וְלֶחֶם עַצְלוּת לֹא תֹאכֵל.`,
        fonetica: `Tzofijá halijót betá, velejem atzlút ló tojél.`,
        espanol: `Vigila los caminos de su casa, y no come el pan de la ociosidad.`,
      },
      {
        hebreo: `קָמוּ בָנֶיהָ וַיְאַשְּׁרוּהָ, בַּעְלָהּ וַיְהַלְלָהּ.`,
        fonetica: `Kamú banéja vaye'ashrúhá, ba'alá vayehalálá.`,
        espanol: `Se levantan sus hijos y la felicitan; su esposo también la alaba.`,
      },
      {
        hebreo: `רַבּוֹת בָּנוֹת עָשׂוּ חָיִל, וְאַתְּ עָלִית עַל כֻּלָּנָה.`,
        fonetica: `Rabót banót asú jáil, veat alít al kuláná.`,
        espanol: `"Muchas mujeres han hecho el bien, pero tú las superas a todas."`,
      },
      {
        hebreo: `שֶׁקֶר חֵן וְהֶבֶל יֹפִי, אִשָּׁה יִרְאַת יְהוָה הִיא תִתְהַלָּל.`,
        fonetica: `Sheker jen vehevel jofí, ishá yirát Adonay hi tithalál.`,
        espanol: `Engañosa es la gracia y vana la belleza; la mujer que teme a Adonay, ella será alabada.`,
      },
      {
        hebreo: `תְּנוּ לָהּ מִפְּרִי יָדֶיהָ, וִיהַלְלוּהָ בַשְׁעָרִים מַעֲשֶׂיהָ.`,
        fonetica: `Ténú lah mifrjí jadéjá, vihaljúhá bash'arím maaséjá.`,
        espanol: `Dadle del fruto de sus manos, y que sus obras la alaben en las puertas.`,
      },
    ],
  },
  {
    id: `kidush`,
    titulo: `Kidush Leil Shabat`,
    subtitulo: `Santificación de la noche de Shabat`,
    bloques: [
      {
        hebreo: `יוֹם הַשִּׁשִּׁי. וַיְכֻלּוּ הַשָּׁמַיִם וְהָאָרֶץ וְכָל צְבָאָם. וַיְכַל אֱלֹהִים בַּיּוֹם הַשְּׁבִיעִי מְלַאכְתּוֹ אֲשֶׁר עָשָׂה, וַיִּשְׁבֹּת בַּיּוֹם הַשְּׁבִיעִי מִכָּל מְלַאכְתּוֹ אֲשֶׁר עָשָׂה. וַיְבָרֶךְ אֱלֹהִים אֶת יוֹם הַשְּׁבִיעִי וַיְקַדֵּשׁ אֹתוֹ, כִּי בוֹ שָׁבַת מִכָּל מְלַאכְתּוֹ אֲשֶׁר בָּרָא אֱלֹהִים לַעֲשׂוֹת.`,
        fonetica: `Yom hashishí. Vayejulú hashamáyim vehaáretz vejol tsevaaám. Vayejál Elohím bayóm hashivíí melajtó asher asá, vayishbót bayóm hashivíí mikól melajtó asher asá. Vayevárej Elohím et yóm hashivíí vayekadésh otó, ki vó shavát mikól melajtó asher bará Elohím laasót.`,
        espanol: `El sexto día. Fueron concluidos el cielo y la tierra y todo su ejército. Y terminó Elohím en el séptimo día Su obra que había hecho, cesó en el séptimo día de toda Su obra que había hecho. Y bendijo Elohím el séptimo día y lo santificó, porque en él cesó de toda Su obra que Elohím había creado para hacer.`,
        nota: `La persona que lo va a recitar debe tener una copa de vino en la mano`,
      },
      {
        hebreo: `וַיֹּאמֶר הַמְקַדֵּשׁ: סַבְרֵי מָרָנָן (וְעוֹנִים: לְחַיִּים!)`,
        fonetica: `Vayómer hamekadésh: Savré maranán (veoním: Lejáyim!)`,
        espanol: `Y dice el que santifica: Atención, señores. (Y los presentes responden: ¡Por la vida!)`,
      },
      {
        hebreo: `בָּרוּךְ אַתָּה יְהוָה אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, בּוֹרֵא פְּרִי הַגָּפֶן.`,
        fonetica: `Baruj Atá Adonay Elohénu Mélej haolám, boré perí hagafén.`,
        espanol: `Bendito eres Tú, Adonay, nuestro Dios, Rey del universo, que crea el fruto de la vid.`,
      },
      {
        hebreo: `בָּרוּךְ אַתָּה יְהוָה אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְרָצָה בָנוּ, וְשַׁבָּת קָדְשׁוֹ בְּאַהֲבָה וּבְרָצוֹן הִנְחִילָנוּ, זִכָּרוֹן לְמַעֲשֵׂה בְרֵאשִׁית, תְּחִלָּה לְמִקְרָאֵי קֹדֶשׁ, זֵכֶר לִיצִיאַת מִצְרָיִם. וְשַׁבָּת קָדְשְׁךָ בְּאַהֲבָה וּבְרָצוֹן הִנְחַלְתָּנוּ. בָּרוּךְ אַתָּה יְהוָה, מְקַדֵּשׁ הַשַּׁבָּת.`,
        fonetica: `Baruj Atá Adonay Elohénu Mélej haolám, asher kideshánú bemitzvotáv, veratzá vanú, veShabat kadsó beahavá uveratzón hinjilánú, zikarón lemaasé bereshít, tejilá lemikraéi kodesh, zéjer litziat Mitzráyim. VeShabat kadshejá beahavá uveratzón hinjaltánú. Baruj Atá Adonay, mekadésh hashShabat.`,
        espanol: `Bendito eres Tú, Adonay, nuestro Dios, Rey del universo, que nos santificó con Sus mandamientos, y se complació en nosotros, y nos dio Su Shabat sagrado con amor y voluntad, como recuerdo de la obra de la creación, principio de los días sagrados, recuerdo de la salida de Egipto. Y Tu Shabat sagrado, con amor y voluntad, nos lo heredaste. Bendito eres Tú, Adonay, que santificas el Shabat.`,
      },
    ],
  },
  {
    id: `birkat-habanim`,
    titulo: `Birkat haBanim`,
    subtitulo: `Bendición de los hijos`,
    bloques: [
      {
        hebreo: `יְשִׂימְךָ אֱלֹהִים כְּאֶפְרַיִם וְכִמְנַשֶּׁה.`,
        fonetica: `Yesimjá Elohím keEfráyim vejhiMenashé.`,
        espanol: `Que Elohím te haga como Efraím y como Menashé.`,
        nota: `Para el niño. Tradicionalmente, se colocan las manos sobre los niños al pronunciar la bendición.`,
      },
      {
        hebreo: `יְבָרֶכְךָ יְהוָה וְיִשְׁמְרֶךָ. יָאֵר יְהוָה פָּנָיו אֵלֶיךָ וִיחֻנֶּךָּ. יִשָּׂא יְהוָה פָּנָיו אֵלֶיךָ וְיָשֵׂם לְךָ שָׁלוֹם. וְשָׂמוּ אֶת שְׁמִי עַל בְּנֵי יִשְׂרָאֵל, וַאֲנִי אֲבָרְכֵם.`,
        fonetica: `Yevarejéjá Adonay veyishmeréjá. Yaér Adonay panáv eléjá vijejunéjá. Yisá Adonay panáv eléjá veyasém lejá shalóm. Vesamú et shemí al benéi Yisrael, vaaní avarkhém.`,
        espanol: `Que Adonay te bendiga y te proteja. Que Adonay ilumine Su rostro hacia ti y te conceda gracia. Que Adonay eleve Su rostro hacia ti y te otorgue paz. Y pondrán Mi Nombre sobre los hijos de Israel, y Yo los bendeciré.`,
      },
      {
        hebreo: `יְשִׂימֵךְ אֱלֹהִים כְּשָׂרָה, רִבְקָה, רָחֵל וְלֵאָה.`,
        fonetica: `Yesiméj Elohím keSará, Rivká, Rajél veLeá.`,
        espanol: `Que Elohím te haga como Sará, Rivká, Rajél y Leá.`,
        nota: `Para la niña`,
      },
      {
        hebreo: `יְבָרֶכְךָ יְהוָה וְיִשְׁמְרֶךָ. יָאֵר יְהוָה פָּנָיו אֵלֶיךָ וִיחֻנֶּךָּ. יִשָּׂא יְהוָה פָּנָיו אֵלֶיךָ וְיָשֵׂם לְךָ שָׁלוֹם. וְשָׂמוּ אֶת שְׁמִי עַל בְּנֵי יִשְׂרָאֵל, וַאֲנִי אֲבָרְכֵם.`,
        fonetica: `Yevarejéjá Adonay veyishmeréjá. Yaér Adonay panáv eléjá vijejunéjá. Yisá Adonay panáv eléjá veyasém lejá shalóm. Vesamú et shemí al benéi Yisrael, vaaní avarkhém.`,
        espanol: `Que Adonay te bendiga y te proteja. Que Adonay ilumine Su rostro hacia ti y te conceda gracia. Que Adonay eleve Su rostro hacia ti y te otorgue paz. Y pondrán Mi Nombre sobre los hijos de Israel, y Yo los bendeciré.`,
      },
    ],
  },
  {
    id: `netilat-yadayim`,
    titulo: `Netilat Yadayim uHamotzi`,
    subtitulo: `Lavado de manos y bendición del pan`,
    bloques: [
      {
        hebreo: `בָּרוּךְ אַתָּה יְהוָה אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו, וְצִוָּנוּ עַל נְטִילַת יָדַיִם.`,
        fonetica: `Baruj Atá Adonay Elohénu Mélej haolám, asher kideshánú bemitzvotáv, vetzi vanú al netilát yadáyim.`,
        espanol: `Bendito eres Tú, Adonay, nuestro Dios, Rey del universo, que nos santificó con Sus mandamientos y nos ordenó sobre el lavado de las manos.`,
      },
      {
        hebreo: `עֵינֵי כֹל אֵלֶיךָ יְשַׂבֵּרוּ, וְאַתָּה נוֹתֵן לָהֶם אֶת אָכְלָם בְּעִתּוֹ. פּוֹתֵחַ אֶת יָדֶךָ, וּמַשְׂבִּיעַ לְכָל חַי רָצוֹן.`,
        fonetica: `Einéi kol eléjá yesaberú, veAtá notén lahem et ajlam beitó. Potéaj et yadéjá, umasbiá lejol jai ratzón.`,
        espanol: `Los ojos de todos esperan hacia Ti, y Tú les das su alimento a su tiempo. Abres Tu mano, y satisfaces con voluntad a todo ser viviente.`,
      },
      {
        hebreo: `בָּרוּךְ אַתָּה יְהוָה אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, הַמּוֹצִיא לֶחֶם מִן הָאָרֶץ.`,
        fonetica: `Baruj Atá Adonay Elohénu Mélej haolám, hamotsí lejém min haáretz.`,
        espanol: `Bendito eres Tú, Adonay, nuestro Dios, Rey del universo, que saca el pan de la tierra.`,
        nota: `Tomará dos panes completos con ambas manos, y recitará la bendición de "Hamotzi". Se procede a cenar.`,
      },
    ],
  },
  {
    id: `birkat-hamazon`,
    titulo: `Birkat haMazon`,
    subtitulo: `Bendición después de la comida`,
    bloques: [
      {
        hebreo: `בָּרוּךְ אַתָּה יְהוָה אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, הָאֵל הַזָּן אוֹתָנוּ וְאֶת הָעוֹלָם כֻּלּוֹ בְּטוּבוֹ, בְּחֵן בְּחֶסֶד בְּרַחֲמִים רַבִּים, נוֹתֵן לֶחֶם לְכָל בָּשָׂר. כִּי לְעוֹלָם חַסְדּוֹ. וּבְטוּבוֹ הַגָּדוֹל, תָּמִיד לֹא חָסַר לָנוּ, וְאַל יֶחְסַר לָנוּ מָזוֹן תָּמִיד לְעוֹלָם וָעֶד. כִּי הוּא אֵל זָן וּמְפַרְנֵס לַכֹּל, וְשֻׁלְחָנוֹ עָרוּךְ לַכֹּל, וְהִתְקִין מִחְיָה וּמָזוֹן לְכָל בְּרִיּוֹתָיו אֲשֶׁר בָּרָא בְּרַחֲמָיו וּבְרֹב חֲסָדָיו, כָּאָמוּר: פּוֹתֵחַ אֶת יָדֶךָ, וּמַשְׂבִּיעַ לְכָל חַי רָצוֹן. בָּרוּךְ אַתָּה יְהוָה, הַזָּן אֶת הַכֹּל.`,
        fonetica: `Baruj Atá Adonay Elohénu Mélej haolám, haEl hazán otánú veet haolám kuló betuvó, bejen bejesed berajamím rabím, notén lejém lejol basár. Ki leolám jasdó. Uvetuvó hagadól, tamíd ló jasar lanú, veal jejásar lanú mazón tamíd leolám vaed. Ki Hu El zán umefarnés lakól, veshuljanó arúj lakól, vehitkin mihjá umazón lejol berijotáv asher bará berajamáv uverov jasadav, kaamúr: Potéaj et yadéjá, umasbiá lejol jai ratzón. Baruj Atá Adonay, hazán et hakól.`,
        espanol: `Bendito eres Tú, Adonay, nuestro Elohím, Rey del universo, el Elohím que sustenta a nosotros y a todo el mundo con Su bondad, con gracia, con misericordia, con abundancia y con grandes compasiones. Él da pan a toda criatura, porque Su bondad es eterna. Y por Su gran bondad, nunca nos ha faltado alimento, y que nunca nos falte sustento, eternamente. Porque Él es el Elohím que sustenta y provee a todos, Su mesa está preparada para todos, y ha dispuesto vida y alimento para todas Sus criaturas que creó con Su misericordia y con Su abundante bondad, como está dicho: "Abres Tu mano y satisfaces con voluntad a todo ser viviente." Bendito eres Tú, Adonay, que sustentas a todos.`,
      },
      {
        hebreo: `נוֹדֶה לְךָ יְהוָה אֱלֹהֵינוּ, עַל שֶׁהִנְחַלְתָּ לַאֲבוֹתֵינוּ אֶרֶץ חֶמְדָּה טוֹבָה וּרְחָבָה, בְּרִית וְתוֹרָה, חַיִּים וּמָזוֹן. עַל שֶׁהוֹצֵאתָנוּ מֵאֶרֶץ מִצְרַיִם, וּפְדִיתָנוּ מִבֵּית עֲבָדִים. וְעַל בְּרִיתְךָ שֶׁחָתַמְתָּ בִּבְשָׂרֵנוּ. וְעַל תּוֹרָתְךָ שֶׁלִּמַּדְתָּנוּ. וְעַל חֻקֵּי רְצוֹנְךָ שֶׁהוֹדַעְתָּנוּ. וְעַל חַיִּים וּמָזוֹן שֶׁאַתָּה זָן וּמְפַרְנֵס אוֹתָנוּ.`,
        fonetica: `Nodé lejá Adonay Elohénu, al shehinjaltá laavoténu eretz jemdá tová urejavá, berít vetorá, jayím umazón. Al shehotsestánú meéretz Mitzráyim, ufedítánú mibét avadím. Veal berítejá shejatamtá bivsarénu. Veal toratejá shelimadtánú. Veal jukéi ratzonejá shehodatánú. Veal jayím umazón sheAtá zán umefarnés otánú.`,
        espanol: `Te agradecemos, Adonay nuestro Elohím, por haber legado a nuestros padres una tierra deseada, buena y espaciosa, pacto y Torá, vida y alimento. Por habernos sacado de la tierra de Egipto y redimido de la casa de esclavitud. Por Tu pacto que sellaste en nuestra carne. Por Tu Torá que nos enseñaste. Por las leyes de Tu voluntad que nos diste a conocer. Y por la vida y el alimento con los que Tú nos sustentas y provees.`,
      },
      {
        hebreo: `הָרַחֲמָן הוּא יְבָרֵךְ אֶת בַּעַל הַבַּיִת הַזֶּה, וְאֶת בֵּיתוֹ, וְאֶת זַרְעוֹ, וְאֶת כָּל אֲשֶׁר לוֹ. הָרַחֲמָן הוּא יִשְׁלַח בְּרָכָה רְבָה בַּבַּיִת הַזֶּה וְעַל שֻׁלְחָן זֶה שֶׁאָכַלְנוּ עָלָיו. הָרַחֲמָן הוּא יְבָרְכֵנוּ, וִיכוֹנֵן אֶת יְרוּשָׁלַיִם עִיר הַקֹּדֶשׁ בִּמְהֵרָה בְיָמֵינוּ. אָמֵן.`,
        fonetica: `Hara jamán Hu yevarej et baal habáit hazé, veet beitó, veet zaro, veet kol asher lo. Hara jamán Hu yishlaj berajá revá babáit hazé veal shulján zé sheajalnú aláv. Hara jamán Hu yevarkhénú, vikhonén et Yerushaláyim ir hakódesh bimeherá veyaménu. Amen.`,
        espanol: `El Misericordioso bendecirá al dueño de esta casa, y a su casa, y a su descendencia, y a todo lo que es suyo. El Misericordioso enviará abundante bendición a esta casa y sobre esta mesa en que hemos comido. El Misericordioso nos bendecirá, y establecerá a Yerushalayim, ciudad santa, pronto en nuestros días. Amén.`,
      },
    ],
  },
]
