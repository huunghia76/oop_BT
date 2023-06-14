function getElement(selector) {
    return document.querySelector(selector);
}
function getThongTinNV() {

    var _username = getElement('#tknv').value
    var _name = getElement('#name').value
    var _email = getElement('#email').value
    var _pass = getElement('#password').value
    var _workDay = getElement('#datepicker').value
    console.log("_workDay: ", _workDay);
    var _salary = +getElement('#luongCB').value
    var _office = getElement('#chucvu').value
    var _workTime = +getElement('#gioLam').value

    // tạo đối tượng sinh viên từ thông tin lấy từ user

    var employee = new Employee(
        _username, _pass, _name, _email, _workDay, _office, _salary, _workTime
    )

    return employee
}

var dsnv = new DSNV();
getLocalStorage()

function setLocalStorage() {
    var data = JSON.stringify(dsnv.arrNV)

    localStorage.setItem("DSNV", data)
}
getElement('#btnThem').onclick = function () {
    document.getElementById("myForm").reset();
    var date = new Date();
    var DMY = date.getDay() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() 
    getElement('#datepicker').value = DMY;

}
function renderListEmployee() {
    var content = '';

    for (var i = 0; i < dsnv.arrNV.length; i++) {
        var employee = dsnv.arrNV[i];

        content += `<tr>
                        <td>${employee.username}</td>
                        <td>${employee.name}</td>
                        <td>${employee.email}</td>
                        <td>${employee.workDay}</td>
                        <td>${employee.office}</td>
                        <td>${employee.calcTotalSalary()}</td>
                        <td>${employee.calcRank()}</td>
                        <td>
                            <button data-toggle="modal"
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
    console.log(data);
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

    var employee = getThongTinNV()

    dsnv.addEmployee(employee);// add thêm Sinh viên
    renderListEmployee();

    setLocalStorage();
}
function editNV(empUsername){


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
    // Lấy lại thông tin sinh viên sau khi chỉnh sửa xong
    var employee = getThongTinNV()
    // cập nhật sinh viên
    dsnv.updateEmployee(employee)

    //  render lại UI
    renderListEmployee()

    // cập nhật data local
    setLocalStorage()
}


function deleteNV(xoaNV){
    dsnv.deleteEmployee(xoaNV)
    renderListEmployee();
    setLocalStorage();
}
// ------------------------------------------
// Validation
getElement('#tknv').onchange = function () {
    var num 
    console.log('change', num ++);
}
function checkValidatorForm() {
    var bool = false ;
}














// localStorage.clear()