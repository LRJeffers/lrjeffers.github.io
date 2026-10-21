/* ==================== MENÚ MÓVIL ==================== */
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menuList = document.getElementById('menu-list');

  if (menuToggle && menuList) {
    // Abrir/Cerrar menú
    menuToggle.addEventListener('click', () => {
      menuList.classList.toggle('active');
      const isActive = menuList.classList.contains('active');
      menuToggle.textContent = isActive ? '✕ Cerrar' : '☰ Menú';
      menuToggle.setAttribute('aria-expanded', isActive);
    });

    // Cerrar menú al hacer clic en un enlace
    menuList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuList.classList.remove('active');
        menuToggle.textContent = '☰ Menú';
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
/* ==================== BOTONES DE COMPARTIR DINÁMICOS ==================== */
document.addEventListener('DOMContentLoaded', () => {
  const shareContainer = document.getElementById('share-buttons-container');
  
  if (shareContainer) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    
    // HTML de los botones con iconos SVG
    const shareButtonsHTML = `
      <div class="share-section-blog">
        <h4>📢 Comparte esta página</h4>
        <div class="share-buttons-blog">
          <!-- Facebook -->
          <a href="https://www.facebook.com/sharer/sharer.php?u=${url}" 
             target="_blank" rel="noopener noreferrer" 
             class="share-btn facebook" aria-label="Compartir en Facebook" title="Compartir en Facebook">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          
          <!-- X (Twitter) -->
          <a href="https://twitter.com/intent/tweet?url=${url}&text=${title}" 
             target="_blank" rel="noopener noreferrer" 
             class="share-btn twitter" aria-label="Compartir en X" title="Compartir en X">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          
          <!-- WhatsApp -->
          <a href="https://wa.me/?text=${title}%20${url}" 
             target="_blank" rel="noopener noreferrer" 
             class="share-btn whatsapp" aria-label="Compartir en WhatsApp" title="Compartir en WhatsApp">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
          
          <!-- Telegram -->
          <a href="https://t.me/share/url?url=${url}&text=${title}" 
             target="_blank" rel="noopener noreferrer" 
             class="share-btn telegram" aria-label="Compartir en Telegram" title="Compartir en Telegram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </a>
          
          <!-- Instagram -->
          <a href="https://www.instagram.com/lrjeffers90" 
             target="_blank" rel="noopener noreferrer" 
             class="share-btn instagram" aria-label="Seguir en Instagram" title="Seguir en Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
        
        <!-- Botón copiar enlace -->
        <button onclick="copyLink()" class="copy-link-btn" aria-label="Copiar enlace">
          <svg viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
          <span>Copiar enlace</span>
        </button>
        <div id="copy-success" class="copy-success">✓ ¡Enlace copiado!</div>
      </div>
    `;
    
    shareContainer.innerHTML = shareButtonsHTML;
  }
});

// Función para copiar enlace
function copyLink() {
  const url = window.location.href;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(showSuccess).catch(fallbackCopy);
  } else {
    fallbackCopy(url);
  }
}

function fallbackCopy(url) {
  const textArea = document.createElement('textarea');
  textArea.value = url;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    showSuccess();
  } catch(e) {}
  document.body.removeChild(textArea);
}

function showSuccess() {
  const el = document.getElementById('copy-success');
  if(el) {
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 3000);
  }
}

/* ==================== FILTRO INTERACTIVO DE OBRAS ==================== */
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.obras-grid .obra-card');
  const sectionHeaders = document.querySelectorAll('.obras-section-header');

  if (filterBtns.length > 0 && cards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        cards.forEach(card => {
          const category = card.getAttribute('data-category') || '';
          if (filter === 'all' || category === filter || category.includes(filter)) {
            card.classList.remove('filter-hidden');
          } else {
            card.classList.add('filter-hidden');
          }
        });

        sectionHeaders.forEach(header => {
          const cat = header.getAttribute('data-category') || '';
          if (filter === 'all' || cat === filter || cat.includes(filter)) {
            header.style.display = 'block';
          } else {
            header.style.display = 'none';
          }
        });
      });
    });
  }
});

