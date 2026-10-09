// ===== Уровень A — Условные операторы =====

// Задание 46. Проверка возраста для регистрации
console.log("--- Задание 46 ---");
{
  function checkRegistration(age) {
    if (age >= 16) {
      return "Регистрация разрешена";
    } else {
      return "Регистрация недоступна";
    }
  }
  let age = 15;
  console.log(age + ": " + checkRegistration(age)); // Регистрация недоступна
  console.log(16 + ": " + checkRegistration(16));   // Регистрация разрешена
  console.log(20 + ": " + checkRegistration(20));   // Регистрация разрешена
}

// Задание 47. Определение скидки для студентов
console.log("--- Задание 47 ---");
{
  function priceWithDiscount(price, isStudent) {
    console.log("Первоначальная цена: " + price + " ₸");
    if (isStudent) {
      let discount = price * 10 / 100;
      let finalPrice = price - discount;
      console.log("Скидка студента 10%: " + discount + " ₸");
      console.log("Итоговая цена: " + finalPrice + " ₸");
    } else {
      console.log("Итоговая цена: " + price + " ₸ (скидки нет)");
    }
  }
  let price = 12000;
  priceWithDiscount(price, true);  // итого 10800 ₸
  priceWithDiscount(price, false); // итого 12000 ₸
}

// Задание 48. Проверка треугольника
console.log("--- Задание 48 ---");
{
  function triangleExists(a, b, c) {
    if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
      return "Треугольник существует";
    } else {
      return "Треугольник не существует";
    }
  }
  console.log("5, 7, 10: " + triangleExists(5, 7, 10)); // существует
  console.log("1, 2, 10: " + triangleExists(1, 2, 10)); // не существует
  console.log("0, 4, 5: " + triangleExists(0, 4, 5));   // не существует
}

// Задание 49. Определение категории пользователя
console.log("--- Задание 49 ---");
{
  function accessByRole(role) {
    let message;
    switch (role) {
      case "admin":
        message = "Полный доступ";
        break;
      case "teacher":
        message = "Доступ преподавателя";
        break;
      case "student":
        message = "Доступ студента";
        break;
      default:
        message = "Доступ запрещён";
    }
    return message;
  }
  let role = "teacher";
  console.log(role + ": " + accessByRole(role)); // Доступ преподавателя
  ["admin", "student", "guest"].forEach(function (r) {
    console.log(r + ": " + accessByRole(r));
  });
}

// Задание 50. Контроль заряда батареи
console.log("--- Задание 50 ---");
{
  function batteryStatus(battery) {
    if (battery < 0 || battery > 100) {
      return "Ошибка: заряд должен быть от 0 до 100";
    } else if (battery <= 15) {
      return "Срочно подключите зарядку";
    } else if (battery <= 30) {
      return "Низкий заряд";
    } else if (battery <= 80) {
      return "Нормальный заряд";
    } else {
      return "Высокий заряд";
    }
  }
  let battery = 25;
  console.log(battery + "%: " + batteryStatus(battery)); // Низкий заряд
  [10, 65, 95, 110].forEach(function (b) {
    console.log(b + "%: " + batteryStatus(b));
  });
}

// ===== Уровень B — Циклы и массивы =====

// Задание 51. Числа, кратные пяти
console.log("--- Задание 51 ---");
{
  let found = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      found.push(i);
    }
  }
  console.log("Числа, кратные 5: " + found.join(", "));
  console.log("Количество: " + found.length); // 20
}

// Задание 52. Факториал числа
console.log("--- Задание 52 ---");
{
  let n = 6;
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  console.log(n + "! = " + factorial); // 720
}

// Задание 53. Поиск отрицательных чисел
console.log("--- Задание 53 ---");
{
  let numbers = [12, -5, 8, -9, 15, -2, 0, 21];
  let negativeNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      negativeNumbers.push(numbers[i]);
    }
  }
  console.log("Отрицательные числа: " + negativeNumbers.join(", ")); // -5, -9, -2
  console.log("Количество: " + negativeNumbers.length);              // 3
}

// Задание 54. Поиск студента в списке
console.log("--- Задание 54 ---");
{
  let students = ["Алия", "Руслан", "Мадина", "Арман", "Данияр"];
  function findStudent(name) {
    return students.includes(name) ? "Студент найден" : "Студент не найден";
  }
  let searchName = "Мадина";
  console.log(searchName + ": " + findStudent(searchName)); // найден
  console.log("Айдос: " + findStudent("Айдос"));           // не найден
}

