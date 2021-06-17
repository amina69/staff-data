function password() {
var p1 = (document.querySelector(".input0").value);
    
if (p1 === 'test123') {
    window.open('index1.html', '_self');
} else{
    alert("The passpord is not in existence");
}

}


function data() {
    var dataBase = [
        {
        Password: '000',
        id: 1,
        image: "<img alt='student' src='dp.jpg' height= '400px'/>",
        name: 'Amina Sheriff',
        staffNo: '001',
        rank: 'RANK: Officer, IT Production',
        reporting: 'REPORTING TO: Assistant manager, IT Production & Customer Service',
        cv: "<img alt='cv' src='CV.jpg' height= '400px'/>",
        certificates: "<img alt='certificate' src='CERT.jpg' width= '200px'/>",
        certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '200px'/>",
        ids: "<img alt='ids' src='NIN.jpg' height= '200px'/>"
        },

        {
            Password: '000',
            id: 2,
            image: "<img alt='student' src='adeola.jpg' height= '400px'/>",
            name: 'Adeola Priscilia',
            staffNo: '002',
            rank: 'RANK: Officer, IT Production',
            reporting: 'REPORTING TO: Assistant manager, IT Production & Customer Service',
            cv: "<img alt='cv' src='CV.jpg' height= '400px'/>",
            certificates: "<img alt='certificate' src='CERT.jpg' width= '200px'/>",
            certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '200px'/>",
            ids: "<img alt='ids' src='NIN.jpg' height= '200px'/>"
            },

        {
            Password: '000',
            id: 3,
            image: "<img alt='student' src='Hameeda.jpg' height= '400px'/>",
            name: 'Hameeda Salman',
            staffNo: '003',
            rank: 'RANK: Officer, IT Production',
            reporting: 'REPORTING TO: Assistant manager, IT Production & Customer Service',
            cv: "<img alt='cv' src='CV.jpg' height= '400px'/>",
            certificates: "<img alt='certificate' src='CERT.jpg' width= '200px'/>",
            certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '200px'/>",
            ids: "<img alt='ids' src='NIN.jpg' height= '200px'/>"
            },

        {
            Password: '000',
            id: 4,
            image: "<img alt='student' src='Ayo.jpg' height= '400px'/>",
            name: 'Ayomide David AJAYI',
            staffNo: '004',
            rank: 'RANK: Officer, IT Production',
            reporting: 'REPORTING TO: Assistant manager, IT Production & Customer Service',
            cv: "<img alt='cv' src='CV.jpg' height= '400px'/>",
            certificates: "<img alt='certificate' src='CERT.jpg' width= '200px'/>",
            certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '200px'/>",
            ids: "<img alt='ids' src='NIN.jpg' height= '200px'/>"
            },

        {
            Password: '000',
            id: 5,
            image: "<img alt='student' src='tomi.jpg' height= '400px'/>",
            name: 'Tomilola Gbolahan',
            staffNo: '005',
            rank: 'RANK: Media Officer',
            reporting: 'REPORTING TO: General Manager, Human Resources',
            cv: "<img alt='cv' src='CV.jpg' height= '400px'/>",
            certificates: "<img alt='certificate' src='CERT.jpg' width= '200px'/>",
            certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '200px'/>",
            ids: "<img alt='ids' src='NIN.jpg' height= '200px'/>"
            },

            {
                Password: '000',
                id: 6,
                image: "<img alt='student' src='barakat.jpg' height= '400px'/>",
                name: 'Barakat Owolabi',
                staffNo: '006',
                rank: 'RANK: EA / Personal Assistant',
                reporting: 'REPORTING TO: CEO',
                cv: "<img alt='cv' src='CV.jpg' height= '400px'/>",
                certificates: "<img alt='certificate' src='CERT.jpg' width= '200px'/>",
                certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '200px'/>",
                ids: "<img alt='ids' src='NIN.jpg' height= '200px'/>"
                }
    ];

    


        var v1 = (document.querySelector("#staffId").value);
        document.querySelector("#result5").addEventListener("mouseover", large);
        var check;
        var check1;
        var check2;
        var check3;
        var check4;
        var title;
        var check5;
        var check6;
        var check6a;
        var check7;




    for (let i = 0; i < dataBase.length; i++) {
        var allData = dataBase;

        if (v1 === dataBase[i].staffNo) {
            check = dataBase[i].image
            check1 = dataBase[i].name
            check2 = 'STAFF NO: ' + dataBase[i].staffNo
            check3 = dataBase[i].rank
            check4 = dataBase[i].reporting
            title = 'UPLOADED DOUCUMENTS'
            check5 = dataBase[i].cv
            check6 = dataBase[i].certificates
            check6a = dataBase[i].certificates2
            check7 = dataBase[i].ids
        } else if (v1 > dataBase.length){
            check = 'STAFF ID IS INVALID'
            check1 = ''
            check2 = ''
            check3 = ''
            check4 = ''
            title = ''
            check5 = ''
            check6 = ''
            check6a = ''
            check7 = ''      
        } else if (v1 === ''){
            check = 'INPUT FIELD IS EMPTY!'
            check1 = ''
            check2 = ''
            check3 = ''
            check4 = ''
            title = ''
            check5 = ''
            check6 = ''
            check6a = ''
            check7 = ''
              
        }



    }

    
    function large() {
        var dataBase = [
            {
            Password: '000',
            id: 1,
            image: "<img alt='student' src='dp.jpg' height= '400px'/>",
            name: 'Amina Sheriff',
            staffNo: '001',
            rank: 'RANK: Officer, IT Production',
            reporting: 'REPORTING TO: Assistant manager, IT Production & Customer Service',
            cv: "<img alt='cv' src='CV.jpg' height= '550px'/>",
            certificates: "<img alt='certificate' src='CERT.jpg' width= '200px'/>",
            certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '200px'/>",
            ids: "<img alt='ids' src='NIN.jpg' height= '200px'/>"
            },
    
            {
      
                Password: '000',
                id: 2,
                image: "<img alt='student' src='adeola.jpg' height= '400px'/>",
                name: 'Adeola Priscilia',
                staffNo: '002',
                rank: 'RANK: Officer, IT Production',
                reporting: 'REPORTING TO: Assistant manager, IT Production & Customer Service',
                cv: "<img alt='cv' src='CV.jpg' height= '550pxpx'/>",
                certificates: "<img alt='certificate' src='CERT.jpg' width= '200px'/>",
                certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '200px'/>",
                ids: "<img alt='ids' src='NIN.jpg' height= '200px'/>"
                },
    
            {
                Password: '000',
                id: 3,
                image: "<img alt='student' src='Hameeda.jpg' height= '400px'/>",
                name: 'Hameeda Salman',
                staffNo: '003',
                rank: 'RANK: Officer, IT Production',
                reporting: 'REPORTING TO: Assistant manager, IT Production & Customer Service',
                cv: "<img alt='cv' src='CV.jpg' height= '550pxpx'/>",
                certificates: "<img alt='certificate' src='CERT.jpg' width= '200px'/>",
                certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '200px'/>",
                ids: "<img alt='ids' src='NIN.jpg' height= '200px'/>"
                },
    
            {
                Password: '000',
                id: 4,
                image: "<img alt='student' src='Ayo.jpg' height= '400px'/>",
                name: 'Ayomide David AJAYI',
                staffNo: '004',
                rank: 'RANK: Officer, IT Production',
                reporting: 'REPORTING TO: Assistant manager, IT Production & Customer Service',
                cv: "<img alt='cv' src='CV.jpg' height= '550px'/>",
                certificates: "<img alt='certificate' src='CERT.jpg' width= '200px'/>",
                certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '200px'/>",
                ids: "<img alt='ids' src='NIN.jpg' height= '200px'/>"
                },
    
            {
                Password: '000',
                id: 5,
                image: "<img alt='student' src='tomi.jpg' height= '400px'/>",
                name: 'Tomilola Gbolahan',
                staffNo: '005',
                rank: 'RANK: Media Officer',
                reporting: 'REPORTING TO: General Manager, Human Resources',
                cv: "<img alt='cv' src='CV.jpg' height= '550px'/>",
                certificates: "<img alt='certificate' src='CERT.jpg' width= '200px'/>",
                certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '200px'/>",
                ids: "<img alt='ids' src='NIN.jpg' height= '200px'/>"
                },
    
                {
                    Password: '000',
                    id: 6,
                    image: "<img alt='student' src='barakat.jpg' height= '400px'/>",
                    name: 'Barakat Owolabi',
                    staffNo: '006',
                    rank: 'RANK: EA / Personal Assistant',
                    reporting: 'REPORTING TO: CEO',
                    cv: "<img alt='cv' src='CV.jpg' height= '550px'/>",
                    certificates: "<img alt='certificate' src='CERT.jpg' width= '200px'/>",
                    certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '200px'/>",
                    ids: "<img alt='ids' src='NIN.jpg' height= '200px'/>"
                    }
        ];
    
    
        var v1 = (document.querySelector("#staffId").value);
        var check;
        var check1;
        var check2;
        var check3;
        var check4;
        var check5;
        var check6;
        var check6a;
        var check7;




    for (let i = 0; i < dataBase.length; i++) {
        var allData = dataBase;

        if (v1 === dataBase[i].staffNo) {
            check = dataBase[i].image
            check1 = dataBase[i].name
            check2 = 'STAFF NO: ' + dataBase[i].staffNo
            check3 = dataBase[i].rank
            check4 = dataBase[i].reporting
            title1 = 'UPLOADED DOUCUMENTS'
            check5 = dataBase[i].cv
            check6 = dataBase[i].certificates
            check6a = dataBase[i].certificates2
            check7 = dataBase[i].ids
        } else if (v1 > dataBase.length){
            check = 'STAFF ID IS INVALID'
            check1 = ''
            check2 = ''
            check3 = ''
            check4 = ''
            check5 = ''
            check6 = ''
            check6a = ''
            check7 = ''      
        } else if (v1 === ''){
            check = 'INPUT FIELD IS EMPTY!'
            check1 = ''
            check2 = ''
            check3 = ''
            check4 = ''
            check5 = ''
            check6 = ''
            check6a = ''
            check7 = ''
                  
            }
        
    }

    document.querySelector("#result0").innerHTML = check;
    document.querySelector("#result1").innerHTML = check1;
    document.querySelector("#result2").innerHTML = check2;
    document.querySelector("#result3").innerHTML = check3;
    document.querySelector("#result4").innerHTML = check4;
    document.querySelector("#result5").innerHTML = check5;
    document.querySelector("#result6").innerHTML = check6;
    document.querySelector("#result6a").innerHTML = check6a;
    document.querySelector("#result7").innerHTML = check7;
}


document.querySelector("#result6").addEventListener("mouseover", large1);
function large1() {
    var dataBase = [
        {
        Password: '000',
        id: 1,
        image: "<img alt='student' src='dp.jpg' height= '400px'/>",
        name: 'Amina Sheriff',
        staffNo: '001',
        rank: 'RANK: Officer, IT Production',
        reporting: 'REPORTING TO: Assistant manager, IT Production & Customer Service',
        cv: "<img alt='cv' src='CV.jpg' height= '400px'/>",
        certificates: "<img alt='certificate' src='CERT.jpg' width= '400px'/>",
        certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '200px'/>",
        ids: "<img alt='ids' src='NIN.jpg' height= '200px'/>"
        },

        {
            Password: '000',
            id: 2,
            image: "<img alt='student' src='adeola.jpg' height= '400px'/>",
            name: 'Adeola Priscilia',
            staffNo: '002',
            rank: 'RANK: Officer, IT Production',
            reporting: 'REPORTING TO: Assistant manager, IT Production & Customer Service',
            cv: "<img alt='cv' src='CV.jpg' height= '400px'/>",
            certificates: "<img alt='certificate' src='CERT.jpg' width= '400px'/>",
            certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '200px'/>",
            ids: "<img alt='ids' src='NIN.jpg' height= '200px'/>"
            },

        {
            Password: '000',
            id: 3,
            image: "<img alt='student' src='Hameeda.jpg' height= '400px'/>",
            name: 'Hameeda Salman',
            staffNo: '003',
            rank: 'RANK: Officer, IT Production',
            reporting: 'REPORTING TO: Assistant manager, IT Production & Customer Service',
            cv: "<img alt='cv' src='CV.jpg' height= '400px'/>",
            certificates: "<img alt='certificate' src='CERT.jpg' width= '400px'/>",
            certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '200px'/>",
            ids: "<img alt='ids' src='NIN.jpg' height= '200px'/>"
            },

        {
            Password: '000',
            id: 4,
            image: "<img alt='student' src='Ayo.jpg' height= '400px'/>",
            name: 'Ayomide David AJAYI',
            staffNo: '004',
            rank: 'RANK: Officer, IT Production',
            reporting: 'REPORTING TO: Assistant manager, IT Production & Customer Service',
            cv: "<img alt='cv' src='CV.jpg' height= '400px'/>",
            certificates: "<img alt='certificate' src='CERT.jpg' width= '400px'/>",
            certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '200px'/>",
            ids: "<img alt='ids' src='NIN.jpg' height= '200px'/>"
            },

        {
            Password: '000',
            id: 5,
            image: "<img alt='student' src='tomi.jpg' height= '400px'/>",
            name: 'Tomilola Gbolahan',
            staffNo: '005',
            rank: 'RANK: Media Officer',
            reporting: 'REPORTING TO: General Manager, Human Resources',
            cv: "<img alt='cv' src='CV.jpg' height= '400px'/>",
            certificates: "<img alt='certificate' src='CERT.jpg' width= '400px'/>",
            certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '200px'/>",
            ids: "<img alt='ids' src='NIN.jpg' height= '200px'/>"
            },

            {
                Password: '000',
                id: 6,
                image: "<img alt='student' src='barakat.jpg' height= '400px'/>",
                name: 'Barakat Owolabi',
                staffNo: '006',
                rank: 'RANK: EA / Personal Assistant',
                reporting: 'REPORTING TO: CEO',
                cv: "<img alt='cv' src='CV.jpg' height= '400px'/>",
                certificates: "<img alt='certificate' src='CERT.jpg' width= '400px'/>",
                certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '200px'/>",
                ids: "<img alt='ids' src='NIN.jpg' height= '200px'/>"
                }
    ];


        var v1 = (document.querySelector("#staffId").value);
        var check;
        var check1;
        var check2;
        var check3;
        var check4;
        var check5;
        var check6;
        var check6a;
        var check7;




    for (let i = 0; i < dataBase.length; i++) {
        var allData = dataBase;

        if (v1 === dataBase[i].staffNo) {
            check = dataBase[i].image
            check1 = dataBase[i].name
            check2 = 'STAFF NO: ' + dataBase[i].staffNo
            check3 = dataBase[i].rank
            check4 = dataBase[i].reporting
            title1 = 'UPLOADED DOUCUMENTS'
            check5 = dataBase[i].cv
            check6 = dataBase[i].certificates
            check6a = dataBase[i].certificates2
            check7 = dataBase[i].ids
        } else if (v1 > dataBase.length){
            check = 'STAFF ID IS INVALID'
            check1 = ''
            check2 = ''
            check3 = ''
            check4 = ''
            check5 = ''
            check6 = ''
            check6a = ''
            check7 = ''      
        } else if (v1 === ''){
            check = 'INPUT FIELD IS EMPTY!'
            check1 = ''
            check2 = ''
            check3 = ''
            check4 = ''
            check5 = ''
            check6 = ''
            check6a = ''
            check7 = ''
              
        }
    
}

    document.querySelector("#result0").innerHTML = check;
    document.querySelector("#result1").innerHTML = check1;
    document.querySelector("#result2").innerHTML = check2;
    document.querySelector("#result3").innerHTML = check3;
    document.querySelector("#result4").innerHTML = check4;
    document.querySelector("#result5").innerHTML = check5;
    document.querySelector("#result6").innerHTML = check6;
    document.querySelector("#result6a").innerHTML = check6a;
    document.querySelector("#result7").innerHTML = check7;
}


document.querySelector("#result6a").addEventListener("mouseover", large2);
function large2() {
    var dataBase = [
        {
        Password: '000',
        id: 1,
        image: "<img alt='student' src='dp.jpg' height= '400px'/>",
        name: 'Amina Sheriff',
        staffNo: '001',
        rank: 'RANK: Officer, IT Production',
        reporting: 'REPORTING TO: Assistant manager, IT Production & Customer Service',
        cv: "<img alt='cv' src='CV.jpg' height= '400px'/>",
        certificates: "<img alt='certificate' src='CERT.jpg' width= '200px'/>",
        certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '250px'/>",
        ids: "<img alt='ids' src='NIN.jpg' height= '200px'/>"
        },

        {
            Password: '000',
            id: 2,
            image: "<img alt='student' src='adeola.jpg' height= '400px'/>",
            name: 'Adeola Priscilia',
            staffNo: '002',
            rank: 'RANK: Officer, IT Production',
            reporting: 'REPORTING TO: Assistant manager, IT Production & Customer Service',
            cv: "<img alt='cv' src='CV.jpg' height= '400px'/>",
            certificates: "<img alt='certificate' src='CERT.jpg' width= '200px'/>",
            certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '250px'/>",
            ids: "<img alt='ids' src='NIN.jpg' height= '200px'/>"
            },

        {
            Password: '000',
            id: 3,
            image: "<img alt='student' src='Hameeda.jpg' height= '400px'/>",
            name: 'Hameeda Salman',
            staffNo: '003',
            rank: 'RANK: Officer, IT Production',
            reporting: 'REPORTING TO: Assistant manager, IT Production & Customer Service',
            cv: "<img alt='cv' src='CV.jpg' height= '400px'/>",
            certificates: "<img alt='certificate' src='CERT.jpg' width= '200px'/>",
            certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '250px'/>",
            ids: "<img alt='ids' src='NIN.jpg' height= '200px'/>"
            },

        {
            Password: '000',
            id: 4,
            image: "<img alt='student' src='Ayo.jpg' height= '400px'/>",
            name: 'Ayomide David AJAYI',
            staffNo: '004',
            rank: 'RANK: Officer, IT Production',
            reporting: 'REPORTING TO: Assistant manager, IT Production & Customer Service',
            cv: "<img alt='cv' src='CV.jpg' height= '400px'/>",
            certificates: "<img alt='certificate' src='CERT.jpg' width= '200px'/>",
            certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '250px'/>",
            ids: "<img alt='ids' src='NIN.jpg' height= '200px'/>"
            },

        {
            Password: '000',
            id: 5,
            image: "<img alt='student' src='tomi.jpg' height= '400px'/>",
            name: 'Tomilola Gbolahan',
            staffNo: '005',
            rank: 'RANK: Media Officer',
            reporting: 'REPORTING TO: General Manager, Human Resources',
            cv: "<img alt='cv' src='CV.jpg' height= '400px'/>",
            certificates: "<img alt='certificate' src='CERT.jpg' width= '200px'/>",
            certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '250px'/>",
            ids: "<img alt='ids' src='NIN.jpg' height= '200px'/>"
            },

            {
                Password: '000',
                id: 6,
                image: "<img alt='student' src='barakat.jpg' height= '400px'/>",
                name: 'Barakat Owolabi',
                staffNo: '006',
                rank: 'RANK: EA / Personal Assistant',
                reporting: 'REPORTING TO: CEO',
                cv: "<img alt='cv' src='CV.jpg' height= '400px'/>",
                certificates: "<img alt='certificate' src='CERT.jpg' width= '200px'/>",
                certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '250px'/>",
                ids: "<img alt='ids' src='NIN.jpg' height= '200px'/>"
                }
    ];


        var v1 = (document.querySelector("#staffId").value);
        var check;
        var check1;
        var check2;
        var check3;
        var check4;
        var check5;
        var check6;
        var check6a;
        var check7;




    for (let i = 0; i < dataBase.length; i++) {
        var allData = dataBase;

        if (v1 === dataBase[i].staffNo) {
            check = dataBase[i].image
            check1 = dataBase[i].name
            check2 = 'STAFF NO: ' + dataBase[i].staffNo
            check3 = dataBase[i].rank
            check4 = dataBase[i].reporting
            title1 = 'UPLOADED DOUCUMENTS'
            check5 = dataBase[i].cv
            check6 = dataBase[i].certificates
            check6a = dataBase[i].certificates2
            check7 = dataBase[i].ids
        } else if (v1 > dataBase.length){
            check = 'STAFF ID IS INVALID'
            check1 = ''
            check2 = ''
            check3 = ''
            check4 = ''
            check5 = ''
            check6 = ''
            check6a = ''
            check7 = ''      
        } else if (v1 === ''){
            check = 'INPUT FIELD IS EMPTY!'
            check1 = ''
            check2 = ''
            check3 = ''
            check4 = ''
            check5 = ''
            check6 = ''
            check6a = ''
            check7 = ''
              
        }
    
}

    document.querySelector("#result0").innerHTML = check;
    document.querySelector("#result1").innerHTML = check1;
    document.querySelector("#result2").innerHTML = check2;
    document.querySelector("#result3").innerHTML = check3;
    document.querySelector("#result4").innerHTML = check4;
    document.querySelector("#result5").innerHTML = check5;
    document.querySelector("#result6").innerHTML = check6;
    document.querySelector("#result6a").innerHTML = check6a;
    document.querySelector("#result7").innerHTML = check7;
}


document.querySelector("#result7").addEventListener("mouseover", large3);
function large3() {
    var dataBase = [
        {
        Password: '000',
        id: 1,
        image: "<img alt='student' src='dp.jpg' height= '400px'/>",
        name: 'Amina Sheriff',
        staffNo: '001',
        rank: 'RANK: Officer, IT Production',
        reporting: 'REPORTING TO: Assistant manager, IT Production & Customer Service',
        cv: "<img alt='cv' src='CV.jpg' height= '400px'/>",
        certificates: "<img alt='certificate' src='CERT.jpg' width= '200px'/>",
        certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '200px'/>",
        ids: "<img alt='ids' src='NIN.jpg' height= '210px'/>"
        },

        {
            Password: '000',
            id: 2,
            image: "<img alt='student' src='adeola.jpg' height= '400px'/>",
            name: 'Adeola Priscilia',
            staffNo: '002',
            rank: 'RANK: Officer, IT Production',
            reporting: 'REPORTING TO: Assistant manager, IT Production & Customer Service',
            cv: "<img alt='cv' src='CV.jpg' height= '400px'/>",
            certificates: "<img alt='certificate' src='CERT.jpg' width= '200px'/>",
            certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '200px'/>",
            ids: "<img alt='ids' src='NIN.jpg' height= '210px'/>"
            },

        {
            Password: '000',
            id: 3,
            image: "<img alt='student' src='Hameeda.jpg' height= '400px'/>",
            name: 'Hameeda Salman',
            staffNo: '003',
            rank: 'RANK: Officer, IT Production',
            reporting: 'REPORTING TO: Assistant manager, IT Production & Customer Service',
            cv: "<img alt='cv' src='CV.jpg' height= '400px'/>",
            certificates: "<img alt='certificate' src='CERT.jpg' width= '200px'/>",
            certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '200px'/>",
            ids: "<img alt='ids' src='NIN.jpg' height= '210px'/>"
            },

        {
            Password: '000',
            id: 4,
            image: "<img alt='student' src='Ayo.jpg' height= '400px'/>",
            name: 'Ayomide David AJAYI',
            staffNo: '004',
            rank: 'RANK: Officer, IT Production',
            reporting: 'REPORTING TO: Assistant manager, IT Production & Customer Service',
            cv: "<img alt='cv' src='CV.jpg' height= '400px'/>",
            certificates: "<img alt='certificate' src='CERT.jpg' width= '200px'/>",
            certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '200px'/>",
            ids: "<img alt='ids' src='NIN.jpg' height= '210px'/>"
            },

        {
            Password: '000',
            id: 5,
            image: "<img alt='student' src='tomi.jpg' height= '400px'/>",
            name: 'Tomilola Gbolahan',
            staffNo: '005',
            rank: 'RANK: Media Officer',
            reporting: 'REPORTING TO: General Manager, Human Resources',
            cv: "<img alt='cv' src='CV.jpg' height= '400px'/>",
            certificates: "<img alt='certificate' src='CERT.jpg' width= '200px'/>",
            certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '200px'/>",
            ids: "<img alt='ids' src='NIN.jpg' height= '210px'/>"
            },

            {
                Password: '000',
                id: 6,
                image: "<img alt='student' src='barakat.jpg' height= '400px'/>",
                name: 'Barakat Owolabi',
                staffNo: '006',
                rank: 'RANK: EA / Personal Assistant',
                reporting: 'REPORTING TO: CEO',
                cv: "<img alt='cv' src='CV.jpg' height= '400px'/>",
                certificates: "<img alt='certificate' src='CERT.jpg' width= '200px'/>",
                certificates2: "<img alt='certificate2' src='CERT COMP.jpg' height= '200px'/>",
                ids: "<img alt='ids' src='NIN.jpg' height= '210px'/>"
                }
    ];


        var v1 = (document.querySelector("#staffId").value);
        var check;
        var check1;
        var check2;
        var check3;
        var check4;
        var check5;
        var check6;
        var check6a;
        var check7;




    for (let i = 0; i < dataBase.length; i++) {
        var allData = dataBase;

        if (v1 === dataBase[i].staffNo) {
            check = dataBase[i].image
            check1 = dataBase[i].name
            check2 = 'STAFF NO: ' + dataBase[i].staffNo
            check3 = dataBase[i].rank
            check4 = dataBase[i].reporting
            check5 = dataBase[i].cv
            check6 = dataBase[i].certificates
            check6a = dataBase[i].certificates2
            check7 = dataBase[i].ids
        } else if (v1 > dataBase.length){
            check = 'STAFF ID IS INVALID'
            check1 = ''
            check2 = ''
            check3 = ''
            check4 = ''
            check5 = ''
            check6 = ''
            check6a = ''
            check7 = ''      
        } else if (v1 === ''){
            check = 'INPUT FIELD IS EMPTY!'
            check1 = ''
            check2 = ''
            check3 = ''
            check4 = ''
            check5 = ''
            check6 = ''
            check6a = ''
            check7 = ''
              
        }
    
}

    document.querySelector("#result0").innerHTML = check;
    document.querySelector("#result1").innerHTML = check1;
    document.querySelector("#result2").innerHTML = check2;
    document.querySelector("#result3").innerHTML = check3;
    document.querySelector("#result4").innerHTML = check4;
    document.querySelector("#result5").innerHTML = check5;
    document.querySelector("#result6").innerHTML = check6;
    document.querySelector("#result6a").innerHTML = check6a;
    document.querySelector("#result7").innerHTML = check7;
}

    document.querySelector("#result0").innerHTML = check;
    document.querySelector("#result1").innerHTML = check1;
    document.querySelector("#result2").innerHTML = check2;
    document.querySelector("#result3").innerHTML = check3;
    document.querySelector("#result4").innerHTML = check4;
    document.querySelector("#title").innerHTML = title;
    document.querySelector("#result5").innerHTML = check5;
    document.querySelector("#result6").innerHTML = check6;
    document.querySelector("#result6a").innerHTML = check6a;
    document.querySelector("#result7").innerHTML = check7;
    
}




    



