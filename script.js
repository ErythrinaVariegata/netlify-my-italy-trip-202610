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

(function updateHotelCards() {
  const overview = document.querySelector('#overview .section-heading p:not(.eyebrow)');
  if (overview) overview.textContent = '8晚三城慢游：罗马、佛罗伦萨、威尼斯三城住宿均已订。威尼斯以 voco Venice Mestre 为基地，按早进岛、晚返 Mestre、清晨陆路去机场来执行。';

  const bookingRows = Array.from(document.querySelectorAll('.booking-table tbody tr'));
  const hotelRow = bookingRows.find(row => row.cells[0]?.textContent.includes('三城住宿'));
  if (hotelRow) {
    hotelRow.cells[2].innerHTML = '<span class="pill done">三城已订</span>';
    hotelRow.cells[3].textContent = '罗马已订 Le Méridien Visconti Rome；佛罗伦萨已订 La Casa del Garbo；威尼斯已订 voco Venice Mestre - The Quid by IHG。暂时不展示备选酒店，不公开任何预订号。';
  }

  const hotels = document.querySelector('#hotels');
  if (!hotels) return;

  hotels.innerHTML = `
    <div class="section-heading"><p class="eyebrow">Hotels</p><h2>住宿信息</h2><p>三城住宿已确认，住宿区已改为“已订酒店”视图。暂时不再展示候选酒店、备选酒店和价格比较；网页只记录酒店名称、所在区域和行程影响，不公开任何订单号或确认码。</p></div>

    <div class="hotel-grid-v2 three">
      <article class="hotel-card-v2 booked"><div class="tag-row"><span class="tag booked-tag">已预订</span><span>罗马 · 9/27–9/30</span></div><h3>Le Méridien Visconti Rome</h3><p>Prati / Piazza Cavour 一带，安全安静、服务完整，适合长途抵达、行李寄存和梵蒂冈日。去圣彼得、圣天使堡、人民广场方向都比较顺。</p><div class="mini-note">建议保留备注：大床、安静房、高楼层。网页不记录订单号。</div></article>
      <article class="hotel-card-v2 booked featured"><div class="tag-row"><span class="tag booked-tag">已预订</span><span>佛罗伦萨 · 9/30–10/2</span></div><h3>La Casa del Garbo</h3><p>位置就在 Piazza della Signoria，历史中心感很强。适合作为佛罗伦萨两晚主住宿，晚上散步、餐厅衔接、乌菲兹和老桥动线都很方便。</p><div class="mini-note">建议保留备注：quiet romantic room / best possible view。网页不记录订单号。</div></article>
      <article class="hotel-card-v2 booked"><div class="tag-row"><span class="tag booked-tag">已预订</span><span>威尼斯 · 10/2–10/5</span></div><h3>voco Venice Mestre - The Quid by IHG</h3><p>位于 Mestre 大陆区，不在威尼斯本岛。优势是品牌酒店、房间和服务稳定、行李友好，10/5 清晨去 Marco Polo Airport 更省心。</p><div class="mini-note">行程按“10/2 高铁到 Venezia Mestre、每天早进岛、岛上连贯游览、晚返 Mestre、10/5 清晨陆路去机场”执行。</div></article>
    </div>

    <div class="notice"><strong>住宿策略：</strong>三城住宿已定，暂时隐藏所有备选。罗马和佛罗伦萨继续按市中心步行动线规划；威尼斯不再按本岛酒店设计，不安排中午回酒店午休，改为岛上咖啡馆/餐厅休息。最后一天从 Mestre 陆路去 VCE，取消水上出租车方案。</div>`;

  const labels = Array.from(document.querySelectorAll('.checklist label'));
  labels.forEach(label => {
    const text = label.textContent;
    if (/罗马住宿|Le Méridien|Passpartout|Relais/i.test(text)) {
      label.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) node.textContent = ' 罗马 Le Méridien Visconti Rome 已订，保存订单和取消政策离线副本';
      });
    }
    if (/佛罗伦萨住宿|Casa del Garbo|Residenza|Garbo/i.test(text)) {
      label.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) node.textContent = ' 佛罗伦萨 La Casa del Garbo 已订，保存订单和取消政策离线副本';
      });
    }
    if (/voco Venice Mestre|威尼斯住宿/i.test(text)) {
      label.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) node.textContent = ' 威尼斯 voco Venice Mestre - The Quid by IHG 已订，保存订单离线副本，并确认 10/5 清晨陆路接送';
      });
    }
  });

  const footer = document.querySelector('.footer p');
  if (footer) footer.textContent = 'Made for your Italy trip · 最后更新 2026.07.03 · 三城住宿已订，已隐藏住宿备选';

  const style = document.createElement('style');
  style.textContent = `.hotel-grid-v2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;margin-top:18px}.hotel-grid-v2.three{grid-template-columns:repeat(3,minmax(0,1fr))}.hotel-card-v2{background:#fff;border:1px solid rgba(190,166,132,.3);border-radius:24px;padding:22px;box-shadow:0 12px 28px rgba(55,45,32,.05)}.hotel-card-v2.featured{border-color:rgba(142,87,74,.35);background:linear-gradient(180deg,#fff,rgba(142,87,74,.04))}.hotel-card-v2.booked{border-color:rgba(46,123,73,.3)}.tag-row{display:flex;justify-content:space-between;gap:10px;align-items:center;flex-wrap:wrap;color:#786c5e;font-size:13px}.tag{padding:6px 10px;border-radius:999px;font-weight:800;font-size:12px}.booked-tag{background:rgba(46,123,73,.14);color:#2e7b49}.hotel-card-v2 h3{margin:12px 0 8px;font-size:24px;line-height:1.25}.hotel-card-v2 p{margin:0;color:#625a50;line-height:1.75}.mini-note{margin-top:12px;padding:12px 14px;border-radius:16px;background:rgba(126,97,62,.07);color:#665c50;line-height:1.6}.hotel-section-v2{margin-top:24px}.city-title p{margin:0 0 4px;color:#9b7655;font-size:12px;font-weight:900;letter-spacing:.1em;text-transform:uppercase}.city-title h3{margin:0;font-size:28px}@media(max-width:1050px){.hotel-grid-v2,.hotel-grid-v2.three{grid-template-columns:1fr 1fr}}@media(max-width:720px){.hotel-grid-v2,.hotel-grid-v2.three{grid-template-columns:1fr}.hotel-card-v2{padding:18px}.hotel-card-v2 h3{font-size:21px}}`;
  document.head.appendChild(style);
})();

