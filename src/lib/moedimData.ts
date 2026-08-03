export interface RitualItem {
  titulo: string
  contenido: string
}

export interface Moed {
  id: string
  he: string
  es: string
  fecha: string
  origen: 'torah' | 'tradicional'
  origenLabel: string
  origenRef: string
  breve: string
  explicacion: string
  rituales: RitualItem[]
  reflexion: string
  img: string
}

export const MOEDIM: Moed[] = [
  {
    id: 'shabat',
    he: 'שבת',
    es: 'Shabat',
    fecha: 'Cada semana · viernes al atardecer hasta sábado al anochecer',
    origen: 'torah',
    origenLabel: 'De la Torá',
    origenRef: 'Éxodo 20:8–11, Deuteronomio 5:12–15',
    breve: 'El día de reposo, un pacto eterno entre el Eterno y su pueblo. Un anticipo del Mundo Venidero.',
    explicacion:
      'El Shabat es el día de reposo, un pacto eterno entre el Eterno y su pueblo. Es un anticipo del "Mundo Venidero", un tiempo para desconectar de la creación material (cesar el trabajo creativo) y conectarnos con la santidad, la familia, la comunidad y el estudio de la Torá. Es un deleite (Oneg) y un regalo divino que santifica el tiempo por encima del espacio. Es el primero de los "Días Santificados" (Mikrái Kódesh) y el fundamento de la fe en la Creación y la Alianza.',
    rituales: [
      {
        titulo: 'Encendido de Velas',
        contenido:
          'Baruj Atá Adonai Eloheinu Melej HaOlam, Asher Kidshánu BeMitzvotav VeTzivánu LeHadlik Ner Shel Shabat. (Bendito eres Tú, Eterno, nuestro Dios, Rey del universo, que nos santificaste con sus mandamientos y nos ordenó encender la vela de Shabat). La mujer, tradicionalmente, es quien enciende y ora por la paz del hogar.',
      },
      {
        titulo: 'Kidush (Santificación sobre el vino)',
        contenido:
          'Baruj Atá Adonai... Borei Pri HaGafen. (Bendito eres Tú... que creas el fruto de la vid). Luego se recita la bendición de santificación del día, recordando tanto la Creación (Zajor et iom haShabat lekadshó) como la Salida de Egipto (Zeijer litziat Mitzráim).',
      },
      {
        titulo: 'Netilat Yadaim (Lavado de manos)',
        contenido:
          'Baruj Atá Adonai... Asher Kidshánu BeMitzvotav VeTzivánu Al Netilat Yadaim. Se lava cada mano dos o tres veces alternadas.',
      },
      {
        titulo: 'Motzi (Bendición sobre el pan/jalá)',
        contenido:
          'Se recita sobre dos panes enteros (en recuerdo del maná doble que caía en el desierto). Baruj Atá Adonai... HaMotzi Lejem Min HaAretz. (Bendito eres Tú... que sacas el pan de la tierra). Luego se moja en sal (en recuerdo del sacrificio en el Templo).',
      },
    ],
    reflexion:
      'El Shabat nos enseña que nuestro valor no reside en lo que producimos, sino en lo que somos. Es un acto de fe declarar que el mundo tiene un Creador y que nosotros, al igual que Él, debemos tomarnos un tiempo para simplemente "estar" y disfrutar de Su presencia. Es la única festividad que la Torá llama "un deleite" (Oneg), porque no conmemora un hecho histórico externo, sino la culminación de la propia Creación.',
    img: 'images/moed-shabat.jpg',
  },
  {
    id: 'pesaj',
    he: 'פסח',
    es: 'Pésaj',
    fecha: '14–21 de Nisán',
    origen: 'torah',
    origenLabel: 'De la Torá',
    origenRef: 'Éxodo 12:1–20, Levítico 23:4–8',
    breve: 'La Fiesta de la Libertad. Conmemora la redención milagrosa de Israel de la esclavitud en Egipto.',
    explicacion:
      'Pésaj es "La Fiesta de la Libertad". Conmemora la redención milagrosa de Israel de la esclavitud en Egipto. El centro de la festividad es el Séder ("Orden"), una cena ritual donde contamos la historia (Hagadá), comemos Matzá (el pan de la aflicción y la libertad) y Maror (hierbas amargas), transmitiendo el mensaje de esperanza y liberación a las nuevas generaciones. Es la primera de las "Tres Festividades de Peregrinación" (Shalosh Regalim). Es la festividad de la identidad nacional y la fe en la redención.',
    rituales: [
      {
        titulo: 'Kadesh (קדש) — Santificación',
        contenido:
          'Recitar el Kidush sobre la primera copa de vino. Baruj Atá Adonai... Borei Pri HaGafen. (Bendito eres Tú... que creas el fruto de la vid).',
      },
      {
        titulo: 'Urjatz (ורחץ) — Lavado',
        contenido: 'Lavado de manos sin bendición (símbolo de pureza antes de empezar el relato).',
      },
      {
        titulo: 'Karpas (כפרס) — Verde',
        contenido:
          'Mojar el perejil o apio en agua salada (lágrimas de la esclavitud). Baruj Atá Adonai... Borei Pri HaAdamá. (Bendito eres Tú... que creas el fruto de la tierra).',
      },
      {
        titulo: 'Yajatz (יחץ) — Partir',
        contenido:
          'Partir la matzá del medio, escondiendo la mitad más grande (Afikomán), que se comerá al final.',
      },
      {
        titulo: 'Maggid (מגיד) — Relato',
        contenido:
          'Contar la historia de la salida de Egipto. Comienza con Ha Lajmá Anyá (Este es el pan de la aflicción que comieron nuestros padres en Egipto...).',
      },
      {
        titulo: 'Rojtzá (רחצה) — Lavado',
        contenido:
          'Segundo lavado de manos, ahora con bendición (Al Netilat Yadaim), preparándose para la comida ritual.',
      },
      {
        titulo: 'Motzi-Matzá (מוציא מצה)',
        contenido:
          'Baruj Atá Adonai... HaMotzi Lejem Min HaAretz y luego ...Al Ajilat Matzá. (Bendito eres Tú... que nos santificó y ordenó comer Matzá).',
      },
      {
        titulo: 'Maror (מרור) — Amargo',
        contenido:
          'Comer la hierba amarga (lechuga, rábano picante). Baruj Atá Adonai... Al Ajilat Maror.',
      },
      {
        titulo: 'Korej (כורך) — Emparedado',
        contenido: 'Comer Matzá y Maror juntos (como Hilel, en recuerdo del Templo).',
      },
      {
        titulo: 'Shulján Orej (שולחן עורך) — Mesa Servida',
        contenido:
          'La comida festiva (comienza con el huevo duro y termina con la pierna de cordero o pollo asado, Zeroá).',
      },
      {
        titulo: 'Tzafún (צפון) — Oculto',
        contenido:
          'Comer el Afikomán (la matzá escondida) como postre final, recordando el cordero pascual.',
      },
      {
        titulo: 'Beréj (ברך) — Bendición',
        contenido:
          'Recitar el Birkat Hamazón (Bendición después de la comida) y beber la tercera copa.',
      },
      {
        titulo: 'Hallel (הלל) — Alabanza',
        contenido: 'Recitar salmos de alabanza y beber la cuarta copa.',
      },
      {
        titulo: 'Nirtzá (נרצה) — Aceptado',
        contenido:
          'Concluir el Séder con Leshaná Haba'á B'Yerushalayim (El año que viene en Jerusalén).',
      },
    ],
    reflexion:
      'Cada persona tiene su "Egipto" personal. Pésaj nos invita a preguntarnos: ¿De qué debo liberarme? La Matzá, simple y sin levadura (que simboliza la humildad y la ausencia de orgullo inflado), y la prisa por hacer el bien son el camino hacia la verdadera redención. No basta con ser libres de algo; hay que ser libres para algo: el servicio al Eterno.',
    img: 'images/moed-pesaj.jpg',
  },
  {
    id: 'shavuot',
    he: 'שבועות',
    es: 'Shavuot',
    fecha: '6 de Siván',
    origen: 'torah',
    origenLabel: 'De la Torá',
    origenRef: 'Éxodo 19:1–20:23, Levítico 23:15–21',
    breve: 'La festividad de la Entrega de la Torá en el Monte Sinaí. La culminación de la cuenta del Omer.',
    explicacion:
      'Shavuot ("Semanas") es la festividad de la Entrega de la Torá en el Monte Sinaí. Marcada por la cuenta del Omer (49 días desde Pésaj), celebra la Alianza entre el Eterno e Israel. Es una fiesta de culminación y compromiso, donde nos convertimos en un "reino de sacerdotes y una nación santa". No tiene fecha fija en la Torá, sino que se calcula a partir de Pésaj, vinculando así la libertad física (Pésaj) con la libertad espiritual (la Torá). Es la segunda de las "Tres Festividades de Peregrinación".',
    rituales: [
      {
        titulo: 'Tikún Leil Shavuot',
        contenido: 'Pasar toda la noche estudiando Torá (desde la Creación hasta la entrega de la Torá, y temas de la festividad). Es una costumbre muy extendida.',
      },
      {
        titulo: 'Lectura de las 10 Palabras (Aseret HaDibrot)',
        contenido:
          'Se lee en la sinagoga. Anojí Adonai Eloheija... (Yo soy el Eterno tu Dios, que te saqué de la tierra de Egipto...).',
      },
      {
        titulo: 'Meguilat Rut',
        contenido:
          'Se lee el libro de Rut, que muestra la lealtad (jesed) y la conversión. Se lee porque ocurre en la época de la cosecha del trigo.',
      },
      {
        titulo: 'Kidush',
        contenido:
          'Baruj Atá Adonai... Borei Pri HaGafen. (Bendito eres Tú... que creas el fruto de la vid).',
      },
      {
        titulo: 'Motzi',
        contenido:
          'Sobre dos panes, en señal de las dos Tablas de la Ley. Baruj Atá Adonai... HaMotzi Lejem Min HaAretz. Es la única festividad en la que se ofrecían dos panes de trigo en el Templo (Shtei haLejem).',
      },
    ],
    reflexion:
      'La Torá no se entregó en una tierra, sino en el desierto. Esto nos enseña que para recibir la Sabiduría divina, debemos despojarnos del orgullo y estar dispuestos a caminar hacia lo desconocido, confiando únicamente en la guía del Creador. La conexión entre Pésaj y Shavuot nos recuerda que la verdadera libertad no es un fin en sí mismo, sino el medio para aceptar una misión y un propósito.',
    img: 'images/hero-estudio.jpg',
  },
  {
    id: 'rosh-hashana',
    he: 'ראש השנה',
    es: 'Rosh HaShaná',
    fecha: '1–2 de Tishrei',
    origen: 'torah',
    origenLabel: 'De la Torá',
    origenRef: 'Levítico 23:23–25, Números 29:1–6',
    breve: 'El Día del Juicio y el Recuerdo. Aniversario de la creación del hombre. El sonido del Shofar despierta el alma.',
    explicacion:
      'Rosh HaShaná es el "Día del Juicio" y el "Día del Recuerdo", el aniversario de la creación del hombre (Adán). Es un día de introspección, coronación de Dios como Rey y despertar espiritual. El sonido del Shofar (cuerno de carnero) es su mitzvá central, un llamado a la teshuvá (arrepentimiento) que rompe la dureza del corazón. Se conoce también como Iom HaDin (Día del Juicio), donde todos pasan delante del Eterno como ovejas. Es llamado "Día del Toque del Shofar" (Iom Teruá) y "Día del Recuerdo" (Iom HaZikarón).',
    rituales: [
      {
        titulo: 'Encendido de Velas',
        contenido:
          'Baruj Atá Adonai... Asher Kidshánu BeMitzvotav VeTzivánu LeHadlik Ner Shel Iom Hazikarón.',
      },
      {
        titulo: 'Kidush',
        contenido: 'Baruj Atá Adonai... Borei Pri HaGafen.',
      },
      {
        titulo: 'Motzi',
        contenido:
          'Sobre Jalá redonda (símbolo de la corona, el ciclo del año y la continuidad). Baruj Atá Adonai... HaMotzi Lejem Min HaAretz. Se moja en miel después de la bendición, diciendo: Iehi Ratzón (Que sea Tu voluntad... un año bueno y dulce). También se come manzana con miel.',
      },
      {
        titulo: 'Sonido del Shofar',
        contenido:
          'Durante el servicio de la Amidá (Musaf), se tocan 100 toques distribuidos en 3 series: Tekiá (un sonido largo y sostenido — alegría y realeza), Shevarim (3 quejidos — gemido, llamado al arrepentimiento), Teruá (9 o más toques cortos y rápidos — alarma, despertar), y Tekiá Guerolá (un toque final muy largo).',
      },
      {
        titulo: 'Tashlij',
        contenido:
          'Ir a un río, lago o mar (donde haya agua y peces) el primer día para "arrojar" simbólicamente los pecados, recitando Mijam Keil (¿Quién como Tú?) y oraciones, mientras se sacude el dobladillo de la ropa.',
      },
    ],
    reflexion:
      'El Shofar nos despierta de nuestra rutina espiritual. Su sonido nos recuerda que el tiempo es sagrado y que cada día es una oportunidad única para volver a nuestro Ser esencial y a nuestra misión en la tierra. Es el momento de coronar a Dios como Rey sobre nosotros, reconociendo que toda autoridad y bendición vienen de Él.',
    img: 'images/moed-shofar.jpg',
  },
  {
    id: 'iom-kipur',
    he: 'יום כיפור',
    es: 'Iom Kipur',
    fecha: '10 de Tishrei',
    origen: 'torah',
    origenLabel: 'De la Torá',
    origenRef: 'Levítico 16:1–34, 23:26–32, Números 29:7–11',
    breve: 'El Día de la Expiación. El día más sagrado del año. Ayuno total y dedicación absoluta a la plegaria.',
    explicacion:
      'Iom Kipur es el "Día de la Expiación", el día más sagrado del año. Es un Shabat de Shabatot, un día de ayuno total (comida, bebida, relaciones conyugales, baños, ungimiento y calzado de cuero) y dedicación absoluta a la plegaria y la reconciliación. Es el culmen del proceso de teshuvá iniciado en Rosh HaShaná, donde buscamos el perdón divino y la purificación del alma. Es el único día en que el Sumo Sacerdote entraba en el Santo de los Santos. Es llamado "Shabat de Shabatot".',
    rituales: [
      {
        titulo: 'Kol Nidré (en la noche)',
        contenido:
          'Anulación de votos y promesas hechas a Dios. Kol Nidré... (Todos los votos, juramentos y promesas... sean perdonados y anulados). Se recita tres veces, con un tono conmovedor.',
      },
      {
        titulo: 'Viduy (Confesión)',
        contenido:
          'Recitación de Ashamnu (Hemos pecado) y Al Jet (Por el pecado que hemos cometido). Se confiesa en plural, porque todos somos responsables unos de otros.',
      },
      {
        titulo: 'Avodá (Servicio del Sumo Sacerdote)',
        contenido:
          'Durante el Musaf, se recuerda detalladamente el ritual en el Templo, incluyendo los dos chivos expiatorios (uno para el Eterno y otro para Azazel).',
      },
      {
        titulo: 'Neilá (al atardecer)',
        contenido:
          'El cierre de las puertas, la última plegaria antes del fin del ayuno. Es un momento de máxima intensidad espiritual.',
      },
      {
        titulo: 'Sonido Final del Shofar',
        contenido:
          'Un toque largo (Tekiá Guerolá) al terminar el día, anunciando el perdón y la liberación. Se concluye con Baruj Shem Kevod Maljutó LeOlam VaEd (Bendito sea el nombre de su glorioso reinado por siempre) y Leshaná Haba'á B'Yerushalayim.',
      },
    ],
    reflexion:
      'Iom Kipur nos enseña que el pecado es un error, no una identidad. Podemos caer, pero siempre podemos levantarnos. La verdadera grandeza del ser humano no está en no errar, sino en la capacidad de reconocer el error, pedir perdón (primero a los ofendidos, luego a Dios) y comprometerse a ser mejor. Es el día en que la misericordia divina prevalece sobre el juicio estricto.',
    img: 'images/moed-kipur.jpg',
  },
  {
    id: 'sucot',
    he: 'סוכות',
    es: 'Sucot',
    fecha: '15–21 de Tishrei',
    origen: 'torah',
    origenLabel: 'De la Torá',
    origenRef: 'Levítico 23:33–43, Deuteronomio 16:13–15',
    breve: 'La Fiesta de las Cabañas. Celebración de alegría inmensa. Conmemora las nubes de gloria del desierto.',
    explicacion:
      'Sucot es "La Fiesta de las Cabañas", una celebración de alegría inmensa (Zeman Simjatenu — Tiempo de nuestra alegría). Conmemora las nubes de gloria que protegieron a Israel en el desierto y la confianza absoluta en la providencia divina. Salimos de nuestras casas seguras para habitar en una Sucá (cabaña) frágil, recordándonos que nuestra seguridad última está en el Eterno. Es una festividad universal, ya que en el Templo se ofrecían 70 toros por las 70 naciones del mundo. Es la tercera de las "Tres Festividades de Peregrinación", llamada "La Fiesta" (Jag por excelencia).',
    rituales: [
      {
        titulo: 'Morar en la Sucá',
        contenido:
          'Comer y, si es posible, dormir en la cabaña. Al entrar, se recita Leishev BaSucá (Habitar en la cabaña). Baruj Atá Adonai... Asher Kidshánu BeMitzvotav VeTzivánu Leishev BaSucá.',
      },
      {
        titulo: 'Cuatro Especies (Arbaat HaMinim)',
        contenido:
          'Tomar el Lulav (rama de palma — columna vertebral), Hadás (mirto — ojos), Aravá (sauce — labios) y Etrog (cidra — corazón), que simbolizan distintas partes del cuerpo y distintos tipos de personas en la comunidad, unidas en un solo atado.',
      },
      {
        titulo: 'Bendición de las Cuatro Especies',
        contenido:
          'Se toma el Lulav (con mirto y sauce) y el Etrog por separado. Baruj Atá Adonai... Asher Kidshánu BeMitzvotav VeTzivánu Al Netilat Lulav. Luego se unen y se agitan en las seis direcciones (Este, Sur, Oeste, Norte, Arriba, Abajo) para declarar que Dios está en todas partes.',
      },
      {
        titulo: 'Hoshanot',
        contenido:
          'Durante los 7 días, se marcha alrededor de la bimá (plataforma) con las cuatro especies, recitando plegarias por la lluvia y la bendición.',
      },
      {
        titulo: 'Shemini Atzeret y Simjat Torá',
        contenido:
          'El octavo día es una festividad independiente (Atzeret — reunión), donde se concluye y se comienza de nuevo el ciclo anual de la Torá con gran alegría, bailando con los rollos.',
      },
    ],
    reflexion:
      'La Sucá es la lección de la humildad y la fe. Nos enseña que todos somos peregrinos en este mundo. La verdadera estabilidad no viene de los muros de ladrillo y las cuentas bancarias, sino de la confianza en la sombra de la fe, la familia y la comunidad que nos rodea. La alegría de Sucot es la alegría de la dependencia total de Dios.',
    img: 'images/moed-sucot.jpg',
  },
  {
    id: 'januca',
    he: 'חנוכה',
    es: 'Janucá',
    fecha: '25 de Kislev – 2 de Tevet',
    origen: 'tradicional',
    origenLabel: 'Tradicional (Rabínica)',
    origenRef: 'Instituida por los sabios (Jazal) después de la victoria de los Macabeos (165 a.e.c.)',
    breve: 'La Fiesta de la Rededicación. Conmemora la purificación del Templo y el milagro del aceite.',
    explicacion:
      'Janucá es la "Fiesta de la Rededicación", que conmemora la purificación del Templo de Jerusalén después de la profanación de Antíoco IV Epífanes. La victoria militar fue un milagro, pero el milagro central para la tradición rabínica fue el del aceite: una pequeña cantidad de aceite sellado con el sello del Sumo Sacerdote, suficiente para un día, ardió milagrosamente durante ocho días. Es una celebración de la resistencia espiritual, la identidad judía y el poder de la luz para vencer a la oscuridad. Significa "Rededicación".',
    rituales: [
      {
        titulo: 'Encendido de la Janukiá',
        contenido:
          'Se enciende una vela cada noche (la del Shamash o "sirviente", más una por cada día que transcurre). Se coloca en una ventana o puerta para publicitar el milagro (Pirsumei Nisa).',
      },
      {
        titulo: 'Bendiciones al encender (cada noche)',
        contenido:
          'Baruj Atá Adonai Eloheinu Melej HaOlam, Asher Kidshánu BeMitzvotav VeTzivánu LeHadlik Ner Shel Janucá. (Bendito eres Tú... que nos santificaste con sus mandamientos y nos ordenó encender la vela de Janucá).\n\nBaruj Atá Adonai... SheAsá Nissim LaAvoteinu BaYamim HaHem BaZman HaZé. (Bendito eres Tú... que hiciste milagros a nuestros padres en aquellos días, en esta época).\n\nBaruj Atá Adonai... SheHejeiánu VeKiyemánu VeHiguiánu LaZman HaZé. (Bendito eres Tú... que nos has dado vida, nos has mantenido y nos has hecho llegar hasta este momento). Esta tercera bendición SOLO se recita la primera noche.',
      },
      {
        titulo: 'Maoz Tzur',
        contenido:
          'Después del encendido, se canta el himno tradicional Maoz Tzur ("Roca de mi salvación") y se dice el salmo 30 (Mizmor Shir Janucat HaBayit — Salmo para la dedicación de la Casa).',
      },
      {
        titulo: 'Costumbres',
        contenido:
          'Comer alimentos fritos en aceite (como sufganiyot — donuts, y levivot — latkes de papa) para recordar el milagro del aceite. Jugar al dreidel (peonza) con las letras Nes Gadol Hayá Sham (Un gran milagro ocurrió allí).',
      },
    ],
    reflexion:
      'No necesitamos grandes cantidades de "aceite" o recursos para hacer un gran cambio. A veces, lo que se necesita es un poco de luz genuina y constante. Janucá nos reta a ser esa pequeña llama que, con fe, puede iluminar una casa, una comunidad y el mundo entero. La luz de la Torá y la tradición nunca se apaga, incluso en la oscuridad más profunda del exilio.',
    img: 'images/moed-januca.jpg',
  },
  {
    id: 'purim',
    he: 'פורים',
    es: 'Purim',
    fecha: '14 de Adar',
    origen: 'tradicional',
    origenLabel: 'Tradicional (De los Escritos — Ketuvim)',
    origenRef: 'Instituida por Mordejai y Ester (Ester 9:20–32)',
    breve: 'La celebración de la salvación milagrosa del pueblo judío en el imperio persa. Alegría desbordante.',
    explicacion:
      'Purim ("Suerte") es la celebración de la salvación milagrosa del pueblo judío en el imperio persa, narrada en el libro de Ester. Es una historia de redención oculta (Jesed Nistar), donde el nombre de Dios no aparece explícitamente, pero Su mano guía los eventos a través de la naturaleza y el azar. Purim se caracteriza por la alegría desbordante, el disfraz (ocultando la identidad, como en la historia) y la mitzvá de la hermandad y la caridad. Aunque está narrada en la Biblia (Libro de Ester), su observancia como festividad es de origen profético/rabínico y no aparece en la Torá de Moisés.',
    rituales: [
      {
        titulo: 'Lectura de la Meguilá',
        contenido:
          'Leer el Libro de Ester dos veces (la noche del 14 de Adar y el día siguiente). Cada vez que se menciona el nombre de Hamán, se hace ruido con groguers (matracas), palmas o golpes para "borrar su nombre", como dice Deuteronomio 25:19 (Timjé et zejer Amalek).',
      },
      {
        titulo: 'Mishloaj Manot (Envío de porciones)',
        contenido:
          'Enviar regalos de al menos dos alimentos comestibles (uno debe estar listo para comer) a un amigo. Se basa en Ester 9:22: U'Mishloaj Manot Ish LeRe'eihu (Y enviar porciones cada uno a su amigo).',
      },
      {
        titulo: 'Matanot LaEvyonim (Regalos a los pobres)',
        contenido:
          'Dar caridad (dinero o comida) a al menos dos pobres. Es la mitzvá más importante del día, para asegurar que todos puedan celebrar.',
      },
      {
        titulo: 'Seudat Purim (Comida festiva)',
        contenido:
          'Una comida abundante durante el día, donde se acostumbra beber vino hasta no poder distinguir entre Baruj Mordejai (Bendito sea Mordejai) y Arur Hamán (Maldito sea Hamán). Esto simboliza la anulación del juicio estricto y la alegría de la redención.',
      },
    ],
    reflexion:
      'Purim nos enseña que Dios está presente incluso en los momentos en que no vemos Su rostro. La historia de Ester es un recordatorio de que todos tenemos un rol en el drama de la historia; a veces, "llegamos al reino para tal tiempo como este" (Ester 4:14), y debemos alzar la voz por la justicia y el bien. La alegría de Purim no es frivolidad, sino la profunda certeza de que, incluso en el exilio y en el aparente caos, el plan divino se cumple.',
    img: 'images/moed-purim.jpg',
  },
]

export const MOEDIM_POR_ID = Object.fromEntries(MOEDIM.map((m) => [m.id, m])) as Record<string, Moed>
