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

export const seccionesSlijot: SeccionSiddur[] = [
  {
    id: `kavana`,
    titulo: `Kavaná`,
    subtitulo: `Preparación del corazón antes de las Slijot`,
    bloques: [
      {
        hebreo: `קוֹבֵעַ מְקוֹמוֹ — מְקוֹעֵם אֶת לִבּוֹ`,
        fonetica: `Kovéa makómo — mekojém et libó.`,
        espanol: `Fija su lugar — fija su corazón.`,
        nota: `Antes de abrir la boca, fija tu lugar. Siéntate. No te recuestes. La espalda recta es la columna del alma. Enciende una vela, si puedes. La luz del fuego en la oscuridad de la madrugada no es decoración. Es memoria de que aunque todo parezca negro, una chispa basta. Respira tres veces. No es meditación oriental. Es simplemente dejar que el cuerpo sepa que está aquí, ahora, presente. Las Slijot no funcionan con la mente ausente. Dile a tu alma, en voz baja o en silencio: "Estoy aquí para volver. No para fingir. No para cumplir. Para volver." Esa es la kavaná. Todo lo demás depende de ella.`,
      },
      {
        hebreo: `הַשְׁכִּיבֵנוּ יְיָ אֱלֹהֵינוּ לְשָׁלוֹם וְהַעֲמִידֵנוּ מַלְכֵּנוּ לְחַיִּים`,
        fonetica: `Hashkivénu Adonai Eloheinu leshalóm, veamidénu Malkeinu lejáyim.`,
        espanol: `Haznos acostar, Adonai nuestro Dios, en paz, y haznos permanecer, nuestro Rey, en vida.`,
        nota: `Si rezas las Slijot antes de dormir, esta bendición cierra el día. Si las rezas al madrugar, es la bendición que abre la noche que terminó. En ambos casos, es reconocimiento de que la paz y la vida no son nuestras. Son préstamos.`,
      },
    ],
  },
  {
    id: `ana-bejoaj`,
    titulo: `Ana Bejoaj`,
    subtitulo: `La plegaria maestra de las Slijot — compuesta por Moisés en el Sinaí`,
    bloques: [
      {
        hebreo: `אָנָּא בְּכֹחַ גְּדֻלַּת יְמִינְךָ תַּתִּיר צְרוּרָה`,
        fonetica: `Aná bejóaj gedulat yeminjá tatir tzrurá.`,
        espanol: `Por favor, con el poder de la grandeza de Tu diestra, libera a la atada.`,
        nota: `Aná — por favor. No exigimos. Suplicamos. Bejóaj — con poder. No con nuestro poder. Con el poder de la gedulá, la Sefirá de Jesed, la misericordia ilimitada. Yeminjá — Tu diestra, el lado de la otorgación. Tzrurá — la atada. Somos nosotros. Atados por nuestros errores, por nuestras elecciones, por la rutina que nos durmió.`,
      },
      {
        hebreo: `קַבֵּל רִנַּת עַמְּךָ שַׂגְּבֵנוּ טַהֲרֵנוּ נוֹרָא`,
        fonetica: `Kabél rinat amjá, sagvénu, tajarénu, Norá.`,
        espanol: `Recibe el canto de Tu pueblo, ensálzanos, purifícanos, Tú el Temible.`,
        nota: `Riná es el canto que brota del dolor transformado. No es queja. Es música nacida de la rotura. Los tres verbos imperativos — sagvénu, tajarénu, Norá — son una escalada: levántanos, límpianos, revélante.`,
      },
      {
        hebreo: `נָא גִבּוֹר דּוֹרְשֵׁי יִחוּדְךָ כְּבַבְּכַת שָׁמְרֵם`,
        fonetica: `Ná gibor dorsheij jijudejá, kevavat shomrem.`,
        espanol: `Por favor, oh Fuerte, guarda como la niña de los ojos a los que buscan Tu unidad.`,
        nota: `Kevavat — la pupila, la parte más sensible y protegida del ojo. Así pide Moisés que sean protegidos quienes buscan jijud, la conciencia de que todo es uno. No pide protección para los perfectos. Pide para los dorsheij — los que buscan. El que busca, aunque no haya llegado, ya está en el camino.`,
      },
      {
        hebreo: `בְּרָכֵם טַהֲרֵם רַחֲמֵי צִדְקָתְךָ תָּמִיד גָּמְלֵם`,
        fonetica: `Berajem, tajarénu, rajamei tzidkatejá tamid gamlem.`,
        espanol: `Bendícelos, purifícalos, con Tus misericordias de justicia siempre otórgales.`,
        nota: `Rajamei tzidkatejá — las misericordias que emergen de Tu justicia. No es capricho. Es misericordia con estructura. Tamid — siempre. No solo cuando rezamos. Siempre.`,
      },
      {
        hebreo: `חֲסִין קָדוֹשׁ בְּרוֹב טוּבְךָ נַהֵל עֲדָתֶךָ`,
        fonetica: `Jasin kadosh bejov tuvjá nahel adatejá.`,
        espanol: `Poderoso y Santo, con Tu abundante bondad, guía Tu congregación.`,
        nota: `Jasin — poderoso, pero no el poder del tirano. El poder de quien puede contenerse. La Cábala enseña que la verdadera fuerza no es destruir, sino contener la propia ira. Y kadosh — santo, separado. Lo santo no es lo etéreo, lo lejano. Es lo separado para un propósito.`,
      },
      {
        hebreo: `יָחִיד גֵּאֶה לְעַמְּךָ פְּנֵה זוֹכְרֵי קְדֻשָּׁתֶךָ`,
        fonetica: `Jajid geé leamjá pene, zojreme kedushatejá.`,
        espanol: `Único y Excelso, vuelve Tu rostro a los que recuerdan Tu santidad.`,
        nota: `Jajid — único, pero también unido. En hebreo, la misma raíz da jibur, unión. Dios es uno no en el sentido numérico, sino en el sentido de que toda multiplicidad emerge de Él y retorna a Él. Y geé — excelso, pero también el que se revela. La Shejiná no siempre está oculta. Hay momentos en que se revela, y esos momentos dependen de que nosotros zojrem — recordemos. Recordar no es nostalgia. Es traer algo del pasado al presente con tal fuerza que cambia el futuro.`,
      },
      {
        hebreo: `שַׁוְעָתֵנוּ קַבֵּל וּשְׁמַע צְעָקָתֵנוּ יוֹדֵעַ תַּעֲלוּמוֹת`,
        fonetica: `Shavateinu kabél ushma tzeakaténu, Jodeá taalumot.`,
        espanol: `Recibe nuestro clamor y escucha nuestro grito, Tú que conoces los secretos.`,
        nota: `Shavá es el llanto contenido, el que duele en el pecho. Tzeaká es el grito que ya no cabe. Moisés pide que ambos sean escuchados. Y se dirige a Jodeá taalumot — el que conoce los secretos del corazón humano. Lo que no le contamos a nadie. Lo que ni nosotros mismos queremos ver. Ese Dios es al que le rezamos.`,
      },
      {
        hebreo: `בָּרוּךְ שֵׁם כְּבוֹד מַלְכוּתוֹ לְעוֹלָם וָעֶד`,
        fonetica: `Barúj shem kevod maljuto leolám vaed.`,
        espanol: `Bendito sea el Nombre de Su gloriosa realeza por siempre jamás.`,
        nota: `Esta frase cierra la plegaria. Es la afirmación de que todo lo anterior no fue una queja, sino una coronación. Incluso desde la oscuridad, incluso desde la atadura, reconocemos el reinado.`,
      },
    ],
  },
  {
    id: `ashamnu`,
    titulo: `Ashamnu`,
    subtitulo: `Confesión alfabética — 24 letras, 24 formas de decir "pecamos"`,
    bloques: [
      {
        hebreo: `אָשַׁמְנוּ בָּגַדְנוּ גָּזַלְנוּ דִּבַּרְנוּ דֹּפִי`,
        fonetica: `Ashamnu, bagadnu, gazalnu, dibarnu dofi.`,
        espanol: `Hemos pecado, hemos traicionado, hemos robado, hemos hablado calumnia.`,
        nota: `Ashamnu — hemos cargado culpa. No "ellos cargaron". Nosotros. En primera persona del plural, porque el judío no confiesa solo por sí. Confiesa por el pueblo. Por la comunidad. Por la humanidad.`,
      },
      {
        hebreo: `הֶעֱוִינוּ וְהִרְשַׁעְנוּ זַדְנוּ חָמַסְנוּ טָפַלְנוּ שָׁקֶר`,
        fonetica: `Heavinu, vehirshaanu, zadnu, jamasnu, tafalnu sheker.`,
        espanol: `Hemos pervertido, hemos sido malvados, hemos actuado con malicia, hemos sido violentos, hemos forjado mentira.`,
        nota: `Zadnu — actuamos con zadón, con intención consciente de dañar. Esto es más grave que el error. El error se corrige con conocimiento. El zadón requiere que el corazón se rompa y vuelva a armarse.`,
      },
      {
        hebreo: `יָעַצְנוּ רֵעַ רָע כִּי נִאָצְנוּ כִּי מָרַדְנוּ כִּי נִתְגָּרַדְנוּ`,
        fonetica: `Yaatznu ra, ki niaatznu, ki maradnu, ki nitgaradnu.`,
        espanol: `Hemos aconsejado el mal, hemos despreciado, hemos rebelado, hemos provocado.`,
        nota: `Maradnu — rebelión. No desobediencia pasiva. Rebelión activa. El hijo que mira a los ojos del padre y dice "no".`,
      },
      {
        hebreo: `כִּי פָּשַׁעְנוּ כִּי פָּשַׁטְנוּ כִּי צָרַרְנוּ כִּי קִשִּׁינוּ עֹרֶף`,
        fonetica: `Ki fashaanu, ki fashatnu, ki tzararnu, ki kishinu oref.`,
        espanol: `Hemos transgredido, hemos despojado, hemos angustiado, hemos endurecido la nuca.`,
        nota: `Kishinu oref — endurecimos la nuca. La imagen es del buey que no quiere el yugo. Del hombre que mira hacia arriba, hacia atrás, hacia cualquier lado menos hacia adentro.`,
      },
      {
        hebreo: `כִּי רִשַׁעְנוּ כִּי רָשַׁעְנוּ כִּי שַׁחַתְנוּ כִּי תָּעִינוּ כִּי תִּעְתַּעְנוּ`,
        fonetica: `Ki rishaanu, ki rashaanu, ki shajatnu, ki tainu, titanu.`,
        espanol: `Hemos sido malvados, hemos sido perversos, hemos corrompido, hemos extraviado, hemos engañado.`,
        nota: `Shajatnu — corrompido. De la raíz sh.j.t, destruir. No solo errar. Destruir lo que estaba intacto.`,
      },
      {
        hebreo: `כִּי תָּעַבְנוּ כִּי תָּעַנוּ כִּי תָּעִינוּ כִּי תָּעִינוּ`,
        fonetica: `Ki taavnu, ki taanu, ki tainu, ki tainu.`,
        espanol: `Hemos abominado, hemos oprimido, hemos extraviado, hemos extraviado.`,
        nota: `La repetición de tainu al final no es error de copia. Es énfasis. Es el eco del extraviarse. Una vez no basta. Nos extraviamos, y nos extraviamos de nuevo.`,
      },
    ],
  },
  {
    id: `vidui`,
    titulo: `Vidui`,
    subtitulo: `Confesión detallada — inclinar la cabeza, en voz baja`,
    bloques: [
      {
        hebreo: `אֲנַחְנוּ חָטָאנוּ צָרַרְנוּ אֲשַׁמְנוּ בָּגַדְנוּ גָּזַלְנוּ דִּבַּרְנוּ דֹּפִי`,
        fonetica: `Anajnu jatánu, tzararnu, ashamnu, bagadnu, gazalnu, dibarnu dofi.`,
        espanol: `Nosotros hemos pecado, hemos angustiado, hemos cargado culpa, hemos traicionado, hemos robado, hemos hablado calumnia.`,
        nota: `Repite esta confesión lentamente. No la apresures. Cada verbo es una puerta. Entra por ella. Pregúntate: "¿cuándo hice esto? ¿a quién? ¿con qué intención?" No busques excusas. Busca la verdad. La verdad duele, pero duele menos que la mentira que vive en el cuerpo como tumor silencioso.`,
      },
      {
        hebreo: `וְאַתָּה צַדִּיק בְּכָל הַבָּא עָלֵינוּ כִּי אֱמֶת עָשִׂיתָ וַאֲנַחְנוּ הִרְשַׁעְנוּ`,
        fonetica: `Veattá tzadik bejol haba aleinu, ki emet asitá, veanajnu hirshaanu.`,
        espanol: `Y Tú eres justo en todo lo que viene sobre nosotros, porque verdad hiciste, y nosotros fuimos malvados.`,
        nota: `Este es el giro. La confesión no termina en la culpa. Termina en el reconocimiento de la justicia divina. No decimos "nos castigaste injustamente". Decimos "verdad hiciste". Lo que nos pasa, incluso lo difícil, es respuesta a nuestras acciones. No venganza. Consecuencia.`,
      },
      {
        hebreo: `אֲבָל אֲנַחְנוּ וַאֲבוֹתֵינוּ חָטָאנוּ בּוֹשַׁנוּ גָּנַבְנוּ דִּבַּרְנוּ שֶׁקֶר`,
        fonetica: `Aval anajnu vaavoteinu jatánu, boshánu, ganavnu, dibarnu sheker.`,
        espanol: `Pero nosotros y nuestros padres hemos pecado, hemos avergonzado, hemos robado, hemos hablado mentira.`,
        nota: `Aval — pero. La conjunción del reconocimiento. No negamos nuestra historia. No negamos a nuestros padres. Reconocemos que la cadena del error es larga y que nosotros somos eslabón, no origen.`,
      },
    ],
  },
  {
    id: `trece-midot`,
    titulo: `Las Trece Midot`,
    subtitulo: `Atributos de Misericordia — Shemot 34:6-7`,
    bloques: [
      {
        hebreo: `יְיָ יְיָ אֵל רַחוּם וְחַנּוּן אֶרֶךְ אַפַּיִם וְרַב חֶסֶד וֶאֱמֶת`,
        fonetica: `Adonai, Adonai, El, rajum vejanun, erej apáyim, verav jesed, veemet.`,
        espanol: `Adonai, Adonai, Dios, misericordioso y gracioso, lento para la ira, y abundante en bondad y verdad.`,
        nota: `La doble repetición de Adonai es un misterio que los cabalistas han meditado durante siglos. Según el Zohar, la primera Adonai es el atributo de la justicia. La segunda, el atributo de la misericordia. Dios se presenta con ambos: justo y misericordioso. No uno u otro. Ambos. La justicia sin misericordia es crueldad. La misericordia sin justicia es debilidad. Dios es equilibrio.`,
      },
      {
        hebreo: `נֹצֵר חֶסֶד לָאֲלָפִים נֹשֵׂא עָוֹן וָפֶשַׁע וְחַטָּאָה וְנַקֵּה לֹא יְנַקֶּה`,
        fonetica: `Notzer jesed laalafim, nosé avon vafeshá vehatáá, venakeh lo yenakeh.`,
        espanol: `Guardador de la bondad para millares, portador de iniquidad, transgresión y pecado, y que limpia, no limpiará completamente.`,
        nota: `Notzer jesed laalafim — guarda la bondad para dos mil generaciones. La Torá habla de generaciones, no de individuos. La misericordia divina es patrimonio familiar. Lo que hace un abuelo resuena en el nieto. Nosé avon vafeshá vehatáá — portador de iniquidad, transgresión y pecado. Tres niveles de error. Avon — inclinación torcida, la raíz del hábito. Peshá — rebelión consciente. Jatá — error involuntario. Dios carga los tres. No discrimina. Y luego la advertencia: venakeh lo yenakeh — "y que limpia, no limpiará completamente". Esto no es amenaza. Es precisión. La limpieza total sería borrar la persona. Borrar la memoria. Borrar la lección. Dios limpia, pero deja la cicatriz. La cicatriz es memoria. La cicatriz es sabiduría.`,
      },
      {
        hebreo: `פֹּקֵד עֲוֹן אָבוֹת עַל בָּנִים וְעַל בְּנֵי בָנִים עַל שִׁלֵּשִׁים וְעַל רִבֵּעִים`,
        fonetica: `Pokéd avon avot al banim veal bené vanim, al shileshim veal ribeim.`,
        espanol: `Visitador de la iniquidad de los padres sobre los hijos y sobre los hijos de los hijos, sobre la tercera y la cuarta generación.`,
        nota: `Este versículo asusta a muchos. Pero la Cábala lo interpreta de otra manera: no es castigo heredado. Es patrón heredado. El hijo que ve al padre mentir, aprende a mentir. El nieto que ve al abuelo beber, normaliza la bebida. Dios no castiga a los descendientes por los errores de los antepasados. Los antepasados, con sus errores, crean un campo en el que los descendientes crecen. Y ese campo puede ser fértil o venenoso. La Teshuvá de un hijo puede romper la cadena. Eso es lo que las Slijot hacen: romper la cadena. No con magia. Con conciencia. Con elección. Con el grito que dice "hasta aquí".`,
      },
      {
        hebreo: `וְסָלַחְתָּ לַעֲוֹנֵנוּ וּלְחַטָּאתֵנוּ וּנְקַדְּשֵׁנוּ בְּכָל מִצְוֹתֶיךָ`,
        fonetica: `Vesalajta laavoneinu ulejatáteinu, unekadéshenu bejol mitzvotejá.`,
        espanol: `Y perdona nuestra iniquidad y nuestro pecado, y santifícanos con todos Tus mandamientos.`,
        nota: `Vesalajta — y perdonarás. No "y olvidarás". Perdonar es distinto de olvidar. Perdonar es dejar de castigar. Olvidar es dejar de recordar. Dios perdona, pero no olvida. Porque el recuerdo es la lección. Y santifícanos — no solo límpianos. Santifícanos. La santidad no es ausencia de pecado. Es presencia de propósito.`,
      },
    ],
  },
  {
    id: `tefila-personal`,
    titulo: `Tefilá Personal`,
    subtitulo: `Espacio libre — habla, llora, calla`,
    bloques: [
      {
        hebreo: `אֲנִי הָאִישׁ שֶׁעָשָׂה כָּךְ וְכָךְ`,
        fonetica: `Ani haish sheasá kaj vekaj.`,
        espanol: `Yo soy el hombre que hizo tal y tal.`,
        nota: `El Rambam, en Hiljot Teshuvá 2:2, enseña que el arrepentimiento completo requiere que la persona se presente ante Dios y diga: "Yo soy el hombre que hizo tal y tal." Nombrar lo que hiciste. Sin eufemismos. Sin "me equivoqué" cuando lo que hiciste fue dañar. Sin "no fue mi intención" cuando la intención estuvo ahí, aunque la niegues. Nombrar es el primer paso. Nombrar es sanar. Si tienes lágrimas, déjalas salir. El Zohar enseña que las lágrimas de Teshuvá son el agua que disuelve las cáscaras del corazón. No te avergüences. El hombre que no llora en Elul es un hombre que no ha entendido de qué se trata. Si tienes rabia, exprésala. Dile a Dios: "estoy enojado contigo, estoy enojado conmigo, estoy enojado con el mundo". La rabia no es pecado. El pecado es la rabia reprimida que sale por otros lados. Dile todo. Él puede sostenerlo. Y si no tienes palabras, quédate en silencio. El silencio también es oración. A veces es la más honesta.`,
      },
    ],
  },
  {
    id: `bendicion-final`,
    titulo: `Bendición Final`,
    subtitulo: `De pie, manos abiertas, voz firme`,
    bloques: [
      {
        hebreo: `יְהִי רָצוֹן מִלְּפָנֶיךָ יְיָ אֱלֹהֵינוּ שֶׁתַּחֲזִירֵנוּ בִּתְשׁוּבָה שְׁלֵמָה לְפָנֶיךָ`,
        fonetica: `Yéhi ratzón milfanéjá, Adonai Eloheinu, shetajazirenu biteshuvá shelemá lefanéjá.`,
        espanol: `Sea Tu voluntad ante Ti, Adonai nuestro Dios, que nos devuelvas en Teshuvá completa ante Ti.`,
        nota: `Teshuvá shelemá — retorno completo. No parcial. No a medias. No "voy a intentar". Completo. Que todo lo que somos vuelva. Que nada quede afuera.`,
      },
      {
        hebreo: `וּתְחַדֵּשׁ עָלֵינוּ שָׁנָה טוֹבָה וּמְתוּקָה`,
        fonetica: `Utajadésh aleinu shaná tová umetuká.`,
        espanol: `Y renueves sobre nosotros un año bueno y dulce.`,
        nota: `Metuká — dulce. No solo bueno. Dulce. Que el año que viene tenga sabor. Que no sea solo supervivencia. Que haya momentos de miel. De risa. De encuentro. De paz.`,
      },
      {
        hebreo: `וְכָל הָאוֹמֵר אָמֵן בְּכָל כֹּחוֹ פּוֹתְחִין לוֹ שַׁעֲרֵי הַגְּדֻלָּה`,
        fonetica: `Vejol haomer amén bejol kojó, potjín lo shaarei hagdulá.`,
        espanol: `Y a todo el que dice amén con toda su fuerza, se le abren las puertas de la grandeza.`,
        nota: `Esta frase del Talmud en Shabat 119b cierra el seder con una promesa. El amén no es mero acuerdo. Es entrega total. Es decir "así sea" con todo el cuerpo, con toda la voz, con toda la intención. Cuando el amén es completo, las puertas se abren. No por mérito. Por sinceridad.`,
      },
      {
        hebreo: `אָמֵן`,
        fonetica: `Amén.`,
        espanol: `Así sea.`,
        nota: `Dilo con todo el cuerpo. No como puntualización. Como entrega. Como si estuvieras arrojando una semilla al campo y confiando en que germinará.`,
      },
    ],
  },
  {
    id: `guia-uso`,
    titulo: `Guía de Uso`,
    subtitulo: `Cómo emplear este Seder`,
    bloques: [
      {
        hebreo: `מֵתַי?`,
        fonetica: `Metai?`,
        espanol: `¿Cuándo?`,
        nota: `Las Slijot se recitan desde Rosh Jodesh Elul hasta Yom Kipur. La costumbre sefardí es madrugar, antes del alba, cuando el mundo todavía duerme y el alma está más desnuda. Pero si no puedes madrugar, recítalas en cualquier momento del día. Lo importante no es la hora. Es la kavaná.`,
      },
      {
        hebreo: `בַּמֶּה תְּדִירוּת?`,
        fonetica: `Bameh tedirút?`,
        espanol: `¿Con qué frecuencia?`,
        nota: `Todos los días de Elul. Todos los días de los Diez Días de Teshuvá. Si puedes, también durante los ayunos. No es exceso. Es inversión.`,
      },
      {
        hebreo: `בְּאֵיזֶה סֵדֶר?`,
        fonetica: `Beéze séder?`,
        espanol: `¿En qué orden?`,
        nota: `1. Enciende la vela. Siéntate. Respira. Fija la kavaná. 2. Recita Ana Bejoaj en voz alta, con melodía si la recuerdas, sin ella si no. 3. Recita Ashamnu de pie, golpeando el pecho. 4. Recita Vidui inclinando la cabeza, en voz baja. 5. Recita las 13 Midot con respiración completa, de pie. 6. Tefilá personal: habla. Llora. Silencia. 7. Bendición final: de pie, manos abiertas, voz firme.`,
      },
      {
        hebreo: `כַּמָּה זְמַן?`,
        fonetica: `Kamá zman?`,
        espanol: `¿Cuánto tiempo?`,
        nota: `No menos de veinte minutos. No más de una hora. No es carrera. Es excavación.`,
      },
      {
        hebreo: `מָה יִקְרֶה אִם אֵינִי מְרֻגָּשׁ?`,
        fonetica: `Má yikré im eini merugash?`,
        espanol: `¿Qué pasa si no siento nada?`,
        nota: `Sigue recitando. El sentimiento no es requisito. La presencia sí. A veces el corazón está dormido y las palabras son el despertador. No dejes de tocar la puerta porque no oigas respuesta. La puerta se abre a su tiempo.`,
      },
      {
        hebreo: `הַאִם אֲנִי יָכוֹל לְשַׁנּוֹת אֶת הַנּוּסָח?`,
        fonetica: `Haim ani jajol leshanot et hanusaj?`,
        espanol: `¿Puedo modificar el texto?`,
        nota: `No cambies las palabras hebreas. Son precisas. Son llaves. Pero puedes añadir tu propia Tefilá personal donde el seder lo indica. Esa parte es tuya.`,
      },
      {
        hebreo: `הַאִם אֲנִי צָרִיךְ מִקְוֶה אוֹ צוֹם?`,
        fonetica: `Haim ani tzarij mikvé o tzom?`,
        espanol: `¿Necesito mikvé o ayuno para que esto funcione?`,
        nota: `No. La Teshuvá funciona con honestidad, no con agua ni con hambre. El mikvé y el ayuno son herramientas auxiliares. La herramienta principal es el corazón que dice verdad.`,
      },
      {
        hebreo: `מָה אִם אֲנִי בֵּן אָנוּס?`,
        fonetica: `Má im ani ben anús?`,
        espanol: `¿Y si soy Benei Anusim?`,
        nota: `Si eres descendiente de judíos conversos forzados, este seder es especialmente para ti. No necesitas permiso de tribunal. Necesitas volver. Enciende la vela. Abre la Torá. Di el Shemá. Tu sangre ya sabe el camino. Solo necesita que tu boca lo nombre.`,
      },
    ],
  },
]