// Задание 55. Сортировка результатов тестирования
console.log("--- Задание 55 ---");
{
  let scores = [75, 92, 48, 85, 67, 100, 58];
  let ascending = scores.slice().sort((a, b) => a - b);
  console.log("По возрастанию: " + ascending.join(", ")); // 48, 58, 67, 75, 85, 92, 100
  console.log("Минимальный балл: " + ascending[0]);                      // 48
  console.log("Максимальный балл: " + ascending[ascending.length - 1]);  // 100
  let descending = scores.slice().sort((a, b) => b - a);
  console.log("По убыванию: " + descending.join(", "));   // 100, 92, 85, 75, 67, 58, 48
}

// ===== Уровень C — Функции и обработка данных =====

// Задание 56. Калькулятор площади
console.log("--- Задание 56 ---");
{
  function calculateArea(width, height) {
    return width * height;
  }
  console.log("5 x 8 = " + calculateArea(5, 8));   // 40
  console.log("3 x 4 = " + calculateArea(3, 4));   // 12
  console.log("10 x 2.5 = " + calculateArea(10, 2.5)); // 25
}

// Задание 57. Проверка палиндрома
console.log("--- Задание 57 ---");
{
  function isPalindrome(word) {
    let lower = word.toLowerCase();
    let reversed = lower.split("").reverse().join("");
    return lower === reversed;
  }
  ["level", "radar", "hello"].forEach(function (w) {
    console.log(w + (isPalindrome(w) ? " — палиндром" : " — не палиндром"));
  });
}

// Задание 58. Подсчёт слов в предложении
console.log("--- Задание 58 ---");
{
  function countWords(text) {
    let trimmed = text.trim();
    if (trimmed === "") {
      return 0;
    }
    return trimmed.split(/\s+/).length;
  }
  let text = "JavaScript is a popular programming language";
  console.log("Слов в тексте: " + countWords(text));       // 6
  console.log("Слов в пустой строке: " + countWords(""));  // 0
  console.log("Слов с пробелами по краям: " + countWords("   Hello   world  ")); // 2
}

// Задание 59. Генератор случайного пароля (учебный)
console.log("--- Задание 59 ---");
{
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  for (let i = 0; i < 8; i++) {
    let index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }
  console.log("Пароль: " + password);
}

// Задание 60. Конвертер валют
console.log("--- Задание 60 ---");
{
  function convertCurrency(amount, rate) {
    if (amount < 0 || rate <= 0) {
      return null;
    }
    return amount / rate;
  }
  let tenge = 50000;
  let rate = 500; // учебный курс
  let usd = convertCurrency(tenge, rate);
  console.log(tenge + " ₸ = " + usd.toFixed(2) + " USD"); // 100.00 USD
  console.log("Некорректные данные: " + convertCurrency(-100, 500)); // null
}

