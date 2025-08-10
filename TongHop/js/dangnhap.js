// Hiển thị dialog kiểu Google
function showGoogleDialog(message) {
    var dialog = document.getElementById('googleDialog');
    var content = document.getElementById('dialogContent');
    if (content) content.innerHTML = message;
    if (dialog) dialog.showModal();
}

document.addEventListener('DOMContentLoaded', function() {
    var dialog = document.getElementById('googleDialog');
    var closeBtn = document.getElementById('closeDialogBtn');
    if (dialog && closeBtn) {
        closeBtn.addEventListener('click', function() {
            dialog.close();
        });
    }
});
function NhapLai() {
    document.getElementById('txtUser').value = '';
    document.getElementById('txtPass').value = '';
    document.getElementById('lblThongBao').innerHTML = '';
    document.getElementById('txtUser').focus();
}
function KiemTraNhapLieu() {
    var txtUser = document.getElementById('txtUser');
    var txtPass = document.getElementById('txtPass');
    var lblThongBao = document.getElementById('lblThongBao');
    if(txtUser.value == "") {
        lblThongBao.innerText = "Bạn chưa nhập tên người dùng!";
        txtUser.focus();
        return false;
    }
    if(txtPass.value == "") {
        lblThongBao.innerText = "Bạn chưa nhập mật khẩu!";
        txtPass.focus();
        return false;
    }
    if(txtUser.value == "My Hanh" && txtPass.value == "123456") {
        lblThongBao.innerHTML = "Chào bạn! <b>" + txtUser.value + "</b>";
        alert("Chào bạn " + txtUser.value);
        return false;
    } else {
        lblThongBao.innerHTML = "Thông tin đăng nhập không hợp lệ!";
        txtUser.select();
        return false;
    }
}
