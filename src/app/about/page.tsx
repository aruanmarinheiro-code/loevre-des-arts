import Link from "next/link";

export const metadata = {
  title: "Sobre — Loevre des Arts",
  description: "Uma marca construída em torno de imagens clássicas, algodão pesado e silhuetas oversized.",
};

export default function AboutPage() {
  return (
    <div className="pt-12">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-8 py-12 md:py-20 border-b border-black/10">
        <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-black/30 mb-6">Loevre des Arts</p>
        <h1 className="font-serif text-[clamp(3.5rem,9vw,8rem)] text-black leading-[0.88]">
          Sobre<br /><em>a marca.</em>
        </h1>
      </div>

      <div className="max-w-screen-2xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-7">
            <p className="font-serif text-2xl md:text-3xl text-black leading-relaxed mb-10">
              Uma marca construída em torno de imagens clássicas, algodão pesado e silhuetas oversized. Cada peça transforma uma obra histórica em um uniforme contemporâneo — entre o pôster de museu, o objeto de galeria e o essencial do streetwear.
            </p>

            <div className="space-y-5 font-sans text-xs text-black/50 leading-relaxed max-w-prose">
              <p>
                Trabalhamos exclusivamente com obras do Renascimento italiano — um período que definiu a cultura visual ocidental por cinco séculos. Michelangelo, Rafael, Botticelli, Leonardo. Nomes tão incorporados ao cânone que funcionam quase como arquétipos.
              </p>
              <p>
                Nosso processo começa no arquivo. Cada obra é extraída de reproduções de nível museal, tratada como documento primário e impressa com precisão em algodão natural. O resultado não é uma reprodução licenciada. É um estudo — uma interpretação vestível de um artefato histórico.
              </p>
              <p>
                A peça em si é parte do conceito. 280gsm de algodão pesado. Caimento oversized. Tom natural off-white. Um suporte neutro para imagens que sobreviveram a impérios, papas e séculos de revisão cultural.
              </p>
              <p>
                Lançamos em tiragens limitadas. Quando uma peça esgota, volta ao arquivo. Sem reposição. Sem reimpressão.
              </p>
            </div>
          </div>

          <div className="md:col-span-5 space-y-10">
            <div>
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-black/30 mb-5">
                O que defendemos
              </p>
              <ul className="divide-y divide-black/10">
                {[
                  { title: "Qualidade de Arquivo", text: "Estampas de nível museal extraídas de arquivos históricos." },
                  { title: "Edições Limitadas", text: "Cada drop é finito. Esgotou, arquivou." },
                  { title: "Algodão Pesado", text: "280gsm. Tom creme natural. Construído para durar." },
                  { title: "Silhueta Oversized", text: "Um uniforme para a vida contemporânea." },
                  { title: "Integridade Cultural", text: "Tratamos cada obra com a seriedade que ela merece." },
                ].map(({ title, text }) => (
                  <li key={title} className="py-4">
                    <p className="font-sans text-[10px] tracking-wider uppercase text-black mb-1">{title}</p>
                    <p className="font-sans text-xs text-black/40">{text}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F5F3EF] p-8">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-black/30 mb-4">Entrar</p>
              <p className="font-serif text-xl text-black mb-6">Veja a coleção atual.</p>
              <Link
                href="/shop"
                className="inline-block font-sans text-[10px] tracking-[0.25em] uppercase border border-black px-6 py-3 hover:bg-black hover:text-white transition-all duration-300"
              >
                Ver Coleção
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="border-y border-black/10">
        <div className="max-w-screen-2xl mx-auto px-5 md:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/10">
            {[
              { number: "1400–1600", label: "Era" },
              { number: "5", label: "Obras no Arquivo" },
              { number: "280g", label: "Peso do Algodão" },
              { number: "Ltd.", label: "Formato de Edição" },
            ].map(({ number, label }) => (
              <div key={label} className="px-6 md:px-10 py-4 text-center">
                <p className="font-serif text-3xl md:text-4xl text-black mb-1">{number}</p>
                <p className="font-sans text-[9px] tracking-widest uppercase text-black/30">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-5 md:px-8 py-14 text-center">
        <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-black/25 mb-3">Contato</p>
        <p className="font-serif text-xl text-black mb-2">Para parcerias e colaborações:</p>
        <a href="mailto:contato@loevredesarts.com" className="font-sans text-xs text-black/40 hover:text-black transition-colors">
          contato@loevredesarts.com
        </a>
      </div>
    </div>
  );
}