/* ==================== SISTEMA MULTILINGÜE COMPLETO (I18N) ==================== */
const I18N_WEB = {
  es: {
    nav_inicio: "Inicio",
    nav_sobre_mi: "Sobre Mí",
    nav_obras: "Obras",
    nav_blog: "Blog",
    nav_contacto: "Contacto",
    nav_prensa: "Kit de Prensa",
    hero_h1_sr: "L. R. Jeffers | Escritor de Romance Paranormal LGBT, Dark Romance y Thriller Romántico",
    featured_section_title: "Último Estreno",
    ravens_tagline: "Dark Romance con toques de Techno-Thriller y suspenso",
    ravens_p1: "OBSESIÓN. VIGILANCIA. VENGANZA. En las montañas Blue Ridge, la verdad se paga con sangre y el amor nace en la oscuridad.",
    ravens_p2: "Bienvenido a Raven's Ridge, un pueblo donde la niebla oculta secretos antiguos y nadie es quien dice ser. Drake Holloway y Killian Graves descubrirán que algunos lazos son más peligrosos que la muerte misma.",
    btn_details: "Ver detalles y extracto",
    btn_buy_bilogia: "Comprar Bilogía en Amazon",
    transmedia_badge: "🔒 BONUS EXCLUSIVO • EDICIÓN EN FÍSICO",
    transmedia_title: "Experiencia Transmedia: Archivo Raven's Ridge",
    transmedia_desc: "Escanea el código QR que encontrarás en el interior de tu ejemplar impreso y desbloquea el <strong>Archivo interactivo Raven's Ridge</strong>. Registra tu progreso de lectura, investiga los secretos de Drake y Killian, desbloquea dossiers clasificados y descubre si eres capaz de identificar al culpable antes del desenlace.",
    btn_paperback: "📖 Conseguir Ejemplar en Papel en Amazon",
    obras_title: "Mis Obras",
    filter_all: "Todas las Obras",
    filter_dark_thriller: "Dark Romance / Thriller",
    filter_paranormal: "Paranormal / Cambiaformas",
    filter_mafia_contemporaneo: "Mafia / Contemporáneo",
    lazos_title: "Serie Lazos de Sangre",
    lazos_tagline: "Vínculos inquebrantables en un mundo de sombras",
    lazos_desc: "¿Qué sucede cuando tu peor enemigo es el lazo que te une a otro? Lazos de Sangre es una saga de romance paranormal LGBT que explora las profundidades del alma de aquellos que caminan entre dos mundos.",
    titles_in_series: "Títulos de la serie:",
    btn_buy_amazon: "Comprar en Amazon",
    autopista_title: "Autopista al infierno",
    autopista_tagline: "Cuando el orgullo es el peor enemigo",
    autopista_desc: "Carlos Narváez lo abandonó todo para ir en busca de su sueño. Junto a su mejor amigo, Alejandro, formó una banda de rock y peleó duro hasta convertirla en la mejor de la década.",
    pakhan_title: "La mujer del Pakhan",
    pakhan_tagline: "Cuando tu enemigo es tu destino",
    pakhan_desc: "Rachel Williams es una reconocida periodista que decide infiltrarse en la Solntsevskaya Bratva para obtener su gran historia.",
    casualidades_title: "Eso que llamamos casualidades",
    casualidades_tagline: "A veces el destino nos empuja para enseñarnos a nadar",
    casualidades_desc: "Adrián Ramírez no cree en las casualidades. Con su mundo derrumbándose, rentas atrasadas y un corazón roto, piensa que alguna fuerza superior está en su contra.",
    ravens_solo_header: "Crónicas de Raven's Ridge - Libros Individuales",
    sombra_title: "La sombra del cuervo",
    sombra_tagline: "Libro 1 de Crónicas de Raven's Ridge",
    sombra_desc: "Drake lo observa desde la oscuridad. Killian siente su mirada. Cuando Killian es acusado de secuestro y asesinato, su única esperanza es una voz distorsionada al teléfono y un hacker que se niega a mostrar su rostro.",
    sombra_question: "¿Te enamorarías de quien te acecha si es el único que puede salvarte?",
    misa_title: "Misa de ceniza",
    misa_tagline: "Libro 2 de Crónicas de Raven's Ridge",
    misa_desc: "El ritual ha comenzado. La identidad del asesino está más cerca de lo que imaginan.",
    blog_section_title: "Blog",
    blog_intro: "Novedades, avances y contenido exclusivo sobre mis libros.",
    blog_coming_soon: "Más entradas próximamente... 🖤",
    btn_all_posts: "Ver todos los posts del blog",
    contact_title: "Contacto",
    contact_intro: "¿Tienes alguna duda, sugerencia, propuesta o quieres saludar? Escríbeme y te responderé lo antes posible.",
    label_name: "NOMBRE COMPLETO",
    label_email: "CORREO ELECTRÓNICO",
    label_msg: "TU MENSAJE",
    placeholder_msg: "Escribe aquí tu mensaje...",
    btn_submit: "ENVIAR MENSAJE",
    contact_note: "🔒 Tus datos están protegidos. No compartimos tu información con terceros.",
    upcoming_title: "Próximos Lanzamientos",
    upcoming_cta_text: "¿Quieres ser el primero en saber cuándo están listos?",
    btn_join_circle: "Únete al Círculo Oscuro 🖤",
    newsletter_title: "Únete al Círculo Oscuro 🖤",
    newsletter_desc: "Recibe avances exclusivos, portadas en primicia y contenido que no publico en redes.",
    btn_subscribe: "Suscribirme",
    newsletter_note: "🔒 Sin spam. Puedes darte de baja cuando quieras.",
    footer_tagline: "Escrito con sangre, tinta y mucha masa madre."
  },
  en: {
    nav_inicio: "Home",
    nav_sobre_mi: "About Me",
    nav_obras: "Books",
    nav_blog: "Blog",
    nav_contacto: "Contact",
    nav_prensa: "Press Kit",
    hero_h1_sr: "L. R. Jeffers | Author of LGBT Paranormal Romance, Dark Romance & Romantic Thrillers",
    featured_section_title: "Latest Release",
    ravens_tagline: "Dark Romance with Techno-Thriller and Suspense",
    ravens_p1: "OBSESSION. SURVEILLANCE. REVENGE. In the Blue Ridge Mountains, the truth is paid in blood, and love is forged in shadows.",
    ravens_p2: "Welcome to Raven's Ridge, a town where the fog conceals ancient secrets and no one is who they seem. Drake Holloway and Killian Graves will discover that some bonds are deadlier than death itself.",
    btn_details: "View details & excerpt",
    btn_buy_bilogia: "Buy Duology on Amazon",
    transmedia_badge: "🔒 EXCLUSIVE BONUS • PHYSICAL EDITION",
    transmedia_title: "Transmedia Experience: Raven's Ridge Archive",
    transmedia_desc: "Scan the QR code found inside your physical copy and unlock the <strong>interactive Raven's Ridge Archive</strong>. Track your reading progress, investigate Drake and Killian's secrets, unlock classified dossiers, and see if you can identify the culprit before the finale.",
    btn_paperback: "📖 Get Paperback on Amazon",
    obras_title: "My Books & Series",
    filter_all: "All Works",
    filter_dark_thriller: "Dark Romance / Thriller",
    filter_paranormal: "Paranormal / Shifters",
    filter_mafia_contemporaneo: "Mafia / Contemporary",
    lazos_title: "Blood Ties Series",
    lazos_tagline: "Unbreakable bonds in a world of shadows",
    lazos_desc: "What happens when your deadliest enemy is the bond that ties you to another? Blood Ties is an LGBT paranormal romance saga exploring the souls of those who walk between two worlds.",
    titles_in_series: "Titles in the series:",
    btn_buy_amazon: "Buy on Amazon",
    autopista_title: "Highway to Hell",
    autopista_tagline: "When pride is your deadliest foe",
    autopista_desc: "Carlos Narváez gave up everything to chase his dream. Alongside his best friend Alejandro, he built a rock band and fought tooth and nail to make it the decade's finest.",
    pakhan_title: "The Pakhan's Woman",
    pakhan_tagline: "When your enemy is your destiny",
    pakhan_desc: "Rachel Williams is an acclaimed journalist who infiltrates the Solntsevskaya Bratva to break her biggest story.",
    casualidades_title: "What We Call Coincidences",
    casualidades_tagline: "Sometimes destiny pushes us to teach us how to swim",
    casualidades_desc: "Adrián Ramírez doesn't believe in coincidences. With his world unraveling, rent overdue, and a shattered heart, he thinks a higher power is conspiring against him.",
    ravens_solo_header: "Raven's Ridge Chronicles - Standalone Novels",
    sombra_title: "The Shadow of the Raven",
    sombra_tagline: "Book 1 of Raven's Ridge Chronicles",
    sombra_desc: "Drake watches from the shadows. Killian feels his gaze. When Killian is framed for kidnapping and murder, his sole lifeline is a distorted voice on the phone and a hacker who refuses to show his face.",
    sombra_question: "Would you fall for your stalker if he's the only one who can save you?",
    misa_title: "Ash Mass",
    misa_tagline: "Book 2 of Raven's Ridge Chronicles",
    misa_desc: "The ritual has begun. The killer's identity is far closer than anyone imagines.",
    blog_section_title: "Blog",
    blog_intro: "News, previews, and exclusive book content.",
    blog_coming_soon: "More posts coming soon... 🖤",
    btn_all_posts: "View all blog posts",
    contact_title: "Contact",
    contact_intro: "Got a question, suggestion, partnership, or just want to say hi? Drop me a line and I'll get back to you soon.",
    label_name: "FULL NAME",
    label_email: "EMAIL ADDRESS",
    label_msg: "YOUR MESSAGE",
    placeholder_msg: "Write your message here...",
    btn_submit: "SEND MESSAGE",
    contact_note: "🔒 Your data is safe. We never share your details with third parties.",
    upcoming_title: "Upcoming Releases",
    upcoming_cta_text: "Want to be the first to know when they drop?",
    btn_join_circle: "Join the Dark Circle 🖤",
    newsletter_title: "Join the Dark Circle 🖤",
    newsletter_desc: "Receive exclusive sneak peeks, early cover reveals, and content I don't share on social media.",
    btn_subscribe: "Subscribe",
    newsletter_note: "🔒 Zero spam. Unsubscribe anytime.",
    footer_tagline: "Written in blood, ink, and sourdough starter."
  },
  pt: {
    nav_inicio: "Início",
    nav_sobre_mi: "Sobre Mim",
    nav_obras: "Obras",
    nav_blog: "Blog",
    nav_contacto: "Contato",
    nav_prensa: "Kit de Imprensa",
    hero_h1_sr: "L. R. Jeffers | Autor de Romance Paranormal LGBT, Dark Romance e Thriller Romântico",
    featured_section_title: "Último Lançamento",
    ravens_tagline: "Dark Romance com toques de Techno-Thriller e suspense",
    ravens_p1: "OBSESSÃO. VIGILÂNCIA. VINGANÇA. Nas montanhas Blue Ridge, a verdade se paga com sangue e o amor nasce na escuridão.",
    ravens_p2: "Bem-vindo a Raven's Ridge, um vilarejo onde a névoa oculta segredos antigos e ninguém é quem parece ser. Drake Holloway e Killian Graves descobrirão que alguns laços são mais perigosos que a própria morte.",
    btn_details: "Ver detalhes e trecho",
    btn_buy_bilogia: "Comprar Duologia na Amazon",
    transmedia_badge: "🔒 BÔNUS EXCLUSIVO • EDIÇÃO FÍSICA",
    transmedia_title: "Experiência Transmídia: Arquivo Raven's Ridge",
    transmedia_desc: "Escaneie o código QR no interior do seu exemplar impresso e desbloqueie o <strong>Arquivo interativo Raven's Ridge</strong>. Registre seu progresso de leitura, investigue os segredos de Drake e Killian, desbloqueie dossiês confidenciais e descubra se é capaz de identificar o culpado antes do desfecho.",
    btn_paperback: "📖 Garantir Exemplar em Papel na Amazon",
    obras_title: "Minhas Obras",
    filter_all: "Todas as Obras",
    filter_dark_thriller: "Dark Romance / Thriller",
    filter_paranormal: "Paranormal / Metamorfos",
    filter_mafia_contemporaneo: "Máfia / Contemporâneo",
    lazos_title: "Série Laços de Sangue",
    lazos_tagline: "Vínculos inquebrantáveis em um mundo de sombras",
    lazos_desc: "O que acontece quando seu pior inimigo é o laço que o une a outro? Laços de Sangre é uma saga de romance paranormal LGBT que explora as profundezas da alma daqueles que caminham entre dois mundos.",
    titles_in_series: "Títulos de la serie:",
    btn_buy_amazon: "Comprar na Amazon",
    autopista_title: "Rodovia para o Inferno",
    autopista_tagline: "Quando o orgulho é o pior inimigo",
    autopista_desc: "Carlos Narváez largou tudo em busca de seu sonho. Ao lado de seu melhor amigo, Alejandro, formou uma banda de rock e lutou muito até transformá-la na melhor da década.",
    pakhan_title: "A Mulher do Pakhan",
    pakhan_tagline: "Quando seu inimigo é o seu destino",
    pakhan_desc: "Rachel Williams é uma jornalista de renome que decide se infiltrar na Bratva Solntsevskaya para conseguir sua grande reportagem.",
    casualidades_title: "O Que Chamamos de Coincidências",
    casualidades_tagline: "Às vezes o destino nos empurra para nos ensinar a nadar",
    casualidades_desc: "Adrián Ramírez não acredita em coincidências. Com seu mundo desmoronando, aluguel atrasado e o coração partido, ele pensa que alguma força superior conspira contra ele.",
    ravens_solo_header: "Crônicas de Raven's Ridge - Livros Individuais",
    sombra_title: "A Sombra do Corvo",
    sombra_tagline: "Livro 1 de Crônicas de Raven's Ridge",
    sombra_desc: "Drake o observa da escuridão. Killian sente seu olhar. Quando Killian é acusado de sequestro e assassinato, sua única esperança é uma voz distorcida ao telefone e um hacker que se recusa a mostrar o rosto.",
    sombra_question: "Você se apaixonaria por quem o espreita se ele for o único capaz de salvá-lo?",
    misa_title: "Missa de Cinzas",
    misa_tagline: "Livro 2 de Crônicas de Raven's Ridge",
    misa_desc: "O ritual começou. A identidade do assassino está mais perto do que imaginam.",
    blog_section_title: "Blog",
    blog_intro: "Novidades, prévias e conteúdo exclusivo sobre meus livros.",
    blog_coming_soon: "Mais postagens em breve... 🖤",
    btn_all_posts: "Ver todas as postagens do blog",
    contact_title: "Contato",
    contact_intro: "Tem alguma dúvida, sugestão, proposta ou quer mandar um oi? Escreva para mim e responderei o quanto antes.",
    label_name: "NOME COMPLETO",
    label_email: "E-MAIL",
    label_msg: "SUA MENSAGEM",
    placeholder_msg: "Escreva sua mensagem aqui...",
    btn_submit: "ENVIAR MENSAGEM",
    contact_note: "🔒 Seus dados estão protegidos. Não compartilhamos suas informações com terceiros.",
    upcoming_title: "Próximos Lançamentos",
    upcoming_cta_text: "Quer ser o primeiro a saber quando estiverem prontos?",
    btn_join_circle: "Junte-se ao Círculo Sombrio 🖤",
    newsletter_title: "Junte-se ao Círculo Sombrio 🖤",
    newsletter_desc: "Receba prévias exclusivas, revelações de capas em primeira mão e conteúdo que não publico nas redes.",
    btn_subscribe: "Inscrever-se",
    newsletter_note: "🔒 Sem spam. Cancele sua inscrição quando quiser.",
    footer_tagline: "Escrito com sangue, tinta e fermento natural."
  }
};

function cambiarIdiomaSitio(lang) {
  const dict = I18N_WEB[lang] || I18N_WEB.es;
  localStorage.setItem('lrj_web_lang', lang);

  // Actualizar botones de idioma activos
  document.querySelectorAll('.lang-nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Traducir elementos de texto
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Traducir placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Actualizar lang del documento
  const langCodes = { es: 'es-MX', en: 'en-US', pt: 'pt-BR' };
  document.documentElement.lang = langCodes[lang] || 'es-MX';
}

document.addEventListener('DOMContentLoaded', () => {
  const idiomaGuardado = localStorage.getItem('lrj_web_lang') || 'es';
  if (idiomaGuardado !== 'es') {
    cambiarIdiomaSitio(idiomaGuardado);
  }
});
