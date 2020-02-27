
var BANK_TYPE = {
    KAKAO_BANK : 1,
    WOORI_BANK : 2,
    SHINHAN_BANK : 3,
    KB_BANK : 4
    //NONGHYUP_BANK : 5
}

var PAGE_TYPE = {
    EVENT_PAGE : 1,
    PRODUCT_PAGE : 2
};

var g_bank_type = BANK_TYPE.KAKAO_BANK;
var g_page_type = PAGE_TYPE.EVENT_PAGE;//전역변수인데 클래스로 변경?? 구조 고민 ㄱㄱ

function OnChangeBankType() {
    var element = document.querySelector('#bank_type');
    var bankType = element.value.toUpperCase();
  
    ChangeBankType(BANK_TYPE[bankType]);
}

function ChangeBankType(bank_type) {
    g_bank_type = bank_type;
    alert(g_bank_type);
}

function OnClickPageType(page_type) {
    g_page_type = page_type;
    alert(g_page_type);
}
