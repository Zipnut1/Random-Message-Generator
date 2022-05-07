// console.log("Script works")

const message1 ="Life will provide you with challenges; you must have a fighting spirit at all times.";
const message2="Do what makes you happy rather than what everyone else wants you to do.";
const message3="Nothing is impossible, the word itself says, I’m possible!";
const message4="What would you attempt to do if you knew you could not fail?";
const message5="The only time people truly fail is when they give up";
const message6="All our dreams can come true, if we have the courage to pursue them.";
const message7="Love is putting someone else’s needs before yours";
const message8="If you can't say something nice, don't say anything at all.";
const message9="The past can hurt. But the way I see it, you can either run from it, or learn from it.";
const message10="You must not let anyone define your limits because of where you come from. Your only limit is your soul";

var message =[message1,message2,message3,message4,message5,message6,message7,message8,message9,message10];


// message.forEach(element => {
//     console.log(element);
// });
function randomNumber(){

    return Math.floor(Math.random() *message.length)
}
function Message(){
    const choose1 = randomNumber();
    const choose2 = randomNumber();
    const choose3 = randomNumber();
     console.log(message[choose1]+"\n"+message[choose2]+"\n"+message[choose3]);
}
Message();




