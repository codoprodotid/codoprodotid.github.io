const config = {
    app_name: "Codo Pro ID",
    phone: "085117248442",
    wa_me: "https:/wa.me/+6285117248442",
    address: "Vila Bukit Tidar Blok A4 No 81 Merjosari Malang",
    email: "codopro.id@gmail.com",
    work_hour: "Senin - Jumat : 08.00 - 16.00 WIB",
};
const teams = [
    {
        name: "Miftahul Ulum, S.Pd., Gr.",
        position: "Full Stack Developer",
        github: "https://miftahululum002.github.io",
        instagram: "https://www.instagram.com/miftahululum002/",
        linkedin: "https://www.linkedin.com/in/miftahululum002/",
        image: "./assets/img/teams/miftahul-ulum.jpg",
    },
];
const testimonials = [
    {
        name: "Muhammad Zidane",
        testimony:
            "Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.",
        profession: "TIM IT MTsN 6 Malang",
        image: "./assets/img/logo.png",
    },
];

const portfolios = [{ name: "Landing Page" }];

const services = [
    {
        name: "Landing Page",
        description: "Pembuatan landing page untuk produk atau jasa",
        icon: "fa fa-solar-panel",
        image: "./assets/img/logo.png",
    },
    {
        name: "Website Profil Organisasi/Institusi",
        description: "Pembuatan website profil organisas/institusi",
        icon: "fa fa-solar-panel",
        image: "./assets/img/logo.png",
    },
    {
        name: "Konsultan IT",
        description: "Konsultasi di Bidang IT",
        icon: "fa fa-solar-panel",
        image: "./assets/img/logo.png",
    },
];

$(document).ready(function () {
    setTextElement(".app-name", config.app_name);
    setTextElement(".address", config.address);
    setTextElement(".email", config.email);
    setTextElement(".phone", config.phone);
    setTextElement(".work-hour", config.work_hour);
    setTeams();
    setTestimonials();
    setSevices();
});

function setTextElement(selector, text) {
    $(selector).text(text);
}
// teams
function setTeams() {
    let result = "";
    teams.forEach((team, index) => {
        result += setTeamItem(team, index);
    });
    $("#container-teams").html(result);
}

function setTeamItem(team, index = 0) {
    const delay = "0." + (Number(index) + 1);
    let html = `<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="${delay}s">
            <div class="team-item rounded overflow-hidden">
                <div class="d-flex">
                    <img class="img-fluid w-75" src="${team.image}" alt="">
                    <div class="team-social w-25">
                    <a target="_blank" class="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="${team.github}"><i class="fab fa-github"></i></a>
                    <a target="_blank" class="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="${team.instagram}"><i class="fab fa-instagram"></i></a>
                    <a target="_blank" class="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="${team.linkedin}"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
            <div class="p-4">
                <h5>${team.name}</h5>
                <span>${team.position}</span>
            </div>
        </div>
    </div>`;
    return html;
}
// testimonials
function setTestimonials() {
    let html = "";
    testimonials.forEach((item, index) => {
        html += setTetimonyItem(item, index);
    });
    $("#container-testimonials").html(html);
}

function setTetimonyItem(item, index = 0) {
    let html = ` <div class="testimonial-item text-center">
        <div class="testimonial-img position-relative">
            <img class="img-fluid rounded-circle mx-auto mb-5" src="${item.image}">
            <div class="btn-square bg-primary rounded-circle">
                <i class="fa fa-quote-left text-white"></i>
            </div>
        </div>
        <div class="testimonial-text text-center rounded p-4">
            <p>${item.testimony}</p>
            <h5 class="mb-1">${item.name}</h5>
            <span class="fst-italic">${item.profession}</span>
        </div>
    </div>`;
    return html;
}

// services

function setSevices() {
    let result = "";
    services.forEach((item, index) => {
        result += setServiceItem(item, index);
    });
    $("#container-services").html(result);
}

function setServiceItem(item, index) {
    let html = `<div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
        <div class="service-item rounded overflow-hidden">
            <img class="img-fluid" src="${item.image}" alt="">
            <div class="position-relative p-4 pt-0">
                <div class="service-icon">
                    <i class="${item.icon} fa-3x"></i>
                </div>
                <h4 class="mb-3">${item.name}</h4>
                <p>${item.description}</p>
                <a class="small fw-medium d-none" href="">Read More<i class="fa fa-arrow-right ms-2"></i></a>
            </div>
        </div>
    </div>`;
    return html;
}
