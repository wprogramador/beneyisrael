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

export const seccionesBirkotHashajar: SeccionSidur[] = [
  {
    id: "mode-ani",
    titulo: "1. Modé Ani",
    subtitulo: "Al despertar",
    bloques: [
      {
        nota: "Se recita inmediatamente al abrir los ojos, antes incluso de lavarse las manos, ya que expresa agradecimiento por el alma que ha sido devuelta.",
        hebreo: "מודה אני לפניך מלך חי וקיים שהחזרת בי נשמתי בחמלה, רבה אמונתך.",
        fonetica: "Modé ani lefaneja, melej jai vikajam, shejajarta bi nishmati bejemla, raba emunateja.",
        espanol: "Te doy gracias ante Ti, Rey viviente y eterno, que has devuelto en mí mi alma con compasión; grande es Tu fidelidad."
      },
      {
        hebreo: "",
        fonetica: "",
        espanol: "Esta breve oración se dice en el mismo instante en que abrimos los ojos. Reconocemos que el sueño es una experiencia de muerte menor —durante la noche el alma asciende y el cuerpo queda inerte— y agradecemos que Dios, en Su misericordia, nos haya devuelto la vida. La frase \"raba emunateja\" (grande es Tu fidelidad) alude a que cada mañana Dios cumple Su promesa de sostener la creación."
      }
    ]
  },
  {
    id: "netilat-yadayim",
    titulo: "2. Netilat Yadayim",
    subtitulo: "Lavado de manos",
    bloques: [
      {
        nota: "Se lavan las manos tres veces alternadas (derecha-izquierda), sin bendición previa. Después del lavado se dice:",
        hebreo: "ברוך אתה ה\', אלהינו מלך העולם, אשר קדשנו במצותיו וצונו על נטילת ידים.",
        fonetica: "Baruj ata Adonai, Eloheinu melej haolam, asher kideshanu bemitzvotav vetzivanu al netilat jadaim.",
        espanol: "Bendito eres Tú, Adonai, nuestro Dios, Rey del universo, que nos santificaste con Tus mandamientos y nos ordenaste sobre el lavado de las manos."
      },
      {
        hebreo: "",
        fonetica: "",
        espanol: "Al despertar, las manos están impuras debido al sueño, pues durante la noche el alma se eleva y un espíritu de impureza reposa sobre el cuerpo. El lavado ritual con un recipiente —no bajo la llave directa— purifica las manos para que puedan servir en santidad durante el día. La costumbre es no caminar cuatro pasos antes de lavarse, ni tocar orificios del cuerpo ni alimentos."
      }
    ]
  },
  {
    id: "eloai-neshama",
    titulo: "3. Elohai Neshama",
    subtitulo: "Bendición del alma",
    bloques: [
      {
        hebreo: "אלהי נשמה שנתת בי טהורה היא. אתה בראתה, אתה יצרתה, אתה נפחתה בי, ואתה משמרה בקירבי, ואתה עתיד לטלה ממני, ולהחזירה בי לעתיד לבוא. כל זמן שהנשמה בקירבי מודה אני לפניך ה\' אלהי ואלהי אבותי ואמותי, רבון כל העולמים אדון כל הנשמות. ברוך אתה ה\', המחזיר נשמות לפגרים מתים.",
        fonetica: "Elohai neshama shenatata bi tehora hi. Ata berata, ata yatzarta, ata nefjata bi, veata mishmara bikirbi, veata atid letela mimení, ulejajzira bi leatid lavo. Kol zman shehaneshama bikirbi modé ani lefaneja, Adonai Elohai veElohai avotai veimotai, Ribon kol haolamim, Adon kol hanejhamot. Baruj ata Adonai, hamejazir neshamot lefagarim metim.",
        espanol: "Dios mío, el alma que pusiste en mí es pura. Tú la creaste, Tú la formaste, Tú la soplaste en mí, y Tú la guardas dentro de mí; y Tú has de quitármela, y devolvérmela en el futuro por venir. Todo el tiempo que el alma esté dentro de mí, te doy gracias ante Ti, Adonai, Dios mío y Dios de mis padres y madres, Soberano de todos los mundos, Señor de todas las almas. Bendito eres Tú, Adonai, que devuelves las almas a los cuerpos sin vida."
      },
      {
        hebreo: "",
        fonetica: "",
        espanol: "Esta bendición profundiza en la naturaleza del alma. Afirma que el alma es una chispa divina inyectada directamente por Dios —\"Tú la soplaste en mí\"— y por tanto es intrínsecamente pura. Aunque el cuerpo pueda errar, el alma permanece intacta. También recordamos la resurrección: así como Dios nos devuelve el alma cada mañana, en el futuro la devolverá a los cuerpos para la vida eterna."
      }
    ]
  },
  {
    id: "asher-yatzar",
    titulo: "4. Asher Yatzar",
    subtitulo: "Bendición de las funciones corporales",
    bloques: [
      {
        nota: "Se dice después de usar el baño.",
        hebreo: "ברוך אתה ה\', אלהינו מלך העולם, אשר יצר את האדם בחכמה, וברא בו נקבים נקבים, חלולים חלולים, גלוי וידוע לפני כסא כבודך, שאם יפתח אחד מהם או יסתם אחד מהם, אי אפשר להתקיים ולעמוד לפניך אפילו שעה אחת. ברוך אתה ה\', רופא כל בשר ומפליא לעשות.",
        fonetica: "Baruj ata Adonai, Eloheinu melej haolam, asher yatzar et haadam bejhma, uvara vo nekabim nekabim, julim julim, galui vejadu lifnei kise kevodeja, sheim jiftaj ejad mejem o jistam ejad mejem, efshar lehitkayem velaamod lefaneja afilu shaá ajat. Baruj ata Adonai, rofe kol basar umfale laasot.",
        espanol: "Bendito eres Tú, Adonai, nuestro Dios, Rey del universo, que formaste al ser humano con sabiduría, y creaste en él orificios y conductos, huecos y canales, manifiestos y conocidos ante el Trono de Tu gloria. Que si se abriera uno de ellos o se cerrara uno de ellos, sería imposible existir y permanecer ante Ti ni siquiera una hora. Bendito eres Tú, Adonai, que sanas toda carne y haces maravillas."
      },
      {
        hebreo: "",
        fonetica: "",
        espanol: "Esta bendición nos enseña a ver la sabiduría divina incluso en las funciones más \"mundanas\" del cuerpo. El cuerpo humano es un sistema de canales y válvulas de una precisión asombrosa; un solo conducto obstruido pone en riesgo la vida. Al reconocerlo, transformamos un acto fisiológico en un momento de contemplación de la grandeza del Creador. La frase final —\"haces maravillas\"— alude a que la curación y el funcionamiento del cuerpo son milagros cotidianos."
      }
    ]
  },
  {
    id: "pokeaj-ivrim",
    titulo: "5. Pokeaj Ivrim",
    subtitulo: "Abre los ojos de los ciegos",
    bloques: [
      {
        hebreo: "ברוך אתה ה\', אלהינו מלך העולם, פוקח עורים.",
        fonetica: "Baruj ata Adonai, Eloheinu melej haolam, pokeaj ivrim.",
        espanol: "Bendito eres Tú, Adonai, nuestro Dios, Rey del universo, que abres los ojos de los ciegos."
      },
      {
        hebreo: "",
        fonetica: "",
        espanol: "Al abrir los ojos cada mañana, reconocemos que la vista es un regalo, no un derecho. Físicamente, abrimos los párpados; espiritualmente, pedimos que se iluminen nuestros ojos para ver la realidad más allá de la apariencia material. También alude a la futura redención, cuando \"los ojos de los ciegos serán abiertos\" (Isaías 35:5)."
      }
    ]
  },
  {
    id: "malbish-arumim",
    titulo: "6. Malbish Arumim",
    subtitulo: "Viste a los desnudos",
    bloques: [
      {
        hebreo: "ברוך אתה ה\', אלהינו מלך העולם, מלביש ערומים.",
        fonetica: "Baruj ata Adonai, Eloheinu melej haolam, malbish arumim.",
        espanol: "Bendito eres Tú, Adonai, nuestro Dios, Rey del universo, que vistes a los desnudos."
      },
      {
        hebreo: "",
        fonetica: "",
        espanol: "Al vestirnos, agradecemos no solo la ropa que cubre nuestro cuerpo, sino también la dignidad humana que Dios otorga. El primer acto de Dios con Adán y Javá después de la transgresión fue vestirlos (Génesis 3:21), mostrando que la vestimenta es un acto de compasión divina que preserva el honor del ser humano."
      }
    ]
  },
  {
    id: "matir-asurim",
    titulo: "7. Matir Asurim",
    subtitulo: "Libera a los presos",
    bloques: [
      {
        hebreo: "ברוך אתה ה\', אלהינו מלך העולם, מתיר אסורים.",
        fonetica: "Baruj ata Adonai, Eloheinu melej haolam, matir asurim.",
        espanol: "Bendito eres Tú, Adonai, nuestro Dios, Rey del universo, que liberas a los presos."
      },
      {
        hebreo: "",
        fonetica: "",
        espanol: "Esta bendición se dice al estirarse y enderezarse al levantarse. Durante la noche el cuerpo estuvo \"encarcelado\" por el sueño, inmóvil y sin voluntad. Al despertar, somos liberados de esa prisión. También es una oración por quienes están literalmente presos, y por la liberación espiritual del alma de las cadenas del materialismo."
      }
    ]
  },
  {
    id: "zokef-kefufim",
    titulo: "8. Zokef Kefufim",
    subtitulo: "Endereza a los encorvados",
    bloques: [
      {
        hebreo: "ברוך אתה ה\', אלהינו מלך העולם, זוקף כפופים.",
        fonetica: "Baruj ata Adonai, Eloheinu melej haolam, zokef kefufim.",
        espanol: "Bendito eres Tú, Adonai, nuestro Dios, Rey del universo, que enderezas a los encorvados."
      },
      {
        hebreo: "",
        fonetica: "",
        espanol: "Se recita al sentarse o enderezarse en la cama. Durante el sueño estamos encorvados e inertes; al levantarnos, Dios nos da la fuerza para erguirnos. Espiritualmente, alude a enderezar la postura moral del ser humano, sacarlo de la joroba del orgullo o la sumisión excesiva, y darle dignidad erguida."
      }
    ]
  },
  {
    id: "roka-haaretz",
    titulo: "9. Roka HaAretz Al HaMayim",
    subtitulo: "Aplana la tierra sobre las aguas",
    bloques: [
      {
        hebreo: "ברוך אתה ה\', אלהינו מלך העולם, רוקע הארץ על המים.",
        fonetica: "Baruj ata Adonai, Eloheinu melej haolam, rokea haaretz al hamaim.",
        espanol: "Bendito eres Tú, Adonai, nuestro Dios, Rey del universo, que aplana la tierra sobre las aguas."
      },
      {
        hebreo: "",
        fonetica: "",
        espanol: "Al poner los pies en el suelo, reconocemos el milagro de caminar sobre tierra firme. Según la creación bíblica, las aguas primordiales cubrían todo, y Dios dispuso que la tierra se concentrara para que el ser humano pudiera habitarla. Cada paso sobre el suelo es un testimonio de que Dios mantiene la creación en equilibrio."
      }
    ]
  },
  {
    id: "sheasa-li",
    titulo: "10. SheAsa Li Kol Tzorki",
    subtitulo: "Que hizo para mí todas mis necesidades",
    bloques: [
      {
        hebreo: "ברוך אתה ה\', אלהינו מלך העולם, שעשה לי כל צרכי.",
        fonetica: "Baruj ata Adonai, Eloheinu melej haolam, sheasa li kol tzorki.",
        espanol: "Bendito eres Tú, Adonai, nuestro Dios, Rey del universo, que hizo para mí todas mis necesidades."
      },
      {
        hebreo: "",
        fonetica: "",
        espanol: "Se dice al calzarse los zapatos o al prepararse para salir. Reconocemos que Dios provee todo lo necesario para la vida: calzado que protege de piedras y espinas, ropa contra el frío, alimento, refugio. También alude a las necesidades espirituales: Torah, mitzvot y herramientas para el servicio divino."
      }
    ]
  },
  {
    id: "hamejin-gevurot",
    titulo: "11. HaMejin Gevurot",
    subtitulo: "Que provee de fuerzas",
    bloques: [
      {
        hebreo: "ברוך אתה ה\', אלהינו מלך העולם, המכין גבורות.",
        fonetica: "Baruj ata Adonai, Eloheinu melej haolam, hamejin gevurot.",
        espanol: "Bendito eres Tú, Adonai, nuestro Dios, Rey del universo, que provee de fuerzas."
      },
      {
        hebreo: "",
        fonetica: "",
        espanol: "Dios no solo nos da fuerza física para levantarnos, sino que \"prepara\" (mejin) las fuerzas que necesitaremos durante todo el día. Es como un ejército que recibe provisiones antes de la batalla. Cada mañana Dios renueva nuestras energías físicas, emocionales y espirituales para enfrentar los desafíos del día."
      }
    ]
  },
  {
    id: "oter-israel",
    titulo: "12. Oter Israel BeTifara",
    subtitulo: "Corona a Israel con esplendor",
    bloques: [
      {
        hebreo: "ברוך אתה ה\', אלהינו מלך העולם, עוטר את ישראל בתפארה.",
        fonetica: "Baruj ata Adonai, Eloheinu melej haolam, oter et Israel betifara.",
        espanol: "Bendito eres Tú, Adonai, nuestro Dios, Rey del universo, que coronas a Israel con esplendor."
      },
      {
        hebreo: "",
        fonetica: "",
        espanol: "Se dice al cubrirse la cabeza —ya sea con kipá, sombrero o cualquier cobertura— o simplemente al reconocer la dignidad del pueblo de Israel. La \"corona\" no es de oro, sino de Torah y mitzvot. El ser humano, creado a imagen divina, lleva una corona invisible de santidad. También alude a la tefilín, que se colocan sobre la cabeza como una corona."
      }
    ]
  },
  {
    id: "hanoten-lajaef",
    titulo: "13. Hanoten LaJefesh",
    subtitulo: "Que da al cansado fuerza",
    bloques: [
      {
        hebreo: "ברוך אתה ה\', אלהינו מלך העולם, הנותן ליעף כח.",
        fonetica: "Baruj ata Adonai, Eloheinu melej haolam, hanoten lajaef koaj.",
        espanol: "Bendito eres Tú, Adonai, nuestro Dios, Rey del universo, que das al cansado fuerza."
      },
      {
        hebreo: "",
        fonetica: "",
        espanol: "Esta bendición reconoce que el despertar no es automático. El cuerpo despierta fatigado, y solo la energía divina nos permite levantarnos con vigor. \"Jefesh\" (cansado) se refiere tanto al cansancio físico como al agotamiento del exilio espiritual. Dios renueva nuestras fuerzas como las de un águila (Isaías 40:31)."
      }
    ]
  },
  {
    id: "hamaavir-sheina",
    titulo: "14. HaMaavir Sheina",
    subtitulo: "Que remueve el sueño",
    bloques: [
      {
        hebreo: "ברוך אתה ה\', אלהינו מלך העולם, המעביר שנה מעיני, ותנומה מעפעפי.",
        fonetica: "Baruj ata Adonai, Eloheinu melej haolam, hamaavir sheina meenai, vetnuma meafapei.",
        espanol: "Bendito eres Tú, Adonai, nuestro Dios, Rey del universo, que remueves el sueño de mis ojos y el sopor de mis párpados."
      },
      {
        hebreo: "",
        fonetica: "",
        espanol: "El sueño es una sombra de la muerte. Al despertar, Dios \"pasa\" (maavir) esa sombra para que podamos funcionar. Los ojos y los párpados son mencionados específicamente porque son la primera señal de vigilia: cuando los párpados se abren, comienza la conciencia. Es una transición del mundo de los sueños —donde el alma viaja— al mundo de la acción."
      }
    ]
  },
  {
    id: "birkat-hatorah",
    titulo: "15. Birkat HaTorah",
    subtitulo: "Bendición de la Torah",
    bloques: [
      {
        nota: "Se dice antes de estudiar Torah por primera vez en el día.",
        hebreo: "ברוך אתה ה\', אלהינו מלך העולם, אשר קדשנו במצותיו וצונו לעסוק בדברי תורה.",
        fonetica: "Baruj ata Adonai, Eloheinu melej haolam, asher kideshanu bemitzvotav vetzivanu laasok bedivrei Torah.",
        espanol: "Bendito eres Tú, Adonai, nuestro Dios, Rey del universo, que nos santificaste con Tus mandamientos y nos ordenaste ocuparnos en las palabras de la Torah."
      },
      {
        hebreo: "",
        fonetica: "",
        espanol: "Esta bendición transforma el estudio en un acto sagrado. No es una simple adquisición de conocimiento, sino una \"ocupación\" (laasok) —un compromiso total— con las palabras de la Torah. Al recitarla, reconocemos que la sabiduría de la Torah es el alimento espiritual del día, tan necesario como el pan físico."
      }
    ]
  },
  {
    id: "fonetica",
    titulo: "Notas sobre la fonética sefardí",
    bloques: [
      {
        hebreo: "",
        fonetica: "",
        espanol: "ח — j (aspirada, como en jamón) — ej: jai (vida)\nכ (sin dagesh) — j — ej: jol (todo)\nק — k dura — ej: kadosh\nכּ — k — ej: kol\nצ — ts — ej: mitsva\nתּ — t dura — ej: torah\nשׁ — sh — ej: shalom\nשׂ — s — ej: sara\nע — gutural suave o silenciosa\nט — t enfática — ej: tov"
      }
    ]
  }
]
