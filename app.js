// ── ANIME FIGURES DATABASE ──
const PRODUCTS = [
  // ACTION FIGURES
  { id:1,  name:'Demon Slayer Tanjiro',       cat:'action',   emoji:'⚔️',  price:2499, old:2999, badge:'hot',     acc:'acc-pink',   stars:5, reviews:412, scale:'1/8', material:'PVC + ABS', age:'15+', series:'Kimetsu no Yaiba',   desc:'Highly articulated Tanjiro in Water Breathing form. 22cm, 18 joints, includes interchangeable hands and Nichirin Blade.' },
  { id:2,  name:'Naruto Sage Mode',            cat:'action',   emoji:'🍥',  price:1999, old:null, badge:'new',     acc:'acc-gold',   stars:5, reviews:288, scale:'1/10', material:'PVC',      age:'14+', series:'Naruto Shippuden',    desc:'Sage Mode Naruto with Rasengan effect part, toad sage cape, and dynamic wind base. 18cm tall collector figure.' },
  { id:3,  name:'Goku Ultra Instinct',         cat:'action',   emoji:'🐉',  price:3299, old:3999, badge:'sale',    acc:'acc-blue',   stars:5, reviews:519, scale:'1/8',  material:'Die-Cast',  age:'15+', series:'Dragon Ball Super',   desc:'Ultra Instinct Goku with silver aura effect, energy sphere, and illuminated base (AAA battery). 24cm premium figure.' },
  { id:4,  name:'Mikasa Ackerman',             cat:'action',   emoji:'🗡️',  price:2199, old:null, badge:'limited', acc:'acc-red',    stars:5, reviews:176, scale:'1/8',  material:'PVC + ABS', age:'16+', series:'Attack on Titan',      desc:'Survey Corps Mikasa with ODM gear, blade set, and city rooftop diorama base. Highly detailed sculpt by top artisan.' },
  { id:5,  name:'Itadori Yuji Battle Mode',    cat:'action',   emoji:'👊',  price:1799, old:1999, badge:'sale',    acc:'acc-purple', stars:4, reviews:134, scale:'1/10', material:'PVC',      age:'15+', series:'Jujutsu Kaisen',      desc:'Yuji in pink cursed energy mode, dynamic punching pose, Sukuna tattoo details painted by hand on every piece.' },
  { id:6,  name:'Levi Ackerman Titan Slayer',  cat:'action',   emoji:'⚡',  price:2799, old:null, badge:'rare',    acc:'acc-teal',   stars:5, reviews:398, scale:'1/8',  material:'Resin',    age:'16+', series:'Attack on Titan',      desc:'Captain Levi mid-spin with twin blades, wire trails, and blood effect base. Limited run of 500 worldwide.' },

  // STATUES / FIGURES
  { id:7,  name:'Zero Two Premium Statue',     cat:'statue',   emoji:'💗',  price:5999, old:6999, badge:'hot',     acc:'acc-pink',   stars:5, reviews:633, scale:'1/6',  material:'PVC + ABS', age:'18+', series:'Darling in the FranXX',desc:'Zero Two in Klaxosaur princess dress. 30cm masterpiece with holographic eyes, magnetic accessories, and LED lit base.' },
  { id:8,  name:'Rem Re:Zero Wedding',         cat:'statue',   emoji:'💙',  price:4999, old:null, badge:'limited', acc:'acc-blue',   stars:5, reviews:287, scale:'1/7',  material:'PVC',      age:'18+', series:'Re:Zero',              desc:'Rem in bridal gown with morning star prop and rose petal base. A fan-favourite in pristine 28cm format.' },
  { id:9,  name:'Nami Wano Arc',               cat:'statue',   emoji:'🌊',  price:3499, old:3999, badge:'sale',    acc:'acc-cyan',   stars:4, reviews:201, scale:'1/8',  material:'PVC + ABS', age:'16+', series:'One Piece',            desc:'Nami in Wano Arc kimono, Clima-Tact ready, cloud and wave base. Vibrant colors with metallic ink finish.' },
  { id:10, name:'Asuka Evangelion',            cat:'statue',   emoji:'🤖',  price:6499, old:null, badge:'rare',    acc:'acc-red',    stars:5, reviews:511, scale:'1/6',  material:'Resin',    age:'18+', series:'Neon Genesis Evangelion',desc:'Asuka in iconic red plugsuit with Unit-02 armour base. Hand-painted resin, edition of 300. Certificate included.' },

  // MECHA
  { id:11, name:'RX-78-2 Gundam MG',           cat:'mecha',    emoji:'🤖',  price:4499, old:4999, badge:'sale',    acc:'acc-blue',   stars:5, reviews:722, scale:'1/100', material:'Plastic Kit', age:'12+', series:'Mobile Suit Gundam', desc:'Master Grade RX-78-2 Ver 3.0 — full inner frame, 180° articulation, die-cast joints, 6 weapons included. 178 parts.' },
  { id:12, name:'Wing Gundam Zero EW',         cat:'mecha',    emoji:'🦅',  price:5999, old:null, badge:'hot',     acc:'acc-cyan',   stars:5, reviews:489, scale:'1/100', material:'Plastic Kit', age:'14+', series:'Gundam Wing',         desc:'EW ver. Wing Gundam Zero with Twin Buster Rifle, angel wings fully articulated, metallic paint finish optional.' },
  { id:13, name:'Evangelion Unit-01',          cat:'mecha',    emoji:'💜',  price:7999, old:9999, badge:'sale',    acc:'acc-purple', stars:5, reviews:344, scale:'1/144', material:'Resin Kit',   age:'16+', series:'NGE',                 desc:'Premium resin Unit-01 in berserker pose. Museum quality, hand-assembled, display base with AT Field effect.' },

  // CHIBI / NENDOROID
  { id:14, name:'Pikachu Nendoroid',           cat:'chibi',    emoji:'⚡',  price:1299, old:1499, badge:'sale',    acc:'acc-gold',   stars:5, reviews:897, scale:'1/12', material:'PVC + ABS', age:'6+',  series:'Pokémon',              desc:'Cheerful Pikachu nendo with 3 face plates, Thunderbolt effect, Ash\'s cap accessory, and Poké Ball base.' },
  { id:15, name:'Hinata Shoyo Nendoroid',      cat:'chibi',    emoji:'🏐',  price:1499, old:null, badge:'new',     acc:'acc-gold',   stars:5, reviews:412, scale:'1/12', material:'PVC',      age:'8+',  series:'Haikyuu!!',            desc:'Hinata in Karasuno uniform — 3 face plates, volleyball effect parts, and Kageyama mini figure included.' },
  { id:16, name:'Totoro Forest Spirit',        cat:'chibi',    emoji:'🌳',  price:999,  old:1199, badge:'sale',    acc:'acc-green',  stars:5, reviews:632, scale:'Chibi', material:'PVC',     age:'3+',  series:'My Neighbor Totoro',   desc:'Giant Totoro with Catbus, Soot Sprites, and umbrella scene. Perfect bedside display for Studio Ghibli fans.' },

  // DIORAMA
  { id:17, name:'Spirited Away Bath House',    cat:'diorama',  emoji:'🏮',  price:8999, old:null, badge:'limited', acc:'acc-gold',   stars:5, reviews:211, scale:'Diorama', material:'Resin + PVC', age:'15+', series:'Spirited Away',    desc:'Multi-level bath house diorama. Chihiro, Haku, Yubaba, Sen, and 12 spirit figures. 40cm wide masterpiece.' },
  { id:18, name:'Tokyo Street Night Scene',    cat:'diorama',  emoji:'🌃',  price:5499, old:5999, badge:'sale',    acc:'acc-cyan',   stars:4, reviews:88,  scale:'Diorama', material:'Resin',      age:'15+', series:'Original',         desc:'Neon-lit anime street with LED lighting system, 8 chibi figures, vending machine, and rain puddle effect.' },

  // PLUSH
  { id:19, name:'Jigglypuff XL Plush',        cat:'plush',    emoji:'🎤',  price:799,  old:999,  badge:'sale',    acc:'acc-pink',   stars:5, reviews:341, scale:'XL 40cm', material:'Polyester', age:'3+', series:'Pokémon',             desc:'Super soft 40cm Jigglypuff with embroidered eyes, microphone prop, and coin purse inside the belly pocket.' },
  { id:20, name:'Nezuko in Box Plush',         cat:'plush',    emoji:'📦',  price:1199, old:null, badge:'new',     acc:'acc-pink',   stars:5, reviews:197, scale:'30cm',   material:'Minky Fabric', age:'5+', series:'Demon Slayer',      desc:'Nezuko curled in her carrying box — a unique 2-in-1 plush set. Bamboo muzzle detail, removable box shell.' },
  { id:21, name:'Calcifer Fire Plush',         cat:'plush',    emoji:'🔥',  price:699,  old:799,  badge:'sale',    acc:'acc-gold',   stars:5, reviews:508, scale:'20cm',   material:'Velboa',    age:'3+',  series:'Howl\'s Moving Castle',desc:'Glowing orange Calcifer with inner LED glow effect. Sits perfectly on fingertip. Safe, huggable, and magical.' },

  // GARAGE KITS
  { id:22, name:'Denji Chainsaw Man Kit',      cat:'garage',   emoji:'⛓️',  price:3999, old:null, badge:'limited', acc:'acc-red',    stars:5, reviews:93,  scale:'1/8', material:'Resin Kit', age:'18+', series:'Chainsaw Man',        desc:'Unassembled resin garage kit — Denji mid-transformation with chainsaw blade effect. Requires painting. Expert level.' },
  { id:23, name:'Power Blood Fiend Kit',       cat:'garage',   emoji:'🩸',  price:3299, old:3999, badge:'sale',    acc:'acc-red',    stars:4, reviews:67,  scale:'1/8', material:'Resin Kit', age:'18+', series:'Chainsaw Man',        desc:'Power in fiend form — aggressive pose, blood weapon effects. Resin garage kit for experienced builders.' },
  { id:24, name:'Froppy Hero Suit Kit',        cat:'garage',   emoji:'🐸',  price:2199, old:null, badge:'new',     acc:'acc-green',  stars:5, reviews:119, scale:'1/8', material:'Resin Kit', age:'16+', series:'My Hero Academia',    desc:'Tsuyu Asui in hero gear, tongue extended, frog wall base. Beginner-friendly resin kit with painting guide.' },
];

