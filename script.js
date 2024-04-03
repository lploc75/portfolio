// Lấy danh sách tất cả các ảnh có class "img-zoomable"
const zoomableImages = document.querySelectorAll('.img-zoomable');

// Định nghĩa hàm để thay đổi con trỏ chuột khi di chuột vào ảnh
function changeCursorToZoomIn(event) {
    event.target.style.cursor = 'zoom-in';
}

// Định nghĩa hàm để đổi lại con trỏ chuột khi di chuột ra khỏi ảnh
function changeCursorToDefault(event) {
    event.target.style.cursor = 'default';
}

// Lặp qua danh sách các ảnh và thêm sự kiện khi di chuột vào và ra khỏi ảnh
zoomableImages.forEach(image => {
    image.addEventListener('mouseenter', changeCursorToZoomIn);
    image.addEventListener('mouseleave', changeCursorToDefault);
});