(function addFlorenceDinnerBookingCards() {
  const grid = document.querySelector('#food .restaurant-grid');
  if (!grid || document.querySelector('.reservation-card-broof')) return;
  const wrapper = document.createElement('div');
  wrapper.className = 'restaurant-reservation-highlight';
  wrapper.innerHTML = `
    <article class="restaurant-card reservation-card-broof"><div><span>10/1 · 佛罗伦萨景观晚餐</span><h3>B-Roof Restaurant</h3><p>官网可在线订位；晚餐时段通常从 19:30 起。也可电话 +39 055 23588560 或邮件 info@b-roof.it。若只想先喝一杯看景，需另看 American Bar 订位。</p></div><strong>建议 20:00–20:30</strong><a href="https://b-roof.myrestoo.net/en/reservar" rel="noopener" target="_blank">在线订位</a></article>
    <article class="restaurant-card"><div><span>10/1 · 佛罗伦萨河景正式晚餐</span><h3>Borgo San Jacopo</h3><p>官网通过 SevenRooms 订位；开放时间为周三至周日 19:00–22:00。也可电话 +39 055 281661、WhatsApp +39 342 1234710、邮件 bsj@lungarnocollection.com。</p></div><strong>建议 20:00</strong><a href="https://www.sevenrooms.com/explore/borgosanjacopo/reservations/create/search/landing?lang=it&venues=borgosanjacopo%2Ccaffdelloro" rel="noopener" target="_blank">Book a table</a></article>`;
  grid.prepend(wrapper);
  const style = document.createElement('style');
  style.textContent = `.restaurant-reservation-highlight{grid-column:1/-1;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;margin-bottom:4px}.restaurant-reservation-highlight .restaurant-card{border:1px solid rgba(127,62,56,.22);background:linear-gradient(180deg,#fff,rgba(127,62,56,.035))}@media(max-width:760px){.restaurant-reservation-highlight{grid-template-columns:1fr}}`;
  document.head.appendChild(style);
})();