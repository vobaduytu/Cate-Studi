function add() {
  let seach = document.getElementById("seach").value;
  if (isNullOrEmpty(seach)) {
    window.alert(`xin mời nhập tên sản phẩm bạn muốn tìm`);
    return;
  }
}

function isNullOrEmpty(str) {
  return str == null || str.trim() == "";
}
