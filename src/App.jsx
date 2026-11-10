import { motion, useReducedMotion } from 'motion/react'

const phone = '5581984311581'
const whatsapp = (message) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
const messages = {
  general: 'Olá, Hugo! Vi a página do HGTEAM e gostaria de saber mais sobre o acompanhamento.',
  online: 'Olá, Hugo! Tenho interesse na consultoria online do HGTEAM. Pode me explicar como funciona?',
  presencial: 'Olá, Hugo! Tenho interesse no acompanhamento presencial. Pode me explicar como funciona e onde você atende?',
}

const isMovement = new URLSearchParams(window.location.search).get('hero') === 'movement'

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>
}

function ContactLink({ children, kind = 'general', className = '' }) {
  return (
    <a className={className} href={whatsapp(messages[kind])} target="_blank" rel="noreferrer">
      {children}<Arrow diagonal />
    </a>
  )
}

function Reveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

function Header() {
  return (
    <header className="site-header">
      <a href="#inicio" className="brand" aria-label="HGTEAM — voltar ao início"><span className="brand-icon">HG</span><span>TEAM<span className="brand-dot">.</span></span></a>
      <nav aria-label="Navegação principal">
        <a href="#servicos">Serviços</a>
        <a href="#hugo">Hugo</a>
      </nav>
      <ContactLink className="header-contact">Falar com Hugo</ContactLink>
    </header>
  )
}

function Hero() {
  const reduce = useReducedMotion()
  const intro = (delay) => ({ initial: reduce ? false : { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay } })
  return (
    <section className={`hero ${isMovement ? 'hero-movement' : 'hero-editorial'}`} id="inicio" aria-labelledby="hero-title">
      <div className="hero-photo" aria-hidden="true"><img src="/images/hugo-corrida.png" alt="" fetchPriority="high" /></div>
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-topline"><span>HUGO GOUVEIA</span><span>PERSONAL TRAINER · CREF12/PE 022320-G/PE</span></div>
      <div className="hero-content">
        <motion.p className="eyebrow light" {...intro(0.08)}><span className="eyebrow-mark" /> ONLINE & PRESENCIAL</motion.p>
        <motion.h1 id="hero-title" {...intro(0.18)}>{isMovement ? <>A constância<br /><em>vence.</em></> : <>Seu treino.<br />Sua <em>direção.</em></>}</motion.h1>
        <motion.p className="hero-description" {...intro(0.28)}>Hipertrofia e emagrecimento com acompanhamento de Hugo Gouveia.</motion.p>
        <motion.div className="hero-actions" {...intro(0.38)}><ContactLink className="button button-primary">Conversar sobre meu treino</ContactLink></motion.div>
      </div>
      <div className="hero-bottomline"><span>HGTEAM / 01</span><a href="#para-quem">DESCUBRA MAIS <span aria-hidden="true">↓</span></a></div>
    </section>
  )
}

function Intro() {
  return (
    <section className="intro section-pad" id="para-quem">
      <div className="section-kicker">01 / O PONTO DE PARTIDA</div>
      <Reveal className="intro-main"><p className="intro-overline">Treino com intenção</p><h2>Objetivos diferentes pedem <em>um caminho próprio.</em></h2><p>O HGTEAM reúne orientação de treino e acompanhamento para quem busca hipertrofia ou emagrecimento. Você pode conversar com Hugo sobre o formato que faz sentido para sua rotina.</p></Reveal>
      <div className="intro-bottom"><span>PLANEJAMENTO</span><span>ACOMPANHAMENTO</span><span>CONSTÂNCIA</span></div>
    </section>
  )
}

function Services() {
  return (
    <section className="services section-pad" id="servicos">
      <div className="section-kicker">02 / COMO TREINAR</div>
      <Reveal className="section-heading"><h2>Dois formatos.<br /><em>O mesmo compromisso.</em></h2><p>Escolha o ponto de partida e converse diretamente com Hugo para entender o acompanhamento.</p></Reveal>
      <div className="service-grid">
        <Reveal className="service-card service-online"><div className="service-index">01 <span>À DISTÂNCIA</span></div><div className="service-copy"><h3>Consultoria<br />online</h3><p>Orientação de treino para quem quer conversar sobre um acompanhamento mesmo estando longe.</p><ContactLink kind="online" className="text-link">Entender a consultoria</ContactLink></div></Reveal>
        <Reveal className="service-card service-presencial" delay={0.1}><div className="service-index">02 <span>LADO A LADO</span></div><div className="service-copy"><h3>Acompanhamento<br />presencial</h3><p>Para quem prefere conversar sobre treinar com Hugo presencialmente. Consulte disponibilidade e local de atendimento.</p><ContactLink kind="presencial" className="text-link">Entender o presencial</ContactLink></div></Reveal>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about section-pad" id="hugo">
      <div className="section-kicker">03 / QUEM ESTÁ COM VOCÊ</div>
      <div className="about-layout"><Reveal className="about-image"><img src="/images/hugo-corrida.png" alt="Hugo Gouveia participando de uma corrida" loading="lazy" /><span>CONSTÂNCIA EM MOVIMENTO.</span></Reveal><Reveal className="about-copy"><p className="intro-overline">Hugo Gouveia / HGTEAM</p><h2>O treinador por trás do <em>time.</em></h2><p>Hugo é formado em Educação Física e atua como personal trainer com foco em hipertrofia e emagrecimento. No HGTEAM, oferece consultoria online e acompanhamento presencial.</p><p className="cref">CREF12/PE 022320-G/PE</p><ContactLink className="text-link">Falar com Hugo</ContactLink></Reveal></div>
    </section>
  )
}

function Steps() {
  return (
    <section className="steps section-pad" id="comecar"><div className="section-kicker">04 / PRÓXIMO PASSO</div><Reveal><h2>Começa com<br /><em>uma conversa.</em></h2><p>Conte ao Hugo o que você procura: consultoria online ou acompanhamento presencial. Ele poderá explicar as opções e tirar suas dúvidas diretamente pelo WhatsApp.</p><ContactLink className="button button-primary">Conversar com Hugo</ContactLink></Reveal></section>
  )
}

function Faq() {
  return (
    <section className="faq section-pad"><div className="section-kicker">05 / DÚVIDAS FREQUENTES</div><Reveal className="faq-layout"><h2>Antes de<br /><em>começar.</em></h2><div className="faq-list"><details><summary>O HGTEAM oferece atendimento online e presencial?<span>+</span></summary><p>Sim. A página de Hugo apresenta consultoria online e acompanhamento presencial. Converse com ele para saber qual formato está disponível para você.</p></details><details><summary>Como peço informações sobre os treinos?<span>+</span></summary><p>Use um dos botões desta página para iniciar uma conversa diretamente pelo WhatsApp.</p></details><details><summary>Onde encontro os valores e condições?<span>+</span></summary><p>Confirme valores, disponibilidade e condições diretamente com Hugo pelo WhatsApp.</p></details></div></Reveal></section>
  )
}

function Footer() {
  return <footer className="footer"><div className="footer-main"><span className="brand"><span className="brand-icon">HG</span><span>TEAM<span className="brand-dot">.</span></span></span><p>Treino com direção.<br />Constância no caminho.</p><ContactLink className="footer-link">Vamos conversar</ContactLink></div><div className="footer-bottom"><span>Hugo Gouveia · CREF12/PE 022320-G/PE</span><span>Conceito de redesign — demonstração de portfólio</span></div></footer>
}

export default function App() {
  return <><Header /><main><Hero /><Intro /><Services /><About /><Steps /><Faq /></main><Footer /></>
}
