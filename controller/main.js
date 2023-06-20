function getElement(selector) {
    return document.querySelector(selector);
}
// Validation
function isEmptyForm() {
    var isEmpty = false;
    var domtknv = getElement('#tknv')
    var domName = getElement('#name')
    var domEmail = getElement('#email')
    var domPassword = getElement('#password')
    var domDatepicker = getElement('#datepicker')
    var domGioLam = getElement('#gioLam')
    var domLuongCB = getElement('#luongCB')
    if (domtknv.value.trim() === '') {
        getElement('#tbTKNV').innerHTML = 'Không được bỏ trống dữ liệu này';
        getElement('#tbTKNV').style.display = 'block';
        domtknv.focus();    
        isEmpty = false;
    }else{
        isEmpty = true;
    }
    
    if (domName.value.trim() === '') {
        getElement('#tbTen').innerHTML = 'Không được bỏ trống dữ liệu này';
        getElement('#tbTen').style.display = 'block';
        domName.focus();
        isEmpty = false;
    }else{
        isEmpty = true;
    }

    if (domEmail.value.trim() === '') {
        getElement('#tbEmail').innerHTML = 'Không được bỏ trống dữ liệu này';
        getElement('#tbEmail').style.display = 'block';
        domEmail.focus();
        isEmpty = false;
    }else{
        isEmpty = true;
    }

    if (domPassword.value.trim() === '') {
        getElement('#tbMatKhau').innerHTML = 'Không được bỏ trống dữ liệu này';
        getElement('#tbMatKhau').style.display = 'block';
        domPassword.focus();
        isEmpty = false;
    }else{
        isEmpty = true;
    }

    if (domDatepicker.value.trim() === '') {
        getElement('#tbNgay').innerHTML = 'Không được bỏ trống dữ liệu này';
        getElement('#tbNgay').style.display = 'block';
        domDatepicker.focus();
        isEmpty = false;
    }else{
        isEmpty = true;
    }

    if (domGioLam.value.trim() === '') {
        getElement('#tbGiolam').innerHTML = 'Không được bỏ trống dữ liệu này';
        getElement('#tbGiolam').style.display = 'block';
        domGioLam.focus();
        isEmpty = false;
    }else{
        isEmpty = true;
    }

    if (domLuongCB.value.trim() === '') {
        getElement('#tbLuongCB').innerHTML = 'Không được bỏ trống dữ liệu này';
        getElement('#tbLuongCB').style.display = 'block';
        domLuongCB.focus();
        isEmpty = false;
    }else{
        isEmpty = true;
    }

    return isEmpty;
}

function checkValidatorForm() {
    var bool = false;
    
    var domtknv = getElement('#tknv')
    domtknv.onchange = function () {
        if (!(domtknv.value.length >= 4 && domtknv.value.length <= 6)) {
            getElement('#tbTKNV').innerHTML = 'Độ dài tài khoản từ 4 - 6';
            getElement('#tbTKNV').style.display = 'block';
            bool = false;
        } else {
            getElement('#tbTKNV').style.display = 'none';
        }
    }

    // Tên nhân viên phải là chữ, không để trống
    var domName = getElement('#name')
    domName.onchange = function () {
        const regex = /[0-9]/;
        if (domName.value.match(regex)) {
            bool = false;
            getElement('#tbTen').innerHTML = 'Tên nhân viên phải là chữ, không chứa số';
            getElement('#tbTen').style.display = 'block';
        } else {
            getElement('#tbTen').style.display = 'none';
        }
    }

    // Email phải đúng định dạng, không để trống
    var domEmail = getElement('#email')
    domEmail.onchange = function () {
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        // console.log(regex.test(domEmail.value));
        if (!regex.test(domEmail.value) ) {
            bool = false;
            getElement('#tbEmail').innerHTML = 'Email không hợp lệ';
            getElement('#tbEmail').style.display = 'block';
        } else {
            getElement('#tbEmail').style.display = 'none';
        }
    }
    // Mật khẩu phải đúng định dạng, không để trống
    var domPassword = getElement('#password')
    domPassword.onchange = function () {
        var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/ ;
        // console.log(regex.test(domPassword.value) , domPassword.value.match(re) );
        console.log(domPassword.value);
        if (!regex.test(domPassword.value) || !(domPassword.value.length >= 6 && domPassword.value.length <= 10)) {
            bool = false;
            getElement('#tbMatKhau').innerHTML = 'Mật khẩu phải chứa 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)';
            getElement('#tbMatKhau').style.display = 'block';
        } else {
            getElement('#tbMatKhau').style.display = 'none';
        }
    }

    // ngày phải đúng định dạng, không để trống
    var domDay = getElement('#datepicker')
    domDay.onchange = function () {
        var regex = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/ ;
        // console.log(regex.test(domDay.value));
        if (!regex.test(domDay.value) ) {
            bool = false;
            getElement('#tbNgay').innerHTML = 'Định dạng ngày tháng năm không hợp lệ';
            getElement('#tbNgay').style.display = 'block';
        } else {
            getElement('#tbNgay').style.display = 'none';
        }
    }
    // ngày phải đúng định dạng, không để trống
    var domSalaryCB = getElement('#luongCB')

    domSalaryCB.onchange = function () {
        var salaryCB = parseInt(domSalaryCB.value)
        console.log("salaryCB: ", salaryCB);
        if (!(salaryCB >= 1000000 && salaryCB <= 20000000 ) ) {
            bool = false;
            getElement('#tbLuongCB').innerHTML = 'Lương cơ bản không hợp lệ ( 1 000 000 - 20 000 000 )';
            getElement('#tbLuongCB').style.display = 'block';
        } else {
            getElement('#tbLuongCB').style.display = 'none';
        }
    }


}
function getThongTinNV() {

    var _username = getElement('#tknv').value
    var _name = getElement('#name').value
    var _email = getElement('#email').value
    var _pass = getElement('#password').value
    var _workDay = getElement('#datepicker').value
    var _salary = +getElement('#luongCB').value
    var _office = getElement('#chucvu').value
    
    var _workTime = +getElement('#gioLam').value

    // tạo đối tượng sinh viên từ thông tin lấy từ user

    var employee = new Employee(
        _username, _pass, _name, _email, _workDay, _office, _salary, _workTime
    )

    return employee ;
}

