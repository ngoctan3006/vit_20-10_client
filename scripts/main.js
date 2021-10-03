window.onload = function () {
    // Get sizes of the document body
    const bodyWidth = document.body.clientWidth;
    const bodyHeight = document.body.clientHeight;

    // Get sizes of the button
    const buttonWidth = bodyWidth / 10;
    const buttonHeight = bodyHeight / 10;

    // The "No" button
    var noButton = document.getElementById("no");

    // When the mouse moves over the button
    noButton.addEventListener("mouseover", function () {
        // Get the old coordinates
        const oldLeft = noButton.offsetLeft;
        const oldTop = noButton.offsetTop;

        // Calculate new left offset
        let newLeft = Math.floor(Math.random() * bodyWidth - buttonWidth);
        while (
            newLeft < 0 ||
            newLeft + buttonWidth >= bodyWidth ||
            newLeft >= oldLeft - buttonWidth && newLeft <= oldLeft + buttonWidth
        ) {
            newLeft = Math.floor(Math.random() * bodyWidth - buttonWidth);
        }

        // Calculate new top offset
        let newTop = Math.floor(Math.random() * bodyHeight - buttonHeight);
        while (
            newTop < 50 ||
            newTop + buttonHeight >= bodyHeight ||
            newTop >= oldTop - buttonHeight && newTop <= oldTop + buttonHeight
        ) {
            newTop = Math.floor(Math.random() * bodyHeight - buttonHeight);
        }

        // Move the button
        noButton.style.left = newLeft + 'px';
        noButton.style.top = newTop + 'vh';
    });
}


