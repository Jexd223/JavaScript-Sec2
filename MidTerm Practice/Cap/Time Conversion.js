function clock(sec) {
    let HH = 0, mm = 0, ss = 0;

    HH = Math.floor(sec / 3600);
    mm = Math.floor((sec % 3600) / 60);
    ss = sec % 60;

    HH = HH % 24;

    console.log(`${HH < 10 ? "0" : ""}${HH}:${mm < 10 ? "0" : ""}${mm}:${ss < 10 ? "0" : ""}${ss}`);
}

clock(5025);   // Output: 01:23:45
clock(61201);  // Output: 17:00:01
clock(87000);  // Output: 00:10:00