// ── CART ──
function getCart(){ try{ return JSON.parse(localStorage.getItem('animebox_cart')||'[]'); }catch(e){ return []; } }
function saveCart(c){ try{ localStorage.setItem('animebox_cart',JSON.stringify(c)); }catch(e){} }
function addToCart(id, name){
  const cart = getCart();
  const idx = cart.findIndex(i=>i.id===id);
  if(idx>-1){ cart[idx].qty++; } else { cart.push({id,qty:1}); }
  saveCart(cart);
  updateCartBadge();
  showToast(`✅ ${name} added!`);
}
function updateCartBadge(){
  const total = getCart().reduce((s,i)=>s+i.qty,0);
  document.querySelectorAll('#cart-count').forEach(el=>el.textContent=total);
}
function showToast(msg){
  let t = document.getElementById('toast');
  if(!t){ t=document.createElement('div'); t.id='toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 2800);
}

// ── REVEAL ──
function initReveal(){
  const els = document.querySelectorAll('.reveal,.reveal-left,.reveal-right');
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach((e,i)=>{ if(e.isIntersecting){ setTimeout(()=>e.target.classList.add('visible'), i*80); obs.unobserve(e.target); } });
  },{ threshold:0.1 });
  els.forEach(el=>obs.observe(el));
}

