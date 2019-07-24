// Take FLIGHT young Button

// the parmater inside the flightHandlerFunction does nothing is it nessacary?

const flightHandlerFunction = (fly) => {
    document.querySelector("#flight").classList.toggle("disabled")
    document.querySelector("#flight").classList.toggle("enabled")
    console.log(flightHandlerFunction);
}
// activates the "activate flight" button
document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction)

// end of FLIGHT //

// The Charles MINDREADING 

// when using querySelector be sure to put "#id" or ".class"
const mindReadingFunction = () => {
    document.querySelector("#mindreading")
        .classList.toggle("disabled")
    document.querySelector("#mindreading")
        .classList.toggle("enabled")
    // clg to see what happens
    console.log(mindReadingFunction);
}
// activates the "activate-mindreading" button
document.querySelector("#activate-mindreading").addEventListener("click", mindReadingFunction)
//  juggernaut ENDED MINDREADING


// SuperMan X-RAY

const xRayFunction = () => {
    document.querySelector("#xray")
        .classList.toggle("disabled")
    document.querySelector("#xray")
        .classList.toggle("enabled")
    console.log(xRayFunction);
}

// activates the "#activate-xray" button
document.querySelector("#activate-xray").addEventListener("click", xRayFunction)

// End Lois pepped X-RAY

// ACTIVATE ALL powers
const activateAll = () => {
    const powerUp = document.querySelectorAll(".power")
    powerUp.forEach(power => {
        power.classList.toggle("enabled")
    });

    console.log(activateAll);
}

// activates the "#activate-all" button
document.querySelector("#activate-all").addEventListener("click", activateAll)

// END ACTIVATE ALL

// Leech DISABLED ALL powers
const disableAll = () => {
    const powerDown = document.querySelectorAll(".power")
    powerDown.forEach(power => {
        power.classList.remove("enabled")
    });

    console.log(disableAll);
}
// activates the "#deactivate-all" button
document.querySelector("#deactivate-all").addEventListener("click", disableAll)
