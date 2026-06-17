// 👉 Edite aqui seus dados reais
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export const site = {
  name: "Nathan Pinaffi",
  role: "Desenvolvedor Full Stack & IA",
  tagline: "Construindo software extraordinário com inteligência artificial.",
  email: "nathanpinafficontato@gmail.com",
  socials: {
    github: "https://github.com/NathanPinaffi",
    linkedin: "https://linkedin.com/in/nathan-pinaffi-263b3a1b3/",
    instagram: "https://instagram.com/@nathanpinaffi",
  },
};

export const stats = [
  { value: 5, suffix: "+", label: "Anos programando" },
  { value: 20, suffix: "+", label: "Projetos entregues" },
  { value: 12, suffix: "+", label: "Modelos de IA integrados" },
  { value: 100, suffix: "%", label: "Foco em qualidade" },
] as const;

export const techs = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Linguagem" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "IA & Data" },
  { name: "PostgreSQL", category: "Banco" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Cloud e Perplexity", category: "IA" },
  { name: "OpenAI APIs", category: "IA" },
] as const;

export type Project = {
  title: string;
  description: string;
  image: string;
  stack: string[];
  github?: string;
  demo?: string;
};

export const timeline = [
  {
    year: "2017",
    title: "Primeiras linhas de código",
    description: "Programei meu primeiro software em C# através de vídeos no youtube, um joguinhos de perguntas e respostas"
  },
  {
    year: "2019",
    title: "Começo da profissão",
    description:
      "Aprendi a programando em C (puro) durante meu ensino técnico. Juntamente as outras tecnologias como Python e JavaScript",
  },
  {
    year: "2021",
    title: "Full Stack profissional",
    description:
      "Entreguei minha primeira aplicação em produção através de bolsa de pesquisa federal, atendendo centas de usuários todos os dias.",
  },
  {
    year: "2022",
    title: "Mergulho em Inteligência Artificial",
    description:
      "Construí pipelines de RAG, fine-tuning e agentes autônomos integrados a produtos reais.",
  },
  {
    year: "2025",
    title: "Aprovado na Unicamp ",
    description:
      "Comecei estudar física na Unicamp, em paralelo a projetos pessoais na área de computação e matemática aplicada.",
  },
  {
    year: "2026",
    title: "Construindo o próximo capítulo",
    description:
      "Trabalhando com produtos premium que unem design refinado, performance e IA aplicada.",
  },
];