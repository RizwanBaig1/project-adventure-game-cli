import inquirer from "inquirer";
//game variable
let enemies = ["Skeliton", "Zombie", "Warrior", "Assassin"];
let maxEnemyHealth = 75;
let enemyAttackDamageToHero = 25;
// Player variable 
let heroHealth = 100;
let attackDamageToenemy = 50;
let numHealthportion = 3;
let healthPortionHealAmount = 30;
let healthPortionDropChance = 50;
// while loop condition
let gameRunning = true;
console.log("welcome TO Deathzone");
Game: while (gameRunning) {
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1);
    let enemyIndex = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemyIndex];
    console.log(` # ${enemy} has appeared #\n`);
    while (enemyHealth > 0) {
        console.log(` your Health: ${heroHealth}`); //hero ki health k lea
        console.log(`${enemy} Health: ${enemyHealth}`); //enemy ke health k lea
        //use inquierer for user in put
        let options = await inquirer.prompt({
            name: "ans",
            type: "list",
            message: "what would you like to do?",
            choices: ['1. Attack', "2. Take Health portion", "3. Run"]
        });
        if (options.ans === "1. Attack") {
            let damageToEnemy = Math.floor(Math.random() * attackDamageToenemy + 1); //iss me 1-75 koi b random number genrate ho ga
            let damageToHero = Math.floor(Math.random() * enemyAttackDamageToHero + 1);
            enemyHealth -= damageToEnemy;
            heroHealth -= damageToHero;
            console.log(`you strike the,${enemy} for ${damageToEnemy}`); //jo enemy yahn aay ga us ka yahn name aay ga aur number me likha aay ga us ko kitna damage kia he
            console.log(`${enemy} strike you for,${damageToHero} damage.`); //enemy ne hero ko kitny number damege kia he
            //agr hero ke health zero ho jay 
            if (heroHealth < 1) {
                console.log("you have taken too much damage.you are too weak to continue.");
                break; //yahn pr game stop ho jana chaye iss lea whileloop(battle waly) ko end krny k lea break ko use krean ge
            }
        }
        //ab 2nd option ka code likhen gy
        else if (options.ans === "2. Take Health portion") {
            if (numHealthportion > 0) {
                heroHealth += healthPortionHealAmount;
                numHealthportion--;
                console.log(`you use health portion for ${healthPortionHealAmount}`); //ye message ye btay ga ka aap ne apny healthportionamount me 30 ka izafa kia yani aik numberhealth portion use kr lea
                console.log(`you now have ${heroHealth} health`); //ye message currently hero ke health btay ga
                console.log(`you have ${numHealthportion} health portion left`); //ye message hero k remaning numberHealthportion ka baty ga aur jb ye zero ho jayn ge tou ye if candition nahe chly ge
            }
            else {
                console.log(`you have no health portion left.Defeat enemy for a chance  to get health portion`); //iss message ka mtlab ye he k ap k pass health portion nahe hen agr aap enemy ko defeat kren ge to aap k pass health portion aany k chance hen
            }
        }
        //ab 3rd option k lea code likhen gy
        else if (options.ans === "3. Run") {
            console.log(`you run awy from ${enemy}`); //aap kon se enemy se bach k bhagy hen
            continue Game; //q k aap enemy se bach k bhagy hen tou hmen game ko dobara start krna pry ga jis k lea jo main while llop he jis ko Game ka name diya he us ko contiue krana pry ga
        }
    }
    if (heroHealth < 1) {
        console.log(`you are out from battle.you are too weak.`); //agr hero ke health zero ho jay ge tou main while loop se bahr nikal aayn ge aur game khtm ho jay ga
        break;
    }
    //hm ne hero ke health k lea tou ooper bna lea ab apny enemy k lea b bna na he k jb hm enemy ko kill kr dyn tou hmen aik message aay
    console.log(`${enemy} was defeated`); //aap ne iss enemy ko mar dia he
    console.log(`you have ${heroHealth} health.`); // yahn pr hero ke health (number me) show ho ge
    //ab hmary game ka last portion he jiss me hm ne ye kaha tha k agr hmary hero ke health 50 se km rah jay aur ye enemy ko defeat kr jay tou ye aik healh portion gift kr k jay ga
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    if (randomNumber < healthPortionDropChance) {
        numHealthportion++; //jb aap enemy ko kill kr den ge aur app ke health 50 se km he tou jo k random number se genrate ho ge tou app ko aik number of healt portion mil jay ga agr random number 50 se km nahe hova tou if candition nahe chly ge aur aap ko healthportion nahe mily ga
        console.log(`enemy give you health portion`); //hr enemy aap ko health portion dy k nahe jay ga sirf wo dyn ge jb random number 50 se km genrate ho ga
        console.log(`your health is ${heroHealth}`); // hero ke health show kray ga
        console.log(`your health portion is ${numHealthportion}`); //number of healh portion b nzr aay ga
    }
    // user se maloom kren ge wo exit ya continue kia chata he
    let userOption = await inquirer.prompt({
        name: "ans",
        type: "list",
        message: "what would you like to do now",
        choices: ["1. Continue", "2. Exit"]
    });
    choices: ["1. Continue", "2. Exit"];
    if (userOption.ans === "1. Continue") {
        console.log("you are continue on your advanture");
    }
    else {
        console.log("you successfuly Exit from Deadzonzone");
        break;
    }
    console.log("Thank you for playing");
}
