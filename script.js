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

(function updateRomeHotelToLeMeridien() {
  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.setAttribute('content', '2026年9月27日香港出发，10月5日威尼斯返程：罗马、佛罗伦萨、威尼斯三城情侣旅行攻略，含已订罗马 Le Méridien Visconti Rome、餐厅、景点放票日、官方预约链接、已订梵蒂冈博物馆下午票与博尔盖塞美术馆。');
  }

  const overviewText = document.querySelector('#overview .section-heading p:not(.eyebrow)');
  if (overviewText) {
    overviewText.textContent = '8晚三城慢游：罗马保留完整的古城夜晚，佛罗伦萨集中看文艺复兴精品，威尼斯安排主岛、Burano 与清晨机场接送。罗马住宿已更新为已订的 Le Méridien Visconti Rome；佛罗伦萨和威尼斯继续保留原高评分浪漫住宿方案。';
  }

  const dayOne = document.querySelector('#itinerary .day:nth-child(1) .day-content p');
  if (dayOne) {
    dayOne.textContent = '傍晚抵达 FCO 后直接打车或预约接送进城，入住 Le Méridien Visconti Rome。酒店位于 Prati / Piazza Cavour 一带，第一晚只安排简单晚餐；有精神再走圣天使堡、台伯河或纳沃纳广场夜色，不安排不可取消门票。';
  }

  const hotelsHeading = document.querySelector('#hotels .section-heading');
  if (hotelsHeading) {
    hotelsHeading.innerHTML = `<p class="eyebrow">Hotels</p><h2>住宿安排</h2><p>罗马已改为你们实际预订的 Le Méridien Visconti Rome；佛罗伦萨和威尼斯仍保留原高评分浪漫住宿建议。罗马实际价格、早餐、城市税和取消政策以订单为准。</p>`;
  }

  const firstHotel = document.querySelector('#hotels .featured-hotels .hotel');
  if (firstHotel) {
    firstHotel.classList.add('booked');
    firstHotel.innerHTML = `<p class="hotel-kicker">罗马 · 9/27–9/30 · 3晚 · 已预订</p>
<h3>Le Méridien Visconti Rome｜罗马艾美维斯康迪酒店</h3>
<p>Via Federico Cesi 37，位于 Prati / Piazza Cavour 一带，安全、安静且交通方便。适合你们 9/28 圣彼得大教堂 + 梵蒂冈博物馆日，也比小型 guesthouse 更适合长途抵达后的入住和行李寄存。</p>
<div class="rating-line">Booking 8.5；Tripadvisor 约 4.2/5、近 3,000 条评价。亮点是 24 小时前台、屋顶酒吧、健身房、完整酒店服务。请在订单里确认早餐、城市税、房型和取消政策。</div>
<div class="hotel-actions"><a href="https://www.booking.com/hotel/it/visconti-palace.html?aid=2438770&checkin=2026-09-27&checkout=2026-09-30&no_rooms=1&group_adults=2&selected_currency=CNY" rel="noopener" target="_blank">Booking 页面</a><a href="https://www.tripadvisor.com/Hotel_Review-g187791-d205160-Reviews-Le_Meridien_Visconti_Rome-Rome_Lazio.html" rel="noopener" target="_blank">Tripadvisor 口碑</a></div>`;
  }

  const firstAltRow = document.querySelector('#hotels .budget-table tbody tr:first-child');
  if (firstAltRow) {
    firstAltRow.innerHTML = `<td>罗马</td><td>Passpartout Boutique Palace</td><td>升级备选约 ¥6,894 / 3晚</td><td>更贴近圣彼得和 Borgo Pio，情侣氛围强；已因改订 Le Méridien 作为备选记录。</td><td><a class="mini-btn" href="https://www.booking.com/hotel/it/passpartout-boutique-palace.html?aid=2438770&checkin=2026-09-27&checkout=2026-09-30&no_rooms=1&group_adults=2&selected_currency=CNY" rel="noopener" target="_blank">Booking</a></td>`;
  }

  const hotelsNotice = document.querySelector('#hotels .notice');
  if (hotelsNotice) {
    hotelsNotice.innerHTML = '<strong>住宿状态：</strong>罗马 3 晚已订 Le Méridien Visconti Rome；佛罗伦萨与威尼斯沿用 Residenza Il Villino / Ca’ Pozzo Inn。总住宿预算以你们实际订单为准，不含城市税。建议给 Le Méridien 备注：一张大床、安静房、高楼层、如有可能安排蜜月/纪念日布置。';
  }

  const labels = Array.from(document.querySelectorAll('.checklist label'));
  const oldHotelLabel = labels.find(label => /Relais Virgilio|罗马住宿/.test(label.textContent));
  if (oldHotelLabel) {
    oldHotelLabel.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) node.textContent = ' Le Méridien Visconti Rome 9/27–9/30 已预订，确认早餐、城市税、取消政策和安静房备注';
    });
  }

  const footerText = document.querySelector('.footer p');
  if (footerText) {
    footerText.textContent = 'Made for your Italy trip · 唯一三城主方案 · 最后更新 2026.07.01 · 已纳入 Le Méridien Visconti Rome、梵蒂冈 14:30 与博尔盖塞美术馆';
  }

  const style = document.createElement('style');
  style.textContent = `.hotel.booked{border-color:rgba(34,119,59,.28);background:linear-gradient(180deg,#fff,rgba(28,130,55,.045));position:relative}.hotel.booked:before{content:'已预订';position:absolute;top:18px;right:20px;padding:6px 10px;border-radius:999px;background:rgba(28,130,55,.14);color:#22773b;font-weight:900;font-size:12px;letter-spacing:.05em}`;
  document.head.appendChild(style);
})();
