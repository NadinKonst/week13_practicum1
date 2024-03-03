//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.

const currentDate = new Date();
console.log(currentDate);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.

const currentYear = currentDate.getFullYear();
console.log(currentYear);

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.

const currentMonth = currentDate.getMonth();
console.log(currentMonth);

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
const currentDay = currentDate.getDay();
console.log(currentDay);

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
const birthday = new Date("2024-6-23");
console.log(birthday);

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.

const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 41);
console.log(futureDate);

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate

const dateDiff = futureDate - currentDate;
console.log(Math.floor(dateDiff / (1000 * 60 * 60 * 24)));

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.

const pastDate = new Date();
pastDate.setDate(pastDate.getDate() - 5);
console.log(pastDate);

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
const dayDiff = currentDate - pastDate;
console.log(Math.floor(dayDiff / (1000 * 60 * 60 * 24)));

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
const nextWeek = new Date();
nextWeek.setDate(nextWeek.getDate() + 7);
console.log(nextWeek);

//Задание 11
// Выведите в консоль день недели для nextWeek

console.log(nextWeek.getDay(1));

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
const futureYear = currentDate.getFullYear() + 5;
console.log(futureYear);

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.

const futureDateInFutureYear = new Date(futureYear, 5, 23);
console.log(futureDateInFutureYear);

//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
const yearDiff = futureYear - currentDate.getFullYear();
console.log(yearDiff);

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = "2023-06-15T08:30:00.000Z";
const newDate = new Date(Date.parse("2023-06-15T08:30:00.000Z"));
console.log(newDate);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.

console.log(Date.parse("2023-06-15T08:30:00.000Z"));

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const date = "2023/06/15";
const wrongDate = new Date(Date.parse(date));
if (wrongDate == NaN) {
  console.log("Неправильный формат даты");
} else "Правильный формат даты";

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
if (number > 0) {
  console.log("число " + number + " положительное");
} else {
  console.log("число " + number + " отрицательное");
}
// или используя тернарный оператор
// number > 0 ? console.log(true) : console.log(false);

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.

if (number % 2 == 0) {
  console.log("переменная " + number + " является четным числом");
} else {
  console.log("переменная " + number + " является нечетным числом");
}
// или используя тернарный оператор
// number % 2 == 0 ? console.log(true) : console.log(false);

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
if (number % 3 === 0) {
  console.log("переменная " + number + " кратна 3");
} else {
  console.log("переменная " + number + " не кратна");
}

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
if (number.length === 1) {
  console.log("число однозначное");
} else {
  console.log("число не однозначное");
}
//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if (number.length === 2) {
  console.log("число двузначное");
} else {
  console.log("число не двузначное");
}
//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if (number > 0 || number === 0) {
  console.log("положительное число");
} else {
  console.log("является нулем");
}

//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if (number % 5 === 0 || number % 7 === 0) {
  console.log("переменная " + number + " кратна 5");
} else {
  console.log("переменная " + number + " кратна 7");
}

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if (number < 0) {
  console.log("отрицательное число");
} else if (number === 0) {
  console.log("является нулем");
} else {
  console.log("не отрицательное и не ноль");
}

//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (number.length == 3) {
  console.log("число трехзначное");
} else if (number === 0) {
  console.log("число положительное");
} else {
  console.log("трехзначное положительное");
}

//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).

let weekDayNumber = new Date().getDay();

switch (weekDayNumber) {
  case 1:
    day = "понедельник";
    break;
  case 2:
    day = "вторник";
    break;
  case 3:
    day = "среда";
    break;
  case 4:
    day = "четверг";
    break;
  case 5:
    day = "пятница";
    break;
  case 6:
    day = "суббота";
    break;
  case 7:
    day = "воскресенье";
  default:
    day = "...";
}
console.log(day);

//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = "N";
let fullName;

switch (direction) {
  case "W":
    fullName = "запад";
    break;
  case "E":
    fullName = "восток";
    break;
  case "S":
    fullName = "юг";
    break;
  case "N":
    fullName = "север";
    break;
  default:
    fullName = "...";
}
console.log(fullName);
