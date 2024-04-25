const resumedata1 = {
    name:"Oviya S",
    title:"Software Engineer",
    Personaldetails: {
        Phonenumber: 9003993728,
        Emailid: "oviyasraj2001@gmail.com",
        Address:"12/9c, siruvanimain road,Alandhurai,Coimbatore.",
        DOB:"29-Mar-2001",
        Nationality:"Indian",
        LanguagesKnown:["Tamil,English"]
    },
    CareerObjective:"Seeking for challenging rolein a reputed organization to utilize my skills as well as to enhance my knowledge.",
    Education: {
         degree:"B.E Electronics and Communication",
         college:"Government college of Engineering,Salem.",
         PassedoutYear:"2018-2022"
    },

    TechnicalSkills:[
         "BasicJava",
         "HTML",
         "Css",
        "C,C++",
],
Declaration:"I hereby declare that the above information is correct and true  to the  best of my knowledge"
}

const entries = Object.entries(resumedata1,null,2);

entries.forEach(([key, value]) => {
    console.log(`${key}: ${JSON.stringify(value,null,2)}`);

});
