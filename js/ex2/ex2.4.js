(function () {
    'use strict'

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let now = new Date();

    let stringDate = `Today is ${days[now.getDay()]} the ${now.getDate()} of ${now.getMonth()}, ${now.getFullYear()}`;
    console.log(stringDate);

})();


