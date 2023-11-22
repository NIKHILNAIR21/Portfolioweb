
  
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
            const dynamicContent = document.getElementById('page-top');
            dynamicContent.innerHTML = `  
            <!-- Navbar Start -->
            <nav class="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
                <a href="index.html" class="navbar-brand ml-lg-3">
                    <h1 class="m-0 display-5"><span class="text-primary">${res?.full_name}</h1>
                </a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse px-lg-3" id="navbarCollapse">
                    <div class="navbar-nav m-auto py-0">
                        <a href="#home" class="nav-item nav-link active">Home</a>
                        <a href="#about" class="nav-item nav-link">About</a>
                        <a href="#qualification" class="nav-item nav-link">Qualification</a>
                        <a href="#qualification" class="nav-item nav-link">Education</a>
                        <a href="#skill" class="nav-item nav-link">Skill</a>
                        <a href="#service" class="nav-item nav-link">Project</a>
                    </div>

                </div>
            </nav>
            <!-- Navbar End -->
        
        
            <!-- Video Modal Start -->
            <!-- <div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>        
                            
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe class="embed-responsive-item" src="" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
            <!-- Video Modal End -->
        
        
            <!-- Header Start -->
            <div class="container-fluid bg-primary d-flex align-items-center mb-5 py-5" id="home" style="min-height: 100vh;">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
                            <img class="img-fluid w-100 rounded-circle shadow-sm" src=${res?.profile_picture} alt="">
                        </div>
                        <div class="col-lg-7 text-center text-lg-left">
                            <h3 class="text-white font-weight-normal mb-3">I'm</h3>
                            <h1 class="display-3 text-uppercase text-primary mb-2" style="-webkit-text-stroke: 2px #ffffff;">${res?.full_name}</h1>
                            <h1 class="typed-text-output d-inline font-weight-lighter text-white">${res?.position}</h1>
                            
                            <!-- <div class="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                            
                                <button type="button" class="btn-play" data-toggle="modal"
                                    data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                                    <span></span>
                                </button>
                                <h5 class="font-weight-normal text-white m-0 ml-4 d-none d-sm-block">Play Video</h5>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- Header End -->
        
        
            <!-- About Start -->
            <div class="container-fluid py-5" id="about">
                <div class="container">
                    <div class="position-relative d-flex align-items-center justify-content-center">
                        <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">About</h1>
                        <h1 class="position-absolute text-uppercase text-primary">About Me</h1>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-5 pb-4 pb-lg-0">
                            <img class="img-fluid rounded w-100" src=${res?.profile_picture} alt="">
                        </div>
                        <div class="col-lg-7">
                            <h3 class="mb-4">${res?.position}</h3>
                            <p>${res?.summary}</p>
                            <div class="row mb-3">
                                <div class="col-sm-6 py-2"><h6>Name: <span class="text-secondary">${res?.full_name}</span></h6></div>
                                <div class="col-sm-6 py-2"><h6>Email: <span class="text-secondary">${res?.email}</span></h6></div>
                                <div class="col-sm-6 py-2"><h6>Phone No: <span class="text-secondary">${res?.mobile_no}</span></h6></div>
                                <div class="col-sm-6 py-2"><h6>Address: <span class="text-secondary">${res?.address}</span></h6></div>
                             
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
            <!-- About End -->
        
        
            <!-- Qualification Start -->
            <div class="container-fluid py-5" id="qualification">
                <div class="container">
                    <div class="position-relative d-flex align-items-center justify-content-center">
                        <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Quality</h1>
                        <h1 class="position-absolute text-uppercase text-primary">Education & Expericence</h1>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <h3 class="mb-4">My Education</h3>
                            <div class="border-left border-primary pt-2 pl-4 ml-2">
                              
                            ${res?.eductaions
                                ?.map((data) => {
                                  return `
                                  <div class="position-relative mb-4">
                                  <i class="far fa-dot-circle text-primary position-absolute" style="top: 2px; left: -32px;"></i>
                                  <h5 class="font-weight-bold mb-1">${data?.course}</h5>
                                  <p class="mb-2"><strong>${data?.university}</strong> | <small>${data?.start_date} - ${
                                    data?.is_current ? "Currently Studying" : data?.end_date
                                  }</small></p>
                                  <p>${data?.description}</p>
                              </div>
                                     `;
                                })
                                .join("")}
                             
                               
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <h3 class="mb-4">My Expericence</h3>
                            <div class="border-left border-primary pt-2 pl-4 ml-2">
                            ${res?.experiences
                                ?.map((data) => {
                                  return `
                                  <div class="position-relative mb-4">
                                  <i class="far fa-dot-circle text-primary position-absolute" style="top: 2px; left: -32px;"></i>
                                  <h5 class="font-weight-bold mb-1">${data?.designation}</h5>
                                  <p class="mb-2"><strong>${data?.company_name}</strong> | <small>${data?.start_date} - ${
                                    data?.is_current ? "Present" : data?.end_date
                                  }</small></p>
                                  <p>${data?.description}</p>
                              </div>
                                    `;
                                })
                                .join("")}      
                               
                              
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Qualification End -->
        
        
            <!-- Skill Start -->
            <div class="container-fluid py-5" id="skill">
                <div class="container">
                    <div class="position-relative d-flex align-items-center justify-content-center">
                        <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Skills</h1>
                        <h1 class="position-absolute text-uppercase text-primary">My Skills</h1>
                    </div>
                    <div class="row align-items-center">
                    ${res?.skills
                        ?.map((data) => {
                          return `
                          <div class="col-md-6">
                          
                        <div class="skill mb-4">
                          <div class="d-flex justify-content-between">
                            <h6 class="font-weight-bold">${data?.skill}</h6>
        
                          </div>
                          <div class="progress">
                            <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: ${
                                data?.type == 1
                                  ? "33%"
                                  : data?.type == 2
                                  ? "66%"
                                  : "100%"
                              }"></div>
                          </div>
                       </div>
                       </div>
          
                              `;
                        })
                        ?.join("")}
                      
                          
                        
                      
                    </div>
                </div>
            </div>
            <!-- Skill End -->
        
        
            <!-- Services Start -->
            <div class="container-fluid pt-5" id="service">
                <div class="container">
                    <div class="position-relative d-flex align-items-center justify-content-center">
                        <h1 class="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Projects</h1>
                        <h1 class="position-absolute text-uppercase text-primary">My Projects</h1>
                    </div>
                    <div class="row pb-3">
                    ${res?.projects?.map((data)=>{
                        return(
                            `
                            <div class="col-lg-4 col-md-6 text-center mb-5">
                            <div class="d-flex align-items-center justify-content-center mb-4">
                                <i class="fa fa-2x fa-laptop-code service-icon bg-primary text-white mr-3"></i>
                                <h4 class="font-weight-bold m-0">${data?.title}</h4>
                            </div>
                            <p>${data?.description}</p>
                            <a class="border-bottom border-primary text-decoration-none"href=${data?.link?data?.link:"#"}>Link</a>
                        </div>
                            `
                        )
                      })?.join("")}
                      
                     
                       
                       
                       
                    </div> 
                </div>
            </div>
            <!-- Services End -->
        
            <!-- Footer Start -->
            <div class="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
                <div class="container text-center py-5">
                    <div class="d-flex justify-content-center mb-4">
                    ${res?.social_links?.map((data)=>{
                        return(
                            `
                      
                        <a class="btn btn-light btn-social mr-2" href=${data?.link}>${data?.name}</a>
                            
                            `
                        )
                    })?.join("")}
                   
                    </div>
                  
                    <p class="m-0">&copy; <a class="text-white font-weight-bold" href="#"></a>. All Rights Reserved. Designed by <a class="text-white font-weight-bold" href="https://www.resumebuild.in/">ResumeBuild</a>
                    </p>
                </div>
            </div>
            <!-- Footer End -->
          `
        })
        .catch(error => {
            console.error('API request error:', error);
        });
} else {
    // Handle the case when 'profile' parameter is not present
    console.error('Profile parameter is missing from the URL.');
}
