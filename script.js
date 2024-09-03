var age18 = prompt("Yoshingiz nechida");

if (isNaN(age18) || age18 < 0 || age18 > 150) {
    alert("Nimadir notog'ri ketib qoldi");
} else {
    age18 = +age18;
    if (age18 >= 0 && age18 < 18) {
        alert("Yoshsiz. O'qishingiz kerak");
    } else if (age18 >= 18 && age18 < 50) {
        alert("Ishlashingiz kerak");
    } else if (age18 >= 50 && age18 < 59) {
        alert("Yaqinda pensiyaga chiqasiz");
    } else if (age18 >= 59 && age18 < 150) {
        alert("Pensionerga o'xshaysiz, hali tirik bo'lsangiz");
    }
}