/*if (v1 === dataBase[0].staffNo) {
        check = dataBase[0].image
        check1 = dataBase[0].name
        check2 = dataBase[0].staffNo
        check3 = dataBase[0].rank
        check4 = dataBase[0].reporting
        check5 = dataBase[0].cv
        check6 = dataBase[0].certificates
    } else if (v1 === dataBase[1].staffNo) {
        check = dataBase[1].image
        check1 = dataBase[1].name
        check2 = dataBase[1].staffNo
        check3 = dataBase[1].rank
        check4 = dataBase[1].reporting
        check5 = dataBase[1].cv
        check6 = dataBase[1].certificates
    } else if (v1 === dataBase[2].staffNo) {
        check = dataBase[2].image
        check1 = dataBase[2].name
        check2 = dataBase[2].staffNo
        check3 = dataBase[2].rank
        check4 = dataBase[2].reporting
        check5 = dataBase[2].cv
        check6 = dataBase[2].certificates
    } else if (v1 === dataBase[3].staffNo) {
        check = dataBase[3].image
        check1 = dataBase[3].name
        check2 = dataBase[3].staffNo
        check3 = dataBase[3].rank
        check4 = dataBase[3].reporting
        check5 = dataBase[3].cv
        check6 = dataBase[3].certificates
    } else if (v1 === dataBase[4].staffNo) {
        check = dataBase[4].image
        check1 = dataBase[4].name
        check2 = dataBase[4].staffNo
        check3 = dataBase[4].rank
        check4 = dataBase[4].reporting
        check5 = dataBase[4].cv
        check6 = dataBase[4].certificates
    } else if (v1 === dataBase[5].staffNo) {
        check = dataBase[5].image
        check1 = dataBase[5].name
        check2 = dataBase[5].staffNo
        check3 = dataBase[5].rank
        check4 = dataBase[5].reporting
        check5 = dataBase[5].cv
        check6 = dataBase[5].certificates
    }*/