// ── CURSOR ──
function initCursor(){
  const c = document.getElementById('cursor');
  const t = document.getElementById('cursor-trail');
  if(!c) return;
  document.addEventListener('mousemove',e=>{
    c.style.left=(e.clientX-8)+'px'; c.style.top=(e.clientY-8)+'px';
    t.style.left=(e.clientX-16)+'px'; t.style.top=(e.clientY-16)+'px';
  });
  document.addEventListener('mousedown',()=>c.style.transform='scale(0.6)');
  document.addEventListener('mouseup',()=>c.style.transform='scale(1)');
}

// ── SAKURA ──
function initSakura(container){
  if(!container) return;
  const petals = ['🌸','🌸','🌸','💮','🌺'];
  const positions = [10,20,35,50,65,80,90];
  for(let i=0;i<10;i++){
    const p = document.createElement('div');
    p.className = 'petal';
    p.textContent = petals[Math.floor(Math.random()*petals.length)];
    p.style.left = positions[Math.floor(Math.random()*positions.length)]+'%';
    p.style.fontSize = (0.7+Math.random()*0.8)+'rem';
    p.style.animationDuration = (8+Math.random()*10)+'s';
    p.style.animationDelay = (Math.random()*8)+'s';
    container.appendChild(p);
  }
}

// ── HELPERS ──
function stars(n){ return '★'.repeat(n)+'☆'.repeat(5-n); }
function currency(n){ return '¥'+n.toLocaleString('en-IN'); }

