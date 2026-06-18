import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as RouterProvider } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as require_client } from "../_libs/react-dom+scheduler.mjs";
import { getRouter } from "./router-DWKZaMuy.mjs";
import { n as motion, r as AnimatePresence, t as useInView } from "../_libs/framer-motion.mjs";
import { a as Linkedin, c as ChevronDown, i as Mail, l as ArrowUpRight, n as Sparkles, o as Instagram, r as Menu, s as Github, t as X, u as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CDrE1qaO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_client = /* @__PURE__ */ __toESM(require_client());
function CursorGlow() {
	const [pos, setPos] = (0, import_react.useState)({
		x: -500,
		y: -500
	});
	const [enabled, setEnabled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(pointer: coarse)").matches) return;
		setEnabled(true);
		const onMove = (e) => setPos({
			x: e.clientX,
			y: e.clientY
		});
		window.addEventListener("mousemove", onMove);
		return () => window.removeEventListener("mousemove", onMove);
	}, []);
	if (!enabled) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-0 z-[60]",
		style: { background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(139,92,246,0.10), transparent 45%)` }
	});
}
var links = [
	{
		label: "Sobre",
		href: "#sobre"
	},
	{
		label: "Stack",
		href: "#stack"
	},
	{
		label: "Projetos",
		href: "#projetos"
	},
	{
		label: "Timeline",
		href: "#timeline"
	},
	{
		label: "Contato",
		href: "#contato"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
		initial: {
			y: -40,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .7,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2 font-display text-xl text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block h-2.5 w-2.5 rounded-full",
						style: {
							background: "linear-gradient(135deg, #A855F7 0%, #06B6D4 100%)",
							boxShadow: "0 0 16px rgba(168,85,247,0.7)"
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Nathan Pinaffi" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: `hidden items-center gap-1 rounded-full px-2 py-1.5 md:flex ${scrolled ? "glass" : ""}`,
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "rounded-full px-3 py-1.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contato",
					className: "hidden rounded-full px-4 py-2 text-sm font-medium text-white transition-shadow hover:shadow-[0_10px_40px_-10px_rgba(139,92,246,0.6)] md:inline-flex",
					style: { background: "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)" },
					children: "Vamos conversar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Abrir menu",
					onClick: () => setOpen((v) => !v),
					className: "glass rounded-full p-2 text-white md:hidden",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: -10
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				y: -10
			},
			className: "glass mx-6 mt-3 flex flex-col gap-1 rounded-2xl p-3 md:hidden",
			children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: l.href,
				onClick: () => setOpen(false),
				className: "rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/5",
				children: l.label
			}, l.href))
		}) })]
	});
}
if (typeof window !== "undefined") gsapWithCSS.registerPlugin(ScrollTrigger);
function AuroraBackground({ className = "" }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!ref.current) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.to(".aurora-blob", {
				yPercent: -10,
				ease: "none",
				scrollTrigger: {
					trigger: ref.current,
					start: "top top",
					end: "bottom top",
					scrub: true
				}
			});
		}, ref);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		"aria-hidden": true,
		className: `pointer-events-none absolute inset-0 overflow-hidden ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aurora-blob animate-aurora absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl",
				style: { background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aurora-blob animate-aurora absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full opacity-50 blur-3xl",
				style: {
					background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)",
					animationDelay: "-6s"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aurora-blob animate-aurora absolute bottom-0 left-1/3 h-[480px] w-[480px] rounded-full opacity-40 blur-3xl",
				style: {
					background: "radial-gradient(circle, #A855F7 0%, transparent 70%)",
					animationDelay: "-12s"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "noise-overlay absolute inset-0" })
		]
	});
}
function AnimatedGrid({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: `grid-pattern pointer-events-none absolute inset-0 ${className}`
	});
}
function AnimatedUnderline({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "relative inline-block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gradient-violet relative z-10",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				"aria-hidden": true,
				viewBox: "0 0 300 24",
				preserveAspectRatio: "none",
				className: "pointer-events-none absolute -bottom-2 left-0 h-3 w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M2 14 C 60 4, 120 22, 180 10 S 290 18, 298 8",
					fill: "none",
					stroke: "url(#u-grad)",
					strokeWidth: "3",
					strokeLinecap: "round",
					pathLength: 1,
					style: {
						strokeDasharray: 1,
						strokeDashoffset: 1,
						animation: "draw-line 3.6s cubic-bezier(0.65,0,0.35,1) 0.6s infinite"
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "u-grad",
					x1: "0",
					x2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#A855F7"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#06B6D4"
					})]
				}) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes draw-line {
          0% { stroke-dashoffset: 1; }
          45%, 55% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -1; }
        }
      ` })
		]
	});
}
function useMagnetic(strength = .35) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(pointer: coarse)").matches) return;
		let raf = 0;
		const onMove = (e) => {
			const rect = el.getBoundingClientRect();
			const x = e.clientX - rect.left - rect.width / 2;
			const y = e.clientY - rect.top - rect.height / 2;
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => {
				el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
			});
		};
		const onLeave = () => {
			cancelAnimationFrame(raf);
			el.style.transform = "translate3d(0,0,0)";
		};
		el.addEventListener("mousemove", onMove);
		el.addEventListener("mouseleave", onLeave);
		return () => {
			el.removeEventListener("mousemove", onMove);
			el.removeEventListener("mouseleave", onLeave);
			cancelAnimationFrame(raf);
		};
	}, [strength]);
	return ref;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function MagneticButton({ className, variant = "primary", children, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		ref: useMagnetic(.25),
		className: cn("group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-shadow duration-300 will-change-transform", variant === "primary" ? "text-white shadow-[0_10px_40px_-10px_rgba(139,92,246,0.6)] hover:shadow-[0_15px_50px_-10px_rgba(139,92,246,0.8)]" : "glass text-white/90 hover:text-white", className),
		style: variant === "primary" ? { background: "linear-gradient(135deg, #7C3AED 0%, #8B5CF6 50%, #06B6D4 100%)" } : void 0,
		...rest,
		children: [variant === "primary" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100",
			style: { background: "linear-gradient(135deg, rgba(255,255,255,0.25), transparent 60%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "relative inline-flex items-center gap-2",
			children
		})]
	});
}
function ScrollArrow({ href = "#sobre" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		"aria-label": "Rolar para baixo",
		className: "group flex flex-col items-center gap-2 text-white/50 transition-colors hover:text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[10px] uppercase tracking-[0.3em]",
				children: "Scroll"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "relative flex h-10 w-6 items-start justify-center overflow-hidden rounded-full border border-white/15",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "animate-scroll-arrow mt-2 block h-1.5 w-1 rounded-full bg-white/70" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3 animate-bounce" })
		]
	});
}
var site = {
	name: "Nathan Pinaffi",
	role: "Desenvolvedor Full Stack & IA",
	tagline: "Construindo software extraordinário com inteligência artificial.",
	email: "nathanpinafficontato@gmail.com",
	socials: {
		github: "https://github.com/NathanPinaffi",
		linkedin: "https://linkedin.com/in/nathan-pinaffi-263b3a1b3/",
		instagram: "https://instagram.com/@nathanpinaffi"
	}
};
var stats = [
	{
		value: 5,
		suffix: "+",
		label: "Anos programando"
	},
	{
		value: 20,
		suffix: "+",
		label: "Projetos entregues"
	},
	{
		value: 12,
		suffix: "+",
		label: "Modelos de IA integrados"
	},
	{
		value: 100,
		suffix: "%",
		label: "Foco em qualidade"
	}
];
var techs = [
	{
		name: "React",
		category: "Frontend"
	},
	{
		name: "TypeScript",
		category: "Linguagem"
	},
	{
		name: "Node.js",
		category: "Backend"
	},
	{
		name: "Python",
		category: "IA & Data"
	},
	{
		name: "PostgreSQL",
		category: "Banco"
	},
	{
		name: "Docker",
		category: "DevOps"
	},
	{
		name: "AWS",
		category: "Cloud"
	},
	{
		name: "Cloud e Perplexity",
		category: "IA"
	},
	{
		name: "OpenAI APIs",
		category: "IA"
	}
];
var timeline = [
	{
		year: "2017",
		title: "Primeiras linhas de código",
		description: "Programei meu primeiro software em C# através de vídeos no youtube, um joguinhos de perguntas e respostas"
	},
	{
		year: "2019",
		title: "Começo da profissão",
		description: "Aprendi a programando em C (puro) durante meu ensino técnico. Juntamente as outras tecnologias como Python e JavaScript"
	},
	{
		year: "2021",
		title: "Full Stack profissional",
		description: "Entreguei minha primeira aplicação em produção através de bolsa de pesquisa federal, atendendo centas de usuários todos os dias."
	},
	{
		year: "2022",
		title: "Mergulho em Inteligência Artificial",
		description: "Construí pipelines de RAG, fine-tuning e agentes autônomos integrados a produtos reais."
	},
	{
		year: "2025",
		title: "Aprovado na Unicamp ",
		description: "Comecei estudar física na Unicamp, em paralelo a projetos pessoais na área de computação e matemática aplicada."
	},
	{
		year: "2026",
		title: "Construindo o próximo capítulo",
		description: "Trabalhando com produtos premium que unem design refinado, performance e IA aplicada."
	}
];
var fadeUp = {
	initial: {
		opacity: 0,
		y: 28
	},
	animate: {
		opacity: 1,
		y: 0
	}
};
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32 pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuroraBackground, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						...fadeUp,
						transition: {
							duration: .9,
							delay: .15,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "mt-7 font-display text-[44px] leading-[1.02] text-white sm:text-6xl md:text-7xl lg:text-[88px]",
						children: [
							"Transformando ideias em",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedUnderline, { children: "softwares extraordinários" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/90",
								children: "."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
						...fadeUp,
						transition: {
							duration: .9,
							delay: .35,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "mt-7 max-w-2xl text-base text-white/65 sm:text-lg",
						children: [site.role, ". Eu projeto, construo e escalo produtos digitais com experiências fluidas, performance impecável e IA aplicada de verdade."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...fadeUp,
						transition: {
							duration: 3,
							delay: .55,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "mt-10 flex flex-col items-center gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
							onClick: () => window.location.hash = "#projetos",
							children: ["Ver projetos", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
							variant: "ghost",
							onClick: () => window.location.hash = "#contato",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), "Entrar em contato"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						...fadeUp,
						transition: {
							duration: .9,
							delay: .85
						},
						className: "absolute bottom-2 left-1/2 -translate-x-1/2 animate-float-y"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArrow, {})
				]
			})
		]
	}) });
}
function SectionHeading({ eyebrow, title, description, align = "left" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-100px"
		},
		transition: {
			duration: .7,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: `max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "glass inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-white/70",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "h-1 w-1 rounded-full",
					style: { background: "#A855F7" }
				}), eyebrow]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-5 font-display text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base text-white/60 sm:text-lg",
				children: description
			})
		]
	});
}
var GlassCard = (0, import_react.forwardRef)(function GlassCard({ className, strong, children, ...rest }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		ref,
		className: cn(strong ? "glass-strong" : "glass", "relative overflow-hidden rounded-2xl", className),
		...rest,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-x-0 top-0 h-px",
			style: { background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)" }
		}), children]
	});
});
function Counter({ value, suffix = "", duration = 1800 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-80px"
	});
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const start = performance.now();
		let raf = 0;
		const tick = (t) => {
			const p = Math.min(1, (t - start) / duration);
			const eased = 1 - Math.pow(1 - p, 3);
			setN(Math.round(value * eased));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		inView,
		value,
		duration
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: "font-display text-5xl text-white sm:text-6xl",
		children: [n, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-gradient-violet",
			children: suffix
		})]
	});
}
var eu_default = "/assets/eu-DeZOG1ZF.png";
var badges = [
	"Full Stack",
	"IA & Automação",
	"Arquitetura",
	"Design Engineering"
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "sobre",
		className: "relative px-6 py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: -30
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: {
					once: true,
					margin: "-100px"
				},
				transition: {
					duration: .9,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					strong: true,
					className: "relative aspect-[4/5] w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: eu_default,
							alt: "Nathan Pinaffi",
							loading: "lazy",
							width: 1024,
							height: 1024,
							className: "absolute inset-0 h-full w-full object-cover opacity-90"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0",
							style: { background: "linear-gradient(180deg, transparent 40%, rgba(5,5,5,0.85) 100%)" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-6 left-6 right-6 flex items-end justify-between",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] uppercase tracking-[0.3em] text-white/60",
								children: "Engenheiro de software"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-2xl text-white",
								children: "Construído com obsessão por detalhes"
							})] })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute -inset-6 -z-10 rounded-3xl opacity-50 blur-3xl",
					style: { background: "radial-gradient(circle at 30% 20%, rgba(124,58,237,0.4), transparent 60%)" }
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Sobre mim",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Engenharia, design e ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedUnderline, { children: "inteligência artificial" }),
						" ",
						"em um só lugar."
					] }),
					description: "Sou desenvolvedor há mais de cinco anos, atuando full stack e construindo produtos com inteligência artificial em sua espinha dorsal. Acredito em código limpo, interfaces refinadas e em entregar valor real — não só features."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-2",
					children: badges.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "glass rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-white/75",
						children: b
					}, b))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: "hidden",
					whileInView: "visible",
					viewport: {
						once: true,
						margin: "-80px"
					},
					variants: {
						hidden: {},
						visible: { transition: { staggerChildren: .12 } }
					},
					className: "mt-10 grid grid-cols-2 gap-3 sm:gap-4",
					children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						variants: {
							hidden: {
								opacity: 0,
								y: 20
							},
							visible: {
								opacity: 1,
								y: 0
							}
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
							className: "p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								value: s.value,
								suffix: s.suffix
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-white/55",
								children: s.label
							})]
						})
					}, s.label))
				})
			] })]
		})
	});
}
function TiltCard({ name, category }) {
	const ref = (0, import_react.useRef)(null);
	const onMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const px = (e.clientX - r.left) / r.width;
		const py = (e.clientY - r.top) / r.height;
		const rx = (py - .5) * -10;
		const ry = (px - .5) * 12;
		el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
		el.style.setProperty("--mx", `${px * 100}%`);
		el.style.setProperty("--my", `${py * 100}%`);
	};
	const onLeave = () => {
		const el = ref.current;
		if (!el) return;
		el.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		className: "group relative transition-transform duration-200 ease-out will-change-transform",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
			className: "relative h-full p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
					style: { background: "radial-gradient(300px circle at var(--mx,50%) var(--my,50%), rgba(139,92,246,0.18), transparent 60%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.25em] text-white/45",
					children: category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-display text-2xl text-white",
					children: name
				})
			]
		})
	});
}
function Tech() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "stack",
		className: "relative px-6 py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				align: "center",
				eyebrow: "Stack & ferramentas",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Ferramentas que uso para construir",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedUnderline, { children: "aplicações únicas" }),
					"."
				] }),
				description: "Do front-end refinado ao back-end resiliente, passando por modelos de IA generativa e infraestrutura em nuvem."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: "hidden",
				whileInView: "visible",
				viewport: {
					once: true,
					margin: "-80px"
				},
				variants: {
					hidden: {},
					visible: { transition: { staggerChildren: .06 } }
				},
				className: "mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-3",
				children: techs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: {
						hidden: {
							opacity: 0,
							y: 24
						},
						visible: {
							opacity: 1,
							y: 0
						}
					},
					transition: {
						duration: .6,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
						name: t.name,
						category: t.category
					})
				}, t.name))
			})]
		})
	});
}
async function getGithubProjects() {
	return (await (await fetch("https://api.github.com/users/NathanPinaffi/repos")).json()).map((repo) => ({
		title: repo.name,
		description: repo.description || "Projeto sem descrição.",
		image: `https://opengraph.githubassets.com/1/${repo.owner.login}/${repo.name}`,
		stack: repo.language ? [repo.language] : [],
		github: repo.html_url,
		demo: repo.homepage || "#",
		stars: repo.stargazers_count
	}));
}
function Projects() {
	const [projects, setProjects] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		async function loadProjects() {
			try {
				setProjects((await getGithubProjects()).slice(0, 4));
			} catch (error) {
				console.error("Erro ao carregar projetos:", error);
			} finally {
				setLoading(false);
			}
		}
		loadProjects();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projetos",
		className: "relative px-6 py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Projetos selecionados",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Produtos que misturam",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedUnderline, { children: "design" }),
					", ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedUnderline, { children: "engenharia" }),
					" e",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedUnderline, { children: "IA" }),
					"."
				] })
			}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-white/60",
					children: "Carregando projetos..."
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: "hidden",
				whileInView: "visible",
				viewport: {
					once: true,
					margin: "-100px"
				},
				variants: {
					hidden: {},
					visible: { transition: { staggerChildren: .12 } }
				},
				className: "\n              mt-14\n              grid\n              gap-6\n              sm:grid-cols-2\n              xl:grid-cols-4\n            ",
				children: projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.article, {
					variants: {
						hidden: {
							opacity: 0,
							y: 32
						},
						visible: {
							opacity: 1,
							y: 0
						}
					},
					transition: {
						duration: .8,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					whileHover: {
						y: -8,
						rotateX: 2,
						rotateY: -2
					},
					style: { perspective: "1000px" },
					className: "group",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "\n                    overflow-hidden\n                    transition-all\n                    duration-500\n                    group-hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]\n                  ",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[16/10] overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image || "https://placehold.co/1280x800/111111/ffffff?text=Projeto",
									alt: p.title,
									loading: "lazy",
									width: 1280,
									height: 800,
									className: "\n                        absolute\n                        inset-0\n                        h-full\n                        w-full\n                        object-cover\n                        transition-transform\n                        duration-700\n                        ease-out\n                        group-hover:scale-105\n                      "
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0",
									style: { background: "linear-gradient(180deg, transparent 50%, rgba(5,5,5,0.7) 100%)" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "\n                        absolute\n                        inset-0\n                        opacity-0\n                        transition-opacity\n                        duration-500\n                        group-hover:opacity-100\n                      ",
									style: { background: "linear-gradient(135deg, rgba(124,58,237,.2), rgba(6,182,212,.15))" }
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl text-white",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 min-h-[72px] text-sm text-white/60 line-clamp-3",
									children: p.description
								}),
								!!p.stack?.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex flex-wrap gap-1.5",
									children: p.stack.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "\n                              rounded-full\n                              border\n                              border-white/10\n                              bg-white/[0.03]\n                              px-2.5\n                              py-0.5\n                              font-mono\n                              text-[10px]\n                              uppercase\n                              tracking-[0.15em]\n                              text-white/70\n                            ",
										children: s
									}, s))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex items-center gap-3",
									children: [p.github && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: p.github,
										target: "_blank",
										rel: "noreferrer",
										className: "\n                            glass\n                            inline-flex\n                            items-center\n                            gap-2\n                            rounded-full\n                            px-4\n                            py-2\n                            text-xs\n                            text-white/80\n                            transition-colors\n                            hover:text-white\n                          ",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-3.5 w-3.5" }), "GitHub"]
									}), p.demo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: p.demo,
										target: "_blank",
										rel: "noreferrer",
										className: "\n                            inline-flex\n                            items-center\n                            gap-2\n                            rounded-full\n                            px-4\n                            py-2\n                            text-xs\n                            font-medium\n                            text-white\n                            shadow-[0_10px_30px_-10px_rgba(139,92,246,0.6)]\n                          ",
										style: { background: "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)" },
										children: ["Ver demo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
									})]
								})
							]
						})]
					})
				}, `${p.title}-${p.github}`))
			})]
		})
	});
}
function Timeline() {
	const ref = (0, import_react.useRef)(null);
	const lineRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!lineRef.current || !ref.current) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.fromTo(lineRef.current, { scaleY: 0 }, {
				scaleY: 1,
				ease: "none",
				transformOrigin: "top center",
				scrollTrigger: {
					trigger: ref.current,
					start: "top 70%",
					end: "bottom 80%",
					scrub: true
				}
			});
		}, ref);
		return () => {
			ctx.revert();
			ScrollTrigger.refresh();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "timeline",
		className: "relative px-6 py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				align: "center",
				eyebrow: "Jornada",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Uma ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedUnderline, { children: "linha do tempo" }),
					" da minha trajetória."
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref,
				className: "relative mt-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: lineRef,
						"aria-hidden": true,
						className: "absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block",
						style: {
							background: "linear-gradient(180deg, #7C3AED 0%, #06B6D4 100%)",
							boxShadow: "0 0 20px rgba(139,92,246,0.6)"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-12",
						children: timeline.map((item, i) => {
							const isLeft = i % 2 === 0;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
								initial: {
									opacity: 0,
									y: 30
								},
								whileInView: {
									opacity: 1,
									y: 0
								},
								viewport: {
									once: true,
									margin: "-100px"
								},
								transition: {
									duration: .8,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								className: `relative grid gap-6 md:grid-cols-2 md:items-center ${isLeft ? "" : "md:[&>*:first-child]:order-2"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: isLeft ? "md:pr-12 md:text-right" : "md:pl-12",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
											className: "inline-block p-6 text-left",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-mono text-[10px] uppercase tracking-[0.3em] text-white/45",
													children: item.year
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-2 font-display text-2xl text-white",
													children: item.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-sm text-white/60",
													children: item.description
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										"aria-hidden": true,
										className: "pointer-events-none absolute left-1/2 hidden h-3 w-3 -translate-x-1/2 rounded-full md:block",
										style: {
											background: "radial-gradient(circle, #fff 0%, #A855F7 60%)",
											boxShadow: "0 0 18px rgba(168,85,247,0.8)"
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:block" })
								]
							}, item.year);
						})
					})
				]
			})]
		})
	});
}
function StatusRibbon({ text, reverse = false, className = "" }) {
	const items = Array(12).fill(text);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `
        absolute
        left-[-20%]
        w-[140%]
        overflow-hidden
        bg-gradient-to-r
        from-violet-600
        via-fuchsia-500
        to-violet-600
        py-3
        shadow-[0_0_50px_rgba(139,92,246,0.4)]
        backdrop-blur-xl
        ${className}
      `,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "flex w-max gap-8 whitespace-nowrap",
			animate: { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] },
			transition: {
				duration: 25,
				repeat: Infinity,
				ease: "linear"
			},
			children: [...items, ...items].map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold uppercase tracking-[0.25em] text-black",
					children: item
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
					size: 18,
					className: "text-black"
				})]
			}, index))
		})
	});
}
var items = [
	{
		name: "GitHub",
		href: site.socials.github,
		icon: Github
	},
	{
		name: "LinkedIn",
		href: site.socials.linkedin,
		icon: Linkedin
	},
	{
		name: "Instagram",
		href: site.socials.instagram,
		icon: Instagram
	},
	{
		name: "Email",
		href: `mailto:${site.email}`,
		icon: Mail
	}
];
function Social() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative px-6 py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "center",
					eyebrow: "Redes",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Vamos nos ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedUnderline, { children: "conectar!" }),
						"."
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: "hidden",
					whileInView: "visible",
					viewport: {
						once: true,
						margin: "-80px"
					},
					variants: {
						hidden: {},
						visible: { transition: { staggerChildren: .08 } }
					},
					className: "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
						href: it.href,
						target: "_blank",
						rel: "noreferrer",
						variants: {
							hidden: {
								opacity: 0,
								y: 20
							},
							visible: {
								opacity: 1,
								y: 0
							}
						},
						whileHover: {
							y: -6,
							rotateX: 4,
							rotateY: -4
						},
						transition: {
							type: "spring",
							stiffness: 200,
							damping: 18
						},
						style: { transformPerspective: 800 },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
							className: "flex h-full flex-col gap-4 p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex h-10 w-10 items-center justify-center rounded-xl text-white",
								style: {
									background: "linear-gradient(135deg, rgba(168,85,247,0.25), rgba(6,182,212,0.25))",
									boxShadow: "0 0 25px -8px rgba(139,92,246,0.6)"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-xl text-white",
								children: it.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-1 truncate font-mono text-xs text-white/55" })] })]
						})
					}, it.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative margin-top -200px",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusRibbon, {
				text: "DESENVOLVEDOR FULL STACK • IA • REACT • TYPESCRIPT",
				className: "top-20 rotate-[4deg]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusRibbon, {
				text: "DISPONÍVEL PARA NOVOS PROJETOS",
				reverse: true,
				className: "top-20 rotate-[-2deg]"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {})
	] });
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contato",
		className: "relative px-6 py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto max-w-5xl overflow-hidden rounded-3xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-strong relative rounded-3xl px-8 py-20 text-center sm:px-16 sm:py-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuroraBackground, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
						initial: {
							opacity: 0,
							y: 24
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-100px"
						},
						transition: {
							duration: .9,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "relative z-10 font-display text-4xl leading-[1.05] text-white sm:text-6xl",
						children: [
							"Vamos construir algo",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedUnderline, { children: "extraordinários" }),
							" juntos."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 16
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-100px"
						},
						transition: {
							duration: .9,
							delay: .15
						},
						className: "relative z-10 mx-auto mt-5 max-w-xl text-white/65",
						children: "Estou aberto a novos projetos, colaborações e oportunidades full-time. Se você quer transformar uma ideia em produto, vamos conversar."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-100px"
						},
						transition: {
							duration: .9,
							delay: .3
						},
						className: "relative z-10 mt-10 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
							className: "px-7 py-4 text-base",
							onClick: () => window.location.href = `mailto:${site.email}`,
							children: ["Entrar em contato", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})
				]
			})
		})
	});
}
var icons = [
	{
		href: site.socials.github,
		icon: Github,
		label: "GitHub"
	},
	{
		href: site.socials.linkedin,
		icon: Linkedin,
		label: "LinkedIn"
	},
	{
		href: site.socials.instagram,
		icon: Instagram,
		label: "Instagram"
	},
	{
		href: `mailto:${site.email}`,
		icon: Mail,
		label: "Email"
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative border-t border-white/5 px-6 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-xs text-white/45",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Nathan Pinaffi. Construído com obsessão por detalhes."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-2",
				children: icons.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: it.href,
					target: "_blank",
					rel: "noreferrer",
					"aria-label": it.label,
					className: "glass flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition-colors hover:text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-4 w-4" })
				}, it.label))
			})]
		})
	});
}
var router = getRouter();
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-[#050505] text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CursorGlow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tech, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Social, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
import_client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouterProvider, { router }) }));
//#endregion
export { Index as component };
