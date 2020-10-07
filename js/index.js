console.log(`I am Index.js`);

function cardTextToCenter(class_name) {
    let classList = document.querySelector(`.${class_name}`).classList;
    if (classList.contains("text-center")) {
        classList.remove("text-center");
    } else {
        classList.add("text-center");
    }
}

/*** Function Name:  createAccordCard
 *   Args:
 *   collapse_name
 *   progress_percent
 *   skill_name
 *   skill_desc
 */

function createAccordCard(collapse_name, progress_percent, skill_name, skill_desc) {

    accordCard = `
    <div class="card">
        <div class="card-header p-0" id="headingOne">
            <h2 class="mb-0">
                <button class="btn btn-light btn-block text-left p-2 rounded-0" 
                    type="button" data-toggle="collapse" data-target="#${collapse_name}" aria-expanded="true"
                    aria-controls="${collapse_name}">
                    <h4>${skill_name}</h4>
                </button>
                <div class="progress" style="height: 1.9rem">
                    <div class="progress-bar bg-dark" role="progressbar" style="width: ${progress_percent}%;">
                        <h5>${progress_percent}%</h5>
                    </div>
                </div>
            </h2>
        </div>
    
        <div id="${collapse_name}" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
                <p>${skill_desc}</p>
            </div>
        </div>
    </div>
    `
    return accordCard;

}

function skill_filler(skill_json) {
    document.querySelector(".skill-accord").innerHTML = "";
    // skill_json = skill_json.sort(function (a, b) { return b.skill_level - a.skill_level })
    for (one_skill_id in skill_json) {
        document.querySelector(".skill-accord").innerHTML += createAccordCard(
            "accord_collapse_" + one_skill_id,
            skill_json[one_skill_id].skill_level,
            skill_json[one_skill_id].skill_name,
            skill_json[one_skill_id].skill_desc
        );
    }
}

let skill_json = [
    {
        "skill_name": "Linux",
        "skill_desc": "Exploring Linux, have been Working on Installing, Configuring, TroubleShooting Linux Based Application. TroubleShooting SafeSquid-Secure Web Gateway",
        "skill_level": "60"
    },
    {
        "skill_name": "Secure Web Gateway",
        "skill_desc": "Have been trying to Explore What they do & How they do it. How Secure Web Gateway are Better Then NGFW (Nxt Gen Firewall)",
        "skill_level": "75"
    },
    {
        "skill_name": "Scripting",
        "skill_desc": "I 💗 Scripting. I Write Small Problem Solving Scripts in Bash & Python",
        "skill_level": "60"
    },
    {
        "skill_name": "JavaScript",
        "skill_desc": "Previously use to use jquery just to get the things done, but how figured out true power of Vanilla JS (🔥)",
        "skill_level": "50"
    },
    {
        "skill_name": "DLP",
        "skill_desc": "Well As They Say: 'AntiVirus Protects from Outer Threats, Whereas DLP Protects from Internal Threats'",
        "skill_level": "70"
    },
    {
        "skill_name": "Fuzzing",
        "skill_desc": "I Try Checking what happens when Applciations are provide with Unwanted Garbage Data. How Do They Handle it?",
        "skill_level": "60"
    },
    {
        "skill_name": "Security Testing",
        "skill_desc": "I Love Learning Conepts About Security. I love exploring how any normal dev function without notice becomes are severe Security Risk",
        "skill_level": "40"
    },
    {
        "skill_name": "Web Dev",
        "skill_desc": "I am Bad with CSS. But Can Understand and Manipulate Web Dev Projects. Do Understand Web Technologies",
        "skill_level": "40"
    },
    {
        "skill_name": "BackEnd Engineering",
        "skill_desc": "I do Understand How System Architecture is done using LB, WAF, ReverseProxy, Microservices etc. Love Exploring Them",
        "skill_level": "40"
    },
    {
        "skill_name": "Proxy",
        "skill_desc": "Forward, Reverse, Transparent. Have Been Exploring Them From Quite a Time Now",
        "skill_level": "40"
    },
    {
        "skill_name": "Java",
        "skill_desc": "I Know Java, have been exploring it from quite a time now",
        "skill_level": "50"
    },
    {
        "skill_name": "Python",
        "skill_desc": "...",
        "skill_level": "55"
    },
    {
        "skill_name": "NodeJS",
        "skill_desc": "#ExpressJS Included",
        "skill_level": "45"
    },
    {
        "skill_name": "Networking",
        "skill_desc": "...",
        "skill_level": "45"
    },
    {
        "skill_name": "Content-Filtering",
        "skill_desc": "...",
        "skill_level": "55"
    },
    {
        "skill_name": "Troubleshooting",
        "skill_desc": "...",
        "skill_level": "60"
    }
];
let sorted = false;

/** ^_^ Just Testing */
document.querySelector(".short-info-switcher").addEventListener('click', () => {
    cardTextToCenter("short-info > .card");
})

skill_filler(skill_json);

/*** Still In Progress */
document.querySelector(".sort-skills").addEventListener('click', () => {
    if (sorted) {
        skill_filler(skill_json);
    } else {
        let skill_json2 = skill_json.sort(function (a, b) { return b.skill_level - a.skill_level })
        console.log("Skill:", skill_json, "Skill2: ", skill_json2)
        skill_filler(skill_json2);
        sorted = true;
    }
})