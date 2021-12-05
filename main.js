
window.odometerOptions = {
    auto: true, // Don't automatically initialize everything with class 'odometer'
    format: '(,ddd).dd', // Change how digit groups are formatted, and how many digits are shown after the decimal point
    duration: 1000 * 1, // Change how long the javascript expects the CSS animation to take
    animation: "count"
    
};


const module = {
    current_slide: 0,
    slides: [{
        title: "The Journey to $104,000",
        description: "It is February 24, 2020. Tomorrow it begins. ",
        total_cost: 0,
        slide_cost: 0,
        progress: 0,
        days_invested: 0,
    },{
        title: "First semen analysis",
        description: "TKTKTKTK",
        total_cost: 0,
        slide_cost: 127.10,
        progress: 1,
        days_invested: 1,
        
    },{
        title: "First visit with my urologist",
        description: "TKTKTKTKTKTK",
        total_cost: 3579.55,
        slide_cost: 3452.45,
        progress: 3,
        days_invested: 87,
        
    },{
        title: "Urologist Mandated Fertlity Clinic Semen Analysis",
        description: "TKTKTKTKTK",
        total_cost: 4220.55,
        slide_cost: 641,
        progress: 4,
        days_invested: 116,
        
    },{
        title: "Testicle Ultrasound",
        description: "TKTKTKTKTKTKTKT",
        total_cost: 7197.03,
        slide_cost: 2976.48,
        progress: 6,
        days_invested: 119,
        
    },{
        title: "News of Varicocele",
        description: "Includes visit to urologist, urine test, and bloodwork",
        total_cost: 7918.03,
        slide_cost: 721.00,
        progress: 7,
        days_invested: 129,
        
    },{
        title: "Pre-Surgical Preparations",
        description: "Includes chest x-ray, EKG, bloodwork",
        total_cost: 10427.37,
        slide_cost: 2509.34,
        progress: 10,
        days_invested: 151,
        
    },{
        title: "Varicocelectomy Surgery",
        description: "TKTKTKTK",
        total_cost: 20089.37,
        slide_cost: 9662.00,
        progress: 19,
        days_invested: 154,
        
    },{
        title: "Final Mandated Semen Analysis",
        description: "Fifth of mandated semen analysis, doctor found no sperm",
        total_cost: 21339.37,
        slide_cost: 1250.00,
        progress: 20,
        days_invested: 275,
        
    },{
        title: "Urologist Perscribe microTESE",
        description: "Learn of new surgery, bloodwork, urine test",
        total_cost: 22185.37,
        slide_cost: 846,
        progress: 21,
        days_invested: 290,
        
    },{
        title: "Pre-surgical procedures",
        description: "EKG, bloodwork",
        total_cost: 23883.74,
        slide_cost: 1698.37,
        progress: 22,
        days_invested: 330,
        
    },{
        title: "microTESE surgery",
        description: "Anesthesia, surgert, and sperm tissue was frozen",
        total_cost: 49196.12,
        slide_cost: 25312.38,
        progress: 46,
        days_invested: 336,
        
    },{
        title: "First visit with wife's endocrinologist",
        description: "After learning about microTESE results, we opted to go with IVF. Bloodwork, complete blood count",
        total_cost: 52104.16,
        slide_cost: 2908.04,
        progress: 49,
        days_invested: 571,
        
    },{
        title: "Bloodwork and Ultrasounds",
        description: "Over the course of ten days, four ultrasounds were conducted and 8 bloodtest",
        total_cost: 63029.66,
        slide_cost: 10925.50,
        progress: 59,
        days_invested: 584,
        
    },{
        title: "Egg Retrieval",
        description: "Egg retrieval, anesthesia, and sperm tissue thawing",
        total_cost: 78497.66,
        slide_cost: 15468.00,
        progress: 74,
        days_invested: 585,
        
    },{
        title: "Side Effects May Include Ovarian Hyperstimulation Syndrome",
        description: "Ultrasounds, bloodwork, fluid taps, 24 days of bad reactions",
        total_cost: 96422.74,
        slide_cost: 17925.08,
        progress: 91,
        days_invested: 612,
        
    },{
        title: "Frozen embryo Transfer",
        description: "TKTKTKTKTKTKTKTK",
        total_cost: 103879.74,
        slide_cost: 7457.00,
        progress: 98,
        days_invested: 617,
        
    },{
        title: "Follow Up Bloodwork",
        description: "TKTKTKTKTKTKTKTK",
        total_cost: 104226.74,
        slide_cost: 347,
        progress: 99,
        days_invested: 627,
        
    },{
        title: "Strike 1",
        description: "We learn that it didn't take. We are trying again. Without insurance or medical side effects, this will cost at least another $5,600",
        total_cost: 105151.74,
        slide_cost: 925,
        progress: 100,
        days_invested: 646,
        
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
        module.querySelector(".progress .bar").style.width = `${slide.progress}%`;
        // module.querySelector(".progressContainer .value span").innerHTML = slide.progress;
        module.querySelector("h3").innerHTML = slide.title;
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


