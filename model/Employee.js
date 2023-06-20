function Employee( _username , _pass, _name, _email, _workDay, _office, _salary, _workTime) {
    
    this.username = _username 
    this.password = _pass 
    this.name = _name 
    this.email = _email 
    this.workDay = _workDay 
    this.office = _office 
    this.salary = _salary 
    this.workTime = _workTime

    this.calcTotalSalary = function (office) {
        var salary 
        // console.log('jhefbsn',office);
        if (office === '1') {
            salary =  this.salary * 3
        }
        if (office === '2') {
            salary =  this.salary * 2
        }
        if (office === '3') {
            salary =  this.salary 
        }
        return salary ;
    }
    this.calcRank = function () {
        var xepLoai = '';
        var workTime = this.workTime ;
        
        if (workTime >= 192 ) {
            xepLoai = 'Xuất sắc';
        }else if (workTime >= 176) {
            xepLoai = 'Giỏi';
        }else if (workTime >= 160) {
            xepLoai = 'Khá';
        }else{
            xepLoai = 'Trung bình';
        }

        return xepLoai ;
    }
}