
  
  // Function to parse query parameters from URL
  function getQueryParam(parameterName) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parameterName);
}

// Get the 'profile' query parameter value
const profileId = getQueryParam('profile');

// Check if the 'profile' parameter is present in the URL
if (profileId) {
    // Construct the API URL with the profileId
    const apiUrl = `https://api.resumebuild.in/api/candidate/web-profile/${profileId}`;

    // Make an API request (assuming you are using fetch)
    fetch(apiUrl)
        .then(response => response.json())
        .then(item => {
          
            // Update the HTML with the dynamic content
            let res=item?.data
            const dynamicContent = document.getElementById('dynamic');
            dynamicContent.innerHTML = `  
            <header class="header">
            <div class="container">
                <ul class="social-icons pt-3">
                    <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-facebook" aria-hidden="true"></i></a></li>
                    <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-twitter" aria-hidden="true"></i></a></li>
                    <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-google" aria-hidden="true"></i></a></li>
                    <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-instagram" aria-hidden="true"></i></a></li>
                    <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-github" aria-hidden="true"></i></a></li>
                </ul>  
                <div class="header-content">
                    <h4 class="header-subtitle" >Hello, I am</h4>
                    <h1 class="header-title">${res?.full_name}</h1>
                    <h6 class="header-mono" >${res?.position}</h6>
                    
                </div>
            </div>
        </header>
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
            <div class="container">
                <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a href="#home" class="nav-link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="#about" class="nav-link">About</a>
                        </li>
                        <li class="nav-item">
                            <a href="#resume" class="nav-link">Resume</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav brand">
                        
                        <li class="nav-item">
                            <h5 class="brand-title">${res?.full_name}</h5>
                            <div class="brand-subtitle">${res?.position}</div>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a href="#portfolio" class="nav-link">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a href="#blog" class="nav-link">Blog</a>
                        </li>
                        <li class="nav-item last-item">
                            <a href="#contact" class="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container-fluid">
            <div id="about" class="row about-section">
                <div class="col-lg-4 about-card">
                    <h3 class="font-weight-light">Who am I ?</h3>
                    <span class="line mb-5"></span>
                    <h5 class="mb-3">A ${res?.position} Located In ${res?.address}</h5>
                    <p class="mt-20">${res?.summary}</p>
            
                </div>
                <div class="col-lg-4 about-card">
                    <h3 class="font-weight-light">Personal Info</h3>
                    <span class="line mb-5"></span>
                    <ul class="mt40 info list-unstyled">
                        
                        <li><span>Email</span> : ${res?.email}</li>
                        <li><span>Phone</span> : ${res?.mobile_no}</li>
                        <li><span>Address</span> : ${res?.address}</li>
                    </ul>
                  
                </div>
                <div class="col-lg-4 about-card">
                <ul class="social-icons pt-3">
                <li class="social-item"><a class="social-link" href="#"><i class="ti-facebook" aria-hidden="true"></i></a></li>
                <li class="social-item"><a class="social-link" href="#"><i class="ti-twitter" aria-hidden="true"></i></a></li>
                <li class="social-item"><a class="social-link" href="#"><i class="ti-google" aria-hidden="true"></i></a></li>
                <li class="social-item"><a class="social-link" href="#"><i class="ti-instagram" aria-hidden="true"></i></a></li>
                <li class="social-item"><a class="social-link" href="#"><i class="ti-github" aria-hidden="true"></i></a></li>
            </ul> 
                  
                  
                </div>
            </div>
        </div>
    
        <!--Resume Section-->
        <section class="section" id="resume">
            <div class="container">
                <h2 class="mb-5"><span class="text-danger">My</span> Resume</h2>
                <div class="row">
                    <div class="col-md-6 col-lg-4">
                        <div class="card">
                           <div class="card-header">
                                <div class="mt-2">
                                    <h4>Experience</h4>
                                    <span class="line"></span>  
                                </div>
                            </div>
                            <div class="card-body">
                            ${res?.experiences
                                ?.map((data) => {
                                  return `
                                  <h6 class="title text-danger">${data?.company_name}</h6>
                                  <h6 class="title text-danger">${data?.start_date} - ${
                                    data?.is_current ? "Present" : data?.end_date
                                  }</h6>
                                  <P>${data?.designation}</P>
                                  <P class="subtitle">${data?.description}</P>
                                  <hr>
                                    `;
                                })
                                .join("")}    
                          
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card">
                           <div class="card-header">
                                <div class="mt-2">
                                    <h4>Education</h4>
                                    <span class="line"></span>  
                                </div>
                            </div>
                            <div class="card-body">
                            ${res?.eductaions
                                ?.map((data) => {
                                  return `
                                  <h6 class="title text-danger">${data?.university}</h6>

                                  <h6 class="title text-danger">${data?.start_date} - ${
                                    data?.is_current ? "Currently Studying" : data?.end_date
                                  }</h6>
                                  <P>${data?.course}</P>
                                  <P class="subtitle">${data?.description}</P>
                                  <hr>
                                     `;
                                })
                                .join("")}
                         
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                           <div class="card-header">
                                <div class="pull-left">
                                    <h4 class="mt-2">Skills</h4>
                                    <span class="line"></span>  
                                </div>
                            </div>
                            <div class="card-body pb-2">
                            ${res?.skills
                                ?.map((data) => {
                                  return `
                                  <h6>${data?.skill}</h6>
                                  <div class="progress mb-3">
                                      <div class="progress-bar bg-danger" role="progressbar" style="width: 97%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ${
                                        data?.type == 1
                                          ? "33%"
                                          : data?.type == 2
                                          ? "66%"
                                          : "100%"
                                      }"></div>
                                  </div>
                  
                                      `;
                                })
                                ?.join("")}
                             
                            
                            </div>
                        </div>
                        <!-- <div class="card">
                           <div class="card-header">
                                <div class="pull-left">
                                    <h4 class="mt-2">Languages</h4>
                                    <span class="line"></span>  
                                </div>
                            </div>
                            <div class="card-body pb-2">
                               <h6>English</h6>
                                <div class="progress mb-3">
                                    <div class="progress-bar bg-danger" role="progressbar" style="width: 80%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>French</h6>
                                <div class="progress mb-3">
                                    <div class="progress-bar bg-danger" role="progressbar" style="width: 45%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>Spanish</h6>
                                <div class="progress mb-3">
                                    <div class="progress-bar bg-danger" role="progressbar" style="width: 67%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </section>
    
       
    
        <section class="section" id="service">
            <div class="container">
                <h2 class="mb-5 pb-4"><span class="text-danger">My</span>Projects</h2>
                <div class="row">
                ${res?.projects?.map((data)=>{
                    return(
                        `
                        <div class="col-md-4 col-sm-6">
                        <div class="card mb-5">
                       
                          <div class="card-body px-4 py-3">
                              <h5 class="mb-3 card-title text-dark">${data?.title}</h5>
                            <a class="border-bottom border-primary text-decoration-none"href=${data?.link?data?.link:"#"}>Link</a>
                              
                              <P class="subtitle">${data?.description}</P>
                          </div>
                      </div>
                        `
                    )
                  })?.join("")}
            
            </div>
                  
                  
              
                 
                </div>
            </div>
        </section>
    
        <footer class="footer py-3">
            <div class="container">
            <p class="m-0">&copy; <a class="text-white font-weight-bold" href="#"></a>. All Rights Reserved. Designed by <a class="text-white font-weight-bold" href="https://www.resumebuild.in/">ResumeBuild</a>
  
            </div>
        </footer>
          `
        })
        .catch(error => {
            console.error('API request error:', error);
        });
} else {
    // Handle the case when 'profile' parameter is not present
    console.error('Profile parameter is missing from the URL.');
}