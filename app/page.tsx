import CountUp from "./CountUp";
import ProductImageZoom from "./ProductImageZoom";

const shopUrl = "https://www.oright.inc/tw/products_green/views/101";
const planShopUrl = "https://shop.oright.com.tw/product/536";

const faqs = [
  {
    q: "官網為什麼能有更好的價格？",
    a: "因為商品由歐萊德綠色工廠直接送到消費者手中，減少中間通路與多段物流成本。品質與配方沒有因此改變，改變的是商品抵達你家的路徑。",
  },
  {
    q: "會自動扣款或固定配送嗎？",
    a: "不會。直購訂閱是一種更直接的購買方式，不會自動扣款，也不會安排固定配送。依照自己的使用速度，需要時再補貨即可。",
  },
  {
    q: "需要綁約嗎？可以取消嗎？",
    a: "不需要綁約，也沒有取消流程。每一次都是由你主動決定是否購買。",
  },
  {
    q: "為什麼一次購買三瓶或六瓶？",
    a: "三瓶剛好能放在廚房、浴室與洗手台。一次備足能減少配送次數與包材使用，也把節省下來的物流成本回到價格。",
  },
  {
    q: "是不是即期品或不同品質？",
    a: "不是。直購方案省去的是中間成本，不是降低產品品質，也不是出清即期商品。",
  },
  {
    q: "只有辣木洗手慕斯有直購方案嗎？",
    a: "目前由日常高頻使用的 Home 系列商品先行，首波主角是辣木洗手慕斯。未來將依實際規劃延伸至其他家庭用品。",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="回到頁首">
          <span className="brand-mark" aria-hidden="true" />
          <span>O&apos;right</span>
        </a>
        <nav aria-label="主要導覽">
          <a href="#concept">直購是什麼</a>
          <a href="#product">產品特色</a>
          <a href="#plans">方案</a>
          <a href="#faq">常見問題</a>
        </nav>
        <a className="header-cta" href="#plans">立即選購</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy reveal">
          <p className="eyebrow">O&apos;right Direct Subscription</p>
          <p className="hero-product-title">辣木沐浴慕斯直購訂閱方案｜三瓶、六瓶一次備足</p>
          <h1>一次備足，<br />讓好品質成為日常。</h1>
          <p className="hero-lead">
            訂閱讓每一次補貨都不必重新開始，把省下來的成本，回到產品，也留給與歐萊德一起守護地球的你。
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#plans">立即選擇三瓶／六瓶方案</a>
            <a className="text-link" href="#concept">認識直購訂閱 <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-notes" aria-label="方案特色">
            <span>綠色工廠直送</span>
            <span>不綁約</span>
            <span>不自動扣款</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="辣木洗手慕斯六瓶組">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <img src="/assets/moringa-six.webp" alt="O'right 辣木洗手慕斯六瓶組" />
          <div className="price-orb">
            <small>原價 NT$780</small>
            <strong><em>平均一罐只要</em><CountUp end={340} prefix="NT$" /></strong>
          </div>
        </div>
      </section>

      <section className="product-section" id="product" aria-label="辣木淨化洗手慕絲商品特色">
        <div className="product-heading">
          <p className="section-index">01　商品特色</p>
          <p className="product-label">Moringa Foaming Hand Wash</p>
          <h2>辣木淨化<br />洗手慕絲</h2>
          <p>匯集天然植萃與細緻泡沫，洗去日常髒污，也留住雙手需要的滋潤。木質香氣乾淨不張揚，從洗手開始，讓家的每個角落更舒服。</p>
        </div>
        <div className="product-stage">
          <img src="/assets/moringa-editorial-warm.png" alt="O'right 辣木淨化洗手慕絲" />
        </div>
        <div className="product-details">
          <div className="detail-list">
            <article>
              <span>01</span>
              <div>
                <h3>天然植萃，洗淨也保濕</h3>
                <p>結合辣木籽、沙棗樹果與滿天星萃取，潔淨雙手的同時，減少洗後乾澀感。</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>綿密慕斯，少量就好推開</h3>
                <p>按一下就能均勻包覆雙手，只需一般洗手乳 50% 用量，更省水，也更永續。</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>清爽木質香，餐廚也適合</h3>
                <p>香氣自然不突兀，無論身在何處，都能享受乾淨舒適的洗手感受。</p>
              </div>
            </article>
            <article>
              <span>04</span>
              <div>
                <h3>榮獲台灣精品獎銀獎</h3>
                <p>產品設計與品質表現，獲得專業肯定。</p>
              </div>
            </article>
            <article>
              <span>05</span>
              <div>
                <h3>USDA BioPreferred 與 FP 美國聯邦優先採購認證</h3>
                <p>通過 USDA BioPreferred 生物基產品認證並取得 FP 標示，符合美國聯邦規範，具備納入美國聯邦機構與承包商優先採購範圍的資格。</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="statement" id="concept">
        <p className="section-index">02　重新定義訂閱</p>
        <h2>不綁約、不定期扣款，<br />直購訂閱，一切由你決定</h2>
        <div className="statement-grid">
          <p>傳統訂閱讓人擔心被綁住。歐萊德直購訂閱不綁約、不固定配送，也不會自動扣款。</p>
          <p>需要時再補貨，依照自己的生活節奏做決定。商品由綠色工廠直接送到你家，把省下的中間成本回到日常。</p>
        </div>
        <div className="section-actions">
          <a className="button button-dark" href="#plans">直接看直購價格</a>
          <a className="text-link" href="#testimonials">看看使用心得 <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="route-section" aria-label="直購訂閱流程">
        <div className="route-card">
          <span className="route-number">01</span>
          <div className="route-icon factory" aria-hidden="true"><i /><i /><i /></div>
          <h3>綠色工廠</h3>
          <p>GMP 國家級認證廠房製造</p>
        </div>
        <div className="route-line"><span>更短的路</span></div>
        <div className="route-card">
          <span className="route-number">02</span>
          <div className="route-icon box" aria-hidden="true" />
          <h3>一次備足</h3>
          <p>整併包裝與配送次數</p>
        </div>
        <div className="route-line"><span>更多價值</span></div>
        <div className="route-card">
          <span className="route-number">03</span>
          <div className="route-icon home" aria-hidden="true" />
          <h3>直接到家</h3>
          <p>把省下的成本留給生活</p>
        </div>
      </section>

      <section className="testimonials-section" id="testimonials" aria-label="不同生活情境的洗手慕絲使用心得">
        <div className="testimonials-heading">
          <p className="section-index light">03　使用心得</p>
          <h2>辣木洗手慕斯，<br />木質調植萃香氣藏在泡沫裡，<br />等著您細細感受。</h2>
        </div>
        <div className="testimonials-grid">
          <article className="testimonial-card">
            <div className="testimonial-image">
              <img src="/assets/testimonial-single-woman.webp" alt="女性在居家洗手台使用洗手慕絲" />
            </div>
            <div className="testimonial-body">
              <p className="testimonial-role">台北林小姐｜居家日常</p>
              <blockquote>「我每天回家第一件事就是洗手，按一下的量剛剛好，泡泡很細，也很快就沖乾淨。洗完不會覺得手乾乾緊緊的，淡淡的木質香聞起來也很舒服。」</blockquote>
            </div>
          </article>
          <article className="testimonial-card">
            <div className="testimonial-image">
              <img src="/assets/testimonial-family.webp" alt="家長陪孩子在家中洗手" />
            </div>
            <div className="testimonial-body">
              <p className="testimonial-role">台中兩寶家庭｜親子日常</p>
              <blockquote>「兩個孩子一回家就搶著洗手，以前常常一下按太多。換成慕斯後，一人按一下就夠，泡泡也比較好沖。廚房和浴室各放一瓶，不用再一直搬來搬去。」</blockquote>
            </div>
          </article>
          <article className="testimonial-card">
            <div className="testimonial-image">
              <img src="/assets/testimonial-chef.webp" alt="專業廚師在餐廳廚房洗手" />
            </div>
            <div className="testimonial-body">
              <p className="testimonial-role">西餐廳主廚｜專業餐廚</p>
              <blockquote>「這瓶洗手慕斯的香氣自然、不突兀，雙手洗淨後再接觸食材，也不會干擾原有風味。從雙手到入口，都能細細感受食材原始之美。」</blockquote>
            </div>
          </article>
        </div>
      </section>

      <section className="film-section" aria-label="直購訂閱影片">
        <div className="film-heading">
          <div>
            <p className="section-index light">04　讓日常更簡單</p>
            <h2>一瓶天然，<br />走進家的每個角落。</h2>
          </div>
          <p>從綠色工廠、天然植萃到一家人的日常補貨，商品走更短的路，生活也能更靠近永續。</p>
        </div>
        <div className="film-frame">
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            poster="/assets/direct-subscription-film-poster.jpg"
            aria-label="歐萊德辣木洗手慕絲商品影片"
          >
            <source src="/assets/direct-subscription-film.mp4" type="video/mp4" />
          </video>
          <span className="film-tag">O&apos;right Home</span>
        </div>
      </section>

      <section className="plans-section" id="plans">
        <div className="plans-heading">
          <p className="section-index">05　選擇適合你的直購方案</p>
          <h2>第一次嘗試，或一次備足，<br />都由你決定。</h2>
        </div>
        <div className="plans-grid">
          <article className="plan-card">
            <div className="plan-top">
              <p>輕度入門</p>
              <span>三瓶組</span>
            </div>
            <ProductImageZoom
              className="plan-product three"
              src="/assets/moringa-hand-wash-3pack-transparent.png"
              alt="辣木洗手慕斯三瓶組"
            />
            <div className="plan-price">
              <small>原價 <del>NT$780</del></small>
              <strong><em>一罐只要</em><CountUp end={380} prefix="NT$" /></strong>
              <span>三瓶組方案價 NT$1,140</span>
            </div>
            <p className="plan-desc">適合先從廚房、浴室與洗手台開始，讓天然生活慢慢走進家裡。</p>
            <a className="button button-outline" href={planShopUrl} target="_blank" rel="noreferrer">立即選擇三瓶組</a>
          </article>
          <article className="plan-card featured">
            <div className="plan-top">
              <p>全家備足</p>
              <span>六瓶組</span>
            </div>
            <ProductImageZoom
              className="plan-product six"
              src="/assets/moringa-six.webp"
              alt="辣木洗手慕斯六瓶組"
            />
            <div className="plan-price">
              <small>原價 <del>NT$780</del></small>
              <strong><em>一罐只要</em><CountUp end={340} prefix="NT$" /></strong>
              <span>六瓶組方案價 NT$2,040</span>
            </div>
            <p className="plan-desc">一次完成全家補貨，減少包材與商品數量，是您的最佳選擇。</p>
            <a className="button button-gold" href={planShopUrl} target="_blank" rel="noreferrer">選擇六瓶方案</a>
          </article>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="faq-heading">
          <p className="section-index light">06　常見問答</p>
          <h2>關於直購訂閱<br /><span className="faq-title-nowrap">你想知道的，都在這裡。</span></h2>
          <p>價格更直接，選擇也要一樣簡單。</p>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <details key={item.q} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.q}<i aria-hidden="true" /></summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="eyebrow">Green Factory to Your Home</p>
          <h2>讓每一次補貨，<br />都為家人與地球多做一點。</h2>
        </div>
        <a className="button button-light" href="#plans">立即選擇方案</a>
      </section>

      <footer>
        <div className="brand footer-brand"><span className="brand-mark" />O&apos;right</div>
        <p>一次備足，讓好品質成為日常。</p>
        <div><a href="https://www.oright.inc/tw/home" target="_blank" rel="noreferrer">品牌官網</a><a href={shopUrl} target="_blank" rel="noreferrer">線上購物</a></div>
        <small>© 2026 O&apos;right Inc.</small>
      </footer>

    </main>
  );
}
