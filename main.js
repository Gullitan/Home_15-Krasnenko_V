// Level 1

i = 0;
while (i < 2) {
    north();
    i++;
}

// Level 2

i = 0;
while (i < 16) {
    east();
    i++;
}

// Level 3

i = 0;
while (i < 7) {
    south();
    east();
    i++;
}

// Level 4

var i = 0;
while (i < 15) {
    if (south() == true) {
        south();       
    } else {
        east(); 
    }
i++;
}

// Level 5

