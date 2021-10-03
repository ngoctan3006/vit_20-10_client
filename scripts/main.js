window.onload = function () {
    var body = document.body,
        html = document.documentElement;

    const N = 200;

    // Init a variable to count for the number of times the "No" button runs away
    // After N times, the "No" button will disappear
    var count = 0;

    // Get sizes of the document body
    const bodyWidth = document.body.clientWidth;
    const bodyHeight = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);

    // Get sizes of the button
    const buttonWidth = bodyWidth / 10;
    const buttonHeight = bodyHeight / 10;

    // The "No" button
    var noButton = document.getElementById("no");

    // The "Yes" button
    var yesButton = document.getElementById("yes");

    yesButton.addEventListener("click", function() {
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
            newTop < 20 ||
            newTop + buttonHeight >= bodyHeight ||
            newTop >= oldTop - buttonHeight && newTop <= oldTop + buttonHeight
        )
            newTop = Math.floor(Math.random() * bodyHeight - buttonHeight);

        // Move the button
        noButton.style.left = newLeft + 'px';
        noButton.style.top = newTop + 'px';

        count++;
        if (count > 10)
            noButton.remove();
    });
}


