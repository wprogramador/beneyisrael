import { REFLEXIONES_BERESHIT } from './reflexiones_part1'
import { REFLEXIONES_SHEMOT, REFLEXIONES_VAYIKRA } from './reflexiones_part2'
import { REFLEXIONES_BEMIDBAR, REFLEXIONES_DEVARIM } from './reflexiones_part3'
import type { Reflexion } from './reflexionesTypes'

export type { Reflexion }

export interface LibroTorah {
  nombre: string
  hebreo: string
  reflexiones: Reflexion[]
}

export const LIBROS: LibroTorah[] = [
  { nombre: 'Bereshit · Génesis', hebreo: 'בראשית', reflexiones: REFLEXIONES_BERESHIT },
  { nombre: 'Shemot · Éxodo', hebreo: 'שמות', reflexiones: REFLEXIONES_SHEMOT },
  { nombre: 'Vayikrá · Levítico', hebreo: 'ויקרא', reflexiones: REFLEXIONES_VAYIKRA },
  { nombre: 'Bemidbar · Números', hebreo: 'במדבר', reflexiones: REFLEXIONES_BEMIDBAR },
  { nombre: 'Devarim · Deuteronomio', hebreo: 'דברים', reflexiones: REFLEXIONES_DEVARIM },
]

export const TODAS_LAS_REFLEXIONES: Reflexion[] = LIBROS.flatMap((l) => l.reflexiones)

