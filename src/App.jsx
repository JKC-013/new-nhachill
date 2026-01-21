import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import About from './pages/About';
import DesignerList from './pages/DesignerList';
import DesignerDetail from './pages/DesignerDetail';
import ArchitectStudio from './pages/ArchitectStudio';
import Marketplace from './pages/Marketplace';
import ProductsDesigns from './pages/ProductsDesigns';
import ProductsFurnitures from './pages/ProductsFurnitures';
import ProductsMaterials from './pages/ProductsMaterials';
import Solutions from './pages/Solutions';
// Detail Templates
import DesignDetail from './pages/DesignDetail';
import FurnitureDetail from './pages/FurnitureDetail';
import MaterialDetail from './pages/MaterialDetail';
import SoftwareDetail from './pages/SoftwareDetail';
import BuilderDetail from './pages/BuilderDetail';
import NewsCommunity from './pages/NewsCommunity';
import Forum from './pages/Forum';
import ForumThreadDetail from './pages/ForumThreadDetail';
import SupportContact from './pages/SupportContact';
import NewsDetail from './pages/NewsDetail';
import Software from './pages/Software';
import GenericDetail from './pages/GenericDetail';
import { DemoProvider } from './context/DemoContext';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <DemoProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            {/* Products */}
            <Route path="products/designs" element={<ProductsDesigns />} />
            <Route path="products/designs/:id" element={<DesignDetail />} />
            <Route path="products/furnitures" element={<ProductsFurnitures />} />
            <Route path="products/furnitures/:id" element={<FurnitureDetail />} />
            <Route path="products/materials" element={<ProductsMaterials />} />
            <Route path="products/materials/:id" element={<MaterialDetail />} />

            {/* Solutions */}
            <Route path="solutions/design-tools" element={<Solutions initialTab="design-tools" />} />
            <Route path="solutions/builder" element={<Solutions initialTab="builder" />} />
            <Route path="solutions/software/:id" element={<SoftwareDetail />} />
            <Route path="solutions/builder/:id" element={<BuilderDetail />} />
            <Route path="solutions/:tab" element={<Solutions />} />

            {/* News & Community */}
            <Route path="news-contests/news" element={<NewsCommunity initialTab="news" />} />
            <Route path="news-contests/events" element={<NewsCommunity initialTab="events" />} />
            <Route path="news-contests/contests" element={<NewsCommunity initialTab="contests" />} />
            <Route path="news-contests/blogs" element={<NewsCommunity initialTab="blogs" />} />
            <Route path="news/:id" element={<NewsDetail />} />

            {/* Forum */}
            <Route path="forum/community" element={<Forum initialTab="community" />} />
            <Route path="forum/social-network" element={<Forum initialTab="social" />} />
            <Route path="forum/thread/:id" element={<ForumThreadDetail />} />

            {/* Support */}
            <Route path="support" element={<SupportContact />} />

            {/* Legacy/Compat routes if needed */}
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="architect" element={<DesignerList />} />
            <Route path="architect/:id" element={<DesignerDetail />} />
          </Route>

          <Route element={<AppLayout />}>
            <Route path="/studio" element={<ArchitectStudio />} />
            <Route path="/software" element={<Software />} />
            <Route path="/detail/:type/:id" element={<GenericDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DemoProvider>
  );
}

export default App;
