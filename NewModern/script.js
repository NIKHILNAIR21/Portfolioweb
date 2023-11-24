function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

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
  const apiUrl = `https://api.resumebuild.in/api/candidate/web-profile/${profileId}`;

  // Make an API request (assuming you are using fetch)
  fetch(apiUrl)
    .then((response) => response.json())
    .then((item) => {
      // Update the HTML with the dynamic content
      let res = item?.data;
      let socialIcon = "";
      res?.social_links.forEach((item) => {
        if (item?.name === "LinkedIn") {
          socialIcon += `
                <li><a href=${item?.link}><i class="fa fa-linkedin"></i></a></li>
              `;
        }
        if (item?.name === "Twitter") {
          socialIcon += `
                <li><a href=${item?.link}><i class="fa fa-twitter"></i></a></li>
              `;
        }
        if (item?.name === "GitHub") {
          socialIcon += `
                <li><a href=${item?.link}><i class="fa fa-github"></i></a></li>
              `;
        }
      });
      const dynamicContent = document.getElementById("dynamic-content");

      dynamicContent.innerHTML = `     
        <header class="header_area">
        <div class="main_menu">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container box_1620">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <h3>${res?.full_name}</h3>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul class="nav navbar-nav menu_nav ml-auto">
                            <li class="nav-item active"><a class="nav-link" href="#">Home</a></li> 
                            <li class="nav-item"><a class="nav-link" href="#about">About</a></li> 
                            <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li> 
                            <li class="nav-item"><a class="nav-link" href="#resume">Resume</a></li> 
                            <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li> 
                        </ul>
                    </div> 
                </div>
            </nav>
        </div>
    </header>
    <!--================Header Menu Area =================-->
    
    <!--================Home Banner Area =================-->
    <section class="home_banner_area">
           <div class="container box_1620">
               <div class="banner_inner d-flex align-items-center">
                <div class="banner_content">
                    <div class="media">
                        <div class="d-flex">
                            <img src=${
                              res?.profile_picture
                                ? res?.profile_picture
                                : "img/personal.jpg"
                            } alt=""
                    style="max-width: 300px"
                            >
                        </div>
                        <div class="media-body" id="about">
                            <div class="personal_text">
                                <h6>Hello Everybody, i am</h6>
                                <h3>${res?.full_name}</h3>
                                <h4>${res?.position}</h4>
                                <p>${res?.summary}</p>
                                <ul class="list basic_info">
                                    <li><a href="#"><i class="lnr lnr-phone-handset"></i>${
                                      res?.mobile_no
                                    }</a></li>
                                    <li><a href="#"><i class="lnr lnr-envelope"></i>${
                                      res?.email
                                    }</a></li>
                                    <li><a href="#"><i class="lnr lnr-home"></i>${
                                      res?.address
                                    }</a></li>
                                </ul>
                                <ul class="list personal_social">
                                 ${socialIcon}
                            
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--================End Home Banner Area =================-->
    
    <!--================Welcome Area =================-->
    <section class="welcome_area p_120" id="skills">
        <div class="container">
            <div class="welcome_text">
                <h4>Skills</h4>
                
            </div>
            <div class="row welcome_inner">
            ${res?.skills
              ?.map((data) => {
                return `
                  <div class="col-lg-6">
                    
                  <div class="tools_expert">
                      <div class="skill_main">
                          <div class="skill_item">
                              <h4>${data?.skill}
                              <div class="progress_br">
                                  <div class="progress">
                                      <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"
                                      style="width: ${
                                        data?.type == 1
                                          ? "33%"
                                          : data?.type == 2
                                          ? "66%"
                                          : "100%"
                                      }"
                                      ></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
  
                      `;
              })
              ?.join("")}
              
            </div>
        </div>
    </section>
    <!--================End Welcome Area =================-->
    
    <!--================My Tabs Area =================-->
    <section class="mytabs_area p_120" id="resume">
        <div class="container">
            <div class="tabs_inner">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">My Experiences</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">My Education</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <ul class="list">
                        ${res?.experiences
                            ?.map((data) => {
                              return `
                              <li>
                              <span></span>
                              <div class="media">
                                  <div class="d-flex">
                                      <p>${data?.start_date} to ${data?.is_current ? "Present":data?.end_date}</p>
                                  </div>
                                  <div class="media-body">
                                      <h4>${data?.company_name}</h4>
                                      <p>${data?.designation}</p>
                                  </div>
                              </div>
                          </li>
                                `;
                            })
                            .join("")}
                          
                           
                          
                        </ul>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <ul class="list">
                        ${res?.eductaions
                            ?.map((data) => {
                              return `  
                              <li>
                              <span></span>
                              <div class="media">
                                  <div class="d-flex">
                                      <p>${data?.start_date} to ${
                                        data?.is_current ? "Currently Studying" : data?.end_date
                                      }</p>
                                  </div>
                                  <div class="media-body">
                                      <h4>${data?.university}</h4>
                                      <p>${data?.course} <br />
                                      ${data?.description}
                                      </p>
                                  </div>
                              </div>
                          </li>
                            `;
                            })
                            ?.join("")}
                         
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--================End My Tabs Area =================-->
    
    <!--================Feature Area =================-->
    <section class="feature_area p_120" id="projects">
        <div class="container">
            <div class="main_title">
                <h2>Projects</h2>
            </div>
            <div class="feature_inner row">
            ${res?.projects?.map((data)=>{
                return(
                    `
                    <div class="col-lg-4 col-md-4 col-sm-6 brand manipul design print">
                    <div class="h_gallery_item">
                        <div class="g_img_item">
                            <div class="feature_item">

                            
                                <h4>${data?.title}</h4>
                                <p>${data?.description}</p>
                            </div>
                            <a class="light" href=${data?.link?data?.link:"#"}><img src="img/gallery/icon.png" alt=""></a>
                        </div>
                    
                    </div>
                </div>
                    `
                )
              })?.join("")}
               
                
            </div>
        </div>
    </section>
    <!--================End Feature Area =================-->
    
    <!--================Home Gallery Area =================-->
  
    <!--================End Testimonials Area =================-->
    
    <!--================Footer Area =================-->
    <footer class="footer_area p_60">
    <div class="container">
    <div class="hm-footer-copyright text-center">
      <p>
        &copy; copyright ResumeBuild.
      </p>
      <!--/p-->
    </div>
    <!--/.text-center-->
  </div>
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
