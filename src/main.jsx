import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Search, ShoppingCart, UserRound, Headset, Truck, Smartphone, Menu,
  ChevronDown, ChevronLeft, ChevronRight, ArrowRight, Package, ShieldCheck,
  Users, CalendarDays, ChartNoAxesColumnIncreasing, FileText, CheckCircle2,
  MapPin, Mail, Phone, X
} from "lucide-react";
import "./styles.css";

const categories = [
  { title: "PET Jars", subtitle: "Clear jars in multiple capacities", image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=700&q=80" },
  { title: "PET Bottles", subtitle: "Bottles for everyday packaging", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=700&q=80" },
  { title: "Plastic Jars", subtitle: "Round, square and utility jars", image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=80" },
  { title: "Honey Jars", subtitle: "Honey bottles and jars", image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=700&q=80" },
  { title: "Edible Oil Bottles", subtitle: "Packaging for edible oils", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=700&q=80" },
  { title: "Water Bottles", subtitle: "PET water bottles and jars", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=700&q=80" },
  { title: "Water Cans", subtitle: "Large-capacity water containers", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=700&q=80" },
  { title: "Peanut Candy", subtitle: "Jar packaging listed in this range", image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=700&q=80" },
  { title: "Bubble Top Can", subtitle: "Large bottles for water packing", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=700&q=80" },
  { title: "New Items", subtitle: "New additions to the product range", image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=700&q=80" },
];

const navItems = [
  { label: "Home", href: "#home" },
  { label: "All Products", href: "#products", menu: [
    { heading: "Product Categories", links: categories.slice(0, 5).map(c => c.title) },
    { heading: "More Categories", links: categories.slice(5).map(c => c.title) },
  ]},
  { label: "Categories", href: "#categories" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// Product names and capacities are based on the reference product catalogue.
// Capacity variants are shown as listed; ask the SCP Traders team to confirm current availability.
const products = [
  { name: "Pickle PET Jar", category: "PET Jars", size: "500 ml", image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=900&q=85", detail: "Square PET jar for food packaging." },
  { name: "330ml Pickle PET Jar", category: "PET Jars", size: "330 ml", image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=900&q=85", detail: "Compact jar for pickle and food products." },
  { name: "50ml PET Jar", category: "PET Jars", size: "50 ml", image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=900&q=85", detail: "Small-capacity PET jar." },
  { name: "100ml PET Jar", category: "PET Jars", size: "100 ml", image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=900&q=85", detail: "Small PET jar for sample-size products." },
  { name: "470ml Square PET Jar", category: "PET Jars", size: "470 ml", image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=900&q=85", detail: "Square jar for food and pantry storage." },
  { name: "3000ml PET Jar", category: "PET Jars", size: "3000 ml", image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=900&q=85", detail: "Large-capacity PET jar; confirm model availability." },
  { name: "2000ml Square CTC PET Bottle", category: "PET Bottles", size: "2000 ml (2 L)", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85", detail: "Square PET bottle with CTC neck finish." },
  { name: "500ml New PET Bottle", category: "PET Bottles", size: "500 ml", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85", detail: "Everyday PET bottle design." },
  { name: "500ml Dish Wash PET Bottle", category: "PET Bottles", size: "500 ml", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85", detail: "Bottle for dishwashing liquid packaging." },
  { name: "5000ml Edible Oil PET Bottle", category: "PET Bottles", size: "5000 ml (5 L)", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85", detail: "Large PET bottle for edible oil packaging." },
  { name: "250ml Olive Oil PET Bottle", category: "PET Bottles", size: "250 ml", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85", detail: "Small bottle for olive oil packaging." },
  { name: "500ml Nyle PET Bottle", category: "PET Bottles", size: "500 ml", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85", detail: "Bottle listed in the reference catalogue." },
  { name: "Plain Round PET Jar", category: "Plastic Jars", size: "100 ml, 200 ml, 500 ml", image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=900&q=85", detail: "Plain round jar with multiple listed capacities." },
  { name: "400ml Ghee PET Jar", category: "Plastic Jars", size: "400 ml packaging size", image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=900&q=85", detail: "Round PET jar for ghee and kitchen use." },
  { name: "Plastic Jar for Oil", category: "Plastic Jars", size: "500 ml", image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=900&q=85", detail: "Square PET jar for oil and snacks." },
  { name: "500g Honey Bottle", category: "Honey Jars", size: "Listed as 500 g; product details mention 370 ml", image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=900&q=85", detail: "Squeezy-style honey bottle. Confirm fill capacity before ordering." },
  { name: "250g Honey Bottle", category: "Honey Jars", size: "Listed as 250 g; product details mention 200 ml", image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=900&q=85", detail: "Honey bottle with flip-top style cap." },
  { name: "1kg Honey Bottle", category: "Honey Jars", size: "1 kg", image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=900&q=85", detail: "Larger honey packaging option." },
  { name: "Edible Oil Bottle 500ml", category: "Edible Oil Bottles", size: "500 ml", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=85", detail: "PET bottle for edible oil packaging." },
  { name: "500ml Square Plain CTC Bottle", category: "Edible Oil Bottles", size: "500 ml", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=85", detail: "Square bottle with CTC neck finish." },
  { name: "1 Litre Edible Oil Bottle", category: "Edible Oil Bottles", size: "1000 ml (1 L)", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=85", detail: "PET bottle for oil packaging." },
  { name: "2 Litre Edible Oil Bottle", category: "Edible Oil Bottles", size: "2000 ml (2 L)", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=85", detail: "Large square PET oil bottle." },
  { name: "1000ml Plain Round Bottle PCO", category: "Edible Oil Bottles", size: "1000 ml (1 L)", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=85", detail: "Round PET bottle with PCO neck." },
  { name: "5L PET Jar", category: "Water Bottles", size: "5 L", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85", detail: "Round large-capacity PET jar." },
  { name: "1000ml PET Water Bottle", category: "Water Bottles", size: "1000 ml (1 L)", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85", detail: "PET water bottle." },
  { name: "750ml Bamboo PET Bottle", category: "Water Bottles", size: "750 ml", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85", detail: "Bottle listed with bamboo-style design." },
  { name: "Square PET Jar", category: "Water Bottles", size: "250 ml", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85", detail: "Small square PET container." },
  { name: "5 Litre Water Bottle", category: "Water Bottles", size: "5 L", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85", detail: "Large water bottle, also listed for bubble-top can use." },
  { name: "20L Round Transparent Mineral Water Jar", category: "Water Cans", size: "20 L", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=85", detail: "Round transparent mineral water jar." },
  { name: "560ml Green Tea Jar", category: "Peanut Candy", size: "560 ml", image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=900&q=85", detail: "The reference catalogue lists this jar under Peanut Candy." },
  { name: "5 Litre Water Bottle", category: "Bubble Top Can", size: "5 L", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=85", detail: "5-litre bottle for packaged drinking water." },
  { name: "Cookie Jar", category: "New Items", size: "Capacity not specified", image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=900&q=85", detail: "Cookie jar listed as a new item; confirm capacity." },
];

const categoryCards = categories;

function App() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeProductCategory, setActiveProductCategory] = useState(categories[0].title);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [notice, setNotice] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);

  const visibleProducts = products;
  const filteredProducts = products.filter(p => (p.name + " " + p.category + " " + p.size).toLowerCase().includes(search.toLowerCase()));

  const showNotice = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2600);
  };

  return (
    <div className="site-shell" onMouseLeave={() => setActiveMenu(null)}>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="top-links">
            <a href="#contact"><Headset size={17} /> Contact Us</a>
            <a href="#orders"><Truck size={19} /> Track Order</a>
          </div>
          <a className="get-app" href="#contact"><Smartphone size={17} /> Get App</a>
        </div>
      </div>

      <header className="main-header">
        <div className="container header-main">
          <a className="brand" href="#home" aria-label="SCP TRADERS home">
            <img className="brand-logo" src="/src/scp-traders-logo.png" alt="SCP Traders" />
          </a>
          <form className="search-box" onSubmit={e => { e.preventDefault(); document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); }}>
            <Search size={22} />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search products by names, needs, categories..." aria-label="Search products" />
            {search && <button className="clear-search" type="button" onClick={() => setSearch("")} aria-label="Clear search"><X size={16}/></button>}
          </form>
          <button className="cart-button" onClick={() => showNotice(`Your enquiry list has ${cartCount} item${cartCount === 1 ? "" : "s"}.`)} aria-label="Shopping cart">
            <ShoppingCart size={25} /><span className="cart-count">{cartCount}</span>
          </button>
          <button className="login-button" onClick={() => setLoginOpen(true)}><UserRound size={18} /> Login</button>
          <button className="mobile-toggle" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle menu">{mobileMenu ? <X /> : <Menu />}</button>
        </div>
        <nav className={`navigation ${mobileMenu ? "navigation-open" : ""}`} aria-label="Main navigation">
          <div className="container nav-inner">
            {navItems.map(item => (
              <div className="nav-item" key={item.label} onMouseEnter={() => setActiveMenu(item.menu ? item.label : null)}>
                <a href={item.href} onClick={() => { setMobileMenu(false); if (item.menu) setActiveMenu(activeMenu === item.label ? null : item.label); }}>{item.label}{item.menu && <ChevronDown className="nav-chevron" size={13}/>}</a>
                {item.menu && activeMenu === item.label && (
                  item.label === "All Products" ? (
                    <div className="product-mega-menu" onMouseLeave={() => setActiveProductCategory(categories[0].title)}>
                      <div className="product-menu-categories" role="menu" aria-label="Product categories">
                        {categories.map(category => (
                          <button type="button" key={category.title}
                            className={`product-menu-category ${activeProductCategory === category.title ? "is-active" : ""}`}
                            onMouseEnter={() => setActiveProductCategory(category.title)}
                            onFocus={() => setActiveProductCategory(category.title)}
                            onClick={() => { setActiveProductCategory(category.title); }}>
                            <span>{category.title}</span><ChevronRight size={15}/>
                          </button>
                        ))}
                      </div>
                      <div className="product-menu-items" aria-live="polite">
                        <h4>{activeProductCategory}</h4>
                        {products.filter(product => product.category === activeProductCategory).map(product => (
                          <a href="#products" key={product.name}
                            onClick={() => { setSearch(product.name); setActiveMenu(null); setMobileMenu(false); }}>
                            <span>{product.name}</span><small>{product.size}</small>
                          </a>
                        ))}
                        {!products.some(product => product.category === activeProductCategory) && <p className="product-menu-empty">Product details will be added soon.</p>}
                        <button className="product-menu-viewall" type="button" onClick={() => { setSearch(activeProductCategory); setActiveMenu(null); setMobileMenu(false); document.getElementById("products")?.scrollIntoView({behavior:"smooth"}); }}>View all {activeProductCategory} <ArrowRight size={14}/></button>
                      </div>
                    </div>
                  ) : (
                    <div className="mega-menu">
                      {item.menu.map(group => <div className="mega-column" key={group.heading}>
                        <h4>{group.heading}</h4>
                        {group.links.map(link => <a href="#products" key={link} onClick={() => { setSearch(link); setActiveMenu(null); setMobileMenu(false); }}>{link}</a>)}
                      </div>)}
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-backdrop"></div>
          <div className="container hero-content">
            <div className="hero-copy">
              <span className="eyebrow"><span></span> PACKAGING THAT WORKS FOR YOU</span>
              <h1>Good packaging.<br/><em>Better possibilities.</em></h1>
              <p>Discover quality products and dependable trading solutions selected to support your business.</p>
              <div className="hero-actions">
                <a className="primary-button" href="#products">Explore Products <ArrowRight size={18}/></a>
                <a className="text-button" href="#contact">Talk to our team</a>
              </div>
              <div className="hero-proof"><span><CheckCircle2 size={16}/> Bulk & sample orders</span><span><CheckCircle2 size={16}/> Business-ready packaging</span></div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-main"><img src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1000&q=90" alt="Clear packaged bottle product" /></div>
              <div className="hero-sticker"><span>SMART</span><strong>PACKAGING</strong><small>FOR EVERYDAY BUSINESS</small></div>
              <div className="hero-floating-card"><div className="floating-icon"><Package size={21}/></div><div><strong>Made for your needs</strong><span>Practical packaging options</span></div></div>
            </div>
          </div>
          <div className="hero-bottom container"><span>Explore our packaging range</span><div className="hero-line"></div><span className="hero-index">01 <i>/ 03</i></span></div>
        </section>

        <section className="trust-strip">
          <div className="container trust-grid">
            <div><span className="trust-icon"><Package/></span><p><strong>Product variety</strong><small>Jars, bottles & more</small></p></div>
            <div><span className="trust-icon"><Users/></span><p><strong>Business focused</strong><small>For growing brands</small></p></div>
            <div><span className="trust-icon"><ShieldCheck/></span><p><strong>Reliable service</strong><small>Support when you need it</small></p></div>
            <div><span className="trust-icon"><Truck/></span><p><strong>Order assistance</strong><small>Help from enquiry to delivery</small></p></div>
          </div>
        </section>

        <section className="section categories-section" id="categories">
          <div className="container">
            <div className="section-heading">
              <div><span className="eyebrow orange-eyebrow">FIND YOUR FIT</span><h2>Shop by <em>category</em></h2><p>Browse all 10 categories and their listed products, including available capacities and sizes.</p></div>
              <a className="view-all" href="#products">View all products <ArrowRight size={16}/></a>
            </div>

            <div className="category-grid">
              {categoryCards.map((card, i) => (
                <button
                  type="button"
                  className="category-card"
                  key={card.title}
                  onClick={() => {
                    setSearch(card.title);
                    document.getElementById("products")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  aria-label={`View ${card.title} products`}
                >
                  <div className="category-image">
                    <img src={card.image} alt={card.title} loading="lazy" />
                    <span className="category-number">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="category-arrow">
                      <ArrowRight size={19} />
                    </span>
                  </div>

                  <div className="category-info">
                    <div>
                      <h3>{card.title}</h3>
                      <p>{card.subtitle}</p>
                    </div>
                    <ArrowRight className="category-info-arrow" size={18} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section products-section" id="products">
          <div className="container">
            <div className="section-heading">
              <div><span className="eyebrow orange-eyebrow">POPULAR PICKS</span><h2>Featured <em>products</em></h2><p>Browse the complete product range. Sizes are shown where listed in the reference catalogue; please confirm current specifications before ordering.</p></div>
            </div>
            {search && <div className="search-status" aria-live="polite">Showing {filteredProducts.length} product{filteredProducts.length === 1 ? "" : "s"} matching <strong>“{search}”</strong><button onClick={() => setSearch("")}>Clear search</button></div>}
            <div className="product-grid">
              {(search ? filteredProducts : visibleProducts).map((product) => <article className="product-card" key={product.name}>
                <div className="product-image"><img src={product.image} alt={product.name}/><span className="product-tag">{product.category}</span><button className="quick-add" onClick={() => { setCartCount(cartCount + 1); showNotice(`${product.name} added to your enquiry list.`); }} aria-label={`Add ${product.name} to enquiry list`}>+</button></div>
                <div className="product-details"><div className="product-meta"><span>{product.size}</span><span className="stock-dot">Confirm availability</span></div><h3>{product.name}</h3><p>{product.detail}</p><button className="product-link" onClick={() => showNotice(`Enquiry started for ${product.name}. Contact us to confirm specifications.`)}>Request details <ArrowRight size={15}/></button></div>
              </article>)}
              {search && filteredProducts.length === 0 && <div className="no-results"><Package size={30}/><h3>No matching products found</h3><p>Try a product name, category, or capacity such as 500ml or 5L.</p><button className="primary-button" onClick={() => setSearch("")}>Show all products</button></div>}
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="container about-grid">
            <div className="about-image-wrap"><img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1100&q=85" alt="Manufacturing and production workspace"/><div className="about-image-label"><span>SCP TRADERS</span><strong>Built around your business</strong></div></div>
            <div className="about-copy"><span className="eyebrow orange-eyebrow">ABOUT SCP TRADERS</span><h2>Practical packaging.<br/><em>Personal service.</em></h2><p>SCP TRADERS aims to make product sourcing straightforward, with a focus on dependable service and business needs.</p><p>Tell us what you need and our team can help you explore available products and order requirements.</p><a className="primary-button" href="#contact">Know more about us <ArrowRight size={17}/></a><div className="about-signature"><span className="signature-mark">A</span><div><strong>SCP TRADERS</strong><small>Quality products for business</small></div></div></div>
          </div>
        </section>

        <section className="company-section" id="orders">
          <div className="container">
            <div className="company-heading"><span className="eyebrow">AT A GLANCE</span><h2>Business information</h2><p>Connect with our team for current company details and product enquiries.</p></div>
            <div className="company-grid">
              <div className="company-card"><span><Package/></span><div><small>Nature of business</small><strong>Manufacturer</strong></div></div>
              <div className="company-card"><span><Users/></span><div><small>Team & support</small><strong>Business enquiries</strong></div></div>
              <div className="company-card"><span><CalendarDays/></span><div><small>Order planning</small><strong>Discuss your timeline</strong></div></div>
              <div className="company-card"><span><ChartNoAxesColumnIncreasing/></span><div><small>Order quantities</small><strong>Ask about bulk options</strong></div></div>
              <div className="company-card"><span><FileText/></span><div><small>GST & documentation</small><strong>Available on request</strong></div></div>
              <div className="company-card"><span><ShieldCheck/></span><div><small>Product assistance</small><strong>Specifications on enquiry</strong></div></div>
            </div>
          </div>
        </section>

        <section className="contact-banner" id="contact">
          <div className="container contact-inner"><div><span className="eyebrow">LET'S GET STARTED</span><h2>Looking for the right packaging?</h2><p>Share your requirements and let’s find an option for your business.</p></div><a className="dark-button" href="mailto:?subject=SCP%20Traders%20Product%20Enquiry">Send an enquiry <ArrowRight size={17}/></a></div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand"><a className="brand footer-logo" href="#home"><img className="brand-logo" src="/src/scp-traders-logo.png" alt="SCP Traders" /></a><p>Thoughtful packaging options for everyday business needs.</p><div className="footer-social"><a href="#contact" aria-label="Email"><Mail size={17}/></a><a href="#contact" aria-label="Phone"><Phone size={17}/></a><a href="#contact" aria-label="Location"><MapPin size={17}/></a></div></div>
          <div><h4>Quick links</h4><a href="#home">Home</a><a href="#products">All products</a><a href="#categories">Categories</a><a href="#about">About us</a></div>
          <div><h4>Product range</h4><a href="#products">PET jars</a><a href="#products">PET bottles</a><a href="#products">Oil bottles</a><a href="#products">Water cans</a></div>
          <div><h4>Need help?</h4><a href="#contact">Contact us</a><a href="#orders">Order assistance</a><a href="#contact">Bulk enquiries</a></div>
        </div>
        <div className="footer-bottom"><div className="container"><span>© 2026 SCP TRADERS. Demo website concept.</span><span>Made for better packaging experiences.</span></div></div>
      </footer>

      <button className="chat-fab" onClick={() => showNotice("Thanks for your interest! Add your WhatsApp number here to enable chat.")} aria-label="Chat with us"><Headset size={22}/></button>
      {notice && <div className="toast" role="status"><CheckCircle2 size={18}/>{notice}</div>}
      {loginOpen && <div className="modal-backdrop" onClick={() => setLoginOpen(false)}><div className="login-modal" onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setLoginOpen(false)} aria-label="Close login"><X/></button><div className="modal-icon"><UserRound/></div><h2>Welcome back</h2><p>Login functionality can be connected to your preferred authentication service.</p><label>Email or mobile number<input placeholder="Enter email or mobile number"/></label><button className="primary-button modal-submit" onClick={() => { setLoginOpen(false); showNotice("Login is a demo. Connect an authentication provider to enable accounts."); }}>Continue <ArrowRight size={16}/></button><small className="modal-footnote">Demo interface · No information is submitted</small></div></div>}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
