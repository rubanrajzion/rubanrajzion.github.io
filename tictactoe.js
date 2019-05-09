
// number of turns//
var x=0

// ticks to win //
var a1=0
var a2=0
var a3=0
var b1=0
var b2=0
var b3=0
var d1=0
var d2=0

// cross to win//
var q1=0
var q2=0
var q3=0
var w1=0
var w2=0
var w3=0
var e1=0
var e2=0

// draw //

var n=0
var m=0

function game(){
    // ticks//
    if(a1===3||a2===3||a3===3||b1===3||b2===3||b3===3||d1===3||d2===3||q1===3||q2===3||q3===3||w1===3||w2===3||w3===3||e1===3||e2===3||n===6||m===5){
        alert("player wins")
    }

    if(x===0 && event.target.classList.contains("row1column1")) {
        event.target.innerHTML = "<img src = 'https://images.vexels.com/media/users/3/143461/isolated/preview/6cdcfad63c487e445cc69083b916f2a9-red-check-mark-by-vexels.png' height='196px' width='196px'>"
        a1++;
        b1++;
        d1++;
        x++;
        n++;
        return
    }
    if(x===0 && event.target.classList.contains("row1column2")) {
        event.target.innerHTML = "<img src = 'https://images.vexels.com/media/users/3/143461/isolated/preview/6cdcfad63c487e445cc69083b916f2a9-red-check-mark-by-vexels.png' height='196px' width='196px'>"
        a2++;
        b1++;
        x++;
        n++;
        return
    }
    if(x===0 && event.target.classList.contains("row1column3")) {
        event.target.innerHTML = "<img src = 'https://images.vexels.com/media/users/3/143461/isolated/preview/6cdcfad63c487e445cc69083b916f2a9-red-check-mark-by-vexels.png' height='196px' width='196px'>"
        a3++;
        b1++;
        x++;
        n++;
        return
    }
    if(x===0 && event.target.classList.contains("row2column1")) {
        event.target.innerHTML = "<img src = 'https://images.vexels.com/media/users/3/143461/isolated/preview/6cdcfad63c487e445cc69083b916f2a9-red-check-mark-by-vexels.png' height='196px' width='196px'>"
        a1++;
        b2++;
        x++;
        n++;
        return
    }
    if(x===0 && event.target.classList.contains("row2column2")) {
        event.target.innerHTML = "<img src = 'https://images.vexels.com/media/users/3/143461/isolated/preview/6cdcfad63c487e445cc69083b916f2a9-red-check-mark-by-vexels.png' height='196px' width='196px'>"
        a2++;
        b2++;
        d1++;
        x++;
        n++;
        return
    }
    if(x===0 && event.target.classList.contains("row2column2")) {
        event.target.innerHTML = "<img src = 'https://images.vexels.com/media/users/3/143461/isolated/preview/6cdcfad63c487e445cc69083b916f2a9-red-check-mark-by-vexels.png' height='196px' width='196px'>"
        a2++;
        b2++;
        d1++;
        x++;
        n++;
        return
    }
    if(x===0 && event.target.classList.contains("row2column2")) {
        event.target.innerHTML = "<img src = 'https://images.vexels.com/media/users/3/143461/isolated/preview/6cdcfad63c487e445cc69083b916f2a9-red-check-mark-by-vexels.png' height='196px' width='196px'>"
        a2++;
        b2++;
        d1++;
        d2++;
        x++;
        n++;
        return
    }
    if(x===0 && event.target.classList.contains("row2column3")) {
        event.target.innerHTML = "<img src = 'https://images.vexels.com/media/users/3/143461/isolated/preview/6cdcfad63c487e445cc69083b916f2a9-red-check-mark-by-vexels.png' height='196px' width='196px'>"
        a3++;
        b2++;
        x++;
        return
    }
    if(x===0 && event.target.classList.contains("row3column1")) {
        event.target.innerHTML = "<img src = 'https://images.vexels.com/media/users/3/143461/isolated/preview/6cdcfad63c487e445cc69083b916f2a9-red-check-mark-by-vexels.png' height='196px' width='196px'>"
        a1++;
        b3++;
        d2++;
        x++;
        return
    }
    if(x===0 && event.target.classList.contains("row3column2")) {
        event.target.innerHTML = "<img src = 'https://images.vexels.com/media/users/3/143461/isolated/preview/6cdcfad63c487e445cc69083b916f2a9-red-check-mark-by-vexels.png' height='196px' width='196px'>"
        a2++;
        b3++;
        x++;
        return
    }
    if(x===0 && event.target.classList.contains("row3column3")) {
        event.target.innerHTML = "<img src = 'https://images.vexels.com/media/users/3/143461/isolated/preview/6cdcfad63c487e445cc69083b916f2a9-red-check-mark-by-vexels.png' height='196px' width='196px'>"
        a3++;
        b3++;
        d1++;
        x++;
        return
    }

    // cross//
    if(x===1 && event.target.classList.contains("row1column1")) {
        event.target.innerHTML = "<img src = 'http://www.clker.com/cliparts/A/g/r/N/B/M/blue-cross-hi.png' height='196px' width='196px'>"
        q1++;
        w1++;
        e1++;
        x--;
        return
    }
    if(x===1 && event.target.classList.contains("row1column2")) {
        event.target.innerHTML = "<img src = 'http://www.clker.com/cliparts/A/g/r/N/B/M/blue-cross-hi.png' height='196px' width='196px'>"
        q2++;
        w1++;
        x--;
        return
    }
    if(x===1 && event.target.classList.contains("row1column3")) {
        event.target.innerHTML = "<img src = 'http://www.clker.com/cliparts/A/g/r/N/B/M/blue-cross-hi.png' height='196px' width='196px'>"
        q3++;
        w1++;
        e2++;
        x--;
        return
    }
    if(x===1 && event.target.classList.contains("row2column1")) {
        event.target.innerHTML = "<img src = 'http://www.clker.com/cliparts/A/g/r/N/B/M/blue-cross-hi.png' height='196px' width='196px'>"
        q1++;
        w2++;
        x--;
        return
    }
    if(x===1 && event.target.classList.contains("row2column2")) {
        event.target.innerHTML = "<img src = 'http://www.clker.com/cliparts/A/g/r/N/B/M/blue-cross-hi.png' height='196px' width='196px'>"
        q2++;
        w2++;
        e1++;
        e2++;
        x--;
        return
    }
    if(x===1 && event.target.classList.contains("row2column3")) {
        event.target.innerHTML = "<img src = 'http://www.clker.com/cliparts/A/g/r/N/B/M/blue-cross-hi.png' height='196px' width='196px'>"
        q3++;
        w2++;
        x--;
        return
    }
    if(x===1 && event.target.classList.contains("row3column1")) {
        event.target.innerHTML = "<img src = 'http://www.clker.com/cliparts/A/g/r/N/B/M/blue-cross-hi.png' height='196px' width='196px'>"
        q1++;
        w3++;
        e2++;
        x--;
        return
    }
    if(x===1 && event.target.classList.contains("row3column2")) {
        event.target.innerHTML = "<img src = 'http://www.clker.com/cliparts/A/g/r/N/B/M/blue-cross-hi.png' height='196px' width='196px'>"
        q2++;
        w3++;
        x--;
        return
    }
    if(x===1 && event.target.classList.contains("row3column3")) {
        event.target.innerHTML = "<img src = 'http://www.clker.com/cliparts/A/g/r/N/B/M/blue-cross-hi.png' height='196px' width='196px'>"
        q3++;
        w3++;
        e1++;
        x--;
        return
    }
}