var dsnv = new DSNV();
getLocalStorage()

function setLocalStorage() {
    var data = JSON.stringify(dsnv.arrNV)

    localStorage.setItem("DSNV", data)
}
getElement('#btnThem').onclick = function () {
    document.getElementById("myForm").reset();

    checkValidatorForm()
    
    var date = new Date();
    var DMY = date.getDay() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
    getElement('#datepicker').value = DMY;

}
function renderListEmployee() {
    var content = '';

    for (var i = 0; i < dsnv.arrNV.length; i++) {
        var employee = dsnv.arrNV[i];
        var valueOffice 
        if (employee.office === '1') {
            valueOffice = 'Sếp'
        }else if (employee.office === '2') {
            valueOffice = 'Trưởng phòng'
        }else if (employee.office === '3') {
            valueOffice = 'Nhân viên'
        }
        // console.log(valueOffice,'ágvjhbd');
        content += `<tr>
                        <td>${employee.username}</td>
                        <td>${employee.name}</td>
                        <td>${employee.email}</td>
                        <td>${employee.workDay}</td>
                        <td>${valueOffice}</td>
                        <td>${employee.calcTotalSalary(employee.office)}</td>
                        <td>${employee.calcRank()}</td>
                        <td>
                            <button id="edit" data-toggle="modal"
                            data-target="#myModal" onclick="editNV('${employee.username}')" class='btn btn-success mr-2'>
                                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                            </button>
                            <button  id="delete" onclick="deleteNV('${employee.username}')" class='btn btn-danger'>
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </td>
                    </tr> `;
    }
    var tbody = getElement('#tableDanhSach')
    tbody.innerHTML = content;
}
// get danh sách sinh viên từ localStorage
function getLocalStorage() {
    //B1: lấy data từ local
    var data = localStorage.getItem('DSNV') // null
    // console.log(data);
    if (data) {

        //B2: parse data về kiểu dữ liệu ban đầu
        var parseData = JSON.parse(data)

        // Tạo lại đối tượng sinhVien từ lớp đối SinhVien để lấy lại phương thức tinhDTB
        //B1: tạo mảng rỗng để lưu dssv
        var arr = []

        // B2: duyệt mảng đc lấy từ local
        for (var i = 0; i < parseData.length; i++) {
            var nv = parseData[i]
            // tạo lại đối tượng sv từ lớp đối tượng SV
            var employee = new Employee(
                nv.username,
                nv.pass,
                nv.name,
                nv.email,
                nv.workDay,
                nv.office,
                nv.salary,
                nv.workTime
            )
            // thêm sinhVien vào mảng arr
            arr.push(employee)
        }
        // gán giá trị cho mảng arrSV từ data lấy từ localStorage
        dsnv.arrNV = arr; //arrSV mảng ở DSNV

        renderListEmployee();

    }
}
//add employee
getElement('#btnThemNV').onclick = function () {
    // console.log(isEmptyForm);
    if (isEmptyForm()) {
        var employee = getThongTinNV()

        dsnv.addEmployee(employee);// add thêm Sinh viên
        renderListEmployee();

        setLocalStorage();
    }

    
}
getElement('#edit').onclick = function () {
   var tb =  document.getElementsByClassName("sp-thongbao")
   tb.style.display = "none";
    
}
function editNV(empUsername) {
    var index = dsnv.getAllEmployeeByUsername(empUsername)

    var nv = dsnv.arrNV[index]
    // đẩy data lên input
    getElement('#tknv').value = nv.username
    getElement('#name').value = nv.name
    getElement('#email').value = nv.email
    getElement('#password').value = nv.password
    getElement('#datepicker').value = nv.workDay
    getElement('#luongCB').value = nv.salary
    getElement('#chucvu').value = nv.office
    getElement('#gioLam').value = nv.workTime
    var employee = getThongTinNV()

    dsnv.updateEmployee(employee)

    renderListEmployee()

    setLocalStorage();
}
// Cập nhật lại nhân viên
getElement('#btnCapNhat').onclick = function () {
    if (isEmptyForm()) {
        // Lấy lại thông tin sinh viên sau khi chỉnh sửa xong
        var employee = getThongTinNV()
        // cập nhật sinh viên
        dsnv.updateEmployee(employee)

        //  render lại UI
        renderListEmployee()    

        // cập nhật data local
        setLocalStorage()
    }
    
}


function deleteNV(xoaNV) {
   
    dsnv.deleteEmployee(xoaNV)
    renderListEmployee();
    setLocalStorage();
}
// ------------------------------------------















// localStorage.clear()