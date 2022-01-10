import React from "react";


import product1 from './img/about1.jpg';
import product2 from './img/about2.jpg';
import product3 from './img/contact.jpg';
import product4 from './img/home.jpg';
import product5 from './img/paper.png';
import product6 from './img/laptop.png';
import product7 from './img/dolaptop.jpg';



function Home() {
  return (
<body id="page-top">     
    <header class="masthead d-flex align-items-center">
            <div class="container px-4 px-lg-5 text-left">
                <h1 class="mb-1">서울에서 </h1>
                <h3 class="mb-5"><em>안녕하세요 여러분 좋은 하루 되세요 </em></h3>
                <a class="btn btn-primary btn-xl" href="#about">Find Out More</a>
            </div>
    </header>
    <section class="content-section bg-light" id="about">
    <div class="container px-4 px-lg-5 text-center">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-lg-10">
                <h2>My website is about me!</h2>
                <p class="lead mb-5">
                    Welcome to my website!
                    <br /> Test loocative,
                </p>
                <a class="btn btn-primary btn-xl" href="#services">What We Offer</a>
            </div>
        </div>
    </div>
</section>
<section class="content-section bg-primary text-white text-center" id="services">
            <div class="container px-4 px-lg-5">
                <div class="content-section-heading">
                    <h3 class="text-secondary mb-0">Services</h3>
                    <h2 class="mb-5">What We Offer</h2>
                </div>
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-screen-smartphone"></i></span>
                        <h4><strong>Responsive</strong></h4>
                        <p class="text-faded mb-0">Looks great on any screen size!</p>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-pencil"></i></span>
                        <h4><strong>Redesigned</strong></h4>
                        <p class="text-faded mb-0">Freshly redesigned </p>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
                        <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-like"></i></span>
                        <h4><strong>Favorited</strong></h4>
                        <p class="text-faded mb-0">
                            Millions of users
                            <i class="fas fa-heart"></i>
                            Start Looking!!!
                        </p>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-mustache"></i></span>
                        <h4><strong>Question</strong></h4>
                        <p class="text-faded mb-0">I mustache you a question...</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="projects-section bg-light" id="projects">
            <div class="container px-4 px-lg-5">
                <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                    <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src={product1} alt="..." /></div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="featured-text text-center text-lg-left">
                            <h4>좋은 음식 </h4>
                            <p class="text-black-50 mb-0">좋은 음식을 먹으면 매일 일할 수 있는 힘이 생기니까 좋은 음식을 먹자 </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src={product2} alt="..." /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-black">건강하다 </h4>
                                    <p class="mb-0 text-black-50"> 건강을 위해서는 운동을 하고, 잘 먹고, 안정된 시간을 보내야 합니다. 우리가 1순위입니다. </p>
                                    <hr class="d-none d-lg-block mb-0 ms-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row gx-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src={product3} alt="..." /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-black">공부 잘해  </h4>
                                    <p class="mb-0 text-black-50">공부를 잘 하려면 스스로를 진지하게 공부하고 형들에게 배워야 합니다. </p>
                                    <hr class="d-none d-lg-block mb-0 me-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                    <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src={product4} alt="..." /></div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="featured-text text-center text-lg-left">
                            <h4>좋은 집 </h4>
                            <p class="text-black-50 mb-0">아름다운 집을 가지려면 돈이 있어야 하고, 돈을 원하면 재주가 있어야 하고, 재주가 있으려면 건강해야 하고, 건강하려면 돈이 있어야 합니다. </p>
                        </div>
                    </div>
                </div>
                
                
                <section class="masthead1">
                    <div class="row gx-0 justify-content-center">                   
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="featured-text text-center text-lg-left"  >
                                    <h1 class="mb-1 text-light " >Easy and Quick</h1>
                                    <p class="text-right"> 쉽고 빠른 두 가지만 연습하면 됩니다.<br></br> 
                                                            - 무엇이든 하기 쉽다 <br></br>
                                                            - fast는 무엇이든 빨리 하는 것입니다.
                                                            <br></br> 
                                                            - 무엇이든 하기 쉽다 <br></br>
                                                            - fast는 무엇이든 빨리 하는 것입니다. </p>
                                    <hr class="d-none d-lg-block mb-0 ms-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </section>
                
                

                <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src={product2} alt="..." /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-black">Greenland</h4>
                                    <p class="mb-0 text-black-50">Greenland is icy, mysterious, and one of the most naturally beautiful places on the planet. The world's biggest non-continental island is so much more than glaciers, too (although the glaciers are spectacular)—think magnificent fjords, colorful villages, fields of sheep, and that ever-alluring midnight sun.</p>
                                    <hr class="d-none d-lg-block mb-0 ms-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row gx-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src={product5} alt="..." /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                <p>재미있고 사교적이다 </p>
                            <h4>잘 생긴 수줍은 소녀 </h4>
                            <p class="text-black-50 mb-0">소년들을 위한 아주 좋은 것들 </p>
                            <p>재미있고 사교적이다 </p>
                            <h4>잘 생긴 수줍은 소녀 </h4>
                            <p class="text-black-50 mb-0">소년들을 위한 아주 좋은 것들 </p>
                            <p>재미있고 사교적이다 </p>
                            <h4>잘 생긴 수줍은 소녀 </h4>
                            <p class="text-black-50 mb-0">소년들을 위한 아주 좋은 것들 </p>
                                    <hr class="d-none d-lg-block mb-0 me-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                    <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src={product6} alt="..." /></div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="featured-text text-center text-lg-left">
                            <p>재미있고 사교적이다 </p>
                            <h4>잘 생긴 수줍은 소녀 </h4>
                            <p class="text-black-50 mb-0">소년들을 위한 아주 좋은 것들 </p>
                            <p>재미있고 사교적이다 </p>
                            <h4>잘 생긴 수줍은 소녀 </h4>
                            <p class="text-black-50 mb-0">소년들을 위한 아주 좋은 것들 </p>
                            <p>재미있고 사교적이다 </p>
                            <h4>잘 생긴 수줍은 소녀 </h4>
                            <p class="text-black-50 mb-0">소년들을 위한 아주 좋은 것들 </p>
                        </div>
                    </div>
                </div>



                <article class="card mb-4 ">
                <header class="card-header center-tittle">
                  <div class="card-meta">
                    <h1>소년들을 위한 아주 좋은 것들</h1>
                  </div>
                    <h5 class="card-title">우리는 어떻게 사랑에 대해 노래할 수 있습니까? </h5>
                </header>
                
                <div class="row gx-0 mb-5 mb-lg-6 align-items-center">
                    <div class="col-xl-7 col-lg-4 "><img class="img-fluid2 center"  width="300" height="200" src={product7} alt="..." /></div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="featured-text text-center text-lg-left">
                            <p>재미있고 사교적이다 </p>
                            <h4>잘 생긴 수줍은 소녀 </h4>
                            <p class="text-black-50 mb-0">소년들을 위한 아주 좋은 것들 </p>
                            <p>재미있고 사교적이다 </p>
                            <h4>잘 생긴 수줍은 소녀 </h4>
                            <p class="text-black-50 mb-0">소년들을 위한 아주 좋은 것들 </p>
                            <p>재미있고 사교적이다 </p>
                            <h4>잘 생긴 수줍은 소녀 </h4>
                            <p class="text-black-50 mb-0">소년들을 위한 아주 좋은 것들 </p>
                        </div>
                        
                    </div>
                    

                    <div class="featured-text text-left1">
                            <p>재미있고 사교적이다 </p>
                            <h4>잘 생긴 수줍은 소녀 </h4>
                            <p class="text-black-50 mb-0">소년들을 위한 아주 좋은 것들 </p>
                            <p>재미있고 사교적이다 </p>
                            <h4>잘 생긴 수줍은 소녀 </h4>
                            <p class="text-black-50 mb-0">소년들을 위한 아주 좋은 것들 </p>
                            <p>재미있고 사교적이다 </p>
                            <h4>잘 생긴 수줍은 소녀 </h4>
                            <p class="text-black-50 mb-0">소년들을 위한 아주 좋은 것들 </p>
                        </div>
                   
                   
                    <div class="btn">
                        <p class="btn btn-dark center-button ">생산적인 것이 어떤 것인지 말해줘  </p>
                    </div>
                </div>     
              
              </article>

        </section>
</body> 
  );
}

export default Home;