const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal("#facultyName", { delay: 100 });
sr.reveal("#subjectName", { delay: 200 });
sr.reveal("#totalCredits", { delay: 200 });
sr.reveal("#classSem", { delay: 200 });
sr.reveal("#division", { delay: 320 });
sr.reveal("#dpartment", { delay: 320 });
sr.reveal("#sem", { delay: 320 });
sr.reveal("#class", { delay: 320 });

//   sr.reveal(".project-box", { interval: 200 });
//   sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal("#subjectForm", { delay: 100 });
srLeft.reveal(".subjectTable", { delay: 200 });

const srRight = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 200 });

const section = document.querySelectorAll(".section[id]");

function scrollActive() {
  const scrolly = window.scrolly;

  section.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrroly > sectionTop && scrolly <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

const facultyName = [];
const subjectName = [];
const credit = [];
const department = [];
const sem = [];
const class1 = [];
document
  .getElementById("subjectForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const infacultyName = document.getElementById("facultyName").value;
    const insubjectName = document.getElementById("subjectName").value;
    const incredit = document.getElementById("totalCredits").value;
    const indepartment = document.getElementById("dpartment").value;
    const insem = document.getElementById("sem").value;
    const inclass = document.getElementById("class").value;

    facultyName.push(infacultyName);
    subjectName.push(insubjectName);
    credit.push(incredit);
    department.push(indepartment);
    sem.push(insem);
    class1.push(inclass);

    document.getElementById("subjectForm").reset(); // Reset the form

    if (facultyName.length - 1 > 6) {
      alert("total subjects is 7");
      facultyName.length -= 1;
    }

    document.getElementById("show-btn").addEventListener("click", function () {
      document.getElementById("p1").value =
        "Department:-" +
        department[0] +
        " " +
        sem[0] +
        "   Division:-" +
        class1[0];
      for (let index = 1; index < 9; index++) {
        for (let j = 1; j < 7; j++) {
          if (index == 1) {
            if (j == 3 && subjectName[j - 1] == subjectName[2]) {
              var tabl =
                document.getElementById("subjectTable").rows[index].cells;
              tabl[j + 1].innerHTML = subjectName[0];
              var tabl1 =
                document.getElementById("subjectTable").rows[index + 1].cells;
              tabl1[j - 1].innerHTML = facultyName[0];
            } else if (j == 5 && subjectName[j - 1] == subjectName[4]) {
              var tabl =
                document.getElementById("subjectTable").rows[index].cells;
              tabl[j + 1].innerHTML = subjectName[2];
              var tabl1 =
                document.getElementById("subjectTable").rows[index + 1].cells;
              tabl1[j - 1].innerHTML = facultyName[2];
            } else {
              var tabl =
                document.getElementById("subjectTable").rows[index].cells;
              tabl[j + 1].innerHTML = subjectName[j - 1];
              var tabl1 =
                document.getElementById("subjectTable").rows[index + 1].cells;
              tabl1[j - 1].innerHTML = facultyName[j - 1];
            }
          } else if (index == 3) {
            if (j == 1 && subjectName[j - 1] == subjectName[0]) {
              var tabl =
                document.getElementById("subjectTable").rows[index].cells;
              tabl[j + 1].innerHTML = subjectName[2];
              var tabl1 =
                document.getElementById("subjectTable").rows[index + 1].cells;
              tabl1[j - 1].innerHTML = facultyName[2];
            } else if (j == 2 && subjectName[j - 1] == subjectName[1]) {
              var tabl =
                document.getElementById("subjectTable").rows[index].cells;
              tabl[j + 1].innerHTML = subjectName[4];
              var tabl1 =
                document.getElementById("subjectTable").rows[index + 1].cells;
              tabl1[j - 1].innerHTML = facultyName[4];
            } else if (j == 4 && subjectName[j - 1] == subjectName[3]) {
              var tabl =
                document.getElementById("subjectTable").rows[index].cells;
              tabl[j + 1].innerHTML = subjectName[4];
              var tabl1 =
                document.getElementById("subjectTable").rows[index + 1].cells;
              tabl1[j - 1].innerHTML = facultyName[4];
            } else if (j == 5 && subjectName[j - 1] == subjectName[4]) {
              var tabl =
                document.getElementById("subjectTable").rows[index].cells;
              tabl[j + 1].innerHTML = subjectName[1];
              var tabl1 =
                document.getElementById("subjectTable").rows[index + 1].cells;
              tabl1[j - 1].innerHTML = facultyName[1];
            } else if (j == 6 && subjectName[j - 1] == subjectName[5]) {
              var tabl =
                document.getElementById("subjectTable").rows[index].cells;
              tabl[j + 1].innerHTML = subjectName[2];
              var tabl1 =
                document.getElementById("subjectTable").rows[index + 1].cells;
              tabl1[j - 1].innerHTML = facultyName[2];
            } else {
              var tabl =
                document.getElementById("subjectTable").rows[index].cells;
              tabl[j + 1].innerHTML = subjectName[3];
              var tabl1 =
                document.getElementById("subjectTable").rows[index + 1].cells;
              tabl1[j - 1].innerHTML = facultyName[3];
            }
          } else if (index == 6) {
            if (j == 1 && subjectName[j - 1] == subjectName[0]) {
              var tabl =
                document.getElementById("subjectTable").rows[index].cells;
              tabl[j + 1].innerHTML = subjectName[3];
              var tabl1 =
                document.getElementById("subjectTable").rows[index + 1].cells;
              tabl1[j - 1].innerHTML = facultyName[3];
            } else if (j == 2 && subjectName[j - 1] == subjectName[1]) {
              var tabl =
                document.getElementById("subjectTable").rows[index].cells;
              tabl[j + 1].innerHTML = subjectName[2];
              var tabl1 =
                document.getElementById("subjectTable").rows[index + 1].cells;
              tabl1[j - 1].innerHTML = facultyName[2];
            } else if (j == 4 && subjectName[j - 1] == subjectName[3]) {
              var tabl =
                document.getElementById("subjectTable").rows[index].cells;
              tabl[j + 1].innerHTML = subjectName[1];
              var tabl1 =
                document.getElementById("subjectTable").rows[index + 1].cells;
              tabl1[j - 1].innerHTML = facultyName[1];
            } else if (j == 5 && subjectName[j - 1] == subjectName[4]) {
              var tabl =
                document.getElementById("subjectTable").rows[index].cells;
              tabl[j + 1].innerHTML = subjectName[4];
              var tabl1 =
                document.getElementById("subjectTable").rows[index + 1].cells;
              tabl1[j - 1].innerHTML = facultyName[4];
            } else if (j == 6 && subjectName[j - 1] == subjectName[5]) {
              var tabl =
                document.getElementById("subjectTable").rows[index].cells;
              tabl[j + 1].innerHTML = subjectName[0];
              var tabl1 =
                document.getElementById("subjectTable").rows[index + 1].cells;
              tabl1[j - 1].innerHTML = facultyName[0];
            } else {
              var tabl =
                document.getElementById("subjectTable").rows[index].cells;
              tabl[j + 1].innerHTML = subjectName[5];
              var tabl1 =
                document.getElementById("subjectTable").rows[index + 1].cells;
              tabl1[j - 1].innerHTML = facultyName[5];
            }
          } else if (index == 8) {
            if (j == 1 && subjectName[j - 1] == subjectName[0]) {
              var tabl =
                document.getElementById("subjectTable").rows[index].cells;
              tabl[j + 1].innerHTML = subjectName[2] + " lab";
              var tabl1 =
                document.getElementById("subjectTable").rows[index + 1].cells;
              tabl1[j - 1].innerHTML = facultyName[2];
            } else if (j == 2 && subjectName[j - 1] == subjectName[1]) {
              var tabl =
                document.getElementById("subjectTable").rows[index].cells;
              tabl[j + 1].innerHTML = subjectName[4] + " lab";
              var tabl1 =
                document.getElementById("subjectTable").rows[index + 1].cells;
              tabl1[j - 1].innerHTML = facultyName[4];
            } else if (j == 4 && subjectName[j - 1] == subjectName[3]) {
              var tabl =
                document.getElementById("subjectTable").rows[index].cells;
              tabl[j + 1].innerHTML = subjectName[1] + " lab";
              var tabl1 =
                document.getElementById("subjectTable").rows[index + 1].cells;
              tabl1[j - 1].innerHTML = facultyName[1];
            } else if (j == 5 && subjectName[j - 1] == subjectName[4]) {
              var tabl =
                document.getElementById("subjectTable").rows[index].cells;
              tabl[j + 1].innerHTML = subjectName[2] + " lab";
              var tabl1 =
                document.getElementById("subjectTable").rows[index + 1].cells;
              tabl1[j - 1].innerHTML = facultyName[2];
            } else if (j == 6 && subjectName[j - 1] == subjectName[5]) {
              var tabl =
                document.getElementById("subjectTable").rows[index].cells;
              tabl[j + 1].innerHTML = subjectName[0] + " lab";
              var tabl1 =
                document.getElementById("subjectTable").rows[index + 1].cells;
              tabl1[j - 1].innerHTML = facultyName[0];
            } else {
              var tabl =
                document.getElementById("subjectTable").rows[index].cells;
              tabl[j + 1].innerHTML = subjectName[0] + " lab";
              var tabl1 =
                document.getElementById("subjectTable").rows[index + 1].cells;
              tabl1[j - 1].innerHTML = facultyName[0];
            }
          }
        }
      }
    });
  });
