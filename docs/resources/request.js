const http = require("https");
const fs = require("fs");

// ^"image": \{[^}]*\} || "image": \{\n\s+.*\n\s+.*\n\s+.*\n\s+.*\n\s+\}
// "story": ".*"


const gender = [
    "MENS",
    "WOMENS",
    "PRESCHOOL",
    "TODDLER",
    "YOUTH"
];

const brands = [
    "ASICS",
    "ADIDAS",
    "CONVERSE",
    "JORDAN",
    "NEW BALANCE",
    "NIKE",
    "PUMA",
    "REEBOK",
];

const paths =
    [
        '/sneakers?limit=20&gender=MENS&brand=asics',
        '/sneakers?limit=20&gender=MENS&brand=adidas',
        '/sneakers?limit=20&gender=MENS&brand=converse',
        '/sneakers?limit=20&gender=MENS&brand=jordan',
        '/sneakers?limit=20&gender=MENS&brand=new%20balance',
        '/sneakers?limit=20&gender=MENS&brand=nike',
        '/sneakers?limit=20&gender=MENS&brand=puma',
        '/sneakers?limit=20&gender=MENS&brand=reebok',
        '/sneakers?limit=20&gender=WOMENS&brand=asics',
        '/sneakers?limit=20&gender=WOMENS&brand=adidas',
        '/sneakers?limit=20&gender=WOMENS&brand=converse',
        '/sneakers?limit=20&gender=WOMENS&brand=jordan',
        '/sneakers?limit=20&gender=WOMENS&brand=new%20balance',
        '/sneakers?limit=20&gender=WOMENS&brand=nike',
        '/sneakers?limit=20&gender=WOMENS&brand=puma',
        '/sneakers?limit=20&gender=WOMENS&brand=reebok',
        '/sneakers?limit=20&gender=PRESCHOOL&brand=asics',
        '/sneakers?limit=20&gender=PRESCHOOL&brand=adidas',
        '/sneakers?limit=20&gender=PRESCHOOL&brand=converse',
        '/sneakers?limit=20&gender=PRESCHOOL&brand=jordan',
        '/sneakers?limit=20&gender=PRESCHOOL&brand=new%20balance',
        '/sneakers?limit=20&gender=PRESCHOOL&brand=nike',
        '/sneakers?limit=20&gender=PRESCHOOL&brand=puma',
        '/sneakers?limit=20&gender=PRESCHOOL&brand=reebok',
        '/sneakers?limit=20&gender=TODDLER&brand=asics',
        '/sneakers?limit=20&gender=TODDLER&brand=adidas',
        '/sneakers?limit=20&gender=TODDLER&brand=converse',
        '/sneakers?limit=20&gender=TODDLER&brand=jordan',
        '/sneakers?limit=20&gender=TODDLER&brand=new%20balance',
        '/sneakers?limit=20&gender=TODDLER&brand=nike',
        '/sneakers?limit=20&gender=TODDLER&brand=puma',
        '/sneakers?limit=20&gender=TODDLER&brand=reebok',
        '/sneakers?limit=20&gender=YOUTH&brand=asics',
        '/sneakers?limit=20&gender=YOUTH&brand=adidas',
        '/sneakers?limit=20&gender=YOUTH&brand=converse',
        '/sneakers?limit=20&gender=YOUTH&brand=jordan',
        '/sneakers?limit=20&gender=YOUTH&brand=new%20balance',
        '/sneakers?limit=20&gender=YOUTH&brand=nike',
        '/sneakers?limit=20&gender=YOUTH&brand=puma',
        '/sneakers?limit=20&gender=YOUTH&brand=reebok'
    ];
