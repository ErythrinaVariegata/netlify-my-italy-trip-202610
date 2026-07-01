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

(function refreshHotels() {
  const overview = document.querySelector('#overview .section-heading p:not(.eyebrow)');
  if (overview) overview.textContent = '8晚三城慢游：罗马住宿已订 Le Méridien Visconti Rome；佛罗伦萨和威尼斯住宿预算上调至约 ¥2,500/晚，优先选择口碑稳定、体验感强、适合情侣的酒店。';

  const dayOne = document.querySelector('#itinerary .day:nth-child(1) .day-content p');
  if (dayOne) dayOne.textContent = '傍晚抵达 FCO 后直接打车或预约接送进城，入住 Le Méridien Visconti Rome。酒店位于 Prati / Piazza Cavour 一带，第一晚只安排简单晚餐；有精神再走圣天使堡、台伯河或纳沃纳广场夜色。';

  const hotels = document.querySelector('#hotels');
  if (!hotels) return;
  hotels.innerHTML = `
    <div class="section-heading">
      <p class="eyebrow">Hotels</p>
      <h2>住宿安排与新推荐</h2>
      <p>罗马已预订，不再保留罗马备选。佛罗伦萨和威尼斯按平均约 ¥2,500/晚以内重新筛选：优先看 Booking 当前可订价格，再用 Tripadvisor 口碑、评价量、位置和情侣体验感交叉判断。</p>
    </div>
    <div class="hotel-grid featured-hotels">
      <article class="hotel booked"><p class="hotel-kicker">罗马 · 9/27–9/30 · 3晚 · 已预订</p><h3>Le Méridien Visconti Rome</h3><p>Prati / Piazza Cavour 一带，安全安静、服务完整，适合长途抵达、行李寄存和 9/28 梵蒂冈日。</p><div class="rating-line">罗马不再列备选。建议备注：一张大床、安静房、高楼层、纪念日布置。</div></article>
      <article class="hotel pick"><p class="hotel-kicker">佛罗伦萨首选 · 9/30–10/2</p><h3>Residenza Il Villino B&amp;B</h3><p>安静历史建筑、庭院、自制早餐和主人服务口碑特别稳，是佛罗伦萨最平衡的浪漫选择。</p><div class="rating-line">约 ¥3,286 / 2晚，约 ¥1,643/晚；Booking 9.2，Tripadvisor 约 4.8/5、1,200+ 条评价。注意无电梯，优先 Superior Double。</div><div class="hotel-actions"><a href="https://www.booking.com/hotel/it/residenza-il-villino.html" target="_blank" rel="noopener">Booking</a></div></article>
      <article class="hotel pick"><p class="hotel-kicker">威尼斯首选 · 10/2–10/5</p><h3>Ca’ Bonvicini B&amp;B</h3><p>Santa Croce 的小型运河感住宿，安静、浪漫、口碑强，适合情侣慢游威尼斯。</p><div class="rating-line">约 ¥5,409 / 3晚，约 ¥1,803/晚；Booking 9.6，Tripadvisor 约 4.8/5、800+ 条评价。优先 canal view / balcony 房型。</div><div class="hotel-actions"><a href="https://www.booking.com/hotel/it/b-venezia1.html" target="_blank" rel="noopener">Booking</a></div></article>
    </div>
    <div class="booking-table-wrap"><table class="budget-table"><thead><tr><th>城市</th><th>推荐</th><th>价格参考</th><th>判断</th><th>链接</th></tr></thead><tbody>
      <tr><td>佛罗伦萨</td><td><strong>1. Residenza Il Villino B&amp;B</strong></td><td>约 ¥1,643/晚</td><td>最稳妥：安静、庭院、早餐、服务和大样本口碑都很好。</td><td><a class="mini-btn" href="https://www.booking.com/hotel/it/residenza-il-villino.html" target="_blank" rel="noopener">Booking</a></td></tr>
      <tr><td>佛罗伦萨</td><td><strong>2. La Casa del Garbo</strong></td><td>约 ¥2,098/晚</td><td>Piazza della Signoria 核心位置，最有文艺复兴中心体验；注意无电梯和广场声音。</td><td><a class="mini-btn" href="https://www.booking.com/hotel/it/la-casa-del-garbo.html" target="_blank" rel="noopener">Booking</a></td></tr>
      <tr><td>佛罗伦萨</td><td><strong>3. The Moon Boutique Hotel &amp; Spa</strong></td><td>约 ¥2,338/晚</td><td>精品酒店 + Spa 体验更强；位置略离核心，适合想住得更放松。</td><td><a class="mini-btn" href="https://www.booking.com/hotel/it/the-moon-boutique-e-spa.html" target="_blank" rel="noopener">Booking</a></td></tr>
      <tr><td>佛罗伦萨</td><td><strong>4. The Artists’ Palace Florence</strong></td><td>约 ¥2,076/晚</td><td>历史宫殿感和 San Lorenzo 中心位置好；订前确认夜间到店与安静房。</td><td><a class="mini-btn" href="https://www.booking.com/hotel/it/the-artists-rooms.html" target="_blank" rel="noopener">Booking</a></td></tr>
      <tr><td>威尼斯</td><td><strong>1. Ca’ Bonvicini B&amp;B</strong></td><td>约 ¥1,803/晚</td><td>运河感、安静、浪漫、口碑强，若有 canal view / balcony 房型优先锁。</td><td><a class="mini-btn" href="https://www.booking.com/hotel/it/b-venezia1.html" target="_blank" rel="noopener">Booking</a></td></tr>
      <tr><td>威尼斯</td><td><strong>2. Casa Verardo Residenza d’Epoca</strong></td><td>约 ¥2,381/晚</td><td>更像正式酒店，近圣马可，24小时前台、早餐、花园/露台和服务稳定性更好。</td><td><a class="mini-btn" href="https://www.booking.com/hotel/it/casa-verardo-residenza-d-epoca.html" target="_blank" rel="noopener">Booking</a></td></tr>
      <tr><td>威尼斯</td><td><strong>3. Dimora Al Doge Beato Canal View</strong></td><td>约 ¥2,228/晚</td><td>运河景和古典感强；订前确认房内独立卫浴。</td><td><a class="mini-btn" href="https://www.booking.com/hotel/it/residenza-al-doge-beato.html" target="_blank" rel="noopener">Booking</a></td></tr>
    </tbody></table></div>
    <div class="notice"><strong>当前结论：</strong>佛罗伦萨优先 Residenza Il Villino；想要广场景观就选 La Casa del Garbo。威尼斯优先 Ca’ Bonvicini；想要更完整酒店服务和 24 小时前台就选 Casa Verardo。罗马已订，不再保留备选。</div>`;

  const labels = Array.from(document.querySelectorAll('.checklist label'));
  const hotelLabel = labels.find(label => /酒店|住宿|Relais|Le Méridien|Ca’ Pozzo|Residenza/.test(label.textContent));
  if (hotelLabel) {
    hotelLabel.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) node.textContent = ' 罗马 Le Méridien Visconti Rome 已订；佛罗伦萨优先 Residenza Il Villino / La Casa del Garbo；威尼斯优先 Ca’ Bonvicini / Casa Verardo，并确认取消政策、城市税、早餐和行李寄存';
    });
  }

  const footerText = document.querySelector('.footer p');
  if (footerText) footerText.textContent = 'Made for your Italy trip · 唯一三城主方案 · 最后更新 2026.07.01 · 罗马已订，佛罗伦萨/威尼斯住宿预算上调至约 ¥2,500/晚';

  const style = document.createElement('style');
  style.textContent = `.hotel.booked{border-color:rgba(34,119,59,.28);background:linear-gradient(180deg,#fff,rgba(28,130,55,.045));position:relative}.hotel.booked:before{content:'已预订';position:absolute;top:18px;right:20px;padding:6px 10px;border-radius:999px;background:rgba(28,130,55,.14);color:#22773b;font-weight:900;font-size:12px}.hotel.pick{border-color:rgba(176,116,31,.22);background:linear-gradient(180deg,#fff,rgba(176,116,31,.04))}`;
  document.head.appendChild(style);
})();