// ===== Уровень D — Мини-проекты с HTML и JavaScript =====
// (работают только в браузере)
if (typeof document !== "undefined") {

  // Задание 61. Интерактивный счётчик
  {
    let count = 0;
    let counterValue = document.getElementById("counterValue");
    function showCount() {
      counterValue.textContent = count;
    }
    document.getElementById("plusBtn").addEventListener("click", function () {
      count++;
      showCount();
    });
    document.getElementById("minusBtn").addEventListener("click", function () {
      count--;
      showCount();
    });
    document.getElementById("resetBtn").addEventListener("click", function () {
      count = 0;
      showCount();
    });
  }

  // Задание 62. Калькулятор индекса успеваемости
  {
    document.getElementById("calcBtn").addEventListener("click", function () {
      let result = document.getElementById("gradeResult");
      let ids = ["grade1", "grade2", "grade3"];
      let sum = 0;
      for (let i = 0; i < ids.length; i++) {
        let raw = document.getElementById(ids[i]).value;
        let value = Number(raw);
        if (raw === "" || isNaN(value) || value < 0 || value > 100) {
          result.textContent = "Ошибка: введите все три балла в диапазоне от 0 до 100";
          return;
        }
        sum += value;
      }
      let average = sum / ids.length;
      let level;
      if (average >= 90) {
        level = "Отличная успеваемость";
      } else if (average >= 70) {
        level = "Хорошая успеваемость";
      } else if (average >= 50) {
        level = "Удовлетворительная успеваемость";
      } else {
        level = "Неудовлетворительная успеваемость";
      }
      result.textContent = "Средний балл: " + average.toFixed(2) + ". " + level;
    });
  }

  // Задание 63. Список задач (To-Do List)
  {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    function addTask() {
      let text = taskInput.value.trim();
      if (text === "") {
        alert("Введите текст задачи");
        return;
      }
      let li = document.createElement("li");
      let span = document.createElement("span");
      span.textContent = text;
      span.style.cursor = "pointer";
      span.addEventListener("click", function () {
        span.classList.toggle("done");
      });
      let del = document.createElement("button");
      del.textContent = "Удалить";
      del.addEventListener("click", function () {
        li.remove();
      });
      li.appendChild(span);
      li.appendChild(del);
      taskList.appendChild(li);
      taskInput.value = "";
      taskInput.focus();
    }
    document.getElementById("addTaskBtn").addEventListener("click", addTask);
    taskInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") addTask();
    });
  }

  // Задание 64. Тестирование студентов
  {
    let questions = [
      {
        question: "Какое ключевое слово объявляет переменную, которую нельзя переприсвоить?",
        options: ["var", "let", "const", "int"],
        correct: 2
      },
      {
        question: "Какой оператор сравнивает значение и тип без приведения?",
        options: ["==", "===", "=", "!="],
        correct: 1
      },
      {
        question: "Какой метод добавляет элемент в конец массива?",
        options: ["push()", "pop()", "shift()", "slice()"],
        correct: 0
      },
      {
        question: "Что вернёт typeof 42?",
        options: ["\"string\"", "\"boolean\"", "\"number\"", "\"object\""],
        correct: 2
      },
      {
        question: "Какой цикл удобен, когда известно число повторений?",
        options: ["for", "if", "switch", "return"],
        correct: 0
      }
    ];
    let current = 0;
    let correctCount = 0;
    let quiz = document.getElementById("quiz");

    function showQuestion() {
      if (current >= questions.length) {
        let percent = correctCount / questions.length * 100;
        quiz.innerHTML = "";
        let p = document.createElement("p");
        p.textContent = "Результат: " + correctCount + " из " + questions.length +
          " (" + percent.toFixed(0) + "%)";
        let again = document.createElement("button");
        again.textContent = "Пройти заново";
        again.addEventListener("click", function () {
          current = 0;
          correctCount = 0;
          showQuestion();
        });
        quiz.appendChild(p);
        quiz.appendChild(again);
        return;
      }
      let q = questions[current];
      quiz.innerHTML = "";
      let title = document.createElement("p");
      title.textContent = "Вопрос " + (current + 1) + " из " + questions.length + ": " + q.question;
      quiz.appendChild(title);
      q.options.forEach(function (option, index) {
        let btn = document.createElement("button");
        btn.textContent = option;
        btn.addEventListener("click", function () {
          if (index === q.correct) {
            correctCount++;
          }
          current++;
          showQuestion();
        });
        quiz.appendChild(btn);
      });
    }
    showQuestion();
  }

  // Задание 65. Электронная система посещаемости
  {
    let group = ["Алия", "Руслан", "Мадина", "Арман", "Данияр"];
    let list = document.getElementById("attendanceList");
    let dateInput = document.getElementById("lessonDate");
    dateInput.value = new Date().toISOString().slice(0, 10);

    group.forEach(function (name, i) {
      let label = document.createElement("label");
      label.style.display = "block";
      let cb = document.createElement("input");
      cb.type = "checkbox";
      cb.id = "student" + i;
      label.appendChild(cb);
      label.appendChild(document.createTextNode(" " + name + " — присутствует"));
      list.appendChild(label);
    });

    document.getElementById("summaryBtn").addEventListener("click", function () {
      let present = 0;
      for (let i = 0; i < group.length; i++) {
        if (document.getElementById("student" + i).checked) {
          present++;
        }
      }
      let absent = group.length - present;
      let percent = present / group.length * 100;
      document.getElementById("attendanceResult").textContent =
        "Дата: " + (dateInput.value || "не указана") +
        ". Присутствуют: " + present + ", отсутствуют: " + absent +
        ", посещаемость: " + percent.toFixed(0) + "%";
      try {
        localStorage.setItem("attendance_" + dateInput.value, JSON.stringify({
          present: present, absent: absent, percent: percent
        }));
      } catch (e) {
        // localStorage может быть недоступен — результат всё равно показан
      }
    });
  }
}
