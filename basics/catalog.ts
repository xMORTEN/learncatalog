type Resource = {
    id: number;
    title: string;
    minutes: number;
};

const items: Resource[] = [
    {id: 1, minutes: 10, title: "one"},
    {id: 2, minutes: 20, title: "two"},
    {id: 3, minutes: 30, title: "three"}
];

function selectResources(
items: Resource[], limit: number
): Resource[] {
return items.filter(
(item) => item.minutes <= limit
);
}

const result20 = selectResources(items, 20);
console.log("Межа 20 хвилин:");
console.log("Відібрані об’єкти:", result20);
console.log("Кількість результатів:", result20.length);

const result0 = selectResources(items, 0);
console.log("Межа 0 хвилин:");
console.log("Відібрані об’єкти:", result0);
console.log("Кількість результатів:", result0.length);