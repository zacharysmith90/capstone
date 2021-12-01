
window.odometerOptions = {
    auto: true, // Don't automatically initialize everything with class 'odometer'
    format: '(,ddd).dd', // Change how digit groups are formatted, and how many digits are shown after the decimal point
    duration: 1000 * 1, // Change how long the javascript expects the CSS animation to take
    animation: "count"
    
};


const module = {
    current_slide: 0,
    slides: [{
        title: "The Journey",
        description: "What you are about to experience",
        total_cost: 0,
        slide_cost: 0,
        progress: 0,
        days_invested: 0,
        img: "https://picsum.photos/id/1/1280/720"
    },{
        title: "In Vitro Fertilization",
        description: "Retrieval + Anesthesia, ICSI + Assisted Hatching, Fresh Transfer, Cryopreservation + 1 yr storage",
        total_cost: 12000,
        slide_cost: 12000,
        progress: 10,
        days_invested: 20,
        img: "https://picsum.photos/id/2/1280/720"
    },{
        title: "In House Monitoring",
        description: "Reciprocal IVF requires both partners to be monitored",
        total_cost: 13990,
        slide_cost: 1990,
        progress: 20,
        days_invested: 30,
        img: "https://picsum.photos/id/2/1280/720"
    },{
        title: "Genetic Testing",
        description: "Paid to genetics lab",
        total_cost: 15790,
        slide_cost: 1800,
        progress: 30,
        days_invested: 40,
        img: "https://picsum.photos/id/2/1280/720"
    },{
        title: "Medications",
        description: "Paid to pharmacy",
        total_cost: 17890,
        slide_cost: 2100,
        progress: 40,
        days_invested: 69,
        img: "https://picsum.photos/id/2/1280/720"
    },{
        title: "Bloodwork",
        description: "Paid to lab",
        total_cost: 18490,
        slide_cost: 600,
        progress: 50,
        days_invested: 83,
        img: "https://picsum.photos/id/2/1280/720"
    },{
        title: "Donor Sperm",
        description: "Prices vary, paid directly to sperm bank.",
        total_cost: 19240,
        slide_cost: 750,
        progress: 60,
        days_invested: 95,
        img: "https://picsum.photos/id/2/1280/720"
    },{
        title: "Frozen Transfer",
        description: "My second description",
        total_cost: 19935,
        slide_cost: 695,
        progress: 70,
        days_invested: 104,
        img: "https://picsum.photos/id/2/1280/720"
    },{
        title: "Sperm Processing",
        description: "My second description",
        total_cost: 20135,
        slide_cost: 200,
        progress: 80,
        days_invested: 132,
        img: "https://picsum.photos/id/2/1280/720"
    },{
        title: "Donor eggs",
        description: "My second description",
        total_cost: 24135,
        slide_cost: 4000,
        progress: 90,
        days_invested: 183,
        img: "https://picsum.photos/id/2/1280/720"
    },{
        title: "My second screen",
        description: "My second description",
        total_cost: 24135,
        slide_cost: 4000,
        progress: 100,
        days_invested: 246,
        img: "https://picsum.photos/id/2/1280/720"
    }],
    nextSlide: function(){
        this.current_slide = this.current_slide + 1;
        this.buildSlide();
    },
    prevSlide: function(){
        this.current_slide = this.current_slide - 1;
        this.buildSlide();
    },
    buildSlide: function(){
        const slide = this.slides[this.current_slide];
        const module = document.querySelector(".module");
        module.querySelector(".invested").querySelector("span").innerHTML = slide.days_invested;
        module.querySelector(".cost").querySelector("span").innerHTML = slide.total_cost;
        module.querySelector(".img").querySelector("img").src = slide.img;
        module.querySelector(".progress .bar").style.width = `${slide.progress}%`;
        // module.querySelector(".progressContainer .value span").innerHTML = slide.progress;
        module.querySelector("h2").innerHTML = slide.title;
        module.querySelector("p").innerHTML = slide.description;
        module.querySelector(".main .cost span").innerHTML = slide.slide_cost;
    }
};


    

    module.buildSlide();

    document.querySelector(".module .next").addEventListener("click", e => {
        e.preventDefault();
        module.nextSlide();
    })
    document.querySelector(".module .prev").addEventListener("click", e => {
        e.preventDefault();
        module.prevSlide();
    })


