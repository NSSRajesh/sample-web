function Header(){
    return(
        <div>
            <header id="head">
	    <div className="head-con">
		    <div className="head-row">
			    <div className="logo">
				    <h3>SoftLand</h3>
				</div>
				<div class="burger-icon">
				    <i class="bi bi-list"></i>
				</div>
			    <nav className="nav-bar">
				    <ul>					 
					    <li><a href="#" className="color">Home</a></li>
						<li><a href="#about">Features</a></li>
					    <li><a href="#service">Pricing</a></li>
						<li><a href="#portfolio">Blog</a></li>
						<li><a href="#contect">Contact Us</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</header>

        </div>
    )
}


export default Header;