const fileNames = [
    'MENS-ASICS-20.json',
    'MENS-ADIDAS-20.json',
    'MENS-CONVERSE-20.json',
    'MENS-JORDAN-20.json',
    'MENS-NEW BALANCE-20.json',
    'MENS-NIKE-20.json',
    'MENS-PUMA-20.json',
    'MENS-REEBOK-20.json',
    'WOMENS-ASICS-20.json',
    'WOMENS-ADIDAS-20.json',
    'WOMENS-CONVERSE-20.json',
    'WOMENS-JORDAN-20.json',
    'WOMENS-NEW BALANCE-20.json',
    'WOMENS-NIKE-20.json',
    'WOMENS-PUMA-20.json',
    'WOMENS-REEBOK-20.json',
    'PRESCHOOL-ASICS-20.json',
    'PRESCHOOL-ADIDAS-20.json',
    'PRESCHOOL-CONVERSE-20.json',
    'PRESCHOOL-JORDAN-20.json',
    'PRESCHOOL-NEW BALANCE-20.json',
    'PRESCHOOL-NIKE-20.json',
    'PRESCHOOL-PUMA-20.json',
    'PRESCHOOL-REEBOK-20.json',
    'TODDLER-ASICS-20.json',
    'TODDLER-ADIDAS-20.json',
    'TODDLER-CONVERSE-20.json',
    'TODDLER-JORDAN-20.json',
    'TODDLER-NEW BALANCE-20.json',
    'TODDLER-NIKE-20.json',
    'TODDLER-PUMA-20.json',
    'TODDLER-REEBOK-20.json',
    'YOUTH-ASICS-20.json',
    'YOUTH-ADIDAS-20.json',
    'YOUTH-CONVERSE-20.json',
    'YOUTH-JORDAN-20.json',
    'YOUTH-NEW BALANCE-20.json',
    'YOUTH-NIKE-20.json',
    'YOUTH-PUMA-20.json',
    'YOUTH-REEBOK-20.json'
];

const getSneakers = (i, j) => {
    const encodedPath = encodeURI(`/sneakers?limit=20&gender=${gender[i]}&brand=${brands[j].toLocaleLowerCase()}`);
    const fileName = `${gender[i]}-${brands[j]}-20.json`;

    console.log("Requesting for: ", encodedPath);
    const options = {
        "method": "GET",
        "hostname": "the-sneaker-database.p.rapidapi.com",
        "port": null,
        "path": encodedPath,
        "headers": {
            "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
            "x-rapidapi-key": "c7b45e4c41mshefff6149c058fb6p11b370jsnc3fb429b427e",
            "useQueryString": true
        }
    };

    const req = http.request(options, function (res) {
        const chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function () {
            const body = Buffer.concat(chunks);

            console.log("Creating file: ", fileName);

            fs.writeFile(fileName, body.toString(), (err) => {
                if (!err) {
                    console.log("DONE");
                }
                console.log(err);
            });
        });
    });

    req.end();
};

// for (let i = 0; i < gender.length; i++) {

//     for (let j = 0; j < brands.length; j++) {

//         let currentGender = gender[i];
//         let currentBrand = brands[j];
//         let genderWithBrand = `${currentGender} ${currentBrand}`;

//         setTimeout((y) => {
//             console.log(genderWithBrand);
//         }, j * 2000, j);

//         // setTimeout(function (y) {
//         // console.log("CURRENT GENDER:", gender[i]);
//         // const encodedPath = encodeURI(`/sneakers?limit=20&gender=${gender[i]}&brand=${brands[y].toLocaleLowerCase()}`);
//         // console.log(encodedPath);
//         // console.log(`${gender[i]}-${brands[y]}-20.json`);
//         // }, j * 1500, j); // we're passing j
//     }
// }


// for (let i = 0; i < paths.length; i++) {
//     setTimeout(function (y) {
//         getSneakers(i);
//     }, i * 1500, i); // we're passing x
// }

// const genderWithBrands = [];

// for (let i = 0; i < gender.length; i++) {
//     for (let j = 0; j < brands.length; j++) {
//         genderWithBrands.push(`${gender[i]} ${brands[j]}`);
//     }
// }


// for (let i = 0; i < paths.length; i++) {
//     setTimeout(function (y) {
//         console.log(genderWithBrands[i]);
//     }, i * 2500, i); // we're passing x
// }

// for (let i = 0; i < gender.length; i++) {
//     for (let j = 0; j < brands.length; j++) {
//         setTimeout((y) => console.log(gender[i], brands[y]), (gender.length * i + j + ((brands.length - gender.length + 1) * i)) * 2000);
//     }
// }

let num = 0;
for (let i = 0; i < gender.length; i++) {
    for (let j = 0; j < brands.length; j++) {
        setTimeout(() => getSneakers(i, j), num * 2000);
        num++;
    }
}