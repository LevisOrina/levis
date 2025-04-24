//SERVICES DISPLAY
let services = [
    {id:1, name:"Poster 1", image:"images/poster1.jpg", year:"2025"},
    {id:2, name:"Poster 2", image:"images/poster3.png", year:"2025"},
    {id:3, name:"Poster 3", image:"images/poster2.png", year:"2025"},
    {id:4, name:"Poster 4", image:"images/poster4.jpg", year:"2025"}
];


const container = document.getElementById('galleryContainer');

services.forEach(service =>{
    container.innerHTML +=`
        <section class='galleryCard'>
            <img src='${service.image}'>
            <p>Year: ${service.year}</p>
        </section>
    `;
});