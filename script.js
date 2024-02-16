var story;
var time = 0
var currentIndex = -1;
var myInterval;
var isTimerStarted = false;
document.getElementById("time")?document.getElementById("time").innerHTML = `${time}s`:""
document.getElementById("date")?document.getElementById("date").innerHTML = new Date().getDate() + "-" + new Date().getMonth() + "-" + new Date().getFullYear():""
var paragraphs = [
    "The old, abandoned house on the hill was said to be haunted. Nobody dared to go near it after dark, for fear of encountering the ghostly figure that was rumored to wander its halls. One night, a group of teenagers decided to explore the house, determined to prove that the haunting was just a myth. As they crept through the dusty rooms, they heard strange noises and saw shadowy figures out of the corner of their eyes. Terrified, they ran out of the house and never returned, convinced that the rumors were true.",
    "Sarah had always been afraid of spiders, so when she found a large, hairy one crawling across her bedroom ceiling, she screamed for her dad to come and get rid of it. Her dad, amused by her fear, grabbed a glass and a piece of paper and gently captured the spider, taking it outside to release it. Sarah watched from a safe distance, relieved that the spider was gone. From that day on, she made sure to check her room carefully before going to bed.",
    "The spaceship landed in the middle of the town square, shocking the residents who gathered around to see who—or what—had arrived from another planet. The door of the spaceship opened, and out stepped a group of friendly aliens, waving to the crowd. They had come in peace, seeking to learn about life on Earth. The townspeople, initially fearful, soon warmed to the aliens and welcomed them with open arms. Together, they exchanged knowledge and formed a bond that would last for generations.",
    "The little boy had lost his favorite toy, a stuffed bear named Teddy, but after a thorough search of the house, he found it hiding under his bed, right where he had left it. Overjoyed, he hugged Teddy tightly, vowing never to lose him again. From that day on, Teddy went everywhere with him, a constant companion in a world full of adventures and discoveries.",
    "The detective followed the clues to a rundown warehouse on the edge of town, where he finally caught the criminal who had been eluding him for months. The criminal, cornered and desperate, tried to escape, but the detective was too quick for him. With a swift move, he apprehended the criminal and brought him to justice. The town cheered for the detective, grateful that he had restored safety and peace to their streets.",
    "It was a dark and stormy night when the power went out, leaving the family huddled together in the living room, telling ghost stories to pass the time until the storm passed. As the wind howled outside and the rain beat against the windows, they laughed and screamed at the spooky tales, grateful for the warmth and safety of their home. When the power came back on, they went to bed, the storm now just a memory of a night filled with family bonding.",
    "The magician waved his wand and uttered the magic words, 'Abracadabra!' and suddenly, a rabbit appeared out of thin air, much to the amazement of the audience. The children clapped and cheered, delighted by the magician's trick. But as the magician took a bow, the rabbit hopped over to him and whispered something in his ear. The magician's eyes widened in surprise, and he grinned mischievously. With a wave of his wand, he turned the rabbit into a hat, which he placed on his head, to the delight and confusion of the audience.",
    "The princess was locked in a tower by an evil sorcerer, but she managed to escape by using her wits and cunning to outsmart him. She tricked the sorcerer into thinking she had agreed to marry him, but when he let his guard down, she knocked him out with a sleeping potion and stole the key to the tower. With a quick escape down the hidden staircase, she was free at last, ready to reclaim her kingdom and restore peace to the land.",
    "The treasure map led the adventurers to a remote island, where they dug up a chest full of gold and jewels, fulfilling their dreams of wealth and fortune. But as they celebrated their find, they heard a rumbling sound and saw the ground begin to shake. To their horror, a volcano on the island had erupted, spewing lava and ash into the air. With no time to lose, they grabbed the treasure and ran for their lives, narrowly escaping the destruction of the island.",
    "The time machine malfunctioned, sending the explorers hurtling back in time to the age of the dinosaurs, where they had to outwit hungry predators to find their way back home. Armed with only their wits and knowledge of history, they navigated the treacherous landscape, avoiding T-Rexes and velociraptors at every turn. Finally, after many harrowing adventures, they found the time machine and returned to the present, grateful for the safety and comfort of their own time.",
    "The secret agent used all of his spy gadgets to outmaneuver the enemy agents and retrieve the stolen plans before they could be used against his country. With a combination of stealth, cunning, and a little bit of luck, he outsmarted the enemy at every turn, leaving them baffled and frustrated. In the end, he returned the stolen plans to his superiors, who praised him for his bravery and resourcefulness in the face of danger.",
    "The boy who cried wolf learned his lesson when the real wolf appeared, and nobody believed him when he tried to warn them. The villagers, tired of his false alarms, ignored his cries for help, thinking it was just another trick. But this time, the wolf was real, and it attacked the village, causing chaos and destruction. In the end, the boy realized the importance of telling the truth and vowed never to lie again, a lesson he would never forget.",
    "The superhero saved the city from destruction by using his superpowers to thwart the villain's evil plans. With incredible strength and speed, he defeated the villain and saved the day, earning the gratitude and admiration of the city's residents. As he flew off into the sunset, he knew that his work was never done, and he would always be ready to protect the city from any threat that dared to come its way.",
    "The ghost of the old lighthouse keeper was said to haunt the tower, but when a group of teenagers investigated, they discovered the truth behind the legend. It turned out that the 'ghost' was just an old man who had been living in the tower, trying to scare people away so he could search for a hidden treasure. Embarrassed by their mistake, the teenagers helped the old man find the treasure, and they all became friends, laughing at the misunderstanding.",
    "The alien invasion was thwarted by a group of brave humans who fought back against the extraterrestrial invaders, saving the Earth from destruction. With courage and determination, they repelled the aliens and sent them fleeing back into space, never to return. The world celebrated their victory, grateful for the heroes who had saved them from annihilation. And as the aliens' ships disappeared into the depths of space, the humans knew that they were safe once more, thanks to their bravery and unity."
];
let tPressed = false;

