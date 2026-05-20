import React, { useState, useEffect, useMemo } from 'react';
import {
  SlidersHorizontal,
  ArrowUpDown,
  Search,
  Sparkles,
  Gamepad2,
  Tv,
  Film,
  X,
  Compass,
  Check,
  AlertCircle
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import CheckoutSuccessModal from './components/CheckoutSuccessModal';
import Footer from './components/Footer';
import { products } from './productsData';
import { Product, CartItem, Category, SortOption } from './types';

export default function App() {
  // ---- 1. State Management ----
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('auryn_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('default');
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<Product | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [checkoutOrderNumber, setCheckoutOrderNumber] = useState('');
  const [checkoutTotalPaid, setCheckoutTotalPaid] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // ---- 2. Sync Cart to LocalStorage ----
  useEffect(() => {
    localStorage.setItem('auryn_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // ---- 3. Custom Interactive Actions / Alerts ----
  const showToast = (message: string) => {
    setToastMessage(message);
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 3000);
    return () => clearTimeout(timer);
  };

  const handleAddToCart = (product: Product, event?: React.MouseEvent) => {
    if (event) {
      event.stopPropagation(); // Avoid triggering details modal when clicking item
    }

    if (product.stockStatus === 'Out of Stock') {
      showToast('⚠️ Desculpe, este boneco está esgotado no portal!');
      return;
    }

    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.product.id === product.id);
      if (existing) {
        // Check capacity limit
        if (existing.quantity >= product.stockCount) {
          showToast(`⚠️ Limite de estoque alcançado (${product.stockCount} un)!`);
          return prevItems;
        }
        showToast(`✨ Adicionado mais um(a) ${product.name} ao Baú!`);
        return prevItems.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      showToast(`✨ ${product.name} guardado(a) no seu Baú!`);
      return [...prevItems, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }

    const item = cartItems.find((i) => i.product.id === productId);
    if (item && quantity > item.product.stockCount) {
      showToast(`⚠️ Quantidade máxima disponível é ${item.product.stockCount} unidades!`);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
    showToast('🗑️ Item removido do baú.');
  };

  const handleCheckout = () => {
    const total = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0) * 0.95; // 5% discount
    const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
    const orderNum = `#ARK-${new Date().getFullYear()}-${randomSuffix}`;
    
    setCheckoutOrderNumber(orderNum);
    setCheckoutTotalPaid(total);
    setCartItems([]); // Clear the bag
    setCartOpen(false); // Close drawer
    setCheckoutSuccess(true); // Open success overlay
  };

  const handleScrollToCatalog = () => {
    const section = document.getElementById('catalog-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ---- 4. Filtering & Sorting Logic ----
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Category Filter
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Search Query Filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // Sorting Setup
    switch (sortOption) {
      case 'priceAsc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Keep natural ordering or default id
        break;
    }

    return result;
  }, [selectedCategory, searchQuery, sortOption]);

  const cartTotalCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans flex flex-col justify-between selection:bg-brand-primary selection:text-white">
      
      {/* 1. Header Navigation */}
      <Navbar
        cartItemsCount={cartTotalCount}
        onCartOpen={() => setCartOpen(true)}
        onSelectCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      {/* 2. Hero Presentation Banner */}
      <Hero onScrollToCatalog={handleScrollToCatalog} />

      {/* 3. Catalog & Showcase Area */}
      <main id="catalog-section" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Module Title Section */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-[#FBBF24] uppercase bg-brand-primary/10 px-3.5 py-1.5 rounded-full border border-brand-primary/20">
            <Compass className="h-4.5 w-4.5 animate-spin-pulse" />
            Explorar Vitrine 3D
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Galeria de Colecionáveis
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">
            Filtre por universos e encontre o guardião místico perfeito para compor a sua estante de glórias. Figuras selecionadas com pintura especial e caixa acolchoada.
          </p>
        </div>

        {/* Dynamic Filters & Search Command Bar */}
        <div className="bg-brand-card/70 border border-brand-primary/15 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Left Category Filters (Toggle Badges) */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                id="filter-all"
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold font-display tracking-wide transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  selectedCategory === null
                    ? 'bg-brand-primary text-white shadow-[0_4px_15px_rgba(139,92,246,0.35)]'
                    : 'bg-brand-dark/50 hover:bg-brand-primary/20 text-gray-400 hover:text-white border border-brand-primary/10'
                }`}
              >
                Todos Universos
              </button>
              
              <button
                id="filter-anime"
                onClick={() => setSelectedCategory('Anime')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold font-display tracking-wide transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  selectedCategory === 'Anime'
                    ? 'bg-brand-primary text-white shadow-[0_4px_15px_rgba(139,92,246,0.35)]'
                    : 'bg-brand-dark/50 hover:bg-brand-primary/20 text-gray-400 hover:text-white border border-brand-primary/10'
                }`}
              >
                <Tv className="h-4 w-4 text-brand-accent" />
                Animes (3D)
              </button>

              <button
                id="filter-games"
                onClick={() => setSelectedCategory('Games')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold font-display tracking-wide transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  selectedCategory === 'Games'
                    ? 'bg-brand-primary text-white shadow-[0_4px_15px_rgba(139,92,246,0.35)]'
                    : 'bg-brand-dark/50 hover:bg-brand-primary/20 text-gray-400 hover:text-white border border-brand-primary/10'
                }`}
              >
                <Gamepad2 className="h-4 w-4 text-brand-accent" />
                Games (3D)
              </button>

              <button
                id="filter-pop"
                onClick={() => setSelectedCategory('Pop Culture')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold font-display tracking-wide transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  selectedCategory === 'Pop Culture'
                    ? 'bg-brand-primary text-white shadow-[0_4px_15px_rgba(139,92,246,0.35)]'
                    : 'bg-brand-dark/50 hover:bg-brand-primary/20 text-gray-400 hover:text-white border border-brand-primary/10'
                }`}
              >
                <Film className="h-4 w-4 text-brand-accent" />
                Pop Culture
              </button>
            </div>

            {/* Right Search Input Box & Sort Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              
              {/* Responsive Text Search Bar */}
              <div className="relative flex-1 sm:w-60">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  id="search-input"
                  type="text"
                  placeholder="Pesquisar boneco..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-9 py-2.5 bg-brand-dark border border-brand-primary/20 rounded-xl text-xs font-mono text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent/50 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-white"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              {/* Price / Rating Sort Dropdown */}
              <div className="relative flex items-center gap-2">
                <span className="text-[11px] font-mono text-brand-lavender/40 flex items-center gap-1.5">
                  <ArrowUpDown className="h-3.5 w-3.5" /> Ordenar:
                </span>
                <select
                  id="sort-select"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as SortOption)}
                  className="bg-brand-dark border border-brand-primary/20 rounded-xl text-xs font-mono text-white py-2.5 pl-3 pr-8 focus:outline-none focus:border-brand-accent/50 transition-colors appearance-none scroll-smooth cursor-pointer"
                >
                  <option value="default">Destaques</option>
                  <option value="priceAsc">Menor Preço</option>
                  <option value="priceDesc">Maior Preço</option>
                  <option value="rating">Melhor Avaliado</option>
                </select>
                <div className="absolute right-3.5 pointer-events-none text-gray-400 mt-0.5" />
              </div>

            </div>

          </div>

          {/* Filtering Metrics Result Label */}
          <div className="flex items-center justify-between text-xs font-mono text-gray-400 border-t border-brand-primary/10 pt-3">
            <span>
              Exibindo <strong className="text-white">{filteredAndSortedProducts.length}</strong> de{' '}
              <strong className="text-white">{products.length}</strong> figures
            </span>
            {(selectedCategory || searchQuery || sortOption !== 'default') && (
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery('');
                  setSortOption('default');
                }}
                className="text-brand-accent hover:underline flex items-center gap-1"
              >
                Limpar Todos Filtros ×
              </button>
            )}
          </div>
        </div>

        {/* Vitrine Figures Grid Section */}
        {filteredAndSortedProducts.length === 0 ? (
          <div className="py-20 text-center space-y-4 bg-brand-card/20 rounded-3xl border border-dashed border-brand-primary/10">
            <span className="text-4xl block">🔮</span>
            <div className="space-y-1">
              <h3 className="font-display text-lg font-bold text-gray-300">Nenhum boneco encontrado</h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto font-light leading-relaxed">
                Nenhum portal foi aberto para encontrar o item solicitado. Tente redefinir seus filtros ou digite outro termo de busca!
              </p>
            </div>
          </div>
        ) : (
          <section
            id="products-showcase-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 transition-all duration-500"
          >
            {filteredAndSortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onCardClick={setSelectedProductForDetail}
              />
            ))}
          </section>
        )}

      </main>

      {/* 4. Details Spec Sheet Modal Overlay */}
      <ProductDetailModal
        product={selectedProductForDetail}
        onClose={() => setSelectedProductForDetail(null)}
        onAddToCart={handleAddToCart}
      />

      {/* 5. Shopping Cart Slide-out Drawer Panel */}
      <CartDrawer
        isOpen={cartOpen}
        cartItems={cartItems}
        onClose={() => setCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {/* 6. Secure Success Transactions Modal Overlay */}
      <CheckoutSuccessModal
        isOpen={checkoutSuccess}
        orderNumber={checkoutOrderNumber}
        totalPaid={checkoutTotalPaid}
        onClose={() => setCheckoutSuccess(false)}
      />

      {/* 7. Toast Alerts Notification Hub */}
      {toastMessage && (
        <div
          id="toast-notification"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3.5 rounded-xl bg-brand-card border border-brand-accent text-white shadow-[0_0_20px_#FBBF24] font-mono text-xs tracking-wide animate-slide-up"
        >
          <Sparkles className="h-4.5 w-4.5 text-brand-accent animate-spin-pulse" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 8. Modern Shop Footer Brand Info Section */}
      <Footer />

    </div>
  );
}
