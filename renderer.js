//pyk bank_type, page_type obj 구분하기, 추후 .json 파일로 따로 떼보기
const json_data = {
    "bank_type":
    [
        {
            "id":"kakao_bank",
            "name":"카카오뱅크",
            "event_page":"https://www.kakaobank.com/events",
            "product_page":"https://www.kakaobank.com/products/withdrawal"
        },
        {
            "id":"woori_bank",
            "name":"우리은행",
            "event_page":"https://spot.wooribank.com/pot/Dream?withyou=EVEVT0001",
            "product_page":"https://spot.wooribank.com/pot/Dream?withyou=po"
        },
        {
            "id":"shinhan_bank",
            "name":"신한은행",
            "event_page":"https://www.shinhan.com/hpe/index.jsp#902304010000",
            "product_page":"https://bank.shinhan.com/index.jsp#020001000000"
        },
        {
            "id":"kb_bank",
            "name":"KB국민은행",
            "event_page":"https://omoney.kbstar.com/quics?page=oevent&QSL=F#loading",
            "product_page":"https://obank1.kbstar.com/quics?page=C030037"
        }
    ],

    "page_type":
    [
        {
            "id":"event_page",
            "name":"이벤트 페이지",
        },
        {
            "id":"product_page",
            "name":"상품정보 페이지",
        }
    ]
}

var g_cur_bank_type;
var g_cur_page_type;

document.addEventListener("DOMContentLoaded", function()
{
    OnDomLoaded();
});
    
function OnDomLoaded()
{
    Init();
    SetBankTypeUI();
    SetPageTypeUI();    
    //SetBankPageView();
}

function Init()
{
    if(json_data.bank_type.length != 0)
    {
        g_cur_bank_type = json_data.bank_type[0].id;
    }

    if(json_data.page_type.length != 0)
    {
        g_cur_page_type = json_data.page_type[0].id;
    }
}

function SetBankTypeUI()
{
    var html = "";
    for (var i = 0; i < json_data.bank_type.length; ++i) 
    {
        html += "<option value=" + json_data.bank_type[i].id + ">" + json_data.bank_type[i].name + "</option>";
    }

    var obj = document.querySelector('#bank_type');
    document.querySelector('#bank_type').innerHTML = html;
}

function SetPageTypeUI()
{
    var html = "";
    for (var i = 0; i < json_data.page_type.length; ++i) 
    {
        html += '<input type="radio" name="page_type" id=' + json_data.page_type[i].id + ' onclick=OnClickPageType("' + json_data.page_type[i].id +'")>' + 
            '<label for=' + json_data.page_type[i].id + '>' + json_data.page_type[i].name + '</label>';
    }

    document.querySelector('#page_type').innerHTML = html;
}

function SetBankPageView()
{
    for (var i = 0; i < json_data.bank_type.length; ++i) 
    {
        if(json_data.bank_type[i].id == g_cur_bank_type)
        {
            if(g_cur_page_type == 'event_page')
            {
                document.querySelector('#bank_page_view').src = json_data.bank_type[i].event_page;
                //alert(json_data.bank_type[i].event_page);
            }
            else if(g_cur_page_type == 'product_page')
            {
                document.querySelector('#bank_page_view').src = json_data.bank_type[i].product_page;
                //alert(json_data.bank_type[i].product_page);
            }
        }
    }
}

function OnChangeBankType()
{
    var element = document.querySelector('#bank_type');   
    g_cur_bank_type = element.value;
    SetBankPageView();
    //alert(element.value);
}

function OnClickPageType(page_type)
{
    g_cur_page_type = page_type;
    SetBankPageView();
    //alert(page_type);
}

// function loadJson() 
// {
// 	var fileReader = new XMLHttpRequest();
//     fileReader.open('GET', 'bank_data.json', true);    
//     fileReader.onload = function() 
//     {
//         if (fileReader.status == 200) 
//         {
//             var json_data = JSON.parse(fileReader.responseText);
//             alert(json_data.bankType[0].name);
// 			//var data = json_data.data;
// 		}
// 	};
// 	fileReader.send(null);
// }

// loadJson();

// import * as data from './bank_data.json';
// const {name} = data;

//fetch('./bank_data.json').then(response => {
// fetch('https://github.com/gemnagame/BankEvent/blob/master/bank_data.json').then(response => {    
//     return response.json();
//   }).then(data => {
//     // Work with your JSON data here..
//     console.log(data);
//   }).catch(err => {
//     // What do when the request fails
//     console.log('The request failed!'); 
//   });


// function processFile(file) {
//     var reader = new FileReader();
 
//     reader.onload = function () {
//         output.innerText = reader.result;
//     };
 
//     reader.readAsText(file, /* optional */ "euc-kr");
// }

// processFile(file)