  // Sample data for attachments
  const attachments = [
    {
        section: "01 Instructions",
        files: [
            { name: "Internship program.pdf", url: "path/to/Internship_program.pdf" },
            { name: "Portal Brief.pdf", url: "path/to/Portal_Brief.pdf" },
            { name: "Internship_schedule.pdf", url: "path/to/Internship_schedule.pdf" },
            { name: "USC_TIA_Industrial_Internship_share.pdf", url: "path/to/USC_TIA_Industrial_Internship_share.pdf" },
            { name: "Weekly Quiz", url: "/public/tranning&internship/msq question.html" }
        ]
    },
    {
        section: "02 Quiz About UCT",
        files: [
            { name: "UCT Quiz.pdf", url: "path/to/UCT_Quiz.pdf" }
        ]
    },
    {
        section: "03 Projects & Learning Resources: Week-1",
        files: [
            { name: "Project 1.pdf", url: "path/to/Project_1.pdf" },
            { name: "Learning Resource 1.pdf", url: "path/to/Learning_Resource_1.pdf" },
            { name: "Learning Resource 2.pdf", url: "path/to/Learning_Resource_2.pdf" },
            { name: "Learning Resource 3.pdf", url: "path/to/Learning_Resource_3.pdf" },
            { name: "Learning Resource 4.pdf", url: "path/to/Learning_Resource_4.pdf" }
        ]
    },
    {
        section: "04 Weekly Progress: Week-2",
        files: [
            { name: "Progress Report Week 2.pdf", url: "path/to/Progress_Report_Week_2.pdf" },
            { name: "Task 1.pdf", url: "path/to/Task_1.pdf" },
            { name: "Task 2.pdf", url: "path/to/Task_2.pdf" },
            { name: "Task 3.pdf", url: "path/to/Task_3.pdf" }
        ]
    },
    {
        section: "05 Weekly Progress: Week-3",
        files: [
            { name: "Progress Report Week 3.pdf", url: "path/to/Progress_Report_Week_3.pdf" },
            { name: "Task 4.pdf", url: "path/to/Task_4.pdf" },
            { name: "Task 5.pdf", url: "path/to/Task_5.pdf" },
            { name: "Task 6.pdf", url: "path/to/Task_6.pdf" }
        ]
    }
];

// Function to render attachments
function renderAttachments(sectionTitle, attachmentList) {
    const section = attachments.find(s => s.section === sectionTitle);
    if (section) {
        section.files.forEach(file => {
            const listItem = document.createElement("li");
            listItem.className = "attachmentt";
            listItem.textContent = file.name; // Set textContent to file name
            listItem.addEventListener("click", () => {
                window.open(file.url, "_blank"); // Open URL on click
            });
            attachmentList.appendChild(listItem);
        });
    }
}

// Function to toggle section visibility
function toggleSection(sectionHeader) {
    const attachmentList = sectionHeader.nextElementSibling;
    if (attachmentList.style.display === "none") {
        attachmentList.style.display = "block";
        renderAttachments(sectionHeader.textContent, attachmentList);
    } else {
        attachmentList.style.display = "none";
        attachmentList.innerHTML = "";
    }
}

// Render initial attachments (none initially)
const attachmentLists = document.querySelectorAll(".attachmentss");
attachmentLists.forEach(list => renderAttachments(list.previousElementSibling.textContent, list));