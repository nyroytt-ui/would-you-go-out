const question = document.getElementById("question"); 
const buttons = document.getElementById("buttons"); 
const gifArea = document.getElementById("gifArea"); 
const dateArea = document.getElementById("dateArea"); 
 
 
// ==========================================
// NO CONFIRMATION MESSAGES
// ==========================================
 
const confirmationQuestions = [ 
    "Are you sure? 🥺", 
    "Are you REALLY sure? 😭", 
    "Wait... you actually mean no? 🥹", 
    "You don't wanna go out with me? 🥺", 
    "Are you 100% sure? 😭", 
    "Really really sure? 🥹", 
    "You thought about it? 👀", 
    "And still said no? 😭", 
    "Are you positive? 🥺", 
    "Like... actually positive? 😭", 
    "You really don't want to? 🥹", 
    "Are you sure that's your answer? 👀", 
    "You don't wanna reconsider? 🥺", 
    "Not even a little? 😭", 
    "You're really saying no? 🥹", 
    "Are you completely sure? 😭", 
    "You sure you wanna choose no? 👀", 
    "Maybe think about it again? 🥺", 
    "Still sure? 😭", 
    "You really mean it? 🥹", 
    "Are you absolutely sure? 👀", 
    "No regrets? 😭", 
    "You're sure about that? 🥺", 
    "Really? 🥹", 
    "You don't wanna change your mind? 😭", 
    "Are you certain? 👀", 
    "Still no? 🥺", 
    "You really thought about it? 😭", 
    "And your answer is still no? 🥹", 
    "Are you SURE sure? 👀", 
    "You don't wanna say yes? 🥺", 
    "Not even maybe? 😭", 
    "You're actually sure? 🥹", 
    "One more thought? 👀", 
    "Still saying no? 😭", 
    "You really want to say no? 🥺", 
    "Are you completely certain? 🥹", 
    "You don't wanna reconsider? 😭", 
    "Still your final answer? 👀", 
    "Are you REALLY REALLY sure? 🥺", 
    "You sure you won't regret it? 😭", 
    "You're sticking with no? 🥹", 
    "Really though? 👀", 
    "Are you positive this time? 🥺", 
    "Still no...? 😭", 
    "You don't want to give it a chance? 🥹", 
    "Are you absolutely certain? 👀", 
    "You really mean that? 😭", 
    "Okay... still sure? 🥺", 
    "Final answer? 🥹", 
    "Actually final answer? 😭", 
    "Are you SUREEEEE? 👀", 
    "Still no? 🥺", 
    "You really don't want to? 😭", 
    "Completely sure? 🥹", 
    "No changing your mind? 👀", 
    "You're certain? 🥺", 
    "Really certain? 😭", 
    "Still your answer? 🥹", 
    "Are you 1000% sure? 👀", 
    "You REALLY mean no? 🥺", 
    "Still completely sure? 😭", 
    "One last reconsideration? 🥹", 
    "Okay... are you REALLY sure? 👀" 
]; 
 
 
// Current confirmation question 
let confirmationIndex = 0; 
 
 
// ==========================================
// FRONT PAGE
// ==========================================
 
function showFrontPage() { 
 
    confirmationIndex = 0; 
 
    question.textContent = 
        "Would you go out with me? 💗"; 
 
    // NO GIF ON FRONT PAGE
    gifArea.innerHTML = ""; 
 
    dateArea.innerHTML = ""; 
 
    buttons.innerHTML = ` 
        <button id="yesBtn">YES 💕</button> 
        <button id="noBtn">NO 😭</button> 
    `; 
 
    setupFrontButtons(); 
} 
 
 
// ==========================================
// FRONT PAGE BUTTONS
// ==========================================
 
function setupFrontButtons() { 
 
    const yesBtn = 
        document.getElementById("yesBtn"); 
 
    const noBtn = 
        document.getElementById("noBtn"); 
 
 
    // YES = DIRECTLY TO HAPPY/DATE PAGE
    yesBtn.addEventListener("click", function () { 
 
        showDatePage(); 
 
    }); 
 
 
    // If NO is actually caught
    noBtn.addEventListener("click", function () { 
 
        confirmationIndex = 0; 
 
        showConfirmationPage(); 
 
    }); 
 
 
    // NO BUTTON DODGE
    noBtn.addEventListener("mouseenter", function () { 
 
        moveNoButton(noBtn); 
 
    }); 
 
} 
 
 
// ==========================================
// CONFIRMATION PAGE
// ==========================================
 
