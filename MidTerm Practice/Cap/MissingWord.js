function MissingChar(Str) {
    let Char = ['a', 'b', 'c', 'd', 'e', 
                'f', 'g', 'h', 'i', 'j', 
                'k', 'l', 'm', 'n', 'o', 
                'p', 'q', 'r', 's', 't', 
                'u', 'v', 'w', 'x', 'y', 'z'];

    let Text = Str.toLowerCase();
    let Start = Char.indexOf(Text[0]);
    let End = Char.indexOf(Text[Text.length - 1]);

    if (Start === -1 || End === -1) {
        console.log("Invalid input! Ensure the characters are letters.");
        return;
    }
    let Result = [];
    for (let i = Start; i <= End; i++) {
        if (!Text.includes(Char[i])) {
            Result.push(Char[i]); 
        }
    }
    console.log(Result);
}

MissingChar('ACDEFH'); // Output: ['b', 'g']
MissingChar('XZ');     // Output: ['y']
MissingChar('ACE');    // Output: ['b', 'd']