function productCard(p){
  return `<a class="product-card reveal" href="product.html?id=${p.id}">
    <div class="card-img ${p.acc}">
      <span class="vi" style="filter:drop-shadow(0 0 12px rgba(255,45,120,0.3))">${p.emoji}</span>
      ${p.badge?`<span class="card-badge badge-${p.badge}">${p.badge.toUpperCase()}</span>`:''}
    </div>
    <div class="card-body">
      <div class="card-cat">${p.series}</div>
      <div class="card-name">${p.name}</div>
      <div class="card-stars">${stars(p.stars)} <span>(${p.reviews})</span></div>
      <div class="card-foot">
        <div class="card-price">${p.old?`<span class="old-p">${currency(p.old)}</span>`:''} ${currency(p.price)}</div>
        <button class="add-btn" onclick="event.preventDefault();addToCart(${p.id},'${p.name}')">+</button>
      </div>
    </div>
  </a>`;
}

function navHTML(activePage){
  const pages=[
    {href:'index.html',label:'Home'},
    {href:'shop.html',label:'Shop'},
    {href:'collections.html',label:'Collections'},
    {href:'deals.html',label:'Deals'},
    {href:'about.html',label:'About'},
  ];
  return `
  <div class="marquee-strip">
    <div class="marquee-inner">
      <span>⚔️ DEMON SLAYER</span><span>🍥 NARUTO</span><span>🐉 DRAGON BALL</span><span>🤖 GUNDAM</span><span>💙 RE:ZERO</span><span>🏮 GHIBLI</span><span>⚡ POKÉMON</span><span>🗡️ AOT</span><span>💗 DARLING FranXX</span><span>👊 JUJUTSU KAISEN</span>
      <span>⚔️ DEMON SLAYER</span><span>🍥 NARUTO</span><span>🐉 DRAGON BALL</span><span>🤖 GUNDAM</span><span>💙 RE:ZERO</span><span>🏮 GHIBLI</span><span>⚡ POKÉMON</span><span>🗡️ AOT</span><span>💗 DARLING FranXX</span><span>👊 JUJUTSU KAISEN</span>
    </div>
  </div>
  <nav>
    <a href="index.html" class="logo">⛩️ ANIMEBOX</a>
    <ul>${pages.map(p=>`<li><a href="${p.href}" class="${activePage===p.href?'active':''}">${p.label}</a></li>`).join('')}</ul>
    <div class="nav-actions">
      <a href="shop.html" class="btn btn-neon" style="font-size:0.8rem;padding:0.45rem 1rem;">🔍 Search</a>
      <div class="cart-wrap">
        <a href="cart.html" class="btn btn-cyan" style="font-size:0.8rem;padding:0.45rem 1rem;">🛒 Cart <span id="cart-count">0</span></a>
      </div>
    </div>
  </nav>`;
}

function footerHTML(){
  return `<hr class="neon-divider">
  <footer>
    <div class="footer-grid">
      <div>
        <div class="f-logo">⛩️ ANIMEBOX</div>
        <p class="f-desc">Japan's finest anime figure collectibles delivered to your door. Premium PVC, resin, and mecha kits from all your favourite series.</p>
      </div>
      <div><h4>Shop</h4><ul>
        <li><a href="shop.html">All Figures</a></li>
        <li><a href="deals.html">New Arrivals</a></li>
        <li><a href="deals.html">On Sale</a></li>
        <li><a href="collections.html">Gift Sets</a></li>
      </ul></div>
      <div><h4>Support</h4><ul>
        <li><a href="about.html">FAQ</a></li>
        <li><a href="#">Shipping</a></li>
        <li><a href="#">Returns</a></li>
        <li><a href="about.html">Contact</a></li>
      </ul></div>
      <div><h4>Series</h4><ul>
        <li><a href="shop.html?cat=action">Action Figures</a></li>
        <li><a href="shop.html?cat=statue">Statues</a></li>
        <li><a href="shop.html?cat=mecha">Mecha / Gundam</a></li>
        <li><a href="shop.html?cat=chibi">Nendoroids</a></li>
      </ul></div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 AnimeBox. All rights reserved. All characters © respective studios.</span>
      <div class="social-row">
        <a class="soc" href="#">📘</a>
        <a class="soc" href="#">📸</a>
        <a class="soc" href="#">🐦</a>
        <a class="soc" href="#">▶️</a>
      </div>
    </div>
  </footer>`;
}

function sharedInit(){
  document.getElementById('site-header').innerHTML = navHTML(window.PAGE_ID||'index.html');
  document.getElementById('site-footer').innerHTML = footerHTML();
  updateCartBadge();
  initReveal();
  initCursor();
}

document.addEventListener('DOMContentLoaded', sharedInit);
