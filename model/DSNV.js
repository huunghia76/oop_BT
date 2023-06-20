function DSNV() {

    this.arrNV = []

    this.addEmployee = function (employee) {
        this.arrNV.push(employee);
    } 
    this.getAllEmployeeByUsername = function (employeeUsername) {
        console.log(this.arrNV);
        for (var i = 0; i < this.arrNV.length; i++) {
            var empUsername = this.arrNV[i].username
            if (empUsername === employeeUsername) {
                return i;
            }
        }
        return -1
    } 
    this.updateEmployee = function ( nv ) {
        var index = this.getAllEmployeeByUsername( nv.username )
        if (index !== -1) {
            this.arrNV[index] = nv ;
        }
    }
    this.deleteEmployee = function (r) {
        var index = -1;
        // Tìm index sv cần xóa
        for (var i = 0; i < this.arrNV.length; i++) {
            var empUsername = this.arrNV[i].username
            if (empUsername === r) {
                index = i;
            }
        }
        // console.log("index: ", index);
        if (index !== -1) {
            this.arrNV.splice(index,1);
        }
    }
    
}