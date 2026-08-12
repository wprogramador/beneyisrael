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

export const seccionesRoshJodesh: SeccionSiddur[] = [
  {
    id: `apertura`,
    titulo: `Apertura`,
    subtitulo: `Bienvenida al Mes Nuevo`,
    bloques: [
      {
        hebreo: ``,
        fonetica: ``,
        espanol: `Bendito sea el Santo, bendito sea. Damos la bienvenida a este nuevo mes, tiempo de renovación y esperanza. Como está escrito: "Este mes será para ustedes el principio de los meses; será el primero de los meses del año" (Éxodo 12:2).`,
        nota: `Líder: En esta noche, al contemplar la luna nueva, recordamos que así como ella se renueva, también nosotros tenemos la oportunidad de renovar nuestro espíritu. Que este Rosh Jodesh sea para nosotros un momento de reflexión, de comunidad y de cercanía con el Creador.`,
      },
    ],
  },
  {
    id: `yaaleh-veyavo`,
    titulo: `Yaaleh Veyavo`,
    subtitulo: `Inserción en la Amidá de Maariv`,
    bloques: [
      {
        hebreo: ``,
        fonetica: ``,
        espanol: `En la noche de Rosh Jodesh se reza Maariv de forma habitual, con la adición de Yaaleh Veyavo en la bendición de Retzé de la Amidá.`,
        nota: `Se recita la Amidá completa en silencio y luego se repite en voz alta por el líder. Si Rosh Jodesh coincide con Shabat, Yaaleh Veyavo se añade también en Retzé de la Amidá de Maariv, Shajarit y Minjá, así como en el Birkat Hamazón.`,
      },
      {
        hebreo: `יַעֲלֶה וְיָבוֹא וְיַגִּיעַ וְיֵרָאֶה וְיֵרָצֶה וְיִשָּׁמַע וְיִפָּקֵד וְיִזָּכֵר זִכְרוֹנֵנוּ וּפִקְדוֹנֵנוּ וְזִכְרוֹן אֲבוֹתֵינוּ וְזִכְרוֹן מָשִׁיחַ בֶּן דָּוִד עַבְדֶּךָ וְזִכְרוֹן יְרוּשָׁלַיִם עִיר קָדְשֶׁךָ וְזִכְרוֹן כָּל עַמְּךָ בֵּית יִשְׂרָאֵל לְפָנֶיךָ לִפְלֵטָה לְטוֹבָה לְחֵן וּלְחֶסֶד וּלְרַחֲמִים לְחַיִּים טוֹבִים וּלְשָׁלוֹם בְּיוֹם רֹאשׁ הַחֹדֶשׁ הַזֶּה. זָכְרֵנוּ יְיָ אֱלֹהֵינוּ בּוֹ לְטוֹבָה, וּפָקְדֵנוּ בוֹ לִבְרָכָה, וְהוֹשִׁיעֵנוּ בוֹ לְחַיִּים. בִּדְבַר יְשׁוּעָה וְרַחֲמִים, חוּס וְחָנֵּנוּ, וְרַחֵם עָלֵינוּ וְהוֹשִׁיעֵנוּ, כִּי אֵלֶיךָ עֵינֵינוּ, כִּי אֵל מֶלֶךְ חַנּוּן וְרַחוּם אָתָּה.`,
        fonetica: `Ya'alé veyavó, veyagi'a veyera'é veyeratzé veyishamá veyipakéd veyizajér zijronénu ufikdonénu, vezijrón avoténu, vezijrón Mashíaj ben David avdéja, vezijrón Yerushaláyim ir kodshéja, vezijrón kol amjá beit Israel lefaneja lifletá letová lején ulejésed ulerajamím lejayím tovím uleshalóm beyóm Rosh HaJódesh hazé. Zajrénu Adonai Elohénu bo letová, ufkedénu bo livrajá, vehoshí'énu bo lejayím. Bidevár yeshuá verajamím, jus vejanénu, verajém alénu vehoshí'énu, ki eléja einénu, ki El Mélej Janún verajúm atá.`,
        espanol: `Que ascienda, venga, llegue, sea visto, sea aceptado, sea oído, sea recordado y sea mencionado nuestro recuerdo, nuestra consideración, el recuerdo de nuestros antepasados, el recuerdo del Mesías, hijo de David, tu siervo, el recuerdo de Jerusalén, tu sagrada ciudad, y el recuerdo de todo tu pueblo, la casa de Israel, ante ti, para liberación, para bien, para gracia, para amor y para compasión, para buena vida y para paz, en este día de Rosh Jodesh. Recuérdanos, Adonai nuestro Dios, en él para bien, y visítanos en él para bendición, y sálvanos en él para vida. Con palabra de salvación y compasión, apiádate y ten piedad de nosotros, y ten compasión de nosotros y sálvanos, porque a ti dirigimos nuestros ojos, porque tú eres el Dios Rey, clemente y compasivo.`,
      },
    ],
  },
  {
    id: `birkat-halevana`,
    titulo: `Birkat Halevaná`,
    subtitulo: `Bendición de la Luna Nueva`,
    bloques: [
      {
        hebreo: ``,
        fonetica: ``,
        espanol: `Si el cielo está despejado y se puede ver la luna nueva desde la sinagoga o el lugar de reunión, es costumbre recitar esta bendición en grupo después de Maariv, durante los primeros días del mes.`,
        nota: `Líder: Se recita en pie, mirando la luna nueva.`,
      },
      {
        hebreo: `בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר בִּמְאֹמָרוֹ בָּרָא שְׁחָקִים, וּבְרוּחַ פִּיו כָּל צְבָאָם. חֹק וּזְמַן נָתַן לָהֶם, שֶׁלֹּא יְשַׁנּוּ אֶת תַּפְקִידָם. שָׂשִׂים וּשְׂמֵחִים לַעֲשׂוֹת רְצוֹן קוֹנָם, פֹּעֵל אֱמֶת שֶׁפְּעֻלָּתוֹ אֱמֶת. וְלַלְּבָנָה אָמַר שֶׁתִּתְחַדֵּשׁ, עֲטֶרֶת תִּפְאֶרֶת לַעֲמוּסֵי בָטֶן, שֶׁהֵם עֲתִידִים לְהִתְחַדֵּשׁ כְּמוֹתָהּ, וּלְפָאֵר לְיוֹצְרָם עַל שֵׁם כְּבוֹד מַלְכוּתוֹ. בָּרוּךְ אַתָּה יְיָ, מְחַדֵּשׁ חֳדָשִׁים.`,
        fonetica: `Barúj atá Adonai Elohénu mélej ha'olám, ashér bema'amaró bará shejakím, uverúaj pív kol tzeva'ám. Jok uzmán natán lahem, shelo yeshanú et tafkidám. Sasím usmejím laasót retzón konám, po'él emet shepeulató emet. Ve'lalevaná amár shetitjadesh, atéret tiferet la'amuséi váten, shehem atidím lehitjadésh kemotáh, ulefa'er leyotzrám al shém kevod maljutó. Barúj atá Adonai, mejadésh jodashím.`,
        espanol: `Bendito eres Tú, Adonai nuestro Dios, Rey del universo, que con su palabra creó los cielos, y con el aliento de su boca a todos sus ejércitos. Les dio una ley y un tiempo, para que no alteren su función. Se alegran y se regocijan al hacer la voluntad de su Creador, el Dios de verdad, cuya obra es verdad. Y a la luna le dijo que se renueve, como corona de esplendor para los que son llevados en el vientre (Israel), que están destinados a renovarse como ella, y para glorificar a su Creador por el honor de su reino. Bendito eres Tú, Adonai, que renueva los meses.`,
      },
      {
        hebreo: `שָׁלוֹם עֲלֵיכֶם`,
        fonetica: `Shalóm aleijem`,
        espanol: `Paz sobre ustedes.`,
        nota: `Se saluda a tres personas diferentes, o se dice tres veces girando hacia distintas direcciones.`,
      },
      {
        hebreo: `סִימָן טוֹב וּמַזָּל טוֹב יְהֵא לָנוּ וּלְכָל יִשְׂרָאֵל.`,
        fonetica: `Simán tov umazál tov yehé lanu ulejol Israel.`,
        espanol: `Buen augurio y buena suerte tengamos nosotros y todo Israel.`,
      },
    ],
  },
  {
    id: `bendicion-vino`,
    titulo: `Bendición sobre el Vino`,
    subtitulo: `Inicio de la Seudá de Rosh Jodesh`,
    bloques: [
      {
        hebreo: ``,
        fonetica: ``,
        espanol: `Tradicionalmente, la noche de Rosh Jodesh se celebra con una comida festiva (seudah). Se puede hacer una bendición sobre el vino (y sobre el pan, si se va a comer) para santificar el momento.`,
        nota: `Líder: Primero se lavan las manos.`,
      },
      {
        hebreo: `בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו, וְצִוָּנוּ עַל נְטִילַת יָדַיִם.`,
        fonetica: `Barúj atá Adonai Elohénu mélej ha'olám, ashér kidshánu bemitzvotáv, vetzivánu al netilat iadájim.`,
        espanol: `Bendito eres Tú, Adonai nuestro Dios, Rey del universo, que nos santificaste con sus mandamientos y nos ordenó el lavado de las manos.`,
      },
      {
        hebreo: `בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, בּוֹרֵא פְּרִי הַגָּפֶן.`,
        fonetica: `Barúj atá Adonai Elohénu mélej ha'olám, boré pri hagafén.`,
        espanol: `Bendito eres Tú, Adonai nuestro Dios, Rey del universo, Creador del fruto de la vid.`,
        nota: `Tras lavar las manos, se bendice el vino.`,
      },
      {
        hebreo: `בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, הַמּוֹצִיא לֶחֶם מִן הָאָרֶץ.`,
        fonetica: `Barúj atá Adonai Elohénu mélej ha'olám, hamotzí lejem min ha'áretz.`,
        espanol: `Bendito eres Tú, Adonai nuestro Dios, Rey del universo, que sacas pan de la tierra.`,
        nota: `Si se bendice el pan.`,
      },
    ],
  },
  {
    id: `reflexion`,
    titulo: `Reflexión y Plegaria Comunitaria`,
    subtitulo: `Espacio para enseñanza y oración`,
    bloques: [
      {
        hebreo: ``,
        fonetica: ``,
        espanol: `Este es un espacio para incorporar una enseñanza, una reflexión sobre el nuevo mes, o una plegaria especial por la comunidad y el mundo. En la tradición, Rosh Jodesh es un momento propicio para la oración personal y comunitaria, especialmente en reuniones organizadas por mujeres.`,
        nota: `Sugerencia de Plegaria:`,
      },
      {
        hebreo: ``,
        fonetica: ``,
        espanol: `Que sea tu voluntad, Adonai nuestro Dios y Dios de nuestros antepasados, que nos concedas un mes de bendición, de alegría y de paz. Que este nuevo mes sea para nosotros un tiempo de renovación espiritual, de crecimiento y de cercanía a ti. Bendice a nuestra comunidad, a la casa de Israel y al mundo entero con tu luz y tu misericordia. Como la luna se renueva cada mes, renueva también nuestros corazones para servirte con alegría.`,
      },
    ],
  },
  {
    id: `conclusion`,
    titulo: `Conclusión`,
    subtitulo: `Cierre del Seder`,
    bloques: [
      {
        hebreo: ``,
        fonetica: ``,
        espanol: `Que este mes nuevo nos traiga paz, salud y crecimiento espiritual. Que merezcamos ver la realización de la promesa: "La luna será avergonzada y el sol confundido, porque Adonai de los ejércitos reinará en el monte de Sion y en Jerusalén" (Isaías 24:23).`,
        nota: `Líder`,
      },
      {
        hebreo: `חֹדֶשׁ טוֹב`,
        fonetica: `Jódesh Tov`,
        espanol: `¡Buen mes!`,
        nota: `Comunidad`,
      },
    ],
  },
  {
    id: `apendice-hallel`,
    titulo: `Apéndice: Hallel`,
    subtitulo: `Salmos de Alabanza — Shajarit de Rosh Jodesh`,
    bloques: [
      {
        hebreo: ``,
        fonetica: ``,
        espanol: `Los siguientes elementos pertenecen al servicio de Shajarit (oración de la mañana) del día de Rosh Jodesh. Se incluyen aquí como referencia para quienes deseen preparar también el servicio matutino.`,
        nota: `En Rosh Jodesh se recita el Hallel parcial, que consiste en los Salmos 113-118, omitiendo ciertas secciones. Se recita después de la Amidá de Shajarit.`,
      },
      {
        hebreo: `בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו, וְצִוָּנוּ לִקְרֹא אֶת הַהַלֵּל.`,
        fonetica: `Barúj atá Adonai Elohénu mélej ha'olám, ashér kidshánu bemitzvotáv, vetzivánu likró et hahalél.`,
        espanol: `Bendito eres Tú, Adonai nuestro Dios, Rey del universo, que nos santificaste con sus mandamientos y nos ordenó recitar el Hallel.`,
        nota: `Bendición inicial del Hallel`,
      },
      {
        hebreo: `הַלְלוּיָהּ הַלְלוּ עַבְדֵי יְיָ הַלְלוּ אֶת שֵׁם יְיָ׃ יְהִי שֵׁם יְיָ מְבֹרָךְ מֵעַתָּה וְעַד עוֹלָם׃ מִמִּזְרַח שֶׁמֶשׁ עַד מְבוֹאוֹ מְהֻלָּל שֵׁם יְיָ׃ רָם עַל כָּל גּוֹיִם יְיָ עַל הַשָּׁמַיִם כְּבוֹדוֹ׃ מִי כַּייָ אֱלֹהֵינוּ הַמַּגְבִּיהִי לָשָׁבֶת׃ הַמַּשְׁפִּילִי לִרְאוֹת בַּשָּׁמַיִם וּבָאָרֶץ׃ מְקִימִי מֵעָפָר דָּל מֵאַשְׁפֹּת יָרִים אֶבְיוֹן׃ לְהוֹשִׁיבִי עִם נְדִיבִים עִם נְדִיבֵי עַמּוֹ׃ מוֹשִׁיבִי עֲקֶרֶת הַבַּיִת אֵם הַבָּנִים שְׂמֵחָה הַלְלוּיָהּ׃`,
        fonetica: `Haleluyah. Halelú avdéi Adonai, halelú et shém Adonai. Yehi shém Adonai mevoráj me'attá ve'ad olám. Mimizráj shémesh ad mevo'ó mehulál shém Adonai. Ram al kol goyim Adonai, al hashamáyim kevodó. Mi keAdonai Elohéinu hamagbihí lashávet. Hamashpíli lir'ot bashamáyim uva'áretz. Mekimí me'afár dal, me'ashpot yarím evyón. Lehoshiví im nedivím, im nedivéi amó. Moshiví akéret habáyit, ém habanim semejá. Haleluyah.`,
        espanol: `¡Aleluya! Alaben, siervos de Adonai, alaben el nombre de Adonai. Sea el nombre de Adonai bendito desde ahora y para siempre. Desde el nacimiento del sol hasta su ocaso, alabado sea el nombre de Adonai. Excelso sobre todas las naciones es Adonai; sobre los cielos, su gloria. ¿Quién como Adonai nuestro Dios, que se sienta en las alturas y se humilla para mirar en el cielo y en la tierra? Él levanta del polvo al pobre, alza al necesitado del muladar, para hacerlos sentar con los príncipes, con los príncipes de su pueblo. A la estéril hace habitar en casa, madre alegre de hijos. ¡Aleluya!`,
        nota: `Salmo 113 (Completo)`,
      },
      {
        hebreo: `בְּצֵאת יִשְׂרָאֵל מִמִּצְרַיִם בֵּית יַעֲקֹב מֵעַם לֹעֵז׃ הָיְתָה יְהוּדָה לְקָדְשׁוֹ יִשְׂרָאֵל מַמְשְׁלוֹתָיו׃ הַיָּם רָאָה וַיָּנֹס הַיַּרְדֵּן יִסֹּב לְאָחוֹר׃ הֶהָרִים רָקְדוּ כְאֵילִים גְּבָעוֹת כִּבְנֵי צֹאן׃ מַה לְּךָ הַיָּם כִּי תָנוּס הַיַּרְדֵּן תִּסֹּב לְאָחוֹר׃ הֶהָרִים תִּרְקְדוּ כְאֵילִים גְּבָעוֹת כִּבְנֵי צֹאן׃ מִלִּפְנֵי אָדוֹן חוּלִי אָרֶץ מִלִּפְנֵי אֱלֹהַּ יַעֲקֹב׃ הַהֹפְכִי הַצּוּר אֲגַם מַיִם חַלָּמִישׁ לְמַעְיְנוֹ מָיִם׃`,
        fonetica: `Betzet Israel miMitzráyim, bet Yaakóv me'am lo'éz. Hayetá Yehudá lekodshó, Israel mamshelotáv. Hayám ra'á vayanós, hayardén yisóv le'ajór. Heharím rakdú ke'eilím, geva'ót kivnéi tzón. Ma lejá hayám ki tanús, hayardén tisóv le'ajór. Heharím tirkdú ke'eilím, geva'ót kivnéi tzón. Milifnéi adón julí áretz, milifnéi elóah Yaakóv. Hahofjí hatzur agám máyim, jalamísh lema'aynó máyim.`,
        espanol: `Cuando Israel salió de Egipto, la casa de Jacob de un pueblo de lengua extraña, Judá fue su santuario, e Israel su dominio. El mar lo vio y huyó; el Jordán retrocedió. Los montes saltaron como carneros, y los collados, como corderos. ¿Qué te pasa, mar, que huyes? ¿Y a ti, Jordán, que retrocedes? ¿Montes, que saltan como carneros; collados, como corderos? Ante la presencia del Señor, tiembla la tierra; ante la presencia del Dios de Jacob, que convierte la roca en estanque de agua, y el pedernal en manantial.`,
        nota: `Salmo 114 (Completo)`,
      },
      {
        hebreo: `יְיָ זְכָרָנוּ יְבָרֵךְ יְבָרֵךְ אֶת בֵּית יִשְׂרָאֵל יְבָרֵךְ אֶת בֵּית אַהֲרֹן׃ יְבָרֵךְ יִרְאֵי יְיָ הַקְּטַנִּים עִם הַגְּדֹלִים׃ יֹסֵף יְיָ עֲלֵיכֶם עֲלֵיכֶם וְעַל בְּנֵיכֶם׃ בְּרוּכִים אַתֶּם לַייָ עֹשֵׂה שָׁמַיִם וָאָרֶץ׃ הַשָּׁמַיִם שָׁמַיִם לַייָ וְהָאָרֶץ נָתַן לִבְנֵי אָדָם׃ לֹא הַמֵּתִים יְהַלְלוּ יָהּ וְלֹא כָּל יֹרְדֵי דוּמָה׃ וַאֲנַחְנוּ נְבָרֵךְ יָהּ מֵעַתָּה וְעַד עוֹלָם הַלְלוּיָהּ׃`,
        fonetica: `Adonai zejaranú yevaráj; yevaráj et beit Israel; yevaráj et beit Aharón. Yevaráj yir'éi Adonai, haktanim im hagedolim. Yoséf Adonai aleijem, aleijem ve'al bneijem. Berujim atem laAdonai, oséh shamáyim va'áretz. Hashamáyim shamáyim laAdonai, veha'áretz natán livnéi adam. Lo hametim yehalelu Yah, velo kol yordéi dumá. Va'anájnu nevaréj Yah, me'attá ve'ad olám. Haleluyah.`,
        espanol: `Adonai se ha acordado de nosotros; bendecirá, bendecirá a la casa de Israel, bendecirá a la casa de Aarón. Bendecirá a los que temen a Adonai, desde los pequeños hasta los grandes. Adonai los aumente más y más, a ustedes y a sus hijos. Benditos sean ustedes por Adonai, que hizo los cielos y la tierra. Los cielos son cielos de Adonai, pero la tierra la ha dado a los hijos del hombre. No alabarán a Yah los muertos, ni todos los que descienden al silencio. Pero nosotros bendeciremos a Yah, desde ahora y para siempre. ¡Aleluya!`,
        nota: `Salmo 115 (Versículos 12-18)`,
      },
      {
        hebreo: `מָה אָשִׁיב לַייָ כָּל תַּגְמוּלוֹהִי עָלָי׃ כּוֹס יְשׁוּעוֹת אֶשָּׂא וּבְשֵׁם יְיָ אֶקְרָא׃ נְדָרַי לַייָ אֲשַׁלֵּם נֶגְדָה נָּא לְכָל עַמּוֹ׃ יָקָר בְּעֵינֵי יְיָ הַמָּוְתָה לַחֲסִידָיו׃ אָנָּה יְיָ כִּי אֲנִי עַבְדֶּךָ אֲנִי עַבְדְּךָ בֶּן אֲמָתֶךָ פִּתַּחְתָּ לְמוֹסֵרָי׃ לְךָ אֶזְבַּח זֶבַח תּוֹדָה וּבְשֵׁם יְיָ אֶקְרָא׃ נְדָרַי לַייָ אֲשַׁלֵּם נֶגְדָה נָּא לְכָל עַמּוֹ׃ בְּחַצְרוֹת בֵּית יְיָ בְּתוֹכֵכִי יְרוּשָׁלָיִם הַלְלוּיָהּ׃`,
        fonetica: `Ma ashív laAdonai, kol tagmulóhi alái. Kos yeshuót esá, uveshém Adonai ekrá. Nedarái laAdonai ashaleim, negdá na lejol amó. Yakár be'enéi Adonai, hamávta lajasidáv. Aná Adonai ki aní avdéja, aní avdéja ben amatéja, pitajtá lemoserái. Lejá ezbáj zévaj todá, uveshém Adonai ekrá. Nedarái laAdonai ashaleim, negdá na lejol amó. Bejatzrot beit Adonai, betojéji Yerushaláyim. Haleluyah.`,
        espanol: `¿Qué pagaré a Adonai por todos sus beneficios para conmigo? Tomaré la copa de la salvación e invocaré el nombre de Adonai. Mis votos a Adonai pagaré, ahora, en presencia de todo su pueblo. Preciosa es a los ojos de Adonai la muerte de sus santos. ¡Oh Adonai! Ciertamente yo soy tu siervo, yo soy tu siervo, hijo de tu sierva; tú rompiste mis cadenas. Te ofreceré sacrificio de alabanza e invocaré el nombre de Adonai. Mis votos a Adonai pagaré, ahora, en presencia de todo su pueblo. En los atrios de la casa de Adonai, en medio de ti, Jerusalén. ¡Aleluya!`,
        nota: `Salmo 116 (Versículos 12-19)`,
      },
      {
        hebreo: `הַלְלוּ אֶת יְיָ כָּל גּוֹיִם שַׁבְּחוּהוּ כָּל הָאֻמִּים׃ כִּי גָבַר עָלֵינוּ חַסְדּוֹ וֶאֱמֶת יְיָ לְעוֹלָם הַלְלוּיָהּ׃`,
        fonetica: `Halelú et Adonai kol goyím, shabjejúhu kol ha'umím. Ki gavár alénu jisdó, ve'emét Adonai le'olám. Haleluyah.`,
        espanol: `Alaben a Adonai, todas las naciones; alábenlo, todos los pueblos. Porque ha sido grande su misericordia sobre nosotros, y la fidelidad de Adonai es para siempre. ¡Aleluya!`,
        nota: `Salmo 117 (Completo)`,
      },
      {
        hebreo: `מִן הַמֵּצַר קָרָאתִי יָּהּ עָנָנִי בַמֶּרְחָב יָהּ׃ יְיָ לִי לֹא אִירָא מַה יַּעֲשֶׂה לִי אָדָם׃ יְיָ לִי בְּעֹזְרָי וַאֲנִי אֶרְאֶה בְשֹׂנְאָי׃ טוֹב לַחֲסוֹת בַּייָ מִבְּטֹחַ בָּאָדָם׃ טוֹב לַחֲסוֹת בַּייָ מִבְּטֹחַ בִּנְדִיבִים׃ כָּל גּוֹיִם סְבָבוּנִי בְּשֵׁם יְיָ כִּי אֲמִילַם׃ סַבּוּנִי גַם סְבָבוּנִי בְּשֵׁם יְיָ כִּי אֲמִילַם׃ סַבּוּנִי כִדְבוֹרִים דֹּעֲכוּ כְּאֵשׁ קוֹצִים בְּשֵׁם יְיָ כִּי אֲמִילַם׃ דַּחֹה דְחִיתַנִי לִנְפֹּל וַייָ עֲזָרָנִי׃ עָזִּי וְזִמְרָת יָהּ וַיְהִי לִי לִישׁוּעָה׃ קוֹל רִנָּה וִישׁוּעָה בְּאָהֳלֵי צַדִּיקִים יְמִין יְיָ עֹשָׂה חָיִל׃ יְמִין יְיָ רוֹמֵמָה יְמִין יְיָ עֹשָׂה חָיִל׃`,
        fonetica: `Min hameitzar karáti Yah, anáni vamerjáv Yah. Adonai li lo irá, ma yaasé li adám. Adonai li be'ozrái, va'aní er'é vesone'ái. Tov lajasót baAdonai, mibtóaj ba'adám. Tov lajasót baAdonai, mibtóaj bindivím. Kol goyim sevavúni, beshém Adonai ki amilám. Sabúni gam sevavúni, beshém Adonai ki amilám. Sabúni kidvorím, do'ajú ke'ésh kotzím, beshém Adonai ki amilám. Dajó dejítani linpól, vaAdonai azaránu. Ozi vezimrát Yah, vayehi li lishu'á. Kol riná vishu'á be'oholéi tzadikím, yemín Adonai osá jayil. Yemín Adonai romemá, yemín Adonai osá jayil.`,
        espanol: `Desde la angustia invoqué a Yah; me respondió poniéndome en un lugar espacioso. Adonai está conmigo, no temeré; ¿qué me hará el hombre? Adonai está conmigo entre los que me ayudan; por tanto, yo veré la derrota de los que me odian. Mejor es refugiarse en Adonai que confiar en el hombre. Mejor es refugiarse en Adonai que confiar en los príncipes. Todas las naciones me rodearon, pero en el nombre de Adonai los destruiré. Me rodearon, sí, me rodearon, pero en el nombre de Adonai los destruiré. Me rodearon como abejas; fueron extinguidos como fuego de espinos; en el nombre de Adonai los destruiré. Me empujaste con violencia para que cayera, pero Adonai me ayudó. Mi fortaleza y mi canción es Yah, y él me ha sido por salvación. Voz de júbilo y de salvación hay en las tiendas de los justos; la diestra de Adonai hace proezas. La diestra de Adonai está en alto; la diestra de Adonai hace proezas.`,
        nota: `Salmo 118 (Versículos 5-21)`,
      },
      {
        hebreo: `יְהַלְלוּךָ יְיָ אֱלֹהֵינוּ כָּל מַעֲשֶׂיךָ, וַחֲסִידֶיךָ צַדִּיקִים עוֹשֵׂי רְצוֹנֶךָ, וְכָל עַמְּךָ בֵּית יִשְׂרָאֵל בְּרִנָּה יוֹדוּ וִיבָרְכוּ וִישַׁבְּחוּ וִיפָאֲרוּ אֶת שִׁמְךָ מַלְכֵּנוּ. כִּי לְךָ טוֹב לְהוֹדוֹת וּלְשִׁמְךָ נָאֶה לְזַמֵּר, מֵעוֹלָם וְעַד עוֹלָם אַתָּה אֵל.`,
        fonetica: `Yehalelúja Adonai Elohénu kol ma'aséja, vajasideja tzadikím oséi retzonéja, vejol amjá beit Israel beriná yodú viyvarjú vishabjú vifa'arú et shimjá malkénu. Ki lejá tov lehodót, uleshimjá na'é lezamér, me'olám ve'ad olám atá El.`,
        espanol: `Te alabarán, Adonai nuestro Dios, todas tus obras; tus santos, los justos que hacen tu voluntad, y todo tu pueblo, la casa de Israel, con cánticos te darán gracias, te bendecirán, te glorificarán y ensalzarán tu nombre, nuestro Rey. Porque a ti es bueno dar gracias, y a tu nombre es hermoso cantar alabanzas, desde el mundo y hasta el mundo, tú eres Dios.`,
        nota: `Bendición final del Hallel`,
      },
    ],
  },
]