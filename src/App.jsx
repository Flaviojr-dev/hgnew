import { motion, useReducedMotion } from 'motion/react'

const phone = '5581984311581'
const messages = {
  general: 'Olá, Hugo! Vi a página do HGTEAM e gostaria de entender suas opções de acompanhamento.',
  online: 'Olá, Hugo! Tenho interesse na consultoria online. Pode me explicar como funciona?',
  presencial: 'Olá, Hugo! Tenho interesse no acompanhamento presencial. Onde você atende e como funciona?',
}
const whatsapp = (kind = 'general') => `https://wa.me/${phone}?text=${encodeURIComponent(messages[kind])}`

function Icon({ name = 'arrow', size = 18 }) {
  const shared = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  if (name === 'menu') return <svg {...shared}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
  if (name === 'down') return <svg {...shared}><path d="M12 4v16m-6-6 6 6 6-6" /></svg>
  if (name === 'plus') return <svg {...shared}><path d="M12 5v14M5 12h14" /></svg>
  if (name === 'check') return <svg {...shared}><path d="m4 12 5 5L20 6" /></svg>
  return <svg {...shared}><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
}

function ContactLink({ children, kind = 'general', className = '' }) {
  return <a className={className} href={whatsapp(kind)} target="_blank" rel="noreferrer"><span>{children}</span><span className="link-icon"><Icon /></span></a>
}

function Reveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion()
  return <motion.div className={className} initial={reduce ? false : { opacity: 0.9, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

function Eyebrow({ children, light = false }) { return <p className={`eyebrow ${light ? 'eyebrow-light' : ''}`}><span className="eyebrow-line" />{children}</p> }

function Header() {
  return <header className="site-header"><a href="#inicio" className="wordmark" aria-label="HGTEAM — início">HG<span>TEAM</span></a><nav aria-label="Navegação principal"><a href="#servicos">Serviços</a><a href="#hugo">Sobre Hugo</a><a href="#duvidas">Dúvidas</a></nav><ContactLink className="header-cta">Falar com Hugo</ContactLink><details className="mobile-nav"><summary aria-label="Abrir navegação"><Icon name="menu" size={22} /></summary><nav aria-label="Navegação mobile"><a href="#servicos">Serviços</a><a href="#hugo">Sobre Hugo</a><a href="#duvidas">Dúvidas</a></nav></details></header>
}

function Hero() {
  const reduce = useReducedMotion()
  const enter = (delay) => ({ initial: reduce ? false : { opacity: 0.9, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] } })
  return <section className="hero-shell" id="inicio" aria-labelledby="hero-title"><Header /><div className="hero-frame"><img className="hero-photo" src="/images/hugo-corrida.jpg" alt="Hugo Gouveia correndo em uma prova" fetchPriority="high" /><div className="hero-shade" /><div className="hero-top"><span>HUGO GOUVEIA</span><span>PERSONAL TRAINER</span></div><div className="hero-copy"><motion.p className="hero-kicker" {...enter(0.06)}>TREINO ONLINE E PRESENCIAL</motion.p><motion.h1 id="hero-title" {...enter(0.13)}>Hipertrofia e emagrecimento com <em>Hugo Gouveia.</em></motion.h1><motion.p className="hero-description" {...enter(0.2)}>Conheça o HGTEAM e converse sobre o acompanhamento que combina com o seu objetivo.</motion.p><div><ContactLink className="pill-button hero-button">Conversar com Hugo</ContactLink></div></div><div className="hero-rail"><span>HGTEAM / A CONSTÂNCIA VENCE</span><a href="#para-quem" aria-label="Conhecer a página"><Icon name="down" size={19} /></a></div></div><div className="hero-caption"><span>CREF12/PE 022320-G/PE</span><span>CONCEITO DE REDESIGN</span></div></section>
}

function WhoFor() {
  return <section className="who section" id="para-quem"><div className="section-container"><Eyebrow>PARA QUEM É</Eyebrow><div className="who-heading"><Reveal><h2>Seu objetivo merece<br /><em>uma conversa clara.</em></h2></Reveal><Reveal delay={0.08}><p>O HGTEAM divulga acompanhamento para hipertrofia e emagrecimento. Se você quer entender qual formato se encaixa na sua rotina, comece contando ao Hugo o que procura.</p></Reveal></div><div className="goal-grid"><Reveal className="goal-card"><span className="card-number">01</span><h3>Ganhar massa muscular</h3><p>Converse sobre seu objetivo de hipertrofia e sua experiência atual com treinos.</p></Reveal><Reveal className="goal-card" delay={0.07}><span className="card-number">02</span><h3>Buscar emagrecimento</h3><p>Explique sua rotina e o que você espera de um acompanhamento de treino.</p></Reveal><Reveal className="goal-card" delay={0.14}><span className="card-number">03</span><h3>Ter orientação</h3><p>Tire dúvidas sobre as opções online e presencial antes de escolher por onde começar.</p></Reveal></div></div></section>
}

function Services() {
  return <section className="services section" id="servicos"><div className="section-container"><Eyebrow light>FORMAS DE ACOMPANHAMENTO</Eyebrow><Reveal className="section-head"><h2>Você escolhe<br /><em>por onde começar.</em></h2><p>Hugo apresenta duas formas de atendimento. Confira as possibilidades diretamente com ele.</p></Reveal><div className="service-grid"><Reveal className="service-card"><div className="service-card-top"><span>01 / À DISTÂNCIA</span><Icon size={23} /></div><div><h3>Consultoria<br />online</h3><p>Para quem quer orientação de treino à distância. Hugo pode explicar como funciona, valores e disponibilidade.</p><ContactLink kind="online" className="service-link">Perguntar sobre consultoria</ContactLink></div></Reveal><Reveal className="service-card service-card-accent" delay={0.08}><div className="service-card-top"><span>02 / PRESENCIAL</span><Icon size={23} /></div><div><h3>Acompanhamento<br />presencial</h3><p>Para quem prefere treinar presencialmente com Hugo. Confirme local, horários e condições de atendimento.</p><ContactLink kind="presencial" className="service-link">Perguntar sobre presencial</ContactLink></div></Reveal></div></div></section>
}

function FirstContact() {
  return <section className="contact-guide section"><div className="section-container contact-layout"><Reveal><Eyebrow>PRIMEIRO CONTATO</Eyebrow><h2>Uma mensagem já<br /><em>abre o caminho.</em></h2><p>Você não precisa decidir tudo agora. Conte o essencial para Hugo entender o que você procura e explicar as opções disponíveis.</p><ContactLink className="text-cta">Iniciar conversa</ContactLink></Reveal><Reveal className="contact-list" delay={0.08}><div><span className="check-icon"><Icon name="check" size={17} /></span><p>Seu objetivo: hipertrofia, emagrecimento ou outra meta.</p></div><div><span className="check-icon"><Icon name="check" size={17} /></span><p>Se prefere atendimento online ou presencial.</p></div><div><span className="check-icon"><Icon name="check" size={17} /></span><p>Suas dúvidas sobre funcionamento, disponibilidade e valores.</p></div></Reveal></div></section>
}

function About() {
  return <section className="about section" id="hugo"><div className="section-container about-layout"><Reveal className="about-image"><img src="/images/hugo-corrida.jpg" alt="Hugo Gouveia participando de uma corrida" loading="lazy" /><span>HUGO GOUVEIA / HGTEAM</span></Reveal><Reveal className="about-copy" delay={0.08}><Eyebrow>POR TRÁS DO HGTEAM</Eyebrow><h2>Treino é parte<br />da história <em>dele.</em></h2><p>Hugo Gouveia é formado em Educação Física e atua como personal trainer com foco em hipertrofia e emagrecimento. O HGTEAM reúne sua atuação online e presencial.</p><div className="credential"><span>REGISTRO PROFISSIONAL</span><strong>CREF12/PE 022320-G/PE</strong></div><ContactLink className="text-cta">Falar com Hugo</ContactLink></Reveal></div></section>
}

function Faq() {
  return <section className="faq section" id="duvidas"><div className="section-container faq-layout"><Reveal><Eyebrow>DÚVIDAS FREQUENTES</Eyebrow><h2>Antes de<br /><em>começar.</em></h2><p>As informações abaixo vêm da apresentação pública do HGTEAM. Confirme os detalhes do atendimento diretamente com Hugo.</p></Reveal><Reveal className="faq-items" delay={0.08}><details><summary>O atendimento é online e presencial?<Icon name="plus" size={20} /></summary><p>Sim. O HGTEAM apresenta consultoria online e acompanhamento presencial. Hugo pode confirmar a disponibilidade de cada formato.</p></details><details><summary>Como sei qual formato escolher?<Icon name="plus" size={20} /></summary><p>Conte a Hugo seu objetivo, sua rotina e sua preferência por atendimento online ou presencial para conversar sobre as opções.</p></details><details><summary>Onde vejo os valores?<Icon name="plus" size={20} /></summary><p>Valores e condições devem ser confirmados diretamente com Hugo. Esta demonstração não apresenta preços que ainda não foram validados.</p></details><details><summary>Como entro em contato?<Icon name="plus" size={20} /></summary><p>Use os botões desta página para abrir uma conversa pelo WhatsApp sobre o serviço que interessa a você.</p></details></Reveal></div></section>
}

function FinalCta() {
  return <section className="final-cta section"><div className="section-container"><Reveal><Eyebrow light>HGTEAM</Eyebrow><h2>O próximo passo<br />é <em>conversar.</em></h2><p>Fale com Hugo sobre seu objetivo e conheça as opções de acompanhamento online e presencial.</p><ContactLink className="pill-button final-button">Falar com Hugo</ContactLink></Reveal></div></section>
}

function Footer() {
  return <footer className="site-footer"><div className="section-container footer-row"><span className="wordmark">HG<span>TEAM</span></span><div><span>Hugo Gouveia · CREF12/PE 022320-G/PE</span><span>Conceito de redesign — demonstração de portfólio</span></div></div></footer>
}

export default function App() { return <><Hero /><main><WhoFor /><Services /><FirstContact /><About /><Faq /><FinalCta /></main><Footer /></> }
