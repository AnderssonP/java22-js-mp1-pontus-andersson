
for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    document.body.append(li);
    li.innerText = "rad " + i
    const bigger = 10 + (i * 8)
    const color = 100 + (i*12)
    li.style.fontSize = `${bigger}px`
    li.style.background = `hsl(${color},50%,80%)`
    li.style.textAlign = `center`
    li.style.listStyleType = `none`
    li.style.marginTop = `10px`
}

const numbersText = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];
const section = document.createElement("section");
let bColor = 5;
let aColor = 0;
document.body.append(section);
section.style.border = `solid black 2px`
section.style.display = `flex`
section.style.justifyContent = `space-around`


for (let i = 0; i < 3; i++) {
    const row = document.createElement("ol");
    section.append(row);
    row.style.display = `flex`;
    row.style.flexDirection = `row`;
    row.style.border = `6px solid green`
    row.style.padding= `0`
    row.style.width = "100px"

    if (i == 0) {
        for (let j = 0; j < 10; j++) {
            const li = document.createElement("li")
            row.append(li);
            li.innerText = j
            row.style.listStyleType = `none`
            li.style.background = "orange"
            row.style.flexDirection = `column`;
            if (bColor % 2 == 1) {
                li.style.background = "brown"
                if (bColor%7==2)
                    li.style.background = "green"
            }
            bColor++
        }
    } else if (i == 1) {
        for (let x = 9; x >= 0; x--) {
            const li = document.createElement("li")
            row.append(li);
            li.innerText = x
            row.style.listStyleType = `none`
            li.style.background = "orange"
            row.style.flexDirection = `column`;
            row.style.textAlign = "center"
            if (aColor % 2 == 1) {
                li.style.background = "brown"
                if (aColor%10==1)
                    li.style.background = "green"
            }
            aColor++
        }
    } else if (i == 2) {
        for (let y = 0; y < numbersText.length; y++) {
            const li = document.createElement("li")
            row.append(li);
            li.innerText = numbersText[y]
            li.style.listStyleType = `none`
            li.style.background = "brown"
            row.style.flexDirection = `column`;
            row.style.textAlign = "right"
            if (aColor % 2 == 1) {
                li.style.background = "orange"
                if (aColor%12==3)
                    li.style.background = "green"
            }
            aColor++
        }
    }
}