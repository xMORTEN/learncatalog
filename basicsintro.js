const title = "learn catalog";

let minutes = 20;

function label(minutes) {
    if (minutes <= 15) {
        return "Коротше 15 хвилин"
    }
    return "Довше 15 хвилин"
}

console.log (title, minutes);
console.log (label(15));
console.log (label(16));

const topic = "Git";
console.log(topic);

const age = [5, 8, 14, 17, 18, 19, 22, 36];с
const child = age.filter
((years) => years < 18
);
console.log (child);