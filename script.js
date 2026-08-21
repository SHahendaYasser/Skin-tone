let title = document.getElementById("title");
let input = document.getElementById("input");
let sut = document.getElementById("sut");
let unsut = document.getElementById("unsut");
let message = document.getElementById("message");
let select = document.getElementById("select");
let pale = ["Soft (pastel) colors such as pale pink, sky blue, lavender, and mint green.Soft","Stark white and sharp black, because they make the skin look very pale."];
let light = ["Shades of blue (royal and navy), ruby ​​red, and emerald green.","Vivid yellow and glaring orange"];
let medium = ["Warm earth tones such as beige, mustard, olive, and burgundy.","Vibrant neon shades"];
let olive = ["Vibrant pink, warm orange, grass green, and gold.","Pale gray and shades leaning towards pale yellow."];
let bronze = ["Stark white, fuchsia, orange, mustard yellow, and cobalt blue.","Very dark brown (because it blends with the skin tone)"];
let dark = ["Bold and vibrant colors such as purple, neon, hot pink, and shimmering gold.","Pale gray and muted earth tones"];
let sutarray = [pale[0],light[0],medium[0],olive[0],bronze[0],dark[0]];
let unsutarray = [pale[1],light[1],medium[1],olive[1],bronze[1],dark[1]];


sut.addEventListener("click", function(){
let selection = select.value;
if (selection === "") {
    message.textContent= "Please inter your skin tone.";
    return;
}
switch(selection) {
    case "1":
        message.textContent= sutarray[0];
        break;
    case "2":
    case "2":
        message.textContent= sutarray[1];
        break;
    case "3":
        message.textContent= sutarray[2];
        break;
    case "4":
        message.textContent= sutarray[3];
        break;
    case "5":
        message.textContent= sutarray[4];
        break;
    case "6":
        message.textContent= sutarray[5];
        break;
}
});

unsut.addEventListener("click", function(){
let selection = select.value;
if (selection === "") {
    message.textContent= "Please inter your skin tone.";
    return;
}
switch(selection) {
    case "1":
        message.textContent= unsutarray[0];
        break;
    case "2":
        message.textContent= unsutarray[1];
        break;
    case "3":
        message.textContent= unsutarray[2];
        break;
    case "4":
        message.textContent= unsutarray[3];
        break;
    case "5":
        message.textContent= unsutarray[4];
        break;
    case "6":
        message.textContent= unsutarray[5];
        break;
}
});
select.addEventListener("change", function(){
    message.textContent="";
});