
  
  // Function to parse query parameters from URL
  function getQueryParam(parameterName) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parameterName);
  }
  
  // Get the 'profile' query parameter value
  const profileId = getQueryParam("profile");
  
  // Check if the 'profile' parameter is present in the URL
  if (profileId) {
    // Construct the API URL with the profileId
    const apiUrl = `https://api.aivideosresume.com/api/candidate/web-profile/${profileId}`;
  
    // Make an API request (assuming you are using fetch)
    fetch(apiUrl)
      .then((response) => response.json())
      .then((item) => {
        // Update the HTML with the dynamic content
        let res = item?.data;
        const dynamicContent = document.getElementById("dynamic-content");
        dynamicContent.innerHTML = `     
        <!-- top-area Start -->
        <header class="top-area">
          <div class="header-area">
            <!-- Start Navigation -->
            <nav
              class="navbar navbar-default bootsnav navbar-fixed dark no-background"
            >
              <div class="container">
                <!-- Start Header Navigation -->
                <div class="navbar-header">
                  <button
                    type="button"
                    class="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#navbar-menu"
                  >
                    <i class="fa fa-bars"></i>
                  </button>
                  <a class="navbar-brand" href="index.html"> ${res?.full_name}</a>
                </div>
                <!--/.navbar-header-->
                <!-- End Header Navigation -->
    
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div
                  class="collapse navbar-collapse menu-ui-design"
                  id="navbar-menu"
                >
                  <ul
                    class="nav navbar-nav navbar-right"
                    data-in="fadeInDown"
                    data-out="fadeOutUp"
                  >
                    <li class="smooth-menu active"></li>
                    <li class="smooth-menu"><a href="#education">education</a></li>
                    <li class="smooth-menu"><a href="#skills">skills</a></li>
                    <li class="smooth-menu">
                      <a href="#experience">experience</a>
                    </li>
                    <li class="smooth-menu"><a href="#profiles">profile</a></li>
                    <li class="smooth-menu"><a href="#portfolio">portfolio</a></li>
              
                  </ul>
                  <!--/.nav -->
                </div>
                <!-- /.navbar-collapse -->
              </div>
              <!--/.container-->
            </nav>
            <!--/nav-->
            <!-- End Navigation -->
          </div>
          <!--/.header-area-->
    
          <div class="clearfix"></div>
        </header>
        <!-- /.top-area-->
        <!-- top-area End -->
    
        <!--welcome-hero start -->
        <section id="welcome-hero" class="welcome-hero">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <div class="header-text">
                  <h2>
                    hi <span>,</span> i am <br />
                    ${res?.full_name} 
                    
                  </h2>
                  <p>${res?.position}</p>
                 
                </div>
                <!--/.header-text-->
              </div>
              <!--/.col-->
            </div>
            <!-- /.row-->
          </div>
          <!-- /.container-->
        </section>
        <!--/.welcome-hero-->
        <!--welcome-hero end -->
    
        <!--about start -->
        <section id="about" class="about">
          <div class="section-heading text-center">
            <h2>about me</h2>
          </div>
          <div class="container">
            <div class="about-content">
              <div class="row">
                <div class="col-sm-6">
                  <div class="single-about-txt">
                    <h3>
                    ${res?.summary}
                    </h3>
                    <p>
                    
                    </p>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="single-about-add-info">
                          <h3>phone</h3>
                          <p>${res?.mobile_no}</p>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="single-about-add-info">
                          <h3>email</h3>
                          <p>${res?.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-offset-1 col-sm-5">
                  <div class="single-about-img">
                    <img
                      src=${res?.profile_picture}
                      alt="profile_image"
                    />
                    <div class="about-list-icon">
                      <ul>
                      ${res?.social_links?.map((data)=>{
                        return(
                            `
                            <li>
                            <a href=${data?.link}>
                              ${data?.name}
                            </a>
                          </li>
                            `
                        )
                      })?.join("")}
                       
                       
                      </ul>
                      <!-- / ul -->
                    </div>
                    <!-- /.about-list-icon -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!--/.about-->
        <!--about end -->
    
        <!--education start -->
        <section id="education" class="education">
          <div class="section-heading text-center">
            <h2>education</h2>
          </div>
          <div class="container">
            <div class="education-horizontal-timeline">
              <div class="row">
                <div class="col-sm-4">
                  <div class="single-horizontal-timeline">
                    <div class="experience-time">
                      <h2>2008 - 2010</h2>
                      <h3>master <span>of </span> computer science</h3>
                    </div>
                    <!--/.experience-time-->
                    <div class="timeline-horizontal-border">
                      <i class="fa fa-circle" aria-hidden="true"></i>
                      <span class="single-timeline-horizontal"></span>
                    </div>
                    <div class="timeline">
                      <div class="timeline-content">
                        <h4 class="title">university of north carolina</h4>
                        <h5>north carolina, USA</h5>
                        <p class="description">
                          Duis aute irure dolor in reprehenderit in vol patate velit
                          esse cillum dolore eu fugiat nulla pari. Excepteur sint
                          occana inna tecat cupidatat non proident.
                        </p>
                      </div>
                      <!--/.timeline-content-->
                    </div>
                    <!--/.timeline-->
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="single-horizontal-timeline">
                    <div class="experience-time">
                      <h2>2004 - 2008</h2>
                      <h3>bachelor <span>of </span> computer science</h3>
                    </div>
                    <!--/.experience-time-->
                    <div class="timeline-horizontal-border">
                      <i class="fa fa-circle" aria-hidden="true"></i>
                      <span class="single-timeline-horizontal"></span>
                    </div>
                    <div class="timeline">
                      <div class="timeline-content">
                        <h4 class="title">university of north carolina</h4>
                        <h5>north carolina, USA</h5>
                        <p class="description">
                          Duis aute irure dolor in reprehenderit in vol patate velit
                          esse cillum dolore eu fugiat nulla pari. Excepteur sint
                          occana inna tecat cupidatat non proident.
                        </p>
                      </div>
                      <!--/.timeline-content-->
                    </div>
                    <!--/.timeline-->
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="single-horizontal-timeline">
                    <div class="experience-time">
                      <h2>2004 - 2008</h2>
                      <h3>bachelor <span>of </span> creative design</h3>
                    </div>
                    <!--/.experience-time-->
                    <div class="timeline-horizontal-border">
                      <i class="fa fa-circle" aria-hidden="true"></i>
                      <span
                        class="single-timeline-horizontal spacial-horizontal-line"
                      ></span>
                    </div>
                    <div class="timeline">
                      <div class="timeline-content">
                        <h4 class="title">university of bolton</h4>
                        <h5>bolton, united kingdome</h5>
                        <p class="description">
                          Duis aute irure dolor in reprehenderit in vol patate velit
                          esse cillum dolore eu fugiat nulla pari. Excepteur sint
                          occana inna tecat cupidatat non proident.
                        </p>
                      </div>
                      <!--/.timeline-content-->
                    </div>
                    <!--/.timeline-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!--/.education-->
        <!--education end -->
    
        <!--skills start -->
        <section id="skills" class="skills">
          <div class="skill-content">
            <div class="section-heading text-center">
              <h2>skills</h2>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="single-skill-content">
                    <div class="barWrapper">
                      <span class="progressText">adobe photoshop</span>
                      <div class="single-progress-txt">
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            aria-valuenow="90"
                            aria-valuemin="10"
                            aria-valuemax="100"
                            style=""
                          ></div>
                        </div>
                        <h3>90%</h3>
                      </div>
                    </div>
                    <!-- /.barWrapper -->
                    <div class="barWrapper">
                      <span class="progressText">adobe illustrator</span>
                      <div class="single-progress-txt">
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            aria-valuenow="85"
                            aria-valuemin="10"
                            aria-valuemax="100"
                            style=""
                          ></div>
                        </div>
                        <h3>85%</h3>
                      </div>
                    </div>
                    <!-- /.barWrapper -->
                    <div class="barWrapper">
                      <span class="progressText">adobe after effects</span>
                      <div class="single-progress-txt">
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            aria-valuenow="97"
                            aria-valuemin="10"
                            aria-valuemax="100"
                            style=""
                          ></div>
                        </div>
                        <h3>97%</h3>
                      </div>
                    </div>
                    <!-- /.barWrapper -->
                    <div class="barWrapper">
                      <span class="progressText">sketch</span>
                      <div class="single-progress-txt">
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            aria-valuenow="90"
                            aria-valuemin="10"
                            aria-valuemax="100"
                            style=""
                          ></div>
                        </div>
                        <h3>90%</h3>
                      </div>
                    </div>
                    <!-- /.barWrapper -->
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="single-skill-content">
                    <div class="barWrapper">
                      <span class="progressText">html 5</span>
                      <div class="single-progress-txt">
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            aria-valuenow="90"
                            aria-valuemin="10"
                            aria-valuemax="100"
                            style=""
                          ></div>
                        </div>
                        <h3>90%</h3>
                      </div>
                    </div>
                    <!-- /.barWrapper -->
                    <div class="barWrapper">
                      <span class="progressText">css 3 animation</span>
                      <div class="single-progress-txt">
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            aria-valuenow="85"
                            aria-valuemin="10"
                            aria-valuemax="100"
                            style=""
                          ></div>
                        </div>
                        <h3>85%</h3>
                      </div>
                    </div>
                    <!-- /.barWrapper -->
                    <div class="barWrapper">
                      <span class="progressText">communication</span>
                      <div class="single-progress-txt">
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            aria-valuenow="97"
                            aria-valuemin="10"
                            aria-valuemax="100"
                            style=""
                          ></div>
                        </div>
                        <h3>97%</h3>
                      </div>
                    </div>
                    <!-- /.barWrapper -->
                    <div class="barWrapper">
                      <span class="progressText"> creativity</span>
                      <div class="single-progress-txt">
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            aria-valuenow="90"
                            aria-valuemin="10"
                            aria-valuemax="100"
                            style=""
                          ></div>
                        </div>
                        <h3>90%</h3>
                      </div>
                    </div>
                    <!-- /.barWrapper -->
                  </div>
                </div>
              </div>
              <!-- /.row -->
            </div>
            <!-- /.container -->
          </div>
          <!-- /.skill-content-->
        </section>
        <!--/.skills-->
        <!--skills end -->
    
        <!--experience start -->
        <section id="experience" class="experience">
          <div class="section-heading text-center">
            <h2>experience</h2>
          </div>
          <div class="container">
            <div class="experience-content">
              <div class="main-timeline">
                <ul>
                  <li>
                    <div class="single-timeline-box fix">
                      <div class="row">
                        <div class="col-md-5">
                          <div class="experience-time text-right">
                            <h2>2018 - Present</h2>
                            <h3>creative director</h3>
                          </div>
                          <!--/.experience-time-->
                        </div>
                        <!--/.col-->
                        <div class="col-md-offset-1 col-md-5">
                          <div class="timeline">
                            <div class="timeline-content">
                              <h4 class="title">
                                <span
                                  ><i class="fa fa-circle" aria-hidden="true"></i
                                ></span>
                                hoplony tech limited
                              </h4>
                              <h5>newyork, USA</h5>
                              <p class="description">
                                Duis aute irure dolor in reprehenderit in vol patate
                                velit esse cillum dolore eu fugiat nulla pari.
                                Excepteur sint occana inna tecat cupidatat non
                                proident.
                              </p>
                            </div>
                            <!--/.timeline-content-->
                          </div>
                          <!--/.timeline-->
                        </div>
                        <!--/.col-->
                      </div>
                    </div>
                    <!--/.single-timeline-box-->
                  </li>
    
                  <li>
                    <div class="single-timeline-box fix">
                      <div class="row">
                        <div
                          class="col-md-offset-1 col-md-5 experience-time-responsive"
                        >
                          <div class="experience-time">
                            <h2>
                              <span
                                ><i class="fa fa-circle" aria-hidden="true"></i
                              ></span>
                              2016 - 2018
                            </h2>
                            <h3>associate design director</h3>
                          </div>
                          <!--/.experience-time-->
                        </div>
                        <!--/.col-->
                        <div class="col-md-5">
                          <div class="timeline">
                            <div class="timeline-content text-right">
                              <h4 class="title">hoplony tech limited</h4>
                              <h5>newyork, USA</h5>
                              <p class="description">
                                Duis aute irure dolor in reprehenderit in vol patate
                                velit esse cillum dolore eu fugiat nulla pari.
                                Excepteur sint occana inna tecat cupidatat non
                                proident.
                              </p>
                            </div>
                            <!--/.timeline-content-->
                          </div>
                          <!--/.timeline-->
                        </div>
                        <!--/.col-->
                        <div class="col-md-offset-1 col-md-5 experience-time-main">
                          <div class="experience-time">
                            <h2>
                              <span
                                ><i class="fa fa-circle" aria-hidden="true"></i
                              ></span>
                              2016 - 2018
                            </h2>
                            <h3>associate design director</h3>
                          </div>
                          <!--/.experience-time-->
                        </div>
                        <!--/.col-->
                      </div>
                    </div>
                    <!--/.single-timeline-box-->
                  </li>
    
                  <li>
                    <div class="single-timeline-box fix">
                      <div class="row">
                        <div class="col-md-5">
                          <div class="experience-time text-right">
                            <h2>2013 - 2016</h2>
                            <h3>senior UI/UX designer</h3>
                          </div>
                          <!--/.experience-time-->
                        </div>
                        <!--/.col-->
                        <div class="col-md-offset-1 col-md-5">
                          <div class="timeline">
                            <div class="timeline-content">
                              <h4 class="title">
                                <span
                                  ><i class="fa fa-circle" aria-hidden="true"></i
                                ></span>
                                hoplony tech limited
                              </h4>
                              <h5>newyork, USA</h5>
                              <p class="description">
                                Duis aute irure dolor in reprehenderit in vol patate
                                velit esse cillum dolore eu fugiat nulla pari.
                                Excepteur sint occana inna tecat cupidatat non
                                proident.
                              </p>
                            </div>
                            <!--/.timeline-content-->
                          </div>
                          <!--/.timeline-->
                        </div>
                        <!--/.col-->
                      </div>
                    </div>
                    <!--/.single-timeline-box-->
                  </li>
    
                  <li>
                    <div class="single-timeline-box fix">
                      <div class="row">
                        <div
                          class="col-md-offset-1 col-md-5 experience-time-responsive"
                        >
                          <div class="experience-time">
                            <h2>
                              <span
                                ><i class="fa fa-circle" aria-hidden="true"></i
                              ></span>
                              2012 - 2013
                            </h2>
                            <h3>UI/UX designer</h3>
                          </div>
                          <!--/.experience-time-->
                        </div>
                        <!--/.col-->
                        <div class="col-md-5">
                          <div class="timeline">
                            <div class="timeline-content text-right">
                              <h4 class="title">hoplony tech limited</h4>
                              <h5>newyork, USA</h5>
                              <p class="description">
                                Duis aute irure dolor in reprehenderit in vol patate
                                velit esse cillum dolore eu fugiat nulla pari.
                                Excepteur sint occana inna tecat cupidatat non
                                proident.
                              </p>
                            </div>
                            <!--/.timeline-content-->
                          </div>
                          <!--/.timeline-->
                        </div>
                        <!--/.col-->
                        <div class="col-md-offset-1 col-md-5 experience-time-main">
                          <div class="experience-time">
                            <h2>
                              <span
                                ><i class="fa fa-circle" aria-hidden="true"></i
                              ></span>
                              2012 - 2013
                            </h2>
                            <h3>UI/UX designer</h3>
                          </div>
                          <!--/.experience-time-->
                        </div>
                        <!--/.col-->
                      </div>
                    </div>
                    <!--/.single-timeline-box-->
                  </li>
    
                  <li>
                    <div class="single-timeline-box fix">
                      <div class="row">
                        <div class="col-md-5">
                          <div class="experience-time text-right">
                            <h2>2010 - 2012</h2>
                            <h3>frontend developer</h3>
                          </div>
                          <!--/.experience-time-->
                        </div>
                        <!--/.col-->
                        <div class="col-md-offset-1 col-md-5">
                          <div class="timeline">
                            <div class="timeline-content">
                              <h4 class="title">
                                <span
                                  ><i class="fa fa-circle" aria-hidden="true"></i
                                ></span>
                                hoplony tech limited
                              </h4>
                              <h5>newyork, USA</h5>
                              <p class="description">
                                Duis aute irure dolor in reprehenderit in vol patate
                                velit esse cillum dolore eu fugiat nulla pari.
                                Excepteur sint occana inna tecat cupidatat non
                                proident.
                              </p>
                            </div>
                            <!--/.timeline-content-->
                          </div>
                          <!--/.timeline-->
                        </div>
                        <!--/.col-->
                      </div>
                    </div>
                    <!--/.single-timeline-box-->
                  </li>
                </ul>
              </div>
              <!--.main-timeline-->
            </div>
            <!--.experience-content-->
          </div>
        </section>
        <!--/.experience-->
        <!--experience end -->
    
        <!--profiles start -->
        <section id="profiles" class="profiles">
          <div class="profiles-details">
            <div class="section-heading text-center">
              <h2>profiles</h2>
            </div>
            <div class="container">
              <div class="profiles-content">
                <div class="row">
                  <div class="col-sm-3">
                    <div class="single-profile">
                      <div class="profile-txt">
                        <a href=""><i class="flaticon-themeforest"></i></a>
                        <div class="profile-icon-name">themeforest</div>
                      </div>
                      <div class="single-profile-overlay">
                        <div class="profile-txt">
                          <a href=""><i class="flaticon-themeforest"></i></a>
                          <div class="profile-icon-name">themeforest</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="single-profile">
                      <div class="profile-txt">
                        <a href=""><i class="flaticon-dribbble"></i></a>
                        <div class="profile-icon-name">dribbble</div>
                      </div>
                      <div class="single-profile-overlay">
                        <div class="profile-txt">
                          <a href=""><i class="flaticon-dribbble"></i></a>
                          <div class="profile-icon-name">dribbble</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="single-profile">
                      <div class="profile-txt">
                        <a href=""><i class="flaticon-behance-logo"></i></a>
                        <div class="profile-icon-name">behance</div>
                      </div>
                      <div class="single-profile-overlay">
                        <div class="profile-txt">
                          <a href=""><i class="flaticon-behance-logo"></i></a>
                          <div class="profile-icon-name">behance</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="single-profile profile-no-border">
                      <div class="profile-txt">
                        <a href=""><i class="flaticon-github-logo"></i></a>
                        <div class="profile-icon-name">github</div>
                      </div>
                      <div class="single-profile-overlay">
                        <div class="profile-txt">
                          <a href=""><i class="flaticon-github-logo"></i></a>
                          <div class="profile-icon-name">github</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="profile-border"></div>
                <div class="row">
                  <div class="col-sm-3">
                    <div class="single-profile">
                      <div class="profile-txt">
                        <a href=""
                          ><i class="flaticon-flickr-website-logo-silhouette"></i
                        ></a>
                        <div class="profile-icon-name">flickR</div>
                      </div>
                      <div class="single-profile-overlay">
                        <div class="profile-txt">
                          <a href=""
                            ><i class="flaticon-flickr-website-logo-silhouette"></i
                          ></a>
                          <div class="profile-icon-name">flickR</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="single-profile">
                      <div class="profile-txt">
                        <a href=""><i class="flaticon-smug"></i></a>
                        <div class="profile-icon-name">smungMung</div>
                      </div>
                      <div class="single-profile-overlay">
                        <div class="profile-txt">
                          <a href=""><i class="flaticon-smug"></i></a>
                          <div class="profile-icon-name">smungMung</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="single-profile">
                      <div class="profile-txt">
                        <a href=""><i class="flaticon-squarespace-logo"></i></a>
                        <div class="profile-icon-name">squareSpace</div>
                      </div>
                      <div class="single-profile-overlay">
                        <div class="profile-txt">
                          <a href=""><i class="flaticon-squarespace-logo"></i></a>
                          <div class="profile-icon-name">squareSpace</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="single-profile profile-no-border">
                      <div class="profile-txt">
                        <a href=""
                          ><i
                            class="flaticon-bitbucket-logotype-camera-lens-in-perspective"
                          ></i
                        ></a>
                        <div class="profile-icon-name">bitBucket</div>
                      </div>
                      <div class="single-profile-overlay">
                        <div class="profile-txt">
                          <a href=""
                            ><i
                              class="flaticon-bitbucket-logotype-camera-lens-in-perspective"
                            ></i
                          ></a>
                          <div class="profile-icon-name">bitBucket</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!--/.profiles-->
        <!--profiles end -->
    
        <!--portfolio start -->
        <section id="portfolio" class="portfolio">
          <div class="portfolio-details">
            <div class="section-heading text-center">
              <h2>portfolio</h2>
            </div>
            <div class="container">
              <div class="portfolio-content">
                <div class="isotope">
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="item">
                        <img
                          src="assets/images/portfolio/p1.jpg"
                          alt="portfolio image"
                        />
                        <div class="isotope-overlay">
                          <a href="#"> ui/ux design </a>
                        </div>
                        <!-- /.isotope-overlay -->
                      </div>
                      <!-- /.item -->
                      <div class="item">
                        <img
                          src="assets/images/portfolio/p2.jpg"
                          alt="portfolio image"
                        />
                        <div class="isotope-overlay">
                          <a href="#"> ui/ux design </a>
                        </div>
                        <!-- /.isotope-overlay -->
                      </div>
                      <!-- /.item -->
                    </div>
                    <!-- /.col -->
    
                    <div class="col-sm-4">
                      <div class="item">
                        <img
                          src="assets/images/portfolio/p3.jpg"
                          alt="portfolio image"
                        />
                        <div class="isotope-overlay">
                          <a href="#"> web design </a>
                        </div>
                        <!-- /.isotope-overlay -->
                      </div>
                      <!-- /.item -->
                    </div>
                    <!-- /.col -->
    
                    <div class="col-sm-4">
                      <div class="item">
                        <img
                          src="assets/images/portfolio/p4.jpg"
                          alt="portfolio image"
                        />
                        <div class="isotope-overlay">
                          <a href="#"> web development </a>
                        </div>
                        <!-- /.isotope-overlay -->
                      </div>
                      <!-- /.item -->
                      <div class="item">
                        <img
                          src="assets/images/portfolio/p5.jpg"
                          alt="portfolio image"
                        />
                        <div class="isotope-overlay">
                          <a href="#"> web development </a>
                        </div>
                        <!-- /.isotope-overlay -->
                      </div>
                      <!-- /.item -->
                    </div>
                    <!-- /.col -->
                  </div>
                  <!-- /.row -->
                </div>
                <!--/.isotope-->
              </div>
              <!--/.gallery-content-->
            </div>
            <!--/.container-->
          </div>
          <!--/.portfolio-details-->
        </section>
        <!--/.portfolio-->
        <!--portfolio end -->
        <footer id="footer-copyright" class="footer-copyright">
        <div class="container">
          <div class="hm-footer-copyright text-center">
            <p>
              &copy; copyright yourname. design and developed by
              <a href="https://www.themesine.com/">themesine</a>
            </p>
            <!--/p-->
          </div>
          <!--/.text-center-->
        </div>
        <!--/.container-->
  
       
        <!--/.scroll-Top-->
      </footer>
                `;
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  } else {
    // Handle the case when 'profile' parameter is not present
    console.error("Profile parameter is missing from the URL.");
  }
  