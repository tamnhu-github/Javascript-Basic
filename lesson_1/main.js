var myFunction = function(){
    alert('Hi xin chao cac ban');
}
var a = 1
var b = 4
var c = a>b
var myString = 'ABC'
var myObject = {
    name : 'Tam Nhu',
    age : 20,
    address : 'Hue'
};
var myArray = [
    'PHP',
    'String',
    'JS'
];
// var t = null;
// // console.log(typeof t)
// var result = null || null || 0 || false;
// if(result){
//     console.log('DK DUNG')
// } else {
//     console.log('DK SAI')
// }
function writeLog(){
    myString = '';
    for (var param of arguments){
        myString += `${param} - `;
    }
    console.log(myString);
}
// writeLog('Log 1','Log 2', 'Log 3');
function showMessage(){
    console.log('Declaration function');
}
var showMessage2 = function (){
    console.log('Expression function');
}
var myString = 'Hoc lap trinh JS tai F8!';
// console.log(myString.replace(/JS/g,'Javacsript'));
// console.log(myString.toLowerCase());
// var languages = 'Javascript';
// console.log(languages.split(''));
// const myString2 = 'Son';
// console.log(typeof myString2.charAt(7));
// console.log(Number.isInteger(2.3));
// console.log(Number.parseFloat('61,10'));
// console.log(Number.parseFloat('10.86'));
// console.log(Number.parseInt('10 is my age'));
var numberObject = 1234.56789;
// console.log(numberObject.toFixed(2));
// console.log(numberObject.toString());
// console.log(typeof (25).toString());
var result = 20 / 'ABC';
let x = 9768989.656;
// console.log((7385.442).toExponential(4));
// console.log((73834).valueOf());
var languages = [
    'Javascript',
    'PHP',
    'Ruby'
]
// console.log(languages.join(' '));
//OBJECT
var myName = 'name';
var student = {
    [myName]: 'Tam Nhu',
    'my-age': 19,
    address: 'Hue',
    getAge: function() {
        return this['my-age'];
    },
    getName: function() {
        return this[myName];
    },
    getAdress: function() {
        return this.address;
    }
}
var myAddress = 'address';
// console.log(student.address);
// console.log(student.getAge());
// console.log(student.getName());
// console.log(student.getAdress());
function User(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    //tra ve fullName: cong firstName va lastName
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}
//them thuoc tinh hoac phuong thuc sau khi ham tao da duoc dinh nghia,
//tuc la them o ben ngoai ham tao constructor
User.prototype.className = 'KG';
User.prototype.getAge = function() {
    return this.age;
}
var author = new User('Nhu','Tam',19);
// console.log(author.getAge());
//them thuoc tinh sau khi tao
// author.title = 'Chia se hoc lap trinh';
// console.log(author.getName());
var user = new User('A','B',20);
// console.log(user.getAge());
//them thuoc tinh sau khi tao
// user.comment = 'Hello!';
// console.log(user.getName());
var date = new Date();
// console.log(date);
//luyen tap if else
function run(a) {
    if(a%15==0) return 3;
    else if (a%5 == 0) return 2;
    else return 1;
}
// Kỳ vọng
// console.log(run(3)) // 1
// console.log(run(5)) // 2
// console.log(run(15)) // 3
//TOAN TU 3 NGOI - TERNARY OPERATOR
var course = {
    name: 'Javscript',
    cost: 0
}
// if(course.cost > 0) {
//     console.log(`${course.cost} Coins`);
// } else console.log('Mien phi');
// console.log(course.cost > 0 ? `${course.cost} Coins` : 'Miễn phí');
// function run(object) {
//     var arr = [];
//     for (var key in object) {
//         arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
//     }
//     return arr;
// }

// // Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));
var languages = [
    'Java',
    'Ruby',
    'Python'
];
// for (var value of languages) {
//     console.log(value);
// }
var myInfor = {
    name: 'Nhu',
    age: 19
}
//FOR OF VOI OBJECT
// console.log(Object.keys(myInfor));
// for (var value of Object.keys(myInfor)) {
//     console.log(myInfor[value]);
// }
//LAY RA TUNG PHAN TU CUA myArray2
var myArray2 = [
    [1,2],
    [3,4],
    [5,6]
]
// console.log(myArray2.length)
//=====CACH 1==========
// for (var i=0; i<myArray2.length; i++) {
//     for (var value of myArray2[i]) {
//         console.log(value);
//     }
// }
//=====CACH 2==========
// for (var i=0; i<myArray2.length;i++) {
//     for (var j=0; j<myArray2[i].length;j++) {
//         console.log(myArray2[i][j]);
//     }
// }
//BAI TOAN XOA PHAN TU TRUNG LAP
var arr2 = ['a', 'b', 'c', 'c', 'd', 'b', 'e', 'a']
// console.log([...(new Set(arr2))]); 
// console.log([...(new Set([1,2,3,4,1,4,5,2]))])
//========DE QUY================
// function countDown(num) {
//     if(num > 0) {
//         console.log(num);
//         return countDown(num-1);
//     }
//     return num;
// }
// countDown(4);
var courses = [
    {
        id: 1,
        name: 'PHP',
        coin: 10
    },
    {
        id: 2,
        name: 'Ruby',
        coin: 240
    },
    {
        id: 3,
        name: 'Java',
        coin: 230
    },
    {
        id: 4,
        name: 'Ruby',
        coin: 10
    }
]
var dem = 0;
courses.forEach(function(course, index){
    if(course.name == 'Java') {
        dem += 1;
    }
});
// console.log(dem);
//KTRA COIN CUA TAT CA KHOA HOC CO BANG 0 KO
var isFree = courses.some(function(course){
    return course.coin === 0;
})
// console.log(isFree);
var listCourses = courses.filter(function(course, index) {
    return course.name === 'Ruby';
})
// console.log(listCourses);
// const sports = [
//     {
//         name: 'Bóng rổ',
//         like: 6
//     },
//     {
//         name: 'Bơi lội',
//         like: 5
//     },
//     {
//         name: 'Bóng đá',
//         like: 10
//     },
// ]
// function getMostFavoriteSport(array) {
//     return listSports = array.filter(function(sport, index) {
//         return sport.like > 5;
//     })
// }
// console.log(getMostFavoriteSport(sports)) 
var newCourses = courses.map(function(course) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`
    }
})
// console.log(newCourses);
// var totalCoins = courses.reduce(function(accumulator,currentValue) {
//     return accumulator + currentValue.coin;
// },0);
// console.log(totalCoins);
Array.prototype.filter2 = function(callBack) {
    var output = [];
    for (var i in this) {
        if(this.hasOwnProperty(i)){
            if(callBack(this[i], i, this)) {
                output.push(this[i]);
            }
        }
    }
    return output;
}
Array.prototype.some2 = function(cb) {
    for (var index in this) {
        if(this.hasOwnProperty(index)) {
            if(cb(this[index], index, this)) {
                return true;
            }
        }
    }
    return false;
}
Array.prototype.every2 = function(cb) {
    var out = true;
    for (var index in this) {
        if(this.hasOwnProperty(index)) {
            var result = cb(this[index], index, this);
            if(!result) {
                out = false;
                break;
            }
        }
    }
    return out;
}
var sports = [
    {
        name: 'Bơi lội',
        gold: 11,
        isWin: false
    },
    {
        name: 'Boxing',
        gold: 3,
        isWin: true
    },
    {
        name: 'Đạp xe',
        gold: 4,
        isWin: true
    },
    {
        name: 'Đấu kiếm',
        gold: 5,
        isWin: false
    },
]
var result = sports.every2(function(item) {
    return item.isWin;
})
// var htmls = sports.map(function(item) {
//     return `
//         <div>
//             <h1>${item.name}</h1>
//             <h1>Gold: ${item.gold}</h1>
//         </div>
//     `
// })
// console.log(htmls.join(''));
function getTotalGold(array) {
    return array.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue.gold;
    },0)
}
// Expected results:
// console.log(getTotalGold(sports)) // Output: 23
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]]
// console.log(depthArray);
var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
    return flatOutput.concat(depthItem);
}, []);
// console.log(flatArray);
//LAY RA CAC KHOA HOC VA DUA VAO MOT MANG MOI
var topics = [
    {
        topic: "Front-End",
        course: [
            {
                id: 1,
                title: "HTML-CSS"
            },
            {
                id: 2,
                title: "Javascript"
            }
        ]
    },
    {
        topic: "Back-End",
        course: [
            {   
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJS"
            }
        ]
    }
];
var newCourses = topics.reduce(function(courses, topicItem){
    return courses.concat(topicItem.course);
}, [])
// console.log(newCourses);
var htmls = newCourses.map(function(course){
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>
    `
});
// console.log(htmls.join(''));
var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
  function getRating(array) {
    return array.filter(function(item) {
      return item['Director'] == 'Christopher Nolan';
    })
  }
  function calculateRating(array) {
    var newArray = getRating(array);
    var averageTotal = newArray.reduce(function(totalRating, item){
        return totalRating + Number.parseFloat(item['imdbRating']);
    },0)
    return averageTotal / getRating(array).length;
  }
  // Expected results
//   console.log(calculateRating(watchList)); // Output: 8.675
//ARRAY TO OBJECT
function arrToObj(array) {
    return array.reduce(function(obOutput, item){
        obOutput[item[0]] = item[1];
        return obOutput;
    }, {})
}
// Expected results:
var arr = [
    ['name', 'ABC'],
    ['age', 18],
];
// console.log(arrToObj(arr)); // { name: 'ABC', age: 18 }
// Array.prototype.map2 = function(callBack) {
//     var arrayLength = this.length;
//     var arrOut = [];
//     for (var i = 0; i < arrayLength; i++) {
//         var result = callBack(this[i], i);
//         arrOut.push(result);
//     }
//     return arrOut;
// }
//VIET LAI PHUONG THUC forEach
Array.prototype.forEach2 = function(callBack) {
    var outArray = []
    for(var i in this) {
        if(this.hasOwnProperty(i)) {
            var result = callBack(this[i], i, this);
            outArray.push(result);
        }
        else continue;
    }
    return outArray;
}
// var courses = new Array(100);
// courses.push('Python', 'Java');
// //forEach
// var htmls = courses.map2(function(course, index) {
//     return `<h2>${course}</h2>`;
// })
// console.log(htmls.join(''));
// //forEach
// courses.forEach2(function(course, index, array) {
//     console.log(course, index, array);
// })
//=========================HTML DOM===============================
// var headingNode = document.querySelector('.box .heading-2:nth-child(2)');
// var boxNode = document.querySelector('.box-2');
// var headingElement = document.querySelector('h1');
// headingElement.textContent = 'Text Content';
// console.log(headingElement);
// headingElement.setAttribute('id', 'heading');
// console.log(boxNode.querySelectorAll('li'));
var boxElement = document.querySelector('.box');
// console.log(document.querySelector('.box p').innerText);
//=========btap=========================================
// var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']
// function render(courses) {
//     var htmls = courses.map(function(item) {
//         return `<li>${item}</li>`;
//     })
//     var ulElement = document.querySelector('ul');
//     ulElement.innerHTML = htmls.join('');
//     return ulElement;
// }
// render(courses);
//========================================================
// boxElement.classList.add('blue');
// setInterval(() => {
//     boxElement.classList.toggle('red');
// }, 1000); //chu nhap nhay
//============BAITAP======================================
// var divElements = document.querySelectorAll('div');
// divElements.forEach(function(item) {
//     return item.classList.add('box');
// })
// console.log(divElements);
//=======================================================
//=======DOM EVENT=====================================
// var h1Elements = document.querySelectorAll('h1');
// for (var i=0; i<h1Elements.length; i++) {
//     h1Elements[i].onclick = function(e) {
//         console.log(e.target.innerText);
//     }
// }
//=====================================================
//==LAY GIA TRI NHAP VAO CUA INPUT, SELECT, CHECKBOX=====================
// var inputElement = document.querySelector("input[type='text']");
// inputElement.onkeyup = function(e) {
//     console.log(e.target.value);
// }
// //=====================================================
// var inputElement2 = document.querySelector("input[type='checkbox']");
// inputElement2.onchange = function(e) {
//     console.log(e.target.value);
// }
// var selectElement = document.querySelector('select');
// selectElement.onchange = (e) => {
//     console.log(e.target.value);
// }
//=======================================================================
//===NGAN CHAN HANH VI MAC DINH =======================================
var aElements = document.links;
for (var i=0; i<aElements.length; i++) {
    aElements[i].onclick = function(e) {
        if(!e.target.href.startsWith('https://f8.edu.vn')) {
            e.preventDefault();
        }
    }
}
//=====================================================================
// var ulElement = document.querySelector('ul');
// ulElement.onmousedown = (e) => {
//     e.preventDefault();
// }
// ulElement.onclick = (e) => {
//     console.log(e.target);
// }
//=================JSON====================================
// var a = '{"name":"Tam Nhu", "age": 18}';
// console.log(JSON.parse(a));
// console.log(JSON.stringify({
//     name: "Nhu",
//     age: 20
// }))
//=========================================================
//===========CALLBACK HELL================================
// setTimeout(function() {
//     console.log(1);
//     setTimeout(function() {
//         console.log(2);
//         setTimeout(function() {
//             console.log(3);
//             setTimeout(function() {
//                 console.log(4);
//                 setTimeout(function() {
//                     console.log(5);
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)
var promise = new Promise(
    //Executor
    function(resolve, reject) {
        //Logic
        //Thanh cong: resolve()
        //That bai: reject()
        resolve();
    }
)
// promise
//     .then(function() {
//         return new Promise(function(resolve) {
//             setTimeout(resolve, 3000);
//         })
//     })
//     .then(function(data) {
//         console.log(1);
//     })
//     .catch(function() {
//         console.log("Failed");
//     })
//     .finally(function() {
//         console.log("Done");
//     })
//========================================================
// function sleep(ms) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, ms);
//     })
// }
// sleep(1000)
//     .then(function() {
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(2);
//         return new Promise(function(resolve, reject) {
//             reject("Co loi");
//         });
//     })
//     .then(function() {
//         console.log(3);
//         return sleep(1000);
//     })
//     .catch(function(err) {
//         console.log(err);
//     })
//=========================================================
var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve([1]);
    }, 1000);
})
var promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve([2, 3]);
    }, 2000);
})
Promise.all([promise1, promise2])
    .then(function(result) {
        var result1 = result[0];
        var result2 = result[1];
        // console.log(result1.concat(result2));
    })
//============THUC HANH==========================
var users = [
    {
        id: 1,
        name: "Nhu"
    },
    {
        id: 2,
        name: "Tam"
    },
    {
        id: 3,
        name: "Lam"
    }
]
var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Hi guys!'
    },
    {
        id: 2,
        user_id: 2,
        content: 'Xin chao'
    }
]
//Fake API
function getComments() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(comments);
        }, 1000)
    });
}
function getUsersByIds(userIds) {
    return new Promise(function(resolve, reject) {
        var result = users.filter(function(user) {
            return userIds.includes(user.id);
        })
        setTimeout(function() {
            resolve(result);
        }, 1000)
    })
}
getComments()
    .then(function(comments) {
        var userIds = comments.map(function(item) {
            return item['user_id'];
        })
        return getUsersByIds(userIds)
            .then(function(users) {
                return {
                    users: users,
                    comments: comments
                }
            })
    })
    .then(function(data) {
        var ulElements = document.getElementById('comments-block');
        var htmls = '';
        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user) {
                return user.id === comment.user_id;
            })
            htmls += `<li>${user.name}: ${comment.content}</li>`;
        })
        ulElements.innerHTML = htmls; 
    })


  
  
  




