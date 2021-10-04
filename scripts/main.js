window.onload = function () {
    const body = document.body,
        html = document.documentElement,
        title = document.getElementById("title");

    // Get loading overlay
    const loadingOverlay = document.querySelector(".loading"),
        loadingTimeout = 3000;

    // Set timeout for loading overlay 
    setTimeout(function () { loadingOverlay.classList.add("hidden"); }, loadingTimeout);

    // The number of times that the "No" button runs away
    const N = 200;

    // Init a variable to count for the number of times the "No" button runs away
    // After N times, the "No" button will disappear
    var count = 0;

    // Get sizes of the document body
    const bodyWidth = body.clientWidth;
    bodyHeight = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    titleHeight = title.offsetHeight;


    // Get sizes of the button
    const buttonWidth = bodyWidth / 10;
    const buttonHeight = bodyHeight / 10;

    // The "No" button
    var noButton = document.getElementById("no");

    // The "Yes" button
    var yesButton = document.getElementById("yes");

    yesButton.addEventListener("click", function () {
        $("#myModal").modal();
    })

    // When the mouse moves over the button
    noButton.addEventListener("mouseover", function () {
        // Get the old coordinates
        const oldLeft = noButton.offsetLeft;
        const oldTop = noButton.offsetTop;

        // Calculate new coordinates
        let newLeft = Math.floor(Math.random() * bodyWidth - buttonWidth);
        let newTop = Math.floor(Math.random() * bodyHeight - buttonHeight);

        // Dismiss unsuitable coordinates
        while (
            newLeft < 0 ||
            newLeft + buttonWidth >= bodyWidth ||
            newLeft >= oldLeft - buttonWidth && newLeft <= oldLeft + buttonWidth
        )
            newLeft = Math.floor(Math.random() * bodyWidth - buttonWidth);
        while (
            newTop < titleHeight ||
            newTop + buttonHeight >= bodyHeight ||
            newTop >= oldTop - buttonHeight && newTop <= oldTop + buttonHeight
        )
            newTop = Math.floor(Math.random() * bodyHeight - buttonHeight);

        // Move the button
        noButton.style.left = newLeft + 'px';
        noButton.style.top = newTop + 'px';

        count++;
        if (count > N)
            noButton.remove();
    });
}


