let postCount = 0;

function post() {
    const message = document.getElementById("message").value;
    const targetElements = ["topic", "reply1", "reply2"];
    const targetId = targetElements[postCount % targetElements.length];
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        // targetElement.textContent += `\n${postCount + 1}. ${message}`;
        targetElement.textContent += ` ${message}`;
        document.getElementById("message").value = "";
        postCount++;
        
        alert("Post Complete");
    } else {
        console.error("Error");
    }
}

function clearAllPosts() {
    const targetElements = ["topic", "reply1", "reply2"];
    targetElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = "";
        } else {
            console.error(`Not Find element ${id}`);
        }
    });
    postCount = 0;
    
    alert("Clear All");
}

