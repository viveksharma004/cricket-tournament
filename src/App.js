import './App.css';
import Achievements from './components/Achievements';
// import Blog from './components/Blog';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Join from './components/Join';
import MatchList from './components/MatchList';
import MatchResult from './components/MatchResult';
// import Team from './components/Team';
import Testimonials from './components/Testimonials';
function App() {
  return (
    <div classNameName="App">

<div id="main-wrapper" className="main-wrapper overflow-hidden">

<Header/>
{/* <!-- Header Area end -->

<!-- Hero Banner start --> */}
<HeroBanner/>
{/* <!-- Hero Banner End -->

<!-- Main Content Start --> */}
<div className="page-content">

    {/* <!-- Match Results Start --> */}
      <MatchResult/>
    {/* <!-- Match Results End -->

    <!-- Achievements Start --> */}
    <Achievements/>
    {/* <!-- Achievements End -->

    <!-- Match list Start --> */}
    <MatchList/>
    {/* <!-- Match list End -->

    <!-- Gallery Start --> */}
    <Gallery/>
    {/* <!-- Gallery End -->

    <!-- join Start --> */}
    <Join/>
    {/* <!-- join End -->

    <!-- Team Start --> */}
    {/* <Team/> */}
    {/* <!-- Team End -->

    <!-- testimonials Start --> */}
    <Testimonials/>
    {/* <!-- testimonials End -->

    // <!-- Blogs Start --> */}
    {/* <Blog/> */}

</div>

    <Footer/>



<div className="modal fade" id="videoModal" tabindex="-1">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-body">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"></span>
                </button>
                <div className="ratio ratio-16x9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/paOVdYBvyRs" id="video" title='xyz'></iframe>
                </div>
            </div>
        </div>
    </div>
</div>

</div>
  

    </div>
  );
}

export default App;
