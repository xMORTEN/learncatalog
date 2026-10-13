type Resource = {
    id: number;
    title: string;
    minutes: number;
};
type Resources = Resource[];


const items: Resources = [
    {id: 1, minutes: 10, title: "Переробка для завдання"},
    {id: 2, minutes: 20, title: "two"},
    {id: 3, minutes: 30, title: "three"},
    {id: 4, minutes: 40, title: "react"}
]
function selectResources(
items: Resources, limit: number
): Resources {
return items.filter(
(item) => item.minutes >= limit
);
}

const result20 = selectResources(items, 20);
console.log("Межа 20 хвилин:");
console.log("Відібрані об’єкти:", result20);
console.log("Кількість результатів:", result20.length);

const result40 = selectResources(items, 40);

const result0 = selectResources(items, 0);
console.log("Межа 0 хвилин:");
console.log("Відібрані об’єкти:", result0);
console.log("Кількість результатів:", result0.length);

