import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    slug: "the-last-judgment-tee",
    name: "The Last Judgment Tee",
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
      "Commissioned by Pope Paul III, The Last Judgment covers the entire altar wall of the Sistine Chapel. Michelangelo's monumental fresco depicts the second coming of Christ and the final judgment of souls — a cosmic reckoning rendered in heavyweight cotton.",
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
    name: "The Resurrection Tee",
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
      "One of Raphael's earliest known works, painted before the age of twenty. The Resurrection of Christ — currently housed in São Paulo — depicts a triumphant ascension surrounded by soldiers struck down by divine light. A rare artifact, now worn.",
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
    name: "The Baptism Tee",
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
      "A collaboration between Andrea del Verrocchio and his young apprentice Leonardo da Vinci. According to Vasari, upon seeing Leonardo's angel, Verrocchio vowed never to touch a brush again. Two masters. One canvas. One oversized silhouette.",
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
    name: "The School of Athens Tee",
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
      "Raphael's masterpiece of the High Renaissance gathers the greatest philosophers of antiquity beneath the arches of an idealized classical architecture. Plato and Aristotle at the center — the eternal debate between ideal and real, abstraction and matter.",
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
    name: "The Birth of Venus Tee",
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
      "Botticelli's iconic allegory of beauty and myth — Venus emerging from the sea on a shell, propelled by wind gods and received by a figure of the Hours. Painted for the Medici family, now archived in Florence. Now printed in natural cream.",
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