document.addEventListener('keydown', function(event) {
    if (event.key === 'r' || event.key === 'R') {
        tPressed = true;
    }
    if (tPressed && event.key === 'Enter') {
        location.reload();
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 't' || event.key === 'T') {
        tPressed = false;
    }
});


var showPara = () => {
    document.getElementById("nameP").innerHTML = localStorage.getItem("name")
    clearInterval(myInterval)
    time = 1;
    document.getElementById("time")?document.getElementById("time").innerHTML = `${time}s`:""
    document.getElementById("speed")?document.getElementById("speed").innerHTML = (0) + " WPM":""
    isTimerStarted = false
    document.getElementById("typing")?document.getElementById("typing").value = '':""
    document.getElementById("para")?document.getElementById("para").innerHTML = "":""
    story = Math.floor(Math.random() * paragraphs.length)
    for (i = 0; i < paragraphs[story].length; i++) {
        document.getElementById("para")?document.getElementById("para").innerHTML += `<span id='${i}' style="margin: 0 1px 0 2px; font-size: 23px">${paragraphs[story][i]}<pre></pre></span>`:""
    }
}
var startTime = () => {
    myInterval = setInterval(timer, 1000);
    function timer() {
        time++
        document.getElementById("time").innerHTML = `${time}s`
    }
}
showPara()
document.getElementById("typing")?document.getElementById("typing").addEventListener("keydown", function(event) {
    if (event.ctrlKey || event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
    }
}):"";
document.getElementById("typing")?document.getElementById("typing").addEventListener("input", () => {
    document.addEventListener("keyup", function (event) {
        if (event.key === "Backspace") {
            document.getElementById(currentIndex + 1).style.color = "#5d5f62"
        }
    });
    if (!isTimerStarted) {
        startTime()
        isTimerStarted = true
    }
    currentIndex = document.getElementById("typing").value.length - 1
    document.getElementById("speed").innerHTML = (Math.round(((currentIndex)  / 5) / (time) * 60)) + " WPM"
    checkEnd()
}):""
var checkEnd = () => {
    changeColor();
    if (currentIndex == paragraphs[story].length - 1) {
        let typedText = document.getElementById("typing").value;
        let totalChars = paragraphs[story].length;
        let correctChars = 0;
        for (let i = 0; i < totalChars; i++) {
            if (typedText[i] === paragraphs[story][i]) {
                correctChars++;
            }
        }
        let accuracy = ((correctChars / totalChars) * 100).toFixed(2);
        alert(`Accuracy: ${accuracy}%`);
        clearInterval(myInterval)
    }
}
var changeColor = () => {
    if (currentIndex >= 0 && currentIndex < paragraphs[story].length) {
        let currentElement = document.getElementById(currentIndex);
        currentElement.style.color = document.getElementById("typing").value[currentIndex] === currentElement.innerText ? "white" : "#ca4754";
        currentElement.lastChild.style.opacity = "0.75";
        currentElement.lastChild.style.animation = "blink .95s infinite";
        let prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
            let prevElement = document.getElementById(prevIndex);
            prevElement.lastChild.style.opacity = "0";
            prevElement.lastChild.style.animation = "none";
        }
        let nextIndex = currentIndex + 1;
        if (nextIndex < paragraphs[story].length) {
            let nextElement = document.getElementById(nextIndex);
            nextElement.lastChild.style.opacity = "0";
            nextElement.lastChild.style.animation = "none";
        }
    }
}


document.getElementById("reload")?document.getElementById("reload").addEventListener("click", showPara):""
localStorage.getItem("name")?"":setTimeout(() => {
    document.querySelector(".over").style.visibility = "visible"
    document.querySelector(".over").style.opacity = 1
    document.querySelector(".user").style.transform = "translate(-50%,-50%) scale(1)"
}, 1000);
document.getElementById("Uname").addEventListener("change",()=>{
    if(document.getElementById("Uname").value != ""){
        localStorage.setItem("name",document.getElementById("Uname").value)
        document.getElementById("nameP").innerHTML = localStorage.getItem("name")
        document.querySelector(".over").style.visibility = "hidden"
        document.querySelector(".over").style.opacity = 0
        document.querySelector(".user").style.transform = "translate(-50%,-50%) scale(0)"
    }
})