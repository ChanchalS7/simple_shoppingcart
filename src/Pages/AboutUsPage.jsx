import "../Style/About.css"
function AboutUsPage(){
    return(
        <>
      	<div id="navbar"></div>
	<div>
		<div className="about-bg">
			<div>
				<p>About US</p>
				<div className="about-link">
					<p>Origin</p>
					<div className="pip--line"></div>
					<p>Philosophy</p>
					<div className="pip--line"></div>
					<p>Future</p>
				</div>
			</div>
		</div>

		<div className="about-1">
			<div className="about-img">
				<img src="https://cdn.media.amplience.net/i/theory/0329-aboutusrectangle11desktop" />
			</div>
			<div className="about-detail">
				<div className="about-mod">01</div>
				<div className="about-header-mod">Origin</div>
				<p>
					Twenty years ago, a pair of pants changed the way American women dress. Recognizing the need for clothes that felt great and fit perfectly, we developed an innovative stretch fabric that would dramatically improve a pant’s performance. These pants had the power to make women feel confident, smart, and stylish. Never before had American sportswear been so easy to wear to work and everywhere else.
				</p>
				<p>
					When Theory for men was established, similar foundation principles were used, so that they, too, could get dressed in innovative, highly functional, and stylish clothes.
				</p>
				<p>
					Watch award-winning filmmakers Jun Diaz and N + N Films's tribute to our 20-year history, New York City heritage, and vision for the future.
				</p>
			</div>	

		</div>
    </div>
        </>
    )
}

export default AboutUsPage