const resumedata2 = {
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

const keys = Object.keys(resumedata2);


for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = resumedata2[key];
    console.log(`${key}:`, value);
}