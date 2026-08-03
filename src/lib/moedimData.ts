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
      `El Shabat es el día de reposo, un pacto eterno entre el Eterno y su pueblo. Es un anticipo del "Mundo Venidero" (Olam HaBah), un tiempo sagrado para desconectar de la creación material —cesando los 39 tipos de trabajo creativo (melajá)— y conectarnos con la santidad, la familia, la comunidad y el estudio de la Torá. Es un deleite (Oneg Shabat) y un regalo divino que santifica el tiempo por encima del espacio. Es el primero de los "Días Santificados" (Mikrái Kódesh) y el fundamento de la fe en la Creación y la Alianza. El Shabat no conmemora un hecho histórico, sino la culminación misma de la Creación: cuando el Eterno descansó el séptimo día, santificándolo y bendiciéndolo. Por eso, cada Shabat es una invitación a entrar en ese reposo divino, a recordar que el mundo tiene un Creador y que nosotros, al igual que Él, debemos tomarnos un tiempo para simplemente "estar" y disfrutar de Su presencia.`,
    rituales: [
      {
        titulo: 'Encendido de las Velas (Hadlakat Nerot)',
        contenido:
          `La mujer de la casa enciende generalmente dos velas (algunas familias encienden una por cada miembro de la familia). Se cubre los ojos y se recita la bendición:

Baruj Atá Adonai Eloheinu Melej HaOlam, Asher Kidshánu BeMitzvotav VeTzivánu LeHadlik Ner Shel Shabat.

(Bendito eres Tú, Eterno, nuestro Dios, Rey del universo, que nos santificaste con sus mandamientos y nos ordenó encender la vela de Shabat).

Luego se reza:

Ieji Etan Elenu VeAl Kol Israel VeImru Amen.

(Que sea Tu voluntad concedernos paz y bienestar).`,
      },
      {
        titulo: 'Kidush (Santificación sobre el vino)',
        contenido:
          `Se recita sobre una copa de vino (o jugo de uva) al inicio de la cena del viernes por la noche y del sábado al mediodía. Se combina la bendición sobre el vino con la santificación del día:

Baruj Atá Adonai Eloheinu Melej HaOlam, Borei Pri HaGafen.

(Bendito eres Tú... que creas el fruto de la vid).

Luego se recita:

Baruj Atá Adonai... Asher Kidshánu BeMitzvotav VeRatza Vanu, VeShabat Kodeshó BeIajava UVeratzón Hinchilanu...

(Bendito eres Tú... que nos santificaste con sus mandamientos, y tuvo complacencia en nosotros, y nos heredó el Shabat santo con amor y voluntad...).

Este texto recuerda tanto la Creación (Zajor et iom haShabat lekadshó) como la Salida de Egipto (Zeijer litziat Mitzráim).`,
      },
      {
        titulo: 'Netilat Yadaim (Lavado ritual de manos)',
        contenido:
          `Antes de comer el pan, se lavan las manos con un vaso o jarra, vertiendo agua sobre cada mano alternadamente (al menos dos veces por mano). Se recita:

Baruj Atá Adonai Eloheinu Melej HaOlam, Asher Kidshánu BeMitzvotav VeTzivánu Al Netilat Yadaim.

(Bendito eres Tú... que nos santificaste con sus mandamientos y nos ordenó sobre el lavado de las manos).

No se habla hasta que se ha comido un pedazo de jalá.`,
      },
      {
        titulo: 'Motzi (Bendición sobre el pan / Jalá)',
        contenido:
          `Se recita sobre dos panes enteros de jalá (en recuerdo del doble maná que caía en el desierto los viernes). Se cubre primero con un paño (en memoria del maná cubierto con rocío). Se recita:

Baruj Atá Adonai Eloheinu Melej HaOlam, HaMotzi Lejem Min HaAretz.

(Bendito eres Tú... que sacas el pan de la tierra).

Luego se parte el pan, se moja en sal (en recuerdo de las ofrendas saladas del Templo) y se distribuye.`,
      },
      {
        titulo: 'Birkat HaMazon (Bendición después de la comida)',
        contenido:
          `Después de comer pan, se recita la Birkat HaMazon (Bendición de la Alimentación), compuesta de cuatro bendiciones que agradecen por la comida, la tierra, Jerusalén y la bondad divina. En Shabat se añaden párrafos especiales (Retzei VeHajalitzenu) que piden por el descanso del Shabat y la redención.`,
      },
      {
        titulo: 'Havdalá (Separación al final del Shabat)',
        contenido:
          `Al anochecer del sábado, cuando aparecen tres estrellas, se realiza la ceremonia de Havdalá ("Separación"), que marca la transición del Shabat al resto de la semana. Se usa una copa de vino, una vela trenzada con varias mechas, y especias aromáticas (besamim).

Se recita:

Baruj Atá Adonai... Borei Pri HaGafen.
Baruj Atá Adonai... Borei Minei Besamim.
Baruj Atá Adonai... Borei Meorei HaEsh.

Y la bendición final:

Hamavdil Ben Kodesh LeJol, Ben Or LeJoshej, Ben Israel LeHaAmim, Ben Iom HaShevií LeSheshet Iemei HaMaase. Baruj Atá Adonai, Hamavdil Ben Kodesh LeJol.

(Bendito eres Tú... que separas entre lo sagrado y lo profano, entre luz y oscuridad, entre Israel y las naciones, entre el séptimo día y los seis días de trabajo).`,
      },
    ],
    reflexion:
      `El Shabat nos enseña que nuestro valor no reside en lo que producimos, sino en lo que somos. Es un acto de fe declarar que el mundo tiene un Creador y que nosotros, al igual que Él, debemos tomarnos un tiempo para simplemente "estar" y disfrutar de Su presencia. Es la única festividad que la Torá llama "un deleite" (Oneg), porque no conmemora un hecho histórico externo, sino la culminación de la propia Creación. El Shabat es el alma del mundo: sin él, la semana es un cuerpo sin espíritu.`,
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
      `Pésaj ("Pasar por encima") es "La Fiesta de la Libertad". Conmemora la redención milagrosa de Israel de la esclavitud en Egipto. El nombre proviene de la última plaga: el Eterno "pasó por encima" (pásaj) las casas de los israelitas marcadas con sangre de cordero, salvando a sus primogénitos. El centro de la festividad es el Séder ("Orden"), una cena ritual donde contamos la historia (Hagadá), comemos Matzá (el pan de la aflicción y la libertad) y Maror (hierbas amargas), transmitiendo el mensaje de esperanza y liberación a las nuevas generaciones. Es la primera de las "Tres Festividades de Peregrinación" (Shalosh Regalim). Es la festividad de la identidad nacional y la fe en la redención. La Matzá recuerda la prisa de la salida —no tuvieron tiempo de dejar que la masa leudara— y la humildad de la libertad recién nacida.`,
    rituales: [
      {
        titulo: 'Kadesh (קדש) — Santificación',
        contenido:
          `Recitar el Kidush sobre la primera copa de vino (Kos Shel Iejad).

Baruj Atá Adonai Eloheinu Melej HaOlam, Borei Pri HaGafen.

(Bendito eres Tú... que creas el fruto de la vid).

Seguido de la bendición de santificación del día festivo.`,
      },
      {
        titulo: 'Urjatz (ורחץ) — Lavado',
        contenido:
          `Lavado de manos sin bendición, como símbolo de pureza antes de empezar el relato sagrado. Se usa un vaso o jarra con agua, vertiendo sobre cada mano alternadamente.`,
      },
      {
        titulo: 'Karpas (כרפס) — Verde',
        contenido:
          `Mojar el perejil, apio o lechuga en agua salada (que representa las lágrimas de la esclavitud). Se recita:

Baruj Atá Adonai Eloheinu Melej HaOlam, Borei Pri HaAdamá.

(Bendito eres Tú... que creas el fruto de la tierra).`,
      },
      {
        titulo: 'Yajatz (יחץ) — Partir',
        contenido:
          `Partir la matzá del medio (la matzá central de las tres que están sobre el mantel). Se retira la mitad más grande y se esconde (Afikomán), que será comida al final del Séder como "postre" y recuerdo del cordero pascual.`,
      },
      {
        titulo: 'Maggid (מגיד) — Relato',
        contenido:
          `Contar la historia de la salida de Egipto. Comienza con la invitación a los hambrientos (Ha Lajmá Anyá — "Este es el pan de la aflicción que comieron nuestros padres en la tierra de Egipto..."). Se lee la Hagadá, se hacen las cuatro preguntas (Ma Nishtaná), y se narra la redención paso a paso. Se beben dos copas de vino más durante esta sección.`,
      },
      {
        titulo: 'Rojtzá (רחצה) — Lavado ritual',
        contenido:
          `Segundo lavado de manos, ahora con la bendición completa:

Baruj Atá Adonai Eloheinu Melej HaOlam, Asher Kidshánu BeMitzvotav VeTzivánu Al Netilat Yadaim.

(Bendito eres Tú... que nos santificaste con sus mandamientos y nos ordenó sobre el lavado de las manos).`,
      },
      {
        titulo: 'Motzi-Matzá (מוציא מצה) — Bendición sobre el pan y la Matzá',
        contenido:
          `Primero se recita la bendición del pan:

Baruj Atá Adonai Eloheinu Melej HaOlam, HaMotzi Lejem Min HaAretz.

(Bendito eres Tú... que sacas el pan de la tierra).

Luego la bendición especial de la Matzá:

Baruj Atá Adonai Eloheinu Melej HaOlam, Asher Kidshánu BeMitzvotav VeTzivánu Al Ajilat Matzá.

(Bendito eres Tú... que nos santificaste con sus mandamientos y nos ordenó comer Matzá).`,
      },
      {
        titulo: 'Maror (מרור) — Hierba amarga',
        contenido:
          `Comer la hierba amarga (generalmente lechuga romana o rábano picante) para recordar la amargura de la esclavitud. Se recita:

Baruj Atá Adonai Eloheinu Melej HaOlam, Asher Kidshánu BeMitzvotav VeTzivánu Al Ajilat Maror.

(Bendito eres Tú... que nos santificaste con sus mandamientos y nos ordenó comer hierbas amargas).`,
      },
      {
        titulo: 'Korej (כורך) — Emparedado de Hilel',
        contenido:
          `Comer Matzá y Maror juntos, como solía hacer el sabio Hilel en los tiempos del Templo. Se toma un pedazo de Matzá y se envuelve con Maror dentro, recordando la práctica original cuando existía el cordero pascual.`,
      },
      {
        titulo: 'Shulján Orej (שולחן עורך) — La mesa servida',
        contenido:
          `La cena festiva propiamente dicha. Se comienza con el huevo duro (Beitzá) en agua salada, y luego el plato principal, que puede incluir pollo asado (como recuerdo del cordero pascual, Zeroá) y otros manjares.`,
      },
      {
        titulo: 'Tzafún (צפון) — El Afikomán oculto',
        contenido:
          `Comer el Afikomán (la matzá escondida desde Yajatz) como "postre" final. Debe ser comido antes de la medianoche. Representa el cordero pascual que se comía al final de la comida en los tiempos del Templo.`,
      },
      {
        titulo: 'Beréj (ברך) — Bendición de la comida',
        contenido:
          `Recitar el Birkat HaMazon (Bendición después de la comida) y beber la tercera copa de vino. Se añaden párrafos especiales de Pésaj en la bendición.`,
      },
      {
        titulo: 'Hallel (הלל) — Alabanza',
        contenido:
          `Recitar los salmos de alabanza (Hallel, Salmos 113-118) y beber la cuarta copa de vino. Se canta con alegría y gratitud por la redención.`,
      },
      {
        titulo: 'Nirtzá (נרצה) — Conclusión aceptada',
        contenido:
          `Concluir el Séder con cánticos tradicionales y la frase:

Leshaná Haba'á B'Yerushalayim!

(¡El año que viene en Jerusalén!).

Esta frase expresa la esperanza de la redención final y la reunificación del pueblo en la Tierra Prometida.`,
      },
    ],
    reflexion:
      `Cada persona tiene su "Egipto" personal: una esclavitud emocional, una adicción, una relación tóxica, un trabajo que nos consume. Pésaj nos invita a preguntarnos: ¿De qué debo liberarme? La Matzá, simple y sin levadura, simboliza la humildad y la ausencia de orgullo inflado. La prisa por hacer el bien es el camino hacia la verdadera redención. No basta con ser libres de algo; hay que ser libres para algo: el servicio al Eterno y el amor al prójimo.`,
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
      `Shavuot ("Semanas" o "Fiesta de las Semanas") es la festividad de la Entrega de la Torá en el Monte Sinaí. Se celebra 50 días después del primer día de Pésaj (7 semanas completas más un día), período conocido como Sefirat HaOmer ("Cuenta del Omer"). Es una fiesta de culminación y compromiso: la libertad física de Pésaj encuentra su propósito en la libertad espiritual de la Torá. En Shavuot, Israel se convierte en un "reino de sacerdotes y una nación santa" (Mamlejet Kohanim VeGoi Kadosh). No tiene fecha fija en la Torá como tal; se calcula a partir de Pésaj, vinculando así la libertad con la responsabilidad. Es la segunda de las "Tres Festividades de Peregrinación". En la tradición rabínica, también se celebra la lectura del libro de Rut, que habla de lealtad, conversión y la cosecha del trigo.`,
    rituales: [
      {
        titulo: 'Sefirat HaOmer (Cuenta del Omer)',
        contenido:
          `Durante 49 días desde el segundo día de Pésaj hasta la víspera de Shavuot, se cuenta cada noche:

Baruj Atá Adonai Eloheinu Melej HaOlam, Asher Kidshánu BeMitzvotav VeTzivánu Al Sefirat HaOmer.

(Bendito eres Tú... que nos santificaste con sus mandamientos y nos ordenó contar el Omer).

Seguido de la cuenta del día ("Hai Iom..."). Este período es también de luto parcial en memoria de la plaga de los discípulos de Rabí Akiva.`,
      },
      {
        titulo: 'Tikún Leil Shavuot (Vigilia nocturna de estudio)',
        contenido:
          `Es una costumbre muy arraigada pasar toda la noche del primer día de Shavuot estudiando Torá. Se leen pasajes de la Torá, los cinco libros, la Mishná, el Zohar, y textos sobre la entrega de la Torá. Se dice que los israelitas se durmieron la noche antes de recibir la Torá, y el Eterno tuvo que despertarlos con truenos; por eso, los judíos se mantienen despiertos toda la noche para "corregir" ese error.`,
      },
      {
        titulo: 'Lectura de las 10 Palabras (Aseret HaDibrot)',
        contenido:
          `En la sinagoga, se lee la porción de la Torá que contiene los Diez Mandamientos (Éxodo 19-20). Se escucha de pie, como si estuviéramos nuevamente en el Monte Sinaí recibiendo la Torá. Comienza con:

Anojí Adonai Eloheija, Asher Hotzeitija MeEretz Mitzráim, MiBeit Avadim.

(Yo soy el Eterno tu Dios, que te saqué de la tierra de Egipto, de la casa de esclavitud).`,
      },
      {
        titulo: 'Meguilat Rut (Libro de Rut)',
        contenido:
          `Se lee el libro de Rut, que ocurre durante la época de la cosecha del trigo (la cosecha de Shavuot). Rut, la moabita, demuestra una lealtad extraordinaria a su suegra Noemí ("A donde tú vayas, iré yo..."), y su conversión al judaísmo la convierte en la bisabuela del rey David. Es un modelo de jesed (bondad incondicional) y de cómo la Torá es para todos los que la buscan sinceramente.`,
      },
      {
        titulo: 'Kidush y Motzi',
        contenido:
          `Se recita el Kidush sobre el vino:

Baruj Atá Adonai Eloheinu Melej HaOlam, Borei Pri HaGafen.

Y el Motzi sobre dos panes (Shtei HaLejem), que representan las dos Tablas de la Ley.

Baruj Atá Adonai Eloheinu Melej HaOlam, HaMotzi Lejem Min HaAretz.`,
      },
      {
        titulo: 'Comidas con productos lácteos',
        contenido:
          `Es costumbre comer alimentos lácteos (queso, leche, blintzes) en Shavuot. Según una tradición, cuando Israel recibió la Torá, las leyes de kashrut (alimentos permitidos) les resultaron tan complejas que prefirieron comer productos lácteos, que son más simples de preparar. Otra interpretación dice que la Torá es como la leche: nutre el alma y es pura.`,
      },
    ],
    reflexion:
      `La Torá no se entregó en una tierra próspera, sino en el desierto. Esto nos enseña que para recibir la Sabiduría divina, debemos despojarnos del orgullo y estar dispuestos a caminar hacia lo desconocido, confiando únicamente en la guía del Creador. La conexión entre Pésaj y Shavuot nos recuerda que la verdadera libertad no es un fin en sí mismo, sino el medio para aceptar una misión y un propósito. Sin la Torá, la libertad se convierte en anarquía; sin la libertad, la Torá se convierte en coerción.`,
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
      `Rosh HaShaná ("Cabeza del Año") es el "Día del Juicio" (Iom HaDin) y el "Día del Recuerdo" (Iom HaZikarón). Es el aniversario de la creación del primer hombre (Adán) y, según la tradición, del universo entero. Es un día de introspección profunda, coronación del Eterno como Rey (Maljut Shamáim) y despertar espiritual. El sonido del Shofar (cuerno de carnero) es su mitzvá central: un llamado a la teshuvá (arrepentimiento) que rompe la dureza del corazón. Se conoce también como Iom Teruá ("Día del Toque del Shofar"). En este día, todos los seres humanos pasan delante del Eterno como ovejas ante el pastor: se abren los libros de la vida y de la muerte, y se inscribe el destino del año venidero. Los diez días siguientes (Iemei Teshuvá) hasta Iom Kipur son un período de arrepentimiento intenso.`,
    rituales: [
      {
        titulo: 'Encendido de Velas (con bendición especial)',
        contenido:
          `Se encienden las velas con la bendición:

Baruj Atá Adonai Eloheinu Melej HaOlam, Asher Kidshánu BeMitzvotav VeTzivánu LeHadlik Ner Shel Iom HaZikarón.

(Bendito eres Tú... que nos santificaste con sus mandamientos y nos ordenó encender la vela del Día del Recuerdo).`,
      },
      {
        titulo: 'Kidush sobre la Jalá redonda',
        contenido:
          `Se recita el Kidush sobre el vino, y luego el Motzi sobre Jalá redonda (en lugar de la trenzada habitual). La forma circular simboliza la corona real, el ciclo completo del año, y la continuidad de la vida. Después de la bendición, se moja la Jalá en miel o azúcar, diciendo:

Ieji Ratzón Milfaneija Adonai Eloheinu VeElohei Avoteinu, SheTijadenu LeShaná Tová UMetuká.

(Que sea Tu voluntad ante Ti, Eterno nuestro Dios y Dios de nuestros padres, que nos renueves para un año bueno y dulce).`,
      },
      {
        titulo: 'Sonido del Shofar (Tekiát HaShofar)',
        contenido:
          `La mitzvá central de Rosh HaShaná. Se tocan 100 toques de Shofar distribuidos en la oración de Musaf (Servicio Adicional). Las tres series principales son:

1. Tekiá — Un sonido largo y sostenido (llamado de realeza y alegría).
2. Shevarim — Tres quejidos medios (gemido del corazón arrepentido).
3. Teruá — Nueve o más toques cortos y rápidos (alarma, despertar espiritual).
4. Tekiá Guerolá — Un toque final muy largo (la redención completa).

Cada serie sigue el patrón: Tekiá, Shevarim-Teruá, Tekiá. El Shofar nos despierta de la rutina espiritual, nos llama al arrepentimiento, y anuncia la coronación divina.`,
      },
      {
        titulo: 'Tashlij (Arrojar los pecados)',
        contenido:
          `El primer día de Rosh HaShaná (o el segundo si cae en Shabat), se va a un río, lago o mar —donde haya agua y peces— para "arrojar" simbólicamente los pecados. Se recita:

Mijam Keil, Mi Kamoja... (¿Quién como Tú, Eterno?...)

Y se sacude el dobladillo de la ropa, como quien se desprende de la suciedad. Los peces simbolizan la abundancia y la fertilidad, y también recuerdan que el ojo divino nunca cierra (como los ojos de los peces).`,
      },
      {
        titulo: 'Oraciones especiales (Iemei Teshuvá)',
        contenido:
          `Durante los diez días entre Rosh HaShaná e Iom Kipur (Iemei Teshuvá), se añaden oraciones especiales:

- Avinu Malkenu ("Nuestro Padre, nuestro Rey"): una plegaria litánica que pide perdón, sanación y redención.
- Zijronot ("Recuerdos"): en la primera parte de la Amidá, se recuerdan los pactos del Eterno con los patriarcas.
- Shofarot: en la segunda parte, se recuerdan los eventos del Monte Sinaí y la redención futura.`,
      },
    ],
    reflexion:
      `El Shofar nos despierta de nuestra rutina espiritual. Su sonido nos recuerda que el tiempo es sagrado y que cada día es una oportunidad única para volver a nuestro Ser esencial y a nuestra misión en la tierra. Es el momento de coronar a Dios como Rey sobre nosotros, reconociendo que toda autoridad y bendición vienen de Él. Rosh HaShaná no es solo un cambio de calendario; es un llamado a la conciencia: ¿Qué hicimos con el año que pasó? ¿Qué haremos con el año que viene?`,
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
      `Iom Kipur ("Día de la Expiación") es el día más sagrado del año judío. Es un "Shabat de Shabatot" (Shabat Shabaton), lo que significa que es el reposo supremo. Es un día de ayuno total (sin comida, bebida, baños, perfumes, relaciones conyugales ni calzado de cuero) y dedicación absoluta a la plegaria y la reconciliación. Es el culmen del proceso de teshuvá (arrepentimiento) iniciado en Rosh HaShaná. En los tiempos del Templo, era el único día en que el Sumo Sacerdote (Kohen Gadol) entraba al Santo de los Santos (Kodesh HaKodashim) para rogar el perdón del pueblo. Es el día en que la misericordia divina prevalece sobre el juicio estricto, y cuando el destino del año venidero se sella definitivamente.`,
    rituales: [
      {
        titulo: 'Kol Nidré (Anulación de votos)',
        contenido:
          `La noche de Iom Kipur comienza con la oración de Kol Nidré, cantada con un tono melancólico y conmovedor. Se recita tres veces, cada vez más fuerte:

Kol Nidré, ViEsarei, ViShevuot, ViHajaramot, ViKonamot, ViJinujim, ViKinusei, UShvuat Sheker, SheNadarana VeHishbana, LeShaná HaBa'á.

(Todos los votos, prohibiciones, juramentos, anatemas, consagraciones, restricciones y promesas de abstinencia que hicimos o juramos el año que viene... sean anulados, perdonados, cancelados, y no tengan valor ni efecto).

Esta oración reconoce que los seres humanos son imperfectos y que a veces hacemos promesas que no podemos cumplir.`,
      },
      {
        titulo: 'Viduy (Confesión colectiva)',
        contenido:
          `Durante todo el día, se recitan las confesiones colectivas en plural, porque todos somos responsables unos de otros:

Ashamnu, Bagadnu, Gazalnu, Dibarnu Dofi, Heeshadnu, VeHirshanu, Zadnu, Jamasnu, Tafalnu Sheker...

(Hemos pecado, hemos traicionado, hemos robado, hemos hablado calumnias, hemos actuado con malicia, hemos sido perversos, hemos sido violentos, hemos mentido...).

Y la confesión más larga:

Al Jet SheJatanu Lefaneija...

(Por el pecado que hemos cometido ante Ti...). Se confiesan pecados del pensamiento, la palabra y la acción; pecados cometidos a sabiendas y por ignorancia.`,
      },
      {
        titulo: 'Avodá (Recuerdo del servicio del Sumo Sacerdote)',
        contenido:
          `Durante la oración de Musaf (Servicio Adicional), se recita detalladamente el ritual del Kohen Gadol (Sumo Sacerdote) en el Templo. Entraba al Santo de los Santos con incienso, sangre de toros y machos cabríos, y rogaba por el perdón de Israel. Se recuerdan los dos chivos expiatorios: uno era sacrificado para el Eterno, y el otro ("para Azazel") era llevado al desierto, cargando simbólicamente los pecados del pueblo.`,
      },
      {
        titulo: 'Neilá (Cierre de las puertas)',
        contenido:
          `La última oración del día, al atardecer, cuando las "puertas del cielo" se están cerrando. Es el momento de máxima intensidad espiritual. Se reza de pie, con el Arca Santa abierta, y se hace un último llamado fervoroso al arrepentimiento. Se dice:

Shema Israel, Adonai Eloheinu, Adonai Ejad.

(Escucha Israel, el Eterno es nuestro Dios, el Eterno es Uno).`,
      },
      {
        titulo: 'Sonido final del Shofar y conclusión',
        contenido:
          `Al terminar el ayuno, cuando aparecen las tres estrellas, se toca un largo Tekiá Guerolá del Shofar, anunciando el perdón y la liberación. Se proclama:

Baruj Shem Kevod Maljutó LeOlam VaEd.

(Bendito sea el nombre de Su glorioso reinado por siempre y para siempre).

Y se canta con esperanza:

Leshaná Haba'á B'Yerushalayim!

(¡El año que viene en Jerusalén!).`,
      },
    ],
    reflexion:
      `Iom Kipur nos enseña que el pecado es un error, no una identidad. Podemos caer, pero siempre podemos levantarnos. La verdadera grandeza del ser humano no está en no errar, sino en la capacidad de reconocer el error, pedir perdón primero a los ofendidos y luego a Dios, y comprometerse sinceramente a ser mejor. Es el día en que la misericordia divina prevalece sobre el juicio estricto. El ayuno no es castigo; es una forma de despojarnos de lo material para enfocarnos en lo espiritual.`,
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
      `Sucot ("Cabañas" o "Enramadas") es "La Fiesta" (Jag) por excelencia. Es una celebración de alegría inmensa (Zeman Simjatenu — "Tiempo de nuestra alegría"). Conmemora las nubes de gloria (Ananei HaKavod) que protegieron a Israel durante los 40 años en el desierto, y la confianza absoluta en la providencia divina. Salimos de nuestras casas seguras para habitar en una Sucá (cabaña temporal con techo de ramas), recordándonos que nuestra seguridad última no está en los muros de ladrillo ni en las cuentas bancarias, sino en la sombra del Eterno. Es una festividad universal: en los tiempos del Templo, se ofrecían 70 toros (uno por cada nación del mundo), simbolizando que la redención es para toda la humanidad. Es la tercera de las "Tres Festividades de Peregrinación".`,
    rituales: [
      {
        titulo: 'Construcción y morada en la Sucá',
        contenido:
          `La Sucá debe tener al menos tres paredes y un techo (Séaj) hecho de ramas, hojas o cañas, que deje ver las estrellas. Debe ser una construcción temporal, no permanente. Se come todas las comidas en la Sucá (y se duerme allí si el clima lo permite). Al entrar, se recita:

Baruj Atá Adonai Eloheinu Melej HaOlam, Asher Kidshánu BeMitzvotav VeTzivánu Leishev BaSucá.

(Bendito eres Tú... que nos santificaste con sus mandamientos y nos ordenó habitar en la Sucá).

Se decora con frutas, guirnaldas y adornos colgantes.`,
      },
      {
        titulo: 'Arbaat HaMinim (Las Cuatro Especies)',
        contenido:
          `Cada día de Sucot (excepto Shabat), se toman las Cuatro Especies:

1. Etrog (אתרוג) — Cidra, parecida a un limón grande, con un pedúnculo (pitom). Representa el corazón.
2. Lulav (לולב) — Rama de palma datilera. Representa la columna vertebral.
3. Hadás (הדס) — Ramas de mirto (tres hojas). Representan los ojos.
4. Aravá (ערבה) — Ramas de sauce. Representan los labios.

Juntas simbolizan distintas partes del cuerpo y distintos tipos de personas en la comunidad, unidas en un solo atado.`,
      },
      {
        titulo: 'Netilat Lulav (Bendición de las Cuatro Especies)',
        contenido:
          `Se toma el Lulav (con mirto y sauce atados) en la mano derecha y el Etrog en la izquierda. Se recita:

Baruj Atá Adonai Eloheinu Melej HaOlam, Asher Kidshánu BeMitzvotav VeTzivánu Al Netilat Lulav.

(Bendito eres Tú... que nos santificaste con sus mandamientos y nos ordenó sobre la toma del Lulav).

Luego se unen las especies y se agitan en las seis direcciones (Este, Sur, Oeste, Norte, Arriba, Abajo), declarando que la presencia divina está en todas partes.`,
      },
      {
        titulo: 'Hoshanot (Plegarias por la lluvia)',
        contenido:
          `Durante los 7 días de Sucot, se marcha alrededor de la bimá (plataforma central de la sinagoga) con las Cuatro Especies, recitando plegarias especiales (Hoshaná) que piden por la lluvia y la bendición. Cada día se dedica una Hoshaná a un patriarca o líder: Abraham, Itzjak, Iaakov, Moisés, Aarón, José, David.

Hoshaná Ana, Hoshia Na!

(Salva ahora, por favor, salva!).`,
      },
      {
        titulo: 'Shemini Atzeret y Simjat Torá',
        contenido:
          `El octavo día (Shemini Atzeret — "Octavo de Retención") es una festividad independiente. Se reza por la lluvia (Tefilat Gueshém) y se celebra la conclusión del ciclo de la Torá.

Simjat Torá ("Alegría de la Torá") es el día siguiente (en la Diáspora), cuando se concluye la lectura del último libro (Devarim) y se comienza inmediatamente con el primero (Bereshit). Se baila con los rollos de la Torá (Sefer Torá) en la sinagoga, cantando y celebrando con gran alegría.`,
      },
    ],
    reflexion:
      `La Sucá es la lección de la humildad y la fe. Nos enseña que todos somos peregrinos en este mundo. La verdadera estabilidad no viene de los muros de ladrillo y las cuentas bancarias, sino de la confianza en la sombra de la fe, la familia y la comunidad que nos rodea. La alegría de Sucot es la alegría de la dependencia total de Dios: cuando dejas de depender de tus propias fuerzas, descubres que hay una Sucá divina que te protege desde arriba.`,
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
      `Janucá ("Rededicación") conmemora la victoria de los Macabeos (la familia Hashmonai) sobre el Imperio Seléucida griego, liderado por Antíoco IV Epífanes, que había profanado el Templo de Jerusalén prohibiendo la práctica judía. La victoria militar fue un milagro, pero el milagro central para la tradición rabínica fue el del aceite: cuando los Macabeos purificaron el Templo, encontraron solo una pequeña cantidad de aceite puro sellado con el sello del Sumo Sacerdote, suficiente para un solo día. Milagrosamente, el aceite ardió durante ocho días, el tiempo necesario para preparar aceite nuevo. Janucá es una celebración de la resistencia espiritual, la identidad judía frente a la asimilación, y el poder de la luz para vencer a la oscuridad.`,
    rituales: [
      {
        titulo: 'Hadlakat HaNerot (Encendido de la Janukiá)',
        contenido:
          `La Janukiá (Menorá de 9 brazos) tiene 8 brazos para las velas de los días y 1 brazo central más alto para el Shamash ("sirviente" o "auxiliar"), que se usa para encender las demás.

Se enciende una vela cada noche, añadiendo una más cada día (de derecha a izquierda, pero encendiendo de izquierda a derecha). Se coloca en una ventana o puerta para "publicitar el milagro" (Pirsumei Nisa).

Se recitan las bendiciones:

1. Baruj Atá Adonai Eloheinu Melej HaOlam, Asher Kidshánu BeMitzvotav VeTzivánu LeHadlik Ner Shel Janucá.

(Bendito eres Tú... que nos santificaste con sus mandamientos y nos ordenó encender la vela de Janucá).

2. Baruj Atá Adonai Eloheinu Melej HaOlam, SheAsá Nissim LaAvoteinu BaYamim HaHem BaZman HaZé.

(Bendito eres Tú... que hiciste milagros a nuestros padres en aquellos días, en esta época).

3. Baruj Atá Adonai Eloheinu Melej HaOlam, SheHejeiánu VeKiyemánu VeHiguiánu LaZman HaZé.

(Bendito eres Tú... que nos has dado vida, nos has mantenido y nos has hecho llegar hasta este momento).

Esta tercera bendición SOLO se recita la primera noche.`,
      },
      {
        titulo: 'Himno Maoz Tzur y Salmo 30',
        contenido:
          `Después del encendido, se canta el himno tradicional Maoz Tzur ("Roca de mi salvación"), que narra la historia de las redenciones de Israel a lo largo de la historia, desde Egipto hasta la victoria de los Macabeos.

También se recita el Salmo 30 (Mizmor Shir Janucat HaBayit — "Salmo para la dedicación de la Casa"), que fue compuesto para la dedicación del Templo original.`,
      },
      {
        titulo: 'Alimentos fritos en aceite',
        contenido:
          `Es costumbre comer alimentos fritos en aceite para recordar el milagro del aceite:

- Sufganiyot (סופגניות): Donuts rellenos de mermelada.
- Levivot (לביבות): Tortillas de papa fritas (conocidas como latkes en yidis).

El aceite simboliza el milagro y la luz que dura más allá de lo esperado.`,
      },
      {
        titulo: 'Sevivon (Dreidel)',
        contenido:
          `Se juega con el dreidel (peonza de cuatro lados), especialmente por los niños. Las letras hebreas en los lados son:

נ (Nun) — ג (Guímel) — ה (Hei) — ש (Shin)

Que forman el acrónimo: Nes Gadol Hayá Sham ("Un gran milagro ocurrió allí"). En Israel, la Shin se reemplaza por Pei (פ), formando: Nes Gadol Hayá Po ("Un gran milagro ocurrió aquí").

Cada letra indica una acción en el juego: Nun (nada), Guímel (toma todo), Hei (toma la mitad), Shin (pone uno).`,
      },
    ],
    reflexion:
      `No necesitamos grandes cantidades de "aceite" o recursos para hacer un gran cambio. A veces, lo que se necesita es un poco de luz genuina y constante. Janucá nos reta a ser esa pequeña llama que, con fe, puede iluminar una casa, una comunidad y el mundo entero. La luz de la Torá y la tradición nunca se apaga, incluso en la oscuridad más profunda del exilio. La historia de los Macabeos nos recuerda que cuando la fe parece más débil, es cuando puede producir los milagros más grandes.`,
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
      `Purim ("Suertes" o "Dados") celebra la salvación milagrosa del pueblo judío en el imperio persa, narrada en el libro de Ester (Meguilat Ester). Es una historia de redención oculta (Jesed Nistar): el nombre de Dios no aparece explícitamente en todo el libro, pero Su mano guía los eventos a través de la naturaleza, el azar y la astucia humana. Hamán, el villano, echó suertes (purim) para determinar el día de la destrucción de los judíos, pero el Eterno convirtió esas mismas suertes en salvación. Purim se caracteriza por la alegría desbordante, el disfraz (que simboliza el ocultamiento de la identidad divina y la revelación de la verdad), y las mitzvot de hermandad y caridad.`,
    rituales: [
      {
        titulo: 'Keriá HaMeguilá (Lectura del Libro de Ester)',
        contenido:
          `Se lee la Meguilá (rollo de Ester) dos veces: la noche del 14 de Adar y la mañana del día siguiente. Se lee de un rollo escrito a mano sobre pergamino, como la Torá.

Cada vez que se menciona el nombre de Hamán, la congregación hace ruido con groguers (matracas), silbatos, palmas o golpes para "borrar su nombre", cumpliendo con el mandamiento de Deuteronomio 25:19:

Timjé et Zejer Amalek Mitajat HaShamáim, Al Tishkaj.

(Borrarás el recuerdo de Amalek de debajo del cielo; no olvides).`,
      },
      {
        titulo: 'Mishloaj Manot (Envío de porciones)',
        contenido:
          `Se envían regalos de al menos dos tipos de alimentos comestibles (uno debe estar listo para comer, no requiere preparación) a un amigo o vecino. Esto fortalece los lazos comunitarios.

Se basa en Ester 9:22:

U'Mishloaj Manot Ish LeRe'eihu.

(Y enviar porciones cada uno a su amigo).

La idea es que nadie esté solo en Purim: todos deben tener con quién celebrar.`,
      },
      {
        titulo: 'Matanot LaEvyonim (Regalos a los pobres)',
        contenido:
          `Se da caridad (dinero o comida) a al menos dos personas necesitadas. Esta es considerada la mitzvá más importante del día, porque asegura que todos, ricos y pobres, puedan celebrar Purim con alegría.

La idea es que la alegría de Purim no sea un privilegio de quienes tienen recursos, sino un derecho de todo el pueblo.`,
      },
      {
        titulo: 'Seudat Purim (Comida festiva)',
        contenido:
          `Se celebra una comida abundante durante el día de Purim. Es costumbre beber vino (o bebidas alcohólicas) "hasta no poder distinguir entre Bendito sea Mordejai (Baruj Mordejai) y Maldito sea Hamán (Arur Hamán)".

Esto no es un llamado a la embriaguez irresponsable, sino a la anulación del juicio estricto: cuando la alegría espiritual es tan profunda que las distinciones entre bendición y maldición desaparecen, porque todo proviene del Eterno y todo conduce a la redención.

La comida incluye platos tradicionales como Hamantaschen ("Orejas de Hamán" — pasteles triangulares rellenos de amapola, frutas o chocolate).`,
      },
    ],
    reflexion:
      `Purim nos enseña que Dios está presente incluso en los momentos en que no vemos Su rostro. La historia de Ester es un recordatorio de que todos tenemos un rol en el drama de la historia; a veces, "llegamos al reino para tal tiempo como este" (Ester 4:14), y debemos alzar la voz por la justicia y el bien. La alegría de Purim no es frivolidad, sino la profunda certeza de que, incluso en el exilio y en el aparente caos, el plan divino se cumple. Cuando todo parece azar, el Eterno está tejiendo la redención.`,
    img: 'images/moed-purim.jpg',
  },
]

export const MOEDIM_POR_ID = Object.fromEntries(MOEDIM.map((m) => [m.id, m])) as Record<string, Moed>
