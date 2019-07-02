let textX = '';
let textY = '';
let textZ = '';
let Z = 5;
for (let x = 0; x <= Z; x++) {
    textX += '*';
    for (let y = 0; y <= Z - x; y++) {
        textY += " ";
        textZ += "*";
    }
    console.log(textY + textX + textY);
    textY = '';
    textX += '*';
}
