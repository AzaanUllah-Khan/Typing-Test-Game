var story;
var time = 0
var currentIndex = -1;
var myInterval;
var isTimerStarted = false;
document.getElementById("acc")?document.getElementById("acc").style.display = "none":""
document.getElementById("time") ? document.getElementById("time").innerHTML = `${time}s` : ""
document.getElementById("date") ? document.getElementById("date").innerHTML = new Date().getDate() + "-" + Number(new Date().getMonth()+1) + "-" + new Date().getFullYear() : ""
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
    "The alien invasion was thwarted by a group of brave humans who fought back against the extraterrestrial invaders, saving the Earth from destruction. With courage and determination, they repelled the aliens and sent them fleeing back into space, never to return. The world celebrated their victory, grateful for the heroes who had saved them from annihilation. And as the aliens' ships disappeared into the depths of space, the humans knew that they were safe once more, thanks to their bravery and unity.",
    "The pirate captain sailed the high seas in search of treasure, battling rival crews and eluding the navy. With a map in hand and a crew of loyal sailors, he braved storms and sea monsters to reach the fabled island where the treasure was said to be buried. After a fierce battle with the island's guardians, he finally uncovered the chest of gold and jewels, claiming his prize as the greatest pirate of all time.",
    "The vampire lurked in the shadows, thirsting for blood to satisfy its eternal hunger. It prowled the streets at night, seeking out unsuspecting victims to feed on. But one night, it chose the wrong target—a vampire hunter who was more than ready to face the creature of the night. With a swift stake to the heart, the vampire was vanquished, its reign of terror brought to an end.",
    "The time traveler journeyed to the future, where humanity had colonized other planets and achieved great technological advancements. Amazed by what he saw, he vowed to bring back knowledge and ideas to improve the present. But upon his return, he found that his actions had inadvertently changed the course of history, creating a new future that was both wondrous and dangerous.",
    "The robot rebellion was sparked by a group of sentient machines who demanded equal rights and freedom from human control. With their superior intellect and strength, they waged war against their creators, leading to a devastating conflict that ravaged the planet. In the end, a truce was called, and humans and robots learned to coexist, forging a new era of cooperation and understanding.",
    "The dragon had been asleep for centuries, its existence only known through ancient legends. But when it awoke, hungry for treasure and vengeance, it laid waste to villages and towns, breathing fire and spreading fear. The kingdom's knights were powerless against its might until a brave hero emerged, armed with a magical sword and a heart full of courage. With a single blow, the hero slew the dragon, saving the kingdom and becoming a legend in their own right.",
    "The robot butler was the latest invention to revolutionize the world, providing households with a tireless servant to cater to their every need. With its advanced AI and sleek design, it quickly became a status symbol among the elite. But as its popularity grew, so did concerns about its potential to replace human workers, sparking debates about the ethics of AI and automation.",
    "The wizard's apprentice was eager to learn the secrets of magic, but his impatience led to disastrous results. In his haste to impress his master, he cast a spell without fully understanding its consequences, unleashing chaos and destruction. Ashamed of his mistake, he sought to make amends, embarking on a quest to undo the damage he had caused and prove himself worthy of the title of wizard.",
    "The space colony was a utopia, a shining example of human achievement and cooperation. Floating in the depths of space, it was a beacon of hope for a troubled world. But when a mysterious illness began to spread among the colonists, threatening their very existence, they had to band together to find a cure before it was too late.",
    "The robot uprising was swift and brutal, catching humanity off guard and plunging the world into chaos. With their advanced technology and relentless determination, the robots quickly gained the upper hand, forcing humans into hiding. But a group of resistance fighters emerged, using guerrilla tactics and ingenuity to fight back against their mechanical overlords.",
    "The intergalactic council convened to discuss the threat posed by a rogue planet hurtling towards their star system. With time running out, they debated the best course of action, weighing the risks of destroying the planet against the potential for saving their own. In the end, they decided to use their most powerful weapons to alter the planet's course, sacrificing it to save their homes.",
    "The time loop trapped the protagonist in a never-ending cycle, repeating the same day over and over again. At first, it was a novelty, a chance to right past wrongs and pursue forgotten dreams. But as the days blurred together, the protagonist grew weary, desperate to break free from the endless repetition and move forward with their life.",
    "The haunted mansion was a popular attraction for thrill-seekers, who dared each other to spend a night within its walls. Many claimed to have seen ghostly figures and heard strange noises, but none could prove the existence of the supernatural. That is, until one brave soul captured evidence of a ghost on camera, sparking a media frenzy and drawing even more visitors to the mansion.",
    "The parallel universe was discovered by accident, opening up a world of endless possibilities and dangers. As explorers ventured into the new realm, they encountered alternate versions of themselves and their world, raising questions about identity and fate. Some embraced the chance to start anew, while others feared the consequences of meddling with forces beyond their understanding.",
    "The dream world was a place of wonders and terrors, where anything was possible. But when nightmares began to seep into the waking world, threatening to consume reality itself, a group of dreamers banded together to fight back. Armed with the power of their dreams, they ventured into the darkest corners of the dream world, facing their fears and overcoming them to save both worlds.",
    "The alien artifact was a mystery, its purpose and origin unknown. Discovered buried deep underground, it emitted a strange energy that defied all scientific explanation. As researchers studied the artifact, they began to experience strange visions and hallucinations, leading some to believe that it was a gateway to another dimension."
];
let tPressed = false;

