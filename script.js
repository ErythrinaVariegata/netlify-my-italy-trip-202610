const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

const checklistKey = 'italy-2026-checklist';
const boxes = Array.from(document.querySelectorAll('.checklist input'));
const saved = JSON.parse(localStorage.getItem(checklistKey) || '[]');
boxes.forEach((box, i) => {
  box.checked = Boolean(saved[i]);
  box.addEventListener('change', () => {
    localStorage.setItem(checklistKey, JSON.stringify(boxes.map(b => b.checked)));
  });
});

(function hotelUpdate() {
  const overview = document.querySelector('#overview .section-heading p:not(.eyebrow)');
  if (overview) overview.textContent = '8晚三城慢游：罗马和佛罗伦萨住宿已订；佛罗伦萨将作为求婚重点城市，威尼斯继续按浪漫、安静、交通方便筛选住宿。';

  const dayOne = document.querySelector('#itinerary .day:nth-child(1) .day-content p');
  if (dayOne) dayOne.textContent = '傍晚抵达 FCO 后直接打车或预约接送进城，入住 Le Méridien Visconti Rome。酒店位于 Prati / Piazza Cavour 一带，第一晚只安排简单晚餐与河边散步。';

  const hotels = document.querySelector('#hotels');
  if (!hotels) return;
  hotels.innerHTML = `
    <div class="section-heading hotel-heading"><p class="eyebrow">Hotels</p><h2>住宿安排与浪漫备选</h2><p>罗马、佛罗伦萨已预订；其他酒店只作为备选参考。佛罗伦萨按求婚体验和景观氛围整理，威尼斯按运河感、安静度和服务稳定性整理。</p></div>

    <div class="hotel-grid-v2">
      <article class="hotel-card-v2 booked"><div class="tag-row"><span class="tag booked-tag">已预订</span><span>罗马 · 9/27–9/30</span></div><h3>Le Méridien Visconti Rome</h3><p>Prati / Piazza Cavour 一带，安全安静、服务完整，适合长途抵达、行李寄存和梵蒂冈日。</p><div class="mini-note">继续备注：大床、安静房、高楼层、纪念日布置。</div></article>
      <article class="hotel-card-v2 booked featured"><div class="tag-row"><span class="tag booked-tag">已预订</span><span>佛罗伦萨 · 9/30–10/2</span></div><h3>La Casa del Garbo</h3><p>求婚氛围首选。位置就在 Piazza della Signoria，历史中心感很强，适合把 10/1 求婚日做成旅行高光。</p><div class="mini-note">建议邮件备注：proposal trip / quiet romantic room / best possible view。</div><div class="hotel-actions-v2"><a href="https://www.booking.com/hotel/it/la-casa-del-garbo.html?aid=2438770&checkin=2026-09-30&checkout=2026-10-02&no_rooms=1&group_adults=2&selected_currency=CNY" target="_blank" rel="noopener">Booking</a></div></article>
    </div>

    <div class="proposal-note"><h3>佛罗伦萨求婚建议</h3><p><strong>最推荐组合：</strong>住 La Casa del Garbo，10/1 傍晚在 Piazzale Michelangelo / 玫瑰花园求婚，之后去 B-Roof 或 Borgo San Jacopo 庆祝晚餐。La Casa del Garbo 更适合作为“求婚当天回到历史中心”的主场。</p></div>

    <div class="hotel-section-v2"><div class="city-title"><p>Florence backups</p><h3>佛罗伦萨备选酒店</h3></div><div class="hotel-grid-v2 three">
      <article class="hotel-card-v2"><div class="tag-row"><span class="tag view-tag">正式酒店备选</span><span>约 ¥3,814/晚</span></div><h3>Grand Hotel Cavour</h3><p>位置很好，靠近 Duomo 和老城核心，优势是 24 小时前台、正式酒店服务、屋顶露台和景观酒吧。更适合做“服务稳 + 屋顶景观”的备选，不需要替换已订的 La Casa del Garbo。</p><div class="mini-note">Tripadvisor 约 4.2/5、近 3,000 条评价；Booking 当前约 ¥7,628 / 2晚，Booking 8.9。注意：房间景观不保证，屋顶需预约且饮品价格偏高。</div><div class="hotel-actions-v2"><a href="https://www.booking.com/hotel/it/grandhotelcavour.html?aid=2438770&checkin=2026-09-30&checkout=2026-10-02&no_rooms=1&group_adults=2&selected_currency=CNY" target="_blank" rel="noopener">Booking</a><a href="https://www.tripadvisor.com/Hotel_Review-g187895-d195406-Reviews-Grand_Hotel_Cavour-Florence_Tuscany.html" target="_blank" rel="noopener">Tripadvisor</a></div></article>
      <article class="hotel-card-v2"><div class="tag-row"><span class="tag calm-tag">稳妥备选</span><span>约 ¥1,643/晚</span></div><h3>Residenza Il Villino B&amp;B</h3><p>安静历史建筑、庭院、自制早餐和主人服务口碑稳。不是景观型，但如果你更在意舒服和稳定，它是很好的备选。</p><div class="mini-note">优先 Superior Double；无电梯。</div></article>
      <article class="hotel-card-v2"><div class="tag-row"><span class="tag spa-tag">放松备选</span><span>约 ¥2,338/晚</span></div><h3>The Moon Boutique Hotel &amp; Spa</h3><p>更偏精品酒店 + Spa，适合求婚后放松。不是最强景观型，订前再看近期评论与取消政策。</p></article>
    </div></div>

    <div class="hotel-section-v2"><div class="city-title"><p>Venice romantic picks</p><h3>威尼斯住宿推荐</h3></div><div class="hotel-grid-v2 three">
      <article class="hotel-card-v2 featured"><div class="tag-row"><span class="tag romance-tag">浪漫首选</span><span>约 ¥1,803/晚</span></div><h3>Ca’ Bonvicini B&amp;B</h3><p>小型、安静、有运河感，适合情侣慢游。若有 canal view / balcony 房型，优先锁定。</p><div class="mini-note">Booking 9.6；Tripadvisor 约 4.8/5、800+ 条评价。</div></article>
      <article class="hotel-card-v2"><div class="tag-row"><span class="tag service-tag">服务稳妥</span><span>约 ¥2,381/晚</span></div><h3>Casa Verardo Residenza d’Epoca</h3><p>更像正式酒店，近圣马可，24 小时前台、早餐、花园/露台体验更稳。</p></article>
      <article class="hotel-card-v2"><div class="tag-row"><span class="tag view-tag">运河景备选</span><span>约 ¥2,228/晚</span></div><h3>Dimora Al Doge Beato Canal View</h3><p>古典感和运河景更强，订前务必确认房内独立卫浴。</p></article>
    </div></div>

    <div class="notice"><strong>当前结论：</strong>佛罗伦萨已订 La Casa del Garbo 很合适，不建议为了 Grand Hotel Cavour 再改订；Grand Hotel Cavour 可作为“正式酒店 + 屋顶景观”的备选。威尼斯优先 Ca’ Bonvicini，想要更完整酒店服务则看 Casa Verardo。</div>`;

  const labels = Array.from(document.querySelectorAll('.checklist label'));
  const hotelLabel = labels.find(label => /酒店|住宿|Le Méridien|Residenza|Ca’|Casa|Garbo/i.test(label.textContent));
  if (hotelLabel) {
    hotelLabel.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) node.textContent = ' 罗马 Le Méridien Visconti Rome 已订；佛罗伦萨 La Casa del Garbo 已订；威尼斯优先 Ca’ Bonvicini / Casa Verardo，并确认取消政策、城市税、早餐和行李寄存';
    });
  }

  const footer = document.querySelector('.footer p');
  if (footer) footer.textContent = 'Made for your Italy trip · 最后更新 2026.07.01 · 已纳入佛罗伦萨 La Casa del Garbo 与 Grand Hotel Cavour 备选';

  const style = document.createElement('style');
  style.textContent = `.hotel-grid-v2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;margin-top:18px}.hotel-grid-v2.three{grid-template-columns:repeat(3,minmax(0,1fr))}.hotel-card-v2,.proposal-note{background:#fff;border:1px solid rgba(190,166,132,.3);border-radius:24px;padding:22px;box-shadow:0 12px 28px rgba(55,45,32,.05)}.hotel-card-v2.featured{border-color:rgba(142,87,74,.35);background:linear-gradient(180deg,#fff,rgba(142,87,74,.04))}.hotel-card-v2.booked{border-color:rgba(46,123,73,.3)}.tag-row{display:flex;justify-content:space-between;gap:10px;align-items:center;flex-wrap:wrap;color:#786c5e;font-size:13px}.tag{padding:6px 10px;border-radius:999px;font-weight:800;font-size:12px}.booked-tag{background:rgba(46,123,73,.14);color:#2e7b49}.view-tag{background:rgba(83,113,130,.14);color:#3f6477}.calm-tag{background:rgba(96,120,92,.14);color:#587755}.spa-tag{background:rgba(104,90,146,.14);color:#66589a}.romance-tag{background:rgba(142,73,102,.14);color:#894763}.service-tag{background:rgba(150,105,56,.14);color:#8f642f}.hotel-card-v2 h3,.proposal-note h3{margin:12px 0 8px;font-size:24px;line-height:1.25}.hotel-card-v2 p,.proposal-note p{margin:0;color:#625a50;line-height:1.75}.mini-note{margin-top:12px;padding:12px 14px;border-radius:16px;background:rgba(126,97,62,.07);color:#665c50;line-height:1.6}.hotel-actions-v2{display:flex;gap:10px;flex-wrap:wrap;margin-top:14px}.hotel-actions-v2 a{background:#7f3e38;color:#fff;text-decoration:none;border-radius:999px;padding:10px 15px;font-weight:800}.hotel-section-v2{margin-top:24px}.city-title p{margin:0 0 4px;color:#9b7655;font-size:12px;font-weight:900;letter-spacing:.1em;text-transform:uppercase}.city-title h3{margin:0;font-size:28px}.proposal-note{margin-top:22px;background:linear-gradient(135deg,rgba(142,73,102,.08),rgba(194,149,80,.08))}@media(max-width:1050px){.hotel-grid-v2,.hotel-grid-v2.three{grid-template-columns:1fr 1fr}}@media(max-width:720px){.hotel-grid-v2,.hotel-grid-v2.three{grid-template-columns:1fr}.hotel-card-v2,.proposal-note{padding:18px}.hotel-card-v2 h3,.proposal-note h3{font-size:21px}}`;
  document.head.appendChild(style);
})();
