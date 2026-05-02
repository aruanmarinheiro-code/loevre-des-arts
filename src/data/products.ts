import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    slug: "the-last-judgment-tee",
    name: "Camiseta Juízo Final",
    artist: "Michelangelo Buonarroti",
    artwork: "O Juízo Final",
    year: "1536–1541",
    medium: "Afresco",
    location: "Capela Sistina, Cidade do Vaticano",
    dimensions: "13,7 m × 12 m",
    price: 289,
    category: "sacred",
    status: "limited",
    description:
      "Encomendada pelo Papa Paulo III, cobre a parede inteira do altar da Capela Sistina. Michelangelo levou cinco anos pintando o fim do mundo em afresco. A gente levou esse peso todo e estampou no algodão.",
    fitNotes:
      "Cai largo, como tem que ser. Para um caimento mais estruturado, desce um tamanho. Os ombros passam do ponto — isso é proposital.",
    care: [
      "Lava frio, avessado",
      "Nada de água sanitária",
      "Secadora em temperatura baixa",
      "Passe com ferro frio, avessado",
      "Sem lavagem a seco",
    ],
    image: "/images/products/last-judgment.jpg",
    images: [
      "/images/products/last-judgment.jpg",
      "/images/products/last-judgment-detail.jpg",
    ],
    tags: ["michelangelo", "sistina", "vaticano", "sagrado", "afresco"],
  },
  {
    id: "2",
    slug: "the-resurrection-tee",
    name: "Camiseta A Ressurreição",
    artist: "Raffaello Sanzio",
    artwork: "A Ressurreição de Cristo",
    year: "1499–1502",
    medium: "Têmpera sobre madeira",
    location: "MASP, São Paulo",
    dimensions: "52 × 44 cm",
    price: 269,
    category: "sacred",
    status: "available",
    description:
      "Uma das primeiras obras conhecidas de Rafael — feita antes dos 20 anos. Hoje mora no MASP aqui em SP. Uma das raras vezes que o Renascimento italiano veio parar no Brasil. Agora também passa pela sua camiseta.",
    fitNotes:
      "Cai largo, como tem que ser. Para um caimento mais estruturado, desce um tamanho. Os ombros passam do ponto — isso é proposital.",
    care: [
      "Lava frio, avessado",
      "Nada de água sanitária",
      "Secadora em temperatura baixa",
      "Passe com ferro frio, avessado",
      "Sem lavagem a seco",
    ],
    image: "/images/products/resurrection.jpg",
    images: [
      "/images/products/resurrection.jpg",
      "/images/products/resurrection-detail.jpg",
    ],
    tags: ["rafael", "ressurreicao", "sagrado", "tempera", "brasil", "masp"],
  },
  {
    id: "3",
    slug: "the-baptism-tee",
    name: "Camiseta O Batismo",
    artist: "Verrocchio & Leonardo da Vinci",
    artwork: "O Batismo de Cristo",
    year: "1475–1478",
    medium: "Têmpera e óleo sobre madeira",
    location: "Galeria Uffizi, Florença",
    dimensions: "177 × 151 cm",
    price: 289,
    category: "renaissance",
    status: "limited",
    description:
      "Parceria entre Verrocchio e seu aprendiz Leonardo da Vinci. Segundo Vasari, quando Verrocchio viu o anjo que Leonardo pintou, jurou que nunca mais tocaria num pincel. Dois mestres. Uma tela. Uma camiseta.",
    fitNotes:
      "Cai largo, como tem que ser. Para um caimento mais estruturado, desce um tamanho. Os ombros passam do ponto — isso é proposital.",
    care: [
      "Lava frio, avessado",
      "Nada de água sanitária",
      "Secadora em temperatura baixa",
      "Passe com ferro frio, avessado",
      "Sem lavagem a seco",
    ],
    image: "/images/products/baptism.jpg",
    images: [
      "/images/products/baptism.jpg",
      "/images/products/baptism-detail.jpg",
    ],
    tags: ["verrocchio", "da-vinci", "uffizi", "florenca", "renascimento"],
  },
  {
    id: "4",
    slug: "the-school-of-athens-tee",
    name: "Camiseta Escola de Atenas",
    artist: "Raffaello Sanzio",
    artwork: "A Escola de Atenas",
    year: "1509–1511",
    medium: "Afresco",
    location: "Palácio Apostólico, Cidade do Vaticano",
    dimensions: "500 × 770 cm",
    price: 289,
    category: "philosophy",
    status: "available",
    description:
      "Rafael reuniu os maiores filósofos da antiguidade numa arquitetura clássica imaginária. Platão e Aristóteles no centro — discutindo o eterno dilema entre o ideal e o real. A gente botou tudo isso num algodão 280gsm.",
    fitNotes:
      "Cai largo, como tem que ser. Para um caimento mais estruturado, desce um tamanho. Os ombros passam do ponto — isso é proposital.",
    care: [
      "Lava frio, avessado",
      "Nada de água sanitária",
      "Secadora em temperatura baixa",
      "Passe com ferro frio, avessado",
      "Sem lavagem a seco",
    ],
    image: "/images/products/school-of-athens.jpg",
    images: [
      "/images/products/school-of-athens.jpg",
      "/images/products/school-of-athens-detail.jpg",
    ],
    tags: ["rafael", "filosofia", "vaticano", "afresco", "platao", "aristoteles"],
  },
  {
    id: "5",
    slug: "the-birth-of-venus-tee",
    name: "Camiseta O Nascimento de Vênus",
    artist: "Sandro Botticelli",
    artwork: "O Nascimento de Vênus",
    year: "1484–1486",
    medium: "Têmpera sobre tela",
    location: "Galeria Uffizi, Florença",
    dimensions: "172 × 278 cm",
    price: 289,
    category: "mythology",
    status: "available",
    description:
      "A alegoria de Botticelli sobre beleza e mito — Vênus saindo do mar numa concha, empurrada pelos deuses do vento e recebida pelas Horas. Pintada para os Médici no século XV, arquivada em Florença. Agora estampada em creme natural.",
    fitNotes:
      "Cai largo, como tem que ser. Para um caimento mais estruturado, desce um tamanho. Os ombros passam do ponto — isso é proposital.",
    care: [
      "Lava frio, avessado",
      "Nada de água sanitária",
      "Secadora em temperatura baixa",
      "Passe com ferro frio, avessado",
      "Sem lavagem a seco",
    ],
    image: "/images/products/birth-of-venus.jpg",
    images: [
      "/images/products/birth-of-venus.jpg",
      "/images/products/birth-of-venus-detail.jpg",
    ],
    tags: ["botticelli", "venus", "uffizi", "mitologia", "medici"],
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getRelatedProducts = (product: Product, count = 3): Product[] =>
  products
    .filter((p) => p.id !== product.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
