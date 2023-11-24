
  
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
              <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
              <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-block d-lg-none">${res?.full_name}</span>
                <span class="d-none d-lg-block">
                  <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src=${res?.profile_picture} alt="">
                </span>
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#about">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#education">Education</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#projects">Projects</a>
                  </li>
                
                </ul>
              </div>
            </nav>
        
            <div class="container-fluid p-0">
        
              <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
                <div class="my-auto">
                  <h1 class="mb-0">
                  ${res?.full_name}
                  </h1>
                  <div class="subheading mb-5">${res?.address}·
                    <a href="mailto:name@email.com">${res?.email}</a>
                  </div>
                  <p class="mb-5">${res?.summary}</p>
                  <ul class="list-inline list-social-icons mb-0">
                    <li class="list-inline-item">
                      <a href="#">
                        <span class="fa-stack fa-lg">
                          <i class="fa fa-circle fa-stack-2x"></i>
                          <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <span class="fa-stack fa-lg">
                          <i class="fa fa-circle fa-stack-2x"></i>
                          <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <span class="fa-stack fa-lg">
                          <i class="fa fa-circle fa-stack-2x"></i>
                          <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">
                        <span class="fa-stack fa-lg">
                          <i class="fa fa-circle fa-stack-2x"></i>
                          <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
        
              <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
                <div class="my-auto">
                  <h2 class="mb-5">Experience</h2>
                  ${res?.experiences
                    ?.map((data) => {
                      return `
                      <div class="resume-item d-flex flex-column flex-md-row mb-5">
                      <div class="resume-content mr-auto">
                        <h3 class="mb-0">${data?.designation}</h3>
                        <div class="subheading mb-3">${data?.company_name}</div>
                        <p>${data?.description}</p>
                      </div>
                      <div class="resume-date text-md-right">
                        <span class="text-primary">${data?.start_date} - ${
                          data?.is_current ? "Present" : data?.end_date
                        }</span>
                      </div>
                    </div>
                        `;
                    })
                    .join("")}      
        
                </div>
        
              </section>
        
              <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
                <div class="my-auto">
                  <h2 class="mb-5">Education</h2>
                  ${res?.eductaions
                    ?.map((data) => {
                      return `
                      <div class="resume-item d-flex flex-column flex-md-row mb-5">
                    <div class="resume-content mr-auto">
                      <h3 class="mb-0">${data?.university}</h3>
                      <div class="subheading mb-3">${data?.course}</div>
                      <div>${data?.description}</div>
                    
                    </div>
                    <div class="resume-date text-md-right">
                      <span class="text-primary">${data?.start_date} - ${
                        data?.is_current ? "Currently Studying" : data?.end_date
                      }</span>
                    </div>
                  </div>
                         `;
                    })
                    .join("")}
                 
        
                 
        
                </div>
              </section>
        
              <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
                <div class="my-auto">
                  <h2 class="mb-5">Skills</h2>
                  <ul class="list-inline list-icons">
                  ${res?.skills
                    ?.map((data) => {
                      return `
                      <li class="list-inline-item">
                      ${data?.skill}
                    </li>
      
                          `;
                    })
                    ?.join("")}
                   
                  </ul>
        
               
              </section>
        
          
              <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
              <div class="my-auto">
                <h2 class="mb-5">Projects</h2>
                ${res?.projects
                  ?.map((data) => {
                    return `
                    <div class="resume-item d-flex flex-column flex-md-row mb-5">
                  <div class="resume-content mr-auto">
                    <h3 class="mb-0">${data?.title}</h3>
                    <a class="subheading mb-3" href=${data?.link}>${data?.link}<a>
                    <div>${data?.description}</div>
                  
                  </div>
                  <div class="resume-date text-md-right">
                    <span class="text-primary">${data?.start_date} - ${
                      data?.is_current ? "Currently Studying" : data?.end_date
                    }</span>
                  </div>
                </div>
                       `;
                  })
                  .join("")}
               
      
               
      
              </div>
            </section>
           
        
            </div>
            `
          })
          .catch(error => {
              console.error('API request error:', error);
          });
  } else {
      // Handle the case when 'profile' parameter is not present
      console.error('Profile parameter is missing from the URL.');
  }
  