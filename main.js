


const module = {
    current_slide: 0,
    slides: [{
        title: "My first screen",
        description: "My First description",
        total_cost: 0,
        slide_cost: 100,
        progress: 10,
        days_invested: 1,
        img: "https://picsum.photos/id/1/1280/720"
    },{
        title: "My second screen",
        description: "My second description",
        total_cost: 250,
        slide_cost: 150,
        progress: 20,
        days_invested: 30,
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
        module.querySelector(".progressContainer .value span").innerHTML = slide.progress;
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


