// Quiz logic
const form = document.getElementById("quiz-form");
const resultBox = document.getElementById("result");
const toolNameP = document.getElementById("tool-name");
const toolExplanationP = document.getElementById("tool-explanation");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const goal = document.getElementById("main-goal").value;
    const experience = document.getElementById("experience").value;

    if (!goal || !experience) {
        alert("Please choose an option in both questions.");
        return;
    }

    let tool = "";
    let explanation = "";

    // Basic decision logic – feel free to refine
    if (goal === "study" || goal === "write") {
        tool = "ChatGPT";
        explanation = "ChatGPT is strong for explanations, writing, and general questions. It works well for homework help, summaries, and drafting emails or essays.";
    } else if (goal === "code" && experience === "beginner") {
        tool = "ChatGPT or GitHub Copilot";
        explanation = "Start with ChatGPT to explain concepts and show code examples. When you are comfortable, add GitHub Copilot inside your IDE to generate code faster.";
    } else if (goal === "code" && (experience === "intermediate" || experience === "advanced")) {
        tool = "GitHub Copilot";
        explanation = "GitHub Copilot is ideal for writing code directly in your editor. It can complete functions, suggest patterns and speed up development.";
    } else if (goal === "debug") {
        tool = "Cursor";
        explanation = "Cursor focuses on full projects. It can read, explain and refactor existing code across files, perfect for debugging.";
    } else if (goal === "search") {
        tool = "Grok or Gemini";
        explanation = "Grok and Gemini are suited for searching up-to-date information and combining web results with AI-generated answers.";
    } else {
        tool = "ChatGPT";
        explanation = "For most mixed tasks, ChatGPT is a good starting point because it works well with both technical and non-technical questions.";
    }

    toolNameP.textContent = tool;
    toolExplanationP.textContent = explanation;
    resultBox.classList.remove("hidden");
});

// Suggestions form logic
const suggestionForm = document.getElementById("suggestion-form");
const suggestionInput = document.getElementById("suggestion-input");
const suggestionsList = document.getElementById("suggestions-list");

if (suggestionForm) {
    suggestionForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const suggestion = suggestionInput.value.trim();
        if (suggestion) {
            const li = document.createElement("li");
            li.textContent = suggestion;
            suggestionsList.appendChild(li);
            suggestionInput.value = "";
        }
    });
}
