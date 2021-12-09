function checkFirstName(){
    var firstName=document.getElementById("Contact__firstname").value;
    if (firstName==""){
        alert("bạn không được để trống tên ");
        checkFirstName.select();
        return false;
     } 
     if (document.getElementById("Contact__lastname").value==null || document.getElementById("Contact__lastname").value==""){
         alert("bạn không được để trống họ ");
        checkLastName.select();
        return false;
     } 
}
// function checkLastName(){
//      if (document.getElementById("Contact__lastname").value==null || document.getElementById("Contact__lastname").value==""){
//          alert("bạn không được để trống họ ");
//         checkLastName.select();
//         return false;
//      }
// }
function checkEmail(){
    // var checkEmil = document.getElementById("Contact__email").value;
    // var reg_mail = /^[A-Za-z0-9]+([_\.\-]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/;
    // if (reg_mail.test(checkEmail)){
    //     alert("đia chỉ Email không hợp lệ");
    //     return false;
    // }
//     else
//          alert("địa chỉ Email hợp lệ");
//             if(id == 'email'){
//                 if(reg_mail.test(value) == false){ 
//                     span.innerHTML ='Email không hợp lệ (ví dụ: abc@gmail.com)';
//                     }
//                 var email =value;
//                 }
// }
function check(){
    checkFirstName();
    checkLastName();
    checkEmail();
}