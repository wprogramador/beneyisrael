export default function TorahFooter() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-8 text-center">
        <p className="torah-display text-base font-semibold text-stone-700">
          Torá con comentarios · Centro de Estudios Hebraicos Bene Israel Venezuela
        </p>
        <p className="mt-2 text-xs leading-relaxed text-stone-400">
          Texto en español y comentarios: fuente Jumash original · Texto hebreo: Miqra according to
          the Masorah, vía Sefaria (CC-BY-SA) · Rangos de parashá validados contra Sefaria
        </p>
      </div>
    </footer>
  )
}
