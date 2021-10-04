window.onload = function () {
    const body = document.body,
        html = document.documentElement,
        title = document.getElementById("title");

    // Get loading overlay
    const loadingOverlay = document.querySelector(".loading"),
        loadingTimeout = 1000;

    // The "No" button
    const noButton = document.getElementById("no");

    // The "Yes" button
    const yesButton = document.getElementById("yes");

    // Set timeout for loading overlay 
    setTimeout(function () { loadingOverlay.classList.add("hidden"); }, loadingTimeout);

    // Show modal (invitation)
    yesButton.addEventListener("click", function () {
        $("#myModal").modal();
    })

    // The number of times that the "No" button runs away
    const N = 200;

    // Init a variable to count for the number of times the "No" button runs away
    // After N times, the "No" button will disappear
    var count = 0;

    // When the mouse moves over the button
    noButton.addEventListener("mousedown", function () {
        // Get sizes of the document body
        var bodyWidth = body.clientWidth,
            bodyHeight = Math.max(body.scrollHeight, body.offsetHeight,
                html.clientHeight, html.scrollHeight, html.offsetHeight),
            titleHeight = title.offsetHeight;

        // Get sizes of the button
        var buttonWidth = bodyWidth / 10;
        var buttonHeight = bodyHeight / 10;

        // Get the old coordinates
        var oldLeft = noButton.offsetLeft;
        var oldTop = noButton.offsetTop;

        // Calculate new coordinates
        var newLeft = Math.floor(Math.random() * bodyWidth - buttonWidth);
        var newTop = Math.floor(Math.random() * bodyHeight - buttonHeight);

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

        // Move "No" button away
        noButton.style.left = newLeft + 'px';
        noButton.style.top = newTop + 'px';

        // Move "Yes" button to replace "No" button
        yesButton.style.left = oldLeft + 'px';
        yesButton.style.top = oldTop + 'px';

        count++;
        if (count > N)
            noButton.remove();
    });
}


