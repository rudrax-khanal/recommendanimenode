import Link from 'next/link'

const Navbar = () => {
    return(
        <div>
        <nav class="navbar">
          <div class="container-md">

          <a href="/" class="navbar-brand">RecommendAnime</a>
          <ul class="navbar-nav d-none d-md-flex ml-auto"> 
            <li class="nav-item">
              <a href="#" class="nav-link">Suggest</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Anime Like</a>
            </li>
          </ul>
          <div class="navbar-content">
            <button class="btn btn-action mr-5" type="button" onClick={() => halfmoon.toggleSidebar()} aria-label="Toggle dark mode">
              <i class="fa fa-moon-o" aria-hidden="true"></i>
          </button>
          </div>
         
          <div class="navbar-content d-md-none ml-auto"> 
            <div class="dropdown with-arrow">
              <button class="btn" data-toggle="dropdown" type="button" id="navbar-dropdown-toggle-btn-1">
                Menu
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-right w-200" aria-labelledby="navbar-dropdown-toggle-btn-1"> 
                <a href="#" class="dropdown-item">Anime Like</a>
                <a href="#" class="dropdown-item">Suggest</a>
              </div>
            </div>
          </div>
          </div>
        </nav>
        </div>
    )
}

export default Navbar