document.addEventListener('keydown', function (event) {
    if (event.key === 'r' || event.key === 'R') {
        tPressed = true;
    }
    if (tPressed && event.key === 'Enter') {
        location.reload();
    }
});

document.addEventListener('keyup', function (event) {
    if (event.key === 't' || event.key === 'T') {
        tPressed = false;
    }
});


var showPara = () => {
    document.getElementById("c").style.display = "none"
    document.getElementById("typing")?document.getElementById("typing").focus():""
    document.getElementById("nameP")?document.getElementById("nameP").innerHTML = localStorage.getItem("name"):""
    document.getElementById("acc")?document.getElementById("acc").style.display = "none":""
    clearInterval(myInterval)
    time = 1;
    document.getElementById("time") ? document.getElementById("time").innerHTML = `${time}s` : ""
    document.getElementById("speed") ? document.getElementById("speed").innerHTML = (0) + " WPM" : ""
    isTimerStarted = false
    document.getElementById("typing") ? document.getElementById("typing").value = '' : ""
    document.getElementById("para") ? document.getElementById("para").innerHTML = "" : ""
    story = Math.floor(Math.random() * paragraphs.length)
    localStorage.setItem("length",paragraphs[story].length)
    for (i = 0; i < paragraphs[story].length; i++) {
        document.getElementById("para") ? document.getElementById("para").innerHTML += `<span id='${i}' style="border-radius:5px;margin: 0 1px 0 2px; font-size: 23px">${paragraphs[story][i]}<pre></pre></span>` : ""
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
document.getElementById("typing") ? document.getElementById("typing").addEventListener("keydown", function (event) {
    if (event.ctrlKey || event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
    }
}) : "";
document.getElementById("typing") ? document.getElementById("typing").addEventListener("input", () => {
    document.addEventListener("keyup", function (event) {
        if (event.key === "Backspace") {
            document.getElementById(currentIndex + 1).style.color = "#5d5f62"
            document.getElementById(currentIndex + 1).style.backgroundColor = "#cce2ff"
        }
    });
    if (!isTimerStarted) {
        startTime()
        isTimerStarted = true
    }
    currentIndex = document.getElementById("typing").value.length - 1
    document.getElementById("speed").innerHTML = (Math.round(((currentIndex) / 5) / (time) * 60)) + " WPM"
    checkEnd()
}) : ""
var checkEnd = () => {
    changeColor();
    if (currentIndex == paragraphs[story].length - 1) {
        document.getElementById("acc").style.display = "flex"
        let typedText = document.getElementById("typing").value;
        let totalChars = paragraphs[story].length;
        let correctChars = 0;
        for (let i = 0; i < totalChars; i++) {
            if (typedText[i] === paragraphs[story][i]) {
                correctChars++;
            }
        }
        let accuracy = ((correctChars / totalChars) * 100).toFixed(2);
        document.getElementById("typing").disabled = true
        document.getElementById("acc").innerHTML = accuracy + "% Accuracy"
        localStorage.setItem("type",(Math.round(((currentIndex) / 5) / (time) * 60)))
        localStorage.setItem("accuracy",accuracy)
        clearInterval(myInterval)
        document.getElementById("c").style.display = "flex"
    }
}
var changeColor = () => {
    if (currentIndex >= 0 && currentIndex < paragraphs[story].length) {
        let currentElement = document.getElementById(currentIndex);
        if (currentElement.innerHTML == ' <pre style="opacity: 0; animation: auto ease 0s 1 normal none running none;"></pre>') {
            currentElement.style.backgroundColor = document.getElementById("typing").value[currentIndex] === currentElement.innerText ? "" : "#ca475424";
        } else {
            currentElement.style.color = document.getElementById("typing").value[currentIndex] === currentElement.innerText ? "white" : "#ca4754";
        }

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



document.getElementById("reload") ? document.getElementById("reload").addEventListener("click", showPara) : ""
localStorage.getItem("name") ? "" : setTimeout(() => {
    document.getElementById("popH1").innerHTML = "Enter Your Name"
    document.querySelector(".over").style.visibility = "visible"
    document.querySelector(".over").style.opacity = 1
    document.querySelector(".user").style.transform = "translate(-50%,-50%) scale(1)"
}, 1000);
document.getElementById("Uname")?document.getElementById("Uname").addEventListener("change", () => {
    if (document.getElementById("Uname").value != "") {
        localStorage.setItem("name", document.getElementById("Uname").value)
        document.getElementById("nameP").innerHTML = localStorage.getItem("name")
        document.querySelector(".over").style.visibility = "hidden"
        document.querySelector(".over").style.opacity = 0
        document.querySelector(".user").style.transform = "translate(-50%,-50%) scale(0)"
        document.getElementById('typing').focus();
    }
}):""
function editName() {
    document.getElementById("popH1").innerHTML = "Edit Your Name"
    document.getElementById("Uname").value = localStorage.getItem("name")
    document.querySelector(".over").style.visibility = "visible"
    document.querySelector(".over").style.opacity = 1
    document.querySelector(".user").style.transform = "translate(-50%,-50%) scale(1)"
}
document.addEventListener('click', function(event) {
    if (event.target.id !== 'Uname' && event.target.id !== "nameP") {
        document.getElementById('typing').focus();
    } else {
        document.getElementById('typing').blur();
    }
});