// Comentarios cortos para la tarjeta de portada (uno por parashá, mismo orden)
export const COMENTARIOS_CORTOS: Record<string, string> = {
  bereshit: 'Antes de la luz hubo una palabra, y antes de la palabra, un propósito. Cada semana que comenzamos la Torá de nuevo, recordamos que también nosotros podemos volver a empezar.',
  noaj: 'Noaj no salvó al mundo; salvó una semilla. Al Eterno le bastan un arca, una familia y una paloma para reiniciar la creación. Tu fidelidad, aunque parezca mínima, es el arca de alguien.',
  'lej-leja': 'El Eterno no entrega el mapa completo; entrega el próximo paso. Quien exige ver todo el camino antes de caminar, jamás sale de Harán. El mapa se revela caminando.',
  vayera: 'Avraham interrumpió la visita del Eterno para atender a tres extraños, y la tradición concluyó: recibir al prójimo es aún mayor que recibir a la Shejiná. Mantén tu puerta abierta.',
  'jaye-sara': 'Sará esperó noventa años por un hijo, y cuando llegó, nombró la paradoja: "Risa me ha hecho Elohim". La espera larga no mata la alegría: la destila.',
  toldot: 'Esaú vendió la eternidad por un plato de lentejas — no por hambre, sino por desprecio. Cada día elegimos entre la primogenitura invisible y el guiso inmediato.',
  vayetze: 'Yaakov durmió sobre una piedra y soñó con una escalera: los lugares más duros pueden ser la puerta del cielo. Donde tú ves una piedra, el Eterno ve un Beit El.',
  vayishlaj: 'Yaakov luchó toda la noche y amaneció cojo, pero con un nombre nuevo: Israel. Las batallas más importantes dejan cicatriz y bendición juntas.',
  vayeshev: 'Ni la fosa ni la prisión pudieron borrar el sueño de Yosef. Hay destinos que los hombres intentan enterrar y la tierra misma los devuelve floreciendo.',
  miketz: 'En una mañana, Yosef pasó del calabozo al palacio. Cada año en la cárcel era una lección del idioma del trono. La cárcel era la escuela.',
  vayigash: 'El perdón de Yosef no negó el daño; descubrió que el daño fue también mensajero. Cuando miró atrás, ya no vio una fosa: vio un puente.',
  vayeji: 'Yaakov cruzó las manos sobre los nietos: el Eterno no firma nuestros órdenes de nacimiento. Su elección sorprende a las costumbres, pero nunca a Su propósito.',
  shemot: 'Una madre escondió a su hijo en un cesto de juncos y lo confió al río. La redención siempre nace flotando en aguas inciertas, mecida por manos que confían.',
  vaera: 'Las plagas fueron el desfile de los ídolos egipcios cayendo uno a uno. Todo lo que adoramos como dios, el Eterno lo puede convertir en polvo.',
  bo: 'Antes de salir de la esclavitud, Israel recibió el calendario: el esclavo no posee sus días; el hombre libre santifica su tiempo. El calendario hebreo es un acta de libertad.',
  beshalaj: 'Las aguas no se abrieron hasta que Najshón entró al mar. Los milagros esperan a veces un primer paso hacia el agua. La fe es mojarse primero.',
  itro: '"Haremos y escucharemos": Israel puso la acción antes que la comprensión. Hay verdades que solo se entienden desde adentro de la obediencia.',
  mishpatim: 'Después del Sinaí vienen las leyes de los esclavos, los huérfanos y las viudas: una Torá que no protege al desamparado no es Torá, es religión de palabra vacía.',
  teruma: '"Me harán un santuario y habitaré entre ellos" — no dijo "en él", sino "entre ellos". El Eterno no busca edificios; busca corazones ofrendados.',
  tetzave: 'El aceite de la menorá debía ser machacado: el olivo solo da su luz cuando es prensado. Hay vidas quebrantadas que iluminan más que las vidas enteras.',
  'ki-tisa': 'El becerro de oro nació de la impaciencia: no soportamos al Dios invisible que se demora. El Eterno escribe con mano lenta, pero con tinta eterna.',
  vayakhel: 'El pueblo trajo tanto que Moshé tuvo que decir "basta": la única vez en la Torá que hubo que frenar la generosidad. Cuando el corazón despierta, la abundancia desborda.',
  pekudei: 'Se contó hasta el último gancho del Mishkán, y cuando todo estuvo en su lugar, la nube descendió. La gloria no visita la improvisación; visita el orden hecho con amor.',
  vayikra: 'Los sacrificios no alimentan al Eterno; transforman al que los trae. Hoy nuestros sacrificios son la plegaria y la misericordia — y siguen teniendo aroma que sube al cielo.',
  tzav: 'El fuego del altar debía arder continuamente: el fuego de ayer no sirve para hoy. La fe no se hereda encendida; se aviva cada día, cada uno con su propia leña.',
  shemini: 'Nadav y Avihú ofrecieron "fuego extraño": el entusiasmo sin instrucción es peligroso en las cosas santas. No todo fervor es obediencia.',
  tazria: 'La mancha debía declararla el sacerdote, no el enfermo: nadie es juez imparcial de sus propias manchas. Por eso existe la comunidad: nadie se diagnostica a solas.',
  metzora: 'El leproso sanado traía dos pájaros: uno moría, otro volaba libre. Toda sanación es así — algo muere y algo vuela. Suelta el pájaro y no mires atrás.',
  'ajarei-mot': 'El chivo de Azazel llevaba los pecados al desierto: hay cargas que no se resuelven analizándolas — se resuelven soltándolas donde ya no vuelven.',
  kedoshim: '"Santos seréis" se define con espigas para el pobre, salarios a tiempo y amor al prójimo. La Torá mide la espiritualidad por la generosidad.',
  emor: 'Las moedim son citas agendadas por el Dueño del tiempo. Cada fiesta es una cita del Rey con Su pueblo: no llegues tarde.',
  behar: '"Mía es la tierra; forasteros y peregrinos sois vosotros conmigo". Somos inquilinos del mundo, no dueños. Vivir así cambia la forma de pisar la tierra.',
  bejukotai: '"Estando en la tierra de sus enemigos, no los desecharé". La alianza es más terca que nuestras caídas: depende de Su carácter, no de nuestra perfección.',
  bemidbar: 'El censo se hizo "por número de nombres": en el campamento del Eterno nadie es una cifra, todos son un nombre. Ser contado por Dios es ser amado por Dios.',
  naso: 'La bendición sacerdotal lleva tres mil años pronunciándose sobre Israel. Bendecir no es desear suerte: es poner el Nombre sobre alguien y dejar que Él cumpla.',
  behaalotja: 'Aarón elevaba las lámparas hasta que ardieran solas: enseñar es encender a otros hasta que ardan por sí mismos. Lámparas que encienden lámparas.',
  shelaj: 'Diez espías vieron gigantes; dos vieron uvas. "Éramos a nuestros propios ojos como langostas": el desprecio propio siempre se proyecta.',
  koraj: 'Kóraj usó lenguaje de igualdad buscando el puesto de Aarón. La rebeldía espiritual casi nunca dice su verdadero motivo: se viste de justicia.',
  jukat: 'La vaca roja no se explica: se obedece. No toda la sabiduría cabe en nuestra lógica — y eso también es un alivio.',
  balak: 'Bilam vino a maldecir y salió bendiciendo: "Cuán hermosas son tus tiendas, Yaakov". A veces los que vinieron a destruirnos escriben nuestra liturgia.',
  pinjas: 'Las hijas de Tzelofjad reclamaron su herencia y el Eterno les dio la razón: "Bien dicen". La valentía bien educada cambia la legislación del Cielo.',
  matot: '"No quebrantará su palabra": la palabra dada es un altar invisible. Que nuestro sí sea sí, y nuestro no, no.',
  masei: 'Cuarenta y dos estaciones del desierto, listadas una por una: ninguna etapa fue inútil. Algún día leeremos nuestra lista y entenderemos cada parada.',
  devarim: 'Once días debía durar el viaje; duró cuarenta años. La diferencia entre el calendario de Dios y el nuestro no es la distancia: es la obediencia.',
  vaetjanan: 'El primer mandamiento del Shemá no es "cree", es "escucha": la fe entra por el oído. Antes de hablar de Dios, hay que oír a Dios.',
  eikev: '"Eikev" significa talón: hasta los mandamientos que el hombre pisa como polvo son escalones hacia el cielo. La grandeza se construye con fidelidades diminutas.',
  ree: '"Mira, pongo delante de ti la bendición y la maldición": cada día es un Gerizim y un Eval, y elegimos con los pies. Sin libertad no hay amor verdadero.',
  shoftim: '"Justicia, justicia perseguirás": se repite dos veces — una por los medios, otra por los fines. La corrupción no empieza en el ladrón; empieza en el regalo pequeño.',
  'ki-tetze': '"No podrás esconderte": ver el buey perdido del vecino y hacerse el distraído es una forma de robo. La Torá criminaliza la indiferencia.',
  'ki-tavo': 'Las primicias venían con una confesión: "Un arameo errante fue mi padre". Quien olvida que fue esclavo en Egipto termina haciendo esclavos.',
  nitzavim: '"No está en el cielo… muy cerca de ti está la palabra, en tu boca y en tu corazón". No necesitas intermediarios para acercarte al Eterno.',
  vayelej: 'Moshé escribió la Torá completa y la entregó antes de morir: los grandes líderes no se aferran al cargo, preparan el relevo.',
  haazinu: 'El último mensaje de Moshé fue un cántico: "Destile como el rocío mi palabra". La enseñanza verdadera cae suave, empapa lento y hace brotar.',
  'vezot-haberaja': 'El último acto de Moshé no fue reclamar, fue bendecir. Morir bendiciendo es celebrar el futuro de otros aunque no te incluya.',
}