function showConfirmationPage() { 
 
    question.textContent = 
        confirmationQuestions[confirmationIndex]; 
 
 
    // GIF 1-14 = QUESTIONS 1-14
    // QUESTIONS 15+ = EMOJIS
 
    if (confirmationIndex < 14) {

        gifArea.innerHTML = `
            <img src="gifs/sad${confirmationIndex + 1}.gif" alt="sad reaction">
        `;

    } else {

        gifArea.innerHTML = `
            <div class="cute-gif-placeholder">
                🥺😭🥹
            </div>
        `;

    }
 
 
    buttons.innerHTML = ` 
        <button id="yesBtn">YES 💗</button> 
        <button id="noBtn">NO 😭</button> 
    `; 
 
 
    dateArea.innerHTML = ""; 
 
 
    const yesBtn = 
        document.getElementById("yesBtn"); 
 
    const noBtn = 
        document.getElementById("noBtn"); 
 
 
    // YES = NEXT CONFIRMATION
    yesBtn.addEventListener("click", function () { 
 
        confirmationIndex++; 
 
 
        // Loop back through the messages
        if ( 
            confirmationIndex >= 
            confirmationQuestions.length 
        ) { 
 
            confirmationIndex = 0; 
 
        } 
 
 
        showConfirmationPage(); 
 
    }); 
 
 
    // NO = BACK TO FRONT PAGE
    noBtn.addEventListener("click", function () { 
 
        showFrontPage(); 
 
    }); 
 
} 
 
 
// ==========================================
// FASTER + SMOOTHER NO BUTTON
// ==========================================
 
function moveNoButton(button) { 
 
    const rect = 
        button.getBoundingClientRect(); 
 
 
    const buttonWidth = 
        button.offsetWidth; 
 
    const buttonHeight = 
        button.offsetHeight; 
 
 
    // Movement distance
    const distance = 125; 
 
 
    // Random direction
    const angle = 
        Math.random() * Math.PI * 2; 
 
 
    let newLeft = 
        rect.left + 
        Math.cos(angle) * distance; 
 
 
    let newTop = 
        rect.top + 
        Math.sin(angle) * distance; 
 
 
    // Keep inside the screen
    newLeft = Math.max( 
        15, 
        Math.min( 
            newLeft, 
            window.innerWidth - 
            buttonWidth - 
            15 
        ) 
    ); 
 
 
    newTop = Math.max( 
        15, 
        Math.min( 
            newTop, 
            window.innerHeight - 
            buttonHeight - 
            15 
        ) 
    ); 
 
 
    // Move quickly but smoothly
    button.style.transition = 
        "left 0.18s ease-out, top 0.18s ease-out"; 
 
 
    button.style.position = "fixed"; 
 
 
    button.style.left = 
        newLeft + "px"; 
 
 
    button.style.top = 
        newTop + "px"; 
 
} 
 
 
// ==========================================
// HAPPY / DATE PAGE
// ==========================================
 
function showDatePage() { 
 
    // NO YAYYYY MESSAGE HERE
    question.textContent = 
        "Pick a date and time 💕"; 
 
 
    // DANCING CAT GIF
    gifArea.innerHTML = `
        <img src="gifs/yes.webp" alt="happy dancing cat">
    `; 
 
 
    buttons.innerHTML = ""; 
 
 
    dateArea.innerHTML = ` 
        <p class="date-message"> 
            Choose when 💗 
        </p> 
 
        <label for="datePicker"> 
            📅 Date 
        </label> 
 
        <input 
            type="date" 
            id="datePicker" 
        > 
 
        <label for="timePicker"> 
            ⏰ Time 
        </label> 
 
        <input 
            type="time" 
            id="timePicker" 
        > 
 
        <br> 
 
        <button id="submitBtn"> 
            Submit 💗 
        </button> 
    `; 
 
 
    const submitBtn = 
        document.getElementById("submitBtn"); 
 
 
    submitBtn.addEventListener("click", function () { 
 
        const date = 
            document.getElementById("datePicker").value; 
 
        const time = 
            document.getElementById("timePicker").value; 
 
 
        if (date === "" || time === "") { 
 
            alert( 
                "Pick both a date AND a time firsttt 😭" 
            ); 
 
            return; 
 
        } 
 
 
        question.textContent = 
            "It's a date! 🥳💗"; 
 
 
        // DANCING CAT GIF AFTER SUBMIT
        gifArea.innerHTML = `
            <img src="gifs/yes.webp" alt="happy dancing cat">
        `; 
 
 
        dateArea.innerHTML = ` 
            <p class="chosen-date"> 
                📅 ${date} 
 
                <br><br> 
 
                ⏰ ${time} 
            </p> 
 
            <p> 
                Date confirmed 💗 
            </p> 
 
        `; 
 
    }); 
 
} 
 
 
// ==========================================
// START WEBSITE
// ==========================================
 
showFrontPage();