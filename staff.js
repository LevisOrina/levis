let staffMembers = [
    {
        id:1, 
        photo:"images/levis.jpg", 
        name:"Mr. Levis Orina Mong'are", 
        position:"CEO & Designer", 
        age: 25, 
        city:"Nairobi"
    }

];

const staffContainer = document.getElementById('teamContainer');

staffMembers.forEach(staffMember =>{
    staffContainer.innerHTML +=`
        <section class='staffCard'>
            <img src='${staffMember.photo}'>
            <p>Name: ${staffMember.name}<p/>
            <p>Position: ${staffMember.position}</p>
            <p>Age: ${staffMember.age}</p>
        </section>
    `;
});
